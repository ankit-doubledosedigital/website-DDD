const mongoose = require('mongoose');

// Text Schema
const TextSchema = new mongoose.Schema({
    text: {
        type: String, // Corrected the type to String
        required: true,
    },
}, {
    timestamps: true
});

const TextUpload = mongoose.model('TextUpload', TextSchema);

module.exports = TextUpload;
