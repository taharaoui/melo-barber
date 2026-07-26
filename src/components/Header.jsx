import React from "react";

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
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                className="nav-cta nav-cta-mobile"
                onClick={() => setMenuOpen(false)}
              >
                Réserver
              </a>
            </li>
          </ul>
        </nav>

        <a href="#booking" className="nav-cta nav-cta-desktop">
          Réserver
        </a>

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
