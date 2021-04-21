const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
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
  hashedEmail: { type: String },
  nickname: {
    type: String,
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

userSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }
})

userSchema.methods.comparePassword = function(plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  })
}

userSchema.methods.generateToken = function(callback) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), 'secretToken');
  user.token = token;
  user.save(function(err, user) {
    if (err) return callback(err);
    callback(null, user);
  })
}

userSchema.statics.findByToken = function(token, callback) {
  var user = this;
  jwt.verify(token, 'secretToken', function(err, decoded) {
    user.findOne({ "_id" : decoded, "token" : token }, function(err, user) {
      if (err) return callback(err);
      callback(null, user);
    })
  })
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};