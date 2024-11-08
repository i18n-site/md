# Panyebaran Sareng Online

`i18n.site` ngadopsi arsitéktur [aplikasi halaman tunggal](https://developer.mozilla.org/docs/Glossary/SPA) , sareng halaman lawang halaman wéb sareng eusi halaman wéb disebarkeun sacara mandiri.

Sanggeus ngajalankeun tarjamahan di luhur, diréktori `htm` jeung `v` bakal dihasilkeun dina diréktori `md/out/dev` .

Di dieu, `dev` hartina diwangun dumasar kana `.i18n/htm/dev.yml` file konfigurasi.

`dev` diréktori :

Diréktori `htm` nyaéta halaman lawang halaman wéb.

Diréktori `v` ngandung eusi halaman wéb sareng nomer versi.

Sawangan lokal henteu paduli ngeunaan nomer versi sareng bakal nyalin sadaya file kana diréktori `out/dev/v/0.1.0` .

Pikeun pelepasan resmi, file anu dirobih bakal disalin kana diréktori nomer vérsi énggal.

## Sebutkeun File Konfigurasi Sareng `-c`

File konfigurasi anu béda-béda bakal nyiptakeun diréktori anu cocog dina diréktori `out` .

Contona, `.i18n/htm/main.yml` bakal nyieun `out/main` diréktori.

`dev.yml` sareng `main.yml` mangrupikeun konfigurasi standar.

`dev` nyaéta singketan tina `development` , nunjukkeun lingkungan pangwangunan, dipaké pikeun sawangan lokal, sarta ogé mangrupa file konfigurasi standar.
`ol` nyaéta singketan tina `online` , `-n` lingkungan online, anu dianggo pikeun pelepasan resmi `npm`

Anjeun ogé tiasa nyiptakeun file konfigurasi anu sanés Anggo `--htm_conf` dina garis paréntah pikeun nangtukeun nami file konfigurasi anu dianggo:

salaku conto:
```
i18n.site --htm_conf dist --save
```

Di dieu `--save` ngagambarkeun nomer versi release update.

## <a rel=id href="#npm" id="npm"></a> Nyebarkeun eusi ka npmjs.com

Nyebarkeun eusi ka [npmjs.com](//npmjs.com) nyaéta solusi standar anu disarankeun (tingali [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Login & Pos

Pasang `nodejs` , log in sareng `npm login` .

Édit `md/.i18n/htm/main.yml` sareng ganti nilai [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) nami `npm` anjeun nyalira.

Lajeng ngarobah `md/.i18n/htm/main.package.json`

Jalankeun `i18n.site --npm` atanapi `i18n.site -n` dina diréktori `md` pikeun narjamahkeun sareng nyebarkeun.

Upami anjeun nganggo lingkungan integrasi kontinyu pikeun nyebarkeun, teu kedah masang `nodejs` Ngan nyalin ijin log-in sareng nyebarkeun `~/.npmrc` ka lingkungan.

Upami anjeun ngarobih nami pakét `v:` dina `main.yml` , **pastikeun pikeun ngahapus `.i18n/v/main` heula** teras nyebarkeun éta.

#### Server Proxy Diterbitkeun Ku npm

Upami pangguna di daratan Cina ngalaman masalah jaringan sareng henteu tiasa nyebarkeun `npm` bungkusan, aranjeunna tiasa nyetél variabel lingkungan `https_proxy` pikeun ngonpigurasikeun server proxy.

Anggap port server proxy anjeun `7890` , anjeun tiasa nyerat:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Eusi Timer Hosted

Upami anjeun hoyong nga-host eusi éta, édit heula `md/.i18n/htm/main.yml` sareng robih `v: //unpkg.com/i18n.site` kana awalan URL anjeun, sapertos `v: //i18n-v.xxx.com` .

Lebetkeun diréktori `md` sareng jalankeun

```
i18n.site --htm_conf ol --save
```

atawa singgetan

```
i18n.site -c ol -s
```

Lajeng, ngonpigurasikeun eusi dina diréktori `md/out/main/v` ka jalur awalan URL disetél dina `v:` .

Tungtungna, **ngonpigurasikeun waktos cache tina jalur tungtung `/.v` ka `1s`** , disebutkeun eusi karek dileupaskeun teu bisa diakses langsung.

Waktu cache pikeun jalur séjén bisa disetel ka sataun atawa leuwih pikeun ngurangan requests nu teu perlu.

## Eusi Host Kana s3

Pikeun eusi timer host, salian ti ngagunakeun server anjeun sorangan, pilihan umum `CDN` nyaéta ngagunakeun `S3` +

Anjeun tiasa nganggo [rclone](https://rclone.org) pikeun log in kana server `S3` , teras tingal sareng ngaropea skrip di handap ieu, sareng ngan ukur nyalin parobihan kana `S3` pikeun tiap pelepasan.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Inget pikeun ngonpigurasikeun `CDN` supados waktos cache jalur ditungtungan ku `/.v` nyaeta `1s` , disebutkeun eusi karek dileupaskeun teu bisa diaksés langsung.

## Nyebarkeun Ramatloka

Website éta tiasa disebarkeun dimana waé [github page](https://pages.github.com) sareng [cloudflare page](https://pages.cloudflare.com) mangrupikeun pilihan anu saé.

Kusabab situs wéb nganggo arsitéktur [aplikasi halaman tunggal](https://developer.mozilla.org/docs/Glossary/SPA) , émut pikeun nulis ulang jalur URL anu henteu ngandung `. ` dugi ka `index.html` .

Halaman éntri halaman wéb ngan ukur kedah disebarkeun sakali, sareng henteu kedah nga-redeploy halaman éntri halaman wéb pikeun apdet eusi salajengna.

### Nyebarkeun Dina Kaca github

Klik heula di dieu ! `i18n-demo` [github organisasi](https://github.com/account/organizations/new?plan=free) .

Teras jieun gudang `i18n-demo.github.io` dina organisasi ieu (punten gentos `i18n-demo` sareng nami organisasi anu anjeun damel):

![](https://p.3ti.site/1721098657.avif)

Nalika nyebarkeun eusi dina artikel saméméhna, `out/main/htm` geus dihasilkeun Mangga lebetkeun diréktori ieu sarta ngajalankeun :

```
ln -s index.html 404.html
```


Kusabab `github page` henteu ngadukung panulisan jalur URL, `404.html` dianggo.

Teras jalankeun paréntah di handap ieu dina diréktori `htm` (inget ngagentos `i18n-demo/i18n-demo.github.io.git` sareng alamat gudang anjeun nyalira) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Saatos nyorong kodeu, ngantosan panyebaran `github page` suksés (sapertos anu dipidangkeun di handap) sateuacan anjeun tiasa ngaksés éta.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pikeun halaman demo mangga tingali:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Nyebarkeun Dina Kaca cloudflare

[cloudflare page](//pages.cloudflare.com) sareng `github page` , éta nyayogikeun panulisan jalur sareng langkung ramah ka daratan Cina sareng langkung diaksés.

Panyebaran `cloudflare page` biasana dumasar kana panyebaran `github page` di luhur.

Jieun proyék sareng ngabeungkeut `i18n-demo.github.io` gudang di luhur.

Prosésna dipidangkeun dina gambar di handap ieu:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Mangga klik `Add Account` pikeun masihan aksés ka organisasi `i18n-demo` .

Upami anjeun parantos ngabeungkeut gudang organisasi anu sanés, anjeun panginten kedah klik `Add Account` dua kali pikeun masihan otorisasi dua kali sateuacan organisasi énggal bakal ditingalikeun.

![](https://p.3ti.site/1721118306.avif)

Salajengna, pilih gudang `i18n-demo.github.io` , teras klik `Begin setup` , sareng nganggo nilai standar pikeun léngkah-léngkah salajengna.

![](https://p.3ti.site/1721118490.avif)

Saatos ngariung pikeun kahiji kalina, anjeun kedah ngantosan sababaraha menit sateuacan anjeun tiasa ngaksés éta.

Saatos nyebarkeun, anjeun tiasa ngabeungkeut nami domain khusus.

![](https://p.3ti.site/1721119459.avif)

Saatos ngariung nami domain khusus, mangga angkat ka nami domain pikeun ngonpigurasikeun jalan nulis ulang aplikasi halaman tunggal, sapertos anu dipidangkeun di handap ieu:

![](https://p.3ti.site/1721119320.avif)

Aturan dina gambar di luhur nyaéta kieu. Mangga ganti `i18n.site` dina baris kahiji di handap ku ngaran domain anjeun kabeungkeut.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Sajaba ti éta, mangga ngonpigurasikeun aturan cache, sakumaha ditémbongkeun di handap, tur nyetel durasi cache ka sabulan.

![](https://p.3ti.site/1721125111.avif)

Punten gentos nami domain anu cocog dina léngkah kadua dina gambar di luhur kana nami domain anu anjeun kabeungkeut.

### Ngaoptimalkeun Panyebaran Halaman Wéb Di Daratan Cina

Upami anjeun hoyong kéngingkeun prestasi aksés anu langkung saé dina lingkungan jaringan daratan Cina, mangga [ngadaptarkeun nami domain](//beian.aliyun.com) heula.

Teras, pake panyimpen obyék ngical paralatan awan di daratan + `CDN` Nyebarkeun eusi di handap ieu `out/main/htm` .

Anjeun tiasa nganggo komputasi tepi pikeun nulis ulang jalur pikeun adaptasi kana aplikasi halaman tunggal Contona, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) tiasa dikonpigurasikeun sapertos kieu:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Anjeun tiasa nyetel lulugu respon pikeun debug kaluaran, kayaning out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Kusabab catetan `MX` sareng catetan `CNAME` teu tiasa hirup babarengan, upami anjeun hoyong nampi email nami domain dina waktos anu sami, anjeun kedah damel sareng [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pikeun tingkat `CNAME` kana catetan `A` .

Salaku tambahan, kusabab biaya lalu lintas luar negeri pikeun ngical paralatan awan di daratan Cina kawilang mahal, upami anjeun hoyong ngaoptimalkeun biaya, anjeun tiasa nganggo [DNS geografis gratis Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) sareng nami domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (sapertos anu dipidangkeun di handap) pikeun ngahontal lalulintas diversion──Lalu lintas routing di Cina daratan Baidu Awan `CDN` , lalulintas internasional mana cloudflare .

![](https://p.3ti.site/1721119788.avif)

Solusi optimasi panyebaran ieu langkung rumit sareng bakal diwanohkeun dina bab-bab anu misah di hareup.

### Ngaran Domain Generik Redirection

Upami anjeun nganggo `i18n.site` pikeun ngahasilkeun halaman wéb salaku halaman wéb utama anjeun, anjeun biasana kedah ngonpigurasikeun alihan pan-domain, nyaéta, alihan aksés ka `*.xxx.com` (kaasup `www.xxx.com` ) ka `xxx.com` .

Sarat ieu tiasa dihontal kalayan bantosan Alibaba Cloud `CDN` `EdgeScript` ( [Dokumén Inggris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumén Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

`CNAME` nami `CDN` `*.xxx.com` [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list)

![](https://p.3ti.site/1721122000.avif)

Contona, konfigurasi alihan ngaran pan-domain `*.i18n.site` dina gambar di luhur nyaéta kieu:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Nyebarkeun Sareng nginx

Punten tambahkeun konfigurasi anu sami sareng `out/main/htm` handap `/root/i18n/md/out/main/htm` dina paragraf `server` nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Dumasar `github action` Integrasi Kontinyu

Anjeun tiasa ningali ka handap pikeun ngonpigurasikeun `github action` anjeun:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Salaku bisa ditempo dina konfigurasi nu, workflow ieu dipicu nalika ngadorong ka cabang `main` jeung cabang `dist` .

Alur kerja bakal nganggo file konfigurasi anu cocog sareng nami cabang pikeun nyebarkeun dokumen Di dieu, `.i18n/htm/main.yml` sareng `.i18n/htm/dist.yml` bakal dianggo salaku konfigurasi penerbitan.

Kami ngarékoméndasikeun prakték pangsaéna pikeun prosés ngaleupaskeun dokumén:

Nalika parobahan kadorong ka cabang `main` , dokumen ieu dipicu pikeun diwangun sareng disebarkeun ka stasiun sawangan (stasiun sawangan sayogi [github page](//pages.github.com) ).

Saatos ngonfirmasi yén dokumen éta leres dina situs sawangan, kodeu bakal dihijikeun sareng kadorong ka cabang `dist` , sareng ngawangun sareng penyebaran resmi bakal online.

Tangtosna, ngalaksanakeun prosés di luhur peryogi nyerat langkung seueur konfigurasi.

Anjeun tiasa ngarujuk kana proyék saleresna [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) skrip alur kerja.

`secrets.I18N_SITE_TOKEN` jeung `secrets.NPM_TOKEN` dina konfigurasi merlukeun anjeun ngonpigurasikeun variabel rusiah dina dasar kode.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` nyaéta token penerbitan pakét `npm` dina konfigurasi Visit [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Struktur Diréktori

### `public`

File statik situs wéb, sapertos `favicon.ico` , `robots.txt` , jsb.

File ikon di dieu tiasa didamel nganggo [realfavicongenerator.net](https://realfavicongenerator.net) .

### `.i18n`

Dina diréktori `.i18n` aya file konfigurasi, tarjamahan cache, jsb `i18n.site` Tempo bab salajengna ["Konfigurasi"](/i18n.site/conf) pikeun detil.

### `en`

Diréktori basa sumber, pakait sareng `en` tina `fromTo` dina `.i18n/conf.yml` file konfigurasi

```yaml
i18n:
  fromTo:
    en: zh
```

Mangga tingal konfigurasi tarjamahan [i18](/i18/use)