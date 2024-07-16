import React, { useState } from 'react';
import axios from 'axios';
import './style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
      console.log(response);
      setMessage(response.data.message);
      if (response.data.success) {
        toast.success
        ('Login successful');
        navigate('/home'); // Navigate to the desired page on successful login
      } else {
        toast.success(response.data.message);
        localStorage.setItem('name',response.data.user.username);
        localStorage.setItem('email',response.data.user.email);
        navigate('/home'); // Navigate to the /image route
      }
    } catch (error) {
      setMessage('Login failed');
      toast.error('Login failed');
    }
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Login Page</h2>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
      <p>
        Not Registered? <Link className='link' to='/Register'>Register</Link>
      </p>
    </form>
  );
};

export default Login;
