import React from "react";
import { business } from "../../data/business.js";

// Exporté pour les actions des cartes de l'équipe.
export const ICONS = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.64 12.64 0 0 0 .7 2.81 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2-.45 12.64 12.64 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3c-1.4.1-2.7-.3-3.9-1v6.3c0 3.6-2.6 5.8-5.7 5.8A5.6 5.6 0 0 1 5.3 15.4c0-3.4 3-6 6.5-5.5v3.1c-1.6-.4-3.4.6-3.4 2.4 0 1.5 1.2 2.6 2.6 2.6 1.6 0 2.6-1 2.6-3V3h3z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.7h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.5-1.5h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.6 20.4 4.9 16A8.6 8.6 0 1 1 8.2 19.2z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M9.3 7.9c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5.7 1.2 1.6 2 2.8 2.6.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .9-.7 1.8-1.7 1.9-1 .1-2.4-.3-4.1-1.7-1.6-1.4-2.5-3-2.6-4.1-.1-1 .5-1.8 1.4-2.2h.4z"
      />
    </svg>
  ),
};

// Ordre d'affichage ; un réseau sans URL confirmée n'est pas affiché.
const NETWORKS = [
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "whatsapp", label: "WhatsApp" },
];

export default function SocialLinks({ className = "", tabIndex }) {
  const links = NETWORKS.filter((n) => business.social[n.id]?.url);

  return (
    <ul className={`social-links ${className}`.trim()}>
      {links.map((n) => (
        <li key={n.id}>
          <a
            href={business.social[n.id].url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${business.name} sur ${n.label} (nouvel onglet)`}
            tabIndex={tabIndex}
          >
            {ICONS[n.id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
