import React from "react";

// Moment photo plein écran entre deux sections.
export default function PhotoBand({ image, alt, quote, signature }) {
  return (
    <section className="photo-band" aria-label="L'atelier Melo Barber">
      <img className="photo-band__img" src={image} alt={alt} loading="lazy" decoding="async" />
      <div className="photo-band__overlay">
        <div className="wrap">
          <blockquote className="photo-band__quote reveal">
            <p>{quote}</p>
            <footer className="label">{signature}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
