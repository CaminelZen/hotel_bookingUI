import React, { useState } from 'react';
import Logo from '/Logo.png';
import './App.css';
import SearchBar from './components/SearchBar';
import Cities from './components/Cities';
import About from './components/About';
import Help from './components/Help';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ top: 0, behavior: "smooth" });
    }
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        setToken(token);
        console.log('Login Successful');
      } else {
        setErrorMessage('Invalid username or password');
        console.error('Login Failed:', response.statusText);
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in');
      console.error('Login Failed:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        console.log('Signup Successful'); 
        await handleLogin();
      } else {
        setErrorMessage('Failed to create a new account');
        console.error('Signup Failed:', response.statusText);
      }
    } catch (error) {
      setErrorMessage('An error occurred while signing up');
      console.error('Signup Failed:', error);
    }
  };

  const handleLogout = () => {
    setToken(null);
    console.log('Logged out');
  };

  return (
    <>
      <div className="navbar">
        <a href="http://127.0.0.1:8000/hello">Home</a>
        <a href="#about"onClick={() => scrollToSection(true)}>About</a>
        <a href="#help" onClick={() => scrollToSection(true)}>Help</a>
        <a href="#login" onClick={() => setShowLogin(true)}>Log In</a>
        <a href="#signup" onClick={() => setShowSignup(true)}>Sign Up</a>
      </div>
      <section id="home"></section>

      <div className="container">
        <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
        </a>
        <h1 className="title">The Hotel Booking App</h1>
      </div>

     <div><SearchBar /></div>
     <div><Cities /></div>
           
    {/* Login & Signup */}

    {!token && (
        <a href="#login" onClick={() => setShowLogin(true)}>Log In</a>
      )}
      {token && (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}

    {showLogin && (
        <div className="login">
          <div className="login-content">
          <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
          <h2>Log In</h2>
              <div className='input-container'>
              <input type="text" placeholder="Username" value={username} onChange={(username) => setUsername(username.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(email) => setPassword(email.target.value)} />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p className="main-button"><button onClick={handleLogin}>Log In</button></p>
              <p className="other-button">If you do not have an account, please:
              <button onClick={() => setShowSignup(true) & setShowLogin(false)}>Sign Up</button></p>
          </div>
        </div>
      )}
    {showSignup && (
        <div className="login">
          <div className="login-content">
          <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
          <h2>Sign Up</h2>
              <div className='input-container'>
              <input type="text" placeholder="Username" value={username} onChange={(username) => setUsername(username.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(email) => setPassword(email.target.value)} />
              </div>
              <p className="main-button"><button onClick={handleSignup}>Sign Up</button></p>
              <p className="other-button">If you already have an account, please:
              <button onClick={() => setShowLogin(true) & setShowSignup(false)}>Log In</button></p>
              </div>
          </div>
      )}
    
<div>
  <About />
  <Help />
</div>

    </>
  )
}

export default App
