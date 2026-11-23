import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Services({ services, icons, onBook }) {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Des prestations premium, pensées pour durer"
          description="Chaque visite commence par une consultation claire, un résultat précis et une expérience soignée, du premier coup de ciseaux à la fin de la séance."
        />

        <div className="service-promo reveal" role="note">
          <strong>Coupe offerte :</strong> Recevez une coupe gratuite le jour de votre anniversaire.
        </div>

        <div className="services-grid reveal">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-header">
                <div className="service-icon">{icons[service.id] || icons.scissors}</div>
                <span className="service-badge">{service.badge}</span>
              </div>
              <h3>{service.name}</h3>
              <div className="service-price-row">
                <span className="service-price">{service.price}</span>
                <span className="service-meta">{service.duration}</span>
              </div>
              <p>{service.description}</p>
              <ul className="service-highlights">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={service.link}
                className="service-book-link"
                aria-label={`Réserver ${service.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  onBook(service.link);
                }}
              >
                Réserver
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
