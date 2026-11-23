import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";

// "$35" -> "35 $" (usage québécois)
const formatPrice = (price) => `${price.replace(/[^0-9.,]/g, "")} $`;

export default function Services({ services, onBook }) {
  return (
    <section className="services section section--light" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="services-intro">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="La carte"
            description="Chaque visite commence par une consultation claire. Ensuite, on prend le temps : un résultat précis, du premier coup de ciseaux à la dernière serviette chaude."
          />
          <p className="services-note reveal" role="note">
            <span className="label">Offert</span>
            Une coupe gratuite le jour de votre anniversaire.
          </p>
        </div>

        <ol className="menu-list reveal">
          {services.map((service) => {
            const [title, subtitle] = service.name.split(" / ");
            return (
              <li className="menu-item" key={service.id}>
                <div className="menu-item__head">
                  <h3 className="menu-item__name">{title}</h3>
                  <span className="menu-item__leader" aria-hidden="true" />
                  <span className="menu-item__price">{formatPrice(service.price)}</span>
                </div>
                <p className="menu-item__meta">
                  {subtitle ? <span lang="en">{subtitle}</span> : null}
                  <span>{service.duration}</span>
                  <span>{service.badge}</span>
                </p>
                <p className="menu-item__desc">{service.description}</p>
                <ul className="menu-item__highlights">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="link-arrow menu-item__book"
                  aria-label={`Réserver : ${service.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onBook(service.link, `${title} · ${formatPrice(service.price)}`);
                  }}
                >
                  Réserver <Icon name="arrowRight" size={16} />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
