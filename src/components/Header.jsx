import React, { useEffect, useRef, useState } from "react";
import SocialLinks from "./ui/SocialLinks.jsx";

// Distance de défilement (px) sur laquelle la barre passe de transparente à voilée.
const FADE_DISTANCE = 220;

// Écrit la progression du défilement (0 → 1) dans --nav-p : le CSS en dérive le fond,
// le flou, la bordure et la hauteur, pour un fondu continu plutôt qu'un changement brusque.
function useScrollFade(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / FADE_DISTANCE));
      el.style.setProperty("--nav-p", p.toFixed(3));
      el.classList.toggle("is-scrolled", p > 0.98);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref]);
}

// Section actuellement à l'écran, pour souligner le lien correspondant.
// Toutes les sections sont observées (y compris celles absentes du menu, comme la réservation)
// pour qu'aucun lien ne reste souligné à tort.
function useActiveSection() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const targets = document.querySelectorAll("main > section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return active;
}

export default function Header({ logoSrc, navLinks, menuOpen, setMenuOpen }) {
  const headerRef = useRef(null);
  useScrollFade(headerRef);
  const active = useActiveSection();

  // Menu mobile : Échap pour fermer, défilement de la page bloqué pendant l'ouverture.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-locked");
    };
  }, [menuOpen, setMenuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header ref={headerRef} className={`site-nav ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <a href="#accueil" className="logo" onClick={close}>
            <img src={logoSrc} alt="Melo Barber, retour à l'accueil" width="293" height="128" />
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} aria-current={active === l.href.slice(1) ? "true" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-end">
            <SocialLinks className="nav-social" />
            <a href="#booking" className="nav-cta">
              Réserver
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ""}
      >
        <nav aria-label="Navigation mobile">
          <ol>
            {navLinks.map((l, i) => (
              <li key={l.href} style={{ "--i": i }}>
                <a href={l.href} onClick={close}>
                  <span className="mobile-menu__index">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__foot">
          <a href="#booking" className="btn-primary" onClick={close}>
            Réserver un fauteuil <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <SocialLinks className="mobile-menu__social" />
        </div>
      </div>
    </>
  );
}
