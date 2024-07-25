const Text = require('../model/text-upload');
const User = require('../model/user');

module.exports.saveText = async ({ text,userId }) => {
    const data = new Text({ text });
    data.rewards = (data.rewards || 0) + 20;
    await data.save();

    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.rewards += 20;
    await user.save();
   

}
