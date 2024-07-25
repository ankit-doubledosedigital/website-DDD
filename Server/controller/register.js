// controllers/registerController.js
const registerDao = require('../dao/register');

module.exports.handleRegisterUser = async (req, res) => {
    try {
        const { username, confirmPassword, email, password } = req.body;
        console.log("🚀 ~ module.exports.handleRegisterUser= ~ req.body:", req.body);
        
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        const user = await registerDao.createUser(username, email, password);
        console.log("🚀 ~ module.exports.handleRegisterUser= ~ user:", user);

        return res.status(200).json({ user: user, message: 'Registration Successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Registration Failed' });
    }
};
