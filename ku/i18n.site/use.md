# Saz Bikin &

## Nîşana Veavakirinê

Amûra `i18` wergerandinê bicîbûyî ye, ji kerema xwe li vir bikirtînin `i18n.site` [ku serî li belgeya `i18` bidin da ku nîşana gihîştinê mîheng bikin](/i18/use) .

## Lêkirin

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projeya Demo

Ka em bi projeyek demo dest pê bikin û fêr bibin ka meriv çawa bikar tîne `i18n.site`

Em pêşî depoya demo-yê klon dikin û emrê bi vî rengî dimeşînin:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Bikarhênerên li axa Chinaînê dikarin:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Navê pelrêça klona bingehîn a kodê divê `md` be da ku pêşdîtina herêmî bi `docker` `demo.i18n.site` hêsantir bike.

### Wergerandin

`zh` , `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Piştî xebitandinê, pelên werger û cache dê `git add . ` çêkirin `md`

### Pêşdîtina Herêmî

Saz bikin û dest pê `docker` ( `MAC` pêşniyar dikin ku bikar bînin [orbstack](https://orbstack.dev) wekî dema xebitandinê ya `docker` ).

`./up.sh` re, têkevin `docker` [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Naveroka Bişînin

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Piştî xebitandina wergera jorîn, pelrêça `htm` û `v` dê di pelrêça `md/out/dev`

Li vir `dev` destnîşan dike ku ew li ser bingeha pelê `.i18n/htm/dev.yml` hatî çêkirin.

Di bin naverokê : `dev`

Di bin pelrêça rûpela têketina malperê `htm` ye.

`v` naveroka malperê bi nimreya versiyonê heye.

Pêşdîtina herêmî dê hemî pelan li pelrêça `out/dev/v/0.1.0`

Ji bo serbestberdana fermî, pelên guherî dê li pelrêça jimareya nû ya guhertoyê werin kopî kirin.

#### -c Bikar Bînin Da Ku Pelê Veavakirinê Diyar Bikin

Pelên veavakirinê yên cihêreng dê di binê pelrêça `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` û `ol.yml` mîhengên xwerû ne.

Kurtenivîsa `development` `dev` , ku hawirdora pêşkeftinê temsîl dike, ji bo pêşdîtina herêmî tê bikar anîn, û di heman demê de pela veavakirinê ya xwerû ye.
Kurteya `online` ye, ku hawîrdora serhêl temsîl dike, ji bo serbestberdana fermî tê bikar anîn, û di heman demê de pela veavakirinê ya xwerû ye dema ku li `npm` bikaranîna pîvana rêza fermanê `-n` `ol` )

Her weha hûn dikarin pelên mîhengê yên din `--htm_conf` li ser rêzika fermanê biafirînin da ku navê pelê veavakirinê diyar bikin:

bo nimûne:
```
i18n.site --htm_conf yourConfig --save
```

`--save` vir jimareya guhertoya nûvekirinê destnîşan dike.

#### <a rel=id href="#npm" id="npm"></a> Naveroka npmjs.com biweşînin

Weşandina naverokê [ji](/i18n.site/feature#ha) bo [npmjs.com](//npmjs.com)

##### npm login &

Saz bikin `nodejs` ji bo têketinê `npm login` bikar bînin.

Biguherîne `md/.i18n/htm/ol.yml` `i18n.site` di `v: //unpkg.com/i18n.site` de biguherîne bi ya xwe `npm` navê pakêtê.

Tenê navê pakêtê ya negirtî li ser bikar bînin [npmjs.com](//npmjs.com)

Dema `i18n.site` li ser bingeha `npm` `/.v` bê guman $ wekî pêşgira nirxa `v:` **`//unpkg.com/` bînin** .

`i18n.site --npm` an jî `i18n.site -n` di pelrêça `md`

Heke hûn ji bo weşandinê `~/.npmrc` entegrasyonê ya domdar bikar tînin, ne hewce ye ku hûn wê saz bikin `nodejs`

Heke hûn navê pakêtê di `v:` `ol.yml` de biguherînin, ji **kerema xwe pêşî `.i18n/v/ol` jêbirin** û paşê biweşînin.

##### Pêşkêşkara Proxy Ji Hêla npm Ve Hatî Weşandin

Ger bikarhêner li axa Chinaînê bi pirsgirêkên torê re rû bi rû bimînin û nikaribin `npm` biweşînin, ew dikarin guhêrbara jîngehê `https_proxy` saz bikin da ku servera proxy saz bikin.

Bihesibînin ku porta servera weya proxy `7890` hûn dikarin binivîsin:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Naveroka Xweseriya Xweser

Heke hûn dixwazin naverokê bixweber bikin, pêşî `md/.i18n/htm/ol.yml` û `v: //unpkg.com/i18n.site` biguherînin pêşgira URL-ya xwe, wek `v: //i18n-v.xxx.com` .

Têkeve pelrêça `md`

```
i18n.site --htm_conf ol --save
```

an kurtkirin

```
i18n.site -c ol -s
```

Dûv re, naverokê di `v:` `md/out/ol/v`

Di dawiyê de, **dema cache ya riya `/.v` bi `1s` diqede mîheng bike** , wekî din naveroka ku nû derketiye tavilê nayê gihîştin.

Dema cache ji bo rêyên din dikare salek an bêtir were danîn da ku daxwazên nehewce kêm bike.

##### Naveroka Mêvandarê s3

Ji bo naveroka xwe-mêvandariya xwe, ji bilî karanîna servera xwe, vebijarkek din `CDN` hevpar ew e ku + bikar bînin `S3`

Hûn dikarin [rclone](https://rclone.org) `S3` bikar bînin, paşê li skrîpta jêrîn binihêrin û biguhezînin, û her carê ku hûn diweşînin tenê guhertinên zêde li ser `S3` kopî bikin.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Bînin bîra xwe ku hûn mîheng bikin `CDN` da ku dema cache ya riya ku bi `/.v` diqede `1s` be, wekî din hûn ê nikaribin tavilê xwe bigihînin naveroka ku nû derketiye.

### Malpera Weşandin

Malper dikare li her deverê were bicîh kirin [github page](https://pages.github.com) û [cloudflare page](https://pages.cloudflare.com) vebijarkên baş in.

Ji ber ku malper mîmariya [serîlêdana yek-rûpelî](https://developer.mozilla.org/docs/Glossary/SPA) dipejirîne, ji bîr mekin ku hûn riya URL-ya ku tê de tune ji nû `index.html` binivîsin `. `

Pêdivî ye ku rûpela têketina malperê tenê carekê were saz kirin, û ji bo nûvekirinên naverokê yên paşîn ne hewce ye ku rûpela têketina malperê ji nû ve were saz kirin.

#### Li Ser Rûpela github Bicîh Bikin

Pêşî [li github bikirtînin ku rêxistinek çêbikin](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Dûv re di bin vê rêxistinê `i18n-demo.github.io` depoyek biafirînin (Ji kerema xwe navê rêxistinê ku we çêkiriye `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Dema ku naverok di gotara berê de hate weşandin `out/ol/htm` ji kerema xwe têkevin vê pelrêça û bişopînin :

```
ln -s index.html 404.html
```


Ji `github page` ku ji nû ve nivîsandina riya URL-ê piştgirî nake, ji ber vê yekê `404.html` tê bikar anîn.

Dûv re fermana `i18n-demo/i18n-demo.github.io.git` : pelrêça `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Piştî lêdana kodê, li bendê bin `github page` bicîhkirina bi serfirazî bimeşe (wek ku li jêr tê xuyang kirin), û dûv re hûn dikarin bigihîjin wê.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ji bo rûpela demo ji kerema xwe bibînin:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Li Ser Rûpela cloudflare Bicîh Bikin

`github page` gorî [cloudflare page](//pages.cloudflare.com)

Bicihkirin `cloudflare page` gelemperî li ser bingeha danîna `github page` ya jorîn pêk tê.

Projeyek çêbikin û depoya jorîn girêdin `i18n-demo.github.io`

Pêvajo di wêneya jêrîn de tê nîşandan:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ji kerema xwe `Add Account` bikirtînin da ku hûn bigihîjin `i18n-demo` rêxistinê.

Ger we embara rêxistinek din ve girêdaye, dibe ku hûn du caran bikirtînin `Add Account` ku ew du caran destûr bidin berî ku rêxistina nû were xuyang kirin.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Piştre `i18n-demo.github.io` hilbijêrin, paşê `Begin setup` bikirtînin, û ji bo gavên paşîn nirxên xwerû bikar bînin.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Piştî girêdana ji bo yekem car, hûn hewce ne ku çend hûrdeman bisekinin berî ku hûn bigihîjin wê.

Piştî bicîhkirinê, hûn dikarin navek domainek xwerû girêdin.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Piştî girêdana navê domaina xwerû, ji kerema xwe biçin nav navê domainê da ku rêça nûnivîsandina serîlêdana yek-rûpelê mîheng bikin, wekî ku li jêr tê xuyang kirin:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Rêzikên di wêneya li jor `i18n.site` wiha ne.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Wekî din, ji kerema xwe qaîdeyên cache-ê mîheng bikin, wekî ku li jêr tê xuyang kirin, û dirêjahiya cache-ê li mehekê destnîşan bikin.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ji kerema xwe navê domainê ku di gava duyemîn de di wêneya jorîn de lihevhatî ye biguherîne navê domaina ku we girêdaye.

#### Optimîzekirina Bicîhkirina Malperê Li Axa Chinaînê

Heke hûn dixwazin di hawîrdora torê ya axa Chinaînê de performansa gihîştina çêtir bistînin, ji kerema xwe pêşî [navek domainê tomar bikin](//beian.aliyun.com) .

Dûv re, li ser axa Chinaînê hilanîna `out/ol/htm` bikar `CDN` +

Hûn dikarin hesabkirina qeraxê bikar bînin da ku rê li ber sepanên yekrûpelê ji nû ve binivîsin, wek [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Ew dikare bi vî rengî were mîheng kirin:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

Ji ber `MX` tomar û `CNAME` tomar nikarin bi hev re bijîn, heke hûn dixwazin e-nameyên navên domainê di heman demê de bistînin, hûn hewce ne ku bi [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) re hevkariyê bikin da ku `CNAME` di nav `A` tomarê de).

Wekî din, ji ber ku lêçûnên seyrûsefera li derveyî welat ên firoşkarên ewr ên li ser axa Chinaînê biha ne, heke hûn dixwazin lêçûnên xweştir bikin, hûn dikarin [çareseriya erdnîgarî ya belaş a Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) û navê domaina xwerû ya [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) bikar bînin (wek ku li jêr tê xuyang kirin). veguheztina trafîkê──Trafîka li axa Chinaînê Baidu Cloud `CDN` seyrûsefera navneteweyî cloudflare diçe.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Van çareseriyên xweşbînkirina bicîhkirinê tevlihevtir in û dê di pêşerojê de di beşên cihê de bêne destnîşan kirin.

#### Beralîkirina Navê Domainê Ya Gelemperî

Heke hûn ji bo afirandina malperek wekî malpera xweya sereke bikar `i18n.site` , bi gelemperî hewce ye ku hûn beralîkirina pan-domain mîheng bikin, ango, gihandina `*.xxx.com` (tevî `www.xxx.com` ) beralî bikin `xxx.com`

Ev hewcedarî bi alîkariya Alibaba Cloud- `EdgeScript` ( [belgeya Îngilîzî](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Belgeya Çînî](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) dikare pêk were `CDN`

Navekî domainê li [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) zêde bikin û `*.xxx.com` domainê nîşan bidin Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mînakî, veavakirina beralîkirina navê pan-domainê `*.i18n.site` di wêneya jorîn de wiha ye:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Bi nginx Re Bicîh Bikin

Ji kerema xwe veavakirinek mîna ya jêrîn di `server` de lê zêde bike nginx li wir `/root/i18n/md/out/ol/htm` ji kerema xwe wê biguherîne ser riya projeya xwe `out/ol/htm` !

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Structure Directory

#### Alenî

Pelên statîk ên malperê, wekî `favicon.ico` `robots.txt` , hwd.

Pelên îkonê li vir dikarin bi [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Peldanka zimanê çavkaniyê, ku di pelê veavakirinê de `.i18n/conf.yml` `fromTo` `en` re têkildar e

```yaml
i18n:
  fromTo:
    en: zh
```

Ji kerema xwe serî li veavakirina wergerê bidin [i18](/i18/use)

