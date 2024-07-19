// dao/audioDAO.js
const AudioUpload = require('../model/Audio-upload');

module.exports.saveAudio = async ({description, audioPath}) => {
    const audio = new AudioUpload({
        audio: audioPath,
        descr: description,
        rewards: '',
    });
    audio.rewards = (audio.rewards || 0) + 20;
    await audio.save();
};

// module.exports.getAllAudios = async () => {
//     return await AudioUpload.find();
// };
