const ImageUpload = require('../model/image-upload');
const User = require('../model/user');

module.exports.saveImage = async ({description, imagePath,userId}) => {
    const image = new ImageUpload({
        image: imagePath,
        descr: description,
    });
    await image.save();
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.rewards += 20;
    await user.save();
};