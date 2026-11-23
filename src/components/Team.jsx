import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";

export default function Team({ team }) {
  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <SectionHeading
          id="team-title"
          eyebrow="L'équipe"
          title="Des professionnels qui savent écouter"
          description="Une équipe discrète, attentive et experte pour un rendu impeccable à chaque visite."
        />

        <div className="team-grid reveal">
          {team.slice(0, 2).map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-photo-frame">
                <img src={member.image} alt={`Portrait de ${member.name}`} loading="lazy" />
              </div>

              <div className="team-content">
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-specialty">{member.specialty}</p>
                </div>
                <p className="team-experience">{member.experience}</p>
                {member.instagram ? <p className="team-handle">{member.instagram}</p> : null}

                <div className="team-actions">
                  <a className="team-action" href={`#booking-embed`} aria-label={`Réserver avec ${member.name}`}>
                    Réserver
                  </a>
                  {member.phone ? (
                  <a className="team-action icon-action" href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`} aria-label={`Appeler ${member.name}`}>
                    <Icon name="phone" />
                  </a>
                  ) : null}
                  {member.instagramUrl ? (
                  <a className="team-action icon-action" href={member.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Voir Instagram de ${member.name}`}>
                    <Icon name="instagram" />
                  </a>
                  ) : null}
                  {member.phone ? (
                  <a className="team-action icon-action" href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" aria-label={`Contacter ${member.name} sur WhatsApp`}>
                    <Icon name="whatsapp" />
                  </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
