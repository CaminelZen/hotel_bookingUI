import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { UserContext } from "../context/UserContext";

const SignUp = ({ setShowSignUp }) => {
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
    };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowSignUp(false)}>&times;</span>
        <h2>Sign Up</h2>
        <div className="column">
                {errorMessage && <p className="has-text-danger">{errorMessage}</p>}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <br />
                <button className="button is-primary" type="submit">Sign Up</button>
        </div>
      </div>
      New user created: {newUser}
    </div>
  );
}
SignUp.propTypes = {
    setShowSignUp: PropTypes.func.isRequired
};

export default SignUp;