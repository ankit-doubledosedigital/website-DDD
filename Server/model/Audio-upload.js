const mongoose = require('mongoose');

// Video Schema
const audioUploadSchema = new mongoose.Schema({
    audio: {
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

const audioUpload = mongoose.model('audioUpload', audioUploadSchema);

module.exports = audioUpload;
