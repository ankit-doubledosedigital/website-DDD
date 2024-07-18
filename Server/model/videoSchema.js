const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    videoPath: {
        type: String,
        required: true,
    },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
