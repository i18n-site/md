# Explication détaillée des paramètres de la ligne de commande

## `-p` Nettoyage des fichiers

`-p` ou `--purge` supprimera les fichiers présents dans chaque répertoire de traduction mais absents du répertoire de la langue source.

Car lors de la rédaction de documents, les noms des fichiers Markdown sont fréquemment modifiés, ce qui entraîne la présence de nombreux fichiers anciens et inutilisés dans les répertoires de traduction.

En utilisant ce paramètre, vous pouvez nettoyer les fichiers qui devraient être supprimés dans les autres répertoires de langues.

## `-d` Spécifier le répertoire de traduction

Le répertoire de traduction est, par défaut, le répertoire dans lequel se trouve le fichier actuel.

`-d` ou `--workdir` permet de spécifier le répertoire de traduction, par exemple :

```
i18 -d ~/i18n/md
```

## `-h` Afficher l'aide

`-h` ou `--help` permet de consulter l'aide de la ligne de commande.