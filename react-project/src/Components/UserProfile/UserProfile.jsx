import { useState, useContext } from "react";
import { UserContext } from "../Authentication/UserContext";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useContext(UserContext); // Access authentication token from context

  const submitEditProfile = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include authentication token in headers
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
      const response = await fetch(`http://localhost:8000/users`, requestOptions);
      const data = await response.json();
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
    <div className="flex justify-center mt-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input"
            />
          </div>
          <button type="submit" className="btn-primary mt-4 w-full">Save Profile</button>
        </form>
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default UserProfile;
