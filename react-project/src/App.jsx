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
     <h3>Explore Netherlands</h3>
       <div className='row'>
        <div className='image-container'>
           <img src={Amsterdam} alt="Amsterdam" />
          <p>Amsterdam</p>
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
