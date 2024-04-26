import PropTypes from 'prop-types';


const Results = ({ searchResults }) => {
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
    </div>
))}
</section>
  );
};

Results.propTypes = {
    searchResults: PropTypes.array.isRequired
};

export default Results;