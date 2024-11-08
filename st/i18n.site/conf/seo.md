# Ho Batla Engine Optimization (Seo)

## Molao-Motheo

`i18n.site` e amohela sebopeho sa leqephe le le leng le sa khathollang E le ho nolofatsa mokhoa oa ho batla, leqephe le ikemetseng le `sitemap.xml` le tla hlahisoa hore ba khase.

Ha `User-Agent` ea kopo ea phihlello e sebelisoa ke sekhanni sa enjine ea ho batla, kopo e tla fetisetsoa leqepheng le sa fetoheng ka `302` .

Maqepheng a sa fetoheng, sebelisa `link` ho bontša likhokahano tsa lipuo tse fapaneng tsa leqephe lena, joalo ka :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Tlhophiso Ea Sebaka Sa nginx

Nka faele ea `.i18n/htm/main.yml` ea tlhophiso ho projeke ea demo joalo ka mohlala

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

Ka kopo, qala ka ho fetola boleng ba `host:` ka holimo ho lebitso la hau la domain, joalo ka `xxx.com` .

Joale, `i18n.site -n` , leqephe le tsitsitseng le tla hlahisoa bukeng ea `out/main/htm` .

Ha e le hantle, u ka boela ua nolofalletsa lifaele tse ling tsa tlhophiso, tse kang pele u bua ka tlhophiso ea `main` ho theha `.i18n/htm/dist.package.json` le `.i18n/htm/dist.yml` .

Ebe u matha `i18n.site -n -c dist` e le hore leqephe le tsitsitseng le hlahisoe ho `out/dist/htm` .

`nginx` e ka hlophisoa ka ho bua ka tlhophiso e ka tlase.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Se ke oa boloka mangolo a basebetsi ba seva nako e telele haholo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Beha linako tse telele tsa cache bakeng sa lisebelisoa tse ling tse tsitsitseng
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Hlophisa hore na ke faele efe e tsitsitseng eo sehahabi e e sebelisang e le leqephe la lapeng
location = / {
  # Haeba $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Tokiso ea ts'ebeliso ea leqephe le le leng
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Lokisa Sebaka Sa Polokelo Bakeng Sa Ho Kenya Lifaele Tse Tsitsitseng

Lifaele tse tsitsitseng li ka hlahisoa sebakeng sa heno, empa mokhoa o tloaelehileng ke ho li kenya sebakeng sa polokelo ea lintho.

Fetola `out` e hlophisitsoeng ka holimo ho :

```
out:
  - s3
```

Ebe, hlophisa `~/.config/i18n.site.yml` me u kenye tlhophiso e latelang :

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

Ka tlhophiso, ka kopo fetola `i18n.site` ho boleng ba `host:` ho `.i18n/htm/main.yml` , mabenkele a lintho tse ngata a ka lokisoa tlas'a `s3` , 'me tšimo ea `region` ke ea boikhethelo (mabenkele a mangata a lintho ha a hloke ho beha tšimo ena).

Ebe u matha `i18n.site -n` ho phatlalatsa morero hape.

Haeba u fetotse `~/.config/i18n.site.yml` 'me u batla ho e kenya hape, ka kopo sebelisa taelo e latelang bukeng ea metso ea morero ho hlakola cache ea ho kenya :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Tlhophiso

Domain name e amoheloa ke [cloudflare](//www.cloudflare.com)

### Melao Ea Ho Sokoloha

Kenya melao ea phetoho joalo ka ha ho bonts'itsoe ka tlase:

![](//p.3ti.site/1725436822.avif)

Khoutu ea molao e tjena, ka kopo fetola "i18n.site" lebitsong la hau la domain:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Melao Ea Caching

Kenya melao ea cache ka tsela e latelang:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Ho Tsamaisa Melao

Beha melao ea ho tsamaisa sebaka ka tsela e latelang, ka kopo fetola khoutu "i18n.site" ho lebitso la hau la domain.

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

`URL redirect` Khetha dynamic redirection, ka kopo fetola `/en` tseleng ea `concat("/en",http.request.uri.path,".htm")` ho ea puong ea kamehla eo u batlang ho e kenyelletsa.

## Baidu Intelligent Cloud Configuration

Haeba o hloka ho fana ka litšebeletso naheng ea China, o ka sebelisa [Baidu Smart Cloud](//cloud.baidu.com) .

Lintlha li kentsoe ho Baidu Object Storage 'me li tlamelloa ho Baidu Content Distribution Network.

Ebe u theha script ho [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Lihlooho tsa likarabo li ka hlophisoa hore li fane ka tlhahiso ea bothata, joalo ka out.XXX = 'MSG';
})
```

Tobetsa `Debug` , ebe o tobetsa Phatlalatsa marang-rang kaofela.

![](//p.3ti.site/1725437754.avif)

## Tšebeliso E Tsoetseng Pele: Abela Sephethephethe Ho Latela Qeto Ea Sebaka

Haeba u batla ho fana ka lits'ebeletso naheng ea China mme hape u batla `cloudflare` sephethephethe sa machabeng sa mahala, u ka sebelisa `DNS` e nang le qeto ea sebaka.

Ka mohlala, [Huawei DNS](https://www.huaweicloud.com) e fana ka tlhahlobo ea mahala ea libaka, eo sephethephethe sa Chaena se ka fetang Baidu Smart Cloud, 'me sephethephethe sa machaba se ka feta `cloudflare` .

Ho na le maraba a mangata ho tlhophiso ea `cloudflare` Mona ke lintlha tse 'maloa tseo u lokelang ho li ela hloko :

### The Domain Name Is Hosted in Other `DNS` , Mokhoa Oa Ho Sebelisa `cloudflare`

Pele o tlama lebitso la domain name ho `cloudflare` , ebe o sebelisa `SSL/TLS` → lebitso la tloaelo la domain name ho amahanya lebitso la sehlooho le lebitso lena la domain.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` E Ke Ke Ea Fumaneha Ka Lebitso La Domain Name

Hobane polokelo ea ntho e hahiloeng `cloudflare` har'a `R2` e ke ke ea fumaneha ka domain name e ikhethileng, polokelo ea ntho ea motho oa boraro e hloka ho sebelisoa ho beha lifaele tse tsitsitseng.

[backblaze.com](https://www.backblaze.com) re nka e le mohlala ho bontša mokhoa oa ho tlama lintho tsa motho oa boraro tse lokelang ho bolokoa ho `cloudflare` .

Etsa nkho ho `backblaze.com` , kenya faele leha e le efe, tobetsa ho sheba faele, 'me u fumane lebitso la sebaka sa `Friendly URL` , e leng `f003.backblazeb2.com` mona.

![](//p.3ti.site/1725440783.avif)

Fetola lebitso la domain ho tloha ho `CNAME` ho isa ho `f003.backblazeb2.com` ho `cloudflare` 'me u nolofalletse proxy.

![](//p.3ti.site/1725440896.avif)

Fetola `cloudflare` ho `SSL` → mokhoa oa encryption, beha ho `Full`

![](//p.3ti.site/1725438572.avif)

Kenya molao oa ho sokoloha joalo ka ha o bonts'itsoe ka tlase, o behe pele (oa pele o na le boemo bo tlase):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` khetha matla 'me u fetole `your_bucketname` ho `concat("/file/your_bucketname",http.request.uri.path)` lebitsong la bakete ea hau.

Ho phaella moo, molaong oa phetoho `cloudflare` ka holimo, `index.html` e fetoloa ho `file/your_bucketname/index.html` , 'me litlhophiso tse ling li lula li le joalo.

![](//p.3ti.site/1725441384.avif)