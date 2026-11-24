import { images } from "./images.js";

// Aperçu du compte Instagram du salon (compte en cours de création).
// Le compte lui-même (pseudo, URL) se règle dans business.js → social.instagram.
//
// Contenu : uniquement des photos authentiques (fournies par le salon) et des visuels de marque
// construits à partir des vraies informations (logo, tarifs, réservation, adresse).
// Aucun chiffre d'abonnés ni de publications n'est affiché tant que le compte n'existe pas.
// Une fois le compte lancé, remplacer ces tuiles par de vraies publications.
//
// type "photo" : image = entrée de images.js ; type "brand" : variant = logo | price | booking | address.
export const instagramPreview = [
  { id: "harry", type: "photo", image: images.teamHarry },
  { id: "logo", type: "brand", variant: "logo" },
  { id: "price", type: "brand", variant: "price" },
  { id: "booking", type: "brand", variant: "booking" },
  { id: "marlon", type: "photo", image: images.teamMarlon },
  { id: "address", type: "brand", variant: "address" },
];
