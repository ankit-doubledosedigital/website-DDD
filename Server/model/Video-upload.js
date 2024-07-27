const mongoose = require('mongoose');

// Video Schema
const VideoUploadSchema = new mongoose.Schema({
    video: {
        type: String,

    },
    descr: {
        type: String,
        
    },
}, {
    timestamps: true
});

const VideoUpload = mongoose.model('VideoUpload', VideoUploadSchema);

module.exports = VideoUpload;
