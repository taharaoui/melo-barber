import React from "react";
import { business, formatHours, fullAddress } from "../data/business.js";

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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </a>
              <a href={business.social.facebook.url} target="_blank" rel="noreferrer" aria-label="Facebook Melo Barber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a href={business.social.tiktok.url} target="_blank" rel="noreferrer" aria-label="TikTok Melo Barber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 3v10.5a3.5 3.5 0 1 1-3-3.46M15 3a5 5 0 0 0 5 5" />
                </svg>
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
                <a href="#a-propos">À propos de la boutique</a>
              </li>
              <li>
                <a href="#horaires">Horaires &amp; réservation</a>
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