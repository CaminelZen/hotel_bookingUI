import PropTypes from 'prop-types';
import './Navbar.css';



const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ top: 0, behavior: "smooth" });
    }
};
    

export default function Navbar ({ setShowLogIn, setShowSignUp }) {
    return (
        <div className="navbar">
            <a href="#home" onClick={() => scrollToSection(true)}>Home</a>
            <a href="#about" onClick={() => scrollToSection(true)}>About</a>
            <a href="#help" onClick={() => scrollToSection(true)}>Help</a>
            <a href="#login" onClick={() => setShowLogIn(true)}>Log In</a>
            <a href="#signup" onClick={() => setShowSignUp(true)}>Sign Up</a>
        </div>
    );
}
Navbar.propTypes = {
    setShowLogIn: PropTypes.func.isRequired,
    setShowSignUp: PropTypes.func.isRequired
};