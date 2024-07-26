const userDao = require('../dao/user');

module.exports.login = async (email, password) => {
    const user = await userDao.findUserByEmail(email);
    console.log("🚀 ~ module.exports.login= ~ user:", user)
    if (!user) {
        throw new Error('Invalid username or password');
    }
    const isMatch = await userDao.validatePassword(user, password);
    if (!isMatch) {
        throw new Error('Invalid username or password');
    }
    return user;
};

module.exports.handleUserData = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🚀 ~ module.exports.handleUserData= ~ req.body:", req.body)
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const user = await module.exports. login(email, password);
        console.log("🚀 ~ module.exports.handleUserData= ~ user:", user);
        return res.status(200).json({ user: user });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Login failed' });
    }
};

 
module.exports.getUserData = async (req, res) => {
    try {
        const { userId } = req.query;
        let user = await userDao.getUserData(userId);
        return res.status(200).json({ user: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: ' failed' });
    }
};
