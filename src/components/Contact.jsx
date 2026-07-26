import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
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

        <form className="contact-form">
          <label>
            Nom
            <input type="text" name="name" placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Votre email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Comment pouvons-nous vous aider ?" />
          </label>
          <button type="submit" className="btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
