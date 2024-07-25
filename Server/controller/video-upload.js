const videoDao = require('../dao/video');

module.exports.handleVideo = async (req, res) => {
    try {
        const { description} = req.body;
        console.log("🚀 ~ module.exports.handleVideo= ~ req.body:", req.body)
        
        const videoPath = req.file.path;
        console.log("🚀 ~ module.exports.handleVideo= ~ videoPath:", videoPath)
        if (!description || !videoPath) {
            return res.status(400).json({ error: 'Description and audio are required' });
        }

        await videoDao.saveVideo(description, videoPath);
        
        

        return res.status(200).json({ message: 'Video upload successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Video upload failed' });
    }
};