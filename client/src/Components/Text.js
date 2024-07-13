import React, { useState } from 'react';
// import './style/Text.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Text = () => {
    const [text, setText] = useState('');
    // const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleTextUpload = async (e) => {
        e.preventDefault();
        
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
            {/* {message && <p>{message}</p>} */}
        </div>
    );
};

export default Text;