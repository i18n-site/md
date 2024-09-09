# Pasang &

## Token Konfigurasi

`i18n.site` mempunyai alat terjemahan `i18` terbina dalam Sila [klik di sini untuk merujuk kepada `i18` dokumen untuk mengkonfigurasi token akses](/i18/use) .

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projek Demo

Mari kita mulakan dengan projek demo untuk mempelajari cara menggunakan `i18n.site` .

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

Nama direktori bagi klon asas kod `demo.i18n.site` mestilah `md` untuk memudahkan pratonton setempat dengan `docker` .

### Menterjemah

Mula-mula, masukkan direktori `md` dan jalankan `i18n.site` , yang akan menterjemahkan `en` kepada `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Selepas berjalan, fail terjemahan dan cache akan dijana Sila ingat untuk `git add . ` ke repositori dalam direktori `md` .

### Pratonton Tempatan

Pasang dan mulakan `docker` ( `MAC` pengguna mengesyorkan menggunakan [orbstack](https://orbstack.dev) sebagai masa jalan untuk `docker` ).

Kemudian, masukkan direktori `docker` dan jalankan `./up.sh` , dan kemudian lawati [https://127.0.0.1](https://127.0.0.1) untuk pratonton secara setempat.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Siarkan Kandungan

`i18n.site` menggunakan seni bina [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , dan halaman masuk laman web serta kandungan tapak web digunakan secara bebas.

Selepas menjalankan terjemahan di atas, direktori `htm` dan `v` akan dijana di bawah direktori `md/out/dev` .

Di sini, `dev` bermakna ia dibina berdasarkan `.i18n/htm/dev.yml` fail konfigurasi.

`dev` direktori :

Direktori `htm` ialah halaman masuk laman web.

Direktori `v` mengandungi kandungan laman web dengan nombor versi.

Pratonton tempatan tidak mengambil berat tentang nombor versi dan akan menyalin semua fail ke direktori `out/dev/v/0.1.0` .

Untuk keluaran rasmi, fail yang diubah akan disalin ke direktori nombor versi baharu.

#### Gunakan -c Untuk Menentukan Fail Konfigurasi

Fail konfigurasi yang berbeza akan mencipta direktori yang sepadan dalam direktori `out` .

Sebagai contoh, `.i18n/htm/ol.yml` akan mencipta `out/ol` direktori.

`dev.yml` dan `ol.yml` ialah konfigurasi lalai.

`dev` ialah singkatan `development` , menunjukkan persekitaran pembangunan, digunakan untuk pratonton setempat, dan juga merupakan fail konfigurasi lalai.
`ol` ialah singkatan `online` , menunjukkan persekitaran dalam talian, yang digunakan untuk keluaran rasmi Ia juga merupakan fail konfigurasi lalai apabila menggunakan parameter baris arahan `-n` hingga `npm` untuk dikeluarkan.

Anda juga boleh membuat fail konfigurasi lain Gunakan `--htm_conf` pada baris arahan untuk menentukan nama fail konfigurasi untuk digunakan.

contohnya:
```
i18n.site --htm_conf yourConfig --save
```

Di sini `--save` mewakili nombor versi keluaran kemas kini.

#### <a rel=id href="#npm" id="npm"></a> Terbitkan kandungan ke npmjs.com

Menerbitkan kandungan kepada [npmjs.com](//npmjs.com) ialah penyelesaian lalai yang disyorkan (lihat [Ketersediaan Tinggi Bahagian Depan](/i18n.site/feature#ha) ).

##### npm login &

Pasang `nodejs` , log masuk dengan `npm login` .

Edit `md/.i18n/htm/ol.yml` dan tukar `i18n.site` dalam `v: //unpkg.com/i18n.site` kepada `npm` nama pakej anda sendiri.

Hanya gunakan nama pakej kosong pada [npmjs.com](//npmjs.com) Menggunakan nama domain tapak web kerana nama pakej adalah pilihan yang baik.

Apabila menerbitkan berdasarkan pakej `npm` , **pastikan anda menggunakan `//unpkg.com/` untuk** awalan `v:` nilai `i18n.site` telah mengoptimumkan masa cache `/.v` secara khusus di bawah laluan awalan ini untuk mencapai paparan keluaran baharu yang tepat pada masanya.

Jalankan `i18n.site --npm` atau `i18n.site -n` dalam direktori `md` untuk menterjemah dan menerbitkan.

Jika anda menggunakan persekitaran penyepaduan berterusan untuk menerbitkan, tidak perlu memasang `nodejs` Hanya salin kebenaran log masuk dan penerbitan `~/.npmrc` ke persekitaran.

Jika anda mengubah suai nama pakej `v:` dalam `ol.yml` , sila **pastikan anda memadam `.i18n/v/ol` dahulu** dan kemudian menerbitkannya.

##### Pelayan Proksi Diterbitkan Oleh npm

Jika pengguna di tanah besar China menghadapi masalah rangkaian dan tidak dapat menerbitkan `npm` pakej, mereka boleh menetapkan pembolehubah persekitaran `https_proxy` untuk mengkonfigurasi pelayan proksi.

Dengan mengandaikan bahawa port pelayan proksi anda ialah `7890` , anda boleh menulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kandungan Yang Dihoskan Sendiri

Jika anda ingin mengehos sendiri kandungan tersebut, edit `md/.i18n/htm/ol.yml` dahulu dan tukar `v: //unpkg.com/i18n.site` kepada awalan URL anda, seperti `v: //i18n-v.xxx.com` .

Masukkan direktori `md` dan jalankan

```
i18n.site --htm_conf ol --save
```

atau singkatan

```
i18n.site -c ol -s
```

Kemudian, konfigurasikan kandungan dalam direktori `md/out/ol/v` kepada laluan awalan URL yang ditetapkan dalam `v:` .

Akhir sekali, **konfigurasikan masa cache laluan yang berakhir dengan `/.v` hingga `1s`** , jika tidak kandungan yang baru dikeluarkan tidak boleh diakses serta-merta.

Masa cache untuk laluan lain boleh ditetapkan kepada satu tahun atau lebih untuk mengurangkan permintaan yang tidak perlu.

##### Hos Kandungan Kepada s3

Untuk mengehos sendiri kandungan, `CDN` menggunakan pelayan anda sendiri, satu lagi pilihan biasa ialah menggunakan `S3` +

Anda boleh menggunakan [rclone](https://rclone.org) untuk log masuk ke pelayan `S3` , kemudian rujuk dan ubah suai skrip berikut, dan hanya salin perubahan tambahan kepada `S3` untuk setiap keluaran.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ingat untuk mengkonfigurasi `CDN` supaya masa cache laluan yang berakhir dengan `/.v` ialah `1s` , jika tidak kandungan yang baru dikeluarkan tidak boleh diakses dengan segera.

### Menerbitkan Laman Web

Tapak web boleh digunakan di mana-mana sahaja [github page](https://pages.github.com) dan [cloudflare page](https://pages.cloudflare.com) adalah pilihan yang baik.

Oleh kerana tapak web menggunakan seni bina [aplikasi satu halaman](https://developer.mozilla.org/docs/Glossary/SPA) , ingat untuk menulis semula laluan URL yang tidak mengandungi `. ` hingga `index.html` .

Halaman kemasukan tapak web hanya perlu digunakan sekali, dan tidak perlu menggunakan semula halaman kemasukan tapak web untuk kemas kini kandungan seterusnya.

#### Sebarkan Pada Halaman github

Mula-mula [klik di sini github untuk mencipta organisasi](https://github.com/account/organizations/new?plan=free) Nama organisasi berikut ialah `i18n-demo` sebagai contoh.

Kemudian buat gudang `i18n-demo.github.io` di bawah organisasi ini (sila gantikan `i18n-demo` dengan nama organisasi yang anda buat):

![](https://p.3ti.site/1721098657.avif)

Apabila menerbitkan kandungan dalam artikel sebelumnya, `out/ol/htm` telah dihasilkan Sila masukkan direktori ini dan jalankan :

```
ln -s index.html 404.html
```


Oleh kerana `github page` tidak menyokong penulisan semula laluan URL, `404.html` digunakan sebaliknya.

Kemudian jalankan arahan berikut dalam direktori `htm` (ingat untuk menggantikan `i18n-demo/i18n-demo.github.io.git` dengan alamat gudang anda sendiri) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Selepas menolak kod, tunggu penggunaan `github page` berjalan dengan jayanya (seperti yang ditunjukkan di bawah) sebelum anda boleh mengaksesnya.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Untuk halaman demo sila lihat:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Sebarkan Pada Halaman cloudflare

[cloudflare page](//pages.cloudflare.com) Berbanding dengan `github page` , ia menyediakan penulisan semula laluan dan lebih mesra ke tanah besar China dan lebih mudah diakses.

Penggunaan `cloudflare page` biasanya berdasarkan penggunaan `github page` di atas.

Buat projek dan ikat `i18n-demo.github.io` gudang di atas.

Prosesnya ditunjukkan dalam rajah di bawah:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Sila klik `Add Account` untuk memberikan akses kepada organisasi `i18n-demo` .

Jika anda telah mengikat gudang organisasi lain, anda mungkin perlu mengklik `Add Account` dua kali untuk memberi kebenaran dua kali sebelum organisasi baharu akan dipaparkan.

![](https://p.3ti.site/1721118306.avif)

Seterusnya, pilih gudang `i18n-demo.github.io` , kemudian klik `Begin setup` , dan gunakan nilai lalai untuk langkah seterusnya.

![](https://p.3ti.site/1721118490.avif)

Selepas mengikat buat kali pertama, anda perlu menunggu beberapa minit sebelum anda boleh mengaksesnya.

Selepas penggunaan, anda boleh mengikat nama domain tersuai.

![](https://p.3ti.site/1721119459.avif)

Selepas mengikat nama domain tersuai, sila pergi ke nama domain untuk mengkonfigurasi laluan penulisan semula aplikasi satu halaman, seperti yang ditunjukkan di bawah:

![](https://p.3ti.site/1721119320.avif)

Peraturan dalam gambar di atas adalah seperti berikut. Sila gantikan `i18n.site` pada baris pertama di bawah dengan nama domain yang anda ikat.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Selain itu, sila konfigurasikan peraturan cache, seperti yang ditunjukkan di bawah, dan tetapkan tempoh cache kepada satu bulan.

![](https://p.3ti.site/1721125111.avif)

Sila tukar padanan nama domain dalam langkah kedua dalam gambar di atas kepada nama domain yang anda ikat.

#### Mengoptimumkan Penggunaan Tapak Web Di Tanah Besar China

Jika anda ingin mendapatkan prestasi kebolehaksesan yang lebih baik dalam persekitaran rangkaian tanah besar China, sila [daftarkan nama domain](//beian.aliyun.com) dahulu.

Kemudian, gunakan storan objek vendor awan di tanah besar + `CDN` Gunakan kandungan berikut `out/ol/htm` .

Anda boleh menggunakan pengkomputeran tepi untuk menulis semula laluan untuk menyesuaikan diri dengan aplikasi satu halaman Contohnya, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) boleh dikonfigurasikan seperti ini:

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

Oleh kerana rekod `MX` dan rekod `CNAME` tidak boleh wujud bersama, jika anda ingin menerima e-mel nama domain pada masa yang sama, anda perlu bekerjasama dengan [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ke tahap `CNAME` ke rekod `A` .

Selain itu, kerana caj trafik luar negara bagi vendor awan di tanah besar China agak mahal, jika anda ingin mengoptimumkan kos, anda boleh menggunakan [resolusi geografi percuma Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) dan nama domain tersuai [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (seperti yang ditunjukkan di bawah) untuk mencapainya lencongan trafik──Trafik di tanah besar China Baidu Cloud `CDN` , trafik antarabangsa berjalan cloudflare .

![](https://p.3ti.site/1721119788.avif)

Penyelesaian pengoptimuman penggunaan ini adalah lebih kompleks dan akan diperkenalkan dalam bab berasingan pada masa hadapan.

#### Ubah Hala Nama Domain Generik

Jika anda menggunakan `i18n.site` untuk menjana tapak web sebagai tapak web utama anda, anda biasanya perlu mengkonfigurasi pengalihan pan-domain, iaitu, mengubah hala akses kepada `*.xxx.com` (termasuk `www.xxx.com` ) kepada `xxx.com` .

Keperluan ini boleh dicapai dengan bantuan Alibaba Cloud `CDN` `EdgeScript` ( [Dokumen Bahasa Inggeris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumen Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambahkan nama domain dalam [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) dan arahkan nama domain `*.xxx.com` hingga `CNAME` dalam Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Sebagai contoh, konfigurasi ubah hala nama pan-domain `*.i18n.site` dalam gambar di atas adalah seperti berikut:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Sebarkan Dengan nginx

Sila tambahkan konfigurasi yang serupa dengan yang berikut dalam perenggan `server` nginx Sila tukar `/root/i18n/md/out/ol/htm` kepada laluan projek anda sendiri `out/ol/htm` :

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

Fail statik tapak web, seperti `favicon.ico` , `robots.txt` , dsb.

Fail ikon di sini boleh dijana dengan [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Di bawah direktori `.i18n` ialah fail konfigurasi, cache terjemahan, dsb. `i18n.site` Lihat bab seterusnya ["Konfigurasi"](/i18n.site/conf) untuk mendapatkan butiran.

#### `en`

Direktori bahasa sumber, sepadan dengan `en` daripada `fromTo` dalam `.i18n/conf.yml` fail konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Sila rujuk konfigurasi terjemahan [i18](/i18/use)