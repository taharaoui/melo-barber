import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import PhotoBand from "./components/PhotoBand.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Gallery from "./components/Gallery.jsx";
import Team from "./components/Team.jsx";
import Booking from "./components/Booking.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";

import { services } from "./data/services.js";
import { gallery } from "./data/gallery.js";
import { team as teamData } from "./data/team.js";
import { faq } from "./data/faq.js";

import logo from "./assets/logo.svg";
import haircutPhoto from "./assets/haircut.jpg";

const HERO_IMAGE = "https://i.postimg.cc/c0xbKv75/photo-1705976062088-5433328c2dcd.avif";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Équipe" },
  { href: "#galerie", label: "Galerie" },
  { href: "#booking", label: "Horaires" },
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
      <a className="skip-link" href="#main">Aller au contenu</a>
      <Header logoSrc={logo} navLinks={NAV_LINKS} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="main">
        <Hero image={HERO_IMAGE} />

        <Services services={services} />
        <PhotoBand
          image={haircutPhoto}
          alt="Dégradé à la tondeuse en cours au salon Melo Barber"
          quote="Un contour propre, ça ne se bâcle pas."
          signature="L'esprit Melo"
        />
        <Team team={teamData} />
        <Gallery gallery={gallery} />
        <Testimonials />
        <Booking />
        <FAQ faq={faq} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
