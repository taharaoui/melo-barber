import { images } from "./images.js";

// bookingUrl : page Setmore du barbier (null = page générale du salon).
// TODO : renseigner les vrais numéros (format international, ex. "+15145551234")
// et comptes Instagram des barbiers. Tant qu'un champ vaut null,
// le bouton correspondant (appel, WhatsApp, Instagram) n'est pas affiché.
export const team = [
  {
    id: 1,
    name: "Harry",
    specialty: "Fade expert",
    experience: "12 ans d'expérience",
    instagram: null,
    instagramUrl: null,
    phone: null,
    bookingUrl: "https://harry3cvf.setmore.com/harry",
    image: images.teamHarry,
  },
  {
    id: 2,
    name: "Marlon",
    specialty: "Skinfade & dégradés",
    experience: "5 ans d'expérience",
    instagram: null,
    instagramUrl: null,
    phone: null,
    // TODO : Marlon n'a pas encore de lien Setmore personnel (champ « slug » vide dans Setmore).
    bookingUrl: null,
    image: images.teamMarlon,
  },
];
