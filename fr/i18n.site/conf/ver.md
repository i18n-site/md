# Version Du Projet

Prenons l'exemple du projet de démonstration :

`en/demo2/v` est le numéro de version actuelle du projet, qui sera affiché à droite du nom du projet dans le plan de la barre latérale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` le code langue correspondant à la langue source de traduction `.i18n/conf.yml` .

Si votre langue source n'est pas l'anglais, alors le fichier `v` doit être placé dans le répertoire de projet de votre langue source. 

La possibilité de parcourir les versions historiques des documents est en cours de développement.

Il est recommandé de modifier uniquement le numéro de version du document lors de la publication de mises à jour majeures (telles que `v1` , `v2` ) pour éviter d'encombrer les pages indexées par les moteurs de recherche en raison d'un trop grand nombre de numéros de version.

## Utilisez Des Fichiers `v` Vides Pour Diviser Les Index De Fichiers Pour Différents Projets

Dans le projet de démonstration, en plus de `en/demo2/v` , vous pouvez également voir que le contenu des répertoires `en/blog` et `en/demo1` est vide `v` files.

Vide `v` ne sera pas affiché dans le contour de la barre latérale, mais tant que le fichier `v` existe, un index indépendant sera généré pour les fichiers du répertoire et des sous-répertoires.

En divisant les index de différents projets, vous pouvez éviter la lenteur d'accès causée par le chargement simultané de l'index de tous les fichiers de l'ensemble du site.

Par [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) , dans le projet démo `blog` le fichier d'index correspondant est :

