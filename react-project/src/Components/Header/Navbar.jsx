import PropTypes from 'prop-types';
import './Header.css';

const Navbar = ({ setActiveContent, setShowLogIn, setShowSignUp, isLoggedIn, username, handleLogout }) => {
    return (
        <div className="navbar">
            <a href="#home" onClick={() => setActiveContent('home')}>Home</a>
            <a href="#about" onClick={() => setActiveContent('about')}>About</a>
            <a href="#help" onClick={() => setActiveContent('help')}>Help</a>
            {isLoggedIn ? (
                <>
                    <span className='greeting'>Hi {username}</span>
                                        <a href="#logout" onClick={handleLogout}>Log Out</a>


                </>
            ) : (
                <>
                    <a href="#login" onClick={() => setShowLogIn(true)}>Log In</a>
                    <a href="#signup" onClick={() => setShowSignUp(true)}>Sign Up</a>
                </>
            )}
        </div>
    );
}

Navbar.propTypes = {
    setShowLogIn: PropTypes.func.isRequired,
    setShowSignUp: PropTypes.func.isRequired,
    setActiveContent: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string,
    handleLogout: PropTypes.func.isRequired
};

export default Navbar;