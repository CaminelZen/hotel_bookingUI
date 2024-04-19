import Delft from '/Delft.jpg';
import Eindhoven from '/Eindhoven.jpg';
import Maastricht from '/Maastricht.jpg';
import Rotterdam from '/Rotterdam.jpg';
import DenHaag from '/DenHaag.jpg';
import Amsterdam from '/Amsterdam.jpg';
import './Cities.css'

function Cities () {
    return (
    <div className='Images'>
    <h3>Popular destinations</h3>
      <div className='row'>
       <div className='image-container'>
          <img src={Amsterdam} alt="Amsterdam" />
         <p>Amsterdam</p>
       </div>
       <div className='image-container'>
         <img src={Eindhoven} alt="Eindhoven" />
         <p>Eindhoven</p>
       </div>
       <div className='image-container'>
         <img src={Rotterdam} alt="Rotterdam" />
         <p>Rotterdam</p>
       </div>
     </div>
       <div className='row'>
         <div className='image-container'>
           <img src={DenHaag} alt="The Hague" />
           <p>The Hague</p>
         </div>
         <div className='image-container'>
           <img src={Maastricht} alt="Maastricht" />
           <p>Maastricht</p>
         </div>
         <div className='image-container'>
           <img src={Delft} alt="Delft" />
           <p>Delft</p>
         </div>
       </div>
     </div>
    );

}

export default Cities