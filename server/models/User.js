const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 12,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    minlength: 1,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  profileImage: { type: String },
  profileImageType: { type: String },
  nickname: {
    type: String,
    minlength: 2,
    maxlength: 12,
    required: true,
  },
  userDescription: {
    type: String,
    maxlength: 100,
  },
  url: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number,
  }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};