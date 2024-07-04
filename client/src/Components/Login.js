import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    // Mock authentication - Replace with actual logic
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Logged in successfully!');
      setError('');
      setUsername('');
      setPassword('');
    } else {
      // Failed login
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p>
            Not Registered</p>
            <Link to='/Register'>Register</Link> 
        
      </form>
    </div>
  );
};

export default LoginForm;
