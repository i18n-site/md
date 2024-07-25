# Pasang &

## Token Konfigurasi

Alat terjemahan `i18` wis dipasang, `i18n.site` [klik ing kene kanggo ngrujuk menyang dokumen `i18` kanggo ngatur token akses](/i18/use) .

## Instal

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyek Demo

Ayo miwiti proyek demo lan sinau carane nggunakake `i18n.site`

Kaping pisanan, kita tiron repositori demo lan nglakokake perintah kaya ing ngisor iki:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pangguna ing daratan China bisa:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Jeneng direktori klon basis kode kudu `md` kanggo nggampangake pratinjau lokal nganggo `docker` `demo.i18n.site`

### Nerjemahake

Pisanan, ketik direktori `md` lan mbukak `i18n.site` , sing bakal nerjemahake `en` menyang `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sawise mlaku, file terjemahan lan cache bakal digawe Mangga elinga nambahake menyang repositori `git add . ` ing direktori `md`

### Pratinjau Lokal

Instal lan miwiti `docker` ( `MAC` nyaranake nggunakake [orbstack](https://orbstack.dev) minangka runtime `docker` ).

Banjur, ketik direktori `docker` lan mbukak `./up.sh` , banjur [https://127.0.0.1](https://127.0.0.1) kanggo pratinjau lokal.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Isi Postingan

`i18n.site` Ngadopsi arsitektur [aplikasi siji-kaca](https://developer.mozilla.org/docs/Glossary/SPA) , lan kaca mlebu situs web lan isi situs web disebarake kanthi mandiri.

Sawise mbukak terjemahan ing ndhuwur, `htm` lan `v` direktori bakal digawe ing direktori `md/out/dev` .

Ing kene, `dev` nuduhake yen dibangun adhedhasar file `.i18n/htm/dev.yml` .

Ing ngisor : `dev`

`htm` ngisor direktori ana kaca mlebu situs web.

`v` ngemot konten situs web kanthi nomer versi.

Pratinjau lokal bakal nyalin kabeh file menyang `out/dev/v/0.1.0` tanpa preduli saka nomer versi.

Kanggo release resmi, file sing diganti bakal disalin menyang direktori nomer versi anyar.

#### Gunakake -c Kanggo Nemtokake File Konfigurasi

File konfigurasi sing beda bakal nggawe direktori sing cocog ing direktori `out` .

Contone, `.i18n/htm/ol.yml` bakal nggawe direktori `out/ol` .

`dev.yml` lan `ol.yml` minangka konfigurasi standar.

`dev` yaiku singkatan saka `development` , sing nggambarake lingkungan pangembangan, digunakake kanggo pratinjau lokal, lan uga minangka file konfigurasi standar.
`ol` yaiku singkatan saka `online` , sing makili lingkungan online, digunakake kanggo release resmi, lan uga minangka file konfigurasi standar nalika nerbitake menyang `npm` nggunakake parameter baris perintah `-n` .

Sampeyan uga bisa nggawe file konfigurasi liyane `--htm_conf` ing baris printah kanggo nemtokake jeneng file konfigurasi:

Tuladhane:
```
i18n.site --htm_conf yourConfig --save
```

Kene `--save` nuduhake nomer versi rilis nganyari.

#### <a rel=id href="#npm" id="npm"></a> Nerbitake konten menyang npmjs.com

Nerbitake konten menyang [npmjs.com](//npmjs.com) minangka solusi standar sing disaranake (pirsani [Ketersediaan Tinggi ing ngarep](/i18n.site/feature#ha) ).

##### npm login & Enggalaken

Instal `nodejs` gunakake `npm login` kanggo mlebu.

Sunting `md/.i18n/htm/ol.yml` ganti `i18n.site` ing `v: //unpkg.com/i18n.site` dadi dhewe `npm` jeneng paket.

Cukup nggunakake jeneng paket sing ora dienggoni ing [npmjs.com](//npmjs.com)

Nalika nerbitake adhedhasar paket `npm` , **priksa manawa sampeyan nggunakake `//unpkg.com/`** minangka awalan saka nilai `v:` Wektu cache `i18n.site` ing jalur awalan iki `/.v` wis dioptimalake khusus supaya bisa ndeleng rilis anyar kanthi tepat.

Jalanake `i18n.site --npm` utawa `i18n.site -n` ing direktori `md`

Yen sampeyan nggunakake lingkungan integrasi sing terus-terusan kanggo nerbitake, ora perlu nginstal `nodejs` Cukup nyalin ijin mlebu lan diterbitake `~/.npmrc` menyang lingkungan.

Yen sampeyan ngowahi jeneng paket ing `v:` ing `ol.yml` , priksa **manawa sampeyan mbusak `.i18n/v/ol` dhisik** banjur diterbitake.

##### Server Proxy Diterbitake Dening npm

Yen pangguna ing daratan China nemoni masalah jaringan lan ora bisa nerbitake paket `npm` , dheweke bisa nyetel variabel lingkungan `https_proxy` kanggo ngatur server proxy.

Yen sampeyan nganggep port server proxy sampeyan yaiku `7890` sampeyan bisa nulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Konten Sing Dadi Tuan Rumah Dhewe

Yen sampeyan pengin dadi tuan rumah konten kasebut, luwih dhisik, `md/.i18n/htm/ol.yml` lan ganti `v: //unpkg.com/i18n.site` menyang awalan URL, kayata `v: //i18n-v.xxx.com` .

Ketik direktori `md`

```
i18n.site --htm_conf ol --save
```

utawa singkatan

```
i18n.site -c ol -s
```

Banjur, atur konten ing direktori `md/out/ol/v` menyang path awalan URL sing disetel ing `v:` .

Pungkasan, **atur wektu cache saka dalan `/.v` pungkasan ing `1s`** , yen ora, konten sing mentas dirilis ora bisa diakses langsung.

Wektu cache kanggo dalan liyane bisa disetel dadi setahun utawa luwih kanggo nyuda panjaluk sing ora perlu.

##### Isi Host Menyang s3

Kanggo isi host dhewe, saliyane nggunakake server sampeyan dhewe, `CDN` umum liyane yaiku + `S3`

Sampeyan bisa nggunakake `S3` [rclone](https://rclone.org) banjur deleng lan ngowahi skrip ing ngisor iki, lan mung nyalin owah-owahan tambahan menyang `S3` saben sampeyan nerbitake.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Elinga ngatur `CDN` supaya wektu cache path pungkasan ing `/.v` `1s` , Yen ora, sampeyan ora bakal bisa ngakses isi mentas dirilis.

### Nerbitake Situs Web

Situs web bisa disebar ing ngendi wae [github page](https://pages.github.com) lan [cloudflare page](https://pages.cloudflare.com) minangka pilihan sing apik.

Amarga situs web nganggo arsitektur [aplikasi siji-halaman](https://developer.mozilla.org/docs/Glossary/SPA) , elinga nulis ulang path URL sing ora `index.html` `. `

Kaca entri situs web mung perlu disebarake sapisan, lan ora perlu redeploy kaca entri situs web kanggo nganyari konten sabanjure.

#### Pasang Ing Kaca github

Pisanan [klik kene github kanggo nggawe organisasi](https://github.com/account/organizations/new?plan=free) ing ngisor `i18n-demo` minangka conto.

Banjur gawe gudang ing organisasi iki `i18n-demo.github.io` (Ganti `i18n-demo` karo jeneng organisasi sing digawe):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Nalika nerbitake isi ing artikel sadurunge, iku wis digawe Mangga ketik direktori iki : mbukak `out/ol/htm`

```
ln -s index.html 404.html
```


`404.html` `github page`

Banjur jalanake printah ing ngisor `i18n-demo/i18n-demo.github.io.git` : direktori `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sawise nyorong kode kasebut, enteni panyebaran `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kanggo kaca demo, deleng:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Pasang Ing Kaca cloudflare

Dibandhingake [cloudflare page](//pages.cloudflare.com) `github page` , menehi nulis ulang path lan luwih ramah menyang daratan China lan luwih gampang diakses.

`cloudflare page` Penyebaran biasane adhedhasar penyebaran `github page` ing ndhuwur.

Gawea proyek lan ikat gudang ing ndhuwur `i18n-demo.github.io`

Proses kasebut ditampilake ing gambar ing ngisor iki:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Mangga klik `Add Account` kanggo menehi akses menyang `i18n-demo` .

Yen sampeyan wis ngiket gudang organisasi liyane, sampeyan kudu `Add Account` kaping pindho kanggo menehi wewenang sadurunge organisasi anyar ditampilake.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Sabanjure pilih `i18n-demo.github.io` , banjur klik `Begin setup` , lan gunakake nilai standar kanggo langkah-langkah sabanjure.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Sawise naleni kaping pisanan, sampeyan kudu ngenteni sawetara menit sadurunge bisa ngakses.

Sawise panyebaran, sampeyan bisa ngiket jeneng domain khusus.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sawise ngiket jeneng domain khusus, bukak jeneng domain kanggo ngatur path rewriting aplikasi siji-kaca, kaya sing kapacak ing ngisor iki:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aturan ing gambar ndhuwur minangka nderek `i18n.site`

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

Kajaba iku, atur aturan cache, kaya sing kapacak ing ngisor iki, lan setel durasi cache dadi siji sasi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Mangga ngganti jeneng domain cocog ing langkah kapindho ing gambar ndhuwur kanggo jeneng domain sampeyan kaiket.

#### Ngoptimalake Penyebaran Situs Web Ing Daratan China

Yen sampeyan pengin entuk kinerja aksesibilitas sing luwih apik ing lingkungan jaringan daratan China, mangga [ndhaptar jeneng domain](//beian.aliyun.com) dhisik.

Banjur, gunakake panyimpenan `out/ol/htm` saka vendor awan ing daratan `CDN` +

Sampeyan bisa nggunakake komputasi pinggiran kanggo nulis ulang path kanggo adaptasi karo aplikasi siji-halaman, kayata [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Bisa diatur kaya iki:

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

Amarga `MX` lan `CNAME` cathetan `A` bisa urip bebarengan, yen sampeyan pengin nampa email jeneng domain ing wektu sing padha, sampeyan kudu `CNAME` sama karo skrip [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Kajaba iku, amarga biaya lalu lintas luar negeri vendor awan ing daratan China relatif larang, yen sampeyan pengin ngoptimalake biaya, sampeyan bisa nggunakake [resolusi geografis gratis Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) lan jeneng domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kaya ing ngisor iki) kanggo entuk pengalihan lalu lintas──Lalu lintas ing daratan China Baidu Cloud `CDN` lalu lintas internasional dadi cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Solusi optimasi penyebaran iki luwih rumit lan bakal dienalake ing bab sing kapisah ing mangsa ngarep.

#### Pangalihan Jeneng Domain Umum

Yen sampeyan nggunakake `i18n.site` kanggo nggawe situs web minangka situs web utama, sampeyan biasane kudu ngatur pangalihan pan-domain, yaiku, pangalihan `*.xxx.com` (kalebu `www.xxx.com` ) akses menyang `xxx.com` .

Persyaratan iki bisa digayuh kanthi bantuan saka Alibaba `CDN` `EdgeScript` ( [dokumen Inggris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumen Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambah jeneng domain ing [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) lan arahake `*.xxx.com` domain menyang Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Contone, konfigurasi pangalihan jeneng pan-domain ing gambar ing ndhuwur kaya ing ngisor `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Nyebarake Karo nginx

Mangga tambahake konfigurasi sing padha karo `server` ngisor iki nginx ing ngendi `/root/i18n/md/out/ol/htm` mangga ganti menyang path proyek sampeyan dhewe `out/ol/htm` :

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

#### Umum

File statis situs web, kayata `favicon.ico` `robots.txt` , lsp.

File lambang ing kene bisa digawe nganggo [realfavicongenerator.net](https://realfavicongenerator.net) .

#### .i18n

Ing `.i18n` ana file konfigurasi `i18n.site` , cache terjemahan, lsp. Deleng bab sabanjure ["Konfigurasi"](/i18n.site/conf) kanggo rincian.

#### en

Direktori basa sumber, cocog `.i18n/conf.yml` `fromTo` `en` ing file konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Mangga deleng konfigurasi terjemahan [i18](/i18/use)

