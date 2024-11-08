---

brief: |
  i18n.site indi serwersiz doly tekst gözlegini goldaýar.

  Bu makala, IndexedDB tarapyndan gurlan ters indeks, prefiks gözlegi, söz segmentasiýasyny optimizasiýa we köp dilli goldaw ýaly arassa doly tekstli gözleg tehnologiýasynyň durmuşa geçirilmegi bilen tanyşdyrýar.

  Bar bolan çözgütler bilen deňeşdirilende, i18n.site-iň arassa doly tekstli gözlegi ululygy we çaltlygy, resminamalar we bloglar ýaly kiçi we orta web sahypalary üçin amatly we awtonom görnüşde elýeterlidir.

---

# Arassa Öňdäki Tersi Doly Tekst Gözlegi

## Yzygiderliligi

Birnäçe hepde ösüşden soň [i18n.site](//i18n.site) (diňe statik markdown köp dilli & web sahypasyny gurmak guraly) indi doly tekstli gözlegleri goldaýar.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bu makala gözleg effektini başdan geçirmek üçin `i18n.site` sap arassa tekst gözleginiň tehniki ýerine ýetirilişini paýlaşar [i18n.site](//i18n.site)

Kod açyk : [Gözleg ýadrosy](//github.com/i18n-site/ie/tree/main/qy) / [interaktiw interfeýs](//github.com/i18n-site/plugin/tree/main/qy)

## Serwersiz Doly Tekst Gözleg Çözgütlerine Syn

Resminamalar / şahsy bloglar ýaly kiçi we orta göwrümli arassa statiki web sahypalary üçin özbaşdak gurlan doly tekst gözleg arkasyny gurmak gaty agyr we hyzmatsyz doly tekst gözlegi has giňden ýaýran saýlawdyr.

Serwersiz doly tekst gözleg çözgütleri iki giň kategoriýa bölünýär:

Birinjiden, [algolia.com](//algolia.com) meňzeş Üçünji tarap gözleg hyzmatyny üpjün edijiler doly tekst gözlegi üçin öňdäki bölekleri üpjün edýärler!

Şeýle hyzmatlar gözleg mukdaryna görä töleg talap edýär we web sahypasynyň berjaý edilmegi ýaly meseleler sebäpli köplenç Hytaýyň materiginde ulanyjylar üçin elýeterli däl.

Oflayn ulanyp bolmaýar, intranetde ulanyp bolmaýar we uly çäklendirmeleri bar. Bu makalada kän bir pikir ýok.

Ikinjisi, doly tekstli gözleg.

Häzirki wagtda umumy arassa tekstli gözlegler we [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ikinji derejeli ösüşe esaslanýar) öz içine alýar [lunrjs](//lunrjs.com)

`lunrjs` Indeksleri gurmagyň iki ýoly bar we ikisiniňem öz problemalary bar.

1. Öň gurlan indeks faýllary

   Indeks ähli resminamalardan sözleri öz içine alýandygy sebäpli, ululygy uludyr.
   Haçan-da bir resminama goşulsa ýa-da üýtgedilse, täze indeks faýly ýüklenmeli.
   Ulanyjynyň garaşmak wagtyny artdyrar we köp zolakly sarp eder.

2. Resminamalary ýükläň we uçuşda indeksleri guruň

   Indeks gurmak hasaplaýyş taýdan köp mesele bolup durýar, her gezek gireniňizde indeksiň täzeden gurulmagy aç-açan yza galmagyna we ulanyjy tejribesiniň pes bolmagyna sebäp bolar.

---

`lunrjs` dan başga-da başga-da doly tekstli gözleg çözgütleri bar :

gözlemek üçin setirleriň arasyndaky meňzeşligi hasaplaň [fusejs](//www.fusejs.io)

Bu çözgüdiň öndürijiligi gaty pes we doly tekst gözlemek üçin ulanyp bolmaýar (serediň [Fuse.js Uzyn talap 10 sekuntdan köp wagt alýar, nädip optimizirlemeli?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

gözlemek üçin “Bloom” süzgüçini ulanyň [TinySearch](//github.com/tinysearch/tinysearch) prefiks gözlemek üçin ulanyp bolmaýar (mysal üçin `goo` giriziň, `good` , `google` gözläň) we şuňa meňzeş awtomatiki gutarnykly effekt gazanyp bilmersiňiz.

Bar bolan çözgütleriň kemçilikleri sebäpli, `i18n.site` aşakdaky aýratynlyklara eýe bolan täze arassa doly tekstli gözleg çözgüdini döretdi :

1. Köp dilli gözlegi goldaýar we göwrümi `gzip` dan soň gözleg ýadrosynyň ululygy `6.9KB` (deňeşdirmek üçin `lunrjs` ululygy `25KB` )
1. Az ýady alýan we çalt bolan `indexedb` a esaslanýan ters indeks guruň.
1. Resminamalar goşulanda / üýtgedilende, hasaplamalaryň mukdaryny azaldyp, diňe goşulan ýa-da üýtgedilen resminamalar gaýtadan indekslenýär.
1. Prefiks gözlegini goldaýar we ulanyjy ýazýarka gözleg netijelerini hakyky wagtda görkezip biler.
1. Oflayn elýeterli

Aşakda `i18n.site` tehniki durmuşa geçiriş jikme-jigi jikme-jik hödürlener.

## Köp Dilli Söz Segmentasiýasy

Söz segmentasiýasy brauzeriň ýerli söz segmentasiýasy `Intl.Segmenter` ulanýar we ähli esasy brauzerler bu interfeýsi goldaýarlar.

![](//p.3ti.site/1727667759.avif)

Segmentasiýa `coffeescript` kody aşakdaky ýaly

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

içinde:

* `/\p{P}/` dyngy belgilerine gabat gelýän yzygiderli aňlatma, gabat gelýän nyşanlaryň arasynda aşakdakylar bar: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ! `.</p><ul><li> `split('.')` sebäbi `Firefox` brauzer söz segmentasiýasy `. ` segment däl.</li>


## Indeks Binasy

5 obýekt saklaýyş tablisasy `IndexedDB` -da döredildi :

* `word` söz : id -
* `doc` Resminama url - Resminamanyň wersiýa belgisi : id -
* `docWord` : Array resminamasy id - id
* `prefix` : - id prefiksi
* `rindex` Söz Söz id - Resminama id : Setir sanlarynyň hatary :

`url` resminamanyň we `ver` nji wersiýanyň massiwinden geçiň we resminamanyň `doc` tablisada bardygyny ýa-da ýokdugyny gözläň. Eger ýok bolsa, ters indeks dörediň. Şol bir wagtyň özünde, resminamalar üçin ters görkezijini aýyryň.

Şeýlelik bilen, artdyrylan indekslere ýetip bolýar we hasaplamanyň mukdary azalýar.

Öňdäki özara täsirde, indeksiň ýükleniş öňegidişligi ilkinji gezek ýüklenende yza galmazlyk üçin görkezilip bilner. "Aneke progress + täk esasly Pure css Durmuşa" [Iňlis](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [hytaý diline](//juejin.cn/post/7413586285954154522) serediň.

### IndexedDB Ýokary Yzygiderli Ýazuw

Taslama asynkron encapsulýasiýa esasynda [idb](//www.npmjs.com/package/idb) IndexedDB

IndexedDB okaýar we ýazýar asynkron. Indeks döredilende, indeks döretmek üçin resminamalar bir wagtda ýüklener.

Bäsdeşlik ýazuwy sebäpli dörän maglumatlaryň bölekleýin ýitmeginiň öňüni almak üçin aşakdaky `coffeescript` koda ýüz tutup bilersiňiz we bäsleşýän ýazgylaryň öňüni almak üçin okamak bilen ýazmagyň arasynda `ing` keş goşup bilersiňiz.

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

## Takyklyk We Ýatlamak

Gözleg ilki bilen ulanyjynyň girizen açar sözlerini bölýär.

Segmentasiýa sözünden soň `N` söz bar diýip çaklaň, netijeler gaýdyp gelende ilki bilen ähli açar sözleri öz içine alýan netijeler yzyna gaýtarylar we `N-1` , `N-2` , ..., `1` açar sözleri öz içine alýan netijeler yzyna gaýtarylar.

Ilki bilen görkezilen gözleg netijeleri, soragyň takyklygyny üpjün edýär we soň ýüklenen netijeler (has köp ýük düwmesine basyň) yzyna gaýtarmagyň tizligini üpjün edýär.

![](//p.3ti.site/1727684564.avif)

## Talap Boýunça Ýük

Jogap tizligini gowulandyrmak üçin gözleg, talap boýunça ýüklemäni amala aşyrmak üçin `yield` generatory ulanýar we `limit` gezek netije soralanda gaýdyp gelýär.

Her gezek `yield` dan soň täzeden gözläniňizde, `IndexedDB` den talap amalyny açmalydygyny unutmaň.

## Hakyky Gözlegiň Prefiksi

Ulanyjy ýazýarka gözleg netijelerini görkezmek üçin, mysal üçin `wor` girizilende, `words` we `work` ýaly `wor` bilen prefiks edilen sözler görkezilýär.

![](//p.3ti.site/1727684944.avif)

Gözleg ýadrosy, söz düzüminden soň iň soňky söz üçin `prefix` tablisany ulanar we öňünden goşulan sözleri tapar we yzygiderli gözlär.

Anti-silkme funksiýasy `debounce` ulanyjy giriş gözlegleriniň ýygylygyny azaltmak we hasaplamanyň mukdaryny azaltmak üçin öňdäki täsirde (aşakdaky ýaly ýerine ýetirilýär) ulanylýar.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Oflayn Elýeterli

Indeks tablisasy asyl teksti saklamaýar, diňe saklanyş mukdaryny azaldýan sözler.

Gözleg netijelerini görkezmek, asyl teksti täzeden ýüklemegi talap edýär we `service worker` gabat gelmek, tor isleglerinden gaça durup biler.

Şol bir wagtyň özünde, ähli makalalary `service worker` keşde saklaýandygy sebäpli, ulanyjy gözleg geçirenden soň, gözleg ýaly ähli web sahypasy awtonom görnüşde elýeterlidir.

## MarkDown Resminamalarynyň Optimizasiýasyny Görkeziň

`i18n.site` -yň arassa gözleg çözgüdi `MarkDown` resminama üçin optimallaşdyryldy.

Gözleg netijeleri görkezilende, bölümiň ady görkeziler we basylanda bap ugrukdyrylar.

![](//p.3ti.site/1727686552.avif)

## Gysgaça Jemläň

Tersine ýazylan doly tekst gözlegi diňe öň tarapynda amala aşyrylýar, serwer gerek däl. Resminamalar we şahsy bloglar ýaly kiçi we orta web sahypalary üçin örän amatly.

`i18n.site` Açyk çeşme öz-özünden arassa arassa gözleg, ululygy we çalt seslenmesi, häzirki arassa doly tekst gözleginiň kemçiliklerini çözýär we has gowy ulanyjy tejribesini üpjün edýär.