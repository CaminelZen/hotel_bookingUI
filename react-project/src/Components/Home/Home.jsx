import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Results from '../Content/Results';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

// Check Swiper settings for consistency
const slideImg = [
  { src: '/room2.jpg', alt: 'Room 2' },
  { src: '/room3.jpg', alt: 'Room 3' },
  { src: '/room5.jpg', alt: 'Room 5' },
  { src: '/room7.jpg', alt: 'Room 7' },
];

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [hotels, setHotels] = useState([]);

  const handleShowResults = () => {
    setShowResults(true);
    fetchHotels();
  };

  const fetchHotels = () => {
    fetch('http://localhost:8000/hotels', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
      })
      .catch((error) => {
        console.error('Error fetching hotels:', error);
      });
  };

  return (
    <div>
      {showResults ? (
        <Results searchResults={hotels} />
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          spaceBetween={0} // Make sure this doesn't cause overlaps
          slidesPerView={1}
          effect="fade" // Can be removed if causing issues
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay configuration
          loop={true} // Ensure consistent loop behavior
          centeredSlides={true} // Keeps slides centered
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {slideImg.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[80%] ml-3 p-0"> {/* Positioning should be relative to avoid overlap */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                  <h1>Book Smarter, Travel Easier</h1>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    onClick={handleShowResults}
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}