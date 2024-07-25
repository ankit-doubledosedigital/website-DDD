const ImageUpload = require('../model/image-upload');

module.exports.saveImage = async ({description, imagePath}) => {
    const image = new ImageUpload({
        image: imagePath,
        descr: description,
        rewards: '',
    });
    image.rewards = (image.rewards || 0) + 20;
    await image.save();
};