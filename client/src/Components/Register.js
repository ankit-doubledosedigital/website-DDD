import React, { useState } from 'react';
import './style/Register.css';
import axios from 'axios';


const Registration = () => {
  const [registerData, setregisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setregisterData({
      ...registerData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!registerData.username) errors.username = 'Username is required';
    if (!registerData.email) errors.email = 'Email is required';
    if (!registerData.password) errors.password = 'Password is required';
    if (registerData.password !== registerData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_AUTH_ROUTE);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data to the server or handle it as needed
      console.log('Form data submitted:', registerData);
    }
    try {
      const response = await axios.post(process.env.REACT_APP_AUTH_ROUTE + '/register', registerData);
      console.log(response.data);

    } catch (error) {
      console.log(error);

    }
    setregisterData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''

    })
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div>
        <h1>Registration Form</h1>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={registerData.username}
          onChange={handleRegisterChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Register</button>

    </form>
  );
};

export default Registration;