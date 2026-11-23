import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import { business } from "../data/business.js";

export default function Team({ team, onBook }) {
  return (
    <section className="team section section--dark" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <SectionHeading
          id="team-title"
          eyebrow="L'équipe"
          title="Deux paires de mains, une même exigence"
          description="Une équipe discrète, attentive et experte, pour un rendu impeccable à chaque visite."
        />

        <div className="team-grid">
          {team.slice(0, 2).map((member) => (
            <article className="team-card reveal" key={member.id}>
              <div className="team-photo-frame">
                <img src={member.image} alt={`Portrait de ${member.name}`} loading="lazy" decoding="async" />
              </div>

              <div className="team-content">
                <p className="label team-specialty">{member.specialty}</p>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-experience">{member.experience}</p>
                {member.instagram ? <p className="team-handle">{member.instagram}</p> : null}

                <div className="team-actions">
                  <a
                    className="link-arrow"
                    href={member.bookingUrl || business.bookingUrl}
                    aria-label={`Réserver avec ${member.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onBook(member.bookingUrl || business.bookingUrl, `Avec ${member.name}`);
                    }}
                  >
                    Réserver avec {member.name} <Icon name="arrowRight" size={16} />
                  </a>
                  <div className="team-icons">
                    {member.phone ? (
                      <a className="icon-button" href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`} aria-label={`Appeler ${member.name}`}>
                        <Icon name="phone" />
                      </a>
                    ) : null}
                    {member.instagramUrl ? (
                      <a className="icon-button" href={member.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Voir Instagram de ${member.name}`}>
                        <Icon name="instagram" />
                      </a>
                    ) : null}
                    {member.phone ? (
                      <a className="icon-button" href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" aria-label={`Contacter ${member.name} sur WhatsApp`}>
                        <Icon name="whatsapp" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
