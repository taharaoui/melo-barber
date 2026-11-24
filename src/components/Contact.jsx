import React from "react";
import { business, formatHours, fullAddress, mapsUrl } from "../data/business.js";

export default function Contact() {
  const today = new Date().getDay();
  const { street, city, region, postalCode } = business.address;

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Nous trouver</span>
          <h2 id="contact-title" className="display-title">
            Le salon
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <dl className="contact-list">
              <div>
                <dt>Adresse</dt>
                <dd>
                  {street}
                  <br />
                  {city}, {region} {postalCode}
                  <a className="btn-ghost btn-ghost--sm" href={mapsUrl} target="_blank" rel="noreferrer">
                    Itinéraire <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd>
                  <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Courriel</dt>
                <dd>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={business.social.instagram.url} target="_blank" rel="noreferrer">
                    {business.social.instagram.handle}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="hours">
              <h3 className="hours__title">Heures d'ouverture</h3>
              <table className="hours-table">
                <tbody>
                  {business.hours.map((entry) => (
                    <tr key={entry.day} className={entry.day === today ? "is-today" : undefined}>
                      <th scope="row">
                        {entry.label}
                        {entry.day === today ? <span className="hours__today">Aujourd'hui</span> : null}
                      </th>
                      <td>{formatHours(entry)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="contact-map reveal reveal-mask">
            <iframe
              title={`Carte : ${fullAddress}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
