import React, { useState } from 'react';
import './style/Contact.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ContactImage from '../assets/Contact.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [rewards, setRewards] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/Contact', formData);
      console.log(response.data);
      toast.success('Message sent successfully!');
      setRewards(rewards + 20); // Assuming each submission adds 20 reward points
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <div className="thank-you-message">
          <img src={ContactImage} alt="contact" />
          <h2>Thank You!</h2>
          <p>Your message has been successfully sent. We will get back to you shortly.</p>
          <p>Reward Points: {rewards}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <h1>Contact Us</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label> 
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
