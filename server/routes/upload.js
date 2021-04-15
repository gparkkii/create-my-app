const express = require('express');
const multer = require("multer");
const router = express.Router();

//=================================
//      Storage Multer Config
//=================================

let storage = multer.diskStorage({
 destination: (req, file, callback) => {
   callback(null, "uploads/");
 },
 filename: (req, file, callback) => {
   callback(null, `${Date.now()}_${file.originalname}`);
 },
});
const upload = multer({ storage: storage }).single('uploadImage');

//=================================
//   	     uploadImage.js
//=================================

router.post('/', (req, res) => {
  console.log(req.body, req.file);
  upload(req, res, err => {
  console.log(req.body, req.file);
    if (err) {
      return res.status(404).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  })
})


module.exports = router;
