const router = require('express').Router();
/**
 @route GET api/items
 @desc  GET all items
 @access Public
 */
router.get('/', (req, res) => {
  res.send(
    'hello guys ... i am working ...and i know u know that u should be checking proxy/api/users'
  );
});
module.exports = router;
