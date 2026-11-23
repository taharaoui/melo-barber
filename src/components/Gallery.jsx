import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import { business } from "../data/business.js";

export default function Gallery({ gallery }) {
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
          {gallery.map((item) => (
            <figure className="gallery-item" key={item.id}>
              <img src={item.image} alt={item.caption} loading="lazy" decoding="async" />
              <figcaption>
                <span className="gallery-item__title">{item.title}</span>
                <span className="gallery-item__caption">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
