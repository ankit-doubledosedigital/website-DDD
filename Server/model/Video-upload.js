const mongoose = require('mongoose');

// Video Schema
const VideoUploadSchema = new mongoose.Schema({
    video: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const VideoUpload = mongoose.model('VideoUpload', VideoUploadSchema);

module.exports = VideoUpload;
