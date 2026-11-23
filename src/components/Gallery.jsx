import React from "react";
import instagramIcon from "../assets/instagram-2-1-logo-svgrepo-com.svg";
import { business } from "../data/business.js";

const SIZES = {
  large: "(max-width: 760px) 100vw, 60vw",
  wide: "(max-width: 760px) 100vw, 60vw",
  tall: "(max-width: 760px) 50vw, 30vw",
  square: "(max-width: 760px) 50vw, 30vw",
};

export default function Gallery({ gallery }) {
  // En production, les emplacements vides de la séance photo ne sont pas affichés.
  const items = import.meta.env.DEV ? gallery : gallery.filter((item) => item.image);
  const { instagram } = business.social;

  return (
    <section className="gallery" id="galerie" aria-labelledby="gallery-title">
      <div className="groove-bg" />
      <div className="wrap">
        <div className="gallery-head">
          <div className="section-head on-ink reveal">
            <span className="eyebrow eyebrow-white">Galerie</span>
            <h2 id="gallery-title" className="section-heading-light">Le travail, de près</h2>
          </div>
          <a className="gallery-ig-link reveal" href={instagram.url} target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="" aria-hidden="true" width="20" height="20" />
            {instagram.handle} sur Instagram
          </a>
        </div>

        <div className="gallery-grid reveal">
          {items.map((item) =>
            item.image ? (
              <figure className={`gallery-item gallery-item--${item.size}`} key={item.id}>
                <img
                  src={item.image.src}
                  srcSet={item.image.srcSet}
                  sizes={SIZES[item.size]}
                  width={item.image.width}
                  height={item.image.height}
                  alt={`${item.title} — ${item.caption}`}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </figcaption>
              </figure>
            ) : (
              <div className={`gallery-item gallery-item--${item.size} gallery-item--slot`} key={item.id}>
                <span>{item.id}</span>
                <span>{item.title}</span>
              </div>
            )
          )}

          <a
            className="gallery-item gallery-item--square gallery-instagram"
            href={instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Plus de coupes sur Instagram : ${instagram.handle} (nouvel onglet)`}
          >
            <img src={instagramIcon} alt="" aria-hidden="true" width="40" height="40" />
            <h3>Plus de coupes sur Instagram</h3>
            <span className="gallery-instagram__handle">{instagram.handle}</span>
          </a>
        </div>

        <div className="gallery-inline-cta reveal">
          <p>Prêt à vivre la même expérience ?</p>
          <a href="#booking" className="btn-primary">Réserver maintenant</a>
        </div>
      </div>
    </section>
  );
}
