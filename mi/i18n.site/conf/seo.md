# Rapu Rapu Rapu (Seo)

## Parau Tumu

`i18n.site` he hangahanga wharangi kotahi-kore-whakahou kia pai ai te rapu tohu, ka hangaia he wharangi pateko me `sitemap.xml` hei ngoki.

Ina whakamahia `User-Agent` o te tono uru e te miihini rapu, ka tukuna te tono ki te wharangi pateko ma `302` .

I runga i nga wharangi pateko, whakamahia `link` hei tohu i nga hononga ki nga momo putanga reo rereke o tenei wharangi, penei i te :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Whirihoranga nginx Rohe

Tangohia te kōnae whirihoranga `.i18n/htm/main.yml` i roto i te kaupapa demo hei tauira

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

Tena koa whakarereke i te uara o te `host:` i runga ake nei ki to ingoa rohe, penei i te `xxx.com` .

Na, `i18n.site -n` , ka hangaia te wharangi pateko ki te raarangi `out/main/htm` .

Ko te tikanga, ka taea hoki e koe etahi atu konae whirihoranga, penei i te korero tuatahi ki te whirihoranga o `main` ki te hanga `.i18n/htm/dist.package.json` me `.i18n/htm/dist.yml` .

Na ka rere `i18n.site -n -c dist` kia puta te wharangi pateko ki te `out/dist/htm` .

`nginx` ka taea te whakarite ma te korero ki te whirihoranga i raro nei.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Kaua e keteroki nga tuhinga a nga kaimahi tūmau mo te roa rawa
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Tautuhia nga wa keteroki mo etahi atu rauemi pateko
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Tautuhia ko tehea konae pateko ka whakamahia e te ngoki hei urunga wharangi kaainga
location = / {
  # Ki te kore e putua $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# whirihoranga tono wharangi kotahi
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Whirihorahia Te Rokiroki Ahanoa Mo Te Tuku Ake I Nga Konae Pateko

Ka taea te hanga i nga konae pateko ki te rohe, engari ko te huarahi noa ake ko te tuku ki te rokiroki ahanoa.

Whakakētia `out` i whirihorahia i runga ake nei ki :

```
out:
  - s3
```

Na, whakatika `~/.config/i18n.site.yml` me te taapiri i te whirihoranga e whai ake nei :

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

I roto i te whirihoranga, whakarereketia `i18n.site` ki te uara o `host:` i roto i `.i18n/htm/main.yml` , ka taea te whirihora i nga toa taonga maha i raro i `s3` , a ko te waahi `region` he mea whiriwhiri (he maha nga toa taonga kaore e hiahia ki te tautuhi i tenei mara).

Na ka rere `i18n.site -n` ki te whakaputa ano i te kaupapa.

Mena kua whakarereke koe i `~/.config/i18n.site.yml` me te hiahia ki te tuku ake ano, whakamahia te whakahau e whai ake nei i roto i te raarangi pakiaka kaupapa hei whakawātea i te keteroki tukuake :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Whirihoranga cloudflare

I manaakihia te ingoa rohe ki [cloudflare](//www.cloudflare.com)

### Ture Hurihanga

Tāpirihia nga ture hurihanga penei i raro nei:

![](//p.3ti.site/1725436822.avif)

Ko te waehere ture e whai ake nei, whakarereketia te waehere "i18n.site" ki to ingoa rohe:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Ture Keteroki

Tāpirihia ngā ture keteroki e whai ake nei:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Ture

Whakatakotoria nga ture whakahuri e whai ake nei, whakarereketia te waehere "i18n.site" ki to ingoa rohe

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

`URL redirect` Tīpakohia te whakahāngaitanga hihiri, tēnā whakarerekētia `/en` i te ara whakahāngaitanga `concat("/en",http.request.uri.path,".htm")` ki te reo taunoa e hiahia ana koe ki te whakauru i nga miihini rapu.

## Baidu Intelligent Cloud Configuration

Mena ka hiahia koe ki te whakarato ratonga ki te tuawhenua o Haina, ka taea e koe te whakamahi [Baidu Smart Cloud](//cloud.baidu.com) .

Ka tukuna nga Raraunga ki te Rokiroki Ahanoa Baidu ka herea ki te Whatunga Tohatoha Ihirangi Baidu.

Na ka hanga i te tuhinga i roto i [te ratonga EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) e whai ake nei

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
  // Ka taea e koe te tautuhi i te pane whakautu hei patuiro i te putanga, penei i out.XXX = 'MSG';
})
```

Patohia `Debug` , ka panui ki te Whakaputa ki te whatunga katoa.

![](//p.3ti.site/1725437754.avif)

## Whakamahinga Matatau: Tohaina Nga Waka I Runga I Te Whakataunga a-Rohe

Mena kei te pirangi koe ki te whakarato ratonga ki te tuawhenua o Haina me te hiahia hoki ki `cloudflare` nga waka kore utu o te ao, ka taea e koe te whakamahi i `DNS` me te whakatau a rohe.

Hei tauira, ka tukuna e [Huawei Cloud DNS](https://www.huaweicloud.com) he tātari-a-rohe kore utu, ka taea e nga waka Hainamana te haere ma te Baidu Smart Cloud, ka taea e nga waka o te ao te haere ma te `cloudflare` .

He maha nga mahanga i roto i te whirihoranga o te `cloudflare` Anei etahi tohu hei tohu :

### Ko Te Ingoa Rohe Kei Roto I Etahi Atu `DNS` , Me Pehea Te Whakamahi `cloudflare`

Tuatahi herea te ingoa rohe ki te `cloudflare` , ka whakamahi i te ingoa rohe ritenga `SSL/TLS` → hei hono i te ingoa rohe matua ki tenei ingoa rohe.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Kaore E Taea Te Uru Atu Ma Te Ingoa Rohe Ritenga

Na te mea kaore e taea te uru atu ki te rokiroki `cloudflare` `R2` e te ingoa rohe kua whakaritea, me whakamahi he rokiroki ahanoa tuatoru hei tuu i nga konae pateko.

Anei ka tangohia e matou [backblaze.com](https://www.backblaze.com) hei tauira hei whakaatu me pehea te here i nga taonga tuatoru hei penapena ki te `cloudflare` .

Waihangahia he peere ki te `backblaze.com` , tuku ake i tetahi konae, pawhiria ki te tirotiro i te konae, ka tikina te ingoa rohe o `Friendly URL` , ko te `f003.backblazeb2.com` kei konei.

![](//p.3ti.site/1725440783.avif)

Hurihia te ingoa rohe mai i `CNAME` ki `f003.backblazeb2.com` i te `cloudflare` ka taea te takawaenga.

![](//p.3ti.site/1725440896.avif)

Whakakētia `cloudflare` o `SSL` → aratau whakamunatanga, tautuhia ki `Full`

![](//p.3ti.site/1725438572.avif)

Taapirihia te ture hurihanga penei i raro nei, tuuhia ki te tuatahi (ko te mea tuatahi te mea iti ake te kaupapa matua):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` tīpakohia te hihiri me te whakarereke i `your_bucketname` i roto i `concat("/file/your_bucketname",http.request.uri.path)` ki to ingoa peere.

I tua atu, i roto i te ture hurihanga `cloudflare` i runga ake nei, ka hurihia `index.html` ki `file/your_bucketname/index.html` , ka noho tonu etahi atu whirihoranga.

![](//p.3ti.site/1725441384.avif)