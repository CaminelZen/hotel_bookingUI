import Logo from '/Logo.png'
import './App.css'
import { openModal, closeModal, openSignupModal } from './assets/util'

function App() {
  return (
    <>
      <div className="container">
          <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
          </a>
          <h1 className="title">The Hotel Booking App</h1>
      </div>
      <div className="search-bar">
        <div className="search-inputs">
         <input type="text" className="search-input" placeholder="Search for hotels, destinations, or properties"/>
         <input type="text" className="date-input" placeholder="Check-in"/>
         <input type="text" className="date-input" placeholder="Check-out"/>
         <input type="number" className="guests-input" placeholder="Guests"/>
         <button className="search-button">Search</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Search button to look for a hotel
      </p>

<div id="loginModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick="closeModal('loginModal')">&times;</span>
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username"/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"/>
      <button type="submit">Login</button>
    </form>
    <a href="#" onClick="openSignupModal()">Sign-up</a>
  </div>
</div>

<div id="signupModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick="closeModal('signupModal')">&times;</span>
    <h2>Sign-up</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username"/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"/>
      <button type="submit">Sign-up</button>
      <a href="#">Sign up with Google</a>
    </form>
  </div>
</div>

<button onClick="openModal('loginModal')">Log In</button>

    </>
  )
}

export default App
