# Hagaajinta Matoorka Raadinta (Seo)

## Mabda'A

`i18n.site` wuxuu qaataa qaab dhismeed hal bog ah oo aan dib u soo cusboonayn si loo fududeeyo tusmaynta goobidda, bog gooni ah oo taagan iyo `sitemap.xml` ayaa loo soo saari doonaa gurguurta.

Marka `User-Agent` ee codsiga gelitaanka uu isticmaalo gurguurta mashiinka raadinta, codsiga waxaa loo wareejin doonaa bogga taagan iyada oo loo marayo `302` .

Bogagga aan joogtada ahayn, isticmaal `link` si aad u muujiso isku xirka noocyada luqadaha kala duwan ee boggan, sida :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Qaabeynta nginx Maxalliga Ah

Qaado faylka qaabeynta `.i18n/htm/main.yml` ee mashruuca demo tusaale ahaan

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

Fadlan marka hore wax ka beddel qiimaha `host:` ee kor ku yaal magacaaga domain, sida `xxx.com` .

Kadib, `i18n.site -n` , bogga taagan waxa laga soo saari doonaa `out/main/htm` hagaha.

Dabcan, waxaad sidoo kale awood u yeelan kartaa faylalka qaabeynta kale, sida marka hore adigoo tixraacaya qaabeynta `main` si loo abuuro `.i18n/htm/dist.package.json` iyo `.i18n/htm/dist.yml` .

Kadibna orod `i18n.site -n -c dist` si bogga taagan loo soo saaro `out/dist/htm` .

`nginx` waxaa lagu dejin karaa iyadoo la tixraacayo qaabeynta hoose.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ha kaydin qoraallada shaqaale bixiyaha muddo aad u dheer
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# U deji waqtiyo kaydinta dheer ilaha kale ee taagan
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Deji faylka taagan ee gurguuruhu u isticmaalo gelitaanka bogga hoyga
location = / {
  # Haddii $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Qaabaynta codsiga bog keliya
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Habee Kaydinta Shayga Si Aad U Soo Dejiso Faylalka Taagan

Faylasha taagan waxaa laga soo saari karaa gudaha, laakiin habka caadiga ah waa in lagu shubo kaydinta shay.

Wax ka beddel `out` kor lagu habeeyay si aad u :

```
out:
  - s3
```

Kadib, tafatir `~/.config/i18n.site.yml` oo ku dar qaabaynta soo socota :

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

Qaabeynta, fadlan u beddel `i18n.site` qiimaha `host:` ee `.i18n/htm/main.yml` , bakhaarro shay oo badan ayaa lagu habeyn karaa hoosta `s3` , iyo goobta `region` waa ikhtiyaari (dukaamada shay badan uma baahna inay dejiyaan goobtan).

Kadibna orod `i18n.site -n` si aad dib u daabacdo mashruuca.

Haddii aad wax ka beddeshay `~/.config/i18n.site.yml` oo aad rabto in aad dib-u-dejiso, fadlan isticmaal amarka soo socda ee tusaha xididka mashruuca si aad u nadiifiso kaydka gelinta :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Qaabeynta cloudflare

Magaca domain lagu marti galiyay [cloudflare](//www.cloudflare.com)

### Xeerarka Beddelka

Ku dar xeerarka beddelka sida hoos ku cad:

![](//p.3ti.site/1725436822.avif)

Xeerku waa sida soo socota, fadlan wax ka beddel summada "i18n.site" magacaaga bogga:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Xeerarka Kaydinta

Ku dar xeerarka kaydinta sida soo socota:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Xeerarka Dib U Jiheynta

U deji xeerarka dib u jahaynta sida soo socota, fadlan wax ka beddel koodka "i18n.site" magacaaga domain

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

`URL redirect` Dooro jihaynta firfircoon, fadlan wax ka beddel `/en` ee jihaynta `concat("/en",http.request.uri.path,".htm")` una beddel luqadda caadiga ah ee aad rabto in makiinadaha raadinta lagu daro.

## Isku Xirka Daruuraha Sirdoonka Ee Baidu

Haddii aad u baahan tahay inaad bixiso adeegyada dhul weynaha Shiinaha, waxaad isticmaali kartaa [Baidu Smart Cloud](//cloud.baidu.com) .

Xogta waxaa lagu shubaa Kaydinta Shayga Baidu waxayna ku xidhan tahay Shabakadda Qaybinta Macluumaadka Baidu.

Kadibna u samee qoraalka [adeega EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) sida soo socota

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
  // Madaxa jawaabaha waxa loo dejin karaa inay wax ka saaraan wax soo saarka, sida out.XXX = 'MSG';
})
```

Guji `Debug` , dabadeed dhagsii Ku daabac shabakada oo dhan.

![](//p.3ti.site/1725437754.avif)

## Isticmaalka Horumarsan: U Qaybi Taraafikada Iyadoo Lagu Saleynayo Xallinta Gobolka

Haddii aad rabto in aad adeegyo ka bixiso dhul weynaha Shiinaha oo aad sidoo kale rabto `cloudflare` taraafikada caalamiga ah oo bilaash ah, waxaad isticmaali kartaa `DNS` oo leh xallin goboleed.

Tusaale ahaan, [Huawei Cloud DNS](https://www.huaweicloud.com) waxay bixisaa falanqaynta gobolka oo lacag la'aan ah, kaas oo taraafikada Shiinuhu ay mari karaan Baidu Smart Cloud, iyo taraafikada caalamiga ah waxay mari karaan `cloudflare` .

Waxaa jira dabinno badan oo ku jira qaabeynta `cloudflare` Halkan waxaa ah dhowr dhibcood oo la xuso :

### Magaca Domainka Waxa Lagu Marti Galiyay `DNS` Kale, Sida Loo Isticmaalo `cloudflare`

Marka hore ku xidh magac domain gardarro ah `cloudflare` , ka dibna isticmaal `SSL/TLS` → magac domain caadadii si aad ula xidhiidho magaca domain ee ugu weyn magaca domainkan.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Laguma Geli Karo Magac Domain Gaar Ah

Sababta oo ah kaydinta `cloudflare` `R2` laguma geli karo magac domain la habeeyey, kaydinta shayga qolo saddexaad waxa loo baahan yahay in loo isticmaalo meelaynta faylalka taagan.

[backblaze.com](https://www.backblaze.com) waxaan ku soo qaadanaynaa tusaale ahaan si aan u muujino sida loo xiro walxaha dhinac saddexaad si loogu kaydiyo `cloudflare` .

Ku samee baaldi at `backblaze.com` , ku dheji fayl kasta, guji si aad u baadho faylka, oo aad u hesho magaca domain ee `Friendly URL` , kaas oo ah `f003.backblazeb2.com` halkan.

![](//p.3ti.site/1725440783.avif)

Beddel magaca domain ka `CNAME` una beddel `f003.backblazeb2.com` at `cloudflare` oo awood u yeel wakiilka.

![](//p.3ti.site/1725440896.avif)

Wax ka beddel `cloudflare` ee `SSL` → qaabka sirta, u dhig `Full`

![](//p.3ti.site/1725438572.avif)

Ku dar xeerka beddelka sida hoos ku cad, hor dhig (ka hore ayaa leh mudnaanta ugu hoosaysa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dooro firfircoon oo wax ka beddel `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` magaca baaldigaaga.

Intaa waxaa dheer, qaanuunka beddelka `cloudflare` ee kor ku xusan, `index.html` ayaa loo beddelay `file/your_bucketname/index.html` , iyo qaabaynta kale ayaa isku mid ah.

![](//p.3ti.site/1725441384.avif)