# Caractéristiques du produit

## Traduction `i18` intégrée

Le programme intègre la traduction `i18`. Pour plus de détails, voir [➔ documentation `i18`](/i18).

## Auto-détection de la langue du navigateur

La langue par défaut du site s'ajuste automatiquement à celle du navigateur.

Après un changement manuel de langue par l'utilisateur, ce choix est mémorisé.

Code : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptation pour mobile

Expérience de lecture parfaite également sur les appareils mobiles.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilité front-end élevée

`i18n.site` publiera par défaut le contenu du site sur `npmjs.com`, en s'appuyant sur [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) et d'autres multiples contenus `CDN` hébergés sur `npm`.

De plus, des sources miroir ont été ajoutées en Chine continentale, permettant une accès stable pour les utilisateurs chinois et assurant une **disponibilité front-end élevée**.

Le principe repose sur l'interception des requêtes par le [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), la réémission des requêtes échouées sur d'autres `CDN`, et l'activation, de manière adaptative, du site d'origine répondant le plus rapidement comme source de chargement par défaut.

Code : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Application monopage, chargement ultra-rapide

Le site utilise une architecture d'application monopage, sans actualisation et avec un chargement ultra-rapide lors du changement de page.

## Optimisé pour l'expérience de lecture

### Design soigné

> La beauté de la simplicité est parfaitement rendue dans le design de ce site.
> Il élimine les ornements superflus pour présenter le contenu sous sa forme la plus pure.
> Comme un poème élegant, court mais émouvant.

<p style="text-align:right">── Auteur de I18N.SITE</p>

[➔ Cliquez ici pour voir les styles](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

L'image ci-dessus montre le multilingue `RSS` utilisant `i18n.site` abonnement [inoreader.com](//inoreader.com)

### Chargement de polices en ligne, support du chinois

La page utilise par défaut des polices en ligne comme [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) et [MiSans](https://hyperos.mi.com/font/zh/download/), uniformisant l'expérience de lecture sur différentes plateformes.

De plus, pour accélérer le chargement, les polices sont fractionnées en fonction de la fréquence des caractères.

Code : [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navigation supérieure masquée automatiquement

En défilant vers le bas, la navigation supérieure se masque automatiquement.

En défilant vers le haut, la navigation masquée réapparaît.

Elle s'estompe lorsque la souris est inactive.

Un bouton plein écran est disponible dans le coin supérieur droit de la barre de navigation pour une expérience de lecture immersive.

### É highlight synchronisé du chapitre actuel

En défilant le contenu sur la droite, la table des matières à gauche met en surbrillance le chapitre en cours de lecture.

## Détails stylés

### Éffet de souris

Survoler les boutons de la navigation supérieure avec la souris pour voir des effets stylés.

### Petit fantôme pour `404`

La page `404` comporte un adorable petit fantôme flottant, dont les yeux suivent la souris. [➔ Cliquez ici pour voir](/404)

## Code open source

[Le code est open source](/i18n.site/src). Si vous souhaitez participer au développement, présentez-vous sur [la liste de diffusion](//groups.google.com/u/2/g/i18n-site).

Il y a de nombreuses petites fonctionnalités importantes mais non urgentes. L'équipe de développement attribuera des tâches en fonction de vos compétences techniques et améliorera la documentation de développement en même temps.