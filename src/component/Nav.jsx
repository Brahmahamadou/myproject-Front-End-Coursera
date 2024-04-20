import React from "react"
import './Nav.css'

function Nav() {
    return (
        <nav>
                <img src={process.env.PUBLIC_URL + '/icons_assets/Asset 16@4x.png'} alt="Home" style={{ width: '200px', height: '50px' }} />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/">Reservation</a></li>
        <li><a href="/about">Order Onine</a></li>
        <li><a href="/Menu">Login</a></li>
      </ul>
       </nav>
    )

}
export default Nav