import React from "react";
import { business, formatHours, fullAddress } from "../data/business.js";
import Icon from "./ui/Icon.jsx";

export default function Footer() {
  return (
    <footer className="site-footer component-dark">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>{business.name}</h4>
            <p style={{ maxWidth: 340 }}>{fullAddress}</p>
            <p>
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a> · <a href={`mailto:${business.email}`}>{business.email}</a>
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
          <div>
            <h4>Explorer</h4>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#galerie">Galerie</a>
              </li>
              <li>
                <a href="#team">L'équipe</a>
              </li>
              <li>
                <a href="#booking">Horaires &amp; réservation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Horaires</h4>
            <ul>
              {business.hours.map((entry) => (
                <li key={entry.day}>{entry.label} · {formatHours(entry)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-listen">Un salon à votre écoute</span>
          <span>© {new Date().getFullYear()} {business.name}. Tous droits réservés.</span>
          <span>Fait par Souketing Agency</span>
        </div>
      </div>
    </footer>
  );
}