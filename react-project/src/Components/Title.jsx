import Logo from '/Logo.png';
import './Title.css';

const Title = () => {
    return(
        <div className="container">
        <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
        </a>
        <h1 className="title">The Hotel Booking App</h1>
      </div>
    )
 };

 export default Title;
     