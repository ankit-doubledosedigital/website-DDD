import React, { useState } from 'react';
import './style/Contact.css';
import img1 from '../assets/ddd.jpg'
import axios from 'axios';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    // Here you can handle form submission, e.g., send data to the backend
    try {
      const response = await axios.post('http://localhost:8080/contactus', formData, {
        headers: {
          'Content-Type': 'application/json', // Set content type header for FormData
        },
      });

      console.log(response.data);
    }
    catch (error) {
      console.error('Contact us failed:', error);
    }

    console.log(formData);
    setSubmitted(true);
  };

  return (

    <div className="contact-container">
      {/* <img className="center" src={img1} alt="doubledosedigital.com" />
      <div>Contact Us</div> */}
      <div className="image-container">
        <img src={img1} alt="Contact Us" />
        <div className="overlay-text"></div>
      </div>
      {submitted ? (
        <p>Thank you for your message. We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>

  );
};

export default ContactUs;