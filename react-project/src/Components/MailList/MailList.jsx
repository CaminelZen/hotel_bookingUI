import './MailList.css'

const MailList = () =>{
    return(
        <div className='mail'>
            <h1 className="mailTitle">Book Smarter, Travel Easier.</h1>
            <span className="mailDesc">Unlock Endless Adventures: Subscribe Today!</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>

    );
}

export default MailList