import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctEmail = 'jhansi@gmail.com';
  const correctPassword = 'lakshmi';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem('token', 'dummy-jwt-token');
      navigate('/Admin-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      {/* Left Section for Welcome Message */}
      <div className="left">
        <div className="welcome-message">
          <h1>Welcome Back!</h1>
          <p>Please log in to continue</p>
        </div>
      </div>
      
      {/* Right Section for Login Form */}
      <div className="right">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
