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

      <section className='availability'>

        <form action=''>

          <div className="box">
            <p> check in <span>*</span></p>
            <input type="date" className='input' />
          </div>

          <div className="box">
            <p> check out <span>*</span></p>
            <input type="date" className='input' />
          </div>

          <div className="box">
            <p> adults <span>*</span></p>
            <select name="adults" id='' className='input'>
              <option value="1">1 adults</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
              <option value="5">5 adults</option>
              <option value="6">6 adults</option>
            </select>
          </div>

          <div className="box">
            <p> children <span>*</span></p>
            <select name="children" id='' className='input'>
              <option value="1">1 child</option>
              <option value="2">2 children</option>
              <option value="3">3 children</option>
              <option value="4">4 children</option>
              <option value="5">5 children</option>
              <option value="6">6 children</option>
            </select>
          </div>

          <div className="box">
            <p> rooms <span>*</span></p>
            <select name="rooms" id='' className='input'>
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6 rooms</option>
            </select>
          </div>
          <button className="search-button">Search</button>
        </form>
      </section>

     <div className='Images'>
     <h3>Popular destinations</h3>
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
            <img src={Delft} alt="Delft" />
            <p>Delft</p>
          </div>
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
    </>
  )
}

export default App
