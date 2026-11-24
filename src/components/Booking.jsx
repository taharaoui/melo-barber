import React from "react";
import { business } from "../data/business.js";

// Module Setmore intégré. selection = libellé du service ou du barbier choisi (null = page générale).
export default function Booking({ url, selection, onReset }) {
  return (
    <section className="booking" id="booking" aria-labelledby="booking-title">
      <div className="wrap booking-grid">
        <div className="booking-aside reveal">
          <span className="eyebrow">Réservation</span>
          <h2 id="booking-title" className="display-title">
            Votre fauteuil
          </h2>
          <p className="booking-note">
            Choisissez votre créneau et confirmez en quelques clics. Réservez votre coupe, skinfade ou taille de barbe en direct.
          </p>

          {selection ? (
            <div className="booking-selection" role="status">
              <span className="booking-selection__label">Votre choix</span>
              <span className="booking-selection__value">{selection}</span>
              <button type="button" className="btn-ghost btn-ghost--sm" onClick={onReset}>
                Voir tous les services
              </button>
            </div>
          ) : null}

          <ul className="booking-help">
            <li>
              Une question&nbsp;? <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a href={url} target="_blank" rel="noopener">
                Ouvrir la réservation dans un nouvel onglet <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="setmore-frame reveal" id="booking-embed">
          <iframe
            title="Réservation Melo Barber (Setmore)"
            key={url}
            src={url}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
