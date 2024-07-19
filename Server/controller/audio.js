// controllers/audioController.js
const audioDao = require('../dao/audio');

module.exports.handleAudio = async (req, res) => {
    try {
        const { description } = req.body;
        const audioPath = req.file.path;
        if (!description || !audioPath) {
            return res.status(400).json({ error: 'Description and audio are required' });
        }

        await audioDao.saveAudio(description, audioPath);
        
        

        return res.status(200).json({ message: 'Audio upload successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Audio upload failed' });
    }
};

// module.exports.getAllAudios = async (req, res) => {
//     try {
//         const audios = await AudioDAO.getAllAudios();
//         return res.status(200).json(audios);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Failed to fetch audios' });
//     }
// };
