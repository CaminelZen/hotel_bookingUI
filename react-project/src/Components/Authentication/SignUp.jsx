import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { UserContext } from "./context/UserContext";
import './LogIn.css';

const SignUp = ({ setShowSignUp, setShowLogIn }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ username: username, email: email, password: password })
        };

        try {
            const response = await fetch(`http://127.0.0.1:8000/users`, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail);
            } else {
                setToken(data.access_token);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const newUser = (e) => {
        e.preventDefault();
        submitRegistration();
        setShowSignUp(false);
    };

    return (
        <div className="login">
            <div className="login-content">
            <span className="close" onClick={() => setShowSignUp(false)}>&times;</span>
            <h2>Sign Up</h2>
                <div className='input-container'>
                <input type="text" placeholder="Username" value={username} onChange={(username) => setUsername(username.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(email) => setEmail(email.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(password) => setPassword(password.target.value)} />
                </div>
                <p className="main-button"><button onClick={newUser}>Sign Up</button></p>
                <p className="other-button">If you already have an account, please:
                <button onClick={() => { setShowLogIn(true); setShowSignUp(false); }}>Log In</button></p>
            </div>
            {errorMessage}
          </div>
  );
}
SignUp.propTypes = {
  setShowLogIn: PropTypes.func.isRequired,
  setShowSignUp: PropTypes.func.isRequired
};

export default SignUp;