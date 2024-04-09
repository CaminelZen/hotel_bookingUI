import Logo from '/Logo.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
          <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
          </a>
          <h1 className="title">EasyBook - The Hotel Booking App</h1>
      </div>
      
      <div className="search-bar">
         <input type="text" className="search-input" placeholder="Search for hotels, destinations, or properties"/>
         <button className="search-button">Search</button>
      </div>
      
      <p className="read-the-docs">
        Click on the Search button to look for a hotel
      </p>
    </>
  )
}

export default App
