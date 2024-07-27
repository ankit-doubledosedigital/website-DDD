const mongoose = require('mongoose');

// Image Schema
const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
        
    },
    descr: {
        type: String,
    
    },
}, {
    timestamps: true
});

const ImageUpload = mongoose.model('ImageUpload', ImageSchema);


module.exports = ImageUpload;
