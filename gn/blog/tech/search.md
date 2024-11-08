---

brief: |
  i18n.site ko’áĝa oipytyvõ jeheka jehaipyre pukukue servidor’ỹre.

  Ko artíkulo oikuaauka tecnología jeporeka jehaipyre pukukue front-end puro ñemboguata, oikehápe índice invertido omopuꞌavaꞌekue IndexedDB, jeheka ñepyrũrã, ñeꞌe segmentación ñemboheko porãve ha heta ñeꞌe pytyvõ.

  Oñembojojávo umi solución oĩmava rehe, i18n.site jeheka puro front-end texto completo-pe michĩ ha ipya’e, oĩporã umi página web michĩ ha mediana-pe g̃uarã ha’eháicha kuatia ha blog, ha ojeguereko offline.

---

# Puro Front-End Invertido Jeheka Jehaipyre Pukukue

## Takykuerigua

Heta arapokõindy oñembosako’i rire, [i18n.site](//i18n.site) (peteĩ tembipuru’i markdown multilingualtranslation & página web ñemopu’ãrã estático añoite) ko’áĝa oipytyvõ jeporeka jehaipyre pukukue tenondegua puro.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ko artíkulo okomparti implementación técnica `i18n.site` puro front-end jeheka rehegua Visit [i18n.site](//i18n.site)

Código código abierto : [Eheka kernel](//github.com/i18n-site/ie/tree/main/qy) / [interfaz interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Peteĩ Jehesa’ỹijo Umi Solución Jehekarã Jehaipyre Pukukue Ndorekóiva Servidor Rehegua

Umi ñanduti renda michĩ ha mbytegua puramente estático-pe g̃uarã haꞌeháicha kuatia/blog personal, omopuꞌa peteĩ jeporeka jehaipyre pukukue ojejapóva ijeheguiete ipohýieterei, ha jeporeka jehaipyre tuichakue rehegua ndorekóiva servicio haꞌehína pe ojeporavovéva.

Umi solución jeheka rehegua jehaipyre pukukue ndorekóiva servidor ho’a mokõi categoría tuichávape:

Peteĩha, ojoguáva [algolia.com](//algolia.com)

Ko’ãichagua servicio oikotevẽ pago oñemopyendáva volumen de búsqueda rehe, ha heta jey ndojeguerekói umi usuario China continental-pe umi tema ha’eháicha cumplimiento sitio web.

Ndaikatúi ojeporu offline, ndaikatúi ojeporu intranet-pe ha oguereko tuicha limitación. Ko artíkulope noñeñeʼẽi heta mbaʼére.

Mokõiha ha’e jeheka ñe’ẽryru pukukue front-end puro.

Koꞌág̃a rupi, umi jeheka jepivegua puro front-end jehaipyre pukukue apytépe oĩ [lunrjs](//lunrjs.com) ha [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (oñemopyendáva `lunrjs` desarrollo secundario rehe).

`lunrjs` Oĩ mokõi tape ojejapo hag̃ua índice, ha mokõivéva oguereko iprovléma.

1. Umi archivo índice rehegua oñemopuꞌa mboyve

   Pe índice oguerekógui ñe’ẽ opaite kuatiagui, tuicha tuicha.
   Oñemoĩ térã oñemoambue jave peteĩ kuatia, ojekargava’erã peteĩ vore índice pyahu.
   Ombohetavéta puruhára oha’arõha ha oipurúta heta banda ancho.

2. Ekarga kuatiakuéra ha emopuꞌa índice en vuelo

   Oñemopuꞌa peteĩ índice haꞌehína peteĩ tembiapo oñemombaꞌeva computacionalmente Oñemopuꞌa jeývo índice opaite jave reike jave, omoheñóita retraso ojehechakuaáva ha puruhára experiencia vai.

---

`lunrjs` ári, oĩ ambue solución jehekarã jehaipyre pukukue rehegua, haꞌeháicha :

[fusejs](//www.fusejs.io) , ekalkula mbaꞌeichaitépa ojoavy umi cadena ojeheka hag̃ua.

Ko solución rembiapo ivaieterei ha ndaikatúi ojepuru ojeheka hag̃ua jehaipyre tuichakue (ehecha [Fuse.js Ñeporandu ipukúva ogueraha hetave 10 segundo-gui, mba’éichapa ikatu oñemyatyrõ?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Umi solución oĩmava ofaltágui, `i18n.site` omoheñói peteĩ solución pyahu jeporeka texto completo front-end puro rehegua, oguerekóva ko’ã característica :

1. Oipytyvõ jeheka heta ñe’ẽme ha michĩ ituichakuépe Pe jeheka kernel tuichakue oñembohyru rire `gzip` ha’e `6.9KB` (oñembojojávo, `lunrjs` tuichakue ha’e `25KB` )
1. Emopuꞌa peteĩ índice invertido oñemopyendáva `indexedb` rehe, oipyhýva saꞌivéva manduꞌa ha ipyaꞌeva.
1. Oñemoĩ/oñemoambue jave kuatiakuéra, umi kuatia oñembojoapýva térã oñemoambuéva añoite oñeindexa jey, omboguejývo umi cálculo.
1. Oipytyvõ ñe’ẽpehẽtai jeheka ha ikatu ohechauka jeheka resultado tiempo real-pe puruhára ohai aja.
1. Ojeguereko offline-pe

Iguýpe, `i18n.site` detalle implementación técnico rehegua oñembohasáta detalle reheve.

## Ñe’ẽ Ñemboja’o Heta Ñe’ẽme

Ñe’ẽ ñemboja’o oipuru kundahára ñe’ẽ ñemboja’o nativo `Intl.Segmenter` , ha opaite kundahára tenondegua oipytyvõ ko ñemohendaha.

![](//p.3ti.site/1727667759.avif)

Ñe’ẽ segmentación `coffeescript` código ha’e ko’ãva

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

pe:

* `/\p{P}/` haꞌehína peteĩ ñeꞌepyrũ jepivegua ombojoajúva puntuación rehe Umi símbolo específico ojoajúva apytépe oĩ: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` haꞌehína `Firefox` kundahára ñeꞌepykuaa ñembojaꞌo ndosegmentáigui `. ` .</li>


## Índice Ñemopu’ã

Ojejapo 5 mba’e’oka ñeñongatuha `IndexedDB` -pe :

* `word` ñe’ẽ : id -
* `doc` : id - Kuatia url - Kuatia versión número
* `docWord` : Matriz de documento id - ñe'ẽ id
* `prefix` : Matriz de prefijo - ñe'ẽ id
* `rindex` : Ñe’ẽ id - Kuatia id : Matriz de números de línea

Ehasa matriz kuatia `url` ha versión número `ver` , ha eheka oĩpa kuatia cuadro `doc` Ndoikóiramo, ejapo peteĩ índice invertido. Upe jave avei, eipeꞌa pe índice invertido umi kuatia noñembohasáivape g̃uarã.

Péicha ikatu ojehupyty indexación incremental ha oñemboguejy pe cálculo hetakue.

Pe interacción front-end-pe, ikatu ojehechauka barra progreso de carga índice rehegua ani hag̃ua pe retraso ojekarga jave peteĩha jey Ehecha "Barra de progreso con animación, basada en una sola progress + Puro css Implementación" [Inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chino](//juejin.cn/post/7413586285954154522) .

### IndexedDB Jehai Peteĩchagua Yvate

Ko proyecto [idb](//www.npmjs.com/package/idb) oñemopyendáva encapsulación asíncrona IndexedDB

IndexedDB omoñeꞌe ha ohai haꞌehína asíncrono. Ojejapo jave peteĩ índice, ojekargáta kuatiakuéra oñondive ojejapo hag̃ua índice.

Ani hag̃ua ojeperde dato parcial ojejapóva jehai competitivo rupive, ikatu ehecha `coffeescript` código iguýpe ha emoĩ peteĩ caché `ing` moñe’ẽrã ha jehai apytépe eintercepta hag̃ua jehai competitivo.

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

## Precisión Ha Mandu’a Rehegua

Pe jeheka osegmentáta raẽ umi ñe’ẽ clave oikéva puruhára.

Ñaimo’ã oĩha `N` ñe’ẽ ñe’ẽ segmentación rire Ojegueru jeývo umi resultado, ojegueru raẽta umi resultado oguerekóva opaite ñe’ẽ clave, ha upéi ojegueru jeýta umi resultado oguerekóva `N-1` , `N-2` ,..., `1` ñe’ẽ clave.

Umi jeheka renda ojehechaukáva raẽ oasegura pe consulta hekopeteha, ha umi resultado ojekargáva upe rire (emboguejy pe botón carga hetave) oasegura pe tasa de recall.

![](//p.3ti.site/1727684564.avif)

## Carga Ojejeruréva Rehe

Ikatu hag̃uáicha oñemyatyrõ ñembohovái pyaꞌe, jeheka oipuru generador `yield` omoañetévo carga ojejeruréva, ha ojevy `limit` jave peteĩ resultado.

Ñañamindu’u káda jaheka jeývo `yield` rire, tekotevẽ jaipe’a jey peteĩ porandu ñembohasa `IndexedDB` rehegua.

## Ñe’ẽpehẽtai Jeheka Tiempo Real-Pe

Ojehechauka hag̃ua jeheka renda puruhára ohai aja, techapyrãramo, ojeike jave `wor` , ojehechauka ñeꞌepyrũ oñembohérava `wor` haꞌeháicha `words` ha `work` .

![](//p.3ti.site/1727684944.avif)

Pe jeheka ryru oipurúta `prefix` vore ñe’ẽ paha ñe’ẽ ñemboja’o rire ojuhu hag̃ua opaite ñe’ẽ oñembojoapýva hese, ha oheka hag̃ua peteĩteĩ.

Función anti-shake `debounce` ojepuru avei interacción front-end-pe (oñemoañetéva kóicha) oñemboguejy hag̃ua frecuencia oikeha puruhára omoñepyrũva jeheka ha oñemboguejy hag̃ua cálculo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ojeguereko Offline-Pe

Pe cuadro índice rehegua noñongatúi pe jehaipyre ypykue, umi ñe’ẽnte, upéva omboguejy pe ñeñongatuha.

Ojehechakuaa hag̃ua jeheka renda oikotevẽ ojekarga jey jehaipyre ypykue, ha oñembojoajúramo `service worker` ikatu ojehekýi red jerure jey jey.

Upe jave avei, `service worker` oñongatúgui opaite artíkulo, peteĩ jey puruhára ojapo peteĩ jeheka, opaite ñanduti renda, jeheka avei, ojeguereko línea’ỹre.

## Ohechauka Optimización Kuatia MarkDown Rehegua

`i18n.site` 's solución jeheka tenondegua puro oñemboheko porãve `MarkDown` kuatiaroguépe g̃uarã.

Ojehechaukávo umi mba’e ojehekáva, ojehechaukáta pe kapítulo réra ha ojeguata pe kapítulo ojekutu jave.

![](//p.3ti.site/1727686552.avif)

## Embohysýi

Ojeporeka jehaipyre pukukue invertido oñemboguatáva puramente front end-pe, noñeikotevẽi servidor. Oĩ porãiterei umi página web michĩ ha mediana-pe g̃uarã ha’eháicha kuatia ha blog personal.

`i18n.site` Jeporeka tenondegua puro omoheñóiva ijeheguiete código abierto, michĩva ha ombohovái pyaꞌe, osoluciona umi mba’e’apo’ỹ ko’ag̃agua jeheka tenondegua puro jehaipyre pukukue rehegua ha omeꞌe peteĩ jeiko porãve puruhárape.