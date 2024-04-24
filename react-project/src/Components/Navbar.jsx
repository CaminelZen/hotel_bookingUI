import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ setActiveContent, setShowLogIn, setShowSignUp }) => {
    return (
        <div className="navbar">
            <a href="#home" onClick={() => setActiveContent('home')}>Home</a>
            <a href="#about" onClick={() => setActiveContent('about')}>About</a>
            <a href="#help" onClick={() => setActiveContent('help')}>Help</a>
            <a href="#login" onClick={() => setShowLogIn(true)}>Log In</a>
            <a href="#signup" onClick={() => setShowSignUp(true)}>Sign Up</a>
        </div>
    );
}
Navbar.propTypes = {
    setShowLogIn: PropTypes.func.isRequired,
    setShowSignUp: PropTypes.func.isRequired,
    setActiveContent: PropTypes.func.isRequired
};

export default Navbar;