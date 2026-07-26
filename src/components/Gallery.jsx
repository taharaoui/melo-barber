import React from "react";

export default function Gallery({ gallery }) {
  return (
    <section className="gallery" id="galerie" aria-labelledby="gallery-title">
      <div className="groove-bg" />
      <div className="wrap">
        <div className="section-head on-ink reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 id="gallery-title">Une galerie pensée pour inspirer confiance</h2>
          <p>Chaque résultat est travaillé avec précision, texture et équilibre, pour une allure nette et durable.</p>
        </div>
        <div className="gallery-grid reveal">
          {gallery.map((item, index) => (
            <article className={`g-tile t${index + 1}`} key={item.id}>
              <div className="g-tile-content">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
