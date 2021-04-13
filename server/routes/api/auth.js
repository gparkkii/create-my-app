const express = require('express');
const router = express.Router();
const { auth } = require("../../middleware/auth");

//=================================
//             Auth
//=================================

router.get('/', auth , (req, res) => {
  res.status(200).json({   
    isAuth: true,
    _id: req.user._id,
    name: req.body.name,
    email: req.user.email,
    password: req.user.password,
    profileImage: req.user.profileImage,
    profileImage: req.user.profileImageType,
    nickname: req.user.nickname,
    description: req.body.userDescription,
    url: req.user.url
  })
})

module.exports = router;