import './App.css';
import { useState } from 'react';
import About from './Components/About/About';
import Help from './Components/Help/Help';
import Title from './Components/Header/Title';
import Navbar from './Components/Header/Navbar';
import LogIn from './Components/Authentication/LogIn';
import SignUp from './Components/Authentication/SignUp';
import Featured from './Components/Home/Featured'
import MailList from './Components/Footer/MailList'; 
import Results from './Components/Results/Results';
import SearchBar from './Components/SearchBar/SearchBar';
import Home from './Components/Home/Home'; 
import ReviewBox from './Components/Review/ReviewBox';



export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [activeContent, setActiveContent] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setActiveContent('results');
  };
 
   const handleCityClick = (results) => {
    setSearchResults(results);
    setActiveContent('results');
  }; 

  const renderContent = () => {
    switch (activeContent) {
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      case 'results':
          return <Results searchResults={searchResults} />;
      default:
        return (
          <div id='home'> 
            <Featured onSearchResults={handleCityClick} />
           </div>
        );
    }
  };

  return (
      <>
      <div className="w-full h-full bg-cover bg-center object-cover -ml-2.5 mt-10 p-0">
      <Home/> 
      </div>
     <div className="app-container">
      <section className="header-container"> 
        
        <Title />
        <Navbar 
          setActiveContent={setActiveContent} 
          setShowLogIn={setShowLogIn} 
          setShowSignUp={setShowSignUp} 
          isLoggedIn={isLoggedIn} 
          username={username} 
          handleLogout={handleLogout} 
        /> 
        
      <SearchBar onSearchResults={handleSearchResults} />
      </section>
    <div className="main-content">
      {renderContent()}
      
      <MailList />
      <ReviewBox/>
    </div>
    {showLogIn && <LogIn setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
    {showSignUp && <SignUp setShowSignUp={setShowSignUp} setShowLogIn={setShowLogIn} />}
    </div>
  </>
  );
}  