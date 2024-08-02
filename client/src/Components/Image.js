// src/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './style/Image.css';
import { toast } from 'react-toastify';
import SubmitImage from '../assets/Contact.png'; // Fixed typo from "SumbitImage" to "SubmitImage"

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [rewards, setRewards] = useState(localStorage.getItem('rewards') || 0);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('userId', localStorage.getItem('userId'));

    try {
      const response = await axios.post('http://localhost:8080/image', formData);

      if (response.status === 200) {
        setMessage(response.data.message);
        const newRewards = parseInt(rewards) + 20; // Add 20 points to reward
        setRewards(newRewards);
        setSubmitted(true);
        
        toast.success('Image Uploaded Successfully');
        localStorage.setItem('rewards', newRewards);

        setImage(null); // Clear the image state
        setDescription(''); // Clear the description state
        setPreview(null);

      } else {
        setMessage(`Error: ${response.data.error}`);
      }
    } catch (error) {
      setMessage('An error occurred while uploading the image.');
      console.error('Error:', error);
    }
  };

  const handleNewUpload = () => {
    setSubmitted(false);
    setMessage('');
    setImage(null); // Clear the image state
    setDescription(''); // Clear the description state
    setPreview(null);
  };

  return (
    <div className="image-upload">
      {submitted ? (
        <div className="thank-you-message">
          <img src={SubmitImage} alt="contact" />
          <h2>Thank You!</h2>
          <p>Your image has been successfully sent. You've earned reward points.</p>
          <p>Reward Points: {rewards}</p>
          <button onClick={handleNewUpload}>Upload Another Image</button>
        </div>
      ) : (
        <form id="uploadForm" onSubmit={handleImageUpload}>
          <h2>Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
          <textarea
            placeholder="Enter image description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <div className="image-info">
            {image && <p>File name: {image.name}</p>}
            {description && <p>Description: {description}</p>}
          </div>
          <button type="submit">Upload</button>
        </form>
      )}
      {message && <p id="message">{message}</p>}
    </div>
  );
};

export default ImageUpload;
