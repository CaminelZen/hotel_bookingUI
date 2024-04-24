import './App.css';
import { useState } from 'react';
import Title from './Components/Header/Title';
import Navbar from './Components/Header/Navbar';
import Cities from './Components/Featured/Cities';
import About from './Components/About/About';
import Help from './Components/Help/Help';
import LogIn from './Components/Authentication/LogIn';
import SignUp from './Components/Authentication/SignUp';
import MailList from './Components/MailList/MailList';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';

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
          <div>
            <Cities />  
            <Featured />   
          </div>
        );
    }
  };

  return (
    <div>
      <section id='home'>
        <Title />
        <Navbar setActiveContent={setActiveContent} setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
      </section>
      {renderContent()}
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} setShowLogIn={setShowLogIn} />}
      <div>
        <Footer />
        <MailList />
      </div>
    </div>
  );
}