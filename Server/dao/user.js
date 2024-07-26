const User = require('../model/user')
const bcrypt = require('bcrypt');



const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const validatePassword = async (user, password) => {
    if (!user) {
        return false;
    }
    return await bcrypt.compare(password, user.password);
};

module.exports = {
    findUserByEmail,
    validatePassword,
};



