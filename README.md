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
- Le composant principal est `Melobarber.jsx` à la racine. Le point d'entrée Vite est `src/main.jsx`.
- Pour améliorations futures, on peut extraire le CSS dans un fichier séparé, scinder les composants et ajouter un pipeline CI.
