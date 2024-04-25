import './MailList.css'

const MailList = () =>{
    return(
        <div className='mail'>
            <h1 className="mailTitle">Unlock Endless Adventures:</h1>
            <span className="mailDesc">Subscribe to receive our special offers!</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>

    );
}

export default MailList