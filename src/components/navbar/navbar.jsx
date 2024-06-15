import React, { useState } from "react";
import './navbar.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/full logo.png'; // Make sure the path to the logo is correct

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar-bg">
            <div className="sb__navbar">
                <div className="sb__navbar-links">
                    <div className="sb__navbar-links_logo">
                        <a href="www.google.com">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="sb__navbar-links_container">
                        <p>
                            <a href="www.google.com">
                                Our partners
                            </a>
                        </p>
                        <p>
                            <a href="www.google.com">
                                Plans and pricing
                            </a>
                        </p>
                        <p>
                            <a href="www.google.com">
                                How to use?
                            </a>
                        </p>
                        <p>
                            <a href="www.google.com">
                                Features
                            </a>
                        </p>
                    </div>
                </div>
                <div className="sb__navbar-button">
                    <a href="www.google.com">
                        <button type="button">LOGIN</button>
                    </a>
                </div>
                <div className="sb__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#000"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#000"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="sb__navbar-menu_container scale-up-center">  
                            <div className="sb__navbar-menu_container-links">
                                <p>
                                    <a href="www.google.com">Our partners</a>
                                </p>
                                <p> 
                                    <a href="www.google.com">Plans and pricing</a>
                                </p>
                                <p>
                                    <a href="www.google.com">How to use?</a>
                                </p>
                                <p>
                                    <a href="www.google.com">Features</a>
                                </p>
                            </div>
                           
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
