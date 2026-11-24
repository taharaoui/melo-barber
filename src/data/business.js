// Source unique de vérité pour les infos du salon.
// Utilisée par la section Horaires, le Contact, le Footer et le schema JSON-LD (index.html).
//
// À CONFIRMER : les valeurs marquées TODO viennent de la page Setmore ou de l'ancien site
// et doivent être validées par le salon avant la mise en ligne.

export const business = {
  name: "Melo Barber",
  url: "https://melo-barber.vercel.app",
  // TODO : confirmer — numéro affiché sur la page Setmore.
  phone: "+15143867277",
  phoneDisplay: "(514) 386-7277",
  // TODO : confirmer l'adresse email.
  email: "hello@melobarber.ca",
  address: {
    street: "3054 Chem. d'Oka",
    city: "Sainte-Marthe-sur-le-Lac",
    region: "QC",
    postalCode: "J0N 1P0",
    country: "CA",
  },
  timezone: "America/Toronto",
  bookingUrl: "https://harry3cvf.setmore.com/",
  social: {
    // TODO : confirmer le compte Instagram du salon (Setmore pointe vers @mayha_barbershop).
    instagram: { handle: "@melobarber", url: "https://www.instagram.com/melobarber" },
    facebook: { url: "https://www.facebook.com/melobarber" },
    tiktok: { url: "https://www.tiktok.com/@melobarber" },
    // TODO : aucun lien WhatsApp officiel connu. Renseigner l'URL (ex. "https://wa.me/1514XXXXXXX")
    // une fois confirmée par le salon ; tant que la valeur vaut null, l'icône n'est pas affichée.
    whatsapp: { url: null },
  },
  // TODO : confirmer — horaires affichés sur la page Setmore.
  // day : 0 = dimanche … 6 = samedi. open/close au format "HH:MM", null = fermé.
  hours: [
    { day: 1, label: "Lundi", open: "10:00", close: "18:00" },
    { day: 2, label: "Mardi", open: "10:00", close: "18:00" },
    { day: 3, label: "Mercredi", open: "10:00", close: "18:00" },
    { day: 4, label: "Jeudi", open: "10:00", close: "18:30" },
    { day: 5, label: "Vendredi", open: "09:00", close: "18:30" },
    { day: 6, label: "Samedi", open: "09:00", close: "18:30" },
    { day: 0, label: "Dimanche", open: "10:30", close: "14:00" },
  ],
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

// "09:00" -> "9 h", "18:30" -> "18 h 30"
export function formatTime(value) {
  const [h, m] = value.split(":");
  return m === "00" ? `${Number(h)} h` : `${Number(h)} h ${m}`;
}

export function formatHours(entry) {
  return entry.open ? `${formatTime(entry.open)} – ${formatTime(entry.close)}` : "Fermé";
}
