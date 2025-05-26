import React from "react";
import "../styles/sellcar.css";
import eu from "../assets/eu_flag.jpg";
import { FaRegCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from '../assets/why-us8.avif'
import image1 from '../assets/why-us9.avif'
import image2 from '../assets/why-us7.avif'
import image3 from '../assets/why-us11.avif'
import image4 from '../assets/why-us17.avif'
import image5 from '../assets/why-us10.avif'
const SellCar = () => {
  return (
    <div>
      <div className="sellcar-section">
        <div className="side">
          <div className="sellcar-content">
            <h1>Car Buyback Service</h1>
            <p>
              If you're looking to sell your car quickly, CarProf's buyback is exactly what you need.
              Whether you're planning to buy a new car or just want to sell your old one, we’ll help you do it quickly,
              safely, and hassle-free.
            </p>
            <p>
              You won’t need to spend any time creating ads, looking for buyers, or handling paperwork.
              We guarantee a smooth transaction and a safe process, providing a convenient solution for those who value their time.
            </p>

            <div className="offer-form">
              <h3>Send an offer</h3>
              <input type="text" placeholder="Phone number *" />
              <div className="reg-section">
                <span className="reg-icon"><img src={eu} alt="" /></span>
                <input type="text" placeholder="Reg. number *" id="reg" />
                <button>Continue</button>
              </div>
              <a href="/">Continue without a number</a>
            </div>
          </div>

          <div className="image"></div>
        </div>
      </div>
      <div className="reason">
        <div class="lined-text">
          <h2>Benefits of Quick Buyback</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="top">
              <div className="container"><FaRegCheckCircle className='location' /></div>
            </div>
            <div className="text">
              <h4>Fair price</h4>
              <p>We assess your car objectively based on its condition and features.</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><FaRegCheckCircle className='location' /></div>
            </div>
            <div className="text">
              <h4>Fast response and seamless processing</h4>
              <p>You’ll receive our offer promptly.</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><FaRegCheckCircle className='location' /></div>
            </div>
            <div className="text">
              <h4>No unnecessary hassle</h4>
              <p>You can forget the hassle of creating ads, taking photos, or meeting with potential buyers.</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><FaRegCheckCircle className='location' /></div>
            </div>
            <div className="text">
              <h4>Minimal effort required</h4>
              <p>“We’ll manage the entire transaction quickly and professionally.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-us">
        <div class="lined-text">
          <h2>Why Should You Sell Your Car To Us?</h2>
          <div className="cards-container">
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Free evaluation</h4>
                  <p>Our experts provide a free assessment of your car's condition and features.</p>
                </div>
              </div>
              <div className="right">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Comprehensive analysis</h4>
                  <p>We thoroughly evaluate your car to ensure a fair offer.</p>
                </div>
              </div>
              <div className="right">
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Speed and convenience</h4>
                  <p>OSell your car quickly, with payment transferred directly to your account.</p>
                </div>
              </div>
              <div className="right">
                <img src={image2} alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Legal support</h4>
                  <p>We handle all the legal aspects of the transaction, including the paperwork.</p>
                </div>
              </div>
              <div className="right">
                <img src={image3} alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Trade-in option</h4>
                  <p>Choose a car from our fleet and apply yor old car's value toward the price of our new one.</p>
                </div>
              </div>
              <div className="right">
                <img src={image4} alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="left">
                <div className="text">
                  <h4>Secure transaction</h4>
                  <p>Working with an official dealership ensures a safe and transparent process.</p>
                </div>
              </div>
              <div className="right">
                <img src={image5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="type">
        <div class="lined-text">
          <h2>What Type of Cars We Buy?</h2>
          <p>We’re open to purchasing cars of any age, condition, or mileage.
            However, our main focus is on cars from 2010 and newer with mileage under 250,000 km.</p>
          <p>At CarProf, we always aim to meet our clients’ needs. Even if your car doesn’t
            fit these criteria, we’ll still strive to offer you the best possible buyback terms.</p>

        </div>
        <div className="offer-form">
          <h3>Send an offer</h3>
          <input type="text" placeholder="Phone number *" />
          <div className="reg-section">
            <span className="reg-icon"><img src={eu} alt="" /></span>
            <input type="text" placeholder="Reg. number *" id="reg" />
            <button>Continue</button>
          </div>
          <a href="/">Continue without a number</a>
        </div>

      </div>
      <div className="support">
        <div className="lined-text">
          <h2>If you have any questions, please contact us!</h2>
        </div>

        <div className="info">
          <div className="contact-box">
            <FaPhoneAlt />
            <span>+250 793 399 719</span>
          </div>
          <div className="contact-box">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </div>
          <div className="contact-box">
            <MdEmail />
            <span>carprof.ee@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31900.391845095004!2d30.10117230000001!3d-1.9325530000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40203f041%3A0x5f8434259d8c4393!2sKacyiru%2C%20Kigali!5e0!3m2!1sen!2srw!4v1747729408561!5m2!1sen!2srw"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our location"
        ></iframe>
      </div>

    </div>
  );
};

export default SellCar;
