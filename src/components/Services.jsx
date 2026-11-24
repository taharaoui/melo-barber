import React, { useState } from "react";
import { images } from "../data/images.js";
import { bookingClick, formatDuration, formatPrice } from "../lib/format.js";

const SETMORE_URL = "https://harry3cvf.setmore.com";
const pad = (n) => String(n).padStart(2, "0");

export default function Services({ services, onBook }) {
  // Service mis en avant par la photo : le premier par défaut, puis le dernier survolé ou focalisé.
  const [activeId, setActiveId] = useState(services[0]?.id);
  const activeIndex = Math.max(0, services.findIndex((s) => s.id === activeId));
  const current = services[activeIndex];

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="services-head section-head reveal">
          <span className="eyebrow">Services &amp; tarifs</span>
          <h2 id="services-title" className="display-title">
            La carte
          </h2>
          <p>
            Chaque visite commence par une consultation claire, un résultat précis et une expérience soignée, du premier coup de ciseaux à la fin de la séance.
          </p>
        </div>

        <div className="services-body">
          {/* Photo du service actif : les 3 images sont chargées ensemble, seule l'active est visible. */}
          <figure className="service-stage reveal reveal-mask">
            {services.map((s) => {
              const img = images[s.imageKey];
              const isActive = s.id === current?.id;
              return img ? (
                <img
                  key={s.id}
                  className={isActive ? "is-active" : ""}
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes="(max-width: 960px) 100vw, 45vw"
                  width={img.width}
                  height={img.height}
                  alt={s.photoAlt ?? s.label}
                  aria-hidden={isActive ? undefined : "true"}
                  loading="lazy"
                  decoding="async"
                />
              ) : null;
            })}
            {current ? (
              <figcaption className="service-stage__caption">
                <span className="service-stage__num">{pad(activeIndex + 1)}</span>
                <span className="service-stage__label">
                  {current.label} · {formatDuration(current.duration)}
                </span>
                <span className="service-stage__ticks" aria-hidden="true">
                  {services.map((s, i) => (
                    <i key={s.id} className={i === activeIndex ? "is-active" : ""} />
                  ))}
                </span>
              </figcaption>
            ) : null}
          </figure>

          <div className="services-panel">
            <ol className="service-list">
              {services.map((service, i) => {
                const price = formatPrice(service.price);
                const duration = formatDuration(service.duration);
                return (
                  <li
                    key={service.id}
                    className={[
                      "service-item",
                      service.id === current?.id ? "is-active" : "",
                      service.popular ? "is-popular" : "",
                    ].join(" ")}
                    onMouseEnter={() => setActiveId(service.id)}
                  >
                    <a
                      className="service-row"
                      href={service.link}
                      onClick={bookingClick(onBook, service.link, service.name)}
                      onFocus={() => setActiveId(service.id)}
                      aria-label={`Réserver ${service.label}, ${duration}, ${price}`}
                    >
                      <span className="service-row__index" aria-hidden="true">
                        {pad(i + 1)}
                      </span>
                      <span className="service-row__head">
                        <span className="service-row__name">{service.label}</span>
                        {service.popular ? <span className="service-row__badge">Populaire</span> : null}
                      </span>
                      <span className="service-row__meta">
                        {duration} · {service.tag}
                      </span>
                      <span className="service-row__desc">{service.summary}</span>
                      <span className="service-row__aside">
                        <span className="service-row__price">{price}</span>
                        <span className="service-row__cta">
                          <span className="book-chip">
                            Réserver <span aria-hidden="true">→</span>
                          </span>
                          <span className="service-row__price-sm">{price}</span>
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>

            <div className="services-foot">
              <p className="services-foot__offer">
                <span className="services-foot__dot" aria-hidden="true" />
                Coupe offerte le jour de votre anniversaire.
              </p>
              <a className="services-foot__link" href={SETMORE_URL} target="_blank" rel="noopener noreferrer">
                Toutes les prestations sur Setmore <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
