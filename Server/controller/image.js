const imageDao=require('../dao/image');

    module.exports.handleImage=async(req,res)=>{
        try {
            const { description } = req.body;
            const imagePath = req.file.path;
            if (!description || !imagePath) {
                return res.status(400).json({ error: 'Description and audio are required' });
            }
    
            await imageDao.saveImage(description, imagePath);
            
            
    
            return res.status(200).json({ message: 'image upload successful' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'image upload failed' });
        }

    }
    

    
