import { useState, useContext } from "react";
//import PropTypes from "prop-types"; 
import { UserContext } from "../Authentication/UserContext";
//import { useParams } from 'react-router-dom';

import "./UserProfile.css";

const UserProfile = () => {
 /*  const { id } = useParams();  */
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ token ] = useContext(UserContext); // Access authentication token and setToken from context

  
  const submitEditProfile = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
       'Authorization': `Bearer ${token}`,  /// Include authentication token in headers
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        phone_number: phoneNumber,
        gender: gender,
        date_of_birth: dateOfBirth,
        address: address,
      }),
    };
    
    try {
      const response = await fetch(
        `http://localhost:8000/users`,
        requestOptions
      );
      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(data.detail);
      }
      
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitEditProfile();
    
  };

  return (
    <div className="PersonalDetails" >
      <div className="PersonalDetails-content">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit">Save Profile</button>
        </form>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};




export default UserProfile;
