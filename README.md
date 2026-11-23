# Melobarber — site vitrine

Pré-requis: Node 16+ (recommandé Node 18), npm ou yarn.

Commandes locales:

```bash
npm install
npm run dev      # développement (vite)
npm run build    # build pour production
npm run preview  # prévisualiser le build
```

Déployer sur Vercel:

- Pousser le dépôt sur GitHub/GitLab/Bitbucket.
- Importer le projet dans Vercel et laisser la commande de build par défaut `npm run build`.
- Définir le dossier de sortie sur `dist`.

Ou utiliser le CLI:

```bash
npx vercel --prod
```

Notes:
- Point d'entrée Vite : `src/main.jsx`, page : `src/App.jsx`, sections : `src/components/`.
- Infos du salon (horaires, téléphone, adresse, réseaux) : `src/data/business.js`, source unique utilisée partout.
- Fichiers statiques servis tels quels (favicon, image de partage) : `public/`.
