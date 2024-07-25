// dao/registerDao.js
const User = require('../model/user');

module.exports.createUser = async (username, email, password) => {
    const newUser = new User({
        username,
        email,
        password
    });
    await newUser.save();
    return newUser;
};

