// import dependencies
require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
// const { validate } = require('../../model/User');
const {
  regValidation,
  loginValidation
} = require('../../middleware/validator');
const jwt = require('jsonwebtoken');
const { User } = require('../../model/User');

router.get('/', (req, res) => {
  res.send('you have been able to reach the user routes');
});
/**
 @route POST api/users/register
 @desc Register user
 @access Public
 */

router.post('/register', async (req, res) => {
  const { error } = regValidation(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });
  if (req.body.isLecturer == null) {
    req.body.isLecturer - false;
  }
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res.status(400).json({
      msg: 'A user is already user this email Please select a new email'
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
    userId: req.body.userId,
    isAdmin: req.body.isAdmin,
    isLecturer: req.body.isLecturer
  });
  const token = jwt.sign(
    {
      _id: newUser._id,
      username: newUser.username,
      isLecturer: newUser.isLecturer,
      isAdmin: newUser.isAdmin
    },
    process.env.secretOrKey
  );
  try {
    const saveUser = await newUser.save();
    res.json({ user: newUser, token: token, msg: 'success' });
  } catch (error) {
    console.log(error);
    res.status(400).send('error');
  }
});

/** 
 @route POST api/users/login
 @desc Login user and return JWT token
 @access Public
  */
router.post('/login', async (req, res) => {
  //Form validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  const email = req.body.email;
  const username = req.body.username;
  const userId = req.body.userId;
  const password = req.body.password;
  // Find user by email

  let conditions = username
    ? { username: username }
    : email
    ? { email: email }
    : { userId: userId };

  User.findOne(conditions).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ msg: 'Email not found' });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          username: user.username,
          isLecturer: user.isLecturer,
          isAdmin: user.isAdmin
        };
        // Sign token
        jwt.sign(
          payload,
          process.env.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});
module.exports = router;
