import SearchBar from "./../Components/SearchBar"; 
import './Home.css';
import Featured from '../Components/Featured/Featured';
/* import Footer from "../Components/Footer/Footer"; */


const Home = () =>{
    return(
        <div>
            <SearchBar />
            <div className="homeContainer">
            <Featured/>
            
            </div>
        </div>
    )
}

export default Home