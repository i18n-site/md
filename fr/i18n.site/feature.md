# Caractéristiques du produit

## Traduction `i18` intégrée

Le programme intègre la traduction `i18`. Pour plus de détails, voir [➔ documentation `i18`](/i18).

## Automatique correspondance de la langue du navigateur

La langue par défaut du site s'ajuste automatiquement à celle du navigateur.

Après un changement manuel de langue par l'utilisateur, ce choix est mémorisé.

Code : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptation pour mobile

Expérience de lecture parfaite également sur les appareils mobiles.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilité élevée du front-end

`i18n.site` publiera le contenu du site sur `npmjs.com` par défaut, avec l'aide de [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) et d'autres `CDN` contenus chargés sur `npm` .

De plus, des sources miroir ont été ajoutées en Chine continentale pour offrir un accès stable aux utilisateurs chinois, atteignant ainsi une **disponibilité élevée du front-end**.

Le principe est le suivant : intercepter les requêtes avec [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , réessayer les requêtes ayant échoué sur d'autres `CDN` et activer de manière adaptative le site d'origine qui répond le plus rapidement comme source de chargement par défaut.

Code : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Application monopage, chargement ultra-rapide

Le site utilise une architecture d'application monopage pour un chargement ultra-rapide sans actualisation de page.

## Optimisé pour l'expérience de lecture

### Un style soigneusement conçu

> La beauté de la simplicité est parfaitement rendue dans le design des pages de ce site.
> Il élimine les ornements superflus pour présenter le contenu sous sa forme la plus pure.
> Comme un bel poème, court mais émouvant.

<p style="text-align:right">── Auteur de I18N.SITE</p>

[➔ Cliquez ici pour voir les styles](/i18n.site/md/styl).

### Chargement de polices en ligne, support du chinois

La page utilise par défaut des polices en ligne comme [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) pour unifier l'expérience de lecture sur différentes plateformes.

De plus, pour accélérer le chargement, les polices sont fractionnées selon la fréquence des caractères.

Code : [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navigation supérieure masquée automatiquement

La navigation supérieure se masque automatiquement lors du défilement vers le bas.

La navigation masquée réapparaît lors du défilement vers le haut.

Elle s'estompe lorsque la souris est immobile.

Un bouton plein écran est disponible dans le coin supérieur droit de la barre de navigation pour une expérience de lecture immersive.

### Mise en évidence synchronisée du chapitre actuel

Lors du défilement du contenu à droite, l'outline à gauche met en évidence le chapitre actuel.

## Détails stylés

### Effet de souris

Survoler les boutons de la navigation supérieure avec la souris révèle des effets stylés.

### Petit fantôme pour `404`

La page `404` comporte un petit fantôme flottant, dont les yeux suivent la souris. [➔ Voir ici](/404)

## Le code est open source

[Le code est open source](/i18n.site/src). Si vous souhaitez contribuer, vous êtes invité à vous présenter sur [la liste de diffusion](//groups.google.com/u/2/g/i18n-site).

Plusieurs petites fonctionnalités importantes mais non urgentes sont en attente. L'équipe de développement attribuera des tâches en fonction de vos compétences techniques et améliorera la documentation de développement en même temps.