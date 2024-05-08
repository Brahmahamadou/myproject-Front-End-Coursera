import * as React from "react";
import './Nav.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import BookingForm from './BookingForm'; // Importer le composant BookingForm
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

function Nav() {
    const [reservationClicked, setReservationClicked] = React.useState(false);
    const navigate = useNavigate();

    const handleReservationClick = () => {
        setReservationClicked(true);
        navigate('/reservation'); // Rediriger vers la page de réservation
    };

    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/icons_assets/Asset 16@4x.png'} alt="Home" style={{ width: '200px', height: '50px' }} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><button style={{border:"none", background:"none", cursor:"pointer"}} onClick={handleReservationClick}>Reservation</button></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <Routes>
                {/* Définir la route pour le composant de formulaire de réservation */}
                {reservationClicked && <Route path="/reservation" element={<BookingForm />} />}
            </Routes>
        </nav>
    )
}
export default Nav;
