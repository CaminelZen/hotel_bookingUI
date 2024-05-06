import PropTypes from 'prop-types';

const Navbar = ({ setActiveContent, setShowLogInModal, setShowSignUpModal, isLoggedIn, username, handleLogout }) => {
    return (
        <div className="absolute bottom-[50px] right-[30px] flex">
            <a href="#home" onClick={() => setActiveContent('home')} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">Home</a>
            <a href="#about" onClick={() => setActiveContent('about')} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">About</a>
            <a href="#help" onClick={() => setActiveContent('help')} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">Help</a>
            {isLoggedIn ? (
                <>
                    <span className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold">Hi {username}</span>
                                        <a href="#logout" onClick={handleLogout} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">Log Out</a>


                </>
            ) : (
                <>
                    <a href="#login" onClick={() => setShowLogInModal(true)} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">Log In</a>
                    <a href="#signup" onClick={() => setShowSignUpModal(true)} className="ml-2.5 p-1.5 text-[#103346] font-[Arial] font-bold transition duration-300 shadow-none hover:shadow-sm hover:text-[#103346] hover:rounded-lg">Sign Up</a>
                </>
            )}
        </div>
    );
}

Navbar.propTypes = {
    setShowLogInModal: PropTypes.func.isRequired,
    setShowSignUpModal: PropTypes.func.isRequired,
    setActiveContent: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string,
    handleLogout: PropTypes.func.isRequired
};

export default Navbar;
