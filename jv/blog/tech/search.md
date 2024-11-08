---

brief: |
  i18n.site saiki ndhukung telusuran teks lengkap tanpa server.

  Artikel iki ngenalake implementasi teknologi telusuran teks lengkap ngarep sing murni, kalebu indeks terbalik sing dibangun dening IndexedDB, telusuran awalan, optimasi segmentasi tembung lan dhukungan multi-basa.

  Dibandhingake karo solusi sing wis ana, i18n.site murni telusuran teks lengkap ngarep-mburi ukurane cilik lan cepet, cocok kanggo situs web cilik lan medium kayata dokumen lan blog, lan kasedhiya offline.

---

# Panelusuran Teks Lengkap Terbalik Ngarep Mburi Murni

## Urut-Urutan

Sawise pirang-pirang minggu pembangunan, [i18n.site](//i18n.site) (alat bangunan situs web & terjemahan markdown statis) saiki ndhukung telusuran teks lengkap ing ngarep.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Artikel iki bakal nuduhake implementasi teknis `i18n.site` telusuran teks lengkap ing ngarep kanggo [i18n.site](//i18n.site) efek telusuran.

Kode open source : [Telusuri kernel](//github.com/i18n-site/ie/tree/main/qy) / [antarmuka interaktif](//github.com/i18n-site/plugin/tree/main/qy)

## Tinjauan Solusi Telusuran Teks Lengkap Tanpa Server

Kanggo situs web statis ukuran cilik lan medium kayata dokumen / blog pribadi, mbangun backend telusuran teks lengkap sing dibangun dhewe banget abot, lan telusuran teks lengkap tanpa layanan minangka pilihan sing luwih umum.

Solusi telusuran teks lengkap tanpa server kalebu rong kategori:

[algolia.com](//algolia.com) , panyedhiya layanan telusuran pihak katelu sing padha nyedhiyakake komponen ngarep kanggo telusuran teks lengkap.

Layanan kasebut mbutuhake pambayaran adhedhasar volume telusuran, lan asring ora kasedhiya kanggo pangguna ing daratan China amarga ana masalah kayata kepatuhan situs web.

Ora bisa digunakake offline, ora bisa digunakake ing intranet, lan duwe watesan gedhe. Artikel iki ora ngrembug akeh.

Kapindho yaiku telusuran teks lengkap ngarep-mburi.

Saiki, telusuran teks lengkap ngarep murni umum kalebu [lunrjs](//lunrjs.com) lan [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (adhedhasar `lunrjs` pangembangan sekunder).

`lunrjs` Ana rong cara kanggo mbangun indeks, lan loro-lorone duwe masalah dhewe.

1. File indeks sing wis dibangun

   Amarga indeks kasebut ngemot tembung saka kabeh dokumen, ukurane gedhe.
   Saben dokumen ditambahake utawa diowahi, file indeks anyar kudu dimuat.
   Bakal nambah wektu tunggu pangguna lan nggunakake bandwidth akeh.

2. Muat dokumen lan mbangun indeks kanthi cepet

   Mbangun indeks punika tugas komputasi intensif Mbangun maneh indeks saben-saben sampeyan ngakses bakal nimbulaké lags ketok lan pengalaman pangguna miskin.

---

Saliyane `lunrjs` , ana sawetara solusi telusuran teks lengkap liyane, kayata :

[fusejs](//www.fusejs.io) , ngitung podho antarane strings kanggo nggoleki.

Kinerja solusi iki arang banget lan ora bisa digunakake kanggo nggoleki teks lengkap (ndeleng [Fuse.js Pitakonan dawa njupuk luwih saka 10 detik, carane ngoptimalake?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gunakake Filter Bloom kanggo nggoleki, ora bisa digunakake kanggo telusuran awalan (contone, ketik `goo` , telusuran `good` , `google` ), lan ora bisa entuk efek rampung otomatis sing padha.

Amarga kekurangan saka solusi sing wis ana, `i18n.site` ngembangake solusi telusuran teks lengkap ngarep murni anyar, sing nduweni ciri ing ngisor iki :

1. Ndhukung panelusuran multi-basa lan ukurane cilik Ukuran kernel telusuran sawise kemasan `gzip` yaiku `6.9KB` (kanggo mbandhingake, ukuran `lunrjs` yaiku `25KB` ).
1. Mbangun indeks kuwalik adhedhasar `indexedb` , kang njupuk munggah memori kurang lan cepet.
1. Nalika dokumen ditambahake / diowahi, mung dokumen sing ditambahake utawa diowahi sing diindeks maneh, nyuda jumlah petungan.
1. Ndhukung telusuran awalan lan bisa nampilake asil panelusuran ing wektu nyata nalika pangguna lagi ngetik.
1. Kasedhiya offline

Ing ngisor iki, `i18n.site` rincian implementasi teknis bakal ditepungi kanthi rinci.

## Segmentasi Tembung Multibasa

Segmentasi tembung nggunakake segmentasi tembung asli browser `Intl.Segmenter` , lan kabeh browser utama ndhukung antarmuka iki.

![](//p.3ti.site/1727667759.avif)

Tembung segmentasi `coffeescript` kode kaya ing ngisor iki

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

ing:

* `/\p{P}/` minangka ekspresi reguler sing cocog karo simbol sing cocog khusus kalebu: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` amarga segmentasi tembung `Firefox` browser ora dadi segmen `. ` .</li>


## Bangunan Indeks

5 tabel panyimpenan obyek digawe ing `IndexedDB` :

* `word` : id -
* `doc` : id - Dokumen url - Nomer versi dokumen
* `docWord` : Array saka dokumen id - tembung id
* `prefix` : Susunan ater-ater - tembung id
* `rindex` : Word id - Dokumen id : Array nomer baris

Pass ing Uploaded document `url` lan versi nomer `ver` , lan telusuri apa document ana ing Tabel `doc` Yen ora ana, nggawe indeks kuwalik. Ing wektu sing padha, mbusak indeks terbalik kanggo dokumen sing ora dilebokake.

Kanthi cara iki, indeksasi tambahan bisa digayuh lan jumlah pitungan dikurangi.

css interaksi ngarep-mburi, [bar](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) kemajuan [loading](//juejin.cn/post/7413586285954154522) saka indeks bisa ditampilake kanggo ngindhari lag / loading progress + .

### IndexedDB Nulis Bebarengan Dhuwur

Proyek kasebut [idb](//www.npmjs.com/package/idb) adhedhasar enkapsulasi asinkron saka IndexedDB

IndexedDB maca lan nulis ora sinkron. Nalika nggawe indeks, dokumen bakal dimuat bebarengan kanggo nggawe indeks.

Supaya ora mundhut data sebagean disebabake nulis competitive, sampeyan bisa deleng `coffeescript` kode ing ngisor iki lan nambah `ing` cache antarane maca lan nulis kanggo nyegat nulis saingan.

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

## Precision Lan Kelingan

Panelusuran pisanan bakal ngetung tembung kunci sing dilebokake pangguna.

Asumsi yen ana `N` tembung sawise tembung segmentasi Nalika ngasilake asil, asil sing ngemot kabeh tembung kunci bakal dibalekake dhisik, banjur asil sing ngemot `N-1` , `N-2` ,..., `1` tembung kunci bakal dibalekake.

Asil panelusuran sing ditampilake luwih dhisik njamin akurasi pitakon, lan asil dimuat sabanjure (klik tombol muat liyane) njamin tingkat kelingan.

![](//p.3ti.site/1727684564.avif)

## Muat Ing Dikarepake

Kanggo nambah kacepetan respon, telusuran nggunakake generator `yield` kanggo ngleksanakake loading on-demand, lan bali `limit` asil ditakoni.

Elinga yen saben sampeyan nggoleki maneh sawise `yield` , sampeyan kudu mbukak maneh transaksi pitakon `IndexedDB` .

## Ater-Ater Telusuran Wektu Nyata

Kanggo nampilake asil panelusuran nalika pangguna ngetik, contone, nalika `wor` dilebokake, tembung sing diawali karo `wor` kayata `words` lan `work` ditampilake.

![](//p.3ti.site/1727684944.avif)

Kernel telusuran bakal nggunakake tabel `prefix` kanggo tembung pungkasan sawise segmentasi tembung kanggo nemokake kabeh tembung sing diawali, lan telusuran kanthi urutan.

Fungsi anti-goyang `debounce` uga digunakake ing interaksi ngarep-mburi (dilaksanakake kaya ing ngisor iki) kanggo nyuda frekuensi input pangguna sing nyebabake telusuran lan nyuda jumlah pitungan.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Kasedhiya Offline

Tabel indeks ora nyimpen teks asli, mung tembung, sing nyuda jumlah panyimpenan.

Nyorot asil panelusuran mbutuhake ngisi maneh teks asli, lan sing cocog karo `service worker` bisa nyegah panjaluk jaringan sing bola-bali.

Ing wektu sing padha, amarga `service worker` nyimpen kabeh artikel, yen pangguna nindakake panelusuran, kabeh situs web, kalebu panelusuran, kasedhiya offline.

## Optimasi Tampilan Dokumen MarkDown

Solusi telusuran ngarep murni murni `i18n.site` dioptimalake kanggo `MarkDown` dokumen.

Nalika nampilake asil panelusuran, jeneng bab bakal ditampilake lan bab bakal navigasi nalika diklik.

![](//p.3ti.site/1727686552.avif)

## Ngringkes

Panelusuran teks lengkap sing dibalik ditindakake mung ing ngarep, ora ana server sing dibutuhake. Cocog banget kanggo situs web ukuran cilik lan medium kayata dokumen lan blog pribadi.

`i18n.site` Panelusuran ngarep-mburi murni sing dikembangake dhewe kanthi sumber terbuka, ukurane cilik lan respon cepet, ngrampungake kekurangan saka telusuran teks lengkap ngarep murni saiki lan menehi pengalaman pangguna sing luwih apik.