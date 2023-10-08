# I18N.SITE · Bahasa Tanpa Sempadan<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, penjana tapak statik berbilang bahasa, secara automatik boleh menterjemah Markdown ke dalam [lebih daripada seratus bahasa berbeza](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Sesetengah orang mungkin ingin bertanya, sekarang pelayar mempunyai fungsi terjemahan terbina dalam, adakah tidak perlu untuk mengantarabangsakan tapak web?

Saya ingin mengatakan bahawa **hanya dengan mengantarabangsakan keseluruhan tapak kami boleh menyokong carian teks penuh dalam tapak berbilang bahasa dan pengoptimuman enjin carian** .

## Tutorial

## Pengenalan Fungsi

### Simpan Format Markdown

### Ubah Suai Terjemahan

Selepas mengubah suai terjemahan, anda perlu menjalankan semula `./i18n.sh` untuk mengemas kini cache.

### Nota Terjemahan

Komen terjemahan perlu menunjukkan bahasa selepas \```, seperti ` ```rust` .

Pada masa ini menyokong terjemahan ulasan untuk rust, c, cpp, java, js, coffee, python dan bash.

Edit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) untuk menambah sokongan terjemahan untuk ulasan dalam lebih banyak bahasa.

### Konfigurasikan Proksi

Menetapkan pembolehubah persekitaran berikut membolehkan panggilan API Terjemahan Google melalui proksi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Pembenaman Pembolehubah

```
test: 测试变量<br 0>嵌入
```

### Kosongkan Cache

```bash
rm -rf .i18n/.cache
```
