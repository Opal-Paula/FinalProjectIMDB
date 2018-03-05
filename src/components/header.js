import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render () {
        return (
            <nav className="nav-bar navbar-nav ml-auto lead">
                <div className="nav-container">
                    <ul>
                        <li><Link to="/" className="link-button">Home</Link></li>
                        <li><Link to="/searchpage" className="link-button">Search Movies</Link></li>
                        <li><Link to="/movies" className="link-button">Movies</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;