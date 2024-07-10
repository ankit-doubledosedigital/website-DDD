const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    }
});

const imageSchema = new mongoose.Schema({
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
});


module.exports = mongoose.model('Image', imageSchema);
const user = mongoose.model('User', UserSchema);

module.exports = user