import React, { useState } from 'react';
import './style/Contact.css';
import img1 from '../assets/ddd.jpg'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to the backend
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <body>
      <div className="contact-container">
        {/* <img class="center" src={img1} alt="doubledosedigital.com" />
      <div>Contact Us</div> */}
        <div class="image-container">
          <img src={img1} alt="Contact Us" />
          <div class="overlay-text"></div>
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
    </body>
  );
};

export default ContactUs;