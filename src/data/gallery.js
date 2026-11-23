import { images } from "./images.js";

// Grille éditoriale : 9 emplacements nommés pour la séance photo (shoot-01 … shoot-09).
// image: null = emplacement vide (masqué en production, signalé en développement).
// size : "large" (2×2), "tall" (1×2), "wide" (2×1) ou "square" (1×1).
// TODO : les emplacements 03 et 04 réutilisent les photos de l'équipe en attendant la séance.
export const gallery = [
  { id: "shoot-01", size: "large", title: "Fade sculpté", caption: "Contour net et texture maîtrisée", image: images.atelierFade },
  { id: "shoot-02", size: "tall", title: "Barbe soignée", caption: "Serviette chaude et ligne précise", image: images.barbeServiette },
  { id: "shoot-03", size: "square", title: "Au fauteuil", caption: "Harry, finition au salon", image: images.teamHarry },
  { id: "shoot-04", size: "square", title: "Coupe enfant", caption: "Marlon, dégradé jeune", image: images.teamMarlon },
  { id: "shoot-05", size: "wide", title: "L'atelier", caption: "Vue d'ensemble du salon", image: null },
  { id: "shoot-06", size: "square", title: "Les outils", caption: "Ciseaux, rasoir, tondeuse", image: null },
  { id: "shoot-07", size: "square", title: "Détail du dégradé", caption: "Gros plan nuque", image: null },
  { id: "shoot-08", size: "tall", title: "Rasage", caption: "Rasoir et mousse chaude", image: null },
  { id: "shoot-09", size: "square", title: "Le rendu", caption: "Portrait client après la coupe", image: null },
];
