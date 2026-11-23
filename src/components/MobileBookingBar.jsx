import React, { useEffect, useState } from "react";
import Icon from "./ui/Icon.jsx";
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
      <a href="#booking" className="btn btn--primary" tabIndex={visible ? 0 : -1}>
        Réserver un fauteuil
      </a>
      <a href={`tel:${business.phone}`} className="mobile-booking-bar__call" aria-label={`Appeler le salon au ${business.phoneDisplay}`} tabIndex={visible ? 0 : -1}>
        <Icon name="phone" />
      </a>
    </div>
  );
}
