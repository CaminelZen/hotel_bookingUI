import Logo from '/Logo.png'
import './App.css'
import Delft from '/Delft.jpg'
import Eindhoven from '/Eindhoven.jpg'
import Maastricht from '/Maastricht.jpg'
import Rotterdam from '/Rotterdam.jpg'
import DenHaag from '/DenHaag.jpg'
import Amsterdam from '/Amsterdam.jpg'



function App() {
  return (
    <>
      <div className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#room">room</a>
        <a href="#review">review</a>
      </div>
      <div className="container">
        <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
        </a>
        <h1 className="title">The Hotel Booking App</h1>
      </div>
      <div className="search-bar">
        <div className="search-inputs">
          <input type="text" className="search-input" placeholder="Search for hotels, destinations, or properties" />
          <input type="text" className="date-input" placeholder="Check-in" />
          <input type="text" className="date-input" placeholder="Check-out" />
          <input type="number" className="guests-input" placeholder="Guests" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Search button to look for a hotel
      </p>

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
          <img src={Amsterdam} alt="Amsterdam" />
          <p>Amsterdam</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
