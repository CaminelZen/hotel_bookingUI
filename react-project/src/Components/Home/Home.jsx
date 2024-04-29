import './Home.css'
import { useState } from 'react';
/* import {useHistory} from 'react-router-dom' */
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import Results from '../Results/Results'


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
                console.log(data)
                // Assuming data is an array of hotels
                setHotels(data);
                // You can perform any other actions with the fetched data here
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

    return (
        <div className="home-container">
            {showResults ? (
                <Results searchResults={hotels} />
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay configuration
                    loop={true} // Enable loop
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}

                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <h1 className="title">Book Smarter, Travel Easier</h1>
                            <button className="btn" onClick={handleShowResults}>Explore Now</button>
                        </div>
                        <img src='/room2.jpg' alt="room" style={{ width: "100%", height: "100vh" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <h1 className="title">Book Smarter, Travel Easier</h1>
                            <button className="btn" onClick={handleShowResults}>Explore Now</button>
                        </div>
                        <img src='/room3.jpg' alt="room" style={{ width: "140%", height: "100vh" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <h1 className="title">Book Smarter, Travel Easier</h1>
                            <button className="btn" onClick={handleShowResults}>Explore Now</button>
                        </div>
                        <img src='/room4.jpg' alt="room" style={{ width: "140%", height: "100vh" }} /></SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <h1 className="title">Book Smarter, Travel Easier</h1>
                            <button className="btn" onClick={handleShowResults}>Explore Now</button>
                        </div>
                        <img src='/room5.jpg' alt="room" style={{ width: "140%", height: "100vh" }} /></SwiperSlide>

                </Swiper>
            )}
        </div>
    );
}