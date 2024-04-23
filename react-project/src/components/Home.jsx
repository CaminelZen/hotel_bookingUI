import './Home.css'


export default function Home() {
    const backgroundImageUrl1 = 'room1.jpg'
    const backgroundImageUrl2 = 'room2.jpg'
    const backgroundImageUrl3 = 'room3.jpg'
    const backgroundImageUrl4 = 'room4.jpg'

  

    return (
        < section className="home" id="home" >
            <div className="swiper home-slider">
                <div className="swiper-slide slide" style={{ backgroundImage: `url(${backgroundImageUrl1})`, backgroundRepeat: 'no-repeat' }}>
                    <div className="content">
                        <h3>Begin your journey</h3>
                        <a href="#" className="btn"> check it out!</a>
                    </div>
                </div>
                <div className="swiper-slide slide" style={{ backgroundImage: `url(${backgroundImageUrl2})`, backgroundRepeat: 'no-repeat' }}>
                    <div className="content">
                        <h3>Begin your journey</h3>
                        <a href="#" className="btn"> check it out!</a>
                    </div>
                </div>
                <div className="swiper-slide slide" style={{ backgroundImage: `url(${backgroundImageUrl3})`, backgroundRepeat: 'no-repeat' }}>
                    <div className="content">
                        <h3>Begin your journey</h3>
                        <a href="#" className="btn"> check it out!</a>
                    </div>
                </div>
                <div className="swiper-slide slide" style={{ backgroundImage: `url(${backgroundImageUrl4})`, backgroundRepeat: 'no-repeat' }}>
                    <div className="content">
                        <h3>Begin your journey</h3>
                        <a href="#" className="btn"> check it out!</a>
                    </div>
                </div>
            </div>

        </section >
    );
}