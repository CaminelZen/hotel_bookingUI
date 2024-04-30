import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Results.css'
import Star from '../Star/Star'

const BASE_URL = 'http://localhost:8000'

const Results = ({ searchResults }) => {

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const [imageUrls, setImageUrls] = useState([])

  const clearFilters = () => {
    // Clear all filter values
    setMinPrice('');
    setMaxPrice('');
    // Reset more filter states here
  };


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
            <label>Star</label>
            <Star />
            <button type='button' className='btn btn-outline-primary btn-sm' style={{ backgroundColor: 'blue', color: 'white' }} onClick={clearFilters} > clear filter </button>
          </div>
        </div>

        <div className="HotelsContainer">
          {filteredResults.map((results, index) => (
            <div className="SearchItemHotel" key={index}>
              <h2 className="HotelName">{results.hotel_name}</h2>
              <div className="HotelInfo">
                <p><span className="Title">Room Number:</span> {results.room_number}</p>
                <p><span className="Title">Bed Size:</span> {results.bed_size}</p>
                <p><span className="Title">Price:</span> {results.price}</p>
                <p><span className="Title">Availability:</span> {results.available ? 'Available' : 'Not Available'}</p>
              </div>
              <div className="ReviewsContainer">
                <p className="ReviewTitle" style={{ fontWeight: "bold" }}>Reviews:</p>
                {results.reviews.map((review, reviewIndex) => (
                  <p className="Review" key={reviewIndex}>{review.text}</p>
                ))}
              </div>
              <div className="RatingsContainer">
                <p className="RatingTitle" style={{ fontWeight: "bold" }}>Ratings: </p>
                {results.ratings.map((rating, ratingIndex) => (
                  <p className="Rating" key={ratingIndex}> {rating.rating}</p>
                ))}
              </div>
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