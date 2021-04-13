const express = require('express');
const router = express.Router();
const { User } = require("../../models/User");

//=================================
//             Login
//=================================

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    console.log(req.body);
    if (!user) {
      return res.json({
        success: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
    user.comparePassword(req.body.password , (err, isMatch ) => {
      if (!isMatch)
      return res.json({ success: false, message: "비밀번호가 틀렸습니다."})

      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        res.cookie("x_authExp", user.tokenExp);
        res.cookie('x_auth', user.token)
        .status(200)
        .json({ success: true, userId: user._id })
      })
    })
  })
});

module.exports = router;