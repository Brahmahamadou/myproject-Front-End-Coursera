import React from "react";
import './Main.css';

function Main() {
    return (
        <div>
        <div className="granCont">
            <div className="cont">
                <h2 style={{fontSize:"30px", color:"#FACE14",}}>Little Lemon</h2>
                <h5 style={{color:"#EDEFEE"}}>Chicago</h5>
                <p style={{color:"#EDEFEE"}}>
                    We are a family one <br /> Mediterranean restaurant, <br /> focused on traditional <br /> recipes served with a modern <br /> twist
                </p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/icons_assets/restauranfood.jpg'} alt="Home" style={{ width: '250px', height: '300px', borderRadius: '10px'}} />
            </div>
        </div>
        </div>
    );
}

export default Main;
