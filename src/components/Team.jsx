import React, { useEffect, useRef, useState } from "react";
import InstagramFeature from "./InstagramFeature.jsx";
import { ICONS } from "./ui/SocialLinks.jsx";
import { bookingClick } from "../lib/format.js";

// Actions d'un barbier : seules celles dont la donnée existe sont affichées.
function memberActions(m) {
  const digits = m.phone.replace(/[^0-9]/g, "");
  return [
    m.phone && { id: "phone", href: `tel:+${digits}`, label: `Appeler ${m.name}` },
    m.instagramUrl && { id: "instagram", href: m.instagramUrl, label: `${m.name} sur Instagram (nouvel onglet)`, external: true },
    m.phone && { id: "whatsapp", href: `https://wa.me/${digits}`, label: `Écrire à ${m.name} sur WhatsApp (nouvel onglet)`, external: true },
  ].filter(Boolean);
}

// Mobile (≤ 639px) : la grille devient un carrousel à défilement natif (scroll-snap) ;
// ce hook suit la carte active pour les points de navigation.
function useSlider(count) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cards = [...track.children];
      const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
      // En fin de piste, la dernière carte ne peut pas s'aligner à gauche : on la considère active.
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) {
        setActive(cards.length - 1);
        return;
      }
      let best = 0;
      cards.forEach((c, i) => {
        if (Math.abs(c.offsetLeft - pad - track.scrollLeft) < Math.abs(cards[best].offsetLeft - pad - track.scrollLeft)) best = i;
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  const goTo = (i) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (!card) return;
    const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: card.offsetLeft - pad, behavior: reduce ? "auto" : "smooth" });
  };

  return { trackRef, active, goTo };
}

export default function Team({ team, logoSrc, onBook }) {
  const { trackRef, active, goTo } = useSlider(team.length);

  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">L'équipe</span>
          <h2 id="team-title">
            Les mains, <em>de près</em>
          </h2>
        </div>

        <div className="team-slider" role="region" aria-roledescription="carrousel" aria-label="Les barbiers">
          <div className="team-grid" ref={trackRef}>
            {team.map((member, i) => {
              const actions = memberActions(member);
              const caption = [member.specialty, member.experience].filter(Boolean).join(" · ");
              return (
                <figure className="team-card reveal reveal-mask" style={{ transitionDelay: `${i * 0.1}s` }} key={member.id}>
                  <img
                    src={member.image.src}
                    srcSet={member.image.srcSet}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 420px"
                    width={member.image.width}
                    height={member.image.height}
                    style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                    alt={member.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <h3>{member.name}</h3>
                    {caption ? <p>{caption}</p> : null}

                    {member.bookingUrl || actions.length ? (
                      <div className="team-card__actions">
                        {member.bookingUrl ? (
                          <a
                            className="btn-ghost btn-ghost--sm"
                            href={member.bookingUrl}
                            onClick={bookingClick(onBook, member.bookingUrl)}
                            aria-label={`Réserver avec ${member.name}`}
                          >
                            Réserver
                          </a>
                        ) : null}
                        {actions.length ? (
                          <ul className="social-links">
                            {actions.map((a) => (
                              <li key={a.id}>
                                <a
                                  href={a.href}
                                  aria-label={a.label}
                                  {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                                >
                                  {ICONS[a.id]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Points de navigation : affichés uniquement en mobile (CSS). */}
          <div className="team-dots">
            {team.map((member, i) => (
              <button
                type="button"
                key={member.id}
                className={i === active ? "is-active" : undefined}
                aria-label={`Voir ${member.name} (${i + 1} sur ${team.length})`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        <InstagramFeature logoSrc={logoSrc} />
      </div>
    </section>
  );
}
