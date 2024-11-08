# Despliegue Y en Línea

`i18n.site` [huk p'anqalla ruwana](https://developer.mozilla.org/docs/Glossary/SPA) arquitectura kaqmanta hapin, chaymanta web kiti yaykuy p'anqa chaymanta web kitip kaqnin sapallamanta mast'arisqa.

Hawa tikrayta purichisqamanta, `htm` , `v` directoriokuna `md/out/dev` directorio urapi paqarichisqa kanqa.

Kaypiqa, `dev` niyta munan, `.i18n/htm/dev.yml` wakichiy willañiqipi sayasqa ruwasqa kasqanmanta.

`dev` qillqana mayt'u :

`htm` sutiyuq qillqana mayt'uqa web kitiman yaykuy p'anqam.

`v` sutiyuq qillqana mayt'uqa web kitip willayninkunayuqmi, laya yupaykunawan.

Llaqta ñawpaq qhawayqa manam laya yupaymanta llakikunchu, llapa willañiqikunatam `out/dev/v/0.1.0` willañiqiman qillqanqa.

Oficial kacharinapaq, tikrasqa willañiqikuna musuq laya yupay qillqana mayt'uman copiasqa kanqa.

## `-c` Nisqawan Wakichiy Willañiqita Niy

Hukhina wakichiy willañiqikunaqa `out` willañiqipi tupaq willañiqikunatam ruranqa.

Ejemplopaq, `.i18n/htm/main.yml` `out/main` directorio nisqatam paqarichinqa.

`dev.yml` chaymanta `main.yml` ñawpaqmanta ruwasqa ruwanakuna kanku.

`dev` nisqaqa `development` nisqap pisichasqanmi, wiñachiy pachata rikuchiq, llaqta ñawpaq qhawaypaq llamk'achisqa, chaymantataqmi ñawpaqmanta churasqa wakichiy willañiqipas.
`ol` nisqaqa `online` nisqap pisichasqa kayninmi, internetpi pachata rikuchispa, chaytaq oficial kacharinapaq llamk'achisqa kachkan, kamachiy chiru parámetros `-n` kaqmanta `npm` kaqkama kacharinapaq llamk'achkaspa.

Huk wakichiy willañiqikunatapas rurayta atinkim Kamachiy chirupi `--htm_conf` llamk'achiyta llamk'achinapaq wakichiy willañiqi sutita willanaykipaq:

kay hina:
```
i18n.site --htm_conf dist --save
```

Kaypi `--save` musuqyachiy lluqsichiy laya yupayta rikuchin.

## <a rel=id href="#npm" id="npm"></a> npmjs.com nisqaman contenidota lluqsichiy

[npmjs.com](//npmjs.com)[](/i18n.site/feature#ha)

### npm Yaykuy & Qillqay

`nodejs` churay, `npm login` nisqawan yaykuy.

`md/.i18n/htm/main.yml` llamk'apuy chaymanta [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) kaqpa chaninninta `YOUR_NPM_PACKAGE` tikray kikiykipa `npm` paquete sutiyki hina Mayqin mana runayuq paquete sutipas [npmjs.com](//npmjs.com)

Chaymantataq `md/.i18n/htm/main.package.json` tikray

`md` directoriopi `i18n.site --npm` utaq `i18n.site -n` purichiy tikrayta chaymanta lluqsichinapaq.

Sichus huk sapa kuti tinkinakuy pachata llamk'achkanki qillqanapaq, mana `nodejs` churanaykichu tiyan.Yaykusqa chaymanta lluqsichiy atiykunata `~/.npmrc` muyuriqman copiaylla.

Sichus `v:` `main.yml` kaqpi paquete sutita tikranki, ama **hina kaspa ñawpaqta `.i18n/v/main` qulluy** chaymanta lluqsichiy.

#### Proxy Sirwiq npm Nisqap Lluqsichisqan

Sichus China hatun suyupi llamk'aqkuna llika sasachakuykunawan tupanku chaymanta mana `npm` paquetekunata lluqsichiyta atinkuchu, paykunaqa `https_proxy` muyuriq tikraq churayta atinku proxy sirwiqta ruwanapaq.

Proxy servidor puertoyki `7890` kaqta hapispa, qillqayta atikunki:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Kikinmanta Qusqa Contenido

Sichus kikinmanta ruwasqa willayta quyta munanki, ñawpaqta `md/.i18n/htm/main.yml` llamk'achiy chaymanta `v: //unpkg.com/i18n.site` URL ñawpaq simiykiman tikray, ahinataq `v: //i18n-v.xxx.com` .

`md` sutiyuq qillqana mayt'uman yaykuy hinaspa purichiy

```
i18n.site --htm_conf ol --save
```

otaq pisichasqa simi

```
i18n.site -c ol -s
```

Chaymanta, `md/out/main/v` willañiqipi kaq kaqninta URL ñawpaq simi ñanman `v:` kaqpi churasqa ruway.

Tukuchanapaq, **`/.v` `1s` tukukuq ñanpa waqaychasqa pachanta wakichiy** , mana hina kaqtinqa, musuq lluqsisqa willaykunamanqa manam chaylla yaykuyta atikunmanchu.

Huk ñankunapaq waqaychasqa pachaqa huk wataman utaq aswanman churasqa kanman mana necesario mañakuykunata pisiyachinapaq.

## Contenidota s3 Nisqaman Quy

Kikinmanta qunakuypaq, kikin sirwiqniyki llamk'achisqaykimanta `CDN` , huk común akllana `S3` +

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Yuyariy `CDN` wakichiyta, `/.v` kaqpi tukuq ñanpa waqaychasqa pachan `1s` kananpaq, mana hina kaqtinqa, musuq lluqsisqa willaykunamanqa manam chaylla yaykuyta atikunmanchu.

## Web Nisqapi Lluqsichiy

Web kitiqa maypipas churasqa kanman, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) allin akllanakuna kanku.

Imaraykuchus web kiti [huk p'anqayuq ruwana](https://developer.mozilla.org/docs/Glossary/SPA) arquitectura llamk'achin, yuyariy URL ñankunata wakmanta qillqayta mayqinkunachus mana `. ` kaqmanta `index.html` kaqkamachu.

Web kiti yaykuy p'anqa huk kutilla mast'arisqa kanan tiyan, chaymanta mana web kiti yaykuy p'anqata wakmanta mast'ariy tiyanchu qhipa ruwanakuna musuqyachiypaq.

### github P'anqapi Mast'ariy

Ñawpaqta [github ñit'iy huk tantanakuyta kamanaykipaq](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Chaymanta kay tantanakuypa urayninpi `i18n-demo.github.io` almacén nisqa ruway (ama hina kaspa, `i18n-demo` kamasqayki tantanakuy sutiwan tikray):

![](https://p.3ti.site/1721098657.avif)

Ñawpaq qillqasqapi willayta lluqsichispa, `out/main/htm` paqarichisqaña Ama hina kaspa, kay qillqana mayt'uman yaykuy hinaspa purichiy :

```
ln -s index.html 404.html
```


`github page` URL ñan musuqmanta qillqayta mana yanapasqanrayku, `404.html` rantinpi llamk'achisqa.

Chaymanta kay kamachiyta `htm` qillqana mayt'upi purichiy (yuyariy `i18n-demo/i18n-demo.github.io.git` kikiykipa almacén direccionninwan tikrayta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Codigo tanqasqaykimanta, `github page` mast'ariy allinta purinanta suyay (urapi rikuchisqa hina) manaraq chayman yaykuyta atichkaspa.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo p'anqapaq ama hina kaspa qhaway:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### cloudflare P'anqapi Mast'ariy

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` kaqpa mast'ariyninqa aswanta `github page` patamanta mast'ariypi sayasqa.

Huk proyectota ruway hinaspa `i18n-demo.github.io` almacén nisqa hawapi watay.

Chay ruwayqa kay urapi siqipim qawarisqa kachkan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ama hina kaspa, `Add Account` ñit'iy `i18n-demo` tantanakuyman yaykuyta qunaykipaq.

Sichus huk tantanakuypa almacénninta watarqanki, iskay kutita `Add Account` ñit'inayki tiyan iskay kutita kamachiypaq manaraq musuq tantanakuy rikuchisqa kachkaptin.

![](https://p.3ti.site/1721118306.avif)

Chaymanta, almacén `i18n-demo.github.io` akllay, chaymanta `Begin setup` ñit'iy, chaymanta qatiq llamkanakunapaq ñawpaqmanta chanikunata llamk'achiy.

![](https://p.3ti.site/1721118490.avif)

Ñawpaq kutita encuadernasqayki qhepamanmi iskay kinsa minutokunata suyanayki manaraq chayman haykushaspa.

Mastarisqamanta qhipaman, huk sapanchasqa kamachiy sutita watayta atikunki.

![](https://p.3ti.site/1721119459.avif)

Sapanchasqa kamachiy sutita watasqamanta, ama hina kaspa kamachiy sutiman riy huk p'anqayuq ruwanapa ñan musuqmanta qillqayninta wakichinaykipaq, uraypi rikuchisqa hina:

![](https://p.3ti.site/1721119320.avif)

Hawa siq'ipi kamachiykuna kayhinam, ama hina kaspa, uraypi ñawpaq chirupi `i18n.site` watasqayki kamachiy sutiwan tikray.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Chaymantapas, ama hina kaspa, waqaychasqa kamachiykunata wakichiy, uraypi rikuchisqa hina, chaymanta waqaychasqa unayniyuq kayninta huk killaman churay.

![](https://p.3ti.site/1721125111.avif)

Ama hina kaspa, hawa siq'ipi iskay ñiqin llamk'aypi kamachiy suti tupachiyta tikray, watasqayki kamachiy sutiman.

### China Hatun Suyupi Web Kiti Mast'ariyta Allinchay

Sichus aswan allin yaykuy ruwayta China hatun suyu llika muyuriqpi tariyta munanki, ama hina kaspa ñawpaqta [huk dominio sutita qillqay](//beian.aliyun.com) .

Chaymanta, + hatun suyupi puyu ranqhaqkunap objeto waqaychayninta llamk'achiy `CDN` Kay qatiq willayta mast'ariy `out/main/htm` .

Kantu yupayta llamk'achiy atikunki ñanta wakmanta qillqanapaq huk p'anqayuq ruwanakunaman hina ruwanapaq Ejemplopaq, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kayhinata ruwasqa kanman:

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
  // Kutichiy umalliqkuna lluqsiyta pantasqa allichaypaq churasqa kanman, ahinataq out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Imaraykuchus registro `MX` chaymanta registro `CNAME` `A` kuska kawsayta atinkuchu, sichus huk pachallapi dominio suti correo electrónicos chaskiyta munanki `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Chaymanta, imaraykuchus hawa llaqtakunapi t'ikray qullqikuna puyu ranqhaqkuna China hatunpi aswan chaninniyuq kanku, sichus qullqikuna allinchayta munanki, [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) tráfico desviación──Tráfico ruteo China hatun suyupi Baidu Cloud `CDN` , internacional tráfico rin cloudflare .

![](https://p.3ti.site/1721119788.avif)

Kay mastariy allinchay allichaykunaqa aswan sasachakuyniyuqmi, hamuq pachapi sapaq capitulokunapi riqsichisqa kanqa.

### Genérico Dominio Suti Kutichiy

Sichus `i18n.site` llamk'achkanki huk web kitita ruwanapaq hatun web kitiyki hina, aswanta pan-domain kutichiyta wakichinayki tiyan, chaytaq, yaykuyta `*.xxx.com` kaqman ( `www.xxx.com` kaqpi) `xxx.com` kaqman kutichiyta munanki.

Kay mañakuyqa Alibaba Cloud `CDN` `EdgeScript` ( [inglés qillqa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chino qillqa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yanapayninwanmi hunt'akunman .

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kaqpi kamachiy sutita yapay chaymanta Alibaba Cloud `CDN` kaqpi `*.xxx.com` `CNAME` kamachiy sutita rikuchiy.

![](https://p.3ti.site/1721122000.avif)

Ejemplopaq, pan-dominio suti kutichiy wakichiy `*.i18n.site` kaqmanta kay pata siq'ipi kayhina kachkan:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx Nisqawan Mast'ariy

Ama hina kaspa `out/main/htm` `server` `/root/i18n/md/out/main/htm` ruwayta yapay nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Sapa Kuti Tinkuchiypi Sayasqa

Kaykunata qhawayta atinki `github action` kaqniyki wakichinaykipaq :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Wakichiypi rikusqa hina, kay llamkana puriyqa `main` ramaman chaymanta `dist` ramaman tanqaspa qallarikun.

Llamkana purichiyqa sucursal sutiwan tupaq wakichiy willañiqita llamk'achinqa qillqa lluqsichinapaq Kaypi, `.i18n/htm/main.yml` chaymanta `.i18n/htm/dist.yml` qillqa lluqsichiy wakichi hina llamk'achinqa.

Kay allin ruwaykunata yuyaychayku qillqa lluqsichiy ruwanapaq:

Tikraykuna `main` ramaman tanqasqa kaptin, qillqaqa rurasqa kananpaqmi llamk'achisqa, ñawpaq qhaway estacionman mast'arisqa (ñawpaq qhaway estacionqa kanmi [github page](//pages.github.com) ).

Ñawpaq qhaway sitiopi qillqa allin kasqanmanta takyachiymanta, codigo hukllachasqa kanqa chaymanta rama `dist` kaqman tanqasqa kanqa, chaymanta oficial ruway chaymanta mast'ariy internetman rinqa.

Chiqamanta, kay pata ruwayta ruwanapaq aswan ruwanakuna qillqana tiyan.

Chiqap llamk'ayta qhawayta atinki [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` chaymanta `secrets.NPM_TOKEN` wakichiypi pakasqa tikraqkunata codigo base kaqpi wakichinayki tiyan.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token) Chay !

`NPM_TOKEN` nisqaqa `npm` kaq paquete nisqap qillqa mayt'unmi Watukuy [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Directorio Nisqapa Ruwaynin

### `public`

Web kitip mana kuyukuq willañiqikuna, ahinataq `favicon.ico` , `robots.txt` , hukkunapas.

Kaypi icono willañiqikunataqa [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` willañiqip urayninpiqa `i18n.site` kaqpa wakichiy willañiqikuna, tikray waqaychasqa, hukkunapas kachkan.Qhaway qatiq rakita ["Wakichiy"](/i18n.site/conf) sut'inchanapaq.

### `en`

Pukyu simi qillqana mayt'u, `en` `fromTo` `.i18n/conf.yml` wakichiy willañiqiwan tupaq

```yaml
i18n:
  fromTo:
    en: zh
```

Ama hina kaspa, tikraypa wakichiyninta qhaway [i18](/i18/use)