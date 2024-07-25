// src/ImageUpload.js
import React, { useState } from 'react';
import './style/Image.css';
import axios from 'axios';


const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image); // Append the image file to FormData
      formData.append('description', description); // Append the description

      // Make a POST request to the backend endpoint for image upload
      const response = await axios.post('http://localhost:8080/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type header for FormData
        },
      });

      console.log(response.data); // Log the response from the server
      // Optionally handle success or show a success message
    } catch (error) {
      console.error('Image upload failed:', error);
      // Handle error state or show an error message
    }

    // Clear form state after submission
    setImage(null);
    setPreview(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <div className="image-upload">
          <h2>Upload  Image</h2>
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

        </div>
        <button>Submit</button>
      </>
    </form>
  );
};

export default ImageUpload;
