import React, { useState } from 'react';

const BookingForm = ({ availableTimes = [], onDateChange }) => {
  // Déclarer les variables d'état
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1); // Définir une valeur initiale
  const [occasion, setOccasion] = useState('Birthday'); // Définir une valeur initiale

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez implémenter la logique pour soumettre les données du formulaire à une API
    // Par exemple, vous pouvez utiliser Axios pour envoyer les données à votre serveur
    console.log({ date, time, guests, occasion });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      {/* Utilisez la fonction onDateChange pour mettre à jour la date dans le composant parent */}
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
      
      {/* Utilisez les heures disponibles reçues en tant que prop si disponible */}
      {availableTimes.length > 0 && (
        <>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
        </>
      )}
      
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
      
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
