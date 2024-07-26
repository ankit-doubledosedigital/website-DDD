import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './style/Video.css';
import SumbitImage from '../assets/Contact.png'


const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [description, setDescription] = useState('');
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [submitted,setSubmitted]=useState(false);
    const [rewards,setReward]=useState(0);

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
        console.log("🚀 ~ handleVideoUpload ~ description:", description)
        console.log("🚀 ~ handleVideoUpload ~ video:", video)
        try {
            const response = await axios.post('http://localhost:8080/video/', formData);
            if (response.status === 200) {
                setMessage(response.data.message);
                setReward(rewards+20);
                console.log("🚀 ~ handleVideoUpload ~ response.data:", response.data)
                toast.success('Video Uploaded Successfully');
                
                setVideo(null);
                setPreview(null);
                setDescription('');
                setReward('')
            } else {
                setMessage(`Error: ${response.data.error}`);
                toast.error('failed');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the video.');
            toast.error('failed');
            console.error('Error:', error);
        }
    };
    const handleNewUpload = () => {
        setSubmitted(false);
        setMessage('');
        
        setVideo(null); // Clear the image state
        setDescription(''); // Clear the description state
        setPreview(null);
    
      };

    return (
        <div className='video-upload'>
             {submitted ? (
                <div className="thank-you-message">
                    <img src={SumbitImage} alt="contact" />
                    <h2>Thank You!</h2>
                    <p>Your Video has been successfully Upload. You've earned {rewards} reward points.</p>
                    <p>Reward Points: {rewards}</p>
                    <button onClick={handleNewUpload}>Upload Another Video</button>

                </div>
            ) : (

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
            )}
            {message && <p id="message">{message}</p>}
        </div>
    );
};

export default VideoUpload;
