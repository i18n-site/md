---

brief: |
  i18n.site ara admet la cerca de text complet sense servidor.

  Aquest article presenta la implementació de la tecnologia de cerca de text complet de front-end pura, inclòs l'índex invertit creat per IndexedDB, la cerca de prefix, l'optimització de la segmentació de paraules i el suport multi-idioma.

  En comparació amb les solucions existents, la cerca de text complet de front-end pura d'i18n.site és de mida petita i ràpida, adequada per a llocs web de mida petita i mitjana, com ara documents i blocs, i està disponible fora de línia.

---

# Cerca De Text Complet Invertida Pura De Front-End

## Seqüència

Després de diverses setmanes de desenvolupament, [i18n.site](//i18n.site) (una eina de creació de llocs web & markdown traducció multilingüe purament estàtica) ara admet la cerca de text complet de front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Aquest article compartirà la implementació tècnica de la cerca de text complet `i18n.site` [i18n.site](//i18n.site) experimentar l'efecte de cerca.

Codi de codi obert : [Cerca del nucli](//github.com/i18n-site/ie/tree/main/qy) / [interfície interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Una Revisió De Les Solucions De Cerca De Text Complet Sense Servidor

Per als llocs web purament estàtics de mida petita i mitjana, com ara documents/blocs personals, la creació d'un backend de cerca de text complet autoconstruït és massa pesat i la cerca de text complet sense servei és l'opció més habitual.

Les solucions de cerca de text complet sense servidor es divideixen en dues grans categories:

En primer lloc [algolia.com](//algolia.com) els proveïdors de serveis de cerca de tercers ofereixen components de front-end per a la cerca de text complet.

Aquests serveis requereixen un pagament en funció del volum de cerca i sovint no estan disponibles per als usuaris de la Xina continental a causa de problemes com ara el compliment del lloc web.

No es pot utilitzar fora de línia, no es pot utilitzar a la intranet i té grans limitacions. Aquest article no parla gaire.

El segon és la cerca de text complet de front-end pura.

Actualment, les cerques de text complet de front-end purs habituals inclouen [lunrjs](//lunrjs.com) i [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basades en `lunrjs` desenvolupament secundari).

`lunrjs` Hi ha dues maneres de crear índexs, i ambdues tenen els seus propis problemes.

1. Fitxers d'índex preconstruïts

   Com que l'índex conté paraules de tots els documents, és de gran mida.
   Sempre que s'afegeix o es modifica un document, s'ha de carregar un nou fitxer d'índex.
   Augmentarà el temps d'espera de l'usuari i consumirà molt d'ample de banda.

2. Carregueu documents i creeu índexs sobre la marxa

   La creació d'un índex és una tasca computacionalment intensiva. Reconstruir l'índex cada vegada que hi accediu provocarà retards evidents i una mala experiència d'usuari.

---

A més de `lunrjs` , hi ha altres solucions de cerca de text complet, com ara :

[fusejs](//www.fusejs.io) , calcula la similitud entre les cadenes per cercar.

El rendiment d'aquesta solució és extremadament baix i no es pot utilitzar per a la cerca de text complet (vegeu [Fuse.js La consulta llarga triga més de 10 segons, com optimitzar-la?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) utilitzeu el filtre Bloom per cercar, no es pot utilitzar per a la cerca de prefix (per exemple, introduïu `goo` , cerca `good` , `google` ) i no pot aconseguir un efecte de finalització automàtica similar.

A causa de les deficiències de les solucions existents, `i18n.site` va desenvolupar una nova solució de cerca de text complet de front-end pura, que té les característiques següents :

1. Admet la cerca en diversos idiomes i té una mida petita. La mida del nucli de cerca després de l'empaquetament `gzip` és `6.9KB` (per a la comparació, la mida de `lunrjs` és `25KB` ).
1. Creeu un índex invertit basat en `indexedb` , que ocupa menys memòria i és ràpid.
1. Quan s'afegeixen/modifiquen documents, només es tornen a indexar els documents afegits o modificats, reduint la quantitat de càlculs.
1. Admet la cerca de prefix i pot mostrar els resultats de la cerca en temps real mentre l'usuari està escrivint.
1. Disponible fora de línia

A continuació, s'introduiran detalladament `i18n.site` detalls tècnics d'implementació.

## Segmentació De Paraules Multilingües

La segmentació de paraules utilitza la segmentació de paraules nativa del navegador `Intl.Segmenter` , i tots els navegadors principals admeten aquesta interfície.

![](//p.3ti.site/1727667759.avif)

El codi de segmentació de paraules `coffeescript` és el següent

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

en:

* `/\p{P}/` és una expressió regular que coincideix amb els signes de `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` és perquè la segmentació de paraules del navegador `Firefox` no segmenta `. ` .</li>


## Edifici D'índex

Es van crear 5 taules d'emmagatzematge d'objectes a `IndexedDB` :

* `word` : id -
* `doc` : id - Document url - Número de versió del document
* `docWord` : Matriu del document id - word id
* `prefix` : Matriu del prefix - paraula id
* `rindex` Word id - : id : Matriu de números de línia

Passeu la matriu del document `url` i el número de versió `ver` i cerqueu si el document existeix a la taula `doc` Si no existeix, creeu un índex invertit. Al mateix temps, elimineu l'índex invertit per als documents que no s'han passat.

D'aquesta manera, es pot aconseguir una indexació incremental i es redueix la quantitat de càlcul.

En la interacció frontal, es pot mostrar la barra de progrés de la càrrega de l'índex per evitar el retard quan es carrega per primera vegada. Vegeu "Barra de progrés amb animació, basada en una implementació única progress + Pure css " [Anglès](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Xinès](//juejin.cn/post/7413586285954154522) .

### Escriptura Concurrent Alta d'IndexedDB

El projecte es [idb](//www.npmjs.com/package/idb) a partir de l'encapsulament asíncron de IndexedDB

Les lectures i escriptures d'IndexedDB són asíncrones. Quan es crea un índex, els documents es carregaran simultàniament per crear l'índex.

Per evitar la pèrdua parcial de dades causada per l'escriptura competitiva, podeu consultar el codi `coffeescript` a continuació i afegir una memòria cau `ing` entre la lectura i l'escriptura per interceptar les escriptures competidores.

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

## Precisió I Record

La cerca segmentarà primer les paraules clau introduïdes per l'usuari.

Suposem que hi ha `N` paraules després de la segmentació de paraules En retornar resultats, primer es retornaran els resultats que continguin totes les paraules clau, i després es retornaran els resultats que continguin `N-1` , `N-2` ,..., `1` paraules clau.

Els resultats de la cerca que es mostren primer asseguren la precisió de la consulta i els resultats carregats posteriorment (feu clic al botó Carrega més) asseguren la taxa de recuperació.

![](//p.3ti.site/1727684564.avif)

## Càrrega Sota Demanda

Per tal de millorar la velocitat de resposta, la cerca utilitza el generador `yield` per implementar la càrrega sota demanda i retorna `limit` vegada que es consulta un resultat.

Tingueu en compte que cada vegada que torneu a cercar després de `yield` , haureu de tornar a obrir una transacció de consulta d' `IndexedDB` .

## Prefix De Cerca en Temps Real

Per mostrar els resultats de la cerca mentre l'usuari està escrivint, per exemple, quan s'introdueix `wor` , es mostren paraules amb el prefix `wor` com ara `words` i `work` .

![](//p.3ti.site/1727684944.avif)

El nucli de cerca utilitzarà la taula `prefix` per a l'última paraula després de la segmentació de paraules per trobar totes les paraules amb el prefix i cercar en seqüència.

La funció anti-shake `debounce` també s'utilitza en la interacció frontal (implementada de la següent manera) per reduir la freqüència d'entrada de l'usuari que desencadena cerques i reduir la quantitat de càlcul.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponible Fora De Línia

La taula d'índex no emmagatzema el text original, només les paraules, la qual cosa redueix la quantitat d'emmagatzematge.

Ressaltar els resultats de la cerca requereix tornar a carregar el text original i fer coincidir `service worker` pot evitar sol·licituds repetides de xarxa.

Al mateix temps, com que `service worker` guarda a la memòria cau tots els articles, un cop l'usuari realitza una cerca, tot el lloc web, inclosa la cerca, està disponible fora de línia.

## Optimització De Visualització Dels Documents MarkDown

La solució de cerca frontal pura de `i18n.site` està optimitzada per a `MarkDown` documents.

Quan es mostrin els resultats de la cerca, es mostrarà el nom del capítol i es navegarà pel capítol quan es faci clic.

![](//p.3ti.site/1727686552.avif)

## Resumir

La cerca invertida de text complet s'ha implementat exclusivament a la portada, no cal cap servidor. És molt adequat per a llocs web petits i mitjans com ara documents i blocs personals.

`i18n.site` La cerca de front-end pura autodesenvolupada de codi obert, de mida petita i resposta ràpida, resol les deficiències de la cerca de text complet de front-end pura actual i ofereix una millor experiència d'usuari.