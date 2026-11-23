import React from "react";
import Icon from "./ui/Icon.jsx";
import { business, formatHours } from "../data/business.js";

// `selection` : { url, label } choisi depuis un service ou un barbier, ou null.
export default function Booking({ selection, onReset }) {
  const url = selection?.url || business.bookingUrl;

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
          <p className="booking-phone">
            Une question avant de réserver ? <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
          </p>
        </div>

        <div className="booking-panel reveal" id="booking-embed" tabIndex={-1}>
          <span className="eyebrow">Réserver un fauteuil</span>
          <h3 className="booking-title">Choisissez votre créneau, confirmez en quelques clics.</h3>
          <p className="booking-note">Coupe, skinfade ou taille de barbe : réservation en direct, rapide et sécurisée.</p>

          {selection ? (
            <p className="booking-selection" aria-live="polite">
              <span className="label">Votre choix</span>
              <span className="booking-selection__value">{selection.label}</span>
              <button type="button" className="booking-selection__reset" onClick={onReset}>
                Voir toutes les options
              </button>
            </p>
          ) : null}

          <div className="setmore-frame">
            <iframe
              key={url}
              title="Réservation Melo Barber — Setmore"
              src={url}
              loading="lazy"
              aria-label="Réservation en ligne Melo Barber"
            />
          </div>

          <a className="link-arrow booking-fallback" href={url} target="_blank" rel="noreferrer">
            Ouvrir la réservation dans un nouvel onglet <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
