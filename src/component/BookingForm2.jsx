import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingForm2 = () => {
  // Déclaration des variables d'état pour chaque champ du formulaire
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Par défaut à 17:00
  const [guests, setGuests] = useState(1); // Par défaut 1 invité
  const [occasion, setOccasion] = useState('Birthday'); // Par défaut anniversaire

  // Tableau d'heures disponibles
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez implémenter la logique pour soumettre les données du formulaire à une API
    // Par exemple, vous pouvez utiliser Axios pour envoyer les données à votre serveur
    console.log({ date, time, guests, occasion });
  };

  // Gestionnaire de changement de date pour mettre à jour la date dans le composant parent
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      {/* Passez les heures disponibles et la fonction de mise à jour de la date en tant que props */}
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
    </div>
  );
};

export default BookingForm2;
