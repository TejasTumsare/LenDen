import { Link, Outlet } from "react-router-dom";
import Hamburger from "../asset/svg/Hamburger";
import React, { useState } from "react";
import "./NavbarComponent.css";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); 
    };

    return (
        <>
            <nav id="navbar-id" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <div className="nav-logo">
                        <li>
                            <p>
                                Len<span>Den</span>
                            </p>
                        </li>
                    </div>
                    <div className="nav-list">
                        
                        <li>
                            <Link className="link" to="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/about-us" onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/signup" onClick={() => setIsMenuOpen(false)}>
                                <button className="signup-button">SignUp</button>
                            </Link>
                        </li>
                        <li className="hamburger" onClick={toggleMenu}>
                            <Hamburger />
                        </li>
                    </div>
                </ul>
                <Outlet />
            </nav>
        </>
    );
}
