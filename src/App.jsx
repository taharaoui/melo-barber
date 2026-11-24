import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Booking from "./components/Booking.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import MobileBookingBar from "./components/MobileBookingBar.jsx";
import BackToTop from "./components/ui/BackToTop.jsx";

import { services } from "./data/services.js";
import { team } from "./data/team.js";
import { faq } from "./data/faq.js";
import { business } from "./data/business.js";

import logo from "./assets/logo-melobarber.webp";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Équipe" },
  { href: "#temoignages", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

// Apparition en fondu des éléments .reveal à leur entrée dans l'écran.
function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({ url: business.bookingUrl, selection: null });
  const rootRef = useReveal();

  // Charge le lien Setmore précis (service ou barbier) dans le module de réservation.
  const openBooking = (url, selection = null) => {
    setBooking({ url, selection });
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={rootRef} className="melo-root">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Header logoSrc={logo} navLinks={NAV_LINKS} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="main" tabIndex={-1}>
        <Hero services={services} onBook={openBooking} />
        <Services services={services} onBook={openBooking} />
        <Team team={team} logoSrc={logo} onBook={openBooking} />
        <Testimonials />
        <Booking
          url={booking.url}
          selection={booking.selection}
          onReset={() => setBooking({ url: business.bookingUrl, selection: null })}
        />
        <FAQ faq={faq} />
        <Contact />
      </main>

      <Footer logoSrc={logo} navLinks={NAV_LINKS} />
      <MobileBookingBar hidden={menuOpen} />
      <BackToTop />
    </div>
  );
}
