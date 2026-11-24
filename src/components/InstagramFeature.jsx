import React from "react";
import { business } from "../data/business.js";
import { services } from "../data/services.js";
import { instagramPreview } from "../data/instagram.js";
import { formatPrice, splitServiceName } from "../lib/format.js";

const IgGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// Visuel de marque d'une tuile, construit à partir des vraies données du salon.
function BrandTile({ variant, logoSrc }) {
  if (variant === "logo") {
    return (
      <span className="ig-tile ig-tile--logo">
        <img src={logoSrc} alt="" width="293" height="128" />
      </span>
    );
  }
  if (variant === "price") {
    const s = services[0];
    return (
      <span className="ig-tile ig-tile--price">
        <span className="ig-tile__kicker">La carte</span>
        <span className="ig-tile__big">{formatPrice(s.price)}</span>
        <span className="ig-tile__small">{splitServiceName(s.name).title}</span>
      </span>
    );
  }
  if (variant === "booking") {
    return (
      <span className="ig-tile ig-tile--booking">
        <span className="ig-tile__kicker">En ligne</span>
        <span className="ig-tile__big">Réservez</span>
        <span className="ig-tile__small">votre fauteuil</span>
      </span>
    );
  }
  return (
    <span className="ig-tile ig-tile--address">
      <span className="ig-tile__kicker">Le salon</span>
      <span className="ig-tile__serif">{business.address.city}</span>
      <span className="ig-tile__small">{business.address.street}</span>
    </span>
  );
}

function Tile({ item, logoSrc }) {
  if (item.type === "photo") {
    return (
      <span className="ig-tile ig-tile--photo">
        <img src={item.image.src} srcSet={item.image.srcSet} sizes="120px" alt="" loading="lazy" decoding="async" />
      </span>
    );
  }
  return <BrandTile variant={item.variant} logoSrc={logoSrc} />;
}

// iPhone affichant le profil Instagram du salon (mode sombre d'Instagram).
function PhoneMockup({ logoSrc }) {
  const { instagram } = business.social;
  return (
    <div className="ig-phone" aria-hidden="true">
      <span className="ig-phone__btn ig-phone__btn--a" />
      <span className="ig-phone__btn ig-phone__btn--b" />
      <span className="ig-phone__btn ig-phone__btn--c" />
      <div className="ig-phone__body">
        <div className="ig-phone__screen">
          <div className="ig-status">
            <span>9:41</span>
            <span className="ig-status__island" />
            <span className="ig-status__icons">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="1" /><rect x="4.3" y="4" width="3" height="6" rx="1" /><rect x="8.6" y="2" width="3" height="8" rx="1" /><rect x="12.9" y="0" width="3" height="10" rx="1" /></svg>
              <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="18" height="10" rx="3" fill="none" stroke="currentColor" opacity="0.4" /><rect x="2" y="2" width="14" height="7" rx="1.8" fill="currentColor" /><rect x="19.5" y="3.5" width="1.5" height="4" rx="0.7" fill="currentColor" opacity="0.4" /></svg>
            </span>
          </div>

          <p className="ig-profile__user">{instagram.handle.replace(/^@/, "")}</p>
          <div className="ig-profile__head">
            <span className="ig-profile__ring">
              <span className="ig-profile__avatar">
                <img src={logoSrc} alt="" width="293" height="128" />
              </span>
            </span>
            <div className="ig-profile__id">
              <p className="ig-profile__name">{business.name}</p>
              <p className="ig-profile__cat">Barbier</p>
            </div>
          </div>
          <p className="ig-profile__bio">
            Barbershop · {business.address.city}
            <br />
            Réservation en ligne
          </p>
          <div className="ig-profile__actions">
            <span className="ig-profile__follow">Suivre</span>
            <span className="ig-profile__msg">Message</span>
          </div>

          <div className="ig-tabs">
            <span className="is-active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>
            </span>
          </div>

          <div className="ig-grid">
            {instagramPreview.map((item) => (
              <Tile key={item.id} item={item} logoSrc={logoSrc} />
            ))}
          </div>
          <span className="ig-phone__home" />
        </div>
      </div>
    </div>
  );
}

export default function InstagramFeature({ logoSrc }) {
  const { instagram } = business.social;
  return (
    <div className="ig-feature reveal">
      <div className="ig-feature__copy">
        <span className="eyebrow">Instagram</span>
        <h3 id="ig-title" className="ig-feature__title">
          À ne pas <em>manquer</em>
        </h3>
        <p className="ig-feature__sub">Nouvelles coupes et coulisses du salon, au quotidien sur Instagram.</p>

        <a className="ig-account" href={instagram.url} target="_blank" rel="noreferrer">
          <span className="ig-account__icon">
            <IgGlyph />
          </span>
          <span>
            <span className="ig-account__handle">{instagram.handle}</span>
            <span className="ig-account__meta">
              Barbershop · {business.address.city}
            </span>
          </span>
          <span className="sr-only"> (nouvel onglet)</span>
        </a>

        <a className="btn-primary ig-feature__cta" href={instagram.url} target="_blank" rel="noreferrer">
          Suivez-nous
          <span className="btn-arrow" aria-hidden="true">
            <IgGlyph width="18" height="18" />
          </span>
          <span className="sr-only"> sur Instagram (nouvel onglet)</span>
        </a>
      </div>

      <PhoneMockup logoSrc={logoSrc} />
    </div>
  );
}
