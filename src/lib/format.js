// "$35" -> "35 $" (usage québécois)
export const formatPrice = (price) => `${price.replace(/[^0-9.,]/g, "")} $`;

// "30 mins" -> "30 min"
export const formatDuration = (duration) => duration.replace(/\bmins?\b/i, "min");

// Les noms Setmore sont bilingues : "Cheveux et Barbe / Skinfade and beard"
// -> { title: "Cheveux et Barbe", subtitle: "Skinfade and beard" }
export function splitServiceName(name) {
  const [title, ...rest] = name.split("/").map((part) => part.trim());
  return { title, subtitle: rest.join(" / ") || null };
}

// Gestionnaire de clic pour un lien de réservation Setmore.
// Clic simple : charge le lien dans le module de réservation du site (onBook).
// Clic molette / Cmd / Ctrl / Maj : le navigateur ouvre Setmore normalement.
export function bookingClick(onBook, url, label) {
  return (event) => {
    if (!onBook || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onBook(url, label);
  };
}
