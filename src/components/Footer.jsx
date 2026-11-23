import React from "react";
import { business, formatHours, fullAddress } from "../data/business.js";
import Icon from "./ui/Icon.jsx";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Melo Barber" width="170" height="64" className="footer-logo" loading="lazy" />
            <p>{fullAddress}</p>
            <p>
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              <br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <div className="social-row">
              <a href={business.social.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram Melo Barber">
                <Icon name="instagram" size={18} />
              </a>
              <a href={business.social.facebook.url} target="_blank" rel="noreferrer" aria-label="Facebook Melo Barber">
                <Icon name="facebook" size={18} />
              </a>
              <a href={business.social.tiktok.url} target="_blank" rel="noreferrer" aria-label="TikTok Melo Barber">
                <Icon name="tiktok" size={18} />
              </a>
            </div>
          </div>
          <nav aria-label="Liens du pied de page">
            <h2 className="footer-title">Explorer</h2>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#team">L'équipe</a></li>
              <li><a href="#booking">Horaires &amp; réservation</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
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
