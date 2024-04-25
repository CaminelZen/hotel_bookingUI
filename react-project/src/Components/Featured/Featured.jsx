import "./Featured.css"
import Amsterdam from '/Amsterdam.jpg';
import Delft from '/Delft.jpg';
import Eindhoven from '/Eindhoven.jpg';
import Maastricht from '/Maastricht.jpg';
import Rotterdam from '/Rotterdam.jpg';
import DenHaag from '/DenHaag.jpg';

const cities = [
    { name: "Amsterdam", image: Amsterdam },
    { name: "Rotterdam", image: Rotterdam },
    { name: "The Hague", image: DenHaag },
    { name: "Delft", image: Delft },
    { name: "Eindhoven", image: Eindhoven },
    { name: "Maastricht", image: Maastricht },
  ];
  
  const Featured = () => {
    // Function to chunk the cities array into rows of three
    const chunkArray = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
      );
  
    // Chunk the cities array into rows of three
    const rows = chunkArray(cities, 3);
  
    return (
      <div className="featured">
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((city, index) => (
              <div className="featuredItem" key={index}>
                <div className="imageContainer">
                  <img src={city.image} alt={city.name} className="featuredImg" />
                </div>
                <div className="featuredTitles">
                  <p>{city.name}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Featured;