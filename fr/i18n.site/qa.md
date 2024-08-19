# FAQ

## Suppression accidentelle de `.i18n/v`, entraînant l'incapacité de publier le package `npm`

`.i18n/v/ol/v.hash` contient l'historique des versions publiées pour le package `npm`.

Si vous supprimez accidentellement `.i18n/v/ol`, le package `npm` ne pourra pas être publié.

À ce stade, il convient tout d'abord de trouver le numéro de version correspondant à la dernière version publiée de votre projet sur [npmjs.com](//npmjs.com), par exemple `0.1.9`.

Ensuite, suivez les instructions ci-dessous en `bash` pour créer le fichier.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Notez que cette méthode de correction entraînera la perte de l'historique des fichiers, rendant impossible les mises à jour incrémentales lors de la prochaine publication, et tout le contenu sera recréé et téléchargé à nouveau.