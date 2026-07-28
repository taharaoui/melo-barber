import React from "react";

export default function Gallery({ gallery }) {
  return (
    <section className="gallery" id="galerie" aria-labelledby="gallery-title">
      <div className="groove-bg" />
      <div className="wrap">
        <div className="section-head on-ink reveal">
          <span className="eyebrow eyebrow-white">Galerie</span>
          <h2 id="gallery-title" className="section-heading-light">Quelques visuels de notre univers</h2>
        </div>

        <div className="gallery-simple reveal">
          {gallery.slice(0, 4).map((item) => (
            <article className="gallery-simple-card" key={item.id}>
              <img src={item.image} alt={item.caption} loading="lazy" />
              <div className="gallery-simple-content">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-inline-cta reveal">
          <p>Prêt à vivre la même expérience ?</p>
          <a href="#booking" className="btn-primary">Réserver maintenant</a>
        </div>
      </div>
    </section>
  );
}
