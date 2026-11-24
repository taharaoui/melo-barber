import { images } from "./images.js";
import { business } from "./business.js";

// Source unique pour l'équipe (section #team).
// Champ vide ("") = information inconnue : le texte ou le bouton correspondant n'est pas affiché
// (pas de lien tel:, wa.me ou Instagram cassé).
// - phone : format international, ex. "+15145551234" (sert à l'appel et à WhatsApp).
// - bookingUrl : lien Setmore ; vide tant que le barbier n'est pas réservable en ligne.
// - imagePosition : object-position de la photo, pour garder le visage dans le cadre.
//
// Photos : UNIQUEMENT des photos authentiques du salon (aucune banque d'images ni visage généré par IA).
export const team = [
  {
    id: "harry",
    name: "Harry",
    specialty: "Fade expert",
    experience: "12 ans d'expérience",
    instagram: "",
    instagramUrl: "",
    phone: "",
    bookingUrl: business.bookingUrl,
    image: images.teamHarry,
    imageAlt: "Harry au salon, à côté d'un client au fauteuil",
    imagePosition: "55% 35%",
  },
  {
    id: "marlon",
    name: "Marlon",
    specialty: "Skinfade & dégradés",
    experience: "5 ans d'expérience",
    instagram: "",
    instagramUrl: "",
    phone: "",
    bookingUrl: business.bookingUrl,
    image: images.teamMarlon,
    imageAlt: "Marlon réalisant un dégradé sur un jeune client",
    imagePosition: "60% 25%",
  },
  {
    id: "kaboom",
    name: "Kaboom",
    // TODO : spécialité, expérience, Instagram, téléphone, lien Setmore et photo à recevoir du salon.
    specialty: "À confirmer",
    experience: "",
    instagram: "",
    instagramUrl: "",
    phone: "",
    bookingUrl: "",
    image: images.teamKaboomPlaceholder,
    imageAlt: "Photo de Kaboom à venir",
    imagePosition: "center",
  },
];
