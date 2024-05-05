import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';

const LogIn = ({ setShowLogInModal, setShowSignUpModal, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [, setToken] = useContext(UserContext);
  const [showModal, setShowModal] = useState(true);

  const submitLogIn = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
      };

      const response = await fetch("http://127.0.0.1:8000/login", requestOptions);
      const data = await response.json();

      if (response.ok && data.access_token && data.username) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('username', data.username);
        setToken(data.access_token);
        setIsLoggedIn(true);
        setUsername(data.username);
        setShowLogInModal(false);
      } else {
        setErrorMessage(data.detail || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please check your internet connection.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitLogIn();
    setShowLogInModal(false);
    setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowLogInModal(false);
    };
    if (!showModal) {
        return null;
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#ece9e4] p-5 rounded-xl border-2 border-[#103346] shadow-lg w-[400px] relative z-50">
        <span className="absolute top-2.5 right-3.5 cursor-pointer" onClick={closeModal}>&times;</span>
        <h2>Log In</h2>
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded transition duration-300 ease-in-out"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded transition duration-300 ease-in-out"
          />
        </div>
        <p className="text-base self-end">
          <button onClick={handleSubmit} className="bg-[#103346] text-white border-none m-0 mr-5 rounded-md cursor-pointer">Log In</button>
        </p>
        <p className="text-base self-end">
          If you do not have an account, please:
          <button onClick={() => { setShowSignUpModal(true); setShowLogInModal(false); }} className="bg-[#103346] text-white border-none m-0 mr-5 rounded-md cursor-pointer">Sign Up</button>
        </p>
      </div>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

LogIn.propTypes = {
  setShowLogInModal: PropTypes.func.isRequired,
  setShowSignUpModal: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LogIn;