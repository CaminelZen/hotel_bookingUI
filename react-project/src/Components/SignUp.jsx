import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const baseURL = "http://localhost:8000";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useContext(UserContext);

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ username: username, email: email, password: password })
        };

        try {
            const response = await fetch(`${baseURL}/users`, requestOptions);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        submitRegistration();
    };

    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Sign Up</h1>
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
            </form>
        </div>
    );
}