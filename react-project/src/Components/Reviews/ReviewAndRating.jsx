import { useState, useContext } from 'react';
import { UserContext } from '../Authentication/UserContext';
import PropTypes from 'prop-types';
import StarRating from './Star';

const ReviewAndRating = () => {
  const [userId, setUserId] = useState('');
  const [text, setText] = useState('');
  const [hotelId, setHotelId] = useState('');
  const [rating, setRating] = useState(1); // Use null instead of empty string for rating
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [token] = useContext(UserContext);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ hotel_id: hotelId, text: text, user_id: userId })
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/reviews', requestOptions);
      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(data.detail);
      } else {
        setSuccessMessage('Review submitted successfully!');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleRatingSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ hotel_id: hotelId, rating: rating, user_id: userId })
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/hotel_ratings', requestOptions);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.detail);
      } else {
        setSuccessMessage('Rating submitted successfully!');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="review-box">
      <h3>Write a Review and Rate</h3>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label htmlFor="user_id">User ID:</label>
          <input type="text" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="hotel_id">Hotel ID:</label>
          <input type="number" id="hotel_id" value={hotelId} onChange={(e) => setHotelId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="text">Review:</label>
          <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      <form onSubmit={handleRatingSubmit}>
        <div>
          <label>Rating:</label>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>
        <button type="submit">Submit Rating</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

ReviewAndRating.propTypes = {
  rating: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired
};

export default ReviewAndRating;
