
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Star = ({ rating }) => {
    const rate = Math.round(rating);
    return (
        <div>
            {
                [...Array(5)].map((_, i) =>
                    (
                        <span key={i}>
                            {rate > i ? (<AiFillStar style={{ color: "yellow" }} />) : (<AiOutlineStar />)}
                        </span>
                    )
                )
            }
        </div>
    )
}

Star.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Star;
