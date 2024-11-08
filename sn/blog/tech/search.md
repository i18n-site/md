---

brief: |
  i18n.site ikozvino inotsigira serverless yakazara-mavara kutsvaga.

  Ichi chinyorwa chinosuma kushandiswa kwekwakachena kumberi-yekupedzisira-yakazara-mavara ekutsvaga tekinoroji, kusanganisira inverted index yakavakwa neIndexedDB, prefix search, word segmentation optimization uye kutsigirwa kwemitauro yakawanda.

  Kana ichienzaniswa nemhinduro dziripo, i18n.site's pure front-end full-text search idiki muhukuru uye inokurumidza, yakakodzera kune madiki uye epakati mawebhusaiti akadai semagwaro nemablog, uye inowanikwa pasina Indaneti.

---

# Tsvakiridzo Yemavara Akazara

## Kutevedzana

Mushure & akati wandei markdown , [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ichi chinyorwa chichagovera kushandiswa kwehunyanzvi kwe `i18n.site` kwakachena kumberi-kwakazara-kushanya [i18n.site](//i18n.site) unzwe maitiro ekutsvaga.

Kodhi yakavhurika : [tsvaga kernel](//github.com/i18n-site/ie/tree/main/qy) / [inopindirana interface](//github.com/i18n-site/plugin/tree/main/qy)

## Wongororo Ye Serverless Full-Text Search Solutions

Kumawebhusaiti madiki uye epakati nepakati senge magwaro/mabhurogu ega, kuvaka yakazvivakira yakazara-manyoro yekutsvaga backend inorema, uye sevhisi-yemahara yakazara-mavara kutsvaga ndiyo inonyanya kusarudzwa sarudzo.

Serverless full-text search solutions inowira muzvikamu zviviri zvakafara:

Chekutanga, zvakafanana [algolia.com](//algolia.com)

Masevhisi akadai anoda mubhadharo zvichienderana nehuwandu hwekutsvaga, uye kazhinji haawanikwe kune vashandisi vari mu mainland China nekuda kwenyaya dzakadai sekutevedzera webhusaiti.

Haikwanise kushandiswa kunze kwenyika, haigone kushandiswa paintraneti, uye ine mipimo mikuru. Ichi chinyorwa hachitauri zvakawanda.

Yechipiri ndeyekumberi-kuguma kwakazara-mavara kutsvaga.

Parizvino, zvakajairwa kumberi-yekupedzisira-yakazara mameseji [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) [lunrjs](//lunrjs.com) zvichienderana `lunrjs` sekondari kuvandudzwa).

`lunrjs` Pane nzira mbiri dzekugadzira indexes, uye ese ane matambudziko azvo.

1. Pre-yakavakwa index mafaira

   Nekuti indekisi ine mazwi kubva mumagwaro ese, yakakura muhukuru.
   Pese panowedzerwa gwaro kana kugadziridzwa, faira idzva re index rinofanira kutakurwa.
   Ichawedzera nguva yekumirira yemushandisi uye inopedza yakawanda bandwidth.

2. Rodha magwaro uye gadzira indexes panhunzi

   Kuvaka indekisi ibasa rakasimba rekuvakazve iyo index nguva yese yaunowana inokonzeresa kunonoka uye kusaziva kwemushandisi.

---

Pamusoro `lunrjs` , kune mamwe akazara-zvinyorwa zvekutsvaga mhinduro, senge :

[fusejs](//www.fusejs.io) verenga kufanana pakati petambo kutsvaga.

Kuita kwemhinduro iyi kwakashata zvakanyanya uye hakugone kushandiswa pakutsvaga-zvinyorwa zvizere (ona [Fuse.js Mubvunzo wakareba unotora kupfuura masekonzi 10 , kuti ungaite sei?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) shandisa Bloom sefa kutsvaga, haigone kushandiswa kutsvaga prefix (semuenzaniso, isa `goo` , tsvaga `good` , `google` ), uye haugone kuwana zvakafanana nekupedzisa kuita.

Nekuda kwekukanganisa kwezvigadziriso zviripo, `i18n.site` yakagadzira mutsva wakachena wemberi-yekupedzisira yakazara-zvinyorwa yekutsvaga mhinduro, ine zvinotevera maitiro :

1. `25KB` kutsvaga kwemitauro yakawanda `gzip` `6.9KB` muhukuru `lunrjs`
1. Vaka inverted index yakavakirwa `indexedb` , iyo inotora ndangariro shoma uye inokurumidza.
1. Kana magwaro akawedzerwa / akagadziridzwa, magwaro chete akawedzerwa kana akagadziridzwa anoiswa zvakare indexed, kuderedza huwandu hwekuverenga.
1. Inotsigira kutsvaga kwekutanga uye inogona kuratidza mibairo yekutsvaga munguva chaiyo mushandisi ari kutaipa.
1. Inowanikwa pasina Indaneti

Pazasi, `i18n.site` tekinoroji yekushandisa ruzivo ichaunzwa zvakadzama.

## Kupatsanurwa Kwemazwi Emitauro Yakawanda

Shoko segmentation rinoshandisa bhurawuza rekuzvarwa izwi segmentation `Intl.Segmenter` , uye ese makuru mabhurawuza anotsigira iyi interface.

![](//p.3ti.site/1727667759.avif)

Izwi rekuti segmentation `coffeescript` kodhi rakadai

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

mu:

* `/\p{P}/` chirevo chenguva dzose chinoenderana nezviratidzo zvekunyora zvinosanganisira: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` imhaka yekuti `Firefox` browser izwi segmentation haina chikamu `. ` .</li>


## Index Kuvaka

5 matafura ekuchengetedza zvinhu akagadzirwa `IndexedDB` :

* `word` mazwi : id -
* `doc` : id - Gwaro url - Gwaro vhezheni nhamba
* `docWord` rondedzero : id - izwi id
* `prefix` : - id
* `rindex` : id - Gwaro id : Rray yenhamba dzemutsara

Pfuura muchikwata chegwaro `url` uye nhamba yevhezheni `ver` , uye tsvaga kana gwaro racho riripo patafura `doc` Kana isipo, gadzira index inverted. Panguva imwecheteyo, bvisa iyo inverted index kune iwo magwaro asina kupfuudzwa mukati.

Nenzira iyi, incremental indexing inogona kuwanikwa uye huwandu hwekuverenga hunoderedzwa.

Pamberi pekupedzisira, iyo yekurodha yekufambira mberi kweiyo index inogona kuratidzwa kudzivirira kusakara panguva yekurodha kekutanga ona "Kufambira mberi kweBara neAnimation, Kubva pane Imwe progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB Yakakwirira Panguva Imwe Chete Kunyora

Iyo purojekiti [idb](//www.npmjs.com/package/idb) zvichibva pane asynchronous encapsulation ye IndexedDB

IndexedDB inoverenga uye inonyora ndeye asynchronous. Paunenge uchigadzira index, zvinyorwa zvichaiswa panguva imwe chete kugadzira index.

Kuti udzivise kurasikirwa kwechidimbu kwedata kunokonzerwa nekunyora kwemakwikwi, unogona kutarisa kune `coffeescript` kodhi pazasi uye wowedzera `ing` cache pakati pekuverenga nekunyora kuti utore kukwikwidza kunyora.

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

## Precision Uye Recall

Kutsvaga kunotanga kugovera mazwi makuru akaiswa nemushandisi.

Fungidzira kuti pane mazwi `N` mushure mechikamu chemazwi Pakudzosera mhinduro, mhinduro dzine mazwi makuru dzichatanga kudzoserwa, uye zvabuda zvine `N-1` , `N-2` , ..., `1` keywords ichadzorerwa.

Mhedzisiro yekutsvaga inoratidzwa kutanga inovimbisa huchokwadi hwemubvunzo, uye mibairo inotakurwa zvino (tinya bhatani remutoro) simbisa mwero wekuyeuka.

![](//p.3ti.site/1727684564.avif)

## Rodha Paunoda

Kuti uvandudze kumhanya kwekupindura, kutsvaga kunoshandisa jenareta `yield` kuisa pane-inoda kurodha, uye inodzosa `limit` pese painobvunzwa.

Ziva kuti pese paunotsvaga zvakare mushure me `yield` , unoda kuvhurazve query transaction ye `IndexedDB` .

## Prefix Yekutsvaga Chaiyo-Nguva

Kuti uratidze mhinduro dzekutsvaga mushandisi achinyora, semuenzaniso, kana `wor` apinzwa, mazwi ane prefixed `wor` senge `words` uye `work` anoratidzwa.

![](//p.3ti.site/1727684944.avif)

Iyo yekutsvaga kernel ichashandisa iyo `prefix` tafura yezwi rekupedzisira mushure mechikamu chezwi kuti uwane ese mazwi akatangwa nawo, uye kutsvaga mukutevedzana.

Anti-kuzunungusa basa `debounce` rinoshandiswawo pamberi-yekupedzisira kupindirana (kunoitwa sezvinotevera) kuderedza kuwanda kwekushandiswa kwevashandisi kunokonzera kutsvaga uye kuderedza kuwanda kwekuverenga.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Inowanikwa Pasina Indaneti

Tafura ye index haina kuchengetedza zvinyorwa zvepakutanga, mazwi chete, izvo zvinoderedza kuwanda kwekuchengetedza.

Kujekesa mhinduro dzekutsvaga kunoda kurodha zvekare zvinyorwa, uye kufananidza `service worker` kunogona kudzivirira kudzokororwa kukumbirwa netiweki.

Panguva imwecheteyo, nekuti `service worker` inochengetera zvinyorwa zvese, kana mushandisi aita tsvakiridzo, webhusaiti yese, kusanganisira kutsvaga, inowanikwa kunze kwenyika.

## Ratidza Optimization yeMarkDown Zvinyorwa

`i18n.site` 's yakachena kumberi-yekupedzisira yekutsvaga mhinduro yakagadziridzwa kune `MarkDown` zvinyorwa.

Paunenge uchitaridza zvawanikwa, zita rechitsauko richaratidzwa uye chitsauko chichafambiswa kana chadzvanywa.

![](//p.3ti.site/1727686552.avif)

## Pfupisa

Inverted full-text search yakaitwa kumberi chete, hapana server inodiwa. Yakanyatsokodzera kune madiki uye epakati-saizi mawebhusaiti akadai semagwaro uye ega mablog.

`i18n.site` Vhura sosi yakazvigadziridza yakachena yekumberi-yekupedzisira yekutsvaga, diki muhukuru uye nekukurumidza mhinduro, inogadzirisa zvikanganiso zvezvino zvakachena zvemberi-yekupedzisira-yakazara zvinyorwa kutsvaga uye inopa zvirinani mushandisi ruzivo.