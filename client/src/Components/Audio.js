import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
import './style/Audio.css'; // Ensure you have a CSS file for styling
import SumbitImage from '../assets/Contact.png'

const Audio = () => {
    const [audio, setAudio] = useState(null);
    const [description, setDescription] = useState('');
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');
    const [rewards, setReward] = useState('0');
    const [submitted, setSubmitted] = useState(false);


    const handleAudioChange = (e) => {
        const file = e.target.files[0]; // Corrected to 'files'
        if (file) {
            setAudio(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAudioUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('audio', audio);
        formData.append('description', description); // Corrected key

        try {
            const response = await axios.post('http://localhost:8080/audio/audios', formData);
            if (response.status === 200) {
                setMessage(response.data.message);
                setReward(rewards + 20);
                setSubmitted(true);
                toast.success('Audio Uploaded Successfully');
                setAudio(null);
                setPreview(null);
                setDescription('');
            } else {
                setMessage(`Error: ${response.data.error}`);
                toast.error('Failed');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the audio.');
            toast.error('Failed');
            console.error('Error:', error);
        }
    };
    

    return (
        <div className='audio-upload'>
            {submitted ? (
                <div className="thank-you-message">
                    <img src={SumbitImage} alt="contact" />
                    <h2>Thank You!</h2>
                    <p>Your Audio has been successfully sent. You've earned {rewards} reward points.</p>
                    <p>Reward Points: {rewards}</p>
                </div>
            ) : (
                <form onSubmit={handleAudioUpload}>
                    <h2>Audio Upload</h2>
                    <input
                        type='file'
                        accept='audio/*'
                        onChange={handleAudioChange}
                    />
                    {preview && (
                        <div className="audio-preview">
                            <audio src={preview} controls />
                        </div>
                    )}
                    <textarea
                        placeholder="Enter audio description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <button type='submit'>Upload</button>
                    {message && <p id="message">{message}</p>}
                </form>
            )}
        </div>
    );
};

export default Audio;
