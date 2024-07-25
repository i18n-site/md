# Pasang &

## Token Konfigurasi

`i18n.site` Alat `i18` telah dibenamkan, sila [klik di sini untuk merujuk kepada dokumen `i18` untuk mengkonfigurasi token akses](/i18/use) .

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projek Demo

Mari mulakan dengan projek demo dan pelajari cara menggunakan `i18n.site`

Kami mula-mula mengklon repositori demo dan menjalankan arahan seperti berikut:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pengguna di tanah besar China boleh:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` direktori klon asas kod mestilah `md` untuk memudahkan pratonton tempatan dengan `docker` .

### Menterjemah

Pertama, masukkan direktori `md` dan jalankan `i18n.site` , yang akan menterjemahkan `en` kepada `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Selepas berjalan, fail terjemahan dan cache akan dijana Sila ingat untuk menambahkannya ke repositori `git add . ` dalam direktori `md` .

### Pratonton Tempatan

Pasang dan mulakan `docker` ( `MAC` mengesyorkan menggunakan [orbstack](https://orbstack.dev) sebagai masa jalan `docker` ).

Kemudian, masukkan direktori `docker` dan jalankan `./up.sh` , dan kemudian lawati [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Siarkan Kandungan

`i18n.site` Mengguna pakai seni bina [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , dan halaman masuk laman web serta kandungan tapak web digunakan secara bebas.

Selepas menjalankan terjemahan di atas, `htm` dan `v` direktori akan dihasilkan dalam direktori `md/out/dev`

Di sini, `dev` menunjukkan bahawa ia dibina berdasarkan fail `.i18n/htm/dev.yml` .

Di bawah : `dev`

`htm` Di bawah direktori adalah halaman masuk laman web.

`v` Direktori mengandungi kandungan laman web dengan nombor versi.

Pratonton setempat akan menyalin semua fail ke direktori `out/dev/v/0.1.0` tanpa mengira nombor versi.

Untuk keluaran rasmi, fail yang diubah akan disalin ke direktori nombor versi baharu.

#### Gunakan -c Untuk Menentukan Fail Konfigurasi

Fail konfigurasi yang berbeza akan mencipta direktori yang sepadan di bawah direktori `out`

Sebagai contoh, `.i18n/htm/ol.yml` akan mencipta `out/ol` direktori.

`dev.yml` dan `ol.yml` ialah konfigurasi lalai.

`dev` ialah singkatan `development` , yang mewakili persekitaran pembangunan, digunakan untuk pratonton setempat, dan juga merupakan fail konfigurasi lalai.
`ol` ialah singkatan `online` , yang mewakili persekitaran dalam talian, digunakan untuk keluaran rasmi, dan juga merupakan fail konfigurasi lalai apabila menerbitkan ke `npm` menggunakan parameter baris arahan `-n` .

Anda juga boleh membuat fail konfigurasi lain Gunakan `--htm_conf` pada baris arahan untuk menentukan nama fail konfigurasi:

sebagai contoh:
```
i18n.site --htm_conf yourConfig --save
```

Di sini `--save` menunjukkan nombor versi keluaran kemas kini.

#### <a rel=id href="#npm" id="npm"></a> Terbitkan kandungan ke npmjs.com

Menerbitkan kandungan kepada [npmjs.com](//npmjs.com) ialah penyelesaian lalai yang disyorkan (lihat [Ketersediaan Tinggi Bahagian Depan](/i18n.site/feature#ha) ).

##### npm login &

Pasang `nodejs` gunakan `npm login` untuk log masuk.

Edit `md/.i18n/htm/ol.yml` tukar `i18n.site` dalam `v: //unpkg.com/i18n.site` kepada anda sendiri `npm` nama pakej.

Hanya gunakan nama pakej kosong pada [npmjs.com](//npmjs.com) Menggunakan nama domain tapak web kerana nama pakej adalah pilihan yang baik.

Apabila menerbitkan berdasarkan pakej `npm` , **pastikan anda menggunakan `//unpkg.com/`** sebagai awalan nilai `v:` Masa cache `i18n.site` di bawah laluan awalan ini `/.v` telah dioptimumkan khas untuk membolehkan paparan keluaran baharu tepat pada masanya.

Jalankan `i18n.site --npm` atau `i18n.site -n` dalam direktori `md` untuk menterjemah dan menerbitkan.

Jika anda menggunakan persekitaran penyepaduan berterusan untuk menerbitkan, tidak perlu `nodejs` Hanya salin kebenaran log masuk dan diterbitkan `~/.npmrc` ke persekitaran.

Jika anda mengubah suai nama pakej dalam `v:` dalam `ol.yml` , sila **pastikan anda memadamkan `.i18n/v/ol` dahulu** dan kemudian menerbitkannya.

##### Pelayan Proksi Diterbitkan Oleh npm

Jika pengguna di tanah besar China menghadapi masalah rangkaian dan tidak dapat menerbitkan pakej `npm` , mereka boleh menetapkan pembolehubah persekitaran `https_proxy` untuk mengkonfigurasi pelayan proksi.

Dengan mengandaikan bahawa port pelayan proksi anda ialah `7890` anda boleh menulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kandungan Yang Dihoskan Sendiri

Jika anda ingin mengehos sendiri kandungan, pertama, edit `md/.i18n/htm/ol.yml` dan tukar `v: //unpkg.com/i18n.site` kepada awalan URL anda, seperti `v: //i18n-v.xxx.com` .

Masukkan direktori `md`

```
i18n.site --htm_conf ol --save
```

atau singkatan

```
i18n.site -c ol -s
```

Kemudian, konfigurasikan kandungan dalam direktori `md/out/ol/v` ke laluan awalan URL yang ditetapkan dalam `v:` .

Akhir sekali, **konfigurasikan masa cache laluan yang berakhir dengan `/.v` kepada `1s`** , jika tidak kandungan yang baru dikeluarkan tidak boleh diakses dengan segera.

Masa cache untuk laluan lain boleh ditetapkan kepada satu tahun atau lebih untuk mengurangkan permintaan yang tidak perlu.

##### Hos Kandungan Kepada s3

Untuk kandungan hos sendiri, selain menggunakan pelayan anda sendiri, `CDN` lagi pilihan biasa ialah + `S3`

Anda boleh menggunakan pelayan Log Masuk [rclone](https://rclone.org) `S3` kemudian rujuk dan ubah suai skrip di bawah, dan hanya salin perubahan tambahan kepada `S3` setiap kali anda menerbitkan.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ingat untuk mengkonfigurasi `CDN` supaya masa cache laluan yang berakhir dengan `/.v` ialah `1s` , jika tidak, anda tidak akan dapat mengakses kandungan yang baru dikeluarkan dengan segera.

### Menerbitkan Laman Web

Tapak web boleh digunakan di mana-mana sahaja [github page](https://pages.github.com) dan [cloudflare page](https://pages.cloudflare.com) adalah pilihan yang baik.

Oleh `index.html` tapak web menggunakan seni bina [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , ingat untuk menulis semula laluan URL yang tidak mengandungi `. `

Halaman kemasukan tapak web hanya perlu digunakan sekali, dan tidak perlu menggunakan semula halaman kemasukan tapak web untuk kemas kini kandungan seterusnya.

#### Sebarkan Pada Halaman github

Mula-mula [klik di sini github untuk mencipta organisasi](https://github.com/account/organizations/new?plan=free) Nama organisasi berikut ialah `i18n-demo`

Kemudian buat gudang di bawah organisasi ini `i18n-demo.github.io` (Sila gantikan `i18n-demo` dengan nama organisasi yang anda buat):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Apabila menerbitkan kandungan dalam artikel sebelumnya, ia telah `out/ol/htm` Sila masukkan direktori ini dan jalankan :

```
ln -s index.html 404.html
```


Kerana `github page` tidak menyokong penulisan semula laluan URL, jadi `404.html` digunakan sebaliknya.

Kemudian jalankan arahan berikut dalam direktori `htm` (ingat untuk menggantikan `i18n-demo/i18n-demo.github.io.git` dengan alamat gudang anda sendiri) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Selepas menolak kod, tunggu penggunaan `github page` untuk dijalankan dengan jayanya (seperti yang ditunjukkan di bawah), dan kemudian anda boleh mengaksesnya.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Untuk halaman demo sila lihat:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebarkan Pada Halaman cloudflare

[cloudflare page](//pages.cloudflare.com) Berbanding dengan `github page` , ia menyediakan penulisan semula laluan dan lebih mesra ke tanah besar China dan lebih mudah diakses.

`cloudflare page` `github page`

Buat projek dan ikat gudang di atas `i18n-demo.github.io`

Prosesnya ditunjukkan dalam rajah di bawah:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Sila klik `Add Account` untuk memberikan akses kepada `i18n-demo` .

Jika anda telah mengikat gudang organisasi lain, anda mungkin perlu `Add Account` dua kali untuk membenarkannya dua kali sebelum organisasi baharu akan dipaparkan.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Seterusnya pilih `i18n-demo.github.io` Gudang, kemudian klik `Begin setup` , dan gunakan nilai lalai untuk langkah seterusnya.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Selepas mengikat buat kali pertama, anda perlu menunggu beberapa minit sebelum anda boleh mengaksesnya.

Selepas penggunaan, anda boleh mengikat nama domain tersuai.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Selepas mengikat nama domain tersuai, sila pergi ke nama domain untuk mengkonfigurasi laluan penulisan semula aplikasi satu halaman, seperti yang ditunjukkan di bawah:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Peraturan dalam gambar di atas adalah seperti berikut. Sila gantikan `i18n.site` pada baris pertama di bawah dengan nama domain yang terikat kepada anda.

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

Selain itu, sila konfigurasikan peraturan cache, seperti yang ditunjukkan di bawah, dan tetapkan tempoh cache kepada satu bulan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Sila tukar padanan nama domain dalam langkah kedua dalam gambar di atas kepada nama domain yang anda ikat.

#### Mengoptimumkan Penggunaan Tapak Web Di Tanah Besar China

Jika anda ingin mendapatkan prestasi kebolehaksesan yang lebih baik dalam persekitaran rangkaian tanah besar China, sila [daftarkan nama domain](//beian.aliyun.com) dahulu.

Kemudian, gunakan storan objek vendor awan di tanah `out/ol/htm` `CDN` +

Anda boleh menggunakan pengkomputeran tepi untuk menulis semula laluan untuk menyesuaikan diri dengan aplikasi satu halaman, seperti [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Ia boleh dikonfigurasikan seperti ini:

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

Kerana rekod `MX` dan `CNAME` rekod `A` boleh wujud bersama, jika anda ingin menerima e-mel nama domain pada masa yang sama, anda perlu bekerjasama `CNAME` skrip [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Selain itu, kerana caj trafik luar negara bagi vendor awan di tanah besar China agak mahal, jika anda ingin mengoptimumkan kos, anda boleh menggunakan [resolusi geografi percuma Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dan nama domain tersuai [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (seperti yang ditunjukkan di bawah) untuk mencapainya lencongan lalu lintas──Trafik di tanah besar China Baidu Cloud `CDN` trafik antarabangsa berjalan cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Penyelesaian pengoptimuman penggunaan ini adalah lebih kompleks dan akan diperkenalkan dalam bab berasingan pada masa hadapan.

#### Ubah Hala Nama Domain Generik

Jika anda menggunakan `i18n.site` untuk menjana tapak web sebagai tapak web utama anda, anda biasanya perlu mengkonfigurasi ubah hala pan-domain, iaitu, ubah hala `*.xxx.com` (termasuk `www.xxx.com` ) akses ke `xxx.com` .

Keperluan ini boleh dicapai dengan bantuan Alibaba `CDN` `EdgeScript` ( [dokumen Bahasa Inggeris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumen Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambahkan nama domain dalam [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) dan halakan `*.xxx.com` domain ke Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Sebagai contoh, konfigurasi ubah hala nama pan-domain bagi `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Sebarkan Dengan nginx

Sila tambahkan konfigurasi yang serupa dengan yang berikut dalam `server` nginx di mana `/root/i18n/md/out/ol/htm` sila tukarkannya ke laluan projek anda sendiri `out/ol/htm` :

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

#### Awam

Fail statik tapak web, seperti `favicon.ico` `robots.txt` , dsb.

Fail ikon di sini boleh dijana dengan [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Di bawah direktori terdapat fail konfigurasi `i18n.site` , cache terjemahan, dsb. Lihat bab seterusnya ["Konfigurasi"](/i18n.site/conf) untuk butiran.

#### en

Direktori bahasa sumber, sepadan `.i18n/conf.yml` `fromTo` `en` dalam fail konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Sila rujuk konfigurasi terjemahan [i18](/i18/use)

