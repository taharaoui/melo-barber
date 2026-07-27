import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading
            eyebrow="Trouvez-nous"
            title="Un salon à votre écoute"
            description="Nous vous répondons rapidement pour réserver, répondre à vos questions ou vous orienter vers le meilleur service."
          />
          <ul className="contact-list">
            <li><strong>Téléphone</strong><a href="tel:+14505550132">(450) 555-0132</a></li>
            <li><strong>Email</strong><a href="mailto:hello@melobarber.ca">hello@melobarber.ca</a></li>
            <li><strong>Adresse</strong>3054 Chem. d'Oka, Sainte-Marthe-sur-le-Lac, QC</li>
            <li><strong>Instagram</strong><a href="https://www.instagram.com" target="_blank" rel="noreferrer">@melobarber</a></li>
          </ul>
        </div>

        <div className="contact-map-card">
          <iframe
            title="Localisation Melobarber"
            src="https://www.google.com/maps?q=3054%20Chem.%20d'Oka%20Sainte-Marthe-sur-le-Lac&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href="https://maps.google.com/?q=3054%20Chem.%20d'Oka%20Sainte-Marthe-sur-le-Lac" target="_blank" rel="noreferrer" className="btn-primary">Ouvrir dans Google Maps</a>
        </div>
      </div>
    </section>
  );
}
