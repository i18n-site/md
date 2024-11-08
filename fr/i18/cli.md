# Explication Détaillée Des Paramètres De Ligne De Commande

## `-p` Les Fichiers

`-p` ou `--purge` effacera les fichiers qui existent dans chaque répertoire de traduction mais qui n'existent pas dans le répertoire de la langue source.

Parce que lors de la rédaction de documents, les noms de fichiers Markdown sont souvent ajustés, ce qui conduit à de nombreux fichiers anciens et abandonnés dans le répertoire de traduction.

Utilisez ce paramètre pour nettoyer les fichiers qui doivent être supprimés dans d'autres répertoires de langue.

## `-d` Spécifie Le Répertoire De Traduction

Le répertoire traduit est par défaut le répertoire où se trouve le fichier actuel.

`-d` ou `--workdir` peut spécifier le répertoire de traduction, tel que :

```
i18 -d ~/i18n/md
```

## `-h` Afficher L'aide

`-h` ou `--help` pour afficher l’aide de la ligne de commande.