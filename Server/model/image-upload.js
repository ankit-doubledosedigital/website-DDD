const mongoose = require('mongoose');

// Image Schema
const ImageSchema = new mongoose.Schema({
    image: {
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

const ImageUpload = mongoose.model('ImageUpload', ImageSchema);


module.exports = ImageUpload;
