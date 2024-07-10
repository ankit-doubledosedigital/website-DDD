// src/ImageUpload.js
import React, { useState } from 'react';
import './style/Image.css';

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

  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const response = fetch('http://localhost:3000/api/auth/image'),{
    //     method: "POST",
    //     headers:{
    //       'Content-Type':"application/json",

    //     }

    //   }
  }

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
