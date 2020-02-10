const mongoose = require('mongoose');

const schema = mongoose.Schema;

const User = new schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', User);
