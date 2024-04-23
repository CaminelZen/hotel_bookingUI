import './App.css';
import Title from './Components/Title';
import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import Cities from './Components/Cities';
import About from './Components/About';
import Help from './Components/Help';



function App() {

  return (
    <>
    <div id='Home'>
      <Title />
      <Navbar />
    </div>
    <div>
      <SearchBar />
      <Cities />
    </div>
    <div>
      <About />
      <Help />
    </div>

    </>
  )
}

export default App
