import { useState } from 'react';
import LogIn from './Components/Authentication/LogIn';
import SignUp from './Components/Authentication/SignUp';
import About from './Components/Content/About';
import Help from './Components/Content/Help';
import Title from './Components/Header/Title';
import Navbar from './Components/Header/Navbar';
import SearchBar from './Components/Header/SearchBar';
import MailList from './Components/Footer/MailList'; 
import Results from './Components/Content/Results';
import Featured from './Components/Home/Featured';
import Home from './Components/Home/Swiper'; 
import ReviewBox from './Components/Reviews/ReviewBox';
import UserProfile from './Components/UserProfile/UserProfile';

export default function App() {
  const [activeContent, setActiveContent] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setActiveContent("results");
  };

  const handleCityClick = (results) => {
    setSearchResults(results);
    setActiveContent("results");
  };

  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return <About />;
      case "help":
        return <Help />;
      case "results":
        return <Results searchResults={searchResults} />;
      case "userProfile":
        return <UserProfile />
      default:
        return (
          <div id="home">
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
     <div className="flex flex-col items-center">
      <section className="fixed top-0 left-0 right-0 w-full h-[15%] bg-[#faf7f7] p-0 z-20"> 
        
        <Title />
        <Navbar 
          setActiveContent={setActiveContent}
          setShowSignUpModal={setShowSignUpModal}
          setShowLogInModal={setShowLogInModal} 
          isLoggedIn={isLoggedIn} 
          username={username} 
          handleLogout={handleLogout} 
        /> 
        
      <SearchBar onSearchResults={handleSearchResults} />
      </section>
    <div className="flex relative flex-col items-center w-full max-w-[1024px]">
      {renderContent()}
      
      <MailList />
      <ReviewBox/>
    </div>
    {showLogInModal && <LogIn setShowLogInModal={setShowLogInModal} setShowSignUpModal={setShowSignUpModal} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
    {showSignUpModal && <SignUp setShowSignUpModal={setShowSignUpModal} setShowLogInModal={setShowLogInModal} />}
    </div>
  </>
  );
}  