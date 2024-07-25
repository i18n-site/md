# Caractéristique Du Produit

## Traduction Intégrée `I18`

Le programme a une traduction `i18` intégrée, veuillez consulter [➔ `i18`](/i18) pour une utilisation spécifique.

## Faire Correspondre Automatiquement La Langue Du Navigateur

La langue par défaut du site Web correspondra automatiquement à la langue du navigateur.

Une fois que l'utilisateur a changé manuellement de langue, son choix sera mémorisé.

Code [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Adaptation Des Terminaux Mobiles

Il existe également une expérience de lecture parfaite sur le téléphone mobile.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Haute disponibilité frontale

Par `i18n.site` , le contenu du site sera publié sur `npmjs.com` , avec l'aide de [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) et de plusieurs `CDN` contenus chargés sur `npm` .

Sur cette base, des sources miroir de Chine continentale ont été ajoutées pour permettre aux utilisateurs chinois d'avoir un accès stable et d'obtenir **une disponibilité frontale élevée** .

Le principe est le suivant : interceptez la requête à l'aide de [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , si la requête échoue, réessayez-la sur un autre `CDN` et activez de manière adaptative la station d'origine qui répond le plus rapidement comme source de chargement par défaut.

Code [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Application D'une Seule Page, Chargement Extrêmement Rapide

Le site Web adopte une architecture d'application monopage, sans actualisation lors du changement de page et avec un chargement extrêmement rapide.

## Optimisé Pour L'expérience De Lecture

### Style Bien Conçu

> La beauté de la simplicité est parfaitement interprétée dans la conception Web de ce site Web.
> Il abandonne les décorations inutiles et présente le contenu dans sa forme la plus pure.
> Comme un beau poème, même s'il est court, il touche le cœur des gens.

<p style="text-align:right">── I18N.SITE</p>

[➔ Cliquez ici pour voir une liste de styles](/i18n.site/md/styl) .

### Chargez Les Polices en Ligne, Prenez en Charge Le Chinois

Par défaut, [les polices rectangulaires variables à deux axes Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) et d'autres polices en ligne sont activées sur la page Web pour unifier l'expérience de lecture des utilisateurs sur différentes plates-formes.

Dans le même temps, afin d'améliorer la vitesse de chargement, les polices sont découpées en fonction des statistiques de fréquence des mots.

Code [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Navigation Supérieure Automatiquement Masquée

Faites défiler vers le bas et la navigation supérieure se masquera automatiquement.

Faites défiler vers le haut et la navigation cachée réapparaîtra.

Il disparaîtra lorsque la souris ne bouge pas.

Il y a un bouton plein écran dans le coin supérieur droit de la barre de navigation pour créer une expérience de lecture de documents immersive.

### Mise en Évidence Synchronisée Du Chapitre en Cours

Lors du défilement du contenu à droite, le contour à gauche mettra simultanément en surbrillance le chapitre en cours de lecture.

## Détails Sympas

### Effets De Souris

Passez votre souris sur le bouton sur le côté droit de la navigation supérieure pour voir des effets spéciaux sympas.

### `404` Le Petit Fantôme

Il y a un joli petit fantôme flottant sur la page `404` ses yeux bougeront avec la souris, [➔ Cliquez ici pour voir](/404) ,

## Codes Open Source

[Le Code est open source](/i18n.site/src) . Si vous souhaitez participer au développement, veuillez vous présenter à [la liste de diffusion](//groups.google.com/u/2/g/i18n-site) .

Il existe de nombreuses petites exigences qui sont importantes mais pas urgentes. L'équipe de développement attribuera des tâches pratiques en fonction de la technologie dans laquelle vous maîtrisez et améliorera les documents de développement tout en attribuant les exigences.

