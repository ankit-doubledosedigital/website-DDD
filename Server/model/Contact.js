const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
}, {
  timestamps: true // Automatically create createdAt and updatedAt fields
});

// Create the model from the schema
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
