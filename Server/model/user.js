const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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


UserSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        user.confirmPassword = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


const user = mongoose.model('User', UserSchema);

module.exports = user
