import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { UserContext } from '../context/UserContext';

const LogIn = ({ setShowLogIn }) => { 
    const [username, setUsername] = useState("");
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

        if (!response.ok) {
            setErrorMessage(data.detail);
        } else {
            setToken(data.access_token);
                    }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitLogIn();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowLogIn(false)}>&times;</span>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input
                                type='text'
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
                                type='password'
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input"
                                required
                            />
                        </div>
                    </div>
                    <div>{errorMessage}</div>
                    <br />
                    <button className="button is-primary" type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}
LogIn.propTypes = {
    setShowLogIn: PropTypes.func.isRequired
};

export default LogIn;