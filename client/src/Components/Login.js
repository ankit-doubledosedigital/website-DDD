import React, { useState } from 'react';
import axios from 'axios';
import './style/Login.css'
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(response)
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Login failed');
    }
    setFormData({
      
      email: '',
      password: '',
      

    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
      <p>
        Not Registered 
        <Link to='/Register'>Register</Link>
      </p>
    </form>
  );
};

export default Login