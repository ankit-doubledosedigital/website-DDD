const contactDAO = require('../dao/contact');

module.exports.handleContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await contactDAO.saveContact({ name, email, message });
    res.status(200).json({ message: 'Contact successful' });
  } catch (error) {
    res.status(400).json({ message: 'Contact failed' });
  }
};
