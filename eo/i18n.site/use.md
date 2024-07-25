# Instalu &

## Agorda Ĵetono

La `i18` tradukilo estas enigita, bonvolu klaki ĉi tie `i18n.site` [raporti al la `i18` -dokumento por agordi la alirĵetonon](/i18/use) .

## Instali

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprojekto

Ni komencu per demo-projekto kaj lernu kiel uzi `i18n.site`

Ni unue klonas la deponejon kaj rulas la komandon jene:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Uzantoj en kontinenta Ĉinio povas:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

La dosieruja nomo de la kodobaza klono devas esti `md` por faciligi lokan antaŭrigardon kun `docker` `demo.i18n.site`

### Traduki

Unue, enigu la `md` kaj rulu `i18n.site` , kiu tradukos `en` al `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Post funkciado, tradukoj kaj kaŝmemoroj estos generitaj. Bonvolu memori aldoni ilin al la deponejo `git add . ` en `md` dosierujo.

### Loka Antaŭrigardo

Instali kaj komenci `docker` ( `MAC` rekomendas uzi [orbstack](https://orbstack.dev) kiel la rultempon de `docker` ).

Poste, enigu la `docker` kaj rulu `./up.sh` , kaj poste vizitu [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Afiŝu Enhavon

`i18n.site` Adoptas [unu-paĝan aplikaĵarkitekturon](https://developer.mozilla.org/docs/Glossary/SPA) , kaj la reteja enirejpaĝo kaj reteja enhavo estas deplojitaj sendepende.

Post rulado de la ĉi-supra traduko, `htm` kaj `v` dosierujoj estos generitaj en la dosierujo `md/out/dev`

Ĉi tie `dev` indikas ke ĝi estas konstruita surbaze de la `.i18n/htm/dev.yml` dosiero.

`dev` Sub enhavo :

`htm` la dosierujo estas la retpaĝo.

`v` La dosierujo enhavas la retejon kun versio numero.

Loka antaŭrigardo kopios ĉiujn dosierojn al la `out/dev/v/0.1.0` sendepende de la numero de versio.

Por oficiala liberigo, ŝanĝitaj dosieroj estos kopiitaj al la nova versio-numera dosierujo.

#### Uzu -c Por Specifi La Agordan Dosieron

Malsamaj agordaj dosieroj kreos respondajn dosierujojn sub la dosierujo `out`

Ekzemple `.i18n/htm/ol.yml` kreos `out/ol` dosierujon.

`dev.yml` kaj `ol.yml` estas la defaŭltaj agordoj.

`dev` estas la mallongigo de `development` , kiu reprezentas la evolumedion, estas uzata por loka antaŭrigardo, kaj ankaŭ estas la defaŭlta agorda dosiero.
`ol` la mallongigo de `online` , kiu reprezentas la interretan medion, estas uzata por oficiala eldono, kaj ankaŭ estas la defaŭlta agorda dosiero kiam oni publikigas al `npm` uzante la komandlinian parametron `-n` .

Vi ankaŭ povas krei aliajn agordajn dosierojn `--htm_conf` sur la komandlinio por specifi la agordan nomon:

ekzemple:
```
i18n.site --htm_conf yourConfig --save
```

Ĉi `--save` indikas la numeron de versio de ĝisdatigo.

#### <a rel=id href="#npm" id="npm"></a> Eldonu enhavon al npmjs.com

Publiki enhavon al [npmjs.com](//npmjs.com) estas la rekomendita defaŭlta solvo (vidu [Frontend High Availability](/i18n.site/feature#ha) ).

##### npm login & Liberigu

Instalu `nodejs` uzu `npm login` por ensaluti.

Redaktu `md/.i18n/htm/ol.yml` ŝanĝu `i18n.site` en `v: //unpkg.com/i18n.site` al via propra `npm` paknomo.

Nur uzu la neokupitan pakaĵnomon sur [npmjs.com](//npmjs.com)

Kiam vi eldonas surbaze de `npm` pako, **nepre uzu `//unpkg.com/`** kiel la prefikson de la `v:` . La kaŝmemoro `i18n.site` sub ĉi tiu prefiksa vojo `/.v` estis speciale optimumigita por ebligi ĝustatempan spektadon de novaj eldonoj.

Rulu `i18n.site --npm` aŭ `i18n.site -n` en `md` dosierujo por traduki kaj publikigi.

Se vi uzas kontinuan integrigan medion por publikigi, ne necesas instali ĝin `nodejs` Nur kopiu la ensalutintan kaj publikigitan permeson `~/.npmrc` al la medio!

Se vi modifas la pakaĵon en `v:` `ol.yml` , bonvolu **nepre forigi `.i18n/v/ol`** kaj poste publikigi ĝin.

##### Prokura Servilo Eldonita De npm

Se uzantoj en kontinenta Ĉinio renkontas retajn problemojn kaj ne kapablas publikigi la pakaĵon `npm` , ili povas agordi la mediovariablon `https_proxy` por agordi la prokurilon.

Supozante, ke via prokurservila haveno estas `7890` vi povas skribi:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Memgastigita Enhavo

Se vi volas memgastigi la enhavon, unue `md/.i18n/htm/ol.yml` kaj ŝanĝu `v: //unpkg.com/i18n.site` al via URL-prefikso, kiel `v: //i18n-v.xxx.com` .

Enigu la `md` kaj rulu

```
i18n.site --htm_conf ol --save
```

aŭ mallongigo

```
i18n.site -c ol -s
```

Poste, agordu la enhavon en la `md/out/ol/v` al la URL-prefiksa vojo fiksita en `v:` .

Fine, **agordu la kaŝmemortempon de la vojo finiĝanta en `/.v` al `1s`** , alie la lastatempe publikigita enhavo ne povas esti alirebla tuj.

La kaŝmemortempo por aliaj vojoj povas esti agordita al unu jaro aŭ pli por redukti nenecesajn petojn.

##### Gastigu Enhavon Al s3

Por memgastigi enhavon, krom uzi vian propran `CDN` , alia komuna opcio estas uzi `S3` +

Vi povas uzi [rclone](https://rclone.org) `S3` servilon, tiam raporti kaj modifi la skripton sube, kaj nur kopii pliigajn ŝanĝojn al `S3` ĉiufoje kiam vi publikigas.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Memoru agordi `CDN` por ke la kaŝmemortempo de la vojo finiĝanta per `/.v` estu `1s` , alie vi ne povos tuj aliri la ĵus eldonitan enhavon.

### Publikigi Retejon

La retejo povas esti deplojita ie ajn [github page](https://pages.github.com) kaj [cloudflare page](https://pages.cloudflare.com) estas bonaj elektoj.

Ĉar la retejo adoptas la arkitekturon de [unupaĝa aplikaĵo](https://developer.mozilla.org/docs/Glossary/SPA) , memoru reverki la URL-vojon kiu ne enhavas `. ` `index.html` .

La retpaĝa enirpaĝo nur devas esti deplojita unufoje, kaj ne necesas redeploji la retejan enirpaĝon por postaj enhavaj ĝisdatigoj.

#### Deploji Sur Github-Paĝo

Unue [alklaku ĉi github por krei organizon](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Poste kreu magazenon sub ĉi tiu `i18n-demo.github.io` (Bonvolu anstataŭigi `i18n-demo` per la nomo de la organizo, kiun vi kreis):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Publikante la enhavon en la antaŭa artikolo, ĝi estis `out/ol/htm` Bonvolu eniri ĉi tiun dosierujon kaj ruli :

```
ln -s index.html 404.html
```


`github page` ne subtenas reskribon de URL-vojoj, do `404.html` estas uzata anstataŭe.

Poste rulu la sekvan komandon en la `htm` (memoru anstataŭigi `i18n-demo/i18n-demo.github.io.git` per via propra magazena adreso) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Post puŝado de la kodo, atendu la disfaldiĝon de `github page` (kiel montrite sube), kaj tiam vi povas aliri ĝin.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Por demo-paĝo bonvolu vidi:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploji Sur cloudflare Paĝo

Kompare `github page` [cloudflare page](//pages.cloudflare.com) ĝi provizas vojon kaj estas pli amika al kontinenta Ĉinio kaj estas pli alirebla.

`cloudflare page` La deplojo estas kutime bazita sur la deplojo de `github page` supre.

Kreu projekton kaj ligu la `i18n-demo.github.io` magazenon.

La procezo estas montrita en la suba figuro:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Bonvolu `Add Account` por doni aliron al la `i18n-demo` .

Se vi ligis la magazenon de alia organizo, vi eble devos klaki `Add Account` por rajtigi ĝin antaŭ ol la nova organizo aperos.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Poste elektu `i18n-demo.github.io` , tiam alklaku `Begin setup` , kaj uzu la defaŭltajn valorojn por postaj paŝoj.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Post ligado por la unua fojo, vi devas atendi kelkajn minutojn antaŭ ol vi povas aliri ĝin.

Post deplojo, vi povas ligi propran domajnan nomon.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Post ligado de la kutima domajna nomo, bonvolu iri al la domajna nomo por agordi la padon reverkadon de la unupaĝa aplikaĵo, kiel montrite sube:

<img alt="" src="https://p.3ti.site/1721119320.avif">

La reguloj en la supra bildo estas kiel sekvas Bonvolu `i18n.site` en la unua linio per la domajna nomo ligita al vi.

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

Krome, bonvolu agordi la kaŝmemorregulojn, kiel montrite sube, kaj agordi la kaŝmemorodaŭron al unu monato.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Bonvolu ŝanĝi la domajnan nomon kongruan en la dua paŝo en la supra bildo al la domajna nomo, kiun vi ligis.

#### Optimumigo De Retejo-Deplojo en Kontinenta Ĉinio

Se vi volas akiri pli bonan alireblecon en la reto medio de kontinenta Ĉinio, bonvolu [registri domajnan nomon](//beian.aliyun.com) unue.

Tiam uzu `out/ol/htm` objektan stokadon de nubaj vendistoj en kontinenta `CDN` +

Vi povas uzi randan komputadon por reverki la vojon por adaptiĝi al unupaĝaj aplikoj, kiel [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Ĝi povas esti agordita tiel:

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

Ĉar `MX` kaj `CNAME` rekordoj ne povas kunekzisti, se vi volas ricevi retpoŝtojn pri domajna nomo, vi devas kunlabori kun la skripto por platigi `CNAME` en `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Krome, ĉar la transmaraj trafikaj kostoj de nubaj vendistoj en kontinenta Ĉinio estas relative multekostaj, se vi volas optimumigi kostojn, vi povas uzi [la senpagan geografian rezolucion de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) kaj la propran domajnan nomon de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kiel montrite sube) por atingi trafika deturniĝo──Trafiko en kontinenta Ĉinio Baidu Cloud `CDN` internacia trafiko iras cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ĉi tiuj disfaldaj optimumigaj solvoj estas pli kompleksaj kaj estos enkondukitaj en apartaj ĉapitroj estonte.

#### Ĝenerala Domajna Nomo Alidirekto

Se vi uzas `i18n.site` por generi retejon kiel vian ĉefan retejon, vi kutime bezonas agordi tutdomajnan alidirektilon, tio estas, alidirekti `*.xxx.com` (inkluzive `www.xxx.com` ) al `xxx.com` .

Ĉi tiu postulo povas esti atingita helpe de la `EdgeScript` de Alibaba Cloud `CDN` [angla dokumento](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Ĉina dokumento](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aldonu domajnan nomon en [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kaj direktu `*.xxx.com` domajnan nomon al Alibaba Cloud `CDN` `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ekzemple, la tutdomajna nomo alidirekta agordo de `*.i18n.site` en la supra bildo estas jena:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploji Per nginx

Bonvolu aldoni agordon similan al la sekva en `server` nginx `/root/i18n/md/out/ol/htm` bonvolu ŝanĝi ĝin al la vojo de via propra projekto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Dosierujo Strukturo

#### Publiko

Senmovaj dosieroj de la retejo, kiel `favicon.ico` `robots.txt` , ktp.

La ikondosieroj ĉi tie povas esti generitaj per [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Sub la dosierujo `.i18n` `i18n.site` agordaj dosieroj, traduka kaŝmemoro, ktp. Vidu la sekvan ĉapitron ["Agordo"](/i18n.site/conf) por detaloj.

#### Eo

Fontlingva dosierujo, responda `.i18n/conf.yml` `fromTo` `en` en la agorda dosiero

```yaml
i18n:
  fromTo:
    en: zh
```

Bonvolu raporti al la agordo de traduko [i18](/i18/use)

