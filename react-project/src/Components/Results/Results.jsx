import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Results.css'


const BASE_URL = 'http://localhost:8000'

const Results = ({ searchResults }) => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

const[imageUrls, setImageUrls] = useState([])


useEffect(() => {
  if (searchResults && searchResults.length > 0) {
    const urls = searchResults.map(results => {
      if (results.image_url_type === 'absolute') {
        return results.image_url;
      } else {
        return BASE_URL + results.image_url;
      }
    });
    setImageUrls(urls);
    setFilteredResults(searchResults);
  }
}, [searchResults]);
useEffect(() => {
  // Filter results based on min and max price
  const filtered = searchResults.filter(result => {
    const price = result.price;
    return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
  });
  setFilteredResults(filtered);
}, [searchResults, minPrice, maxPrice]);

const handleFilterChange = () => {
  // Apply filter when filter values change
  setMinPrice(Math.max(0, minPrice));
  setMaxPrice(Math.max(0, maxPrice));
};

return (
  <section>
    <p className='FilterTitle'>Filter by:</p>
    <div className="ResultsContainer">
      <div className="FilterContainer">
        <div className="FilterSection">
          
          <label>Min Price:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            onBlur={handleFilterChange}
          />
          <label>Max Price:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            onBlur={handleFilterChange}
          />
        </div>
      </div>

      <div className="HotelsContainer">
        {filteredResults.map((results, index) => (
          <div className="SearchItemHotel" key={index}>
            <h2 className="HotelName">{results.hotel_name}</h2>
            <p className="RoomNumber">Room Number: {results.room_number}</p>
            <p className="BedSize">Bed Size: {results.bed_size}</p>
            <p className="Price">Price: {results.price}</p>
            <p className="Availability">Availability: {results.available}</p>
            <p className="Review">Review: {results.review}</p>
            <p className="Rating">Rating: {results.rating}</p>
            <img className="RoomImg" src={imageUrls[index]} alt={`Room ${index}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

Results.propTypes = {
searchResults: PropTypes.array.isRequired,
};

export default Results;