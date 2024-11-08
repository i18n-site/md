# Huli Huli (Seo)

## Kumukānāwai

Hoʻohana ʻo `i18n.site` i kahi hoʻolālā ʻaoʻao hoʻokahi ʻaʻole hōʻano hou I mea e maʻalahi ai ka huli ʻana i ka helu helu ʻana, e hana ʻia kahi ʻaoʻao kūʻokoʻa a me `sitemap.xml` no nā mea kolo.

Ke hoʻohana ʻia `User-Agent` o ka noi komo e ka mea kolo ʻenekini huli, e hoʻihoʻi ʻia ka noi i ka ʻaoʻao paʻa ma o `302` .

Ma nā ʻaoʻao paʻa, e hoʻohana i `link` e kuhikuhi i nā loulou i nā mana ʻōlelo like ʻole o kēia ʻaoʻao, e like me :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Hoʻonohonoho nginx Kūloko

E lawe i ka faila hoʻonohonoho `.i18n/htm/main.yml` i ka papahana demo ma ke ʻano he laʻana

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

E ʻoluʻolu e hoʻololi mua i ka waiwai o `host:` ma luna i kou inoa kikowaena, e like me `xxx.com` .

A laila, `i18n.site -n` , e hana ʻia ka ʻaoʻao static ma ka papa kuhikuhi `out/main/htm` .

ʻOiaʻiʻo, hiki iā ʻoe ke hana i nā faila hoʻonohonoho ʻē aʻe, e like me ka kuhikuhi mua ʻana i ka hoʻonohonoho ʻana o `main` e hana i `.i18n/htm/dist.package.json` a me `.i18n/htm/dist.yml` .

A laila e holo i `i18n.site -n -c dist` i mea e hana ʻia ai ka ʻaoʻao static i `out/dist/htm` .

`nginx` hiki ke hoʻonohonoho ʻia ma ka nānā ʻana i ka hoʻonohonoho ma lalo nei.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Mai hoʻopaʻa i nā palapala a nā limahana no ka lōʻihi loa
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# E hoʻonoho i nā manawa hūnā lōʻihi no nā kumu waiwai ʻē aʻe
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# E hoʻonoho i ka faila paʻa i hoʻohana ʻia e ka mea kolo e like me ke komo ʻana o ka ʻaoʻao home
location = / {
  # Inā ʻaʻole kaʻawale $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Hoʻonohonoho palapala noi ʻaoʻao hoʻokahi
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## E Hoʻonohonoho I Kahi Waiho Mea No Ka Hoʻouka ʻana I Nā Faila Static

Hiki ke hana ʻia nā faila static ma ka ʻāina, akā ʻo kahi ala maʻamau ka hoʻouka ʻana iā lākou i kahi waiho mea.

Hoʻololi i `out` i hoʻonohonoho ʻia ma luna nei i :

```
out:
  - s3
```

A laila, hoʻoponopono i `~/.config/i18n.site.yml` a hoʻohui i kēia hoʻonohonoho hou :

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

I ka hoʻonohonoho ʻana, e ʻoluʻolu e hoʻololi i `i18n.site` i ka waiwai o `host:` i `.i18n/htm/main.yml` , hiki ke hoʻonohonoho ʻia nā hale kūʻai mea he nui ma lalo o `s3` , a ʻo ke kahua `region` ke koho (ʻaʻole pono nā hale kūʻai mea he nui e hoʻonohonoho i kēia kahua).

A laila holo `i18n.site -n` e hoʻopuka hou i ka papahana.

Inā ua hoʻololi ʻoe i `~/.config/i18n.site.yml` a makemake ʻoe e hoʻouka hou, e ʻoluʻolu e hoʻohana i kēia kauoha ma ka papa kuhikuhi kumu papahana e hoʻomaʻemaʻe i ka cache hoʻouka :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Hoʻonohonoho cloudflare

Hoʻokipa ʻia ka inoa domain iā [cloudflare](//www.cloudflare.com)

### Nā Lula Hoʻololi

Hoʻohui i nā lula hoʻololi e like me ka hōʻike ʻana ma lalo nei:

![](//p.3ti.site/1725436822.avif)

Penei ke code rule, e ʻoluʻolu e hoʻololi i ke code "i18n.site" i kou inoa kikowaena:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Nā Lula Hoʻokoe

Hoʻohui i nā lula cache penei:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Hoʻihoʻi Hou I Nā Lula

E hoʻonoho i nā lula hoʻihoʻi e like me kēia, e ʻoluʻolu e hoʻololi i ke code "i18n.site" i kou inoa inoa

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

`URL redirect` E koho i ka kuhikuhi hou ʻana, e ʻoluʻolu e hoʻololi i `/en` ma ke ala kuhikuhi `concat("/en",http.request.uri.path,".htm")` i ka ʻōlelo paʻamau āu e makemake ai e hoʻokomo i nā ʻenekini.

## ʻO Ka Hoʻonohonoho Cloud Intelligent Baidu

Inā pono ʻoe e hoʻolako i nā lawelawe i ka ʻāina nui ʻo Kina, hiki iā ʻoe ke hoʻohana iā [Baidu Smart Cloud](//cloud.baidu.com) .

Hoʻouka ʻia ka ʻikepili i ka Baidu Object Storage a hoʻopaʻa ʻia iā Baidu Content Distribution Network.

A laila e hana i ka palapala ma [ka lawelawe EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) penei

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
  // Hiki ke hoʻonohonoho ʻia nā poʻomanaʻo pane e hoʻopau i ka hoʻopuka, e like me out.XXX = 'MSG';
})
```

Kaomi i `Debug` , a laila kaomi i ka Publish i ka pūnaewele holoʻokoʻa.

![](//p.3ti.site/1725437754.avif)

## Hoʻohana Holomua: E Puʻunaue I Nā Kaʻa Ma Muli O Ka Hoʻoholo ʻāina

Inā makemake ʻoe e hoʻolako i nā lawelawe ma ka ʻāina nui ʻo Kina a makemake pū ʻoe i `cloudflare` manuahi kaʻa kaʻa honua, hiki iā ʻoe ke hoʻohana i `DNS` me ka hoʻonā kūloko.

No ka laʻana `cloudflare` hāʻawi [ʻo Huawei Cloud DNS](https://www.huaweicloud.com)

He nui na lua ma ka hoonohonoho ana o `cloudflare` Eia kekahi mau mea e ike ai :

### Hoʻokipa ʻia Ka Inoa Kikowaena Ma `DNS` ʻē Aʻe, Pehea E Hoʻohana Ai I `cloudflare`

E hoʻopaʻa mua i kahi inoa kikowaena kūʻokoʻa i ka `cloudflare` , a laila e hoʻohana i ka inoa kikowaena maʻamau `SSL/TLS` → e hoʻopili i ka inoa kikowaena nui i kēia inoa kikowaena.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Hiki Ke Kiʻi ʻia Ma O Ka Inoa Kikowaena Maʻamau

No ka mea ʻaʻole hiki ke kiʻi ʻia ka waihona waihona `R2` i `cloudflare` ʻia e kahi inoa kikowaena maʻamau, pono e hoʻohana ʻia kahi waihona mea ʻaoʻao ʻekolu e kau i nā faila static.

Eia mākou i [backblaze.com](https://www.backblaze.com) e hōʻike i ka hoʻopaʻa ʻana i nā mea ʻaoʻao ʻekolu e mālama ʻia ma `cloudflare` .

E hana i kahi bakeke ma `backblaze.com` , e hoʻouka i kekahi faila, e kaomi e nānā i ka faila, a loaʻa ka inoa kikowaena o `Friendly URL` , ʻo ia ka `f003.backblazeb2.com` ma aneʻi.

![](//p.3ti.site/1725440783.avif)

E hoʻololi i ka inoa kikowaena mai `CNAME` a i `f003.backblazeb2.com` ma `cloudflare` a hiki i ka mea koho.

![](//p.3ti.site/1725440896.avif)

Hoʻololi i `cloudflare` o `SSL` → ke ʻano hoʻopunipuni, hoʻonoho i ka `Full`

![](//p.3ti.site/1725438572.avif)

Hoʻohui i ka lula hoʻololi e like me ka mea i hōʻike ʻia ma lalo nei, e kau mua (ʻo ka mea mua ka mea haʻahaʻa haʻahaʻa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` koho i ka dynamic a hoʻololi i `your_bucketname` i `concat("/file/your_bucketname",http.request.uri.path)` i kou inoa bākeke.

Eia kekahi, ma ka lula hoʻololi `cloudflare` ma luna, ua hoʻololi ʻia `index.html` i `file/your_bucketname/index.html` , a e mau ana nā hoʻonohonoho ʻē aʻe.

![](//p.3ti.site/1725441384.avif)