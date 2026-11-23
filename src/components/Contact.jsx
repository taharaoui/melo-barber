import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import { business, fullAddress, mapsUrl } from "../data/business.js";

export default function Contact() {
  return (
    <section className="contact section section--light" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Trouvez-nous"
            title="Un salon à votre écoute"
            description="Nous vous répondons rapidement pour réserver, répondre à vos questions ou vous orienter vers le bon service."
          />
          <dl className="contact-list reveal">
            <div>
              <dt>Téléphone</dt>
              <dd><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${business.email}`}>{business.email}</a></dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd><a href={business.social.instagram.url} target="_blank" rel="noreferrer">{business.social.instagram.handle}</a></dd>
            </div>
          </dl>
        </div>

        <div className="contact-map reveal">
          <iframe
            title="Localisation Melo Barber"
            src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="link-arrow">
            Ouvrir dans Google Maps <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
