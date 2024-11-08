---

brief: |
  i18n.site sekarang mendukung pencarian teks lengkap tanpa server.

  Artikel ini memperkenalkan penerapan teknologi pencarian teks lengkap front-end murni, termasuk indeks terbalik yang dibuat oleh IndexedDB, pencarian awalan, pengoptimalan segmentasi kata, dan dukungan multi-bahasa.

  Dibandingkan dengan solusi yang ada, pencarian teks lengkap front-end murni i18n.site berukuran kecil dan cepat, cocok untuk situs web berukuran kecil dan menengah seperti dokumen dan blog, dan tersedia secara offline.

---

# Pencarian Teks Lengkap Terbalik Front-End Murni

## Urutan

Setelah beberapa minggu pengembangan, [i18n.site](//i18n.site) (alat pembuatan situs web markdown multilingualtranslation & yang murni statis) kini mendukung pencarian teks lengkap front-end murni.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Artikel ini akan membagikan implementasi teknis dari `i18n.site` pencarian teks lengkap front-end murni. Kunjungi [i18n.site](//i18n.site)

Kode open source : [Cari kernel](//github.com/i18n-site/ie/tree/main/qy) / [antarmuka interaktif](//github.com/i18n-site/plugin/tree/main/qy)

## Tinjauan Tentang Solusi Pencarian Teks Lengkap Tanpa Server

Untuk situs web statis murni berukuran kecil dan menengah seperti dokumen/blog pribadi, membangun backend pencarian teks lengkap yang dibuat sendiri terlalu berat, dan pencarian teks lengkap bebas layanan adalah pilihan yang lebih umum.

Solusi pencarian teks lengkap tanpa server terbagi dalam dua kategori besar:

Pertama, penyedia layanan pencarian pihak ketiga yang [algolia.com](//algolia.com) menyediakan komponen front-end untuk pencarian teks lengkap.

Layanan tersebut memerlukan pembayaran berdasarkan volume pencarian, dan sering kali tidak tersedia bagi pengguna di Tiongkok daratan karena masalah seperti kepatuhan situs web.

Itu tidak dapat digunakan secara offline, tidak dapat digunakan di intranet, dan memiliki keterbatasan yang besar. Artikel ini tidak membahas banyak hal.

Yang kedua adalah pencarian teks lengkap front-end murni.

Saat ini, pencarian teks lengkap front-end murni yang umum mencakup [lunrjs](//lunrjs.com) dan [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (berdasarkan `lunrjs` pengembangan sekunder).

`lunrjs` Ada dua cara untuk membangun indeks, dan keduanya memiliki permasalahannya masing-masing.

1. File indeks yang dibuat sebelumnya

   Karena indeks berisi kata-kata dari semua dokumen, maka ukurannya besar.
   Setiap kali dokumen ditambahkan atau diubah, file indeks baru harus dimuat.
   Ini akan menambah waktu tunggu pengguna dan menghabiskan banyak bandwidth.

2. Muat dokumen dan buat indeks dengan cepat

   Membangun indeks adalah tugas komputasi yang intensif. Membangun kembali indeks setiap kali Anda mengaksesnya akan menyebabkan kelambatan yang jelas dan pengalaman pengguna yang buruk.

---

Selain `lunrjs` , ada beberapa solusi pencarian teks lengkap lainnya, seperti :

[fusejs](//www.fusejs.io) , hitung kesamaan antar string yang akan dicari.

Kinerja solusi ini sangat buruk dan tidak dapat digunakan untuk pencarian teks lengkap (lihat [Fuse.js Kueri yang panjang memerlukan waktu lebih dari 10 detik, bagaimana cara mengoptimalkannya?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , gunakan filter Bloom untuk mencari, tidak dapat digunakan untuk pencarian awalan (misalnya, masukkan `goo` , cari `good` , `google` ), dan tidak dapat mencapai efek penyelesaian otomatis serupa.

Karena kekurangan dari solusi yang ada, `i18n.site` mengembangkan solusi pencarian teks lengkap front-end murni baru, yang memiliki karakteristik sebagai berikut :

1. Mendukung pencarian multi-bahasa dan ukurannya kecil. Ukuran kernel pencarian setelah pengemasan `gzip` adalah `6.9KB` (sebagai perbandingan, ukuran `lunrjs` adalah `25KB` )
1. Bangun indeks terbalik berdasarkan `indexedb` , yang memakan lebih sedikit memori dan cepat.
1. Ketika dokumen ditambahkan/dimodifikasi, hanya dokumen yang ditambahkan atau diubah yang diindeks ulang, sehingga mengurangi jumlah penghitungan.
1. Mendukung pencarian awalan dan dapat menampilkan hasil pencarian secara real time saat pengguna mengetik.
1. Tersedia offline

Di bawah ini, `i18n.site` rincian implementasi teknis akan diperkenalkan secara rinci.

## Segmentasi Kata Multibahasa

Segmentasi kata menggunakan segmentasi kata asli browser `Intl.Segmenter` , dan semua browser utama mendukung antarmuka ini.

![](//p.3ti.site/1727667759.avif)

Kode segmentasi kata `coffeescript` adalah sebagai berikut

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

di dalam:

* `/\p{P}/` adalah ekspresi reguler yang cocok dengan tanda baca. Simbol pencocokan khusus meliputi: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` karena `Firefox` segmentasi kata browser tidak menyegmentasikan `. ` .</li>


## Bangunan Indeks

5 tabel penyimpanan objek dibuat pada `IndexedDB` :

* `word` : id - kata-kata
* `doc` : id - Dokumen url - Nomor versi dokumen
* `docWord` : Array dokumen id - kata id
* `prefix` : Array awalan - kata id
* `rindex` : Kata id - Dokumen id : Array nomor baris

Masukkan array dokumen `url` dan nomor versi `ver` , dan cari apakah dokumen tersebut ada di tabel `doc` Jika tidak ada, buat indeks terbalik. Pada saat yang sama, hapus indeks terbalik untuk dokumen-dokumen yang tidak diteruskan.

Dengan cara ini, pengindeksan tambahan dapat dicapai dan jumlah penghitungan dikurangi.

Dalam interaksi front-end, bilah kemajuan pemuatan indeks dapat ditampilkan untuk menghindari kelambatan saat memuat untuk pertama kalinya. Lihat "Bilah Kemajuan dengan Animasi, Berdasarkan Single progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### Penulisan Bersamaan Yang Tinggi IndexedDB

Proyek ini [idb](//www.npmjs.com/package/idb) berdasarkan enkapsulasi asinkron IndexedDB

Pembacaan dan penulisan IndexedDB tidak sinkron. Saat membuat indeks, dokumen akan dimuat secara bersamaan untuk membuat indeks.

Untuk menghindari kehilangan sebagian data yang disebabkan oleh penulisan kompetitif, Anda dapat merujuk ke kode `coffeescript` di bawah dan menambahkan cache `ing` antara membaca dan menulis untuk mencegat penulisan yang bersaing.

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

## Presisi Dan Ingat

Pencarian terlebih dahulu akan mengelompokkan kata kunci yang dimasukkan oleh pengguna.

Asumsikan ada `N` kata setelah segmentasi kata. Saat mengembalikan hasil, hasil yang berisi semua kata kunci akan dikembalikan terlebih dahulu, lalu hasil yang berisi `N-1` , `N-2` ,..., `1` kata kunci akan dikembalikan.

Hasil pencarian yang ditampilkan pertama kali memastikan keakuratan kueri, dan hasil yang dimuat selanjutnya (klik tombol muat lebih banyak) memastikan tingkat penarikan kembali.

![](//p.3ti.site/1727684564.avif)

## Muat Sesuai Permintaan

Untuk meningkatkan kecepatan respons, pencarian menggunakan generator `yield` untuk menerapkan pemuatan sesuai permintaan, dan kembali `limit` kali ada hasil yang ditanyakan.

Perhatikan bahwa setiap kali Anda mencari lagi setelah `yield` , Anda perlu membuka kembali transaksi kueri `IndexedDB` .

## Awalan Pencarian Waktu Nyata

Untuk menampilkan hasil pencarian saat pengguna sedang mengetik, misalnya ketika `wor` dimasukkan, kata-kata yang diawali dengan `wor` seperti `words` dan `work` akan ditampilkan.

![](//p.3ti.site/1727684944.avif)

Kernel pencarian akan menggunakan tabel `prefix` untuk segmentasi kata terakhir demi kata untuk menemukan semua kata yang diawali dengannya, dan mencari secara berurutan.

Fungsi anti-guncangan `debounce` juga digunakan dalam interaksi front-end (diimplementasikan sebagai berikut) untuk mengurangi frekuensi input pengguna yang memicu pencarian dan mengurangi jumlah penghitungan.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Tersedia Offline

Tabel indeks tidak menyimpan teks asli, hanya kata-kata, sehingga mengurangi jumlah penyimpanan.

Menyorot hasil pencarian memerlukan memuat ulang teks asli, dan mencocokkan `service worker` dapat menghindari permintaan jaringan berulang.

Pada saat yang sama, karena `service worker` menyimpan semua artikel dalam cache, setelah pengguna melakukan pencarian, seluruh situs web, termasuk pencarian, tersedia secara offline.

## Menampilkan Optimalisasi Dokumen MarkDown

Solusi pencarian front-end murni `i18n.site` dioptimalkan untuk `MarkDown` dokumen.

Saat menampilkan hasil pencarian, nama bab akan ditampilkan dan bab tersebut akan dinavigasi saat diklik.

![](//p.3ti.site/1727686552.avif)

## Meringkaskan

Pencarian teks lengkap terbalik diterapkan murni di ujung depan, tidak diperlukan server. Sangat cocok untuk website kecil dan menengah seperti dokumen dan blog pribadi.

`i18n.site` Pencarian front-end murni open source yang dikembangkan sendiri, berukuran kecil dan respons cepat, memecahkan kekurangan pencarian teks lengkap front-end murni saat ini dan memberikan pengalaman pengguna yang lebih baik.