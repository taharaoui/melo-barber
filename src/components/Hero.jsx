import React, { useEffect, useState } from "react";
import Icon from "./ui/Icon.jsx";
import Photo from "./ui/Photo.jsx";
import { business, getOpenStatus, mapsUrl } from "../data/business.js";

const formatRating = (value) => value.toLocaleString("fr-CA", { minimumFractionDigits: 1 });

export default function Hero({ image }) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const { rating } = business;

  return (
    <section className="hero" id="accueil" aria-labelledby="hero-title">
      <Photo className="hero-img" image={image} alt="" sizes="100vw" priority />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy reveal is-visible">
          <span className="eyebrow"><span>Barbershop · <span className="nowrap">Sainte-Marthe-sur-le-Lac</span></span></span>
          <h1 id="hero-title">
            L'art du dégradé,
            <br />
            <em>au détail près.</em>
          </h1>
          <p className="lede">
            Coupes, skinfades et barbes taillées avec soin, dans un fauteuil où l'on prend le temps. Réservez le vôtre en moins d'une minute.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn--primary">Réserver un fauteuil</a>
            <a href="#services" className="btn btn--ghost">Voir la carte</a>
          </div>
        </div>

        <ul className="hero-proof" aria-label="En bref">
          <li>
            <a href="#temoignages" className="hero-proof__item">
              <span className="hero-proof__stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={14} />)}
              </span>
              <span>
                <strong>{formatRating(rating.value)}/5</strong> · {rating.count} avis {rating.source}
              </span>
            </a>
          </li>
          <li>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="hero-proof__item">
              <Icon name="pin" size={18} />
              <span>{business.address.street}, {business.address.city}</span>
            </a>
          </li>
          <li>
            <a href="#booking" className="hero-proof__item">
              <span className={`status-dot ${status.isOpen ? "is-open" : ""}`} aria-hidden="true" />
              <span>{status.text}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
