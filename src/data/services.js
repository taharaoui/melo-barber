// Services, prix et durées : repris tels quels de la page Setmore (harry3cvf.setmore.com).
// name : libellé Setmore bilingue (utilisé par le hero, Instagram et le module de réservation).
// label / tag / summary : affichage de « La carte » (nom français, ligne méta, description d'une ligne).
// imageKey : clé dans images.js (résolue dans le composant, ce fichier étant aussi lu par vite.config.js).

export const services = [
  {
    id: "coupe-cheveux",
    imageKey: "atelierFade",
    photoAlt: "Barbier dessinant un skinfade à la tondeuse",
    name: "Coupe cheveux / Skinfade",
    label: "Coupe cheveux",
    tag: "Skinfade",
    popular: true,
    summary: "Coupe moderne et skinfade soigné, net et adapté à votre style.",
    price: "$35",
    duration: "30 mins",
    description:
      "Coupe moderne et skinfade soigné pour un rendu net, propre et parfaitement adapté à votre style.",
    highlights: ["Coupe précise", "Contour net", "Style personnalisé"],
    link: "https://harry3cvf.setmore.com/book?step=staff&products=17d590c4-5108-4740-805a-02da1a82d581&type=service",
  },
  {
    id: "barbe",
    imageKey: "barbeServiette",
    photoAlt: "Client sous une serviette chaude avant la taille de barbe",
    name: "Cheveux et Barbe / Skinfade and beard",
    label: "Cheveux et barbe",
    tag: "Pack complet",
    summary: "Coupe et barbe harmonisées, finition impeccable.",
    price: "$45",
    duration: "45 mins",
    description:
      "Service combiné pour une coupe et une barbe parfaitement harmonisées, avec une finition impeccable.",
    highlights: ["Coupe + barbe", "Finition soignée", "Look complet"],
    link: "https://harry3cvf.setmore.com/book?step=staff&products=a3b62c56-d9eb-4847-ab02-ac2b9d4bbe80&type=service",
  },
  {
    id: "enfant",
    imageKey: "teamMarlon",
    photoAlt: "Marlon coupant les cheveux d'un jeune client",
    name: "Moins 12 / Under 12",
    label: "Moins 12",
    tag: "Enfant",
    summary: "Une coupe propre, dans le calme et sans pression.",
    price: "$25",
    duration: "30 mins",
    description:
      "Coupe adaptée aux jeunes clients avec un accompagnement calme, professionnel et sans pression.",
    highlights: ["Style jeune", "Ambiance détendue", "Coupe propre"],
    link: "https://harry3cvf.setmore.com/book?step=staff&products=5cbac5d8-d9d7-4f7e-bb95-f928a29d9256&type=service",
  },
];
