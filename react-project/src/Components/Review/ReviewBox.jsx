import PropTypes from 'prop-types';
import { useState } from 'react';

const ReviewBox = () => {
  const [userId, setUserId] = useState('');
  const [text, setText] = useState('');
  const [hotelId, setHotelId] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hotel_id: hotelId, text: text, user_id: userId })
      };

      const response = await fetch('http://127.0.0.1:8000/reviews', requestOptions);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Optionally, handle successful submission (e.g., display a success message)
        console.log('Review submitted successfully');
      } else {
        // Handle error response from backend
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="review-box">
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_id">User ID:</label>
          <input type="text" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="hotel_id">Hotel ID:</label>
          <input type="number" id="hotel_id" value={hotelId} onChange={(e) => setHotelId(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="text">Review:</label>
          <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

ReviewBox.propTypes = {
  hotelId: PropTypes.number.isRequired,
};

export default ReviewBox;
