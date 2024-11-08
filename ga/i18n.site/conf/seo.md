# Optamú Inneall Cuardaigh (Sinsearach)

## Prionsabal

`i18n.site` glacann sé ailtireacht leathanach aonair neamh-athnuachan D'fhonn innéacsú cuardaigh a éascú, ginfear leathanach statach ar leith agus `sitemap.xml` le haghaidh crawlers.

Nuair a úsáideann crawler an innill chuardaigh `User-Agent` den iarratas rochtana, déanfar an t-iarratas a atreorú chuig an leathanach statach trí `302` .

Ar leathanaigh statacha, bain úsáid as `link` chun naisc le leaganacha éagsúla den leathanach seo a léiriú, mar shampla :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Cumraíocht nginx Áitiúil

Tóg an comhad cumraíochta `.i18n/htm/main.yml` sa tionscadal taispeána mar shampla

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

Ar dtús, modhnaigh luach `host:` thuas chuig d'ainm fearainn, mar `xxx.com` .

Ansin, `i18n.site -n` , ginfear an leathanach statach san eolaire `out/main/htm` .

Ar ndóigh, is féidir leat comhaid cumraíochta eile a chumasú freisin, mar shampla tagairt a dhéanamh ar dtús do chumraíocht `main` chun `.i18n/htm/dist.package.json` agus `.i18n/htm/dist.yml` a chruthú.

Ansin rith `i18n.site -n -c dist` ionas go mbeidh an leathanach statach ginte go `out/dist/htm` .

Is féidir `nginx` a shocrú trí thagairt a dhéanamh don chumraíocht thíos.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ná cuir scripteanna oibrithe freastalaí i dtaisce rófhada
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Socraigh amanna taisce níos faide le haghaidh acmhainní statacha eile
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Socraigh an comhad statach a úsáideann an crawler mar iontráil leathanach baile
location = / {
  # Mura bhfuil $botLang folamh, ciallaíonn sé rochtain crawler agus atreorú de réir cosán na teanga socraithe
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Cumraíocht feidhmchláir aon leathanach
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Cumraigh Stóras Réad Chun Comhaid Statacha a Uaslódáil

Is féidir comhaid statacha a ghiniúint go háitiúil, ach cur chuige níos coitianta ná iad a uaslódáil chuig stóráil réad.

Athraigh `out` atá cumraithe thuas go :

```
out:
  - s3
```

Ansin, cuir `~/.config/i18n.site.yml` in eagar agus cuir an chumraíocht seo a leanas leis :

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

Sa chumraíocht, le do thoil athraigh `i18n.site` go luach `host:` in `.i18n/htm/main.yml` , is féidir stórais iolracha oibiachtaí a chumrú faoi `s3` , agus tá an `region` réimse roghnach (ní gá go leor siopaí réad an réimse seo a shocrú).

Ansin rith `i18n.site -n` chun an tionscadal a athfhoilsiú.

Má d'athraigh tú `~/.config/i18n.site.yml` agus más mian leat ath-uaslódáil, bain úsáid as an ordú seo a leanas i bhfréamheolaire an tionscadail chun an taisce uaslódála a ghlanadh :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cumraíocht cloudflare

Ainm fearainn arna óstáil ag [cloudflare](//www.cloudflare.com)

### Rialacha Comhshó

Cuir leis na rialacha tiontaithe mar a thaispeántar thíos:

![](//p.3ti.site/1725436822.avif)

Is é seo a leanas an cód riail, le do thoil modhnaigh an cód "i18n.site" chuig d'ainm fearainn:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Rialacha Taisce

Cuir rialacha taisce leis mar seo a leanas:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Rialacha Atreoraithe

Socraigh na rialacha atreoraithe mar seo a leanas, le do thoil modhnaigh an cód "i18n.site" chuig d'ainm fearainn

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

`URL redirect` Roghnaigh atreorú dinimiciúil, modhnaigh `/en` i gcosán atreoraithe `concat("/en",http.request.uri.path,".htm")` go dtí an teanga réamhshocraithe is mian leat a chur san áireamh in innill chuardaigh.

## Cumraíocht Scamaill Chliste Baidu

Más gá duit seirbhísí a sholáthar do mhórthír na Síne, is féidir leat [Baidu Smart Cloud](//cloud.baidu.com) a úsáid.

Déantar sonraí a uaslódáil chuig Baidu Object Storage agus a cheangal ar Baidu Content Distribution Network.

Ansin cruthaigh an script i [seirbhís imeall EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Is féidir ceanntásca freagartha a shocrú d'aschur dífhabhtaithe, mar shampla out.XXX = 'MSG';
})
```

Cliceáil `Debug` , ansin cliceáil Foilsigh don líonra iomlán.

![](//p.3ti.site/1725437754.avif)

## Ardúsáid: Dáil Trácht Bunaithe Ar Réiteach Réigiúnach

Más mian leat seirbhísí a sholáthar ar mhórthír na Síne agus más mian leat `cloudflare` trácht idirnáisiúnta saor in aisce, is féidir leat `DNS` a úsáid le réiteach réigiúnach.

Mar shampla, soláthraíonn [Huawei Cloud DNS](https://www.huaweicloud.com) anailís réigiúnach saor in aisce, lena bhféadfaidh trácht mórthír na Síne dul trí Baidu Smart Cloud, agus is féidir le trácht idirnáisiúnta dul trí `cloudflare` .

Tá go leor gaistí i gcumraíocht `cloudflare` Seo cúpla pointe le tabhairt faoi deara :

### Tá an T-Ainm Fearainn Á Óstáil I `DNS` Eile, Conas `cloudflare` a Úsáid

Ceangail ainm fearainn treallach le `cloudflare` ar dtús, agus ansin úsáid `SSL/TLS` → ainm fearainn saincheaptha chun an príomhainm fearainn a cheangal leis an ainm fearainn seo.

![](https://p.3ti.site/1725438658.avif)

### Ní Féidir Teacht Ar `cloudflare R2` Trí Ainm Fearainn Saincheaptha

Toisc nach féidir teacht ar an stór réad `cloudflare` `R2` le hainm fearainn saincheaptha, ní mór stóras réad tríú páirtí a úsáid chun comhaid statacha a chur.

Glacaimid [backblaze.com](https://www.backblaze.com) mar shampla chun a léiriú conas rudaí tríú páirtí a cheangal le stóráil ag `cloudflare` .

Cruthaigh buicéad ag `backblaze.com` , uaslódáil aon chomhad, cliceáil chun an comhad a bhrabhsáil, agus faigh ainm fearainn `Friendly URL` , atá `f003.backblazeb2.com` anseo.

![](//p.3ti.site/1725440783.avif)

Athraigh an t-ainm fearainn ó `CNAME` go `f003.backblazeb2.com` ag `cloudflare` agus cumasaigh an seachfhreastalaí.

![](//p.3ti.site/1725440896.avif)

Modhnaigh `cloudflare` de `SSL` → modh criptithe, socraigh go `Full`

![](//p.3ti.site/1725438572.avif)

Cuir an riail chomhshó mar a thaispeántar thíos, cuir ar dtús é (tá an tosaíocht is ísle ag an gcéad cheann):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` roghnaigh dinimiciúil agus modhnaigh `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` go dtí d'ainm buicéad.

Ina theannta sin, sa riail chomhshó `cloudflare` thuas, athraítear `index.html` go `file/your_bucketname/index.html` , agus fanann cumraíochtaí eile mar a chéile.

![](//p.3ti.site/1725441384.avif)