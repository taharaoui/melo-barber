import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import { business, fullAddress, mapsUrl } from "../data/business.js";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Trouvez-nous"
            title="Un salon à votre écoute"
            description="Nous vous répondons rapidement pour réserver, répondre à vos questions ou vous orienter vers le meilleur service."
          />
          <ul className="contact-list">
            <li><strong>Téléphone</strong><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></li>
            <li><strong>Email</strong><a href={`mailto:${business.email}`}>{business.email}</a></li>
            <li><strong>Adresse</strong>{fullAddress}</li>
            <li><strong>Instagram</strong><a href={business.social.instagram.url} target="_blank" rel="noreferrer">{business.social.instagram.handle}</a></li>
          </ul>
        </div>

        <div className="contact-map-card">
          <iframe
            title="Localisation Melo Barber"
            src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">Ouvrir dans Google Maps</a>
        </div>
      </div>
    </section>
  );
}
