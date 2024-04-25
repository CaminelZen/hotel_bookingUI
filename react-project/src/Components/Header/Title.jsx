import Logo from '/Logo.png';
import './Header.css';

const Title = () => {
    return(
        <div>
        <a href="/index.html" target="_blank">
          <img src={Logo} className="logo" alt="EasyBook logo" />
        </a>
        <h1 className="title">Book Smarter, Travel Easier.</h1>
      </div>
    )
 };

 export default Title;
     