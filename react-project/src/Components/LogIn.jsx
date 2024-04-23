import { UserContext } from "../context/UserContext";
import { useState, useContext } from "react";


export default function LogIn () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const submitLogIn = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify({username}, {password}),
        };
        const response = await fetch("http://localhost:8000/login", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            setErrorMessage(data.detail);
        } else {
            setToken(data.access_token);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogIn();
    };


    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Log In</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            type='username'
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
                {errorMessage}
                <br />
                <button className="button is-primary" type="submit">Log In</button>
            </form>
        </div>
    );
}