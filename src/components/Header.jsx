import React from "react";
import NavLinkItem from "./ui/NavLinkItem.jsx";
import NavActionButton from "./ui/NavActionButton.jsx";

export default function Header({ logoSrc, navLinks, menuOpen, setMenuOpen }) {
  return (
    <header className="site-nav component-dark">
      <div className="nav-inner">
        <a href="#accueil" className="logo">
          <img src={logoSrc} alt="Melobarber" />
        </a>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Navigation principale"
        >
          <ul>
            {navLinks.map((l) => (
              <NavLinkItem key={l.href} href={l.href} label={l.label} onClick={() => setMenuOpen(false)} />
            ))}
            <li>
              <NavActionButton href="#booking" className="nav-cta-mobile" onClick={() => setMenuOpen(false)}>
                Réserver
              </NavActionButton>
            </li>
          </ul>
        </nav>

        <NavActionButton href="#booking" className="nav-cta-desktop">
          Réserver
        </NavActionButton>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
