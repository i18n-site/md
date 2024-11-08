# Optimîzasyona Motora Lêgerînê (Seo)

## Rêzman

`i18n.site` mîmariya yek rûpelî ya ne-teze dipejirîne Ji bo hêsankirina îndekskirina lêgerînê, rûpelek statîk û `sitemap.xml` dê ji bo xêzkeran were çêkirin.

Dema ku `User-Agent` -ya daxwaznameya gihîştinê ji hêla gerîdeya motora lêgerînê ve tê bikar anîn, dê daxwaz bi riya `302` ji rûpela statîk re were veguheztin.

Li ser rûpelên statîk, `link` bikar bînin da ku lînkên guhertoyên zimanên cihê yên vê rûpelê nîşan bidin, wek :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Veavakirina nginx Ya Herêmî

Di projeya demo de pelê mîhengê `.i18n/htm/main.yml` wekî mînakek bigirin

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

Ji kerema xwe pêşî nirxa `host:` ya jorîn li ser navê domaina xwe biguherînin, wek `xxx.com` .

Dûv re, `i18n.site -n` , rûpela statîk dê di pelrêça `out/main/htm` de were çêkirin.

Bê guman, hûn dikarin pelên mîhengê yên din jî çalak bikin, wek mînak pêşî li veavakirina `main` -yê binihêrin da ku `.i18n/htm/dist.package.json` û `.i18n/htm/dist.yml` biafirînin.

Dûv re `i18n.site -n -c dist` bimeşînin da ku rûpela statîk ji `out/dist/htm` re were çêkirin.

`nginx` dikare ji hêla veavakirina jêrîn ve were danîn.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Nivîsarên xebatkarê serverê pir dirêj cache nekin
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ji bo çavkaniyên din ên statîk demên cache-ê dirêjtir saz bikin
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Kîjan pelê statîk ku crawler wekî têketina rûpelê malê bikar tîne destnîşan bikin
location = / {
  # Heke $botLang ne vala ye, ev tê wê wateyê ku li gorî rêça zimanî hatî danîn û verastkirin
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Veavakirina serîlêdana yek rûpel
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Ji Bo Barkirina Pelên Statîk Hilanîna Tiştan Mîheng Bikin

Pelên statîkî dikarin herêmî bêne çêkirin, lê nêzîkatiyek hevpar ev e ku wan li hilanîna tiştan barkirin.

`out` ku li jor hatî mîheng kirin biguhezîne :

```
out:
  - s3
```

Dûv re, `~/.config/i18n.site.yml` biguherînin û veavakirina jêrîn lê zêde bikin :

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

Di veavakirinê de, ji kerema xwe `i18n.site` biguherînin nirxa `host:` di `.i18n/htm/main.yml` de, gelek firotgehên tiştan dikarin di binê `s3` de werin mîheng kirin, û qada `region` vebijarkî ye (gelek dikanên tiştan ne hewce ne ku vê qadê saz bikin).

Dûv re `i18n.site -n` bimeşînin da ku projeyê ji nû ve çap bikin.

Ger we `~/.config/i18n.site.yml` guhertiye û hûn dixwazin ji nû ve bar bikin, ji kerema xwe fermana jêrîn di pelrêça root ya projeyê de bikar bînin da ku kaşê barkirinê paqij bikin :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Veavakirina cloudflare

Navê domainê ji bo [cloudflare](//www.cloudflare.com)

### Qaîdeyên Veguherînê

Wekî ku li jêr tê xuyang kirin qaîdeyên veguherînê zêde bikin:

![](//p.3ti.site/1725436822.avif)

Koda qaîdeyê wiha ye, ji kerema xwe koda "i18n.site" li ser navê domaina xwe biguhezînin:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Qaîdeyên Caching

Qaîdeyên cache-ê wekî jêrîn zêde bikin:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Redirect Qaîdeyên

Rêbazên beralîkirinê wekî jêrîn bicîh bikin, ji kerema xwe koda "i18n.site" li ser navê domaina xwe biguhezînin

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

`URL redirect` Beralîkirina dînamîk hilbijêrin, ji kerema xwe `/en` di rêça beralîkirinê `concat("/en",http.request.uri.path,".htm")` de biguhezînin zimanê xwerû ku hûn dixwazin motorên lêgerînê tê de bikin.

## Veavakirina Cloud Intelligent Baidu

Heke hûn hewce ne ku karûbaran ji axa Chinaînê re peyda bikin, hûn dikarin [Baidu Smart Cloud](//cloud.baidu.com) bikar bînin.

Daneyên li Baidu Object Storage têne barkirin û bi Tora Belavkirina Naveroka Baidu ve têne girêdan.

Dûv re skrîptê di [karûbarê EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) de wekî jêrîn biafirînin

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
  // Sernavên bersivê dikarin ji bo debugkirina derketinê werin danîn, wek out.XXX = 'MSG';
})
```

`Debug` bikirtînin, dûv re bikirtînin Weşandina tevaya torê.

![](//p.3ti.site/1725437754.avif)

## Bikaranîna Pêşkeftî: Li Ser Bingeha Çareseriya Herêmî Seyrûseferê Belav Bikin

Ger hûn dixwazin li axa Chinaînê karûbaran peyda bikin û her weha `cloudflare` seyrûsefera navneteweyî ya belaş jî dixwazin, hûn dikarin `DNS` bi çareseriya herêmî bikar bînin.

Mînakî, [Huawei DNS](https://www.huaweicloud.com) analîzek herêmî ya belaş peyda dike, ku pê re seyrûsefera çînî dikare bi Baidu Smart Cloud re derbas bibe, û seyrûsefera navneteweyî dikare bi `cloudflare` re derbas bibe.

Di veavakirina `cloudflare` de gelek xeletî hene. Li vir çend xal hene ku divê bala xwe bidinê :

### Navê Domainê Di `DNS` Ên Din De Tête Mêvan Kirin, Meriv Çawa `cloudflare` Bikar Tîne

Pêşî navek domainek keyfî bi `cloudflare` ve girêdin, û dûv re `SSL/TLS` → navê domaina xwerû bikar bînin da ku navê domainê ya sereke bi vê navê domainê re têkildar bikin.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Bi Navek Domainek Xwerû Nayê Gihîştin

Ji ber ku hilanîna `cloudflare` ya çêkirî `R2` nikare bi navek domainek xwerû ve were gihandin, pêdivî ye ku hilanînek tişta sêyemîn were bikar anîn da ku pelên statîk bi cîh bike.

Li [backblaze.com](https://www.backblaze.com) em mînakek digirin da ku destnîşan bikin ka meriv çawa tiştên sêyemîn ên ku li `cloudflare` têne hilanîn girêdide.

Di `backblaze.com` de kelekek çêbikin, her pelê bar bikin, bikirtînin ku pelê bigerin, û navê domainê `Friendly URL` , ku li vir `f003.backblazeb2.com` ye, bistînin.

![](//p.3ti.site/1725440783.avif)

Navê domainê ji `CNAME` heta `f003.backblazeb2.com` li `cloudflare` biguherînin û proxy çalak bikin.

![](//p.3ti.site/1725440896.avif)

`cloudflare` ji `SSL` biguherînin → moda şîfrekirinê, li ser `Full` bicîh bikin

![](//p.3ti.site/1725438572.avif)

Wekî ku li jêr tê xuyang kirin qaîdeya veguheztinê zêde bikin, pêşî lê bidin (ya yekem xwedan pêşîniya herî kêm e):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dînamîk hilbijêrin û `your_bucketname` di `concat("/file/your_bucketname",http.request.uri.path)` de li ser navê kelê xwe biguhezînin.

Wekî din, di qaîdeya veguheztina `cloudflare` ya li jor de, `index.html` bi `file/your_bucketname/index.html` tê guheztin, û veavakirinên din jî heman dimînin.

![](//p.3ti.site/1725441384.avif)