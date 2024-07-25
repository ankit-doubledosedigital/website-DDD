const mongoose = require('mongoose');

// Video Schema
const VideoUploadSchema = new mongoose.Schema({
    video: {
        type: String,

    },
    descr: {
        type: String,
        
    },
    rewards: {
        type: Number,
        default: 0
      }
}, {
    timestamps: true
});

const VideoUpload = mongoose.model('VideoUpload', VideoUploadSchema);

module.exports = VideoUpload;
