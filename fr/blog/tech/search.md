# Recherche en Texte Intégral Inversée Purement Frontale

## Ordre

Après plusieurs semaines de développement, [i18n.site](//i18n.site) (un outil de création de sites Web & markdown traduction multilingue purement statique) prend désormais en charge la recherche en texte intégral purement frontale.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Cet article partagera la mise en œuvre de `i18n.site` technologie de recherche en texte intégral frontale pure. [i18n.site](//i18n.site) Vous pouvez découvrir l'effet de recherche.

Code [du noyau de recherche](//github.com/i18n-site/ie/tree/main/qy) [open](//github.com/i18n-site/plugin/tree/main/qy) source /

## Un Aperçu Des Solutions De Recherche En Texte Intégral Sans Serveur

Pour les petits sites Web tels que les documents/blogs personnels qui sont purement statiques, il est sans aucun doute trop lourd de créer vous-même un backend de recherche en texte intégral, et la recherche en texte intégral sans services est sans aucun doute un meilleur choix.

Les solutions de recherche en texte intégral sans serveur existantes se répartissent en deux grandes catégories.

L'un est un fournisseur de services de recherche tiers similaire à [algolia.com](//algolia.com) qui fournit des composants de recherche en texte intégral front-end.

Ces services sont payants et ne sont pas disponibles pour les utilisateurs en Chine continentale en raison de problèmes de conformité du site Web.

Il ne peut pas être utilisé hors ligne, ni sur l’intranet et présente de grandes limitations. Cet article ne discute pas de grand chose.

La seconde est une pure recherche de texte intégral frontale.

Les recherches en texte intégral purement frontales les plus connues incluent [lunrjs](https://lunrjs.com) et [ ElasticLunr.js][https://github.com/weixsong/elasticlunr.js](基于`lunrjs`二次开发).

`lunrjs` a deux manières de créer des index, mais elles ont toutes leurs propres problèmes.

1. Fichiers d'index prédéfinis

   Étant donné que l’index contient des mots de tous les documents, il est de grande taille.
   Chaque fois qu'un document est ajouté ou modifié, un nouveau fichier d'index doit être chargé.
   Cela augmentera le temps d'attente de l'utilisateur et consommera beaucoup de bande passante.

2. Chargez des documents et créez des index à la volée

   La création d'un index est une tâche gourmande en calcul. La reconstruction de l'index à chaque fois que vous y accédez entraînera des retards évidents et une mauvaise expérience utilisateur.

En plus de `lunrjs` , il existe d'autres solutions de recherche en texte intégral, telles que :

[fusejs](https://www.fusejs.io) , calcule la similarité entre les chaînes à rechercher.

Les performances de cette solution sont extrêmement médiocres et ne peuvent pas être utilisées pour la recherche en texte intégral (voir [Fuse.js Une requête longue prend plus de 10 secondes, comment l'optimiser ?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) , utilisez le filtre Bloom pour rechercher, ne peut pas être utilisé pour la recherche de préfixe (par exemple, entrez `goo` , recherchez `good` , `google` ) et ne peut pas obtenir un effet de complétion automatique similaire.

Insatisfait des lacunes des solutions existantes, `i18n.site` a développé une nouvelle solution de recherche en texte intégral purement front-end, qui présente les fonctionnalités suivantes :

1. Prend en charge la recherche multilingue, est de petite taille et le noyau de recherche après l'empaquetage `gzip` ne pèse que `6.9KB` (comparé à `lunrjs` qui pèse `25KB`)
1. Créez un index inversé basé sur `indexedb` , qui prend moins de mémoire et est rapide
1. Lorsque des documents sont ajoutés/modifiés, seuls les documents ajoutés ou modifiés sont réindexés, réduisant ainsi le nombre de calculs
1. Prend en charge la recherche par préfixe, qui peut afficher les résultats de la recherche en temps réel pendant que l'utilisateur tape
1. Disponible hors ligne

Ci-dessous, `i18n.site` détails de mise en œuvre technique seront présentés en détail.

## Segmentation De Mots Multilingues

La segmentation des mots utilise la segmentation des mots native du navigateur `Intl.Segmenter` , et tous les navigateurs grand public prennent en charge cette interface.

![](https://p.3ti.site/1727667759.avif)

Le code de segmentation de mots `coffeescript` est le suivant

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

dans:

* `/\p{P}/` est une expression régulière qui correspond aux signes de ponctuation. Les symboles correspondants spécifiques incluent : `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` est dû au fait que la segmentation du mot `Firefox` du navigateur ne segmente pas `.` .</li>


## Création D'index

5 tables de stockage d'objets ont été créées en `IndexedDB` :

* `word` : id - mots
* `doc` : id - Numéro de document url - de version du document
* `docWord` : Tableau du document id - mot id
* `prefix` : Tableau de préfixe - mot id
* `rindex` : Word id - Document id : Tableau de numéros de ligne

Transmettez le tableau du document `url` et du numéro de version `ver` et recherchez si le document existe dans le tableau `doc` S'il n'existe pas, créez un index inversé. Dans le même temps, supprimez l'index inversé pour les documents qui n'ont pas été transmis.

De cette manière, une indexation incrémentielle peut être obtenue et la quantité de calcul est réduite.

Dans l'interaction frontale, la barre de progression du chargement de l'index peut être affichée pour éviter le décalage lors du premier chargement. Voir "Barre de progression avec animation, basée sur une seule progress + Pure css Implémentation"[英文](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [中文](https://juejin.cn/post/7413586285954154522) .

### Écriture Simultanée Élevée IndexedDB

Le projet est [idb](https://www.npmjs.com/package/idb) sur la base de l'encapsulation asynchrone de IndexedDB

Les lectures et écritures IndexedDB sont asynchrones. Lors de la création d'un index, les documents seront chargés simultanément pour créer l'index.

Afin d'éviter une perte partielle de données causée par une écriture compétitive, vous pouvez vous référer au code `coffeescript` ci-dessous et ajouter un cache `ing` entre la lecture et l'écriture pour intercepter les écritures concurrentes.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Recherche De Préfixe en Temps Réel

Afin d'afficher les résultats de la recherche pendant que l'utilisateur tape, par exemple lorsque `wor` est saisi, les mots préfixés par `wor` tels que `words` et `work` sont affichés.

![](https://p.3ti.site/1727684944.avif)

Le noyau de recherche utilisera la table `prefix` pour le dernier mot après la segmentation des mots afin de trouver tous les mots préfixés par celui-ci et de rechercher dans l'ordre.

La fonction anti-tremblement `debounce` est également utilisée dans l'interaction frontale (implémentée comme suit), pour réduire la fréquence des recherches déclenchant les entrées utilisateur et réduire la quantité de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Précision Et Rappel

La recherche segmentera d’abord les mots-clés saisis par l’utilisateur.

Supposons qu'il y ait `N` mot après la segmentation des mots, retournera d'abord les résultats contenant tous les mots-clés, puis les résultats contenant `N-1` , `N-2` ,…, `1` mots-clés.

Les résultats de recherche affichés en premier garantissent l'exactitude de la requête, et les résultats chargés ultérieurement (cliquez sur le bouton Charger plus) assurent le taux de rappel.

![](https://p.3ti.site/1727684564.avif)

## Chargement À La Demande

Afin d'améliorer la vitesse de réponse, la recherche utilise le générateur `yield` pour implémenter le chargement à la demande et renvoie `limit` fois qu'un résultat est interrogé.

Notez que chaque fois que vous effectuez une nouvelle recherche après `yield` , vous devez rouvrir une transaction de requête de `IndexedDB` .

## Recherche De Préfixe en Temps Réel

Afin d'afficher les résultats de la recherche pendant que l'utilisateur tape, par exemple lorsque `wor` est saisi, les mots préfixés par `wor` tels que `words` et `work` sont affichés.

![](https://p.3ti.site/1727684944.avif)

Le cœur de recherche utilise la table `prefix` pour le dernier mot après le fractionnement, afin de trouver tous les mots qui commencent par ce préfixe et de les chercher successivement.

L'interface utilisateur front-end intègre une fonction anti-rebonds `debounce` (implémentée comme suit) pour réduire la fréquence des déclenchements de recherche lors de la saisie des utilisateurs, diminuant ainsi la charge de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponible hors ligne

La table d'index ne stocke pas le texte original, mais uniquement les mots, ce qui réduit la quantité de stockage nécessaire.

Pour mettre en évidence les résultats de recherche, il est nécessaire de recharger le texte original, et l'utilisation de `service worker` permet d'éviter des requêtes réseau redondantes.

De plus, comme `service worker` met en cache tous les articles, une fois que l'utilisateur a effectué une recherche, l'ensemble du site, y compris la fonction de recherche, devient accessible hors ligne.

## Optimisation de l'affichage des documents Markdown

La solution de recherche intégralement frontale de `i18n.site` a été optimisée pour les documents en `Markdown`.

Lors de l'affichage des résultats de recherche, le nom du chapitre est affiché et, lors d'un clic, il est possible de se positionner directement sur ce chapitre.

![](https://p.3ti.site/1727686552.avif)

## Synthèse

La recherche full-text inversée, entièrement réalisée sur le front-end, offre une rapidité de réponse et n'a pas besoin de serveur.

Tres adaptée aux sites de petite et moyenne envergure, tels que les documents et les blogs personnels.