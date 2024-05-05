import Footer from './Footer';

const MailList = () => {
    return (
        <section className="flex flex-col items-center relative top-[120px] border-tl-[10px] border-tr-[10px] bg-gradient-to-b from-[#227489] to-[#92c8d5] p-5">
            <div className="flex flex-col items-center text-white text-center">
                <h2 className="mb-1">Unlock Endless Adventures:</h2>
                <p className="mailDesc">Subscribe to receive our special offers!</p>
                <div className="mt-2.5">
                    <input type="text" placeholder="Your Email" className="w-[300px] h-10 mb-1.5 mr-2.5 border-none rounded-md"/>
                    <button className="w-[110px] h-10 bg-[#103346] text-white font-medium border-none rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-[#0f4057]">Subscribe</button>
                </div>
            </div>
            <div className="text-xs w-full mt-5">
                <Footer />
            </div>
        </section>
    );
}

export default MailList;