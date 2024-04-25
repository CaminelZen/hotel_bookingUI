import './MailList.css';
import Footer from './Footer';

const MailList = () => {
    return (
        <section className="mailSection">
            <div className="mailContent">
                <h2 className="mailTitle">Unlock Endless Adventures:</h2>
                <p className="mailDesc">Subscribe to receive our special offers!</p>
                <div className="mailInputContainer">
                    <input type="text" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footerContainer">
                <Footer />
            </div>
        </section>
    );
}

export default MailList;