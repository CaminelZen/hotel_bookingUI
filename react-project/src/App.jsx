import './App.css';
import { useState } from 'react';
import About from './Components/About/About'
import Help from './Components/Help/Help'
import Title from './Components/Header/Title'
import Navbar from './Components/Header/Navbar'
import LogIn from './Components/Authentication/LogIn'
import SignUp from './Components/Authentication/SignUp'
import Featured from './Components/Featured/Featured'
import Footer from './Components/Footer/Footer'
import MailList from './Components/MailList/MailList'
import SearchBar from './Components/SearchBar/SearchBar'


export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [activeContent, setActiveContent] = useState('home');

  const renderContent = () => {
    switch (activeContent) {
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      default:
        return (
          <div className="content" id='home'>
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
        <Navbar setActiveContent={setActiveContent} setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
      </section>
    <div className="main-content">
      {renderContent()}
    </div>
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} setShowLogIn={setShowLogIn} />}
    <div>
      <Footer />
      <MailList />
    </div>
    </div>
  );
}