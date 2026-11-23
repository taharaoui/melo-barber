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
  // TODO : remplacer par la note Google (valeur, nombre d'avis, lien vers la fiche)
  // dès qu'elle est confirmée. Valeurs actuelles : page Setmore.
  rating: {
    value: 4.9,
    count: 30,
    source: "Setmore",
    url: "https://harry3cvf.setmore.com/reviews",
  },
  social: {
    // TODO : confirmer le compte Instagram du salon (Setmore pointe vers @mayha_barbershop).
    instagram: { handle: "@melobarber", url: "https://www.instagram.com/melobarber" },
    facebook: { url: "https://www.facebook.com/melobarber" },
    tiktok: { url: "https://www.tiktok.com/@melobarber" },
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

const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const toMinutes = (value) => {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
};

// Statut d'ouverture à l'heure du salon, quel que soit le fuseau du visiteur.
// Ex. { isOpen: true, text: "Ouvert aujourd'hui jusqu'à 18 h" }
export function getOpenStatus(date = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: business.timezone,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value])
  );
  const day = WEEKDAYS[parts.weekday];
  const now = Number(parts.hour) * 60 + Number(parts.minute);
  const byDay = (d) => business.hours.find((entry) => entry.day === d);

  const today = byDay(day);
  if (today?.open && now < toMinutes(today.open)) {
    return { isOpen: false, text: `Ouvre aujourd'hui à ${formatTime(today.open)}` };
  }
  if (today?.open && now < toMinutes(today.close)) {
    return { isOpen: true, text: `Ouvert aujourd'hui jusqu'à ${formatTime(today.close)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = byDay((day + i) % 7);
    if (next?.open) {
      const when = i === 1 ? "demain" : next.label.toLowerCase();
      return { isOpen: false, text: `Fermé · ouvre ${when} à ${formatTime(next.open)}` };
    }
  }
  return { isOpen: false, text: "Fermé" };
}
