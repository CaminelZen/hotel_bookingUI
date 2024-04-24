import "./Featured.css"
import Amsterdam from '/Amsterdam.jpg';
import Delft from '/Delft.jpg';
import Eindhoven from '/Eindhoven.jpg';
import Maastricht from '/Maastricht.jpg';
import Rotterdam from '/Rotterdam.jpg';
import DenHaag from '/DenHaag.jpg';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={Amsterdam} alt="Amsterdam" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Amsterdam</h1>
                    <h2>23 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Rotterdam} alt="Rotterdam" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Rotterdam</h1>
                    <h2>28 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={DenHaag} alt="DenHaag" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>The Hague</h1>
                    <h2>52 properties</h2>
                </div>
            </div>
        <div className="featured">
            <div className="featuredItem">
                <img src={Delft} alt="Delft" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Delft</h1>
                    <h2>18 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Eindhoven} alt="Eindhoven" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Eindhoven</h1>
                    <h2>41 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Maastricht} alt="Maastricht" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Maastricht</h1>
                    <h2>63 properties</h2>
                </div>
            </div>
        </div>

        </div>

    )
}

export default Featured