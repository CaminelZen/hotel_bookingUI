import './App.css';
import { useState } from 'react';
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Cities from './Components/Cities';
import About from './Components/About';
import Help from './Components/Help';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Home from './Pages/Home';
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