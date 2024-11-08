---

brief: |
  i18n.site kunan yanapakun mana servidorniyuq hunt'asqa qillqa maskana.

  Kay qillqasqaqa ch'uya ñawpaq-tukuy hunt'asqa qillqa maskana tecnologia ruwayta riqsichin, chaymanta IndexedDB kaqwan ruwasqa invertido indis, ñawpaq simi maskana, simikuna t'aqay allinchay chaymanta achka simi yanapakuy.

  Kunan kaq allichaykunawan tupachisqa, i18n.site ch'uya ñawpaq-tukuy hunt'a qillqa maskana huch'uy sayayniyuq chaymanta utqaylla, huch'uy chaymanta chawpi hatun web kitikuna qillqakuna chaymanta blogkuna hina allin, chaymanta mana tinkisqa kaqpi tarikun.

---

# Ch'uya Ñawpaq-Tukuy Tikrasqa Hunt'asqa Qillqa Maskana

## Qati Qati

Achka simanakuna wiñachiymanta, [i18n.site](//i18n.site) (huk puramente estático markdown multilingualtranslation & web kiti ruway yanapakuy) kunan yanapan ch'uya front-end hunt'a qillqa maskana.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Kay qillqasqaqa `i18n.site` ch'uya front-end hunt'a qillqa maskana técnica implementacionta qunakunqa [i18n.site](//i18n.site) maskana efectota experimentanaykipaq.

Codigo kichasqa qullqi : [Maskay k'iti](//github.com/i18n-site/ie/tree/main/qy) / [interactivo interfaz](//github.com/i18n-site/plugin/tree/main/qy)

## Mana Servidorniyuq Hunt'asqa Qillqa Maskana Allichaykunamanta Qhaway

Huch'uy chaymanta chawpi sayayniyuq puramente mana kuyukuq web kitikunapaq qillqakuna/sapa blogkuna hina, kikin ruwasqa hunt'asqa qillqa maskana qhipa ruwayqa ancha llasa, chaymanta mana yanapakuyniyuq hunt'asqa qillqa maskana aswan riqsisqa akllana.

Mana servidorniyuq hunt'asqa qillqa maskana allichaykuna iskay hatun categoría kaqpi urmayku:

Ñawpaqta, rikch'aq [algolia.com](//algolia.com) Kimsa kaq maskana yanapakuy quqkuna ñawpaq-tukuy componentekuna hunt'asqa qillqa maskanapaq qunku.

Kayhina yanapakuykuna maskana volumen kaqpi qullqita mañanku, chaymanta sapa kuti mana China hatun suyupi ruwaqkunapaq atikunkuchu web kiti hunt'aynin hina sasachakuykunarayku.

Mana internetpi llamk'achiy atikunmanchu, mana intranet kaqpi llamk'achiy atikunmanchu, chaymanta hatun limitacionniyuq. Kay qillqasqaqa manam anchatachu rimachkan.

Iskay kaqtaq ch'uya ñawpaq-tukuy hunt'asqa qillqa maskay.

Kunan pacha, común ch'uya ñawpaq-tukuy hunt'a qillqa maskanakuna [lunrjs](//lunrjs.com) chaymanta [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` iskay ñiqin wiñachiypi sayasqa).

`lunrjs` Iskay ñanmi kan indicekuna ruwanapaq, iskayninkutaqmi sasachakuyninku kan.

1. Ñawpaqmanta ruwasqa indis willañiqikuna

   Chay índice nisqapi llapa documentokunamanta simikuna kasqanraykun hatun sayayniyoq.
   Maypachachus huk qillqa yapasqa icha hukchasqa kaptinqa, musuq indis willañiqitam kargana.
   Chayqa yapanqa ruwaqpa suyaynin pachata chaymanta achka ancho de banda nisqatapas tukunqa.

2. Qillqakunata cargay hinaspa índices nisqakunata phawaylla ruway

   Huk indice ruwayqa huk computacionalmente intensivo ruwaymi sapa kuti indiceta wakmanta ruwayqa sut'i qhipakuykunata chaymanta mana allin user experienciata ruwanqa.

---

`lunrjs` -manta aswanta, wakin huk hunt'asqa qillqa maskana allichaykunapas kanmi, ahinataq :

[fusejs](//www.fusejs.io) , maskanapaq watiqakunap rikch'ayninta yupay.

Kay allichaypa ruwayninqa ancha mana allinmi, manataqmi hunt'asqa qillqa maskanapaq llamk'achiy atikunmanchu (qhaway [Fuse.js Unay tapuyqa aswan 10 segundos nisqamanta, imaynatataq allinchayta?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Kunan kaq allichaykunap pisiyayninrayku, `i18n.site` musuq ch'uya ñawpaq-tukuy hunt'asqa qillqa maskana allichayta ruwarqan, kaytaq kay ruwanakunayuq :

1. Achka simi maskana yanapakun chaymanta uchuylla hatun kayninpi maskana k'itipa sayayninqa `gzip` paqueteomanta qhipaman `6.9KB` (tupanachiypaq, `lunrjs` hatun kayninqa `25KB` )
1. `indexedb` kaqpi sayasqa huk tikrasqa indisota ruway, aswan pisi yuyayta hap'in chaymanta utqaylla.
1. Qillqakuna yapasqa/hukchasqa kaptin, yapasqa utaq tikrasqa qillqakunalla musuqmanta indexasqa kanku, yupaykunata pisiyachispa.
1. Yanapakun ñawpaq simi maskana chaymanta maskana ruwaykuna chiqa pachapi rikuchiyta atin ruwaq qillqachkaptin.
1. Mana internetpi tarikuq

Uraypi, `i18n.site` técnica implementacionmanta detalles detalles riqsichisqa kanqa.

## Achka Simipi Simikuna Rakiy

Simikuna rakiyqa maskaqpa nativo simi rakiynin `Intl.Segmenter` llamk'achin, llapa hatun maskaqkuna kay interfazta yanapan.

![](//p.3ti.site/1727667759.avif)

Simi rakiy `coffeescript` codigoqa kayhinam

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

in:

* `/\p{P}/` nisqaqa sapa kuti rimaymi, chaymi tupan chikukunawan tupachiq chikukuna: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` nisqaqa `Firefox` maskaq simi rakiy mana `. ` rakisqanraykum.</li>


## Índice Nisqa Ruway

5 objeto waqaychay tablakuna ruwasqa karqan `IndexedDB` :

* `word` : id -
* `doc` : id - Qillqa url - Qillqap laya yupaynin
* `docWord` : Qillqap matriznin id - palabra id
* `prefix` : Matriz de prefijo - palabra id
* `rindex` : Palabra id - Documento id : Chiru yupaykunapa matriznin

`url` qillqap matrizninpi, `ver` yupayniyuq laya nisqapipas pasay, hinaspa maskay qillqa `doc` kaq tablapi kasqanmanta.Mana kaptinqa, huk tikrasqa indis nisqatam rurana. Chaypachallapitaq, mana pasasqa qillqakunapaq invertisqa índice nisqatapas hurquy.

Chaynapim indexación incremental nisqa ruwakunman, chaymantapas yupaypa achkanmi pisiyachisqa kanman.

Ñawpaq-tukuy tinkiyninpi, indispa karga ñawpaqman puriynin barra rikuchikunman mana qhipakuy kananpaq ñawpaq kuti kargachkaspa Qaway "Ñawpaq puriy Barra Animación kaqwan, Huklla progress + Ch'uya css Implementación kaqpi sayasqa" [Inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chino](//juejin.cn/post/7413586285954154522) .

### IndexedDB Hatun Kuska Qillqay

Chay proyectoqa [idb](//www.npmjs.com/package/idb) kachkan encapsulación asíncrona nisqapi IndexedDB

IndexedDB ñawiriy chaymanta qillqay mana sincróno kaq. Huk indiskata ruraspaqa, qillqakuna kuskalla kargasqa kanqa indiskata ruranapaq.

Mana huk chikan willayta chinkachiypaq atipanakuy qillqarayku, uraypi `coffeescript` codigoman qhawayta atikunki chaymanta huk `ing` waqaychasqa ñawiriywan qillqaywan yapayta atikunki atipanakuy qillqakunata hark'anapaq.

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

## Precisión Y Recaud

Maskanaqa ñawpaqtaqa ruwaqpa yaykuchisqan llalliq simikunatam rakinqa.

Simikuna rakinakuymanta qhipaman `N` simikuna kasqanmanta yuyaykuy, ruwasqakunata kutichispaqa, ñawpaqta llapa llalliq simikunayuq ruwasqakuna kutichisqa kanqa, chaymantataq `N-1` , `N-2` ,..., `1` llalliq simikunayuq ruwasqakuna kutichisqa kanqa.

Maskana ruwasqakuna rikuchisqa ñawpaqta tapuypa chiqan kayninta qhawan, chaymanta qhipaman kargasqa ruwasqakuna (aswan karga ñit'iy) yuyarina tarifata qhawan.

![](//p.3ti.site/1727684564.avif)

## Carga en Demanda Nisqa

Kutichiypa utqaylla kayninta allinchaypaq, maskayqa `yield` paqarichiqta llamk'achin mañasqa karga ruwanapaq, chaymanta `limit` kuti huk ruwasqa tapusqa kaptin kutimun.

Reparay sapa kuti `yield` qhipaman wakmanta maskaspaykiqa, `IndexedDB` tapuy ruwayta wakmanta kichanayki tiyan.

## Chiqap Pacha Maskay Ñawpaq Rimay

Ruwaq qillqachkaptin maskana ruwaykunata qawachinapaq, ahinataq `wor` yaykuptinqa, `wor` ñawpaqchasqa simikuna `words` , `work` hina rikuchikun.

![](//p.3ti.site/1727684944.avif)

Maskana k'itiqa `prefix` tablata llamk'achinqa qhipa simipaq simi t'aqaymanta qhipaman llapa simikunata chaywan ñawpaqchasqa tarinapaq, chaymanta qatiqpi maskanapaq.

Anti-shake ruway `debounce` kaqpas ñawpaq-tukuy tinkiypi llamk'achkan (kayhina ruwasqa) sapa kuti ruwaqpa yaykuynin maskanakuna llamk'achiyta pisiyachinapaq chaymanta yupayta pisiyachinapaq.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Mana Internetpi Tarikuq

Indice tablaqa manam ñawpaq qillqasqatachu waqaychan, simikunallatam, chaymi waqaychasqa kayninta pisiyachin.

Maskana ruwaykunata resaltayqa ñawpaq qillqata wakmanta kargayta munan, chaymanta `service worker` tupachiyqa kuti kuti llika mañakuykunata hark'ayta atin.

Chaypachallapi, imaraykuchus `service worker` llapa qillqakunata waqaychan, huk kuti ruwaq maskana ruwaptin, tukuy web kiti, maskanawan, mana tinkisqa kachkan.

## MarkDown Qillqakuna Allinchayta Qhaway

`i18n.site` 's ch'uya ñawpaq-tukuy maskana allichayqa `MarkDown` qillqakunapaq allinchasqa kachkan.

Maskanapaq ruwasqakunata qawachiptinchikqa, capitulopa sutinmi qawachikunqa, ñitiykuptinñataqmi capitulota purinqa.

![](//p.3ti.site/1727686552.avif)

## Resumenpi Rimay

Invertido hunt'asqa qillqa maskana ruwasqa ch'uya ñawpaq kaqpi, mana sirwiq mañasqachu. Ancha allinmi huch’uy, chawpi web nisqakunapaq, documentokuna hinallataq blogs personales nisqapaqpas.

`i18n.site` Kichasqa qullqisapa kikinmanta ruwasqa ch'uya ñawpaq maskana, uchuy sayayniyuq chaymanta utqaylla kutichiy, kunan ch'uya ñawpaq hunt'asqa qillqa maskana pantayninkunata allichan chaymanta aswan allin ruwaqpa kawsayninta qun.