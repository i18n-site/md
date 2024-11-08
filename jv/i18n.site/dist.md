# Penyebaran Lan Online

`i18n.site` nganggo arsitektur [aplikasi siji-kaca](https://developer.mozilla.org/docs/Glossary/SPA) , lan kaca mlebu situs web lan isi situs web disebarake kanthi mandiri.

Sawise mbukak terjemahan ing ndhuwur, direktori `htm` lan `v` bakal digawe ing ngisor direktori `md/out/dev` .

Ing kene, `dev` tegese dibangun adhedhasar file konfigurasi `.i18n/htm/dev.yml` .

`dev` direktori :

Direktori `htm` minangka kaca mlebu situs web.

Direktori `v` ngemot konten situs web kanthi nomer versi.

Pratinjau lokal ora peduli karo nomer versi lan bakal nyalin kabeh file menyang direktori `out/dev/v/0.1.0` .

Kanggo release resmi, file sing diganti bakal disalin menyang direktori nomer versi anyar.

## Nemtokake File Konfigurasi Kanthi `-c`

File konfigurasi sing beda bakal nggawe direktori sing cocog ing direktori `out` .

Contone, `.i18n/htm/main.yml` bakal nggawe `out/main` direktori.

`dev.yml` lan `main.yml` minangka konfigurasi standar.

`dev` minangka singkatan saka `development` , nuduhake lingkungan pangembangan, digunakake kanggo pratinjau lokal, lan uga minangka file konfigurasi standar.
`ol` minangka singkatan saka `online` , `-n` lingkungan online, sing digunakake kanggo release resmi `npm`

Sampeyan uga bisa nggawe file konfigurasi liyane Gunakake `--htm_conf` ing baris printah kanggo nemtokake jeneng file konfigurasi kanggo nggunakake:

contone:
```
i18n.site --htm_conf dist --save
```

Ing kene `--save` nuduhake nomer versi rilis nganyari.

## <a rel=id href="#npm" id="npm"></a> Nerbitake konten menyang npmjs.com

Nerbitake konten menyang [npmjs.com](//npmjs.com) minangka solusi standar sing disaranake (pirsani [Ketersediaan Tinggi ing ngarep](/i18n.site/feature#ha) ).

### npm Login & Kirim

Instal `nodejs` , mlebu nganggo `npm login` .

Sunting `md/.i18n/htm/main.yml` lan ganti nilai [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` minangka jeneng paket `npm` sampeyan bakal [npmjs.com](//npmjs.com) .

Banjur ngowahi `md/.i18n/htm/main.package.json`

Jalanake `i18n.site --npm` utawa `i18n.site -n` ing direktori `md` kanggo nerjemahake lan nerbitake.

Yen sampeyan nggunakake lingkungan integrasi terus-terusan kanggo nerbitake, ora perlu nginstal `nodejs` Cukup nyalin ijin mlebu lan nerbitake `~/.npmrc` menyang lingkungan.

Yen sampeyan ngowahi jeneng paket `v:` ing `main.yml` , **priksa manawa sampeyan mbusak `.i18n/v/main` dhisik** banjur diterbitake.

#### Server Proxy Diterbitake Dening npm

Yen pangguna ing daratan China nemoni masalah jaringan lan ora bisa nerbitake `npm` paket, dheweke bisa nyetel variabel lingkungan `https_proxy` kanggo ngatur server proxy.

Yen sampeyan nganggep port server proxy sampeyan `7890` , sampeyan bisa nulis:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Konten Sing Dadi Tuan Rumah Dhewe

Yen sampeyan pengin dadi tuan rumah konten kasebut, sunting dhisik `md/.i18n/htm/main.yml` lan ganti `v: //unpkg.com/i18n.site` dadi awalan URL, kayata `v: //i18n-v.xxx.com` .

Ketik direktori `md` lan mbukak

```
i18n.site --htm_conf ol --save
```

utawa singkatan

```
i18n.site -c ol -s
```

Banjur, atur isi ing direktori `md/out/main/v` menyang path awalan URL sing disetel ing `v:` .

Pungkasan, **atur wektu cache dalan sing pungkasan ing `/.v` nganti `1s`** , yen ora, konten sing mentas dirilis ora bisa diakses langsung.

Wektu cache kanggo dalan liyane bisa disetel dadi setahun utawa luwih kanggo nyuda panjaluk sing ora perlu.

## Isi Host Menyang s3

Kanggo isi host dhewe, saliyane nggunakake server sampeyan dhewe, opsi umum `CDN` yaiku nggunakake `S3` +

Sampeyan bisa nggunakake [rclone](https://rclone.org) kanggo mlebu menyang server `S3` , banjur deleng lan ngowahi skrip ing ngisor iki, lan mung nyalin owah-owahan tambahan menyang `S3` kanggo saben release.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Elinga ngatur `CDN` supaya wektu cache saka path pungkasan ing `/.v` punika `1s` , digunakake isi mentas dirilis ora bisa diakses langsung.

## Nerbitake Situs Web

Situs web bisa disebar ing ngendi wae [github page](https://pages.github.com) lan [cloudflare page](https://pages.cloudflare.com) minangka pilihan sing apik.

Amarga situs web nggunakake arsitektur [aplikasi kaca siji](https://developer.mozilla.org/docs/Glossary/SPA) , elinga nulis ulang jalur URL sing ora ngemot `. ` nganti `index.html` .

Kaca entri situs web mung kudu disebarake sapisan, lan ora perlu masang maneh kaca entri situs web kanggo nganyari konten sabanjure.

### Pasang Ing Kaca github

Pisanan [klik kene github kanggo nggawe organisasi](https://github.com/account/organizations/new?plan=free) `i18n-demo` minangka conto.

Banjur gawe gudang `i18n-demo.github.io` ing organisasi iki (monggo ganti `i18n-demo` karo jeneng organisasi sing digawe):

![](https://p.3ti.site/1721098657.avif)

Nalika nerbitake konten ing artikel sadurunge, `out/main/htm` wis digawe Mangga ketik direktori iki lan mbukak :

```
ln -s index.html 404.html
```


Amarga `github page` ora ndhukung nulis ulang path URL, `404.html` digunakake.

Banjur jalanake perintah ing ngisor iki ing direktori `htm` (elinga ngganti `i18n-demo/i18n-demo.github.io.git` karo alamat gudang sampeyan dhewe) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sawise meksa kode kasebut, ngenteni penyebaran `github page` kanthi sukses (kaya sing ditampilake ing ngisor iki) sadurunge sampeyan bisa ngakses.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kanggo kaca demo, deleng:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Pasang Ing Kaca cloudflare

[cloudflare page](//pages.cloudflare.com) karo `github page` , menehi path rewriting lan luwih loropaken kanggo daratan China lan dianjurake kanggo nggunakake.

Penyebaran `cloudflare page` biasane adhedhasar penyebaran `github page` ing ndhuwur.

Nggawe proyek lan ikatan `i18n-demo.github.io` gudang ing ndhuwur.

Proses kasebut ditampilake ing gambar ing ngisor iki:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Mangga klik `Add Account` kanggo menehi akses menyang organisasi `i18n-demo` .

Yen sampeyan wis mbatesi gudang organisasi liyane, sampeyan bisa uga kudu ngeklik `Add Account` kaping pindho kanggo menehi wewenang kaping pindho sadurunge organisasi anyar bakal ditampilake.

![](https://p.3ti.site/1721118306.avif)

Sabanjure, pilih warehouse `i18n-demo.github.io` , banjur klik `Begin setup` , lan gunakake nilai standar kanggo langkah-langkah sabanjure.

![](https://p.3ti.site/1721118490.avif)

Sawise naleni kaping pisanan, sampeyan kudu ngenteni sawetara menit sadurunge bisa ngakses.

Sawise panyebaran, sampeyan bisa ngiket jeneng domain khusus.

![](https://p.3ti.site/1721119459.avif)

Sawise ngiket jeneng domain khusus, bukak jeneng domain kanggo ngatur path nulis ulang aplikasi siji-kaca, kaya sing kapacak ing ngisor iki:

![](https://p.3ti.site/1721119320.avif)

Aturan ing gambar ndhuwur minangka nderek `i18n.site`

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kajaba iku, atur aturan cache, kaya sing kapacak ing ngisor iki, lan setel durasi cache dadi siji sasi.

![](https://p.3ti.site/1721125111.avif)

Mangga ngganti jeneng domain cocog ing langkah kapindho ing gambar ndhuwur kanggo jeneng domain sampeyan kaiket.

### Ngoptimalake Panyebaran Situs Web Ing Daratan China

Yen sampeyan pengin entuk kinerja aksesibilitas sing luwih apik ing lingkungan jaringan daratan China, mangga [ndhaptar jeneng domain](//beian.aliyun.com) dhisik.

Banjur, gunakake panyimpenan obyek vendor awan ing daratan + `CDN` Nyebarake konten ing ngisor iki `out/main/htm` .

Sampeyan bisa nggunakake komputasi pinggiran kanggo nulis ulang path kanggo adaptasi menyang aplikasi siji-halaman Contone, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) bisa dikonfigurasi kaya iki:

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
  // Sampeyan bisa nyetel header respon kanggo debug output, kayata out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Amarga rekaman `MX` lan rekaman `CNAME` ora bisa urip bebarengan `CNAME` yen sampeyan pengin `A` email jeneng domain ing wektu sing padha, sampeyan kudu kerja sama karo skrip [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Kajaba iku, amarga biaya lalu lintas luar negeri vendor awan ing daratan China relatif larang, yen sampeyan pengin ngoptimalake biaya, sampeyan bisa nggunakake [DNS geografis gratis Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) lan jeneng domain khusus [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kaya sing ditampilake ing ngisor iki) kanggo entuk pengalihan lalu lintas──Nuntun lalu lintas ing daratan China Baidu Cloud `CDN` , lalu lintas internasional dadi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Solusi optimasi penyebaran iki luwih rumit lan bakal dienalake ing bab sing kapisah ing mangsa ngarep.

### Pangalihan Jeneng Domain Umum

Yen sampeyan nggunakake `i18n.site` kanggo ngasilake situs web minangka situs web utama, sampeyan biasane kudu ngatur pangalihan pan-domain, yaiku, pangalihan akses menyang `*.xxx.com` (kalebu `www.xxx.com` ) menyang `xxx.com` .

Syarat iki bisa digayuh kanthi bantuan Alibaba Cloud `CDN` `EdgeScript` ( [Dokumen Inggris](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokumen Cina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tambah jeneng domain ing [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) lan arahake jeneng domain `*.xxx.com` `CNAME` ing Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Contone, konfigurasi pangalihan jeneng pan-domain `*.i18n.site` ing gambar ing ndhuwur kaya ing ngisor iki:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Nyebarake Karo nginx

Mangga tambahake konfigurasi sing padha karo ing ngisor `/root/i18n/md/out/main/htm` ing paragraf `server` saka nginx `out/main/htm`

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Adhedhasar `github action` Integrasi Terus-Terusan

Sampeyan bisa ngrujuk ing ngisor iki kanggo ngatur `github action` :

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

Minangka bisa dideleng ing konfigurasi, alur kerja iki dipicu nalika meksa menyang cabang `main` lan cabang `dist` .

Alur kerja bakal nggunakake file konfigurasi sing cocog karo jeneng cabang kanggo nerbitake dokumen ing kene, `.i18n/htm/main.yml` lan `.i18n/htm/dist.yml` bakal digunakake minangka konfigurasi penerbitan.

Disaranake praktik paling apik ing ngisor iki kanggo proses rilis dokumen:

Nalika owah-owahan di-push menyang cabang `main` , document bakal micu kanggo dibangun lan disebarake menyang stasiun pratinjau (stasiun pratinjau kasedhiya [github page](//pages.github.com) ).

Sawise konfirmasi manawa dokumen kasebut bener ing situs pratinjau, kode kasebut bakal digabung lan di-push menyang cabang `dist` , lan mbangun lan penyebaran resmi bakal online.

Mesthine, ngleksanakake proses ing ndhuwur mbutuhake nulis luwih akeh konfigurasi.

Sampeyan bisa ngrujuk menyang proyek [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) kanggo skrip alur kerja.

`secrets.I18N_SITE_TOKEN` lan `secrets.NPM_TOKEN` ing konfigurasi mbutuhake sampeyan ngatur variabel rahasia ing basis kode.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` minangka token penerbitan paket `npm` ing konfigurasi Visit [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Struktur Direktori

### `public`

File statis situs web, kayata `favicon.ico` , `robots.txt` , lsp.

File lambang ing kene bisa digawe nganggo [realfavicongenerator.net](https://realfavicongenerator.net) .

### `.i18n`

Ing direktori `.i18n` ana file konfigurasi, cache terjemahan, lan liya-liyane saka `i18n.site` Waca bab sabanjure ["Konfigurasi"](/i18n.site/conf) kanggo rincian.

### `en`

Direktori basa sumber, cocog karo file konfigurasi `en` saka `fromTo` ing `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Mangga deleng konfigurasi terjemahan [i18](/i18/use)