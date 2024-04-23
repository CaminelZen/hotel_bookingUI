import PropTypes from 'prop-types';
import './Navbar.css';

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ top: 0, behavior: "smooth" });
    }
};
    

export default function Navbar({setShowLogin, setShowSignup}){
    return (
        <div className="navbar">
            <a href="http://127.0.0.1:8000/hello">Home</a>
            <a href="#about" onClick={() => scrollToSection(true)}>About</a>
            <a href="#help" onClick={() => scrollToSection(true)}>Help</a>
            <a href="#login" onClick={() => setShowLogin(true)}>Log In</a>
            <a href="#signup" onClick={() => setShowSignup(true)}>Sign Up</a>
        </div>
    );
}
Navbar.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
    setShowSignup: PropTypes.func.isRequired
};