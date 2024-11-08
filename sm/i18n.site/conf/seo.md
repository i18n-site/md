# Su'e Su'esu'e (Seo)

## Mataupu Faavae

`i18n.site` fa'aaogaina se fa'ailoga itulau e tasi e le toe fa'afouina Ina ia fa'afaigofie le su'esu'eina o fa'asino igoa, o le a fa'atupuina se isi itulau fa'amau ma `sitemap.xml` mo tagata fetolofi.

Pe a faʻaaogaina `User-Agent` o le talosaga avanoa e le suʻesuʻega afi suʻesuʻe, o le talosaga o le a toe faʻafeiloaʻi i le itulau static e ala i `302` .

I luga o itulau tumau, fa'aaoga `link` e fa'ailoa ai so'otaga i gagana eseese o lenei itulau, pei ole :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Faiga Fa'apitonu'u nginx

Ave le faila faʻatulagaina `.i18n/htm/main.yml` i le poloketi faʻataʻitaʻiga e fai ma faʻataʻitaʻiga

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

Fa'amolemole sui muamua le tau o le `host:` i luga i lou igoa ole igoa, pei ole `xxx.com` .

Ona, `i18n.site -n` , o le itulau faʻamautu o le a faʻatupuina i le `out/main/htm` directory.

Ioe, e mafai foʻi ona e faʻatagaina isi faila faila, e pei o le faʻasino muamua i le faʻatulagaina o le `main` e fatu ai `.i18n/htm/dist.package.json` ma `.i18n/htm/dist.yml` .

Ona tamoe lea `i18n.site -n -c dist` ina ia maua ai le itulau static i `out/dist/htm` .

`nginx` e mafai ona seti e ala i le faʻasino i le faʻatulagaina o loʻo i lalo.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Aua le teuina fa'amaumauga a tagata faigaluega mo se taimi umi
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Seti taimi pupuu umi mo isi punaoa tumau
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Seti po'o fea faila fa'amau e fa'aogaina e le to'a e fai ma fa'ailoga i le itulau autu
location = / {
  # $botLang e le o gaogao, o lona uiga o le tolotolo o le avanoa ma le toe faʻafeiloaʻi e tusa ai ma le ala gagana
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Fuafuaga talosaga itulau tasi
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Fa'atulaga Mea E Teu Ai Mea Mo Le Fa'apipi'iina O Faila Fa'amau

E mafai ona fa'atupu faila i totonu o le atunu'u, ae o se faiga masani o le tu'uina atu lea i le teuina o mea.

Suia `out` ua faatulagaina i luga e :

```
out:
  - s3
```

Ona, fa'asa'o `~/.config/i18n.site.yml` ma fa'aopoopo le fa'atulagaga lea :

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

I le faʻatulagaga, faʻamolemole sui `i18n.site` i le tau o `host:` i `.i18n/htm/main.yml` , tele faleoloa mea faitino e mafai ona faʻapipiʻiina i lalo ole `s3` , ma le `region` fanua e filifili (tele faleoloa mea faitino e le manaʻomia le setiina o lenei fanua).

Ona tamoe lea `i18n.site -n` e toe lolomi le poloketi.

Afai ua e suia `~/.config/i18n.site.yml` ma e te manaʻo e toe faʻapipiʻi, faʻamolemole faʻaaoga le poloaiga lenei i le lisi o aʻa o le poloketi e faʻamalo ai le faʻapipiʻiina o le cache :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Fetuutuunaiga cloudflare

O le igoa ole igoa e talimalo ai [cloudflare](//www.cloudflare.com)

### Tulafono O Le Liuaina

Fa'aopoopo tulafono fa'aliliu e pei ona fa'aalia i lalo:

![](//p.3ti.site/1725436822.avif)

O le tulafono tulafono e fa'apea, fa'amolemole sui le code "i18n.site" i lou igoa ole igoa:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Tulafono Fa'apipi'i

Fa'aopoopo tulafono fa'aoga e pei ona taua i lalo:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Fa'atonu Tulafono

Seti tulafono toe fa'atonu e pei ona taua i lalo, fa'amolemole sui le code "i18n.site" i lou igoa fa'apitonu'u

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

`URL redirect` Filifili le suiga malosi, fa'amolemole sui `/en` ile toe fa'asinoala `concat("/en",http.request.uri.path,".htm")` ile gagana fa'aletonu e te mana'o e fa'aaofia i masini su'esu'e.

## Baidu Intelligent Cloud Configuration

Afai e te manaʻomia le tuʻuina atu o auaunaga i le atunuʻu Saina, e mafai ona e faʻaogaina [Baidu Smart Cloud](//cloud.baidu.com) .

O faʻamatalaga e tuʻuina atu i le Baidu Object Storage ma fusifusia i le Baidu Content Distribution Network.

Ona fai lea o le tusitusiga i totonu o [EdgeJS auaunaga pito](//console.bce.baidu.com/cdn/#/cdn/ejs/list) i lalo

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
  // E mafai ona seti fa'aulutala tali e fa'aleaga mea e fai, pei ole out.XXX = 'MSG';
})
```

Kiliki `Debug` , ona kiliki lea o le Fa'asalalau i le feso'ota'iga atoa.

![](//p.3ti.site/1725437754.avif)

## Fa'aoga Maualuga: Tufa Atu Fefa'ataua'iga E Fa'atatau I Fa'ai'uga Fa'aitulagi

Afai e te manaʻo e tuʻuina atu auʻaunaga i le atunuʻu tele o Saina ma e te manaʻo foi i `cloudflare` saoloto fefaʻatauaʻiga faavaomalo, e mafai ona e faʻaogaina `DNS` ma le faʻaitulagi faʻaitulagi.

Mo se faʻataʻitaʻiga, [Huawei Cloud DNS](https://www.huaweicloud.com) e tuʻuina atu fua faʻaitulagi suʻesuʻega, lea e mafai ai e fefaʻatauaʻiga a Saina ona ui atu i le Baidu Smart Cloud, ma o fefaʻatauaiga faavaomalo e mafai ona alu i `cloudflare` .

E tele fa'alavelave i le fa'atulagaina o le `cloudflare` O nai mea nei e tatau ona matauina :

### Ole Igoa Ole Igoa Ole Talimalo Ile Isi `DNS` , Faʻafefea Ona Faʻaoga `cloudflare`

Fa'amau muamua se igoa fa'asinoala i `cloudflare` , ona fa'aaoga lea o `SSL/TLS` → igoa fa'ale-aganu'u e fa'afeso'ota'i ai le igoa autu i le igoa lea.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` E Le Mafai Ona Maua I Se Igoa Fa'ale-Aganu'u

Talu ai ona o le fausiaina `cloudflare` i totonu o le teuina o mea faitino `R2` e le mafai ona maua e se igoa faʻapitoa faʻapitoa, e manaʻomia le faʻaogaina o se mea faʻapipiʻi lona tolu e tuʻu ai faila faʻamau.

O iinei tatou te ave ai [backblaze.com](https://www.backblaze.com) e fai ma faʻataʻitaʻiga e faʻaalia ai pe faʻafefea ona fusifusia mea faʻapitoa e teu i le `cloudflare` .

Fausia se pakete i le `backblaze.com` , faʻapipiʻi soʻo se faila, kiliki e suʻe le faila, ma maua le igoa ole igoa ole `Friendly URL` , o le `f003.backblazeb2.com` iinei.

![](//p.3ti.site/1725440783.avif)

Suia le igoa ole igoa mai `CNAME` i `f003.backblazeb2.com` ile `cloudflare` ma mafai ai le sui.

![](//p.3ti.site/1725440896.avif)

Suia `cloudflare` o `SSL` → faiga fa'ailoga, seti i `Full`

![](//p.3ti.site/1725438572.avif)

Fa'aopoopo le tulafono fa'aliliu e pei ona fa'aalia i lalo, fa'amuamua (o le mea muamua e sili ona fa'amuamua):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` filifili le malosi ma sui `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` i lou igoa pakete.

E le gata i lea, i le tulafono o le liliu mai `cloudflare` i luga, ua suia `index.html` i `file/your_bucketname/index.html` , ma o isi faatulagaga e tumau pea.

![](//p.3ti.site/1725441384.avif)