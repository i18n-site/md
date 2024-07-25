# Explication Détaillée Des Paramètres De Ligne De Commande

## `-P` Nettoyer Les Fichiers

`-p` Ou `--purge` nettoiera les fichiers qui existent dans chaque répertoire de traduction mais qui n'existent pas dans le répertoire de la langue source.

Parce que lors de la rédaction de documents, les noms de fichiers Markdown sont souvent ajustés, ce qui entraîne de nombreux fichiers anciens et abandonnés dans le répertoire de traduction.

Utilisez ce paramètre pour nettoyer les fichiers qui doivent être supprimés dans d'autres répertoires de langue.

## `-D` Spécifiez Le Répertoire De Traduction

Le répertoire traduit est par défaut le répertoire où se trouve le fichier actuel.

`-d` Ou `--workdir` peut spécifier le répertoire de traduction, tel que :

```
i18 -d ~/i18n/md
```

## `-H` Voir Aide

`-h` Ou `--help` pouvez consulter l'aide de la ligne de commande.