import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeading from "./ui/SectionHeading.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Team({ team }) {
  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="L'équipe"
          title="Des professionnels qui savent écouter"
          description="Une équipe discrète, attentive et experte pour un rendu impeccable à chaque visite."
        />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="team-slider"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <article className="team-card">
                <div className="team-photo-frame">
                  <img src={member.image} alt={`Portrait de ${member.name}`} loading="lazy" />
                </div>

                <div className="team-content">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-specialty">{member.specialty}</p>
                  </div>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-handle">{member.instagram}</p>

                  <div className="team-actions">
                    <a
                      className="team-action"
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Voir Instagram de ${member.name}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <defs>
                          <linearGradient id={`ig-gradient-${member.id}`} x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#f9ce34" />
                            <stop offset="40%" stopColor="#ee2a7b" />
                            <stop offset="100%" stopColor="#6228d7" />
                          </linearGradient>
                        </defs>
                        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke={`url(#ig-gradient-${member.id})`} strokeWidth="1.7" />
                        <circle cx="12" cy="12" r="4.25" fill="none" stroke={`url(#ig-gradient-${member.id})`} strokeWidth="1.7" />
                        <circle cx="17.2" cy="6.8" r="1.1" fill={`url(#ig-gradient-${member.id})`} />
                      </svg>
                    </a>
                    <a className="team-action" href={`tel:${member.phone}`} aria-label={`Appeler ${member.name}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M8.1 3.5h2.4l1.7 4.3-1.2 1.2a13.2 13.2 0 0 0 5.9 5.9l1.2-1.2 4.3 1.7v2.4a1.5 1.5 0 0 1-1.5 1.5h-2.1A14.5 14.5 0 0 1 4.5 7.1V5a1.5 1.5 0 0 1 1.5-1.5h2.1Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
