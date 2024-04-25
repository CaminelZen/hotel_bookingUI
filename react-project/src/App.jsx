import './App.css';
import { useState } from 'react';
import About from './Components/About/About'
import Help from './Components/Help/Help'
import Title from './Components/Header/Title'
import Navbar from './Components/Header/Navbar'
import LogIn from './Components/Authentication/LogIn'
import SignUp from './Components/Authentication/SignUp'
import Featured from './Components/Featured/Featured'
import MailList from './Components/Footer/MailList';
import SearchBar from './Components/SearchBar/SearchBar'

export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [activeContent, setActiveContent] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false);
    setUsername('');
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      default:
        return (
          <div id='home'>
            <SearchBar />
            <Featured />
          </div>
        );
    }
  };

  return (
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
      </section>
    <div className="main-content">
      {renderContent()}
      <MailList />
    </div>
    {showLogIn && <LogIn setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />}
    {showSignUp && <SignUp setShowSignUp={setShowSignUp} setShowLogIn={setShowLogIn} />}
    </div>
  );
}