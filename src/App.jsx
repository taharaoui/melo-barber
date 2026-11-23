import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import Team from "./components/Team.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";

import { services } from "./data/services.js";
import { gallery } from "./data/gallery.js";
import { team as teamData } from "./data/team.js";
import { faq } from "./data/faq.js";
import { business, formatHours } from "./data/business.js";

import logo from "./assets/logo.svg";

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#team", label: "Équipe" },
  { href: "#booking", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

const ICONS = {
  scissors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8.3 7.6 20 18M8.3 16.4 20 6" />
    </svg>
  ),
  razor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 14c3-6 7-10 13-10 1 0 2 1 2 2 0 6-4 10-10 13-1 0-2-1-2-2z" />
      <path d="M6 16 3 21" />
    </svg>
  ),
  towel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 4v9a5 5 0 0 0 10 0V4" />
      <path d="M5 4h10M8 20h4" />
    </svg>
  ),
  beard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 10c4 4 12 4 16 0M4 14c4-4 12-4 16 0" />
    </svg>
  ),
  kid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3 4 7v6c0 4 3.5 6.5 8 8 4.5-1.5 8-4 8-8V7z" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 3v18M6 3l12 6-12 6" />
    </svg>
  ),
};

function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useReveal();

  useEffect(() => {
    if (!menuOpen) return;

    const onClick = (e) => {
      if (e.target.closest(".nav-links") || e.target.closest(".nav-toggle")) return;
      setMenuOpen(false);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  return (
    <div ref={rootRef} className="melo-root">
      <Header logoSrc={logo} navLinks={NAV_LINKS} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section
        className="hero component-dark"
        id="accueil"
        aria-labelledby="hero-title"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(10, 8, 6, 0.95) 0%, rgba(10, 8, 6, 0.78) 40%, rgba(10, 8, 6, 0.36) 100%), url(https://i.postimg.cc/c0xbKv75/photo-1705976062088-5433328c2dcd.avif)`,
        }}
      >
        <div className="groove-bg" />
        <div className="wrap hero-grid">
          <div className="hero-copy reveal is-visible">
            <div className="hero-eyebrow eyebrow">Barbier de quartier · Bonne ambiance depuis toujours</div>
            <h1 id="hero-title">
              Dégradés nets,
              <br />
              <em>style</em> maîtrisé.
            </h1>
            <p className="lede">
              Melobarber, c'est la coupe précise dans un fauteuil détendu. Bonne musique, serviettes chaudes et des barbiers qui prennent leur temps — parce qu'un contour propre, ça ne se bâcle pas.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary" aria-label="Réserver votre fauteuil chez Melobarber">
                Réserver votre fauteuil
              </a>
              <a href="#services" className="btn-ghost">Voir le menu →</a>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-rule" />
      <Services services={services} icons={ICONS} />
      <div className="stripe-rule" />
      <Testimonials />
      <div className="stripe-rule" />
      <Team team={teamData} />
      <div className="stripe-rule" />
      <Gallery gallery={gallery} />
      <div className="stripe-rule" />
      <section className="booking component-dark" id="booking" aria-labelledby="booking-title">
        <div className="wrap booking-grid">
          <div className="reveal">
            <span className="eyebrow">Horaires</span>
            <h2 id="booking-title" className="section-heading-light">Nos heures d'ouverture</h2>
            <table className="hours-table">
              <tbody>
                {business.hours.map((entry) => (
                  <tr key={entry.day}><td>{entry.label}</td><td>{formatHours(entry)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="booking-embed reveal">
            <span className="eyebrow">Réserver un fauteuil</span>
            <h3 className="section-subtitle">
              Choisissez votre créneau et confirmez en quelques clics
            </h3>
            <p className="booking-note">Réservez votre coupe, skinfade ou taille de barbe en direct. C’est rapide et 100 % sécurisé.</p>
            <div className="setmore-frame" id="booking-embed">
              <iframe
                title="Réservation Melobarber — Setmore"
                src={business.bookingUrl}
                loading="lazy"
                aria-label="Réservation en ligne Melobarber"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="stripe-rule" />
      <FAQ faq={faq} />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
