import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        paddingLeft: '10px'
    };
    return (
        <nav>

            <img alt='concorde logo' src={require('./images/concorde-logo.png')} style={{ padding: '10px', width: '190px', height: '60px' }} />
            <ul className="nav-links">
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/past-events"><li>Past Social Events</li></Link>
                <Link style={navStyle} to="/future-events"><li>Forthcoming Events</li></Link>
                <Link style={navStyle} to="/contact"><li>Contact Us</li></Link>

            </ul>
        </nav>
    )
}

export default Nav;