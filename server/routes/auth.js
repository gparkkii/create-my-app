const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");

//=================================
//             Auth
//=================================

router.get('/', auth , (req, res) => {
  res.status(200).json({   
    isAuth: true,
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    nickname: req.user.nickname,
    profileImage: req.user.profileImage,
    profileImageType: req.user.profileImageType,
    userDescription: req.user.userDescription,
    url: req.user.url,
  })
})

module.exports = router;