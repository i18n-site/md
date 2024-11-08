---

brief: |
  i18n.site prend désormais en charge la recherche en texte intégral sans serveur.

  Cet article présente la mise en œuvre d'une technologie de recherche en texte intégral purement frontale, y compris l'index inversé construit par IndexedDB, la recherche de préfixe, l'optimisation de la segmentation des mots et la prise en charge multilingue.

  Par rapport aux solutions existantes, la recherche en texte intégral frontale pure d'i18n.site est petite et rapide, adaptée aux sites Web de petite et moyenne taille tels que les documents et les blogs, et est disponible hors ligne.

---

# Recherche en Texte Intégral Inversée Purement Frontale

## Séquence

Après plusieurs semaines de développement, [i18n.site](//i18n.site) (un outil de création de sites Web & markdown traduction multilingue purement statique) prend désormais en charge la recherche en texte intégral purement frontale.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Cet article partagera la mise en œuvre technique de `i18n.site` recherche en texte intégral frontale pure. Visitez [i18n.site](//i18n.site)

Code open source : [Rechercher dans le noyau](//github.com/i18n-site/ie/tree/main/qy) / [interface interactive](//github.com/i18n-site/plugin/tree/main/qy)

## Un Examen Des Solutions De Recherche en Texte Intégral Sans Serveur

Pour les sites Web purement statiques de petite et moyenne taille, tels que les documents/blogs personnels, la création d'un moteur de recherche en texte intégral auto-construit est trop lourde, et la recherche en texte intégral sans service est le choix le plus courant.

Les solutions de recherche en texte intégral sans serveur se répartissent en deux grandes catégories :

Tout d'abord, similaire [algolia.com](//algolia.com) Les fournisseurs de services de recherche tiers fournissent des composants frontaux pour la recherche en texte intégral.

Ces services nécessitent un paiement basé sur le volume de recherche et sont souvent indisponibles pour les utilisateurs de Chine continentale en raison de problèmes tels que la conformité des sites Web.

Il ne peut pas être utilisé hors ligne, ni sur l’intranet et présente de grandes limitations. Cet article ne discute pas de grand chose.

La seconde est une pure recherche frontale en texte intégral.

À l'heure actuelle, les recherches en texte intégral purement front-end incluent [lunrjs](//lunrjs.com) et [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basées sur `lunrjs` développement secondaire).

`lunrjs` Il existe deux manières de créer des index, et toutes deux ont leurs propres problèmes.

1. Fichiers d'index prédéfinis

   Étant donné que l’index contient des mots de tous les documents, il est de grande taille.
   Chaque fois qu'un document est ajouté ou modifié, un nouveau fichier d'index doit être chargé.
   Cela augmentera le temps d'attente de l'utilisateur et consommera beaucoup de bande passante.

2. Chargez des documents et créez des index à la volée

   La création d'un index est une tâche gourmande en calcul. La reconstruction de l'index à chaque fois que vous y accédez entraînera des retards évidents et une mauvaise expérience utilisateur.

---

En plus de `lunrjs` , il existe d'autres solutions de recherche en texte intégral, telles que :

[fusejs](//www.fusejs.io) , calcule la similarité entre les chaînes à rechercher.

Les performances de cette solution sont extrêmement médiocres et ne peuvent pas être utilisées pour la recherche en texte intégral (voir [Fuse.js Une requête longue prend plus de 10 secondes, comment l'optimiser ?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , utilisez le filtre Bloom pour rechercher, ne peut pas être utilisé pour la recherche de préfixe (par exemple, entrez `goo` , recherchez `good` , `google` ) et ne peut pas obtenir un effet de complétion automatique similaire.

En raison des lacunes des solutions existantes, `i18n.site` a développé une nouvelle solution de recherche plein texte purement frontale, qui présente les caractéristiques suivantes :

1. Prend en charge la recherche multilingue et est de petite taille. La taille du noyau de recherche après l'empaquetage `gzip` est `6.9KB` (à titre de comparaison, la taille de `lunrjs` est `25KB` ).
1. Créez un index inversé basé sur `indexedb` , qui prend moins de mémoire et est rapide.
1. Lorsque des documents sont ajoutés/modifiés, seuls les documents ajoutés ou modifiés sont réindexés, réduisant ainsi le nombre de calculs.
1. Prend en charge la recherche de préfixe et peut afficher les résultats de la recherche en temps réel pendant que l'utilisateur tape.
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
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

dans:

* `/\p{P}/` est une expression régulière qui correspond aux signes de ponctuation. Les symboles correspondants spécifiques incluent : `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` est dû au fait que la segmentation du mot `Firefox` du navigateur ne segmente pas `. ` .</li>


## Création D'index

5 tables de stockage d'objets ont été créées en `IndexedDB` :

* `word` : id - mots
* `doc` : id - Numéro de document url - de version du document
* `docWord` : Tableau du document id - mot id
* `prefix` : Tableau de préfixe - mot id
* `rindex` : Word id - Document id : Tableau de numéros de ligne

Transmettez le tableau du document `url` et du numéro de version `ver` et recherchez si le document existe dans le tableau `doc` S'il n'existe pas, créez un index inversé. Dans le même temps, supprimez l'index inversé pour les documents qui n'ont pas été transmis.

De cette manière, une indexation incrémentielle peut être obtenue et la quantité de calcul est réduite.

Dans l'interaction frontale, la barre de progression du chargement de l'index peut être affichée pour éviter le décalage lors du premier chargement. Voir "Barre de progression avec animation, basée sur une seule progress + Pure css Implémentation" [Anglais](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinois](//juejin.cn/post/7413586285954154522) .

### Écriture Simultanée Élevée IndexedDB

Le projet est [idb](//www.npmjs.com/package/idb) sur la base de l'encapsulation asynchrone de IndexedDB

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

## Précision Et Rappel

La recherche segmentera d’abord les mots-clés saisis par l’utilisateur.

Supposons qu'il y ait `N` mot après la segmentation des mots. Lors du renvoi des résultats, les résultats contenant tous les mots-clés seront renvoyés en premier, puis les résultats contenant `N-1` , `N-2` ,..., `1` mots-clés seront renvoyés.

Les résultats de recherche affichés en premier garantissent l'exactitude de la requête, et les résultats chargés ultérieurement (cliquez sur le bouton Charger plus) assurent le taux de rappel.

![](//p.3ti.site/1727684564.avif)

## Chargement À La Demande

Afin d'améliorer la vitesse de réponse, la recherche utilise le générateur `yield` pour implémenter le chargement à la demande et renvoie `limit` fois qu'un résultat est interrogé.

Notez que chaque fois que vous effectuez une nouvelle recherche après `yield` , vous devez rouvrir une transaction de requête de `IndexedDB` .

## Recherche De Préfixe en Temps Réel

Afin d'afficher les résultats de la recherche pendant que l'utilisateur tape, par exemple lorsque `wor` est saisi, les mots préfixés par `wor` tels que `words` et `work` sont affichés.

![](//p.3ti.site/1727684944.avif)

Le noyau de recherche utilisera la table `prefix` pour le dernier mot après la segmentation des mots afin de trouver tous les mots préfixés par celui-ci et de rechercher dans l'ordre.

La fonction anti-tremblement `debounce` est également utilisée dans l'interaction frontale (implémentée comme suit) pour réduire la fréquence des recherches déclenchant les entrées utilisateur et réduire la quantité de calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponible Hors Ligne

La table d'index ne stocke pas le texte original, uniquement les mots, ce qui réduit la quantité de stockage.

La mise en évidence des résultats de recherche nécessite de recharger le texte original, et la correspondance avec `service worker` peut éviter des requêtes réseau répétées.

Dans le même temps, étant donné que `service worker` met en cache tous les articles, une fois que l'utilisateur effectue une recherche, l'intégralité du site Web, y compris la recherche, est disponible hors ligne.

## Optimisation De L'affichage Des Documents MarkDown

La solution de recherche purement frontale de `i18n.site` est optimisée pour les documents `MarkDown` .

Lors de l'affichage des résultats de la recherche, le nom du chapitre sera affiché et le chapitre sera parcouru lorsque vous cliquerez dessus.

![](//p.3ti.site/1727686552.avif)

## Résumer

Recherche en texte intégral inversée implémentée uniquement sur le front-end, aucun serveur requis. Il convient très bien aux sites Web de petite et moyenne taille tels que les documents et les blogs personnels.

`i18n.site` La recherche frontale pure auto-développée open source, de petite taille et de réponse rapide, résout les lacunes de la recherche frontale pure en texte intégral actuelle et offre une meilleure expérience utilisateur.