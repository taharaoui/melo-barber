import React, { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a href="#accueil" className="back-to-top" aria-label="Retour en haut">
      <Icon name="arrowUp" size={18} />
    </a>
  );
}
