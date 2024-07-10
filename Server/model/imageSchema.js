const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
});
const imageschema = mongoose.model('Image', imageSchema);
module.exports = imageschema