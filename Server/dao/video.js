const VideoUpload = require('../model/Video-upload');
const User = require('../model/user');

module.exports.saveVideo = async ({description, videoPath,userId}) => {
    const video = new VideoUpload({
        video: videoPath,
        descr: description,
    });
    await video.save();
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.rewards += 20;
    await user.save();
};
    
