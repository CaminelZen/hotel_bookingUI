import './App.css';
import { useState } from 'react';
import Title from './Components/Title';
import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import Cities from './Components/Cities';
import About from './Components/About';
import Help from './Components/Help';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
    <section id='home'>
      <Title />
      <Navbar setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
      <SearchBar />
      <Cities />
    </section>
    <div>
      <About />
      <Help />
    </div>
    {showLogIn && <LogIn />}
    {showSignUp && <SignUp />}
    </>
  );
}
