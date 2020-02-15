const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: false
  },

  isLecturer: {
    type: Boolean,
    required: false
  },
  isAdmin: {
    type: Boolean,
    required: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});
// UserSchema.methods.generateAuthToken = function() {
//   const token = jwt.sign(
//     {
//       _id: this._id
//     },
//     'somethingnice'
//   );
//   return token;
// };

// function validateUser(user) {
//   const schema = Joi.object({
//     username: Joi.string().required(),
//     email: Joi.string()
//       .required()
//       .email(),
//     password: Joi.string()
//       .min(3)
//       .max(1029)
//       .required()
//   });
//   return schema.validate(user);
// }

const User = mongoose.model('User', UserSchema);
module.exports.User = User;
// module.validateUser = validateUser;
