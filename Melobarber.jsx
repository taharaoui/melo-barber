import React, { useEffect, useRef, useState } from "react";
import Header from "./src/components/Header.jsx";
import Services from "./src/components/Services.jsx";
import Testimonials from "./src/components/Testimonials.jsx";
import Gallery from "./src/components/Gallery.jsx";
import Footer from "./src/components/Footer.jsx";

import logo from "./src/assets/logo.svg";
import heroPhoto from "./src/assets/hero-photo.svg";

const SETMORE_URL = "https://harry3cvf.setmore.com/";

const SERVICES = [
  {
    icon: "scissors",
    name: "Coupe cheveux / Skinfade",
    link: "https://harry3cvf.setmore.com/book?step=staff&products=17d590c4-5108-4740-805a-02da1a82d581&type=service",
    price: "35 $",
    duration: "30 mins",
    desc: "Skinfade précis avec coupe cheveux et lignes nettes — idéal pour un look moderne et soigné.",
  },
  {
    icon: "beard",
    name: "Cheveux et Barbe / Skinfade and beard",
    link: "https://harry3cvf.setmore.com/book?step=staff&products=a3b62c56-d9eb-4847-ab02-ac2b9d4bbe80&type=service",
    price: "45 $",
    duration: "45 mins",
    desc: "Dégradé sur cheveux et taille de barbe pour un rendu complet, propre et harmonisé.",
  },
  {
    icon: "kid",
    name: "Moins 12 / Under 12",
    link: "https://harry3cvf.setmore.com/book?step=staff&products=5cbac5d8-d9d7-4f7e-bb95-f928a29d9256&type=service",
    price: "25 $",
    duration: "30 mins",
    desc: "Coupe rapide et soignée pour les enfants de moins de 12 ans, dans un cadre calme et patient.",
  },
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

const GALLERY = [
  { cls: "t1", label: "Dégradé Peau — Studio 1" },
  { cls: "t2", label: "Sculpture de Barbe" },
  { cls: "t3", label: "Séance Serviette Chaude" },
  { cls: "t4", label: "Dégradé Progressif" },
  { cls: "t5", label: "Le Full Melo" },
  { cls: "t6", label: "Coin des Enfants" },
];

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#a-propos", label: "À propos" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
];

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


export default function Melobarber() {
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

      {/* ================= HERO ================= */}
      <section className="hero" id="accueil">
        <div className="groove-bg" />
        <div className="wrap hero-grid">
          <div className="reveal is-visible">
            <div className="hero-eyebrow eyebrow">Barbier de quartier · Bonne ambiance depuis toujours</div>
            <h1>
              Dégradés nets,
              <br />
              <em>style</em> maîtrisé.
            </h1>
            <p className="lede">
              Melobarber, c'est la coupe précise dans un fauteuil détendu. Bonne musique, serviettes chaudes et des barbiers qui prennent leur temps — parce qu'un contour propre, ça ne se bâcle pas.
            </p>
            <div className="hero-actions">
              <a href="#horaires" className="btn-primary" aria-label="Réserver votre fauteuil chez Melobarber">
                Réserver votre fauteuil
              </a>
              <a href="#services" className="btn-ghost">Voir le menu →</a>
            </div>
          </div>
          <div className="hero-visual reveal is-visible">
            <div className="hero-photo-card">
              <img src={heroPhoto} alt="Visuel Melobarber" />
              <div className="hero-photo-badge">Nouveau</div>
            </div>
            <div className="hero-note"><span className="dot" /> Fauteuils disponibles</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <div className="stripe-rule" />
      <Services services={SERVICES} icons={ICONS} />

      {/* ================= TÉMOIGNAGES ================= */}
      <Testimonials />

      {/* ================= GALERIE ================= */}
      <Gallery gallery={GALLERY} />

      {/* ================= À PROPOS ================= */}
      <section className="about" id="a-propos">
        <div className="wrap about-grid">
          <div className="about-portrait reveal"><span>Melobarber · Fauteuil 01</span></div>
          <div className="about-copy reveal">
            <span className="eyebrow">La boutique</span>
            <h2 style={{ margin: "14px 0 22px" }}>Des coupes avec un peu de groove</h2>
            <p>Melobarber a commencé avec un seul fauteuil, un tourne-disque et une règle : ne jamais bâcler un dégradé juste pour remplir un créneau. C'est encore comme ça qu'on fonctionne. Trois barbiers, une seule boutique, et une liste de lecture souvent plus douce qu'on ne s'y attendrait dans un barbershop.</p>
            <p>On garde les outils traditionnels — rasoirs droits, serviettes chaudes, un vrai cuir à rasoir — et le rythme tranquille. Les sans rendez-vous sont bienvenus, mais le fauteuil est à vous une fois qu'il est à vous.</p>
            <div className="about-stats">
              <div className="stat"><b>3</b><span>Barbiers sur place</span></div>
              <div className="stat"><b>1</b><span>Fauteuil, jamais double réservé</span></div>
              <div className="stat"><b>6</b><span>Jours ouverts par semaine</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HORAIRES & RÉSERVATION ================= */}
      <div className="stripe-rule" />
      <section className="booking" id="horaires">
        <div className="wrap booking-grid">
          <div className="reveal">
            <span className="eyebrow">Horaires</span>
            <h2 style={{ color: "var(--cream)", margin: "14px 0 20px" }}>Nos heures d'ouverture</h2>
            <table className="hours-table">
              <tbody>
                <tr><td>Lundi</td><td>Fermé</td></tr>
                <tr><td>Mardi – Vendredi</td><td>10 h – 19 h</td></tr>
                <tr><td>Samedi</td><td>9 h – 17 h</td></tr>
                <tr><td>Dimanche</td><td>10 h – 15 h</td></tr>
              </tbody>
            </table>
          </div>

          <div className="booking-embed reveal">
            <span className="eyebrow">Réserver un fauteuil</span>
            <h3 style={{ color: "var(--cream)", margin: "14px 0 20px", fontSize: "1.3rem" }}>
              Choisissez votre créneau et confirmez en quelques clics
            </h3>
            <p className="booking-note">Réservez votre coupe, skinfade ou taille de barbe en direct. C’est rapide et 100 % sécurisé.</p>
            <div className="setmore-frame">
              <iframe
                title="Réservation Melobarber — Setmore"
                src={SETMORE_URL}
                loading="lazy"
                aria-label="Réservation en ligne Melobarber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PIED DE PAGE / CONTACT ================= */}
      <Footer />
    </div>
  );
}
