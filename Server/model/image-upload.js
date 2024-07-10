const mongoose = require('mongoose');

// Image Schema
const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const ImageUpload = mongoose.model('ImageUpload', ImageSchema);


module.exports = ImageUpload;
