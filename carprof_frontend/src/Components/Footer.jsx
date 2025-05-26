import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section left">
          <div className="footer-logo">
            <img src={logo} alt="Carprof logo" />
            <span>CARPROF</span>
          </div>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2025 Carprof</p>
          </div>
        </div>

        <div className="footer-section center">
          <div className="address-block">
            <h4>Car Sale</h4>
            <p>Peterburi tee 71, Tallinn</p>
          </div>
          <div className="address-block">
            <h4>Car Services</h4>
            <p>Peterburi tee 69, Tallinn</p>
          </div>
          <div className="address-block">
            <p>Reg. number: 16430926</p>
            <p>KMKR: EE102461547</p>
          </div>
        </div>

        <div className="footer-section right">
          <NavLink to="/">Buy a car</NavLink>
          <NavLink to="/">Sell a car</NavLink>
          <NavLink to="/">Consignment sale</NavLink>
        </div>
        <div className="footer-section right">
          <NavLink to="/">Insurance claim handing</NavLink>
          <NavLink to="/">Privacy Policy</NavLink></div>
      </div>

    </footer>
  );
};

export default Footer;
