# Puro Front-End Invertido Phuqhat Qillqat Thaqhaña

## Sikunsya

Walja semananak lurañ tukuyatatxa, [i18n.site](//i18n.site) (mä purapat estático markdown multilingualtranslation & sitio web lurañ herramienta) jichhax q’uma front-end phuqhat qillqat thaqhañ yanapt’i.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Aka qillqatanx `i18n.site` q’uma front-end phuqhat qillqat thakhinak uñt’ayañaw wakisi Visit [i18n.site](//i18n.site)

Codigo jist’arat thakhi [thaqhañ kernel](//github.com/i18n-site/ie/tree/main/qy) [Interactivo](//github.com/i18n-site/plugin/tree/main/qy) /

## Mä Uñakipäwix Servidorless Ukan Phuqhat Qillqat Thakhinak Thaqhañ Solucionanakat

Jisk’a sitios web ukanakatakix documentos/blogs personales ukanakatakix purapat estático ukhamawa, jan pächasisaw wali jach’apuniw mä backend completo de texto ukar juma pachpa lurañaxa, ukatx jan servicios ukan taqpach texto ukar thaqhañax jan pächasisaw mä juk’amp suma pesaje ukhamawa.

Jichha utjki uka jan servidor ukan phuqhat qillqat thaqhañ solucionanakax pä jach’a jamuqaruw jaqukipata.

Maynix kimsïr thakhi thaqhañ yanapt’awiwa [algolia.com](//algolia.com)

Ukham servicios ukanakax payllañ munapxi ukatx janiw China continental uksan apnaqirinakatakix utjkiti kunatix sitio web ukan phuqhawipat jan walt’awinakax utjiwa.

Janiw jan internetan apnaqatäkaspati, janiw intranet ukan apnaqatäkaspati, ukat jach’a limitaciones ukaniwa. Aka yatichäwinjja janiw wal parlkiti.

Payïrix q’uma front-end phuqhat qillqat thaqhañawa.

Wali uñt’at ElasticLunr.js front-end phuqhat qillqat [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) [lunrjs](https://lunrjs.com)

`lunrjs` Índices lurañatakix pä thakhiw utji, ukampis panpachaniw jan walt’awinakanïpxi.

1. Nayraqat lurat índice qillqatanaka

   Kunatix índice ukanx taqi qillqatanakat arunakaw utji, ukat jach’a jach’akiwa.
   Kunawsatix mä qillqatax yapxatatäki jan ukax mayjt’ayatäki ukhax machaq índice archivo ukaw apkatatäñapa.
   Ukax apnaqirin suyt’añ pachap jilxatayañapawa ukat walja ancho de banda ukanak apnaqañapawa.

2. Documentonak cargaña ukat índices ukanak luraña

   Mä índice lurañax mä computacionalmente intensivo lurawiwa Índice ukar sapa kuti mantañax qhanpach qhiphart’awinaka ukat jan wali experiencia de usuario ukanakaw utjani.

`lunrjs` ukjat sipansa, yaqha phuqhat qillqat thakhinak thaqhañ amtanakaw utjaraki, sañäni :

[fusejs](https://www.fusejs.io) , thaqhañatakix cadenas ukanakan niya kipkakïtap jakthapi.

Aka solución ukan lurawipax wali jan waliwa ukatx janiw taqpach qillqat thaqhañatakix apnaqatäkaspati (uñxatt’aña [Fuse.js Jaya jiskt’awix 10 segundos ukjat jilaw munasispa, kunjamas sum apnaqañax?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](https://github.com/tinysearch/tinysearch) `goo` `good` `google`

Jichha utjki uka askichäwinakan jan walt’awinakapat jan kusisitapatxa, `i18n.site` machaq q’uma front-end phuqhat qillqat thakhinak uñstayawayiwa, ukax aka lurawinakaniwa :

1. Walja arunak thaqhañ yanapt’i ukatx jisk’a jach’a thakhiw `gzip` ukjam paquetear tukuyatatx `6.9KB` (uñakiptañatakix `lunrjs` tamapax `25KB` )
1. Mä índice invertido `indexedb` ukarjam luraña, ukax juk’a amuyunak apthapi ukat jank’akiw.
1. Kunawsatix qillqatanakax yapxatatäki/mayjt’ayat ukhax yapxatat jan ukax mayjt’ayat qillqatanakakiw wasitat indexatäxi, ukax jakhüwinakarux jisk’achatawa.
1. Prefijo thakhi thaqhaña yanapt’i, ukaxa chiqapa pachana thakhinchawi uñacht’ayaspawa kunapachatixa apnaqirixa qillqt’aski ukhaxa.
1. Ukax jan internetankiwa

Aka aynachanxa, `i18n.site` técnico phuqhawi tuqita yatiyawixa wali suma uñt’ayatarakiniwa.

## Walja Arut Arunak T’aqanuqt’aña

Arunak t’aqanuqañax uñakipirin nativo aru t’aqanuqt’awip apnaqi `Intl.Segmenter` , ukatx taqi jach’a uñakipirinakax aka interfaz ukarux yanapt’apxiwa.

![](https://p.3ti.site/1727667759.avif)

Aru segmentación `coffeescript` codigo ukax akhamawa

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

ukana:

* `/\p{P}/` ukax mä regular expresión ukawa, ukax puntuación chimpunakampi `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` ukax kunatix `Firefox` navegador aru segmentación ukax janiw segmentación `.` ukakiti.</li>


## Índice Luraña

5 yänak imañ tablas ukanakax `IndexedDB` :

* `word` arunaka : id -
* `doc` : id - Qillqa url - Documento versión jakhuwi
* `docWord` : Array de documento id - aru id
* `prefix` : Array ukax prefijo - aru id
* `rindex` : Aru id - Documento id : Array de líneas jakhunaka

Uka matriz de documento `url` ukatxa versión número `ver` ukaru pasañawa, ukatxa thaqhañawa documento ukaxa utjiti janicha ukxa tabla `doc` Jani utjkchi ukhaxa, mä índice invertido lurañawa. Uka pachparaki, uka qillqatanakaxa jani pasatäki ukanakatakixa índice invertido ukaxa apsuñawa.

Ukhamatwa, indexación incremental ukax lurasispa ukatx jakhthapiwix jisk’achatarakiwa.

Front-end ukan mayacht’asiwipanx, índice ukan [barra](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) css progreso de carga [ukax](https://juejin.cn/post/7413586285954154522) / , nayrïr kuti cargañ pachanx jan progress + .

### IndexedDB Jach’a Concurrente Qillqaña

[idb](https://www.npmjs.com/package/idb) proyectox encapsulación asíncrona de IndexedDB

IndexedDB uñakipaña ukat qillqañanakax asíncrono ukhamawa. Mä índice lurañatakixa, qillqatanakaxa mä pachanwa apkatatarakini, ukhamata índice lurañataki.

Ukhamat mä chikat datos chhaqhayañatakix competitivo qillqatanakat jark’aqasiñatakix, `coffeescript` código ukar uñakipt’añamawa ukatx mä `ing` caché uñakipt’añamp qillqañamp chikaw yapxatasma atipt’asir qillqatanakar jark’aqañataki.

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

## Prefijo Chiqapa Pacha Thaqhaña

Uka thakhinchawi uñacht’ayañatakixa apnaqirixa qillqt’aski ukjaxa, sañäni, kunapachatixa `wor` ukja mantani ukjaxa, `wor` ukampi chimpuntata arunakaxa uñacht’ayatarakiwa, sañäni `words` ukatxa `work` .

![](https://p.3ti.site/1727684944.avif)

Thakhi thakhix `prefix` tabla ukampiw qhipa arutakix arut jaljañ tukuyatat apnaqani, taqi arunak ukampi nayrïr chimpunak jikxatañataki, ukatx mäkiw thaqhañapa.

Anti-shake función `debounce` ukax front-end ukan mayacht’asiwipanx apnaqatarakiwa (akjamat phuqhachata) ukhamat apnaqirin mantawipax thakhinak ch’amanchañapatakix juk’amp jisk’achañataki ukhamarak jakhüwinak jisk’achañataki.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precisión Ukat Amtasiña

Uka thakhix nayraqatax segmento de palabras clave ukanakaw apnaqirin mantani.

Aru t’aqanuqt’awi qhipatxa `N` arunakaw `N-1` `N-2` amuyt’añäni `1`

Nayraqatax uñacht’ayat thakhinchawix jiskt’awix chiqapawa, ukatx qhipat apkatatäki ukax (juk’amp cargañ botón ukar ch’iqt’aña) tasa de recall ukar ch’amancharaki.

![](https://p.3ti.site/1727684564.avif)

## Carga Ukax Demanda Ukarjamawa

Jaskhiwi jank’aki suma uñjañatakixa, thakhinchawixa `yield` generador ukampiwa carga demanda ukarjama phuqhañataki, ukatxa `limit` kutiwa mä resultado jiskt’ata kutt’ayaraki.

Qhanacht’añatakix sapa kutiw `yield` ukjatx wasitat thaqhañax wakisi, ukatx `IndexedDB` ukjatx mä jiskt’äw luraw wasitat jist’arañaw wakisi.

## Prefijo Chiqapa Pacha Thaqhaña

Uka thakhinchawi uñacht’ayañatakixa apnaqirixa qillqt’aski ukjaxa, sañäni, kunapachatixa `wor` ukja mantani ukjaxa, `wor` ukampi chimpuntata arunakaxa uñacht’ayatarakiwa, sañäni `words` ukatxa `work` .

![](https://p.3ti.site/1727684944.avif)

Thakhi thakhix `prefix` tabla ukampiw qhipa arutakix arut jaljañ tukuyatat apnaqani, taqi arunak ukampi nayrïr chimpunak jikxatañataki, ukatx mäkiw thaqhañapa.

Anti-shake función `debounce` ukax front-end ukan mayacht’asiwipanx apnaqatarakiwa (akjamat phuqhachata) ukhamat apnaqirin mantawipax thakhinak ch’amanchañapatakix juk’amp jisk’achañataki ukhamarak jakhüwinak jisk’achañataki.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Ukax Jan Internetankiwa

Tabla índice ukax janiw nayrïr qillqat imatäkiti, arunakakiw imatäski, ukax imañax juk’akiw utji.

Thakhi lurawinak uñacht’ayañatakix nayrïr qillqat wasitat apkatañaw wakisi, ukatx `service worker` ukar uñtasitx janiw walja kuti red mayiwinakax utjkaspati.

Uka pachparakiw, kunatix `service worker` taqi qillqatanakax caché ukar uñtatawa, mä kutix apnaqirix mä thakhi lurawayxi ukhax taqpach sitio web, thakhinchawimp chika, jan internetan utji.

## MarkDown Qillqatanakan Optimización Uñacht’ayaña

`i18n.site` 's q'uma front-end thakhi thakhix `MarkDown` qillqatanakatakiw suma wakicht'ata.

Uka thakhinchawi uñacht’ayasaxa, jaljan sutipa uñacht’ayatarakiniwa, ukatxa jaljanxa ch’iqt’ayata ukjaxa sarasxaniwa.

![](https://p.3ti.site/1727686552.avif)

## Mä Jukʼa Qhanañchtʼañäni

Invertido phuqhat qillqat thakhix q’uma nayrïr chiqan phuqhasiwayi, jank’ak jaysawimpi ukatx janiw mä servidor ukax wakiskiti.

Jisk’a ukhamarak jach’a sitios web ukanakatakix wali askiwa documentos ukhamarak blogs personales ukanakataki.