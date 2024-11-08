# Deployment Uye Online

`i18n.site` inotora [dhizaini-peji](https://developer.mozilla.org/docs/Glossary/SPA) rekuvaka, uye peji rekupinda webhusaiti uye zvemukati webhusaiti zvinoiswa zvakazvimirira.

Mushure mekuita shanduro iri pamusoro, madhairekitori `htm` uye `v` anozogadzirwa pasi `md/out/dev` dhairekitori.

Pano, `dev` inoreva kuti yakavakwa zvichibva pane `.i18n/htm/dev.yml` yekumisikidza faira.

`dev` directory :

Iyo `htm` dhairekitori ndiyo peji rekupinda webhusaiti.

Iyo `v` dhairekitori ine webhusaiti zvirimo nenhamba dzeshanduro.

Ongororo yemunharaunda haina basa nezve nhamba yeshanduro uye inokopa ese mafaera `out/dev/v/0.1.0` dhairekitori.

Kuti ibudiswe zviri pamutemo, mafaera akachinjwa anokopwa kudhairekitori renhamba yeshanduro itsva.

## Taura Faira Rekugadzirisa `-c`

Akasiyana ekugadzirisa mafaera achagadzira anowirirana madhairekitori mune `out` dhairekitori.

Semuenzaniso, `.i18n/htm/main.yml` ichagadzira iyo `out/main` dhairekitori.

`dev.yml` uye `main.yml` ndiwo magadzirirwo akasarudzika.

`dev` ndiyo chidimbu `development` , ichiratidza nharaunda yebudiriro, inoshandiswa pakuona kwenzvimbo, uye zvakare ndiyo faira yekumisikidza.
`ol` ndiyo chidimbu `online` , ichiratidza nharaunda yepamhepo, iyo inoshandiswa kuburitswa zviri pamutemo Iri zvakare faira yekumisikidza kana uchishandisa command line paramita `-n` kusvika `npm` kuburitsa.

Iwe unogona zvakare kugadzira mamwe mafaera ekugadzirisa Shandisa `--htm_conf` pamutsara wekuraira kutsanangura zita refaira rekushandisa.

semuyenzaniso:
```
i18n.site --htm_conf dist --save
```

Pano `--save` inomiririra iyo yekuvandudza kuburitswa vhezheni nhamba.

## <a rel=id href="#npm" id="npm"></a> Shambadzira zvirimo kunpmjs.com

Kutsikisa zvirimo [ku](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

### npm Login & Post

Isa `nodejs` , pinda `npm login` .

Rongedza `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) shandura kukosha [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` sezita rako repasuru `npm`

Zvadaro shandura `md/.i18n/htm/main.package.json`

Mhanya `i18n.site --npm` kana `i18n.site -n` mudhairekitori `md` kuti ushandure nekushambadza.

Kana iwe ukashandisa inoenderera mberi yekubatanidza nharaunda kuti ibudise, hapana chikonzero chekuisa `nodejs` Ingokopa iyo yakanyorwa-mukati uye yekuburitsa mvumo `~/.npmrc` kune zvakatipoteredza.

Kana ukagadzirisa zita repasuru `v:` muna `main.yml` , ndapota **ita shuwa kudzima `.i18n/v/main`** kutanga wozoiburitsa.

#### Proxy Server Yakaburitswa Nenpm

Kana vashandisi vari mainland China vasangana nematambudziko etiweki uye vasingakwanise kuburitsa `npm` mapakeji, vanogona kuseta nharaunda inosiyana `https_proxy` kugadzirisa iyo proxy server.

Tichifunga kuti proxy server port yako ndeye `7890` , unogona kunyora:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Kuzvibata Wega Zvemukati

Kana iwe uchida kuzvipa wega zvirimo, tanga wagadzirisa `md/.i18n/htm/main.yml` uye shandura `v: //unpkg.com/i18n.site` kune yako URL prefix, senge `v: //i18n-v.xxx.com` .

Pinda iyo `md` dhairekitori uye mhanya

```
i18n.site --htm_conf ol --save
```

kana chidimbu

```
i18n.site -c ol -s
```

Wobva wagadzirisa zvirimo `md/out/main/v` dhairekitori kune iyo URL prefix nzira yakaiswa `v:` .

Pakupedzisira, **gadzirisa nguva ye cache yenzira inopera muna `/.v` kusvika `1s`** , kana zvisina kudaro zvinyorwa zvichangobva kubudiswa hazvigoni kuwanikwa pakarepo.

Iyo cache nguva yedzimwe nzira inogona kusetwa kune rimwe gore kana kupfuura kuderedza zvikumbiro zvisina basa.

## Host Zvemukati Kune s3

Kuti uzvigadzirise `CDN` , kuwedzera pakushandisa yako wega sevha, imwe yakajairika sarudzo ndeye kushandisa `S3` + .

Unogona kushandisa [rclone](https://rclone.org) kuti upinde musevha `S3` , wozotarisa uye gadzirisa script inotevera, uye ingoteedzera shanduko dzekuwedzera `S3` pakuburitswa kwega kwega.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Yeuka kugadzirisa `CDN` kuitira kuti nguva ye cache yenzira inopera muna `/.v` ndeye `1s` , kana zvisina kudaro zvinyorwa zvichangobva kusunungurwa hazvigone kuwanikwa pakarepo.

## Buritsa Webhusaiti

Iyo webhusaiti inogona kuiswa chero kupi [github page](https://pages.github.com) uye [cloudflare page](https://pages.cloudflare.com) isarudzo dzakanaka.

Nekuti iyo webhusaiti inoshandisa architecture [yepeji imwe-peji](https://developer.mozilla.org/docs/Glossary/SPA) , yeuka kunyorazve URL nzira dzisina `. ` kusvika `index.html` .

Webhusaiti yekupinda peji inongoda kuiswa kamwe chete, uye hapana chikonzero chekuisazve peji rekupinda webhusaiti kune zvinotevera zvinongedzo zvemukati.

### Isa Pane github Peji

Chekutanga [tinya github kuti ugadzire sangano](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Wobva wagadzira imba yekuchengetera `i18n-demo.github.io` pasi pesangano iri (ndokumbira tsiva `i18n-demo` nezita resangano rawakagadzira):

![](https://p.3ti.site/1721098657.avif)

Pakuburitsa zviri muchinyorwa chapfuura, `out/main/htm` yagadzirwa :

```
ln -s index.html 404.html
```


Nekuti `github page` haitsigire URL nzira yekunyorazve, `404.html` inoshandiswa pachinzvimbo.

Wobva wamhanya unotevera kuraira mune `htm` dhairekitori (rangarira kutsiva `i18n-demo/i18n-demo.github.io.git` nekero yako yekuchengetera) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mushure mekusundidzira kodhi, mirira kutumirwa `github page` kuti imhanye zvinobudirira (sezvinoratidzwa pazasi) usati waiwana.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kuti uwane demo peji ndapota ona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Isa Pane cloudflare Peji

[cloudflare page](//pages.cloudflare.com) `github page` , inopa nzira yekunyorazve uye inoshamwaridzana nenyika yeChina uye inosvikika zvakanyanya.

Kuiswa `cloudflare page` kazhinji kunobva pakuiswa `github page` pamusoro.

Gadzira purojekiti uye sunga iyo `i18n-demo.github.io` imba yekuchengetera pamusoro.

Iyo nzira inoratidzwa mumufananidzo uri pasi apa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ndapota tinya `Add Account` kuti upe mukana kune sangano `i18n-demo` .

Kana wakasunga dura rerimwe sangano, ungangoda kudzvanya `Add Account` kaviri kuti upe mvumo kaviri sangano idzva risati raratidzwa.

![](https://p.3ti.site/1721118306.avif)

Tevere, sarudza warehouse `i18n-demo.github.io` , wobva wadzvanya `Begin setup` , uye shandisa iyo default kukosha kune anotevera matanho.

![](https://p.3ti.site/1721118490.avif)

Mushure mekusunga kekutanga, unofanirwa kumirira maminetsi mashoma usati waiwana.

Mushure mekutumirwa, unogona kusunga zita rezita renzvimbo.

![](https://p.3ti.site/1721119459.avif)

Mushure mekusunga iyo yakasarudzika zita rezita, ndapota enda kuzita rezita kuti ugadzirise nzira yekunyorazve yepeji-peji application, sezvakaratidzwa pazasi:

![](https://p.3ti.site/1721119320.avif)

Mitemo iri pamufananidzo uri pamusoro ndookuti tsiva `i18n.site` mumutsetse wekutanga pazasi nezita renzvimbo yawakasunga.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Mukuwedzera, ndapota gadzirisa mitemo ye cache, sezvakaratidzwa pasi apa, uye isa nguva ye cache kumwedzi mumwe.

![](https://p.3ti.site/1721125111.avif)

Ndokumbirawo shandura zita rezita rinoenderana mudanho rechipiri pamufananidzo uri pamusoro kune zita rezita rawakasunga.

### Kugadzirisa Kutumirwa Kwewebhusaiti Mu Mainland China

Kana iwe uchida kuwana zvirinani kuwanikwa kwekuita munzvimbo yetiweki ye mainland China, ndapota [nyoresa zita rezita](//beian.aliyun.com) kutanga.

Zvadaro, shandisa chinhu chekuchengetedza chevatengesi vemakore munyika + `CDN` Tumira zvinotevera zvirimo `out/main/htm` .

Unogona kushandisa komputa komputa kunyorazve nzira kuti ienderane kune imwechete-peji zvikumbiro Semuyenzaniso, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inogona kugadzirwa seizvi:

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
  // Misoro yemhinduro inogona kusetwa kuti igadzirise kubuda, senge out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Nekuti rekodhi `MX` uye rekodha `CNAME` haigone kugarisana, kana iwe uchida kugamuchira zita rezita maemail panguva imwe chete, iwe unofanirwa kushandira pamwe neiyo [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kusvika padanho `CNAME` mune rekodhi `A` .

Pamusoro pezvo, nekuti mhiri kwemakungwa kubhadhariswa kwevatengesi vemakore kuChina kwakadhura, kana iwe uchida kukwidziridza mitengo, unogona kushandisa [Huawei DNS 's yemahara geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) uye [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's tsika domain zita (sezvinoratidzwa pazasi) kuti uwane traffic diversion──Traffic routing munyika yeChina Baidu Cloud `CDN` , traffic yepasi rose inoenda cloudflare .

![](https://p.3ti.site/1721119788.avif)

Aya ma deployment optimization mhinduro akanyanya kuomarara uye achaunzwa muzvitsauko zvakasiyana mune ramangwana.

### Generic Domain Name Redirection

Kana iwe ukashandisa `i18n.site` kugadzira webhusaiti sewe webhusaiti yako huru, iwe kazhinji unoda kugadzirisa pan-domain redirection, kureva, redirect access to `*.xxx.com` (kusanganisira `www.xxx.com` ) kusvika `xxx.com` .

Ichi chinodiwa chinogona kuwanikwa nerubatsiro rweAlibaba Cloud `CDN` `EdgeScript` ( [gwaro](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) [reChirungu](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) /

Wedzera zita renzvimbo muAlibaba [CDN](https://cdn.console.aliyun.com/domain/list) uye nongedzera zita renzvimbo `*.xxx.com` `CNAME` muAlibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Semuenzaniso, iyo pan-domain zita redirection kumisikidzwa `*.i18n.site` pamufananidzo uri pamusoro ndeyotevera:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Shandisa Ne nginx

Ndokumbira uwedzere gadziriso yakafanana `out/main/htm` `/root/i18n/md/out/main/htm` `server` ye nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Kubva `github action` Kuenderera Kubatanidzwa

Iwe unogona kutarisa kune zvinotevera kugadzirisa yako `github action` :

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

Sezvinogona kuonekwa mukugadzirisa, kufambiswa kwebasa uku kunotangwa paunenge uchisundira kubazi `main` uye bazi `dist` .

Kufambiswa kwebasa kuchashandisa faira rekugadzirisa rinoenderana nezita rebazi kuti ribudise gwaro pano, `.i18n/htm/main.yml` uye `.i18n/htm/dist.yml` ichashandiswa sekugadzirisa kudhindwa.

Isu tinokurudzira anotevera akanakisa maitiro ekuburitsa gwaro maitiro:

Kana shanduko dzichisundirwa kubazi `main` , gwaro rinokonzereswa kuti rivakwe uye riendeswe kuchiteshi chekutarisa (iyo chiteshi chekutarisa chiripo [github page](//pages.github.com) ).

Mushure mekusimbisa kuti gwaro racho rakarurama panzvimbo yekutarisa, kodhi yacho ichabatanidzwa uye yosundirwa kubazi `dist` , uye iyo yepamutemo kuvaka uye kutumira ichaenda online.

Ehe, kuita zviri pamusoro apa zvinoda kunyora mamwe magadzirirwo.

Unogona kutarisa kune chaiyo purojekiti scripting yebasa [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` uye `secrets.NPM_TOKEN` mukumisikidzwa inoda kuti iwe ugadzirise zvakavanzika zvakasiyana muiyo kodhi base.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` chiratidzo chekuburitsa chepakeji `npm` [npmjs.com](//npmjs.com) uye gadzira chiratidzo chine mvumo yekuburitsa (sezvinoratidzwa pazasi).

![](//p.3ti.site/1730969906.avif)


## Dhairekitori Chimiro

### `public`

Static mafaera ewebhusaiti, senge `favicon.ico` , `robots.txt` , nezvimwe.

Iyo icon mafaera pano anogona kugadzirwa ne [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Pasi pe `.i18n` dhairekitori pane mafaira ekugadzirisa, cache yeshanduro, nezvimwe zve `i18n.site` Ona chitsauko chinotevera ["Configuration"](/i18n.site/conf) kuti uwane ruzivo.

### `en`

Dhairekitori remutauro wemabviro, rinoenderana `en` `fromTo` `.i18n/conf.yml` yekumisikidza faira

```yaml
i18n:
  fromTo:
    en: zh
```

Ndokumbira utarise kugadziridzwa kweshanduro [i18](/i18/use)