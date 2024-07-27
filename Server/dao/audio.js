// dao/audioDAO.js
const AudioUpload = require('../model/Audio-upload');
const User = require('../model/user');


module.exports.saveAudio = async ({description, audioPath,userId}) => {
    const audio = new AudioUpload({
        audio: audioPath,
        descr: description,
    });
    await audio.save();
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.rewards += 20;
    await user.save();
   
};

// module.exports.getAllAudios = async () => {
//     return await AudioUpload.find();
// };
