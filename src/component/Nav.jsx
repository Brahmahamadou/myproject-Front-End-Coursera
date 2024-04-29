import * as React from "react";
import './Nav.css'
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
      <img src={process.env.PUBLIC_URL + '/icons_assets/Asset 16@4x.png'} alt="Home" style={{ width: '200px', height: '50px' }} />
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li> {/* Utiliser Link pour la navigation */}
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    )

}
export default Nav