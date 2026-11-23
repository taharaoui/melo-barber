import React from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import instagramIcon from "../assets/instagram-2-1-logo-svgrepo-com.svg";
import whatsappIcon from "../assets/whatsapp-color-svgrepo-com.svg";

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
                <img
                  src={member.image.src}
                  srcSet={member.image.srcSet}
                  sizes="(max-width: 860px) 100vw, 50vw"
                  width={member.image.width}
                  height={member.image.height}
                  alt={`Portrait de ${member.name}`}
                  loading="lazy"
                  decoding="async"
                />
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.64 12.64 0 0 0 .7 2.81 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2-.45 12.64 12.64 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </a>
                  ) : null}
                  {member.instagramUrl ? (
                  <a className="team-action icon-action" href={member.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Voir Instagram de ${member.name}`}>
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  ) : null}
                  {member.phone ? (
                  <a className="team-action icon-action" href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" aria-label={`Contacter ${member.name} sur WhatsApp`}>
                    <img src={whatsappIcon} alt="WhatsApp" />
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
