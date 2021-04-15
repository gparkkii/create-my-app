const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { User } = require("../../models/User");

//=================================
//             SignUp
//=================================

router.post('/', (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  user.save((err, user) => {
    console.log(err);
    if (err) return res.json({
      success: false,
      message: "회원가입에 실패하였습니다.",
    })
    return res.status(200).json({
      success: true,
      message: "회원가입에 성공하였습니다."
    })
  })
});

router.post('/checkEmail', (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(user);
    if(user) return res.json({
      success: false,
      message: "이미 가입된 이메일입니다."
    });
    else {
      var hashedEmail = crypto.createHash('md5').update(req.body.email).digest('hex');
      return res.status(200).json({
        success: true,
        message: "사용 가능한 이메일입니다.",
        hashedEmail: hashedEmail
      })
    }
  })
})


module.exports = router;