const mongoose = require('mongoose');

// Video Schema
const audioUploadSchema = new mongoose.Schema({
    audio: {
        type: String,
    },
    descr: {
        type: String,
    },
}, {
    timestamps: true
});

const audioUpload = mongoose.model('audioUpload', audioUploadSchema);

module.exports = audioUpload;
