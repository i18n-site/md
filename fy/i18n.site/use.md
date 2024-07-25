# Ynstallearje &

## Konfiguraasje Token

`i18n.site` `i18` [`i18`](/i18/use)

## Ynstallearje

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Litte wy begjinne mei in demo-projekt en learje hoe't jo `i18n.site`

Wy klonje earst it demo-repository en fiere it kommando sa út:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Brûkers op it fêstelân fan Sina kinne:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` mapnamme fan 'e koadebasiskloon moat `md` wêze om lokale foarbyld te fasilitearjen mei `docker` .

### Oersette

Fier earst de `md` yn en fier `i18n.site` , dy't `en` sil oersette nei `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nei it útfieren sille oersettings- en cache `git add . ` bestannen oanmakke wurde `md`

### Lokale Foarbyld

Ynstallearje en `docker` ( `MAC` advisearje it brûken fan [orbstack](https://orbstack.dev) as de runtime fan `docker` ).

Fier dan de `docker` yn en fier `./up.sh` , en besykje dan [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Ynhâld

`i18n.site` in [applikaasje-arsjitektuer fan ien side](https://developer.mozilla.org/docs/Glossary/SPA) , en de webside-yngongsside en webside-ynhâld wurde ûnôfhinklik ynset.

Nei it útfieren fan de boppesteande oersetting, wurde `htm` en `v` mappen oanmakke yn de `md/out/dev`

Hjir, `dev` jout oan dat it is boud op basis fan it `.i18n/htm/dev.yml` .

: ynhâld `dev`

`htm` Under de map is de webside yngong.

`v` De map befettet de webside ynhâld mei ferzjenûmer.

Lokale foarbyld sil alle bestannen nei de `out/dev/v/0.1.0` kopiearje, nettsjinsteande it ferzjenûmer.

Foar offisjele frijlitting sille feroare bestannen kopiearre wurde nei it nije ferzjenûmermap.

#### Brûk -c Om It Konfiguraasjetriem Op Te Jaan

Ferskillende konfiguraasjebestannen sille korrespondearjende mappen meitsje ûnder de map `out`

Bygelyks, `.i18n/htm/ol.yml` sil in `out/ol` map oanmeitsje.

`dev.yml` en `ol.yml` binne de standertkonfiguraasjes.

`dev` is de ôfkoarting fan `development` , dy't de ûntwikkelingsomjouwing fertsjintwurdiget, wurdt brûkt foar lokale foarbyld, en is ek it standert konfiguraasjetriem.
`ol` is de ôfkoarting fan `online` , dy't de online omjouwing fertsjintwurdiget, wurdt brûkt foar offisjele frijlitting, en is ek de standert konfiguraasjetriem by it publisearjen nei `npm` mei de kommandorigelparameter `-n` .

Jo kinne ek oare konfiguraasjetriemmen oanmeitsje. Brûk `--htm_conf`

bygelyks:
```
i18n.site --htm_conf yourConfig --save
```

Hjir jout it fernijingsferzjenûmer oan `--save`

#### <a rel=id href="#npm" id="npm"></a> Publisearje ynhâld op npmjs.com

It publisearjen [fan](/i18n.site/feature#ha) ynhâld nei [npmjs.com](//npmjs.com)

##### npm login &

Ynstallearje `nodejs` brûk `npm login` om oan te melden.

Bewurkje `md/.i18n/htm/ol.yml` feroarje `i18n.site` yn `v: //unpkg.com/i18n.site` nei jo eigen `npm` pakketnamme.

Brûk gewoan de net-besette pakketnamme op [npmjs.com](//npmjs.com)

As `i18n.site` ​​publisearje op basis fan it `npm` `/.v` , **wês dan wis dat jo `//unpkg.com/` brûke** as it foarheaksel fan 'e `v:` -wearde.

Run `i18n.site --npm` of `i18n.site -n` yn de `md` om te oersetten en te publisearjen.

As jo ​​​​in trochgeande yntegraasjeomjouwing brûke om te publisearjen, is it net nedich om it `nodejs` ynstallearjen Kopiearje gewoan de oanmelde en publisearre tastimming `~/.npmrc` nei de omjouwing.

As jo ​​de pakketnamme wizigje yn `v:` `ol.yml` , wês dan **wis dat jo earst `.i18n/v/ol` wiskje** en dan publisearje.

##### Proxy-Tsjinner Publisearre Troch npm

As brûkers op it fêstelân fan Sina netwurkproblemen tsjinkomme en `npm` pakket net kinne publisearje, kinne se de omjouwingsfariabele `https_proxy` ynstelle om de proxy-tsjinner te konfigurearjen.

Oannommen dat jo proxy-tsjinner poarte `7890` kinne jo skriuwe:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Hosted Ynhâld

As jo ​​​​de ynhâld sels wolle hostje, bewurkje dan `md/.i18n/htm/ol.yml` en feroarje `v: //unpkg.com/i18n.site` nei jo URL-foarheaksel, lykas `v: //i18n-v.xxx.com` .

Fier de `md` yn en rinne

```
i18n.site --htm_conf ol --save
```

of ôfkoarting

```
i18n.site -c ol -s
```

Konfigurearje dan de ynhâld yn 'e `md/out/ol/v` mei it URL-prefikspaad ynsteld yn `v:` .

As lêste, **konfigurearje de cache-tiid fan it paad `/.v` einiget op `1s`** , oars kin de nij frijjûn ynhâld net direkt tagonklik wurde.

De cachetiid foar oare paden kin ynsteld wurde op ien jier of mear om ûnnedige oanfragen te ferminderjen.

##### Host Ynhâld Oan s3

Om ynhâld sels `CDN` hostjen, neist it brûken fan jo eigen server, is in oare mienskiplike opsje `S3` +

Jo kinne [rclone](https://rclone.org) `S3` , ferwize dan nei it skript hjirûnder, en kopiearje allinich inkrementele wizigingen nei `S3` elke kear as jo publisearje.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Unthâld om te konfigurearjen `CDN` sadat de cache-tiid fan it paad dat einiget op `/.v` `1s` is, oars kinne jo net direkt tagong krije ta de nij frijjûn ynhâld.

### Publisearje Webside

De webside kin oeral ynset wurde [github page](https://pages.github.com) en [cloudflare page](https://pages.cloudflare.com) binne goede karren.

Om't de webside de arsjitektuer oannimt fan [in applikaasje fan ien side](https://developer.mozilla.org/docs/Glossary/SPA) , tink om it URL-paad dat net `. ` nei `index.html` .

De yngongside fan 'e webside hoecht mar ien kear te wurde ynset, en d'r is gjin needsaak om de yngongside fan' e webside opnij yn te setten foar folgjende ynhâldupdates.

#### Ynsette Op github Side

[Klikje github earst om in organisaasje te meitsjen](https://github.com/account/organizations/new?plan=free) De folgjende organisaasjenamme is `i18n-demo`

Meitsje dan in pakhús ûnder dizze `i18n-demo.github.io` (ferfang asjebleaft `i18n-demo` mei de organisaasjenamme dy't jo makke hawwe):

<img alt="" src="https://p.3ti.site/1721098657.avif">

By it publisearjen : de ynhâld yn it foarige artikel is it oanmakke Fier dizze map yn en útfiere `out/ol/htm`

```
ln -s index.html 404.html
```


`404.html` `github page`

Fier dan it `i18n-demo/i18n-demo.github.io.git` kommando : yn 'e map `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nei it triuwen fan de koade, wachtsje oant de ynset fan `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Sjoch foar demo-side:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ynsette Op cloudflare Side

[cloudflare page](//pages.cloudflare.com) Yn ferliking mei `github page`

`cloudflare page` De ynset is normaal basearre op de ynset fan `github page` hjirboppe.

Meitsje in projekt en bine it boppesteande pakhús `i18n-demo.github.io`

It proses wurdt werjûn yn 'e figuer hjirûnder:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klikje `Add Account` om tagong te jaan ta de `i18n-demo` .

As jo ​​it pakhûs fan in oare organisaasje bûn hawwe, moatte jo miskien `Add Account` kear klikke om it twa kear te autorisearjen foardat de nije organisaasje werjûn wurdt.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Selektearje `i18n-demo.github.io` Warehouse, klik dan op `Begin setup` , en brûk de standertwearden foar folgjende stappen.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nei it binen foar de earste kear, moatte jo in pear minuten wachtsje foardat jo tagong krije kinne.

Nei ynset kinne jo in oanpaste domeinnamme bine.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nei it binen fan de oanpaste domeinnamme, gean asjebleaft nei de domeinnamme om it paadherskriuwen fan 'e applikaasje fan ien side te konfigurearjen, lykas hjirûnder werjûn:

<img alt="" src="https://p.3ti.site/1721119320.avif">

De regels yn 'e foto hjirboppe binne as `i18n.site` .

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

Stel ek de cache-regels yn, lykas hjirûnder werjûn, en set de cache-doer yn op ien moanne.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Feroarje asjebleaft de domeinnamme dy't oerienkomt yn 'e twadde stap yn' e foto hjirboppe nei de domeinnamme dy't jo bûn hawwe.

#### Optimalisearjen Fan Webside-Ynset Op It Fêstelân Fan Sina

As jo ​​​​bettere berikberensprestaasjes wolle krije yn 'e netwurkomjouwing fan it fêstelân fan Sina, [registrearje dan earst in domeinnamme](//beian.aliyun.com) .

Brûk `out/ol/htm` de objektopslach fan wolkferkeapers op it fêstelân `CDN` Sina +

Jo kinne edge computing brûke om it paad te herskriuwen om oan te passen oan applikaasjes fan ien side, lykas [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Om't `MX` -records en `CNAME` -records net tegearre bestean kinne, moatte jo as jo domeinnamme `CNAME` e `A` mails tagelyk ûntfange wolle, gearwurkje mei it [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Derneist, om't de oerseeske ferkearskosten fan wolkferkeapers op it fêstelân fan Sina relatyf djoer binne, as jo de kosten wolle optimalisearje, kinne jo [DNS fergese geografyske resolúsje fan Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) en de oanpaste domeinnamme fan [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (lykas hjirûnder werjûn) brûke ferkear omlieding── Ferkear yn it fêstelân fan Sina Baidu Cloud `CDN` ynternasjonaal ferkear giet cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Dizze oplossings foar ynsetoptimalisaasje binne komplekser en sille yn 'e takomst yn aparte haadstikken wurde yntrodusearre.

#### Generic Domeinnamme Trochferwizing

As jo `i18n.site` om in webside as jo haadwebside te generearjen, moatte jo gewoanlik pan-domein-omlieding konfigurearje, dat is, trochferwizing `*.xxx.com` (ynklusyf `www.xxx.com` ) tagong ta `xxx.com` .

Dizze eask kin berikt wurde mei help fan Alibaba Cloud `CDN` `EdgeScript` ( [Ingelsk dokumint](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sineesk dokumint](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Foegje in domeinnamme ta yn [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) en wiis `*.xxx.com` domeinnamme nei Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Bygelyks, de konfiguraasje fan omlieding foar pan-domeinnamme fan `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ynsette Mei nginx

Foegje asjebleaft in konfiguraasje ta dy't ferlykber is mei de folgjende yn `server` nginx wêr `/root/i18n/md/out/ol/htm` asjebleaft feroarje nei it paad fan jo eigen projekt `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Struktuer

#### Iepenbier

Statyske bestannen fan 'e webside, lykas `favicon.ico` `robots.txt` , ensfh.

De ikoanbestannen hjir kinne wurde oanmakke mei [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Under de map binne `i18n.site` 's konfiguraasjebestannen, oersettingscache, ensfh. Sjoch it folgjende haadstik ["Konfiguraasje"](/i18n.site/conf) foar details.

#### en

Boarnetaalmap, oerienkommende `.i18n/conf.yml` `fromTo` `en` yn it konfiguraasjetriem

```yaml
i18n:
  fromTo:
    en: zh
```

Ferwize asjebleaft nei de konfiguraasje fan oersetting [i18](/i18/use)

