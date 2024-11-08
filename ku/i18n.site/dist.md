# Dabeşkirin Û Serhêl

`i18n.site` mîmariya [serîlêdana yek-rûpelî](https://developer.mozilla.org/docs/Glossary/SPA) dipejirîne, û rûpela têketina malperê û naveroka malperê serbixwe têne bicîh kirin.

Piştî xebitandina wergera jorîn, pelrêça `htm` û `v` dê di bin pelrêça `md/out/dev` de bêne çêkirin.

Li vir, `dev` tê vê wateyê ku ew li ser bingeha pelê mîhengê `.i18n/htm/dev.yml` hatî çêkirin.

`dev` directory :

Pelrêça `htm` rûpela têketina malperê ye.

Di pelrêça `v` de naveroka malperê bi hejmarên guhertoyan heye.

Pêşniyara herêmî bala xwe nade jimareya guhertoyê û dê hemî pelan li pelrêça `out/dev/v/0.1.0` kopî bike.

Ji bo serbestberdana fermî, pelên guherî dê li pelrêça jimareya nû ya guhertoyê werin kopî kirin.

## Pelê Veavakirinê Bi `-c` Diyar Bikin

Pelên veavakirinê yên cihêreng dê di pelrêça `out` de pelrêçên têkildar biafirînin.

Mînakî, `.i18n/htm/main.yml` dê pelrêça `out/main` biafirîne.

`dev.yml` û `main.yml` mîhengên xwerû ne.

`dev` kurteya `development` -ê ye, ku hawîrdora pêşkeftinê nîşan dide, ku ji bo pêşdîtina herêmî tê bikar anîn, û di heman demê de pelê veavakirina xwerû ye.
`ol` kurtenivîsa `online` -ê ye, ku hawîrdora serhêl nîşan dide, ku ji bo `npm` fermî tê bikar anîn Ew di heman demê de pelê veavakirina xwerû ye dema ku ji bo berdanê parametreyên rêzika fermanê `-n` bikar tîne.

Her weha hûn dikarin pelên mîhengê yên din jî biafirînin ku li ser rêzika fermanê `--htm_conf` bikar bînin da ku navê pelê veavakirinê diyar bikin:

bo nimûne:
```
i18n.site --htm_conf dist --save
```

Li vir `--save` jimareya guhertoya berdana nûvekirinê nîşan dide.

## <a rel=id href="#npm" id="npm"></a> Naveroka npmjs.com biweşînin

Weşandina naverokê [ji](/i18n.site/feature#ha) bo [npmjs.com](//npmjs.com)

### Têkeve & npm

`nodejs` saz bikin, bi `npm login` re têkevinê.

`md/.i18n/htm/main.yml` biguherînin û nirxa [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` biguherînin [npmjs.com](//npmjs.com) navê pakêta xweya `npm` .

Piştre `md/.i18n/htm/main.package.json` biguherînin

Di pelrêça `md` de `i18n.site --npm` an `i18n.site -n` bimeşînin ku wergerînin û çap bikin.

Heke hûn ji bo weşandinê jîngehek entegrasyonê ya domdar bikar tînin, hewcedarî bi sazkirina `nodejs` tune. Tenê destûrên têketin û weşanê `~/.npmrc` li hawîrdorê kopî bikin.

Ger hûn navê pakêtê ya `v:` di `main.yml` de biguherînin, **ji kerema xwe pêşî `.i18n/v/main` jêbirin** û paşê biweşînin.

#### Pêşkêşkara Proxy Ji Hêla npm Ve Hatî Weşandin

Ger bikarhêner li axa Chinaînê bi pirsgirêkên torê re rû bi rû bimînin û nikaribin `npm` pakêtan biweşînin, ew dikarin guhêrbara jîngehê `https_proxy` saz bikin da ku servera proxy mîheng bikin.

Bihesibînin ku porta servera weya proxy `7890` ye, hûn dikarin binivîsin:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Naveroka Xweseriya Xweser

Heke hûn dixwazin naverokê bixwe-mêvandar bikin, pêşî `md/.i18n/htm/main.yml` biguherînin û `v: //unpkg.com/i18n.site` li pêşgira URL-ya xwe biguherînin, wek `v: //i18n-v.xxx.com` .

Têkeve pelrêça `md` û birevin

```
i18n.site --htm_conf ol --save
```

an kurtkirin

```
i18n.site -c ol -s
```

Dûv re, naverokê di pelrêça `md/out/main/v` de bi rêça pêşgiriya URL-ê ya ku di `v:` de hatî destnîşan kirin mîheng bikin.

Di dawiyê de, **dema cache ya riya ku bi `/.v` ber `1s` diqede mîheng bikin** , wekî din naveroka ku nû derketiye tavilê nayê gihîştin.

Dema cache ji bo rêyên din dikare salek an bêtir were danîn da ku daxwazên nehewce kêm bike.

## Naveroka Mêvandarê s3

Ji bo naveroka xwe-mêvandarê, ji bilî karanîna servera xwe, vebijarkek din a hevpar ev e ku `CDN` `S3` bikar bînin +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Bînin bîra xwe ku hûn `CDN` mîheng bikin da ku dema cache ya riya ku bi `/.v` diqede `1s` be, wekî din naveroka ku nû hatî berdan tavilê neyê gihîştin.

## Malpera Weşandin

Malper dikare li her deverê were bicîh kirin [github page](https://pages.github.com) û [cloudflare page](https://pages.cloudflare.com) vebijarkên baş in.

Ji ber ku malper mîmariya [serîlêdanê ya yek-rûpel](https://developer.mozilla.org/docs/Glossary/SPA) bikar tîne, ji bîr mekin ku hûn rêyên URL-yê yên ku `. ` `index.html` ê nagirin ji nû ve binivîsin.

Pêdivî ye ku rûpela têketina malperê tenê carekê were saz kirin, û ji bo nûvekirinên naverokê yên paşîn ne hewce ye ku rûpela têketina malperê ji nû ve were saz kirin.

### Li Ser Rûpela github Bicîh Bikin

Pêşî [li github bikirtînin da ku rêxistinek çêbikin](https://github.com/account/organizations/new?plan=free) Navê rêxistina jêrîn wekî nimûne `i18n-demo` e.

Dûv re di binê vê rêxistinê de depoya `i18n-demo.github.io` biafirînin (ji kerema xwe `i18n-demo` bi navê rêxistina ku we afirandiye biguhezînin):

![](https://p.3ti.site/1721098657.avif)

Dema ku naveroka di gotara berê de hate weşandin, `out/main/htm` hate çêkirin :

```
ln -s index.html 404.html
```


Ji ber ku `github page` ji nû ve nivîsandina riya URL-ê piştgirî nake, li şûna wê `404.html` tê bikar anîn.

Dûv re emrê jêrîn di pelrêça `htm` de bimeşînin (ji bîr mekin ku `i18n-demo/i18n-demo.github.io.git` bi navnîşana depoya xweya xwe veguherînin) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Piştî pêxistina kodê, li bendê bin ku bicîhkirina `github page` bi serfirazî bimeşe (wek ku li jêr tê xuyang kirin) berî ku hûn bigihîjin wê.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ji bo rûpela demo ji kerema xwe bibînin:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Li Ser Rûpela cloudflare Bicîh Bikin

Li gorî `github page` [cloudflare page](//pages.cloudflare.com) ew ji nû ve nivîsandina rê peyda dike û ji axa Chinaînê re hevaltir e û karanîna wê bêtir tê pêşniyar kirin.

Bicihkirina `cloudflare page` bi gelemperî li ser bicîhkirina `github page` li jor bingeh e.

Projeyek biafirînin û `i18n-demo.github.io` wargeha li jor ve girêdin.

Pêvajo di wêneya jêrîn de tê nîşandan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ji kerema xwe `Add Account` bikirtînin da ku rê bidin rêxistina `i18n-demo` .

Ger we embara saziyek din ve girêdaye, dibe ku hûn hewce bike ku du caran `Add Account` bikirtînin da ku du caran destûr bidin berî ku rêxistina nû were xuyang kirin.

![](https://p.3ti.site/1721118306.avif)

Dûv re, wargeha `i18n-demo.github.io` hilbijêrin, dûv re `Begin setup` bikirtînin, û ji bo gavên paşîn nirxên xwerû bikar bînin.

![](https://p.3ti.site/1721118490.avif)

Piştî girêdana ji bo cara yekem, hûn hewce ne ku çend hûrdeman bisekinin berî ku hûn bigihîjin wê.

Piştî bicîhkirinê, hûn dikarin navek domainek xwerû girêdin.

![](https://p.3ti.site/1721119459.avif)

Piştî girêdana navê domaina xwerû, ji kerema xwe biçin nav navê domainê da ku rêça nûnivîsandina serîlêdana yek-rûpelê mîheng bikin, wekî ku li jêr tê xuyang kirin:

![](https://p.3ti.site/1721119320.avif)

Rêzikên di wêneya jorîn de `i18n.site` ne.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Wekî din, ji kerema xwe qaîdeyên cache-ê mîheng bikin, wekî ku li jêr tê xuyang kirin, û dirêjahiya cache-ê li mehekê destnîşan bikin.

![](https://p.3ti.site/1721125111.avif)

Ji kerema xwe navê domainê ku di gava duyemîn de di wêneya jorîn de lihevhatî ye biguherîne navê domaina ku we girêdaye.

### Optimîzekirina Bicîhkirina Malperê Li Axa Chinaînê

Ger hûn dixwazin di hawîrdora torê ya axa Chinaînê de performansa gihîştina çêtir bistînin, ji kerema xwe pêşî [navek domainê tomar bikin](//beian.aliyun.com) .

Dûv re, hilanîna objeya firoşkarên ewr li axa + bikar bînin `CDN` Naveroka jêrîn `out/main/htm` bicîh bikin.

Hûn dikarin hesabkirina qerax bikar bînin da ku rê li ber sepanên yek-rûpelê ji nû ve binivîsînin Mînakî, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) dikare bi vî rengî were mîheng kirin:

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
  // Tu dikarî sernivîsa bersivê saz bikî da ku encam derbikeve, wek out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Ji ber ku tomar `MX` û tomar `CNAME` nikarin bi hev re bijîn, heke hûn dixwazin e-nameyên navên domainê di heman demê de werbigirin, hûn hewce [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ku bi skrîpta asta `CNAME` `A` re hevkariyê bikin.

Wekî din, ji ber ku lêçûnên seyrûsefera li derveyî welat ên firoşkarên ewr ên li ser axa Chinaînê biha ne, heke hûn dixwazin lêçûnên xweştir bikin, hûn dikarin [DNS erdnîgarî ya belaş a Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) û navê domaina xwerû ya [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) bikar bînin (wek ku li jêr tê xuyang kirin). veguheztina trafîkê──Rêvekirina trafîkê li axa Chinaînê Baidu Cloud `CDN` , seyrûsefera navneteweyî diçe cloudflare .

![](https://p.3ti.site/1721119788.avif)

Van çareseriyên xweşbînkirina bicîhkirinê tevlihevtir in û dê di pêşerojê de di beşên cihê de bêne destnîşan kirin.

### Beralîkirina Navê Domainê Ya Gelemperî

Heke hûn `i18n.site` bikar tînin da ku malperek wekî malpera xweya sereke çêbikin, hûn bi gelemperî hewce ne ku hûn beralîkirina pan-domain mîheng bikin, ango, gihîştina `*.xxx.com` (tevî `www.xxx.com` ) beralî `xxx.com` bikin.

Ev hewcedarî bi alîkariya Alibaba Cloud `CDN` `EdgeScript` ( [belgeya Îngilîzî](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Belgeya Çînî](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) dikare pêk were.

Navê domainê li [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) zêde bikin û di Alibaba Cloud `CDN` de navê domainê `*.xxx.com` `CNAME` destnîşan bikin.

![](https://p.3ti.site/1721122000.avif)

Mînakî, veavakirina beralîkirina navê pan-domainê ya `*.i18n.site` di wêneya jorîn de wiha ye:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Bi nginx Re Bicîh Bikin

Ji kerema xwe veavakirinek mîna ya jêrîn di paragrafa `server` ya nginx de zêde bikin Ji kerema xwe `/root/i18n/md/out/main/htm` biguherînin riya projeya xwe `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Li Ser Bingeha `github action` Yekbûna Domdar

Ji bo mîhengkirina `github action` ya xwe hûn dikarin van jêrîn binihêrin:

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

Wekî ku di veavakirinê de tê dîtin, dema ku berbi şaxê `main` û şaxê `dist` ve tê kişandin, ev tevgera xebatê tê dest pê kirin.

Pêvajoya xebatê dê pela veavakirinê ya ku bi navê şaxê re têkildar e bikar bîne da ku belgeyê biweşîne, `.i18n/htm/main.yml` û `.i18n/htm/dist.yml` dê bi rêzê ve wekî veavakirina weşanê werin bikar anîn.

Em ji bo pêvajoya berdana belgeyê pratîkên çêtirîn ên jêrîn pêşniyar dikin:

Dema ku guhertin berbi şaxa `main` ve têne avêtin, belge tê xebitandin ku were çêkirin û li stasyona pêşdîtinê were bicîh kirin (stasyona pêşdîtinê heye [github page](//pages.github.com) ).

Piştî ku piştrast kir ku belge li ser malpera pêşdîtinê rast e, kod dê were yek kirin û berbi şaxê `dist` ve were avêtin, û çêkirin û bicîhkirina fermî dê serhêl bikeve.

Bê guman, pêkanîna pêvajoya jorîn hewce dike ku bêtir veavakirinan binivîse.

Hûn dikarin ji bo nivîsandina xebata xebatê serî li projeya rastîn bidin [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` û `secrets.NPM_TOKEN` di veavakirinê de ji we re hewce dike ku hûn guhêrbarên veşartî di bingeha kodê de mîheng bikin.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` di veavakirinê de nîşana weşana `npm` ye û bi destûrnameyên [npmjs.com](//npmjs.com) biafirînin

![](//p.3ti.site/1730969906.avif)


## Avahiya Directory

### `public`

Pelên statîk ên malperê, wekî `favicon.ico` , `robots.txt` , hwd.

Pelên îkonê li vir dikarin bi [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Di bin pelrêça `.i18n` de pelên veavakirinê, cacheya wergerê, hwd. yên `i18n.site` hene. Ji bo hûragahiyan li beşa paşîn ["Vesazkirin"](/i18n.site/conf) binêre.

### `en`

Peldanka zimanê çavkaniyê, bi pelê veavakirinê `en` ji `fromTo` di `.i18n/conf.yml` de

```yaml
i18n:
  fromTo:
    en: zh
```

Ji kerema xwe serî li veavakirina wergerê bidin [i18](/i18/use)