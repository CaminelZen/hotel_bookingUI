import './App.css';
import { useState } from 'react';
import Title from './Components/Title';
/* import SearchBar from './Components/SearchBar'; */
import Navbar from './Components/Navbar';
/* import Cities from './Components/Cities'; */
import About from './Components/About';
/* import Help from './Components/Help'; */
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Home from './Pages/Home'
import MailList from './Components/MailList/MailList';
/* import Featured from './Components/Featured/Featured'; */
import Footer from './Components/Footer/Footer'

export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
    <section id='home'>
      <Title />
      <Navbar setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
      
      <Home/>
      
      {/* <Cities /> */}
    </section>
    <div>
      <MailList/>
      <About />
      {/* <Help /> */}
    </div>
    {showLogIn && <LogIn />}
    {showSignUp && <SignUp />}
    <Footer/>
    </>
  );
}
