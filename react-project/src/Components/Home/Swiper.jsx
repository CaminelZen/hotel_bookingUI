import { useState } from 'react';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Results from '../Content/Results'



export default function Home() {
    const [hotels, setHotels] = useState([]);
    const fetchHotels = () => {
        fetch(`http://localhost:8000/hotels`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch hotels');
                }
                return response.json();
            })
            .then(data => {
                setHotels(data);
            })
            .catch(error => {
                console.error('Error fetching hotels:', error);
            });
    };
    const [showResults, setShowResults] = useState(false);

    const handleShowResults = () => {
        setShowResults(true);
        fetchHotels();
    };
    const slideImg = [
        { src: '/room2.jpg', alt: 'Room 2' },
        { src: '/room3.jpg', alt: 'Room 3' },
        { src: '/room4.jpg', alt: 'Room 4' },
        { src: '/room5.jpg', alt: 'Room 5' },
      ];

    return (
        <div>
            {showResults ? (
                <Results searchResults={hotels} />
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay configuration
                    loop={true}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {slideImg.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <img
                            src={slide.src}
                            alt={slide.alt}
                            />
                        <div>
                            <h1>Book Smarter, Travel Easier</h1>
                            <button onClick={handleShowResults}>Explore Now</button>
                        </div>
                       </div>
                     </SwiperSlide>
                    ))}  
                </Swiper>
            )}
        </div>
    );
}