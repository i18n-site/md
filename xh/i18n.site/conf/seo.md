# UPhendlo lweNjini yoPhendlo (Seo)

## Umgaqo

`i18n.site` ithatha ulwakhiwo olungahlaziyiyo lwephepha elinye Ukuze kube lula ukwenza isalathiso sokukhangela, iphepha elahlukileyo elimileyo kunye `sitemap.xml` liya kuveliswa ukwenzela abakhasi.

Xa `User-Agent` yesicelo sofikelelo isetyenziswa ngumkhangeli we-injini yokukhangela, isicelo siya kuhanjiswa kwiphepha elingatshintshiyo nge `302` .

Kumaphepha amileyo, sebenzisa `link` ukubonisa amakhonkco kwiinguqulelo zolwimi ezahlukeneyo zeli phepha, ezifana :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Uqwalaselo Lwe nginx Yasekuhlaleni

Thatha i `.i18n/htm/main.yml` ifayile yoqwalaselo kwiprojekthi yedemo njengomzekelo

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

Nceda ulungise kuqala ixabiso le `host:` ngasentla kwigama lakho lesizinda, njenge `xxx.com` .

Emva koko, `i18n.site -n` , iphepha elingatshintshiyo liya kwenziwa kuluhlu `out/main/htm` .

Ewe kunjalo, unokwenza nezinye iifayile zoqwalaselo, njengokubhekisa kuqala kuqwalaselo lwe `main` ukwenza `.i18n/htm/dist.package.json` kunye ne `.i18n/htm/dist.yml` .

Emva koko sebenzisa `i18n.site -n -c dist` ukwenzela ukuba iphepha elimileyo liyakuveliswa kwi `out/dist/htm` .

`nginx` inokusetwa ngokubhekisa kuqwalaselo olungezantsi.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Musa ukufihla izikripthi zabasebenzi beseva ixesha elide
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Cwangcisa amaxesha amade e-cache kwezinye izixhobo ezimileyo
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Cwangcisa ukuba yeyiphi ifayile engatshintshiyo esetyenziswa ngumkhangeli njengongeno lwekhasi lasekhaya
location = / {
  # Ukuba $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Uqwalaselo lwesicelo sephepha elinye
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Qwalasela Ugcino Lwento Yokufaka Iifayile Ezingatshintshiyo

Iifayile ezimileyo zinokuveliswa kwindawo, kodwa indlela eqhelekileyo kukuzilayisha kwindawo yokugcina izinto.

Guqula `out` iqwalaselwe ngasentla ibe :

```
out:
  - s3
```

Emva koko, hlela `~/.config/i18n.site.yml` kwaye wongeze ulungelelwaniso olulandelayo :

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

Kuqwalaselo, nceda utshintshe `i18n.site` kwixabiso le `host:` kwi `.i18n/htm/main.yml` , izinto ezininzi zokugcina izinto zinokuqwalaselwa phantsi kwe `s3` , kwaye intsimi ye `region` iyakhethwa (izinto ezininzi zokugcina izinto azidingi ukuseta le ntsimi).

Emva koko sebenzisa `i18n.site -n` ukuphinda upapashe iprojekthi.

Ukuba ulungise `~/.config/i18n.site.yml` kwaye ufuna ukuphinda ulayishe, nceda sebenzisa lo myalelo ulandelayo kulawulo lweengcambu zeprojekthi ukucima i cache yokulayisha :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Uqwalaselo Lwecloudflare

Igama lesizinda libanjwe [cloudflare](//www.cloudflare.com)

### Imigaqo Yoguqulo

Yongeza imigaqo yoguqulo njengoko kubonisiwe ngezantsi:

![](//p.3ti.site/1725436822.avif)

Ikhowudi yomgaqo ilandelayo, nceda uguqule ikhowudi "i18n.site" kwigama lakho lesizinda:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Imithetho Yokugcina Indawo

Yongeza imithetho ye-cache ngolu hlobo lulandelayo:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Imithetho Yokuqondisa Ngokutsha

Cwangcisa imigaqo yokuhanjiswa kwakhona ngolu hlobo lulandelayo, nceda uguqule ikhowudi "i18n.site" kwigama lakho lesizinda.

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

`URL redirect` Khetha ukwalathiswa kwakhona okuguquguqukayo, nceda uguqule `/en` kumendo wolunye ulwalathiso `concat("/en",http.request.uri.path,".htm")` ukuya kulwimi olungagqibekanga ofuna ukuba iinjini zokukhangela zibandakanywe.

## Uqwalaselo lweLifu Olukrelekrele lweBaidu

Ukuba ufuna ukubonelela ngeenkonzo kwilizwe laseTshayina, ungasebenzisa [i-Baidu Smart Cloud](//cloud.baidu.com) .

Idatha ilayishwe kwi-Baidu Object Storage kwaye ibotshelelwe kwi-Baidu Content Distribution Network.

Emva koko yenza iskripthi kwinkonzo [EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ngolu hlobo lulandelayo

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
  // Iiheader zempendulo zinokusetwa kwimveliso yolungiso lweempazamo, ezinje ngaphandle.XXX = 'MSG';
})
```

Cofa `Debug` , emva koko ucofe Papasha kuyo yonke inethiwekhi.

![](//p.3ti.site/1725437754.avif)

## Ukusetyenziswa Okuphezulu: Ukusabalalisa I-Traffic Ngokusekelwe Kwisisombululo Sommandla

Ukuba ufuna ukubonelela ngeenkonzo kwilizwe laseTshayina kwaye ufuna `cloudflare` yetrafikhi yamazwe ngamazwe yasimahla, ungasebenzisa `DNS` ngesisombululo sommandla.

Ngokomzekelo, [i-Huawei DNS](https://www.huaweicloud.com) ibonelela ngokuhlalutya kwengingqi yamahhala, apho i-traffic yaseTshayina inokuthi ihambe nge-Baidu Smart Cloud, kunye ne-traffic yamazwe ngamazwe inokuhamba nge `cloudflare` .

Kukho imigibe emininzi kuqwalaselo lwe- `cloudflare` Nazi iingongoma ezimbalwa ekufuneka uziqaphele :

### Igama Lesizinda Libanjwe Kwezinye `DNS` , Indlela Yokusebenzisa `cloudflare`

Kuqala bopha igama ledomeyini engenasizathu ku- `cloudflare` , uze usebenzise `SSL/TLS` → igama lesizinda esilungiselelweyo ukudibanisa igama lesizinda elingundoqo neli gama lesizinda.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Ayinakufikelelwa Ngegama Lesizinda Esilungiselelweyo

Ngenxa yokuba into eyakhelweyo `cloudflare` kwindawo yokugcina into `R2` ayinakufumaneka ngegama lesizinda esilungiselelweyo, ukugcinwa kwezinto zomntu wesithathu kufuneka kusetyenziswe ukubeka iifayile ezimileyo.

[backblaze.com](https://www.backblaze.com) sithatha njengomzekelo ukubonisa indlela yokubopha izinto zeqela lesithathu eziza kugcinwa ku `cloudflare` .

Yenza ibhakethi kwi `backblaze.com` , layisha nayiphi na ifayile, nqakraza ukukhangela ifayile, kwaye ufumane igama lesizinda se- `Friendly URL` , eyi `f003.backblazeb2.com` apha.

![](//p.3ti.site/1725440783.avif)

Guqula igama lesizinda ukusuka kwi `CNAME` ukuya kwi `f003.backblazeb2.com` kwi `cloudflare` kwaye uvule ummeleli.

![](//p.3ti.site/1725440896.avif)

Guqula `cloudflare` yesi `SSL` → indlela yoguqulelo oluntsonkothileyo, isetelwe ku `Full`

![](//p.3ti.site/1725438572.avif)

Yongeza umgaqo wokuguqula njengoko kubonisiwe ngezantsi, yibeke kuqala (eyokuqala inokubaluleka okuphantsi):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` khetha eguquguqukayo kwaye ulungise `your_bucketname` ku `concat("/file/your_bucketname",http.request.uri.path)` kwigama lakho lebhakethi.

Ukongezelela, kumgaqo we `cloudflare` wokuguqulwa ngasentla, `index.html` iguqulwa ibe yi `file/your_bucketname/index.html` , kunye nezinye izilungiso zihlala zifana.

![](//p.3ti.site/1725441384.avif)