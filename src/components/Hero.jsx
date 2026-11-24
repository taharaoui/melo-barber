import React from "react";
import { images } from "../data/images.js";
import { business } from "../data/business.js";
import { bookingClick, formatPrice, splitServiceName } from "../lib/format.js";

export default function Hero({ services, onBook }) {
  return (
    <section className="hero" id="accueil" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          src={images.hero.md}
          srcSet={`${images.hero.md} 1600w, ${images.hero.lg} 2400w`}
          sizes="100vw"
          width="1600"
          height="893"
          alt=""
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div className="wrap hero-inner">
        <p className="hero-eyebrow eyebrow">
          Barbershop · {business.address.city}
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-title__line">
            <span>Dégradés nets,</span>
          </span>
          <span className="hero-title__line hero-title__line--end">
            <span>
              <em>style</em> maîtrisé.
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p className="lede">
              La coupe précise, dans un fauteuil détendu. Bonne musique, serviettes chaudes et des barbiers qui prennent le temps.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary">
                Réserver votre fauteuil <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#services" className="btn-ghost">
                Voir les services
              </a>
            </div>
          </div>

          <ul className="hero-menu" aria-label="Services et tarifs">
            {services.map((service) => {
              const { title } = splitServiceName(service.name);
              const price = formatPrice(service.price);
              return (
                <li key={service.id}>
                  <a
                    className="hero-menu__row"
                    href={service.link}
                    onClick={bookingClick(onBook, service.link, service.name)}
                    aria-label={`Réserver ${service.name}, ${price}`}
                  >
                    <span className="hero-menu__name">{title}</span>
                    <span className="hero-menu__end" aria-hidden="true">
                      <span className="hero-menu__price">{price}</span>
                      <span className="hero-menu__book">
                        Réserver <span>→</span>
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
