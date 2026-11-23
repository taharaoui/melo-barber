import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import Photo from "./ui/Photo.jsx";
import { business } from "../data/business.js";

const SIZES = {
  large: "(max-width: 760px) 100vw, 50vw",
  wide: "(max-width: 760px) 100vw, 50vw",
  tall: "(max-width: 760px) 50vw, 25vw",
  square: "(max-width: 760px) 50vw, 25vw",
};

export default function Gallery({ gallery }) {
  // En production, les emplacements vides de la séance photo ne sont pas affichés.
  const items = import.meta.env.DEV ? gallery : gallery.filter((item) => item.image);

  return (
    <section className="gallery section section--light" id="galerie" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="gallery-head">
          <SectionHeading id="gallery-title" eyebrow="Galerie" title="Le travail, de près" />
          <a className="link-arrow reveal" href={business.social.instagram.url} target="_blank" rel="noreferrer">
            {business.social.instagram.handle} sur Instagram <Icon name="arrowRight" size={16} />
          </a>
        </div>

        <div className="gallery-grid reveal">
          {items.map((item) =>
            item.image ? (
              <figure className={`gallery-item gallery-item--${item.size}`} key={item.id}>
                <Photo image={item.image} alt={`${item.title} — ${item.caption}`} sizes={SIZES[item.size]} />
                <figcaption>
                  <span className="gallery-item__title">{item.title}</span>
                  <span className="gallery-item__caption">{item.caption}</span>
                </figcaption>
              </figure>
            ) : (
              <div className={`gallery-item gallery-item--${item.size} gallery-item--slot`} key={item.id}>
                <span className="label">{item.id}</span>
                <span>{item.title}</span>
              </div>
            )
          )}

          <a
            className="gallery-item gallery-item--square gallery-instagram"
            href={business.social.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" size={28} />
            <span className="gallery-instagram__title">Plus de coupes sur Instagram</span>
            <span className="label">{business.social.instagram.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
