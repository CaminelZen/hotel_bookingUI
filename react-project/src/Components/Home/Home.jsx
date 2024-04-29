/* import './Home.css' */
/* import { useEffect } from 'react'; */
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';


export default function Home() {

    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect='fade'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <SwiperSlide>
                <img src='/room2.jpg' alt="room" style={{ width: "140%", height: "80vh" }} />
            </SwiperSlide>
            <SwiperSlide><img src='/room3.jpg' alt="room" style={{ width: "140%", height: "80vh" }} /></SwiperSlide>
            <SwiperSlide><img src='/room4.jpg' alt="room" style={{ width: "140%", height: "80vh" }} /></SwiperSlide>
            <SwiperSlide><img src='/room5.jpg' alt="room" style={{ width: "140%", height: "80vh" }} /></SwiperSlide>

        </Swiper>

    );
}



