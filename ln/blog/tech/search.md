# Pure Front-End Inversé Recherche Ya Texte Mobimba

## Ndenge Esalemaka

Sima ya ba semaines ebele ya développement, [i18n.site](//i18n.site) (esaleli ya kotonga site internet markdown multilingualtranslation & purement statique) ezali sikoyo ko soutenir pure front-end full-text search.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Lisolo oyo ekokabola mise en œuvre ya `i18n.site` pure front-end full-text technologie Visit [i18n.site](//i18n.site)

Code [ya recherche](//github.com/i18n-site/ie/tree/main/qy) ya source ouverte [Interface interactive](//github.com/i18n-site/plugin/tree/main/qy) /

## Botali Ya Mozindo Ya Ba Solutions Ya Boluki Ya Texte Mobimba Sans Serveur

Mpo na ba site internet ya mike lokola mikanda/blogs personnels oyo ezali purement statique, ezali na ntembe te kilo mingi mpo na kotonga backend ya boluki ya makomi mobimba yo moko, mpe boluki ya makomi mobimba kozanga ba services ezali na ntembe te kilo ya malamu koleka.

Ba solutions ya boluki ya texte mobimba oyo ezali na serveur te ekweyi na ba catégories mibale ya minene.

Moko ezali mopesi ya service ya boluki ya bato mosusu oyo ekokani na [algolia.com](//algolia.com) oyo epesaka ba composants ya boluki ya makomi mobimba ya liboso.

Misala ya boye esengaka kofuta mpe ezali te mpo na basaleli na Chine continent mpo na makambo ya botosi ya site internet.

Ekoki kosalelama te na nzela ya Internet te, ekoki kosalelama te na intranet, mpe ezali na bandelo minene. Lisolo oyo elobeli makambo mingi te.

Ya mibale ezali boluki ya makomi mobimba ya liboso ya pɛto.

Bolukiluki ya makomi mobimba ya peto oyo eyebani mingi ezali na [lunrjs](https://lunrjs.com) mpe [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` Ezali na ndenge mibale ya kotonga ba index, kasi nyonso mibale ezali na mikakatano na yango.

1. Ba fichiers ya index oyo etongami liboso

   Lokola index ezali na maloba oyo euti na mikanda nyonso, ezali monene na bonene.
   Ntango nyonso oyo mokanda moko ebakisami to ebongwani, esengeli kokɔtisa fisyé ya sika ya index.
   Ekomatisaka temps ya kozela ya usager mpe eko consommer bande passante ebele.

2. Charger ba documents pe tonga ba index na vol

   Kotonga index ezali mosala oyo esɛngaka calcul mingi Kotonga lisusu index mbala nyonso oyo okokɔta na yango ekosala ete ezala na retard ya polele mpe ekosala ete mosaleli ezala malamu te.

Longola `lunrjs` , ezali na mwa ba solutions mosusu ya boluki ya makomi mobimba, lokola :

[fusejs](https://www.fusejs.io) , sala calcul ya bokokani kati na ba chaînes oyo esengeli koluka.

Performance ya solution oyo ezali très mauvaise mpe ekoki kosalelama te pona recherche ya texte mobimba (tala [Fuse.js Requête ya molayi ezo zua plus de 10 secondes, ndenge nini ko optimiser yango?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) `goo` `good` `google`

Na insatisfaction na ba manques ya ba solutions existantes, `i18n.site` a développer solution ya sika ya recherche ya texte complet ya front-end pure, oyo ezali na ba fonctionnalités oyo elandi :

1. Ezali kosunga boluki ya minoko mingi mpe ezali moke na bonene Bonene ya noyau ya boluki nsima ya emballage `gzip` ezali `6.9KB` (mpo na bokokanisi, bonene ya `lunrjs` ezali `25KB` )
1. Tongela index inversé oyo esalemi na `indexedb` , oyo ezuaka mémoire moke mpe ezalaka mbangu.
1. Tango mikanda ebakisami/ebongwani, kaka mikanda oyo ebakisami to oyo ebongisami nde ezongisami na index, ekitisaka motango ya ba calculs.
1. Esungaka boluki ya liboso, oyo ekoki kolakisa ba résultats ya boluki na tango ya solo tango mosaleli azali kokoma.
1. Ezali na nzela ya internet te

Na se, `i18n.site` ba détails techniques ya mise en œuvre eko kotisama na bozindo.

## Kokabola Maloba Na Minɔkɔ Mingi

Bokabwani ya maloba esalela bokaboli maloba ya mboka ya navigateur `Intl.Segmenter` , mpe ba navigateurs nionso ya monene esungaka interface oyo.

![](https://p.3ti.site/1727667759.avif)

Code ya segmentation ya liloba `coffeescript` ezali boye

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

na:

* `/\p{P}/` ezali elobeli ya mbala na mbala oyo ekokani na bilembo ya bopemisi bilembo ya sikisiki oyo ekokani na yango ezali: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` ezali mpo ete `Firefox` segmentation ya maloba ya navigateur e segmentation `.` te .</li>


## Ndako Ya Index

5 tableaux ya stockage ya objet esalemaki na `IndexedDB` :

* `word` maloba : id -
* `doc` : id - Mokanda url - Mokanda motángo ya version
* `docWord` : Array ya mokanda id - liloba id
* `prefix` : Array ya préfixe - liloba id
* `rindex` : Liloba id - Mokanda id : Molongo ya mituya ya milɔngɔ

Lekisa na kati ya array ya mokanda `url` mpe version numéro `ver` , mpe luka soki mokanda ezali na tableau `doc` Soki ezali te, sala index inversé. Bobele na ntango yango, longola index inversé mpo na mikanda wana oyo elekaki te.

Na ndenge wana, indexation incrementale ekoki kosalema mpe motango ya calcul ekitisama.

Na interaction ya liboso, barre ya progression ya chargement ya index ekoki kolakisa pona ko éviter retard tango ya chargement pona mbala ya liboso Tala "Barre ya progression na Animation, Basé na unique progress + Pure css Implementation" [Anglais](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinois](https://juejin.cn/post/7413586285954154522) .

### IndexedDB Ya Likolo Ya Bokomi Ya Mbala Moko

Projet oyo [idb](https://www.npmjs.com/package/idb) na nzela ya encapsulation asynchrone ya IndexedDB

IndexedDB kotanga pe kokoma ezali asynchrone. Ntango ozali kosala index, mikanda ekozwama na mbala moko mpo na kosala index.

Pona ko éviter perte partielle ya ba données oyo esalemi na écriture ya concurrence, okoki ko référer na code `coffeescript` oyo ezali awa na se pe kobakisa cache `ing` entre lecture na kokoma pona ko intercepter ba écritures concurrentes.

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

## Prefix Boluki Na Tango Ya Solo

Mpo na kolakisa ba résultats ya boluki tango mosaleli azali kokoma, na ndakisa, tango bakomi `wor` , maloba oyo ezali na liboso ya `wor` lokola `words` mpe `work` elakisami.

![](https://p.3ti.site/1727684944.avif)

Noyau ya boluki ekosalela tableau `prefix` pona liloba ya suka sima ya bopanzani ya maloba pona koluka maloba nionso oyo etiamaki liboso na yango, pe koluka na molongo.

Fonction anti-shake `debounce` esalelamaka pe na interaction ya front-end (e mise en œuvre boye) pona ko réduire fréquence ya entrée ya usager oyo e déclenchaka ba recherches pe ko réduire quantité ya calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Bosikisiki Mpe Kokanisa

Boluki ekokabola liboso maloba ya ntina oyo mosaleli akotisi.

Kanisa ete ezali na maloba `N` sima ya bopanzani ya maloba Tango ozali kozongisa ba résultats, ba résultats oyo ezali na ba mots clés nionso ekozongisama liboso, mpe sima ba résultats oyo ezali na `N-1` , `N-2` ,..., `1` mots clés ekozonga.

Ba résultats ya recherche oyo elakisami liboso e assurer exactitude ya requête, mpe ba résultats oyo e charger sima (cliquer bouton charge plus) e assurer taux ya rappel.

![](https://p.3ti.site/1727684564.avif)

## Charge Na Demande

Pona kobongisa vitesse ya réponse, boluki esalela générateur `yield` pona ko mettre en œuvre chargement sur demande, pe ezo zonga mbala `limit` oyo ba requêter résultat.

Simbá ete mbala nyonso oyo ozali koluka lisusu nsima ya `yield` , osengeli kofungola lisusu transaction ya motuna ya `IndexedDB` .

## Prefix Boluki Na Tango Ya Solo

Mpo na kolakisa ba résultats ya boluki tango mosaleli azali kokoma, na ndakisa, tango bakomi `wor` , maloba oyo ezali na liboso ya `wor` lokola `words` mpe `work` elakisami.

![](https://p.3ti.site/1727684944.avif)

Noyau ya boluki ekosalela tableau `prefix` pona liloba ya suka sima ya bopanzani ya maloba pona koluka maloba nionso oyo etiamaki liboso na yango, pe koluka na molongo.

Fonction anti-shake `debounce` esalelamaka pe na interaction ya front-end (e mise en œuvre boye) pona ko réduire fréquence ya entrée ya usager oyo e déclenchaka ba recherches pe ko réduire quantité ya calcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ezali Na Nzela Ya Internet Te

Tableau ya index ebombaka makomi ya ebandeli te, kaka maloba, yango ekitisaka motango ya kobombama.

Komonisa ba résultats ya boluki esengaka ko recharger texte original, mpe ko correspondre `service worker` ekoki ko éviter ba demandes ya réseau mbala na mbala.

En même temps, lokola `service worker` e cacher ba articles nionso, mbala moko usager asali recherche, site internet mobimba, y compris recherche, ezali disponible hors ligne.

## Optimisation Ya Kolakisa Ya Mikanda Ya MarkDown

`i18n.site` 's pure front-end recherche solution ezali optimisée pona `MarkDown` mikanda.

Ntango ozali kolakisa ba résultats ya boluki, kombo ya mokapo ekobima mpe mokapo ekozala navigué tango o cliqué.

![](https://p.3ti.site/1727686552.avif)

## Lobelá Na Mokuse

Boluki ya makomi mobimba inversée esalemi kaka na liboso, na eyano ya mbangu mpe na ntina ya serveur te.

Ebongi mingi mpo na ba site internet ya mike mpe ya monene lokola mikanda mpe ba blogs personnels.