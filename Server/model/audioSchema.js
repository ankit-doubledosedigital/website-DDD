const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    audioPath: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Audio', audioSchema);
