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
        <a href="#about">About</a>
        <a href="#help">Help</a>
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

      <div className="search-bar">
        <div className="search-inputs">
          <input type="text" className="search-input" placeholder="Search for hotels or destinations" />
          <input type="date" className="date-input" placeholder="Check-in" />
          <input type="date" className="date-input" placeholder="Check-out" />
          <select name="adults" id='' className='input' placeholder="Adults">
              <option value="1">1 adults</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
              <option value="5">5 adults</option>
              <option value="6">6 adults</option>
            </select>
            <select name="children" id='' className='input' placeholder="Children">
              <option value="1">1 child</option>
              <option value="2">2 children</option>
              <option value="3">3 children</option>
              <option value="4">4 children</option>
              <option value="5">5 children</option>
              <option value="6">6 children</option>
            </select>
            <select name="rooms" id='' className='input'placeholder="Rooms">
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6 rooms</option>
            </select>
          </div>
          <button className="search-button">Search</button>
      </div>
    
    <div className='Images'>
     <h3>Popular destinations</h3>
       <div className='row'>
        <div className='image-container'>
           <img src={Amsterdam} alt="Amsterdam" />
          <p>Amsterdam</p>
        </div>
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
            <img src={Delft} alt="Delft" />
            <p>Delft</p>
          </div>
        </div>
      </div>
        
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
    
    <section className='about' id='about'>
        <div className="row">
          <div className="content">
            <h3>About Us</h3>
            <p>At EasyBook, we believe in making travel effortless and enjoyable. Whether you are planning a relaxing getaway, a business trip, or an adventure-filled holiday, we are here to simplify the process of finding the perfect accommodation for your needs.</p>
            <p>Our mission is to provide seamless booking experiences, offering a wide range of hotels, resorts, and other accommodations worldwide. We strive to make travel planning as easy as possible, so you can focus on creating unforgettable memories.</p>
          </div>
        </div>
      </section>
 
      <section className='help' id='help'>
        <div className="row">
          <div className="content">
            <h3>Welcome to the Help Center</h3>
            <p>We are available 24 hours a day</p>
            <p>Contact us at <span className="phone-number">060 542369</span></p>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
