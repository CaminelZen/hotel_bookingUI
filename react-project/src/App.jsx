
import { useState } from 'react';
import Logo from '/Logo.png';
import './App.css';

import About from './Components/About';
import Help from './Components/Help';
import Cities from './Components/Cities';
import SearchBar from './Components/SearchBar';



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

  const handleLogin = () => {
    // login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Close the modal after handling login
    setShowLogin(false);
  };

  const handleSignup = () => {
    // sign-up logic here
    console.log('Sign up');
    // Close the modal after handling sign-up
    setShowSignup(false);
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

    <SearchBar/>
    
   <Cities />
        
    {/* Login & Signup */}
    {showLogin && (
        <div className="login">
          <div className="login-content">
          <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
          <h2>Log In</h2>
              <div className='input-container'>
              <input type="text" placeholder="Username" value={username} onChange={(username) => setUsername(username.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(email) => setPassword(email.target.value)} />
              </div>
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
    
    <About />
    <Help />


    </>
  )
}

export default App
