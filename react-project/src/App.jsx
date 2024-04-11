import React from 'react'
import { useState } from 'react';
import Logo from '/Logo.png';
import './App.css';
import Delft from '/Delft.jpg';
import Eindhoven from '/Eindhoven.jpg';
import Maastricht from '/Maastricht.jpg';
import Rotterdam from '/Rotterdam.jpg';
import DenHaag from '/DenHaag.jpg';
import Amsterdam from '/Amsterdam.jpg';



function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Close the modal after handling login
    setShowLogin(false);
  };

  const handleSignUp = () => {
    // sign-up logic here
    console.log('Sign up');
    // Close the modal after handling sign-up
    setShowLogin(false);
  };

  return (
    <>
      <div className="navbar">
        <a href="http://127.0.0.1:8000/hello">Home</a>
        <a href="#about">About</a>
        <a href="#help">Help</a>
        <a href="#login" onClick={() => setShowLogin(true)}>Login</a>
        <a href="#signup">Signup</a>
      </div>
      <div className="container">
        <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
        </a>
        <h1 className="title">The Hotel Booking App</h1>
      </div>
      <div className="search-bar">
        <div className="search-inputs">
          <input type="text" className="search-input" placeholder="Search for hotels or destinations" />
          <input type="text" className="date-input" placeholder="Check-in" />
          <input type="text" className="date-input" placeholder="Check-out" />
          <input type="number" className="guests-input" placeholder="Guests" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Search button to look for a hotel
      </p>

     <h3>Popular destinations</h3><br/>
     <div className='Images'>
        <div className='row'>
        <div className='image-container'>
           <img src={Delft} alt="Delft" />
          <p>Delft</p>
        </div>
        <div className='image-container'>
          <img src={Eindhoven} alt="Eindhoven" />
          <p>Eindhoven</p>
        </div>
        <div className='image-container'>
          <img src={Rotterdam} alt="Rotterdam" />
          <p>Rotterdam</p>
        </div>
      </div>
        <div className='row'>
          <div className='image-container'>
            <img src={DenHaag} alt="The Hague" />
            <p>The Hague</p>
          </div>
        <div className='image-container'>
          <img src={Maastricht} alt="Maastricht" />
          <p>Maastricht</p>
        </div>
        <div className='image-container'>
          <img src={Amsterdam} alt="Amsterdam" />
          <p>Amsterdam</p>
        </div>
      </div>
    </div>
    
    {/* Modal */}
    {showLogin && (
        <div className="login">
          <div className="login-content">
          <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
          <h2>Login</h2>
              <div className='input-container'>
              <input type="text" placeholder="Username" value={username} onChange={(username) => setUsername(username.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={(email) => setPassword(email.target.value)} />
              </div>
              <div className="login-buttons">
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleSignUp}>Signup</button>
              </div>
          </div>
        </div>
      )}

    </>
  )
}

export default App
