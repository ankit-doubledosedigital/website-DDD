const ContactMessage = require('../model/contactSchema');

const contactUs = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newContactMessage = new ContactMessage({ name, email, message });
        await newContactMessage.save();
        res.status(200).json({ message: 'Contact message received successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact message' });
    }
};

module.exports = { contactUs };
