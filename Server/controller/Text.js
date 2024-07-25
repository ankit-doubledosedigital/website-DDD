const textDao=require('../dao/Text');

module.exports.handleText = async (req, res) => {
    try {
      const { text } = req.body;
      const {userId} = req.body;
      await textDao.saveText({ text,userId });
      res.status(200).json({ message: 'Contact successful' });
    } catch (error) {
      res.status(400).json({ message: 'Contact failed' });
    }
  };