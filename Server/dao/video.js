const VideoUpload = require('../model/Video-upload');

module.exports.saveVideo = async ({description, videoPath}) => {
    const video = new VideoUpload({
        video: videoPath,
        descr: description,
        rewards: '',
    });
    video.rewards = (video.rewards || 0) + 20;
    await video.save();
};
    
