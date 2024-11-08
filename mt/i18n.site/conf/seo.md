# Search Engine Optimization (Seo)

## Prinċipju

`i18n.site` jadotta arkitettura ta' paġna waħda mhux ta' aġġornament Sabiex tiġi ffaċilitata l-indiċjar tat-tiftix, se jiġu ġġenerati paġna statika separata u `sitemap.xml` biex jitkaxkru.

Meta `User-Agent` tat-talba għall-aċċess tintuża mit-tkaxkir tal-magna tat-tiftix, it-talba tiġi ridiretta lejn il-paġna statika permezz ta `302` .

Fuq paġni statiċi, uża `link` biex tindika links għal verżjonijiet lingwistiċi differenti ta' din il-paġna, bħal :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Konfigurazzjoni Lokali nginx

Ħu l-fajl tal-konfigurazzjoni `.i18n/htm/main.yml` fil-proġett demo bħala eżempju

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Jekk jogħġbok l-ewwel immodifika l-valur ta' `host:` hawn fuq għall-isem tad-dominju tiegħek, bħal `xxx.com` .

Imbagħad, `i18n.site -n` , il-paġna statika tiġi ġġenerata fid-direttorju `out/main/htm` .

Naturalment, tista 'wkoll tippermetti fajls ta' konfigurazzjoni oħra, bħall-ewwel tirreferi għall-konfigurazzjoni ta ' `main` biex toħloq `.i18n/htm/dist.package.json` u `.i18n/htm/dist.yml` .

Imbagħad mexxi `i18n.site -n -c dist` sabiex il-paġna statika tiġi ġġenerata għal `out/dist/htm` .

`nginx` jista 'jiġi ssettjat billi tirreferi għall-konfigurazzjoni hawn taħt.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Tpoġġix fil-cache l-iskripts tal-ħaddiema tas-server għal żmien twil wisq
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Issettja ħinijiet ta' cache itwal għal riżorsi statiċi oħra
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Issettja liema fajl statiku juża t-tkaxkir bħala l-entrata tal-homepage
location = / {
  # Jekk $botLang mhix vojta, dan ifisser aċċess għat-tkaxkir u direzzjoni mill-ġdid skont il-mogħdija tal-lingwa stabbilita
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfigurazzjoni ta 'applikazzjoni ta' paġna waħda
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ikkonfigura L-Ħażna Tal-Oġġetti Għat-Tlugħ Ta' Fajls Statiċi

Fajls statiċi jistgħu jiġu ġġenerati lokalment, iżda approċċ aktar komuni huwa li jittellgħu fil-ħażna tal-oġġetti.

Immodifika `out` konfigurat hawn fuq għal :

```
out:
  - s3
```

Imbagħad, editja `~/.config/i18n.site.yml` u żid il-konfigurazzjoni li ġejja :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Fil-konfigurazzjoni, jekk jogħġbok ibdel `i18n.site` għall-valur ta ' `host:` `.i18n/htm/main.yml` , ħwienet ta' oġġetti multipli jistgħu jiġu kkonfigurati taħt `s3` , u l-qasam `region` huwa fakultattiv (ħafna ħwienet ta 'oġġetti m'għandhomx għalfejn jissettjaw dan il-qasam).

Imbagħad mexxi `i18n.site -n` biex tippubblika mill-ġdid il-proġett.

Jekk immodifikajt `~/.config/i18n.site.yml` u trid terġa 'upload, jekk jogħġbok uża l-kmand li ġej fid-direttorju tal-għeruq tal-proġett biex tneħħi l-cache tat-tlugħ :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Konfigurazzjoni cloudflare

Isem tad-dominju ospitat fuq [cloudflare](//www.cloudflare.com)

### Regoli Ta' Konverżjoni

Żid ir-regoli tal-konverżjoni kif muri hawn taħt:

![](//p.3ti.site/1725436822.avif)

Il-kodiċi tar-regola huwa kif ġej, jekk jogħġbok immodifika l-kodiċi "i18n.site" għall-isem tad-dominju tiegħek:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regoli Tal-Caching

Żid ir-regoli tal-cache kif ġej:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regoli Mill-Ġdid

Issettja r-regoli tar-ridirezzjoni kif ġej, jekk jogħġbok immodifika l-kodiċi "i18n.site" għall-isem tad-dominju tiegħek

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Agħżel direzzjoni mill-ġdid dinamika, jekk jogħġbok immodifika `/en` fit-triq tar-ridirezzjoni `concat("/en",http.request.uri.path,".htm")` għal-lingwa default li trid li l-magni tat-tiftix jinkludu.

## Konfigurazzjoni Ta 'Cloud Intelliġenti Baidu

Jekk għandek bżonn tipprovdi servizzi liċ-Ċina kontinentali, tista 'tuża [Baidu Smart Cloud](//cloud.baidu.com) .

Id-dejta tittella’ f’Baidu Object Storage u marbuta man-Netwerk ta’ Distribuzzjoni tal-Kontenut Baidu.

Imbagħad oħloq l-iskript fis [EdgeJS servizz edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) kif ġej

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
  // L-intestaturi tar-rispons jistgħu jiġu ssettjati biex jiddebugjaw l-output, bħal out.XXX = 'MSG';
})
```

Ikklikkja `Debug` , imbagħad ikklikkja Ippubblika għan-netwerk kollu.

![](//p.3ti.site/1725437754.avif)

## Użu Avvanzat: Qassam It-Traffiku Abbażi Tar-Riżoluzzjoni Reġjonali

Jekk trid tipprovdi servizzi fiċ-Ċina kontinentali u trid ukoll `cloudflare` traffiku internazzjonali b'xejn, tista 'tuża `DNS` b'riżoluzzjoni reġjonali.

Pereżempju, [Huawei DNS](https://www.huaweicloud.com) jipprovdi analiżi reġjonali b'xejn, li biha t-traffiku taċ-Ċina kontinentali jista 'jgħaddi minn Baidu Smart Cloud, u t-traffiku internazzjonali jista' jgħaddi minn `cloudflare` .

Hemm ħafna nases fil-konfigurazzjoni ta ' `cloudflare` Hawn huma ftit punti li wieħed jinnota :

### L-Isem Tad-Dominju Huwa Ospitat `DNS` Oħra, Kif Tuża `cloudflare`

L-ewwel jorbot isem ta 'dominju arbitrarju ma' `cloudflare` , u mbagħad uża `SSL/TLS` → isem tad-dominju tad-dwana biex tassoċja l-isem tad-dominju prinċipali ma 'dan l-isem tad-dominju.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ma Jistax Jiġi Aċċessat Permezz Ta 'isem Tad-Dominju Personalizzat

Minħabba li l-ħażna ta `cloudflare` l-oġġetti mibnija `R2` ma tistax tiġi aċċessata minn isem ta' dominju personalizzat, jeħtieġ li tintuża ħażna ta 'oġġett ta' parti terza biex tpoġġi fajls statiċi.

[backblaze.com](https://www.backblaze.com) nieħdu bħala eżempju biex nuru kif torbot oġġetti ta 'partijiet terzi biex jinħażnu `cloudflare` .

Oħloq barmil `backblaze.com` , ittella' kwalunkwe fajl, ikklikkja biex tfittex il-fajl, u tikseb l-isem tad-dominju ta ' `Friendly URL` , li huwa `f003.backblazeb2.com` hawn.

![](//p.3ti.site/1725440783.avif)

Ibdel l-isem tad-dominju minn `CNAME` għal `f003.backblazeb2.com` `cloudflare` u ppermetti l-prokura.

![](//p.3ti.site/1725440896.avif)

Immodifika `cloudflare` ta ' `SSL` → mod ta' encryption, issettjat għal `Full`

![](//p.3ti.site/1725438572.avif)

Żid ir-regola tal-konverżjoni kif muri hawn taħt, poġġiha l-ewwel (l-ewwel waħda għandha l-inqas prijorità):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` agħżel dinamiku u mmodifika `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` għall-isem tal-barmil tiegħek.

Barra minn hekk, fir-regola ta 'konverżjoni `cloudflare` hawn fuq, `index.html` jinbidel għal `file/your_bucketname/index.html` , u konfigurazzjonijiet oħra jibqgħu l-istess.

![](//p.3ti.site/1725441384.avif)