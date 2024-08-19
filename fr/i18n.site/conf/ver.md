# Version du projet

Prenez l'exemple du projet de démonstration :

`en/demo2/v` contient le numéro de version actuelle du projet, qui s'affichera à droite du nom du projet dans la barre latérale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ici, `en/` correspond au code de langue pour la langue source de traduction configurée dans `.i18n/conf.yml`.

Si votre langue source n'est pas l'anglais, le fichier `v` devrait être placé dans le répertoire du projet correspondant à votre langue source.

La fonctionnalité de navigation dans les versions historiques des documents est en cours de développement.

Il est recommandé de modifier le numéro de version des documents uniquement lors de la publication de mises à jour importantes (comme `v1`, `v2`) pour éviter que trop de numéros de version ne créent un désordre dans les pages indexées par les moteurs de recherche.

## Utilisez des fichiers `v` vides pour séparer les indexes des fichiers de différents projets

Dans le projet de démonstration, en plus de `en/demo2/v`, vous pouvez également voir des fichiers `v` vides dans les répertoires `en/blog` et `en/demo1`.

Un fichier `v` vide ne s'affichera pas dans la table des matières de la barre latérale, mais tant qu'un fichier `v` existe, un index distinct sera généré pour les fichiers du répertoire et de ses sous-répertoires.

En séparant les indexes des différents projets, vous pouvez éviter que le chargement de l'index de tous les fichiers du site en une seule fois ne ralentisse l'accès.

Par exemple, le fichier d'index correspondant au `blog` dans le projet est : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)