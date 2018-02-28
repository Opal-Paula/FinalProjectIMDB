import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render () {
        return (
            <nav className="nav-bar">
                <div className="nav-container">
                    <ul>
                        <li><Link to="/" className="link-button">Home</Link></li>
                        <li><Link to="/searchpage" className="link-button">Search Movies</Link></li>
                        <li><Link to="/movies" className="link-button">Movies</Link></li>
                        {/* <li><Link to="/logout" className="link-button">Log out</Link></li> */}
                        {/* <li><Link to="/login" className="link-button">Login</Link></li>
                        <li><Link to="/register" className="link-button">Register</Link></li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;