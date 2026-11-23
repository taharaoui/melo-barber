# Melo Barber — site vitrine

Site du barbershop Melo Barber (Sainte-Marthe-sur-le-Lac, QC). Vite 5 + React 18, déployé sur Vercel.

## Commandes

```bash
npm install
npm run dev      # développement (vite)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

Vercel : commande de build `npm run build`, dossier de sortie `dist`.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Horaires, téléphone, email, adresse, réseaux, note affichée, lien Setmore | `src/data/business.js` (source unique : Hero, Horaires, Contact, Footer et schema JSON-LD) |
| Services, prix, liens Setmore par service | `src/data/services.js` |
| Barbiers (téléphone, Instagram, lien Setmore perso) | `src/data/team.js` |
| Photos (WebP + srcset) | `src/data/images.js` et `src/assets/images/` |
| Galerie (9 emplacements `shoot-01` … `shoot-09`) | `src/data/gallery.js` |
| FAQ | `src/data/faq.js` |
| Couleurs, polices, échelle typographique | tokens `:root` en tête de `src/styles.css` |
| Favicon, icône Apple, image de partage | `public/` |

Les valeurs encore à confirmer sont marquées `TODO` dans `src/data/`.

## Ajouter une photo de la séance photo

1. Exporter chaque photo en WebP à 2 largeurs (ex. 800 et 1600 px), nommées `<nom>-<largeur>.webp`, dans `src/assets/images/`.
2. Les importer et les déclarer dans `src/data/images.js` avec `photo([...], largeur, hauteur)`.
3. Dans `src/data/gallery.js`, renseigner `image: images.<nom>` sur l'emplacement voulu.

Un emplacement avec `image: null` est masqué en production et affiché en pointillés avec son nom en développement.

## Identité

- Couleurs : noir `#0F0E0E`, cuivre `#BD7B47`. Cuivre foncé `#8F5A31` uniquement pour le petit texte et les liens sur fond crème. Boutons cuivre en texte noir.
- Polices : Bodoni Moda (titres, 600–700, 28 px et plus), DM Sans (tout le reste).
- Logo : `src/assets/logo.svg` (texte vectorisé), monogramme : `src/assets/monogram.svg`.
