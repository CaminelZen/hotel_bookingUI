import { useState, useContext } from "react";
import { UserContext } from "../Authentication/UserContext";

const CreateHotel = () => {
  const [hotel_name, setHotel_name] = useState("");
  const [location, setLocation] = useState("");
  const [room_number, setRoom_number] = useState("");
  const [bed_size, setBed_size] = useState("king");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useContext(UserContext); 
  
  const submitCreateHotel = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include authentication token in headers
      },
      body: JSON.stringify({
        hotel_name: hotel_name,
        location: location,
        room_number: room_number,
        bed_size: bed_size,
        price: price,
        available: available,
        description: description,
      }),
    };

    try {
      const response = await fetch(`http://localhost:8000/hotels`, requestOptions);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to create hotel");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitCreateHotel();
  };

  return (
    <div className="w-4/5 h-4/5 flex center mt-8">
      <div className="bg-white shadow-md rounded-lg px-8 py-6"> {/* Adjusted width */}
        <h2 className="text-2xl font-semibold mb-4 mt-20">Create Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {[
              { label: "Hotel Name", value: hotel_name, onChange: setHotel_name },
              { label: "Location", value: location, onChange: setLocation },
              { label: "Room Number", value: room_number, onChange: setRoom_number },
              { label: "Bed Size", value: bed_size, onChange: setBed_size },
              { label: "Price", value: price, onChange: setPrice },
              { label: "Availability", value: available, onChange: setAvailable },
              { label: "Description", value: description, onChange: setDescription },
            ].map((field, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4"> {/* Flex layout */}
                <label className="w-full md:w-1/3 text-gray-700 text-sm font-medium">{field.label}</label> {/* Label with flexible width */}
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full md:w-2/3 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300" // Aligned left
          >
            Save Hotel
          </button>
        </form>
        {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default CreateHotel;
