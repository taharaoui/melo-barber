import React from "react";
import Photo from "./ui/Photo.jsx";

// Moment photo plein écran entre deux sections.
export default function PhotoBand({ image, alt, quote, signature }) {
  return (
    <section className="photo-band" aria-label="L'atelier Melo Barber">
      <Photo className="photo-band__img" image={image} alt={alt} sizes="100vw" />
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
