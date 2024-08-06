import React, { useState } from 'react';
// import { toast } from 'react-toastify';
import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import './style/Audio.css'; 

const Audio = () => {
    const [audio, setAudio] = useState(null);
    const [description, setDescription] = useState('');
    const [preview, setPreview] = useState(null);
    // const [message, setMessage] = useState('');

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

    // const handleAudioUpload = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('audio', audio);
    //     formData.append('description', description); // Corrected key


    // };
    const handleAudioUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('audio', audio);
        formData.append('description', description);

        try {
            const response = await axios.post(process.env.REACT_APP_UPLOAD_ROUTE + '/audio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            //  setMessage(response.data.message);
            console.log(response);
            setAudio(null);
            setPreview(null);
            setDescription('');
        } catch (error) {
            console.error('Audio upload failed:', error);
            // setMessage('Audio upload failed');
        }
    };

    return (
        <div className='audio-upload'>
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
                {/* {message && <p id="message">{message}</p>} */}
            </form>
        </div>
    );
};

export default Audio;
