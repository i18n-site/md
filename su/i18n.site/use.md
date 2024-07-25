# Pasang &

## Token Konfigurasi

`i18n.site` Alat `i18` dipasang, mangga [klik di dieu pikeun ngarujuk kana dokumén `i18` pikeun ngonpigurasikeun token aksés](/i18/use) .

## Masang

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyék Demo

Hayu urang mimitian ku proyék demo sareng diajar kumaha ngagunakeun `i18n.site`

Urang clone heula gudang demo sareng ngajalankeun paréntah sapertos kieu:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Pamaké di daratan Cina tiasa:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ngaran diréktori tina clone dasar kode kudu `md` pikeun ngagampangkeun sawangan lokal kalawan `docker` `demo.i18n.site`

### Narjamahkeun

Kahiji, asupkeun diréktori `md` jeung ngajalankeun `i18n.site` , nu bakal narjamahkeun `en` ka `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Saatos ngajalankeun, tarjamahan `git add . ` file cache bakal didamel `md`

### Sawangan Lokal

Pasang sareng mimitian `docker` ( `MAC` nyarankeun ngagunakeun [orbstack](https://orbstack.dev) salaku runtime `docker` ).

Teras, lebetkeun `docker` sareng jalankeun `./up.sh` , teras buka [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Eusi Posting

`i18n.site` Ngadopsi arsitéktur [aplikasi hiji halaman](https://developer.mozilla.org/docs/Glossary/SPA) , sareng halaman lawang halaman wéb sareng eusi halaman wéb disebarkeun sacara mandiri.

Sanggeus ngajalankeun tarjamahan di luhur, `htm` jeung `v` diréktori bakal dihasilkeun dina diréktori `md/out/dev`

Di dieu, `dev` nunjukkeun yén éta diwangun dumasar kana file `.i18n/htm/dev.yml` .

`dev` :

`htm` Dina diréktori aya kaca lawang ramatloka.

`v` Diréktori ngandung eusi ramatloka kalawan nomer versi.

Tilik lokal bakal nyalin sadaya file ka `out/dev/v/0.1.0` , henteu paduli nomer versi.

Pikeun pelepasan resmi, file anu dirobih bakal disalin kana diréktori nomer vérsi énggal.

#### Paké -c Pikeun Nangtukeun File Konfigurasi

Berkas konfigurasi anu béda-béda bakal nyiptakeun diréktori anu cocog dina diréktori `out`

Contona, `.i18n/htm/ol.yml` bakal nyieun hiji `out/ol` diréktori.

`dev.yml` jeung `ol.yml` nyaéta konfigurasi standar.

`dev` nyaéta singketan tina `development` , anu ngagambarkeun lingkungan pamekaran, dianggo pikeun sawangan lokal, sareng ogé file konfigurasi standar.
`ol` nyaeta singketan tina `online` , nu ngagambarkeun lingkungan online, dipaké pikeun release resmi, sarta ogé mangrupa file konfigurasi standar nalika medarkeun ka `npm` ngagunakeun parameter baris paréntah `-n` .

Anjeun ogé tiasa nyiptakeun file konfigurasi anu sanés nganggo `--htm_conf`

salaku conto:
```
i18n.site --htm_conf yourConfig --save
```

Di dieu `--save` nuduhkeun nomer versi release update.

#### <a rel=id href="#npm" id="npm"></a> Nyebarkeun eusi ka npmjs.com

Nyebarkeun eusi ka [npmjs.com](//npmjs.com) nyaéta solusi standar anu disarankeun (tingali [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Ngaleupaskeun

Pasang `nodejs` anggo `npm login` pikeun asup.

Édit `md/.i18n/htm/ol.yml` ganti `i18n.site` dina `v: //unpkg.com/i18n.site` ka anjeun sorangan `npm` nami pakét.

Ngan nganggo nami pakét anu henteu ditempatkeun dina [npmjs.com](//npmjs.com) .

Nalika nerbitkeun dumasar kana pakét `npm` , **pastikeun ngagunakeun `//unpkg.com/`** salaku awalan tina nilai `v:` Waktu cache `i18n.site` di handapeun jalur awalan ieu `/.v` parantos dioptimalkeun sacara khusus pikeun ningali kaluaran énggal.

Jalankeun `i18n.site --npm` atanapi `i18n.site -n` dina `md` pikeun narjamahkeun sareng nyebarkeun.

Upami anjeun nganggo `~/.npmrc` integrasi kontinyu pikeun nyebarkeun, henteu kedah dipasang `nodejs`

Upami anjeun ngarobih nami pakét dina `v:` di `ol.yml` , **pastikeun pikeun ngahapus `.i18n/v/ol` heula** teras nyebarkeun éta.

##### Server Proxy Diterbitkeun Ku npm

Upami pangguna di daratan Cina ngalaman masalah jaringan sareng henteu tiasa nyebarkeun paket `npm` , aranjeunna tiasa nyetél variabel lingkungan `https_proxy` pikeun ngonpigurasikeun server proxy.

Anggap port server proxy anjeun `7890` Anjeun bisa nulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Eusi Timer Hosted

Upami anjeun hoyong nga-host kontén, mimiti, `md/.i18n/htm/ol.yml` sareng robih `v: //unpkg.com/i18n.site` kana awalan URL anjeun, sapertos `v: //i18n-v.xxx.com` .

Lebetkeun diréktori `md`

```
i18n.site --htm_conf ol --save
```

atawa singgetan

```
i18n.site -c ol -s
```

Lajeng, ngonpigurasikeun eusi dina `md/out/ol/v` ka URL awalan jalur disetel dina `v:` .

Tungtungna, **`1s` waktos cache tina jalur anu ditungtungan ku `/.v`**

Waktu cache pikeun jalur séjén bisa disetel ka sataun atawa leuwih pikeun ngurangan requests nu teu perlu.

##### Eusi Host Kana s3

Pikeun eusi host sorangan, salian ti ngagunakeun server anjeun sorangan, `CDN` umum séjén nyaéta + `S3`

Anjeun tiasa nganggo `S3` [rclone](https://rclone.org) teras tingal sareng modifikasi naskah di handap, sareng ngan ukur nyalin parobahan dina `S3` unggal waktos anjeun nyebarkeun.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Émut pikeun ngonpigurasikeun `CDN` supados waktos cache jalur anu ditungtungan ku `/.v` nyaéta `1s` , upami henteu, anjeun moal tiasa langsung ngaksés eusi anu énggal.

### Nyebarkeun Ramatloka

Website éta tiasa disebarkeun dimana waé [github page](https://pages.github.com) sareng [cloudflare page](https://pages.cloudflare.com) mangrupikeun pilihan anu saé.

Kusabab situs wéb nganggo arsitektur [aplikasi halaman tunggal](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` pikeun nyerat deui jalur URL anu henteu ngandung `. `

Halaman éntri halaman wéb ngan ukur kedah disebarkeun sakali, sareng henteu kedah nga-redeploy halaman éntri halaman wéb pikeun apdet eusi salajengna.

#### Nyebarkeun Dina Kaca github

[Klik heula di dieu github pikeun nyieun hiji organisasi](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Teras jieun gudang di handapeun organisasi ieu `i18n-demo.github.io` (Punten gentoskeun `i18n-demo` sareng nami organisasi anu anjeun damel):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Nalika nyebarkeun eusi dina artikel saméméhna, éta geus `out/ol/htm` Mangga lebetkeun diréktori ieu sarta ngajalankeun :

```
ln -s index.html 404.html
```


Kusabab `github page` henteu ngadukung panulisan jalur URL, janten `404.html` dianggo.

Teras jalankeun paréntah di handap `i18n-demo/i18n-demo.github.io.git` : diréktori `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Saatos nyorong kodeu, antosan panyebaran `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pikeun halaman demo mangga tingali:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Nyebarkeun Dina Kaca cloudflare

Dibandingkeun sareng [cloudflare page](//pages.cloudflare.com) `github page` éta nyayogikeun panulisan jalur sareng langkung ramah ka daratan Cina sareng disarankeun pikeun dianggo.

`cloudflare page` biasana dumasar kana panyebaran `github page` di luhur.

Jieun proyék sareng beungkeutkeun gudang di luhur `i18n-demo.github.io`

Prosésna dipidangkeun dina gambar di handap ieu:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Mangga klik `Add Account` pikeun masihan aksés ka `i18n-demo` .

Upami anjeun parantos ngabeungkeut gudang organisasi anu sanés, anjeun panginten kedah `Add Account` dua kali pikeun masihan otorisasi dua kali sateuacan organisasi anyar bakal ditingalikeun.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Teras pilih `i18n-demo.github.io` , teras klik `Begin setup` , sareng nganggo nilai standar pikeun léngkah-léngkah salajengna.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Saatos ngariung pikeun kahiji kalina, anjeun kedah ngantosan sababaraha menit sateuacan anjeun tiasa ngaksés éta.

Saatos nyebarkeun, anjeun tiasa ngabeungkeut nami domain khusus.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Saatos ngariung nami domain khusus, mangga angkat ka nami domain pikeun ngonpigurasikeun jalan nulis ulang aplikasi halaman tunggal, sapertos anu dipidangkeun di handap ieu:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Aturan dina gambar di luhur nyaéta kieu. Mangga `i18n.site` dina baris kahiji di handap sareng nami domain anu dibeungkeut ku anjeun.

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

Sajaba ti éta, mangga ngonpigurasikeun aturan cache, sakumaha ditémbongkeun di handap, tur nyetel durasi cache ka sabulan.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Punten gentos nami domain anu cocog dina léngkah kadua dina gambar di luhur kana nami domain anu anjeun kabeungkeut.

#### Ngaoptimalkeun Panyebaran Halaman Wéb Di Daratan Cina

Upami anjeun hoyong kéngingkeun prestasi aksés anu langkung saé dina lingkungan jaringan daratan Cina, mangga [ngadaptarkeun nami domain](//beian.aliyun.com) heula.

Teras, pake panyimpen obyék `out/ol/htm` paralatan awan di daratan `CDN` +

Anjeun tiasa nganggo komputasi tepi pikeun nulis ulang jalur pikeun adaptasi kana aplikasi halaman tunggal, sapertos [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Kusabab `MX` sareng `CNAME` rékaman teu tiasa hirup babarengan, upami anjeun hoyong nampi email nami domain dina waktos anu sami, anjeun kedah damel sareng [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pikeun ngaratakeun `CNAME` kana `A` record.

Salaku tambahan, kusabab biaya lalu lintas luar negeri pikeun ngical paralatan awan di daratan Cina kawilang mahal, upami anjeun hoyong ngaoptimalkeun biaya, anjeun tiasa nganggo [resolusi geografis gratis Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) sareng nami domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (sapertos anu dipidangkeun di handap) pikeun ngahontal lalu lintas diversion──Lalu lintas di daratan Cina Baidu Cloud `CDN` lalulintas internasional jadi cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Solusi optimasi panyebaran ieu langkung rumit sareng bakal diwanohkeun dina bab-bab anu misah di hareup.

#### Ngaran Domain Generik Redirection

Upami anjeun nganggo `i18n.site` pikeun ngahasilkeun halaman wéb salaku halaman wéb utama anjeun, anjeun biasana kedah ngonpigurasikeun alihan pan-domain, nyaéta, alihan `*.xxx.com` (kaasup `www.xxx.com` ) aksés ka `xxx.com` .

Sarat ieu tiasa dihontal kalayan bantosan Alibaba Cloud `CDN` `EdgeScript` ( [dokumen Inggris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumén Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambahkeun ngaran domain di [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) sarta arahkeun `*.xxx.com` domain ka Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Contona, konfigurasi alihan ngaran pan-domain tina `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Nyebarkeun Sareng nginx

Punten tambahkeun konfigurasi anu sami sareng `server` nginx dimana `/root/i18n/md/out/ol/htm` punten robih kana jalur proyek anjeun nyalira `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struktur Diréktori

#### Umum

File statik situs wéb, sapertos `favicon.ico` `robots.txt` , jsb.

File ikon di dieu tiasa didamel nganggo [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Di `.i18n` diréktori aya file konfigurasi `i18n.site` 's, cache tarjamahan, jsb Tempo bab salajengna ["Konfigurasi"](/i18n.site/conf) pikeun detil.

#### en

Diréktori basa sumber, pakait `.i18n/conf.yml` `fromTo` `en` dina file konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Mangga tingal konfigurasi tarjamahan [i18](/i18/use)

