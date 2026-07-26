import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer component-dark" id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>Melobarber</h4>
            <p style={{ maxWidth: 340 }}>
              3054 Chem. d'Oka, Sainte-Marthe-sur-le-Lac, QC J0N 1P0
            </p>
            <p>(450) 555-0132 · hello@melobarber.ca</p>
            <div className="social-row">
              <a href="https://www.instagram.com/melobarber" target="_blank" rel="noreferrer" aria-label="Instagram Melobarber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </a>
              <a href="https://www.facebook.com/melobarber" target="_blank" rel="noreferrer" aria-label="Facebook Melobarber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V9a1 1 0 0 1 1-1z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@melobarber" target="_blank" rel="noreferrer" aria-label="TikTok Melobarber">
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
              <li>Vendredi · 9h00–18h30</li>
              <li>Samedi · 9h00–18h30</li>
              <li>Dimanche · 10h30–14h30</li>
              <li>Lundi · Fermé</li>
              <li>Mardi · 10h00–18h00</li>
              <li>Mercredi · 10h00–18h00</li>
              <li>Jeudi · 9h00–18h30</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Melobarber. Tous droits réservés.</span>
          <span>Fait avec des mains sûres à Saint-Eustache, QC</span>
        </div>
      </div>
    </footer>
  );
}
