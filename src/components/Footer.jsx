import React from "react";
import SocialLinks from "./ui/SocialLinks.jsx";
import { business, formatHours, fullAddress } from "../data/business.js";

export default function Footer({ logoSrc, navLinks }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-cta">
          <p className="footer-cta__title">
            Prêt pour <em>votre prochaine coupe</em>&nbsp;?
          </p>
          <a href="#booking" className="btn-primary">
            Réserver un fauteuil <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logoSrc} alt={business.name} width="293" height="128" loading="lazy" />
            <p>{fullAddress}</p>
            <p>
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              <br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <SocialLinks className="footer-social" />
          </div>
          <div>
            <h2 className="footer-title">Explorer</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#booking">Réservation</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-title">Horaires</h2>
            <ul className="footer-hours">
              {business.hours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.label}</span>
                  <span>{formatHours(entry)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {business.name}. Tous droits réservés.</span>
          <span>Fait par Souketing Agency</span>
        </div>
      </div>
    </footer>
  );
}
