// dao/contactDAO.js
const Contact = require('../model/Contact'); // Make sure the path to your Contact model is correct

module.exports.saveContact = async ({ name, email, message }) => {
    const contact = new Contact({ name, email, message });
    contact.rewards = (contact.rewards || 0) + 20;
    await contact.save();
};


