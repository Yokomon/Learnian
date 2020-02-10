const router = require('express').Router();
/**
 @route GET api/items
 @desc  GET all items
 @access Public
 */
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(item => res.json(item));
});
