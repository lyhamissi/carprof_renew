import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png";
import "../styles/navbar.css";
const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={logo} alt="Logo" id="logo" />
                <span>CARPROF</span>
            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "links active" : "links"}>
                        Buy a car
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/car-buyback" className={({ isActive }) => isActive ? "links active" : "links"}>
                        Sell a car
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/car-consignment-sale" className={({ isActive }) => isActive ? "links active" : "links"}>
                        Consignment sale
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "links active" : "links"}>
                        Insurance claim handing
                    </NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default NavBar;