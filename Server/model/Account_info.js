// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
});

const Account_info = mongoose.model('Account_info', userSchema);

module.exports = Account_info;
