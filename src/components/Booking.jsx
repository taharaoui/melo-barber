import React from "react";
import { business, formatHours } from "../data/business.js";

export default function Booking() {
  return (
    <section className="booking section section--light" id="booking" aria-labelledby="booking-title">
      <div className="wrap booking-grid">
        <div className="booking-hours reveal">
          <span className="eyebrow">Horaires</span>
          <h2 id="booking-title">Nos heures d'ouverture</h2>
          <table className="hours-table">
            <caption className="visually-hidden">Heures d'ouverture du salon</caption>
            <tbody>
              {business.hours.map((entry) => (
                <tr key={entry.day}>
                  <th scope="row">{entry.label}</th>
                  <td>{formatHours(entry)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="booking-panel reveal">
          <span className="eyebrow">Réserver un fauteuil</span>
          <h3 className="booking-title">Choisissez votre créneau, confirmez en quelques clics.</h3>
          <p className="booking-note">Coupe, skinfade ou taille de barbe : réservation en direct, rapide et sécurisée.</p>
          <div className="setmore-frame" id="booking-embed">
            <iframe
              title="Réservation Melo Barber — Setmore"
              src={business.bookingUrl}
              loading="lazy"
              aria-label="Réservation en ligne Melo Barber"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
