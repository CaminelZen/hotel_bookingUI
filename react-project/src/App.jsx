import React, { useState } from 'react';
import './App.css';
import About from '.Components/About.jsx';
//import Cities from '.Components/Cities';
import Help from '.Components/Help';
import Home from '.Components/Home';
import LogIn from '.Components/LogIn';
import Title from '.Components/Title';
import Navbar from '.Components/Navbar';
import Register from '.Components/Register';
import SearchBar from '.Components/SearchBar';


function App() {
  
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
    <Register />
    <LogIn />
    <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
    <Title />
    <SearchBar/>   
  {/*  <Cities/> */}
    <Home />
        
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
