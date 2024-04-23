import  { useState } from "react";
/* import { UserContext } from "../context/userContext";
import ErrorMessage from "./ErrorMessage"; */

/* const baseURL = "http://localhost:8000"; */

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  /*   const [confirmationPassword, setConfirmationPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [token, setToken] = useContext(UserContext); / */

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': "application/json" }, // Added Authorization header
            body: JSON.stringify({ username: username, email: email, password: password })
        };

        const response = await fetch("http://localhost:8000/users", requestOptions);
        /*const data = await response.json(); */

        if (!response.ok) {
            throw new Error ('Login failed');
        /*     setErrorMessage(data.detail);
        } else {
            setToken(data.access_token); */
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitRegistration();
        }
    
    
    return (
        <div className="column">
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title has-text-centered">Register</h1>
                <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                        <input
                            type='email'
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">User Name</label>
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
                
                
                <br />
                <button className="button is-primary" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;