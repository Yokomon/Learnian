const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    required: true
  },
  passoword: {
    type: String,
    required: true
  },
  UserId: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  isLecturer: {
    type: Boolean,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
