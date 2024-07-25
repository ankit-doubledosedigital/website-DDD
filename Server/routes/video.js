const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const VideoController = require('../controller/video-upload');

const router = express.Router();

// Ensure the directory exists
const uploadDir = path.join(__dirname, '..', 'video-uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Setup multer for audio uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});
const videoUpload = multer({ storage: storage });

router.post('/', videoUpload.single('video'), VideoController.handleVideo);
// router.get('/audios', AudioController.getAllAudios);

module.exports = router;
