const express = require('express');
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

module.exports = router;