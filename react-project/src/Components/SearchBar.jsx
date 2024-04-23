import './SearchBar.css';

export default function SearchBar () {
    return(
        <div className="search-bar">
        <div className="search-inputs">
          <div className="row">
            <input type="text" className="search-input" placeholder="Search for hotels or destinations" />
            <input type="date" className="date-input" placeholder="Check-in" />
            <input type="date" className="date-input" placeholder="Check-out" />
          </div>
          <div className="row">
            <select name="adults" id='' className='input' placeholder="Adults">
              <option value="1">1 adult</option>
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
            <select name="rooms" id='' className='input' placeholder="Rooms">
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="6">6 rooms</option>
            </select>
          </div>
          </div>
        <button className="search-button">Search</button>
        </div>
    )
}