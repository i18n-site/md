# Instal &

## Token Konfigurasi

`i18n.site` Alat `i18` terjemahan tertanam, silakan [klik di sini untuk merujuk ke dokumen `i18` untuk mengonfigurasi token akses](/i18/use) .

## Install

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyek Demo

Mari kita mulai dengan proyek demo dan pelajari cara menggunakannya `i18n.site`

Kami pertama-tama mengkloning repositori demo dan menjalankan perintah sebagai berikut:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pengguna di Tiongkok daratan dapat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Nama direktori klon basis kode harus `md` untuk memfasilitasi pratinjau lokal dengan `docker` .

### Menerjemahkan

Pertama, masuk ke direktori `md` dan jalankan `i18n.site` , yang akan menerjemahkan `en` menjadi `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Setelah dijalankan, file terjemahan dan cache akan dibuat. Harap ingat untuk menambahkannya ke repositori `git add . ` di direktori `md` .

### Pratinjau Lokal

Instal dan mulai `docker` ( `MAC` menyarankan penggunaan [orbstack](https://orbstack.dev) sebagai runtime `docker` ).

Lalu, masuk ke direktori `docker` dan jalankan `./up.sh` , lalu kunjungi [https://127.0.0.1](https://127.0.0.1) untuk melihat pratinjau secara lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Posting Konten

`i18n.site` Mengadopsi arsitektur [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , dan halaman masuk situs web serta konten situs web diterapkan secara independen.

Setelah menjalankan terjemahan di atas, direktori `htm` dan `v` akan dibuat di direktori `md/out/dev` .

Di sini, `dev` menunjukkan bahwa ini dibuat berdasarkan file `.i18n/htm/dev.yml` .

`dev` Di bawah isi :

`htm` Di bawah direktori adalah halaman masuk situs web.

`v` Direktori berisi konten situs web dengan nomor versi.

Pratinjau lokal akan menyalin semua file ke direktori `out/dev/v/0.1.0` terlepas dari nomor versinya.

Untuk rilis resmi, file yang diubah akan disalin ke direktori nomor versi baru.

#### Gunakan -c Untuk Menentukan File Konfigurasi

File konfigurasi yang berbeda akan membuat direktori yang sesuai di bawah direktori `out` .

Misalnya, `.i18n/htm/ol.yml` akan membuat `out/ol` direktori.

`dev.yml` dan `ol.yml` adalah konfigurasi default.

`dev` adalah singkatan dari `development` , yang mewakili lingkungan pengembangan, digunakan untuk pratinjau lokal, dan juga merupakan file konfigurasi default.
`ol` adalah singkatan dari `online` , yang mewakili lingkungan online, digunakan untuk rilis resmi, dan juga merupakan file konfigurasi default saat menerbitkan ke `npm` menggunakan parameter baris perintah `-n` .

Anda juga dapat membuat file konfigurasi lainnya. Gunakan `--htm_conf` pada baris perintah untuk menentukan nama file konfigurasi:

Misalnya:
```
i18n.site --htm_conf yourConfig --save
```

Di sini `--save` menunjukkan nomor versi rilis pembaruan.

#### <a rel=id href="#npm" id="npm"></a> Publikasikan konten ke npmjs.com

Menerbitkan konten ke [npmjs.com](//npmjs.com) adalah solusi default yang disarankan (lihat [Ketersediaan Tinggi Front-end](/i18n.site/feature#ha) ).

##### npm login & Melepaskan

Instal `nodejs` gunakan `npm login` untuk login.

Edit `md/.i18n/htm/ol.yml` ubah `i18n.site` di `v: //unpkg.com/i18n.site` menjadi milik Anda `npm` nama paket.

Cukup gunakan nama paket yang kosong di [npmjs.com](//npmjs.com) . Menggunakan nama domain situs web sebagai nama paket adalah pilihan yang baik.

Saat menerbitkan berdasarkan paket `npm` , **pastikan untuk menggunakan `//unpkg.com/`** sebagai awalan nilai `v:` . Waktu cache `i18n.site` di bawah jalur awalan ini `/.v` telah dioptimalkan secara khusus untuk memungkinkan penayangan rilis baru secara tepat waktu.

Jalankan `i18n.site --npm` atau `i18n.site -n` di direktori `md` untuk menerjemahkan dan mempublikasikan.

Jika Anda menggunakan lingkungan integrasi berkelanjutan untuk menerbitkan, tidak perlu menginstalnya `nodejs` Cukup salin izin masuk dan terbitkan `~/.npmrc` ke lingkungan.

Jika Anda mengubah nama paket di `v:` in `ol.yml` , **pastikan untuk menghapus `.i18n/v/ol` terlebih dahulu** lalu mempublikasikannya.

##### Server Proxy Diterbitkan Oleh npm

Jika pengguna di Tiongkok daratan mengalami masalah jaringan dan tidak dapat memublikasikan paket `npm` , mereka dapat mengatur variabel lingkungan `https_proxy` untuk mengonfigurasi server proksi.

Dengan asumsi port server proxy Anda adalah `7890` Anda dapat menulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Konten Yang Dihosting Sendiri

Jika Anda ingin menghosting konten secara mandiri, pertama-tama, edit `md/.i18n/htm/ol.yml` dan ubah `v: //unpkg.com/i18n.site` ke awalan URL Anda, seperti `v: //i18n-v.xxx.com` .

Masuk ke direktori `md` dan jalankan

```
i18n.site --htm_conf ol --save
```

atau singkatan

```
i18n.site -c ol -s
```

Kemudian, konfigurasikan konten dalam direktori `md/out/ol/v` ke jalur awalan URL yang diatur dalam `v:` .

Terakhir, **konfigurasikan waktu cache dari jalur yang diakhiri dengan `/.v` ke `1s`** , jika tidak, konten yang baru dirilis tidak dapat segera diakses.

Waktu cache untuk jalur lain dapat diatur menjadi satu tahun atau lebih untuk mengurangi permintaan yang tidak perlu.

##### Host Konten Ke s3

Untuk menghosting sendiri konten, selain menggunakan server Anda sendiri, opsi umum lainnya adalah menggunakan `S3` + `CDN`

Anda dapat menggunakan server [rclone](https://rclone.org) Login `S3` , lalu merujuk dan memodifikasi skrip di bawah ini, dan hanya menyalin perubahan tambahan ke `S3` setiap kali Anda mempublikasikan.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ingatlah untuk mengonfigurasi `CDN` sehingga waktu cache dari jalur yang berakhiran `/.v` adalah `1s` , jika tidak, Anda tidak akan dapat langsung mengakses konten yang baru dirilis.

### Mempublikasikan Situs Web

Situs web dapat digunakan di mana saja, [github page](https://pages.github.com) dan [cloudflare page](https://pages.cloudflare.com) adalah pilihan yang bagus.

Karena situs web mengadopsi arsitektur [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , ingatlah untuk menulis ulang jalur URL yang tidak mengandung `index.html` `. `

Halaman entri situs web hanya perlu diterapkan satu kali, dan tidak perlu menerapkan ulang halaman entri situs web untuk pembaruan konten berikutnya.

#### Terapkan Di Halaman github

Pertama [klik di sini github untuk membuat organisasi](https://github.com/account/organizations/new?plan=free) . Nama organisasi berikut adalah `i18n-demo`

Kemudian buat gudang di bawah organisasi ini `i18n-demo.github.io` (Silakan ganti `i18n-demo` dengan nama organisasi yang Anda buat):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Saat menerbitkan konten di artikel sebelumnya, konten tersebut telah dibuat `out/ol/htm` Silakan masuk ke direktori ini dan jalankan :

```
ln -s index.html 404.html
```


Karena `github page` tidak mendukung penulisan ulang jalur URL, maka `404.html` digunakan sebagai gantinya.

Kemudian jalankan perintah berikut di direktori `htm` (ingat ganti `i18n-demo/i18n-demo.github.io.git` dengan alamat gudang Anda sendiri) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Setelah memasukkan kode, tunggu hingga penerapan `github page` berhasil dijalankan (seperti yang ditunjukkan di bawah), dan kemudian Anda dapat mengaksesnya.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Untuk halaman demo silakan lihat:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Terapkan Di Halaman cloudflare

[cloudflare page](//pages.cloudflare.com) Dibandingkan dengan `github page` , ini menyediakan penulisan ulang jalur dan lebih bersahabat dengan daratan Tiongkok dan lebih mudah diakses.

`cloudflare page` Penerapannya biasanya didasarkan pada penerapan `github page` di atas.

Buat proyek dan ikat gudang di atas `i18n-demo.github.io`

Prosesnya ditunjukkan pada gambar di bawah ini:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Silakan klik `Add Account` untuk memberikan akses ke `i18n-demo` .

Jika Anda telah mengikat gudang organisasi lain, Anda mungkin perlu mengklik `Add Account` dua kali untuk mengotorisasinya dua kali sebelum organisasi baru ditampilkan.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Selanjutnya pilih `i18n-demo.github.io` Warehouse, lalu klik `Begin setup` , dan gunakan nilai default untuk langkah selanjutnya.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Setelah mengikat untuk pertama kalinya, Anda perlu menunggu beberapa menit sebelum dapat mengaksesnya.

Setelah penerapan, Anda dapat mengikat nama domain khusus.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Setelah mengikat nama domain khusus, silakan buka nama domain untuk mengonfigurasi penulisan ulang jalur aplikasi satu halaman, seperti yang ditunjukkan di bawah ini:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aturan pada gambar di atas adalah sebagai berikut. Silakan ganti `i18n.site` pada baris pertama di bawah ini dengan nama domain yang terikat pada Anda.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Selain itu, harap konfigurasikan aturan cache, seperti yang ditunjukkan di bawah ini, dan atur durasi cache menjadi satu bulan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Silahkan ubah nama domain yang sesuai pada langkah kedua pada gambar di atas menjadi nama domain yang Anda ikat.

#### Mengoptimalkan Penyebaran Situs Web Di Tiongkok Daratan

Jika Anda ingin memperoleh kinerja aksesibilitas yang lebih baik di lingkungan jaringan Tiongkok daratan, harap [daftarkan nama domain](//beian.aliyun.com) terlebih dahulu.

Kemudian, gunakan penyimpanan `out/ol/htm` vendor cloud di daratan `CDN` +

Anda dapat menggunakan komputasi tepi untuk menulis ulang jalur untuk beradaptasi dengan aplikasi satu halaman, seperti [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Ini dapat dikonfigurasi seperti ini:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

Karena `MX` record dan `CNAME` record tidak dapat hidup berdampingan, jika Anda ingin menerima email nama domain secara bersamaan, Anda perlu bekerja sama dengan skrip [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) untuk meratakan `CNAME` ke dalam `A` record.

Selain itu, karena biaya lalu lintas luar negeri dari vendor cloud di daratan Tiongkok relatif mahal, jika Anda ingin mengoptimalkan biaya, Anda dapat menggunakan [resolusi geografis gratis Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dan nama domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (seperti yang ditunjukkan di bawah) untuk mencapainya pengalihan lalu lintas──Lalu lintas di daratan Cina Baidu Cloud `CDN` lalu lintas internasional menjadi cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Solusi pengoptimalan penerapan ini lebih kompleks dan akan diperkenalkan dalam bab terpisah di masa mendatang.

#### Pengalihan Nama Domain Generik

Jika Anda menggunakan `i18n.site` untuk membuat situs web sebagai situs web utama, Anda biasanya perlu mengonfigurasi pengalihan pan-domain, yaitu mengalihkan `*.xxx.com` (termasuk `www.xxx.com` ) akses ke `xxx.com` .

/ ini dapat dicapai dengan [bantuan](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) `EdgeScript` Alibaba [Cloud](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) `CDN`

Tambahkan nama domain di [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) dan arahkan `*.xxx.com` domain ke `CDN` `CNAME`

<img alt="" src="https://p.3ti.site/1721122000.avif">

Misalnya konfigurasi pengalihan nama domain pan `*.i18n.site` pada gambar di atas adalah sebagai berikut:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Terapkan Dengan nginx

Silakan tambahkan konfigurasi yang mirip dengan yang berikut ini di `server` nginx di mana `/root/i18n/md/out/ol/htm` silakan ubah ke jalur proyek Anda sendiri `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktur Direktori

#### Publik

File statis situs web, seperti `favicon.ico` `robots.txt` , dll.

File ikon di sini dapat dibuat dengan [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

`.i18n` Di bawah direktori terdapat `i18n.site` file konfigurasi, cache terjemahan, dll. Lihat bab berikutnya ["Konfigurasi"](/i18n.site/conf) untuk detailnya.

#### en

Direktori bahasa sumber, sesuai `.i18n/conf.yml` `fromTo` `en` di file konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Silakan merujuk ke konfigurasi terjemahan [i18](/i18/use)

