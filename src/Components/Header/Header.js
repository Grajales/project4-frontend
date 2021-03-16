import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import LOGO_IMAGE from "./Images/logo.png";

function Header() {
    return (
        <div className='Header'>
            <ul>
            <img src={LOGO_IMAGE} alt="" className='Header-logo' /> 
                <Link to='/'>
                <h1>Aurora Park</h1>
                </Link>
                <li><Link to='/location'>
                    <h3>Location</h3>
                </Link>
                </li>
                <li><Link to='/contact'>
                    <h3>Contact Us</h3>
                </Link>
                </li>
            </ul>

        </div>
    );
}

export default Header;