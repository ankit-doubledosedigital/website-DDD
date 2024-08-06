const express = require('express');
const {
    uploadImage,
    uploadAudio,
    uploadVideo,
    uploadImageHandler,
    uploadAudioHandler,
    uploadVideoHandler,
    uploadTextHandler,
} = require('../controllers/uploadController');
const router = express.Router();

router.post('/image', uploadImage.single('image'), uploadImageHandler);
router.post('/audio', uploadAudio.single('audio'), uploadAudioHandler);
router.post('/video', uploadVideo.single('video'), uploadVideoHandler);
router.post('/text', uploadTextHandler);

module.exports = router;
