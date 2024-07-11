import React, { useState } from 'react';
import './style/Text.css';
import axios from 'axios';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Text = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleTextUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('text', text);
        try {
            const response = await axios.post('http://localhost:8080/text', formData);
            if (response.status === 200) {
                setMessage(response.data.message);
                toast.success('Text Uploaded Successfully');
                setText('');
            } else {
                setMessage(`Error: ${response.data.error}`);
            }
        } catch (error) {
            setMessage('An error occurred while uploading the text.');
            console.error('Error:', error);
        }
    };

    return (
        <div className='text-upload'>
            <form onSubmit={handleTextUpload}>
                <h2>Text Upload</h2>
                <input
                    type='text'
                    onChange={handleTextChange}
                    value={text}
                />
                <button type='submit'>Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Text;
