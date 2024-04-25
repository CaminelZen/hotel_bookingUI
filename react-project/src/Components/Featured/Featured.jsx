import { useState, useEffect } from 'react';
import "./Featured.css";

// Import images
import Amsterdam from '/Amsterdam.jpg';
import Delft from '/Delft.jpg';
import Eindhoven from '/Eindhoven.jpg';
import Maastricht from '/Maastricht.jpg';
import Rotterdam from '/Rotterdam.jpg';
import DenHaag from '/DenHaag.jpg';

// Define cities data
const cities = [
    { name: "Amsterdam", image: Amsterdam },
    { name: "Rotterdam", image: Rotterdam },
    { name: "The Hague", image: DenHaag },
    { name: "Delft", image: Delft },
    { name: "Eindhoven", image: Eindhoven },
    { name: "Maastricht", image: Maastricht },
];

const Featured = () => {
    const [hotels, setHotels] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = () => {
        // Fetch hotels for each city
        Promise.all(cities.map(city => {
            return fetch(`http://localhost:8000/hotels/${location}`)
                .then(response => response.json())
                .then(data => ({
                    city: city.name,
                    hotels: data
                }))
                .catch(error => {
                    console.error(`Error fetching hotels for ${city.name}:`, error);
                    return { city: city.name, hotels: [] };
                });
        }))
            .then(cityHotels => {
                setHotels(cityHotels);
            })
            .catch(error => {
                console.error('Error fetching hotels for cities:', error);
            });
    };

    // Chunk the hotels array into rows of three
    const chunkArray = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );

    const rows = chunkArray(hotels, 3);
    const handleImageClick = () => {
      setDialogVisible(true);
  };

    return (
      <div className="featured">
          {dialogVisible && (
              <div className="dialog">
                  <p>Not found</p>
                  <button onClick={() => setDialogVisible(false)}>Close</button>
              </div>
          )}
          {rows.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                  {row.map((cityHotel, index) => (
                      <div className="featuredItem" key={index}>
                          <div className="imageContainer" onClick={handleImageClick}>
                              <img src={cities.find(city => city.name === cityHotel.city).image} alt={cityHotel.city} className="featuredImg" />
                          </div>
                          <div className="featuredTitles">
                              <p>{cityHotel.city}</p>
                              {cityHotel.hotels.length > 0 && ( /* Added parenthesis here */
                                  <ul>
                                      {cityHotel.hotels.map((hotel, hotelIndex) => (
                                          <li key={hotelIndex}>
                                              {hotel.hotel_name}
                                          </li>
                                      ))}
                                  </ul>
                              )} {/* Added closing parenthesis here */}
                          </div>
                      </div>
                  ))}
              </div>
          ))}
      </div>
  );}
export default Featured;