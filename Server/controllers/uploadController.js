const multer = require('multer');
const Image = require('../model/imageSchema');
const Audio = require('../model/audioSchema');
const Video = require('../model/videoSchema');
const Text = require('../model/textSchema');

// Multer storage configurations
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'images'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const audioStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'audio'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'videos'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const uploadImage = multer({ storage: imageStorage });
const uploadAudio = multer({ storage: audioStorage });
const uploadVideo = multer({ storage: videoStorage });

const uploadImageHandler = async (req, res) => {
    try {
        const file = req.file;
        const description = req.body.description;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const imagePath = file.path;
        const newImage = new Image({ description, imagePath });
        await newImage.save();
        res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Image upload failed' });
    }
};

const uploadAudioHandler = async (req, res) => {
    try {
        const file = req.file;
        const description = req.body.description;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const audioPath = file.path;
        const newAudio = new Audio({ description, audioPath });
        await newAudio.save();
        res.status(200).json({ message: 'Audio uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Audio upload failed' });
    }
};

const uploadVideoHandler = async (req, res) => {
    try {
        const file = req.file;
        const description = req.body.description;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const videoPath = file.path;
        const newVideo = new Video({ description, videoPath });
        await newVideo.save();
        res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Video upload failed' });
    }
};

const uploadTextHandler = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'No text provided' });
        }
        const newText = new Text({ content: text });
        await newText.save();
        res.status(200).json({ message: 'Text uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Text upload failed' });
    }
};

module.exports = {
    uploadImage,
    uploadAudio,
    uploadVideo,
    uploadImageHandler,
    uploadAudioHandler,
    uploadVideoHandler,
    uploadTextHandler,
};
