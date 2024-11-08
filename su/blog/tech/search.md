---

brief: |
  i18n.site ayeuna ngadukung milarian téks lengkep tanpa server.

  Artikel ieu ngenalkeun palaksanaan téknologi pilarian full-text murni hareup-tungtung, kaasup indéks inverted diwangun ku IndexedDB, pilarian awalan, optimasi segmentation kecap jeung rojongan multi-basa.

  Dibandingkeun sareng solusi anu tos aya, pamilarian téks lengkep i18n.site murni dina ukuranana leutik sareng gancang, cocog pikeun halaman wéb leutik sareng sedeng sapertos dokumén sareng blog, sareng sayogi offline.

---

# Murni Hareup-Tungtung Inverted Pilarian Full-Téks

## Runtuyan

Sanggeus sababaraha minggu pangwangunan, [i18n.site](//i18n.site) (alat wangunan ramatloka & markdown multibasa statik murni) ayeuna ngadukung panéangan téks lengkep hareup-tungtung.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Tulisan ieu bakal ngabagikeun palaksanaan téknis `i18n.site` milarian téks lengkep hareup-tungtung [i18n.site](//i18n.site) ngalaman éfék milarian.

Kodeu open source : [Pilarian kernel](//github.com/i18n-site/ie/tree/main/qy) / [panganteur interaktif](//github.com/i18n-site/plugin/tree/main/qy)

## Tinjauan Solusi Milarian Téks Lengkep Tanpa Server

Pikeun situs web statik ukuran leutik sareng sedeng sapertos dokumén / blog pribadi, ngawangun backend milarian téks lengkep anu diwangun diri beurat teuing, sareng milarian téks lengkep gratis jasa mangrupikeun pilihan anu langkung umum.

Solusi milarian téks lengkep tanpa server digolongkeun kana dua kategori anu lega:

Kahiji, panyadia ladenan pilarian pihak katilu nu [algolia.com](//algolia.com) nyadiakeun komponén hareup-tungtung pikeun pilarian-téks lengkep.

Ladenan sapertos kitu ngabutuhkeun pamayaran dumasar kana volume pamilarian, sareng sering henteu sayogi pikeun pangguna di daratan Cina kusabab masalah sapertos patuh halaman wéb.

Teu bisa dipaké offline, teu bisa dipaké dina intranet, sarta ngabogaan watesan hébat. Tulisan ieu henteu seueur ngabahas.

Anu kadua nyaéta milarian téks lengkep hareup-tungtung murni.

Ayeuna, pamilarian téks lengkep hareup `lunrjs` tungtung anu [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) kalebet [lunrjs](//lunrjs.com)

`lunrjs` Aya dua cara pikeun ngawangun indéks, sareng duanana gaduh masalah sorangan.

1. Pra-diwangun file indéks

   Kusabab indéks ngandung kecap tina sakabéh dokumén, éta badag dina ukuran.
   Iraha waé dokumén ditambah atanapi dirobih, file indéks énggal kedah dimuat.
   Éta bakal ningkatkeun waktos ngantosan pangguna sareng ngonsumsi seueur bandwidth.

2. Muat dokumén sareng ngawangun indéks dina laleur

   Ngawangun indéks mangrupa tugas komputasi intensif Rebuilding indéks unggal waktos Anjeun ngakses eta bakal ngabalukarkeun lags atra jeung pangalaman pamaké goréng.

---

Salian `lunrjs` , aya sababaraha solusi pilarian téks lengkep lianna, kayaning :

[fusejs](//www.fusejs.io) , itung kasaruaan antara senar pikeun milarian.

Kinerja leyuran ieu pisan goréng jeung teu bisa dipaké pikeun milarian full-téks (tingali [Fuse.js query lila nyokot leuwih ti 10 detik, kumaha carana ngaoptimalkeun eta?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , paké Bloom filter pikeun milarian, teu tiasa dianggo pikeun milarian awalan (contona, lebetkeun `goo` , milarian `good` , `google` ), sareng henteu tiasa ngahontal éfék lengkep otomatis anu sami.

Kusabab kakurangan tina solusi anu aya, `i18n.site` ngembangkeun solusi milarian téks lengkep hareup-tungtung murni anu anyar, anu ngagaduhan ciri-ciri ieu :

1. Ngarojong milarian multi-basa sareng ukuranana leutik Ukuran kernel milarian saatos bungkusan `gzip` nyaéta `6.9KB` (pikeun babandingan, ukuran `lunrjs` nyaéta `25KB` ).
1. Ngawangun indéks inverted dumasar kana `indexedb` , nu nyokot memori kirang na gancang.
1. Nalika dokumén ditambahkeun / dirobah, ngan dokumén ditambahkeun atawa dirobah nu ulang indéks, ngurangan jumlah itungan.
1. Ngarojong milarian awalan sareng tiasa ningalikeun hasil pamilarian sacara real waktos nalika pangguna ngetik.
1. Sadia offline

Di handap, `i18n.site` rinci palaksanaan teknis bakal diwanohkeun dina jéntré.

## Segmentasi Kecap Multibasa

Segmentasi kecap ngagunakeun segmentasi kecap asli browser `Intl.Segmenter` , sareng sadaya browser mainstream ngadukung antarmuka ieu.

![](//p.3ti.site/1727667759.avif)

Kecap segmentasi `coffeescript` kode ieu di handap

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

di:

* `/\p{P}/` mangrupikeun ekspresi biasa anu cocog sareng tanda baca anu cocog sareng simbol khusus kalebet: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` sabab `Firefox` panyungsi kecap segmentation henteu bagean `. ` .</li>


## Wangunan Indéks

5 tabel gudang objék dijieun dina `IndexedDB` :

* `word` : id - kecap
* `doc` : id - Dokumén url - Dokumén nomer versi
* `docWord` : Array dokumén id - kecap id
* `prefix` : Susunan awalan - kecap id
* `rindex` : Word id - Dokumén id : Array nomer baris

Lulus dina Asép Sunandar Sunarya ti dokumén `url` jeung nomer versi `ver` , sarta néangan naha dokumen teh aya dina tabel `doc` Lamun teu aya, nyieun hiji indéks inverted. Dina waktos anu sami, cabut indéks inverted pikeun dokumén anu henteu dilebetkeun.

Ku cara kieu, indéks incremental tiasa dihontal sareng jumlah itungan dikirangan.

Dina interaksi hareup-tungtung, bar kamajuan loading tina indéks bisa dipintonkeun pikeun ngahindarkeun lag nalika loading pikeun kahiji kalina Tempo "Progress Bar kalawan Animasi, Dumasar kana Tunggal progress + Murni css Palaksanaan" [Inggris](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Cina](//juejin.cn/post/7413586285954154522) .

### IndexedDB Tulisan Sakaligus Tinggi

Proyék ieu [idb](//www.npmjs.com/package/idb) dumasar kana éncapsulation asynchronous tina IndexedDB

IndexedDB maca sareng nyerat henteu sinkron. Nalika nyieun indéks, dokumén bakal dimuat sakaligus pikeun nyieun indéks.

Dina raraga ngahindarkeun leungitna data parsial disababkeun ku tulisan kalapa, anjeun tiasa ningali `coffeescript` kode handap tur nambahkeun hiji `ing` cache antara maca jeung nulis pikeun intercept nulis competing.

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

## Precision Sarta Ngelingan

Pilarian bakal ngabagi heula kecap konci anu diasupkeun ku pangguna.

Anggap aya `N` kecap sanggeus kecap segmentation Lamun mulangkeun hasil, hasilna ngandung sakabéh kecap konci bakal balik heula, lajeng hasilna ngandung `N-1` , `N-2` ,..., `1` kecap konci bakal balik.

Hasil pamilarian anu ditampilkeun heula mastikeun katepatan pamundut, sareng hasilna dimuat saterasna (klik tombol beban langkung seueur) mastikeun laju ngelingan.

![](//p.3ti.site/1727684564.avif)

## Beban Dina Paménta

Dina raraga ngaronjatkeun kagancangan respon, pilarian ngagunakeun generator `yield` pikeun nerapkeun on-demand loading, sarta mulih `limit` waktos hasilna ieu queried.

Catet yén unggal waktos anjeun milarian deui saatos `yield` , anjeun kedah muka deui transaksi pamundut `IndexedDB` .

## Awalan Pilarian Real-Time

Pikeun ningalikeun hasil pamilarian nalika pangguna ngetik, contona, nalika `wor` diasupkeun, kecap anu diawalan ku `wor` sapertos `words` sareng `work` dipintonkeun.

![](//p.3ti.site/1727684944.avif)

Kernel pilarian bakal ngagunakeun tabel `prefix` pikeun kecap panungtungan sanggeus segmentation kecap pikeun manggihan sakabeh kecap diawalan jeung eta, sarta pilarian dina runtuyan.

Fungsi anti goyang `debounce` ogé dipaké dina interaksi hareup-tungtung (dilaksanakeun saperti kieu) pikeun ngurangan frékuénsi input pamaké triggering pilarian sarta ngurangan jumlah itungan.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Sadia Offline

Méja indéks henteu nyimpen téks asli, ngan ukur kecap, anu ngirangan jumlah neundeun.

Nyorot hasil teangan merlukeun reloading téks aslina, sarta cocog `service worker` bisa nyingkahan requests jaringan terus-terusan.

Dina waktos anu sami, kusabab `service worker` nyéépkeun sadaya tulisan, saatos pangguna ngalaksanakeun panéangan, sadaya halaman wéb, kalebet pamilarian, sayogi offline.

## Optimasi Tampilan Dokumén MarkDown

`i18n.site` 's solusi pilarian hareup-tungtung murni dioptimalkeun pikeun `MarkDown` dokumén.

Lamun mintonkeun hasil teangan, ngaran bab bakal dipintonkeun jeung bab bakal navigated lamun diklik.

![](//p.3ti.site/1727686552.avif)

## Nyimpulkeun

Inverted pilarian full-téks dilaksanakeun murni dina tungtung hareup, euweuh server diperlukeun. Éta cocog pisan pikeun situs wéb leutik sareng sedeng sapertos dokumén sareng blog pribadi.

`i18n.site` Open source pilarian hareup-tungtung murni anu dikembangkeun ku sorangan, ukuranana leutik sareng réspon gancang, ngarengsekeun kakurangan tina pamilarian téks lengkep hareup-tungtung murni ayeuna sareng nyayogikeun pangalaman pangguna anu langkung saé.