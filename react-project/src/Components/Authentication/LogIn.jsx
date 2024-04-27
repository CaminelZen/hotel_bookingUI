import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { UserContext } from './context/UserContext';
import './LogIn.css';

const LogIn = ({ setShowLogIn, setShowSignUp, setIsLoggedIn, username, setUsername }) => { 
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const submitLogIn = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ username, password }), 
        };
        const response = await fetch("http://127.0.0.1:8000/login", requestOptions);
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('username', data.username);
            setToken(data.access_token);
            setIsLoggedIn(true);
            setUsername(data.username);
        } else {
            setErrorMessage(data.detail);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLogIn(false);
        await submitLogIn();
    };

    return (
          <div className="login">
              <div className="login-content">
              <span className="close" onClick={() => { setShowLogIn(false); }}>&times;</span>
              <h2>Log In</h2>
                  <div className='input-container'>
                  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input type="password" placeholder="Password" value={password} onChange={(password) => setPassword(password.target.value)} />
                  </div>
                  <p className="main-button"><button onClick={handleSubmit}>Log In</button></p>
                  <p className="other-button">If you do not have an account, please:
                  <button onClick={() => { setShowSignUp(true); setShowLogIn(false); }}>Sign Up</button></p>
              </div>
              {errorMessage}
            </div>
    );
}
LogIn.propTypes = {
    setShowLogIn: PropTypes.func.isRequired,
    setShowSignUp: PropTypes.func.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

export default LogIn;