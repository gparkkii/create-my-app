const express = require('express');
const router = express.Router();
const { auth } = require("../../middleware/auth");
const { User } = require("../../models/User");

//=================================
//             User
//=================================

router.post('/update', auth, (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate(
        {_id: req.body._id},
        {$set:{
          nickname: req.body.data.nickname,
          url: req.body.data.url,
          userDescription: req.body.data.userDescription,
        }},
        {new: true},
        (err, user) => {
            console.log(err, user);
            if (err) return res.json({
              success: false,
              message: "프로필 수정을 실패하였습니다.",
            })
            return res.status(200).json({
              success: true,
              message: "프로필 수정을 성공하였습니다."
            })
        }
    )
})

router.post('/withdrawal', auth, (req, res) => {
    User.findOne({ _id: req.body._id }, (err, user) => {
        user.comparePassword(req.body.password , (err, isMatch ) => {
            if (!isMatch) return res.json({ changeSuccess: false, message: "비밀번호가 틀렸습니다." })
            else {
              User.deleteOne({_id: req.body._id}, (err, user) => {
                  if(err) return res.status(404).send();
                  else return res.json({ changeSuccess: true });
              });
            } 
        })
    })
})

module.exports = router;