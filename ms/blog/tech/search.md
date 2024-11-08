---

brief: |
  i18n.site kini menyokong carian teks penuh tanpa pelayan.

  Artikel ini memperkenalkan pelaksanaan teknologi carian teks penuh bahagian hadapan tulen, termasuk indeks terbalik yang dibina oleh IndexedDB, carian awalan, pengoptimuman segmentasi perkataan dan sokongan berbilang bahasa.

  Berbanding dengan penyelesaian sedia ada, carian teks penuh bahagian hadapan tulen i18n.site bersaiz kecil dan pantas, sesuai untuk tapak web bersaiz kecil dan sederhana seperti dokumen dan blog, dan tersedia di luar talian.

---

# Carian Teks Penuh Terbalik Bahagian Hadapan Tulen

## Urutan

Selepas beberapa minggu pembangunan, [i18n.site](//i18n.site) (alat pembinaan tapak web & terjemahan berbilang bahasa markdown semata-mata) kini menyokong carian teks penuh bahagian hadapan tulen.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Artikel ini akan berkongsi pelaksanaan teknikal `i18n.site` carian teks penuh bahagian hadapan tulen [i18n.site](//i18n.site) mengalami kesan carian.

Kod sumber terbuka : [Cari kernel](//github.com/i18n-site/ie/tree/main/qy) / [antara muka interaktif](//github.com/i18n-site/plugin/tree/main/qy)

## Kajian Semula Penyelesaian Carian Teks Penuh Tanpa Pelayan

Untuk tapak web statik semata-mata dan bersaiz sederhana seperti dokumen/blog peribadi, membina bahagian belakang carian teks penuh binaan sendiri adalah terlalu berat dan carian teks penuh tanpa perkhidmatan adalah pilihan yang lebih biasa.

Penyelesaian carian teks penuh tanpa pelayan terbahagi kepada dua kategori yang luas:

Pertama, pembekal perkhidmatan carian pihak ketiga yang [algolia.com](//algolia.com) menyediakan komponen bahagian hadapan untuk carian teks penuh.

Perkhidmatan sedemikian memerlukan pembayaran berdasarkan volum carian dan selalunya tidak tersedia kepada pengguna di tanah besar China kerana isu seperti pematuhan tapak web.

Ia tidak boleh digunakan di luar talian, tidak boleh digunakan pada intranet, dan mempunyai had yang besar. Artikel ini tidak banyak membincangkan.

Yang kedua ialah carian teks penuh bahagian hadapan tulen.

Pada masa ini, carian teks penuh bahagian hadapan tulen biasa termasuk [lunrjs](//lunrjs.com) dan [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (berdasarkan `lunrjs` pembangunan sekunder).

`lunrjs` Terdapat dua cara untuk membina indeks, dan kedua-duanya mempunyai masalah mereka sendiri.

1. Fail indeks pra-bina

   Kerana indeks mengandungi perkataan daripada semua dokumen, ia bersaiz besar.
   Setiap kali dokumen ditambah atau diubah suai, fail indeks baharu mesti dimuatkan.
   Ia akan meningkatkan masa menunggu pengguna dan menggunakan banyak lebar jalur.

2. Muatkan dokumen dan bina indeks dengan cepat

   Membina indeks ialah tugas yang intensif dari segi pengiraan Membina semula indeks setiap kali anda mengaksesnya akan menyebabkan ketinggalan yang jelas dan pengalaman pengguna yang lemah.

---

Selain `lunrjs` , terdapat beberapa penyelesaian carian teks penuh lain, seperti :

[fusejs](//www.fusejs.io) , hitung persamaan antara rentetan untuk mencari.

Prestasi penyelesaian ini sangat lemah dan tidak boleh digunakan untuk carian teks penuh (lihat [Fuse.js Pertanyaan panjang mengambil masa lebih daripada 10 saat, bagaimana untuk mengoptimumkannya?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gunakan penapis Bloom untuk mencari, tidak boleh digunakan untuk carian awalan (contohnya, masukkan `goo` , cari `good` , `google` ), dan tidak boleh mencapai kesan penyiapan automatik yang serupa.

Oleh kerana kelemahan penyelesaian sedia ada, `i18n.site` telah membangunkan penyelesaian carian teks penuh bahagian hadapan tulen baharu, yang mempunyai ciri-ciri berikut :

1. Menyokong carian berbilang bahasa dan bersaiz kecil Saiz kernel carian selepas pembungkusan `gzip` ialah `6.9KB` (untuk perbandingan, saiz `lunrjs` ialah `25KB` )
1. Bina indeks terbalik berdasarkan `indexedb` , yang menggunakan lebih sedikit memori dan pantas.
1. Apabila dokumen ditambah/diubah suai, hanya dokumen yang ditambah atau diubah suai diindeks semula, mengurangkan jumlah pengiraan.
1. Menyokong carian awalan dan boleh memaparkan hasil carian dalam masa nyata semasa pengguna menaip.
1. Tersedia di luar talian

Di bawah, `i18n.site` butiran pelaksanaan teknikal akan diperkenalkan secara terperinci.

## Pembahagian Perkataan Berbilang Bahasa

Pembahagian perkataan menggunakan pembahagian perkataan asli penyemak imbas `Intl.Segmenter` , dan semua penyemak imbas arus perdana menyokong antara muka ini.

![](//p.3ti.site/1727667759.avif)

Kod pembahagian perkataan `coffeescript` adalah seperti berikut

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

dalam:

* `/\p{P}/` ialah ungkapan biasa yang sepadan dengan tanda baca simbol padanan khusus termasuk: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` adalah kerana `Firefox` pembahagian perkataan pelayar tidak membahagikan `. ` .</li>


## Pembinaan Indeks

5 jadual penyimpanan objek telah dibuat dalam `IndexedDB` :

* `word` : id -
* `doc` : id - Dokumen url - Nombor versi dokumen
* `docWord` : Tatasusunan dokumen id - perkataan id
* `prefix` : Susunan awalan - perkataan id
* `rindex` : Word id - Dokumen id : Susunan nombor baris

Lulus dalam tatasusunan dokumen `url` dan nombor versi `ver` , dan cari sama ada dokumen itu wujud dalam jadual `doc` Jika ia tidak wujud, buat indeks terbalik. Pada masa yang sama, alih keluar indeks terbalik untuk dokumen yang tidak dihantar masuk.

Dengan cara ini, pengindeksan tambahan boleh dicapai dan jumlah pengiraan dikurangkan.

Dalam interaksi bahagian hadapan, bar kemajuan pemuatan indeks boleh dipaparkan untuk mengelakkan ketinggalan semasa memuatkan buat kali pertama. Lihat "Bar Kemajuan dengan Animasi, Berdasarkan Single progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### Penulisan Serentak Tinggi IndexedDB

Projek ini [idb](//www.npmjs.com/package/idb) berdasarkan enkapsulasi tak segerak bagi IndexedDB

Baca dan tulis IndexedDB adalah tidak segerak. Apabila membuat indeks, dokumen akan dimuatkan serentak untuk mencipta indeks.

Untuk mengelakkan kehilangan data separa yang disebabkan oleh penulisan kompetitif, anda boleh merujuk pada kod `coffeescript` di bawah dan menambah `ing` cache antara membaca dan menulis untuk memintas penulisan bersaing.

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

## Ketepatan Dan Ingat

Carian akan membahagikan kata kunci yang dimasukkan oleh pengguna terlebih dahulu.

Andaikan terdapat `N` perkataan selepas pembahagian perkataan Apabila mengembalikan hasil, hasil yang mengandungi semua kata kunci akan dikembalikan dahulu, dan kemudian hasil yang mengandungi `N-1` , `N-2` ,..., `1` kata kunci akan dikembalikan.

Hasil carian yang dipaparkan terlebih dahulu memastikan ketepatan pertanyaan, dan hasil carian dimuatkan kemudiannya (klik butang muatkan lagi) memastikan kadar panggil balik.

![](//p.3ti.site/1727684564.avif)

## Muatkan Atas Permintaan

Untuk meningkatkan kelajuan tindak balas, carian menggunakan penjana `yield` untuk melaksanakan pemuatan atas permintaan, dan kembali `limit` kali keputusan ditanya.

Ambil perhatian bahawa setiap kali anda mencari semula selepas `yield` , anda perlu membuka semula transaksi pertanyaan sebanyak `IndexedDB` .

## Awalan Carian Masa Nyata

Untuk memaparkan hasil carian semasa pengguna menaip, contohnya, apabila `wor` dimasukkan, perkataan yang diawali dengan `wor` seperti `words` dan `work` dipaparkan.

![](//p.3ti.site/1727684944.avif)

Kernel carian akan menggunakan jadual `prefix` untuk perkataan terakhir selepas pembahagian perkataan untuk mencari semua perkataan yang diawali dengannya dan cari mengikut urutan.

Fungsi anti goncang `debounce` juga digunakan dalam interaksi bahagian hadapan (dilaksanakan seperti berikut) untuk mengurangkan kekerapan input pengguna mencetuskan carian dan mengurangkan jumlah pengiraan.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tersedia Di Luar Talian

Jadual indeks tidak menyimpan teks asal, hanya perkataan, yang mengurangkan jumlah storan.

Menyerlahkan hasil carian memerlukan memuatkan semula teks asal dan pemadanan `service worker` boleh mengelakkan permintaan rangkaian berulang.

Pada masa yang sama, kerana `service worker` menyimpan cache semua artikel, sebaik sahaja pengguna melakukan carian, keseluruhan tapak web, termasuk carian, tersedia di luar talian.

## Paparan Pengoptimuman Dokumen MarkDown

Penyelesaian carian bahagian hadapan tulen `i18n.site` dioptimumkan untuk `MarkDown` dokumen.

Apabila memaparkan hasil carian, nama bab akan dipaparkan dan bab akan dilayari apabila diklik.

![](//p.3ti.site/1727686552.avif)

## Ringkaskan

Carian teks penuh terbalik dilaksanakan semata-mata pada bahagian hadapan, tiada pelayan diperlukan. Ia sangat sesuai untuk laman web bersaiz kecil dan sederhana seperti dokumen dan blog peribadi.

`i18n.site` Carian bahagian hadapan tulen yang dibangunkan sendiri sumber terbuka, bersaiz kecil dan tindak balas pantas, menyelesaikan kelemahan carian teks penuh bahagian hadapan tulen semasa dan memberikan pengalaman pengguna yang lebih baik.