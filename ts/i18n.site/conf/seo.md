# Ku Antswisa Injhini Yo Lavisisa (Seo) .

## Nsinya Wa Nawu

`i18n.site` yi amukela xivumbeko xa pheji yin’we leyi nga pfuxetiwiki Ku endlela ku olovisa ku endla swikombo swa ku lavisisa, ku ta endliwa pheji ya static leyi hambaneke na `sitemap.xml` leswaku vakhalayi va ta khapakhapa.

Loko `User-Agent` ya xikombelo xa mfikelelo yi tirhisiwa hi crawler ya njhini yo lavisisa, xikombelo xi ta kongomisiwa nakambe eka tluka ra static hi ku tirhisa `302` .

Eka matluka lama nga cinciki, tirhisa `link` ku kombisa swihlanganisi eka vuhundzuluxeri byo hambana bya tindzimi ta tluka leri, ku fana na :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Ku Lulamisiwa Ka nginx Ya Laha Kaya

Teka fayili ya vukorhokeri bya `.i18n/htm/main.yml` eka phurojeke ya demo tanihi xikombiso

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

Hi kombela u rhanga hi ku cinca ntikelo wa `host:` laha henhla eka vito ra wena ra domain, ku fana na `xxx.com` .

Kutani, `i18n.site -n` , tluka leri nga cinciki ri ta endliwa eka `out/main/htm` directory.

I ntiyiso, u nga ha tlhela u endla leswaku tifayela tin’wana ta vuhlanganisi ti tirha, to tanihi ku rhanga u kombetela eka vuhlanganisi bya `main` ku tumbuluxa `.i18n/htm/dist.package.json` na `.i18n/htm/dist.yml` .

Kutani tsutsuma `i18n.site -n -c dist` leswaku tluka ra static ri ta endliwa ku va `out/dist/htm` .

`nginx` yi nga vekiwa hi ku kongomisa eka xivumbeko lexi nga laha hansi.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# U nga hlayisi swikripti swa mutirhi wa sevha nkarhi wo leha ngopfu
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Seta minkarhi yo leha ya cache eka switirhisiwa swin’wana leswi nga cinciki
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Seta leswaku i fayili yihi ya static leyi crawler yi yi tirhisaka tanihi ku nghena ka pheji ya le kaya
location = / {
  # Loko $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Ku lulamisiwa ka xitirhisiwa xa pheji yin’we
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Hlela Vuhlayiselo Bya Swilo Swo Layicha Tifayela Leti Nga Cinciki

Tifayili leti nga cinciki ti nga endliwa laha tikweni, kambe ndlela leyi tolovelekeke swinene i ku ti layicha eka vuhlayiselo bya swilo.

Cinca `out` leyi hleriweke laha henhla ku va :

```
out:
  - s3
```

Kutani, hlela `~/.config/i18n.site.yml` ivi u engetela xivumbeko lexi landzelaka :

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

Eka ku lulamisa, hi kombela u cinca `i18n.site` ku ya eka ntikelo wa `host:` eka `.i18n/htm/main.yml` , switolo swo tala swa swilo swi nga lulamisiwa ehansi ka `s3` , naswona nsimu ya `region` i ya ku hlawula (switolo swo tala swa swilo a swi lavi ku veka nsimu leyi).

Kutani tsutsuma `i18n.site -n` ku kandziyisa phurojeke nakambe.

Loko u cincile `~/.config/i18n.site.yml` naswona u lava ku layicha nakambe, hi kombela u tirhisa xileriso lexi landzelaka eka xikombo xa timitsu ta phurojeke ku basisa cache yo layicha :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Ku Lulamisiwa Ka cloudflare

Vito ra domain leri khomiweke eka [cloudflare](//www.cloudflare.com)

### Milawu Ya Ku Hundzuka

Engetela milawu ya ku hundzula tanihilaha swi kombisiweke hakona laha hansi:

![](//p.3ti.site/1725436822.avif)

Khodi ya nawu hi ndlela leyi landzelaka, hi kombela u cinca khodi ya "i18n.site" eka vito ra wena ra domain:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Milawu Ya Ku Hlayisa Swilo

Engetela milawu ya cache hi ndlela leyi landzelaka:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Milawu Yo Kongomisa Nakambe

Seta milawu ya ku kongomisa nakambe hi ndlela leyi landzelaka, hi kombela u cinca khodi ya "i18n.site" eka vito ra wena ra domain

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

`URL redirect` Hlawula dynamic redirection, hi kombela u cinca `/en` eka redirection path `concat("/en",http.request.uri.path,".htm")` eka ririmi ra ntolovelo leri u lavaka leswaku tinjhini to lavisisa ti ri katsa.

## Baidu Xivumbeko Xa Xirhendzevutani Xa Vutlhari

Loko u lava ku nyika vukorhokeri etikweni-nkulu ra China, u nga tirhisa [Baidu Smart Cloud](//cloud.baidu.com) .

Data yi layichiwile eka Baidu Object Storage naswona yi bohiwa eka Baidu Content Distribution Network.

Kutani endla script eka [EdgeJS edge service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) hi ndlela leyi landzelaka

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
  // Tinhlokomhaka ta nhlamulo ti nga vekiwa ku lulamisa vuhumelerisi, ku fana na out.XXX = 'MSG';
})
```

Click `Debug` , kutani u click Publish eka network hinkwayo.

![](//p.3ti.site/1725437754.avif)

## Matirhiselo Ya Xiyimo Xa Le Henhla: Ku Hangalasa Thrafikhi Hi Ku Ya Hi Xiboho Xa Xifundzankulu

Loko u lava ku nyika vukorhokeri etikweni-nkulu ra China naswona u tlhela u lava `cloudflare` wa vutleketli bya mahala bya matiko ya misava, u nga tirhisa `DNS` hi xiboho xa xifundzha.

Xikombiso `cloudflare` [Huawei Cloud DNS](https://www.huaweicloud.com)

Kuna swihinga swotala eka configuration ya `cloudflare` Hi leti tinhla ti nga ri tingani leti u faneleke ku ti xiya :

### Vito Ra Domain Ri Khomiwile Eka Swin’wana `DNS` , Ndlela Yo Tirhisa `cloudflare`

Xo sungula boha vito ra domain ra ku tihlawulela eka `cloudflare` , ivi u tirhisa `SSL/TLS` → vito ra domain ra ntolovelo ku hlanganisa vito lerikulu ra domain na vito leri ra domain.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` a Yi Nge Fikeleleki Hi Ku Tirhisa Vito Ra Domain Ra Ntolovelo

Hikuva vuhlayiselo bya nchumu lebyi akiweke `cloudflare` `R2` a byi nge fikeleleki hi vito ra domain leri endleriweke wena, vuhlayiselo bya swilo bya munhu wa vunharhu byi lava ku tirhisiwa ku veka tifayela leti nga cinciki.

`cloudflare` hi teka [backblaze.com](https://www.backblaze.com)

Endla bakiti eka `backblaze.com` , layicha fayili yihi na yihi, tinya ku pfula fayili, kutani u kuma vito ra domain ra `Friendly URL` , leri nga `f003.backblazeb2.com` laha.

![](//p.3ti.site/1725440783.avif)

Cinca vito ra domain ku suka eka `CNAME` ku ya eka `f003.backblazeb2.com` eka `cloudflare` ivi u pfumelela proxy.

![](//p.3ti.site/1725440896.avif)

Cinca `cloudflare` wa `SSL` → movha wa ku fihla, wu vekiwile eka `Full`

![](//p.3ti.site/1725438572.avif)

Engetela nawu wa ku hundzula tanihilaha swi kombisiweke hakona laha hansi, wu veke ku sungula (wo sungula wu na nkoka wa le hansi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` hlawula dynamic u cinca `your_bucketname` eka `concat("/file/your_bucketname",http.request.uri.path)` eka vito ra bakiti ra wena.

Ku engetela kwalaho, eka nawu wa ku hundzula `cloudflare` lowu nga laha henhla, `index.html` yi cinciwile yi va `file/your_bucketname/index.html` , naswona swivumbeko swin’wana swi tshama swi ri tano.

![](//p.3ti.site/1725441384.avif)