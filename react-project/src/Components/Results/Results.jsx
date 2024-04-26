import PropTypes from 'prop-types';


const Results = ({ searchResults }) => {
  console.log(searchResults)
  return (
    <div className="SearchItemHotelContainer">
    {searchResults.map((result, index) => (
    <div className="SearchItemHotel" key={index}>
        <h2 className="HotelName">{result.hotel_name}</h2>
        <p className="RoomNumber">Room Number: {result.room_number}</p>
        <p className="BedSize">Bed Size: {result.bed_size}</p>
        <p className="Price">Price: {result.price}</p>
        <p className="Availability">Availability: {result.available}</p>
        <p className="Review">Review: {result.review}</p>
        <p className="Rating">Rating: {result.rating}</p>
    </div>
))}
    </div>
  );
};

Results.propTypes = {
    searchResults: PropTypes.array.isRequired
};

export default Results;