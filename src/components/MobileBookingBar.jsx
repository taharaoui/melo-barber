import React, { useEffect, useState } from "react";
import { business } from "../data/business.js";

// Barre « Réserver » collante en bas de l'écran (mobile uniquement, via CSS).
// Elle apparaît après le hero et s'efface quand la section Réservation est visible.
export default function MobileBookingBar({ hidden }) {
  const [pastHero, setPastHero] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const target = document.getElementById("booking");
    const io = target
      ? new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0.1 })
      : null;
    if (target) io.observe(target);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const visible = pastHero && !bookingVisible && !hidden;

  return (
    <div className={`mobile-booking-bar ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <a href="#booking" className="btn-primary" tabIndex={visible ? 0 : -1}>
        Réserver un fauteuil
      </a>
      <a
        href={`tel:${business.phone}`}
        className="mobile-booking-bar__call"
        aria-label={`Appeler le salon au ${business.phoneDisplay}`}
        tabIndex={visible ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.64 12.64 0 0 0 .7 2.81 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2-.45 12.64 12.64 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
