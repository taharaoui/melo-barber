// Registre des photos du site (WebP, plusieurs largeurs pour srcset).
// Pour remplacer une photo après la séance photo : déposer les fichiers
// <nom>-<largeur>.webp dans src/assets/images/ et mettre à jour l'entrée ici.
import hero1600 from "../assets/images/hero-1600.webp";
import hero2400 from "../assets/images/hero-2400.webp";
import fade640 from "../assets/images/atelier-fade-640.webp";
import fade1280 from "../assets/images/atelier-fade-1280.webp";
import barbe480 from "../assets/images/barbe-serviette-480.webp";
import barbe735 from "../assets/images/barbe-serviette-735.webp";
import harry400 from "../assets/images/team-harry-400.webp";
import harry600 from "../assets/images/team-harry-600.webp";
import marlon480 from "../assets/images/team-marlon-480.webp";
import marlon820 from "../assets/images/team-marlon-820.webp";

const photo = (sources, width, height) => ({
  src: sources[sources.length - 1][0],
  srcSet: sources.map(([url, w]) => `${url} ${w}w`).join(", "),
  width,
  height,
});

export const images = {
  // Fond du hero (CSS) : 1600 px par défaut, 2400 px sur grand écran ou écran Retina.
  // Photo d'illustration (Unsplash). TODO : remplacer par une photo de la séance photo.
  hero: { md: hero1600, lg: hero2400 },
  atelierFade: photo([[fade640, 640], [fade1280, 1280]], 1280, 853),
  barbeServiette: photo([[barbe480, 480], [barbe735, 735]], 735, 988),
  teamHarry: photo([[harry400, 400], [harry600, 600]], 600, 750),
  teamMarlon: photo([[marlon480, 480], [marlon820, 820]], 820, 1025),
};
