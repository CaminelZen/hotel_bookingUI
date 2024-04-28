import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Results.css'


const BASE_URL = 'http://localhost:8000'

const Results = ({ searchResults }) => {

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
  }
}, [searchResults]);


  return (
    <section>
    {searchResults.map((results, index) => (
    <div className="SearchItemHotel" key={index}>
        <h2 className="HotelName">{results.hotel_name}</h2>
        <p className="RoomNumber">Room Number: {results.room_number}</p>
        <p className="BedSize">Bed Size: {results.bed_size}</p>
        <p className="Price">Price: {results.price}</p>
        <p className="Availability">Availability: {results.available}</p>
        <p className="Review">Review: {results.review}</p>
        <p className="Rating">Rating: {results.rating}</p>
        <img className="RoomImg" src={imageUrls[index]}/>
    </div>
))}
</section>
  );
};

Results.propTypes = {
    searchResults: PropTypes.array.isRequired
};

export default Results;