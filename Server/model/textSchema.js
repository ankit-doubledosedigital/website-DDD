const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
});

const Text = mongoose.model('Text', textSchema);
module.exports = Text;
