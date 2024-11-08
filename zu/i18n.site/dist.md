# Ukuthunyelwa Kanye Ne-Inthanethi

`i18n.site` yamukela ukwakheka [kwesicelo sekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , futhi ikhasi lokungena lewebhusayithi nokuqukethwe kwewebhusayithi kuthunyelwa ngokuzimela.

Ngemva kokusebenzisa ukuhumusha okungenhla, uhla lwemibhalo `htm` no `v` luzokwenziwa ngaphansi kohla lwemibhalo `md/out/dev` .

Lapha, `dev` usho ukuthi yakhiwe ngokusekelwe kufayela lokucushwa `.i18n/htm/dev.yml` .

`dev` inkomba :

I-directory engu `htm` yikhasi lokungena lewebhusayithi.

Inkomba engu `v` iqukethe iwebhusayithi enezinombolo zenguqulo.

Ukubuka kuqala kwendawo akunandaba nenombolo yenguqulo futhi kuzokopisha wonke amafayela kuhla lwemibhalo elingu `out/dev/v/0.1.0` .

Ukuze kukhishwe ngokusemthethweni, amafayela ashintshiwe azokopishelwa kunkomba yenombolo yenguqulo entsha.

## Cacisa Ifayela Lokumisa Ngo- `-c`

Amafayela okumisa ahlukene azodala izinkomba ezihambisanayo kuhla lwemibhalo `out` .

Isibonelo, `.i18n/htm/main.yml` uzodala uhla lwemibhalo olu `out/main` .

`dev.yml` kanye `main.yml` yizicucu ezizenzakalelayo.

`dev` isifinyezo sika- `development` , esibonisa indawo yokuthuthuka, esetshenziselwa ukubuka kuqala kwendawo, futhi iyifayela lokumisa elizenzakalelayo.
`ol` isifinyezo sika- `online` , esibonisa indawo eku-inthanethi, esetshenziselwa ukukhululwa ngokusemthethweni Kuphinde kube ifayela lokumisa elizenzakalelayo lapho kusetshenziswa imingcele yomugqa womyalo `-n` kuya ku `npm` ukuze ukhulule.

Ungakwazi futhi ukudala amanye amafayela wokumisa Sebenzisa `--htm_conf` emugqeni womyalo ukuze ucacise igama lefayela lokumisa ozolisebenzisa:

Ngokwesibonelo:
```
i18n.site --htm_conf dist --save
```

Lapha u `--save` umele inombolo yenguqulo yokukhishwa.

## <a rel=id href="#npm" id="npm"></a> Shicilela okuqukethwe ku-npmjs.com

Ukushicilela okuqukethwe ku- [npmjs.com](//npmjs.com) yisixazululo esimisiwe esinconywayo (bona [Ukutholakala Okuphezulu Okuphezulu](/i18n.site/feature#ha) ).

### npm Ngena & Thumela

Faka `nodejs` , ngena nge `npm login` .

Hlela `md/.i18n/htm/main.yml` futhi ushintshe inani loku [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) lakho lephakheji `npm` elingasebenzi.

Bese ulungisa u `md/.i18n/htm/main.package.json`

Qalisa `i18n.site --npm` noma `i18n.site -n` kuhla lwemibhalo `md` ukuze uhumushe futhi ushicilele.

Uma usebenzisa indawo eqhubekayo yokuhlanganisa ukuze ushicilele, asikho isidingo sokufaka `nodejs` Vele ukopishe izimvume zokungena ngemvume nokushicilela `~/.npmrc` endaweni.

Uma ulungisa igama lephakeji lika `v:` ku `main.yml` , sicela **uqinisekise ukuthi ususa `.i18n/v/main` kuqala** bese ukushicilele.

#### Iseva Elibamba Eshicilelwe Ngu-Npm

Uma abasebenzisi e-Mainland China behlangabezana nezinkinga zenethiwekhi futhi bengakwazi ukushicilela amaphakheji `npm` , bangasetha ukuhluka kwemvelo `https_proxy` ukuze kulungiselelwe iseva elibamba.

Ngokucabanga ukuthi imbobo yeseva yommeleli wakho ngu `7890` , ungabhala:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Okuqukethwe Okuzibambele Wena

Uma ufuna ukuzibamba ngokwakho okuqukethwe, qala uhlele okuthi `md/.i18n/htm/main.yml` bese ushintsha `v: //unpkg.com/i18n.site` kusiqalo se-URL yakho, njengokuthi `v: //i18n-v.xxx.com` .

Faka u `md` lwemibhalo bese ugijima

```
i18n.site --htm_conf ol --save
```

noma isifinyezo

```
i18n.site -c ol -s
```

Bese, ulungiselela okuqukethwe ohlwini lwemibhalo `md/out/main/v` endleleni yesiqalo se-URL esethwe ku `v:` .

Okokugcina, **lungiselela isikhathi senqolobane yendlela egcina ngo `/.v` ukuya ku `1s`** , ngaphandle kwalokho okuqukethwe okusha akukwazi ukufinyelelwa ngokushesha.

Isikhathi senqolobane sezinye izindlela singasethwa sibe unyaka owodwa noma ngaphezulu ukuze kuncishiswe izicelo ezingadingekile.

## Setha Okuqukethwe Ku-S3

Ukuze uzibambele ngokwakho okuqukethwe, ngaphezu kokusebenzisa iseva yakho, enye inketho `CDN` ukusebenzisa `S3` + .

Ungasebenzisa [rclone](https://rclone.org) ukuze ungene kuseva `S3` , bese ubhekisela futhi ulungise umbhalo olandelayo, futhi ukopishe kuphela izinguquko ezikhulayo ku- `S3` ekukhishweni ngakunye.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Khumbula ukulungisa `CDN` ukuze isikhathi senqolobane yendlela egcina ngo `/.v` sibe ngu `1s` , ngaphandle kwalokho okuqukethwe okusanda kukhishwa akukwazi ukufinyelelwa ngokushesha.

## Shicilela Iwebhusayithi

Iwebhusayithi ingasatshalaliswa noma kuphi [github page](https://pages.github.com) futhi [cloudflare page](https://pages.cloudflare.com) yizinqumo ezinhle.

Ngoba iwebhusayithi isebenzisa ukwakheka [kohlelo lokusebenza lwekhasi elilodwa](https://developer.mozilla.org/docs/Glossary/SPA) , khumbula ukubhala kabusha imizila ye-URL engaqukathi `. ` ukuya ku `index.html` .

Ikhasi lokufaka iwebhusayithi lidinga ukusetshenziswa kanye kuphela, futhi asikho isidingo sokuphinda usebenzise ikhasi lokufaka iwebhusayithi ukuze uthole izibuyekezo zokuqukethwe ezilandelayo.

### Sebenzisa Ekhasini Le-Github

Okokuqala [chofoza github ukuze udale inhlangano](https://github.com/account/organizations/new?plan=free) . Igama lenhlangano elilandelayo ngu `i18n-demo` njengesibonelo.

Bese udala indawo yokugcina impahla engu `i18n-demo.github.io` ngaphansi kwale nhlangano (sicela ufake igama lenhlangano olidalile esikhundleni soku `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Uma ushicilela okuqukethwe esihlokweni esedlule, kukhiqizwa okungu `out/main/htm` . Sicela ufake lolu hlu lwemibhalo bese uqalisa :

```
ln -s index.html 404.html
```


Ngenxa yokuthi `github page` akakusekeli ukubhalwa kabusha kwendlela ye-URL, kusetshenziswa `404.html` esikhundleni salokho.

Bese usebenzisa umyalo olandelayo ohlwini lwemibhalo `htm` (khumbula ukufaka ikheli lakho le-warehouse esikhundleni sika `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ngemva kokuphusha ikhodi, linda ukuthunyelwa kuka- `github page` ukuze kusebenze ngempumelelo (njengoba kukhonjisiwe ngezansi) ngaphambi kokuthi uyifinyelele.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ngekhasi ledemo sicela ubone:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Sebenzisa Ekhasini Le-Cloudflare

Uma [cloudflare page](//pages.cloudflare.com) no `github page` , inikeza indlela yokubhala kabusha futhi inobungani nezwe lase-China futhi ifinyeleleka kalula.

Ukuthunyelwa kuka `cloudflare page` ngokuvamile kusekelwe ekusetshenzisweni koku `github page` ngenhla.

Dala iphrojekthi futhi ubophe i-warehouse `i18n-demo.github.io` ngenhla.

Inqubo iboniswa esithombeni esingezansi:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Sicela uchofoze `Add Account` ukuze unikeze ukufinyelela kwenhlangano `i18n-demo` .

Uma ubophe i-warehouse yenye inhlangano, kungase kudingeke ukuthi uchofoze `Add Account` kabili ukuze ugunyaze kabili ngaphambi kokuthi inhlangano entsha iboniswe.

![](https://p.3ti.site/1721118306.avif)

Okulandelayo, khetha i-warehouse `i18n-demo.github.io` , bese uchofoza u `Begin setup` , bese usebenzisa amanani azenzakalelayo ngezinyathelo ezilandelayo.

![](https://p.3ti.site/1721118490.avif)

Ngemva kokubopha okokuqala, udinga ukulinda amaminithi ambalwa ngaphambi kokuthi ukwazi ukuyifinyelela.

Ngemva kokuthunyelwa, ungakwazi ukubopha igama lesizinda ngokwezifiso.

![](https://p.3ti.site/1721119459.avif)

Ngemva kokubophezela igama lesizinda ngokwezifiso, sicela uye egameni lesizinda ukuze ulungiselele ukubhalwa kabusha kwendlela yohlelo lokusebenza lwekhasi elilodwa, njengoba kukhonjisiwe ngezansi:

![](https://p.3ti.site/1721119320.avif)

Imithetho esesithombeni esingenhla imi kanje. Sicela ufake igama lesizinda osibophe ngalo esikhundleni `i18n.site` emgqeni wokuqala ongezansi

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ngaphezu kwalokho, sicela ulungiselele imithetho yenqolobane, njengoba kukhonjisiwe ngezansi, bese usetha ubude benqolobane bube yinyanga eyodwa.

![](https://p.3ti.site/1721125111.avif)

Sicela ushintshe igama lesizinda elimeshayo esinyathelweni sesibili esithombeni esingenhla siye egameni lesizinda osibophelile.

### Ukuthuthukisa Ukuthunyelwa Kwewebhusayithi E-Mainland China

Uma ufuna ukuthola ukusebenza okungcono kokufinyeleleka endaweni yenethiwekhi yezwekazi laseChina, sicela [ubhalise igama lesizinda](//beian.aliyun.com) kuqala.

Bese, sebenzisa isitoreji sento sabathengisi bamafu e-Mainland + `CDN` Sebenzisa okuqukethwe okulandelayo `out/main/htm` .

Ungasebenzisa i-edge computing ukuze ubhale kabusha indlela ukuze ivumelane nezinhlelo zokusebenza zekhasi elilodwa. Isibonelo, [i-Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ingalungiselelwa kanje:

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
  // Izihloko zezimpendulo zingasethwa ukuze zisuse iphutha, njengokuthi out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ngenxa yokuthi irekhodi elingu `MX` nerekhodi elingu `CNAME` alikwazi ukuhlalisana, uma ufuna ukuthola ama-imeyili egama lesizinda ngesikhathi esifanayo, udinga [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) neskripthi se-Level `CNAME` sibe yirekhodi lesi `A` .

Ngaphezu kwalokho, ngenxa yokuthi izindleko zethrafikhi zaphesheya kwezilwandle zabathengisi bamafu e-Mainland China zibiza kakhulu, uma ufuna ukukhulisa izindleko, ungasebenzisa [DNS samahhala se-Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kanye negama lesizinda langokwezifiso [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (njengoba kukhonjisiwe ngezansi) ukuze uzuze i-traffic diversion──Umzila wethrafikhi ezweni lase-China i-Baidu Cloud `CDN` , ithrafikhi yamazwe ngamazwe iya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Lezi zixazululo zokuthuthukisa ukuthunyelwa ziyinkimbinkimbi futhi zizokwethulwa ezahlukweni ezihlukene ngokuzayo.

### Ukuqondisa Kabusha Igama Lesizinda Esijwayelekile

Uma usebenzisa `i18n.site` ukuze ukhiqize iwebhusayithi njengewebhusayithi yakho eyinhloko, ngokuvamile udinga ukulungisa ukuqondisa kabusha kwesizinda se-pan, okungukuthi, ukuqondisa kabusha ukufinyelela ku `*.xxx.com` (kuhlanganise no `www.xxx.com` ) kuya ku `xxx.com` .

Le mfuneko ingafinyelelwa ngosizo lwe - Alibaba Cloud `CDN` `EdgeScript` ( [Idokhumenti yesiNgisi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Idokhumenti yesiShayina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Engeza igama lesizinda ku [-Alibaba CDN](https://cdn.console.aliyun.com/domain/list) bese ukhomba igama lesizinda `*.xxx.com` `CNAME` ku-Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Isibonelo, ukucushwa kokuqondisa kabusha kwesizinda se-pan-domain kuka `*.i18n.site` esithombeni esingenhla kungokulandelayo:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Sebenzisa Nge nginx

Sicela ungeze ukucushwa `out/main/htm` nalokhu okulandelayo endimeni engu `/root/i18n/md/out/main/htm` `server` ye- nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ngokusekelwe Ku `github action` Ukuhlanganiswa Okuqhubekayo

Ungabheka okulandelayo ukuze ulungiselele `github action` yakho:

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

Njengoba kungabonakala ekucushweni, lokhu kuhamba komsebenzi kuqalwa lapho kuphushwa egatsheni `main` kanye negatsha `dist` .

Ukugeleza komsebenzi kuzosebenzisa ifayela lokumisa elihambisana negama legatsha ukuze kushicilelwe idokhumenti Lapha, `.i18n/htm/main.yml` kanye no `.i18n/htm/dist.yml` kuzosetshenziswa njengokucushwa kokushicilela ngokulandelanayo.

Sincoma izinqubo ezihamba phambili ezilandelayo zenqubo yokukhishwa kwedokhumenti:

Uma izinguquko ziphushelwa egatsheni `main` , idokhumenti icushwa ukuthi yakhiwe futhi isetshenziswe esiteshini sokubuka kuqala (isiteshi sokubuka kuqala siyatholakala [github page](//pages.github.com) ).

Ngemva kokuqinisekisa ukuthi idokhumenti ilungile esizeni sokubuka kuqala, ikhodi izohlanganiswa bese iphushelwa egatsheni `dist` , futhi ukwakhiwa okusemthethweni nokuthunyelwa kuzongena ku-inthanethi.

Kunjalo, ukusebenzisa inqubo engenhla kudinga ukubhala ukucupha okwengeziwe.

Ungabheka iphrojekthi yangempela yokubhala kokuhamba komsebenzi [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` kanye no `secrets.NPM_TOKEN` ekucushweni kudinga ukuthi ulungiselele okuguquguqukayo okuyimfihlo kusisekelo sekhodi.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` iwuphawu lokushicilela lwephakheji `npm` [npmjs.com](//npmjs.com) futhi udale ithokheni enezimvume zokushicilela (njengoba kukhonjisiwe ngezansi).

![](//p.3ti.site/1730969906.avif)


## Isakhiwo Sohlu Lwemibhalo

### `public`

Amafayela amile wewebhusayithi, njengokuthi `favicon.ico` , `robots.txt` , njll.

Amafayela esithonjana lapha angenziwa nge- [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Ngaphansi kwenkomba `.i18n` kukhona amafayela okumisa, inqolobane yokuhumusha, njll. ka `i18n.site` Bheka isahluko esilandelayo [esithi "Ukucushwa"](/i18n.site/conf) ukuze uthole imininingwane.

### `en`

Uhla lwemibhalo lolimi oluwumthombo, oluhambisana no `en` koku `fromTo` kufayela lokucushwa elingu `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Sicela ubheke ukucushwa kokuhumusha [i18](/i18/use)