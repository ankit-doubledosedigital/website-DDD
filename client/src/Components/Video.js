import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './style/Video.css';

const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [description, setDescription] = useState('');
    const [preview, setPreview] = useState(null);
    // const [message, setMessage] = useState('');

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideo(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleVideoUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', video);
        formData.append('description', description);
        
    };

    return (
        <div className='video-upload'>
            <form onSubmit={handleVideoUpload}>
                <h2>Video Upload</h2>
                <input
                    type='file'
                    accept='video/*'
                    onChange={handleVideoChange}
                />
                {preview && (
                    <div className="video-preview">
                        <video src={preview} controls />
                    </div>
                )}
                <textarea
                    placeholder="Enter video description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <button type='submit'>Upload</button>
            </form>
            {/* {message && <p id="message">{message}</p>} */}
        </div>
    );
};

export default VideoUpload;