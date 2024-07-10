// src/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';
import './style/Image.css';
import { toast } from 'react-toastify';

const ImageUpload = () => {
  let [image, setImage] = useState(null);
  let [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');

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

    try {
      const response = await axios.post('http://localhost:8080/image', formData);

      if (response.status === 200) {
        setMessage(response.data.message);
        toast.success('Image Upload Successfull');
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

  return (
    <div className="image-upload">
      <form id='uploadForm' onSubmit={handleImageUpload}>
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
        <button type='submit'>Upload</button>
      </form>
      {message && <p id="message">{message}</p>}
    </div>
  );
};

export default ImageUpload;
