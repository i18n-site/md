# Version Du Projet

Prenons l'exemple du projet de démonstration :

`en/demo2/v` est le numéro de version actuelle du projet, qui sera affiché à droite du nom du projet dans le plan de la barre latérale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ici `en/` est le code langue correspondant à la langue source de traduction configurée par `.i18n/conf.yml` .

Si votre langue source n'est pas l'anglais, alors le fichier `v` doit être placé dans le répertoire projet de votre langue source.

La possibilité de parcourir les versions historiques des documents est en cours de développement.

Il est recommandé de modifier le numéro de version du document uniquement lors de la publication de mises à jour majeures (telles que `v1` , `v2` ) pour éviter qu'un trop grand nombre de numéros de version n'entraîne un encombrement dans les pages indexées par les moteurs de recherche.

## Utilisez Des Fichiers `v` Vides Pour Diviser Les Index De Fichiers De Différents Projets

Dans le projet démo, en plus de `en/demo2/v` , vous pouvez également voir qu'il y a `v` fichiers vides dans les répertoires `en/blog` et `en/demo1` .

Un `v` vide ne sera pas affiché dans le contour de la barre latérale, mais tant qu'il y aura un fichier `v` , un index indépendant sera généré pour les fichiers du répertoire et des sous-répertoires.

En divisant les index de différents projets, vous pouvez éviter la lenteur d'accès causée par le chargement simultané de l'index de tous les fichiers de l'ensemble du site.

Par exemple, le fichier d'index [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) à `blog` dans le projet démo est :