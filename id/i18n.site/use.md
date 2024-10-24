# Instal &

## Memasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfigurasi

`i18n.site` memiliki `i18` alat terjemahan bawaan. Silakan [klik di sini untuk merujuk ke `i18` dokumen untuk mengonfigurasi token akses](/i18/use) .

## Proyek Demo

Mari kita mulai dengan proyek demo untuk mempelajari cara menggunakan `i18n.site` .

Kami pertama kali mengkloning repositori demo dan menjalankan perintah sebagai berikut:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pengguna di Tiongkok daratan dapat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nama direktori klon basis kode `demo.i18n.site` harus `md` untuk memfasilitasi pratinjau lokal dengan `docker` .

### Menerjemahkan

Pertama, masuk ke direktori `md` dan jalankan `i18n.site` , yang akan menerjemahkan `en` menjadi `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Setelah dijalankan, file terjemahan dan cache akan dibuat. Harap ingat untuk menambahkannya ke repositori di `git add . ` `md` .

### Pratinjau Lokal

Instal dan mulai `docker` ( `MAC` pengguna merekomendasikan penggunaan [orbstack](https://orbstack.dev) sebagai runtime untuk `docker` ).

Lalu, masuk ke direktori `docker` dan jalankan `./up.sh` , lalu kunjungi [https://127.0.0.1](https://127.0.0.1) untuk melihat pratinjau secara lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Posting Konten

`i18n.site` mengadopsi arsitektur [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , dan halaman masuk situs web serta konten situs web disebarkan secara independen.

Setelah menjalankan terjemahan di atas, direktori `htm` dan `v` akan dibuat di bawah direktori `md/out/dev` .

Di sini, `dev` berarti dibuat berdasarkan `.i18n/htm/dev.yml` file konfigurasi.

`dev` direktori :

Direktori `htm` adalah halaman masuk website.

Direktori `v` berisi konten situs web dengan nomor versi.

Pratinjau lokal tidak peduli dengan nomor versi dan akan menyalin semua file ke direktori `out/dev/v/0.1.0` .

Untuk rilis resmi, file yang diubah akan disalin ke direktori nomor versi baru.

#### Tentukan File Konfigurasi Dengan `-c`

File konfigurasi yang berbeda akan membuat direktori yang sesuai di direktori `out` .

Misalnya, `.i18n/htm/ol.yml` akan membuat `out/ol` direktori.

`dev.yml` dan `ol.yml` adalah konfigurasi default.

`dev` adalah singkatan dari `development` , menunjukkan lingkungan pengembangan, digunakan untuk pratinjau lokal, dan juga merupakan file konfigurasi default.
`ol` adalah singkatan dari `online` , yang menunjukkan lingkungan online, yang digunakan untuk rilis resmi. Ini juga merupakan file konfigurasi default saat menggunakan parameter baris perintah `-n` hingga `npm` untuk rilis.

Anda juga dapat membuat file konfigurasi lainnya. Gunakan `--htm_conf` pada baris perintah untuk menentukan nama file konfigurasi yang akan digunakan:

Misalnya:
```
i18n.site --htm_conf yourConfig --save
```

Di sini `--save` mewakili nomor versi rilis pembaruan.

#### <a rel=id href="#npm" id="npm"></a> Publikasikan konten ke npmjs.com

Menerbitkan konten ke [npmjs.com](//npmjs.com) adalah solusi default yang disarankan (lihat [Ketersediaan Tinggi Front-end](/i18n.site/feature#ha) ).

##### npm login & Melepaskan

Instal `nodejs` , masuk dengan `npm login` .

Edit `md/.i18n/htm/ol.yml` dan ubah nilai [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) nama paket `npm` Anda sendiri.

Kemudian ubah `md/.i18n/htm/ol.package.json`

Jalankan `i18n.site --npm` atau `i18n.site -n` di direktori `md` untuk menerjemahkan dan menerbitkan.

Jika Anda menggunakan lingkungan integrasi berkelanjutan untuk menerbitkan, tidak perlu menginstal `nodejs` , cukup salin izin masuk dan penerbitan `~/.npmrc` ke lingkungan.

Jika Anda mengubah nama paket `v:` in `ol.yml` , **pastikan untuk menghapus `.i18n/v/ol` terlebih dahulu** lalu mempublikasikannya.

##### Server Proxy Diterbitkan Oleh npm

Jika pengguna di Tiongkok daratan mengalami masalah jaringan dan tidak dapat menerbitkan paket `npm` , mereka dapat mengatur variabel lingkungan `https_proxy` untuk mengonfigurasi server proksi.

Dengan asumsi port server proxy Anda adalah `7890` , Anda dapat menulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Konten Yang Dihosting Sendiri

Jika Anda ingin menghosting konten secara mandiri, edit terlebih dahulu `md/.i18n/htm/ol.yml` dan ubah `v: //unpkg.com/i18n.site` pada awalan URL Anda, seperti `v: //i18n-v.xxx.com` .

Masuk ke direktori `md` dan jalankan

```
i18n.site --htm_conf ol --save
```

atau singkatan

```
i18n.site -c ol -s
```

Kemudian, konfigurasikan konten di direktori `md/out/ol/v` ke jalur awalan URL yang disetel di `v:` .

Terakhir, **konfigurasikan waktu cache dari jalur yang diakhiri dengan `/.v` hingga `1s`** , jika tidak, konten yang baru dirilis tidak dapat segera diakses.

Waktu cache untuk jalur lain dapat diatur menjadi satu tahun atau lebih untuk mengurangi permintaan yang tidak perlu.

##### Host Konten Ke s3

Untuk menghosting sendiri konten, selain menggunakan server Anda sendiri, opsi umum `CDN` adalah menggunakan `S3` +

Anda dapat menggunakan [rclone](https://rclone.org) untuk masuk ke server `S3` , lalu merujuk dan memodifikasi skrip berikut, dan hanya menyalin perubahan tambahan ke `S3` untuk setiap rilis.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ingatlah untuk mengkonfigurasi `CDN` sehingga waktu cache dari jalur yang berakhiran `/.v` adalah `1s` , jika tidak, konten yang baru dirilis tidak dapat segera diakses.

### Mempublikasikan Situs Web

Situs web dapat digunakan di mana saja, [github page](https://pages.github.com) dan [cloudflare page](https://pages.cloudflare.com) adalah pilihan yang bagus.

Karena situs web menggunakan arsitektur [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , ingatlah untuk menulis ulang jalur URL yang tidak mengandung `. ` hingga `index.html` .

Halaman entri situs web hanya perlu diterapkan satu kali, dan tidak perlu menerapkan ulang halaman entri situs web untuk pembaruan konten berikutnya.

#### Terapkan Di Halaman github

Pertama [klik di sini github untuk membuat organisasi](https://github.com/account/organizations/new?plan=free) . Nama organisasi berikut adalah `i18n-demo` sebagai contoh.

Kemudian buat gudang `i18n-demo.github.io` di bawah organisasi ini (silakan ganti `i18n-demo` dengan nama organisasi yang Anda buat):

![](https://p.3ti.site/1721098657.avif)

Saat menerbitkan konten di artikel sebelumnya, `out/ol/htm` telah dihasilkan. Silakan masuk ke direktori ini dan jalankan :

```
ln -s index.html 404.html
```


Karena `github page` tidak mendukung penulisan ulang jalur URL, maka `404.html` digunakan sebagai gantinya.

Kemudian jalankan perintah berikut pada direktori `htm` (ingat ganti `i18n-demo/i18n-demo.github.io.git` dengan alamat gudang anda sendiri) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Setelah memasukkan kode, tunggu hingga penerapan `github page` berhasil berjalan (seperti yang ditunjukkan di bawah) sebelum Anda dapat mengaksesnya.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Untuk halaman demo silakan lihat:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Terapkan Di Halaman cloudflare

[cloudflare page](//pages.cloudflare.com) Dibandingkan dengan `github page` , ini menyediakan penulisan ulang jalur dan lebih bersahabat dengan daratan Tiongkok serta lebih mudah diakses.

Penerapan `cloudflare page` biasanya didasarkan pada penerapan `github page` di atas.

Buat proyek dan ikat `i18n-demo.github.io` gudang di atas.

Prosesnya ditunjukkan pada gambar di bawah ini:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Silakan klik `Add Account` untuk memberikan akses ke organisasi `i18n-demo` .

Jika Anda telah mengikat gudang organisasi lain, Anda mungkin perlu mengklik `Add Account` dua kali untuk memberi otorisasi dua kali sebelum organisasi baru ditampilkan.

![](https://p.3ti.site/1721118306.avif)

Selanjutnya pilih gudang `i18n-demo.github.io` , lalu klik `Begin setup` , dan gunakan nilai default untuk langkah selanjutnya.

![](https://p.3ti.site/1721118490.avif)

Setelah mengikat untuk pertama kalinya, Anda perlu menunggu beberapa menit sebelum dapat mengaksesnya.

Setelah penerapan, Anda dapat mengikat nama domain khusus.

![](https://p.3ti.site/1721119459.avif)

Setelah mengikat nama domain khusus, silakan buka nama domain untuk mengonfigurasi penulisan ulang jalur aplikasi satu halaman, seperti yang ditunjukkan di bawah ini:

![](https://p.3ti.site/1721119320.avif)

Aturan pada gambar diatas adalah sebagai berikut, Silahkan ganti `i18n.site` pada baris pertama dibawah ini dengan nama domain yang anda ikat.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Selain itu, harap konfigurasikan aturan cache, seperti yang ditunjukkan di bawah ini, dan atur durasi cache menjadi satu bulan.

![](https://p.3ti.site/1721125111.avif)

Silahkan ubah nama domain yang sesuai pada langkah kedua pada gambar di atas menjadi nama domain yang Anda ikat.

#### Mengoptimalkan Penyebaran Situs Web Di Tiongkok Daratan

Jika Anda ingin memperoleh kinerja aksesibilitas yang lebih baik di lingkungan jaringan Tiongkok daratan, harap [daftarkan nama domain](//beian.aliyun.com) terlebih dahulu.

Kemudian, gunakan penyimpanan objek vendor cloud di daratan + `CDN` Terapkan konten berikut `out/ol/htm` .

Anda dapat menggunakan komputasi tepi untuk menulis ulang jalur untuk beradaptasi dengan aplikasi satu halaman. Misalnya, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) dapat dikonfigurasi seperti ini:

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
![](https://p.3ti.site/1721121273.avif)

Karena record `MX` dan record `CNAME` tidak bisa hidup berdampingan, jika Anda ingin menerima email nama domain secara bersamaan, Anda perlu bekerja sama dengan skrip [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) untuk level `CNAME` menjadi record `A` .

Selain itu, karena biaya lalu lintas luar negeri dari vendor cloud di daratan Tiongkok relatif mahal, jika Anda ingin mengoptimalkan biaya, Anda dapat menggunakan [DNS geografis gratis Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dan nama domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (seperti yang ditunjukkan di bawah) untuk mencapainya pengalihan lalu lintas──Lalu lintas di daratan Cina Baidu Cloud `CDN` , lalu lintas internasional menjadi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Solusi pengoptimalan penerapan ini lebih kompleks dan akan diperkenalkan dalam bab terpisah di masa mendatang.

#### Pengalihan Nama Domain Generik

Jika Anda menggunakan `i18n.site` untuk membuat situs web sebagai situs web utama, Anda biasanya perlu mengonfigurasi pengalihan pan-domain, yaitu mengalihkan akses ke `*.xxx.com` (termasuk `www.xxx.com` ) ke `xxx.com` .

Persyaratan ini dapat dicapai dengan bantuan Alibaba Cloud `CDN` `EdgeScript` ( [Dokumen berbahasa Inggris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumen berbahasa Mandarin](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambahkan nama domain di [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) dan arahkan nama domain `*.xxx.com` `CNAME` di Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Misalnya konfigurasi pengalihan nama domain pan `*.i18n.site` pada gambar di atas adalah sebagai berikut:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Terapkan Dengan nginx

Silakan tambahkan konfigurasi yang mirip dengan yang berikut ini di paragraf `server` nginx Silakan ubah `/root/i18n/md/out/ol/htm` ke jalur proyek Anda sendiri `out/ol/htm` :

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

#### `public`

File statis situs web, seperti `favicon.ico` , `robots.txt` , dll.

File ikon di sini dapat dibuat dengan [realfavicongenerator.net](https://realfavicongenerator.net) .

#### `.i18n`

Di bawah direktori `.i18n` terdapat file konfigurasi, cache terjemahan, dll. dari `i18n.site` Lihat bab berikutnya ["Konfigurasi"](/i18n.site/conf) untuk detailnya.

#### `en`

Direktori bahasa sumber, sesuai dengan `en` dari `fromTo` dalam `.i18n/conf.yml` file konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Silakan merujuk ke konfigurasi terjemahan [i18](/i18/use)