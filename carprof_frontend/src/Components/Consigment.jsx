import React from 'react';
import '../styles/consigment.css';
import carImage from '../assets/thumb-hero.avif';
import corner from "../assets/el-bg-1.avif";
import carImage2 from '../assets/thumb-hero1.avif';
import corner2 from '../assets/el-bg-10.avif';

import image from '../assets/why-us8.avif';
import image1 from '../assets/why-us9.avif';
import image2 from '../assets/why-us7.avif';
import image3 from '../assets/why-us11.avif';
import image4 from '../assets/why-us17.avif';
import image5 from '../assets/why-us10.avif';
import image6 from '../assets/why-us11.avif';
import image8 from '../assets/why-us13.avif';
import image9 from '../assets/why-us14.avif';


const Consignment = () => {
    return (
        <>
            <section className="consignment-section">
                <div className="consignment-container">
                    <div className="corner">
                        <img src={corner} alt="Corner" />
                    </div>
                    <div className="consignment-text">
                        <h2>Sell your car with CarProf</h2>
                        <h4>
                            Looking to sell your car quickly and hassle-free? Then you're in the right place!
                        </h4>
                        <p>
                            Bring your car to us, and we’ll handle the entire process for you.
                        </p>
                        <p>
                            Valuation, advertising, displaying the vehicle, and finalizing the sale – everything in one place.
                        </p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                    <div className="consignment-image">
                        <img src={carImage} alt="CarProf Selling" />
                    </div>
                </div>
            </section>

            <section className="consignment-sections">
                <div className="consignment-container reverse">
                    <div className="consignment-image">
                        <img src={carImage2} alt="Car dealership" />
                    </div>
                    <div className="consignment-text">
                        <h2>What is Selling on Consignment?</h2>
                        <p>
                            Selling on consignment entails allowing a dealership to sell your car on your behalf.
                            You can either leave your car with us or keep driving it until the sale is completed.
                        </p>
                        <p>
                            Our experts take care of everything: preparation, advertising, communication with buyers,
                            and handling all the paperwork. No effort required on your part – we’ve got you covered!
                        </p>
                    </div>
                    <div className="corner corner-right">
                        <img src={corner2} alt="Corner Design" />
                    </div>
                </div>
            </section>

            <section className="why-uss">
                <div className="corners">
                    <img src={corner} alt="Corner" />
                </div>
                <h2 className="why-choose-title">Why Choose CarProf</h2>
                <div className="cards-containers">
                    {[
                        { icon: image, title: 'Trusted by Buyers', desc: 'For most buyers, purchasing a car through a dealership feels safer and more reliable.' },
                        { icon: image1, title: 'Extensive Advertising Reach', desc: 'We promote your car not only in Estonia but also in Latvia, Lithuania, and other European countries.' },
                        { icon: image2, title: 'Professional Communication', desc: 'Our experts know how to engage potential buyers and speed up the sales process.' },
                        { icon: image3, title: 'Secure Transactions', desc: 'We ensure all payments and legal aspects of the sale are secure. You won’t need to worry about risks or complications.' },
                        { icon: image4, title: 'Standout Presentation', desc: 'We create high-quality photos and descriptions to help your car sell faster and at a better price.' },
                        { icon: image5, title: 'Partnerships with Banks', desc: 'We can arrange financing for the buyer, increasing the chance of a quick sale.' },
                        { icon: image6, title: 'Time Saver', desc: 'Let us handle buyer meetings, presentations, and price negotiation – saving your time.' },
                        { icon: image8, title: 'Trade-In Option for Buyers', desc: 'Buyers can use their old car as a down payment. This speeds up the process.' },
                        { icon: image9, title: '#1 in Estonia', desc: 'We’re a top leader in consignment car sales with a 4.9 rating on Google!' },
                    ].map((item, index) => (
                        <div className="cardss" key={index}>
                            <div className="left">
                                <h4 >{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                            <div className="right">
                                <img src={item.icon} alt={item.title} />
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Consignment;
