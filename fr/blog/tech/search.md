# Recherche en Texte Intégral Inversée Purement Frontale

## Ordre

Après plusieurs semaines de développement, [i18n.site](//i18n.site) (un outil de création de sites Web & markdown traduction multilingue purement statique) prend désormais en charge la recherche en texte intégral purement frontale.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Article détaillé sur la mise en œuvre technique de la recherche en texte intégral front-end pure sur `i18n.site`. Visitez [i18n.site](//i18n.site) pour expérimenter les fonctionnalités de recherche.

Le code est open source : [kernel de recherche](//github.com/i18n-site/ie/tree/main/qy) / [interface utilisateur](//github.com/i18n-site/plugin/tree/main/qy)

## Un Aperçu Des Solutions De Recherche En Texte Intégral Sans Serveur

Pour les sites Web purement statiques de petite et moyenne taille, tels que les documents/blogs personnels, la création d'un moteur de recherche en texte intégral auto-construit est trop lourde, et la recherche en texte intégral sans service est le choix le plus courant.

Les solutions de recherche en texte intégral sans service se divisent en deux catégories principales :

La première, à l'image de [algolia.com](//algolia.com), propose des fournisseurs de services de recherche tiers qui offrent des composants front-end pour la recherche en texte intégral.

Ces services nécessitent un paiement en fonction du volume de recherche et sont souvent inaccessibles aux utilisateurs de Chine continentale en raison de questions de conformité du site.

Il ne peut pas être utilisé hors ligne, ni sur l’intranet et présente de grandes limitations. Cet article ne discute pas de grand chose.

La seconde catégorie concerne la recherche en texte intégral purement front-end.

À l'heure actuelle, les solutions courantes pour la recherche en texte intégral纯前端的全文搜索 purely front-end incluent [lunrjs](//lunrjs.com) et [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (développé à partir de `lunrjs`).

`lunrjs` propose deux méthodes de construction d'index, chacune avec ses propres problèmes.

1. Fichiers d'index prédéfinis

   Étant donné que l’index contient des mots de tous les documents, il est de grande taille.
   Chaque fois qu'un document est ajouté ou modifié, un nouveau fichier d'index doit être chargé.
   Cela augmentera le temps d'attente de l'utilisateur et consommera beaucoup de bande passante.

2. Chargez des documents et créez des index à la volée

   La création d'un index est une tâche gourmande en calcul. La reconstruction de l'index à chaque fois que vous y accédez entraînera des retards évidents et une mauvaise expérience utilisateur.

---

En plus de `lunrjs` , il existe d'autres solutions de recherche en texte intégral, telles que :

[fusejs](//www.fusejs.io) utilise l'analyse de similarité entre les chaînes pour effectuer des recherches.

Ce type de solution présente une performance très faible et n'est pas adapté pour une recherche en texte intégral (voir [Fuse.js : requêtes longues dépassant 10 secondes, comment optimiser ?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) utilise des filtres Bloom pour la recherche, mais ne permet pas la recherche par préfixe (par exemple, saisir `goo` pour chercher `good` ou `google`), ni l'effet de complétion automatique similaire.

Compte tenu des inconvénients des solutions actuelles, `i18n.site` a développé une nouvelle solution de recherche en texte intégral purement front-end, caractérisée par les éléments suivants :

1. Prend en charge la recherche multilingue, est de petite taille et le noyau de recherche après l'empaquetage `gzip` ne pèse que `6.9KB` (comparé à `lunrjs` qui pèse `25KB`)
1. Créez un index inversé basé sur `indexedb` , qui prend moins de mémoire et est rapide
1. Lorsque des documents sont ajoutés/modifiés, seuls les documents ajoutés ou modifiés sont réindexés, réduisant ainsi le nombre de calculs
1. Prend en charge la recherche par préfixe, qui peut afficher les résultats de la recherche en temps réel pendant que l'utilisateur tape
1. Disponible hors ligne

Ci-dessous, `i18n.site` détails de mise en œuvre technique seront présentés en détail.

## Segmentation De Mots Multilingues

La segmentation des mots utilise la segmentation des mots native du navigateur `Intl.Segmenter` , et tous les navigateurs grand public prennent en charge cette interface.

![](//p.3ti.site/1727667759.avif)

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

En termes d'interaction utilisateur, il est possible d'afficher une barre de progression du chargement de l'index pour éviter un plantage lors du premier chargement. Voir "Barre de progression animée, réalisée avec une simple progress + CSS pur" [en anglais](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [en chinois](//juejin.cn/post/7413586285954154522).

### Écriture Simultanée Élevée IndexedDB

Le projet est développé sur la base de l'encapsulation asynchrone d'IndexedDB via [idb](//www.npmjs.com/package/idb).

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

![](//p.3ti.site/1727684944.avif)

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

## Précision Et Rappel

La recherche segmentera d’abord les mots-clés saisis par l’utilisateur.

Supposons qu'il y ait `N` mot après la segmentation des mots, retournera d'abord les résultats contenant tous les mots-clés, puis les résultats contenant `N-1` , `N-2` ,…, `1` mots-clés.

Les résultats de recherche affichés en premier garantissent l'exactitude de la requête, et les résultats chargés ultérieurement (cliquez sur le bouton Charger plus) assurent le taux de rappel.

![](//p.3ti.site/1727684564.avif)

## Chargement À La Demande

Afin d'améliorer la vitesse de réponse, la recherche utilise le générateur `yield` pour implémenter le chargement à la demande et renvoie `limit` fois qu'un résultat est interrogé.

Notez que chaque fois que vous effectuez une nouvelle recherche après `yield` , vous devez rouvrir une transaction de requête de `IndexedDB` .

## Recherche De Préfixe en Temps Réel

Afin d'afficher les résultats de la recherche pendant que l'utilisateur tape, par exemple lorsque `wor` est saisi, les mots préfixés par `wor` tels que `words` et `work` sont affichés.

![](//p.3ti.site/1727684944.avif)

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

![](//p.3ti.site/1727686552.avif)

## Synthèse

Recherche en texte intégral inversée entièrement réalisée sur le front-end, sans nécessiter de serveur. Idéale pour les sites web de petite et moyenne taille comme les documents et les blogs personnels.

La solution de recherche front-end pure développée par `i18n.site` est open source, compacte et rapide, résolvant les problèmes actuels des recherches en texte intégral front-end et offrant une meilleure expérience utilisateur.