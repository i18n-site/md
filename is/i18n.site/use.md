# Settu Upp &

## Stillingartákn

`i18n.site` Þýðingartólið `i18` er innbyggt, vinsamlegast [smelltu hér til að vísa í `i18` skjalið til að stilla aðgangslykilinn](/i18/use) .

## Settu Upp

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Verkefni

Byrjum á kynningarverkefni og lærum hvernig á að nota `i18n.site`

Við klónum fyrst kynningargeymsluna og keyrum skipunina sem hér segir:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Notendur á meginlandi Kína geta:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Möppuheiti kóðagrunnklónsins verður að vera `md` til að auðvelda staðbundna forskoðun með `docker` `demo.i18n.site`

### Þýða

Sláðu fyrst inn `md` og keyrðu `i18n.site` , sem mun þýða `en` í `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Eftir keyrslu verða `git add . ` og skyndiminni skrár búnar til `md`

### Staðbundin Forskoðun

Settu upp og `docker` ( `MAC` mæla með að nota [orbstack](https://orbstack.dev) sem keyrslutíma `docker` ).

Farðu síðan inn í `docker` og keyrðu `./up.sh` , og farðu síðan á [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Birta Efni

`i18n.site` Tekur upp [forritaarkitektúr á einni síðu](https://developer.mozilla.org/docs/Glossary/SPA) og inngangssíðan og innihald vefsíðunnar eru sett upp sjálfstætt.

Eftir að hafa keyrt ofangreinda þýðingu verða `htm` og `v` möppur búnar til í `md/out/dev`

Hér `dev` til kynna að það sé byggt á `.i18n/htm/dev.yml` .

`dev` Undir innihald :

`htm` möppunni er inngangssíða vefsins.

`v` inniheldur vefsíðuefni með útgáfunúmeri.

Local preview mun afrita allar skrár í `out/dev/v/0.1.0` óháð útgáfunúmerinu.

Fyrir opinbera útgáfu verða breyttar skrár afritaðar í nýju útgáfunúmeraskrána.

#### Notaðu -c Til Að Tilgreina Stillingarskrána

Mismunandi stillingarskrár búa til samsvarandi möppur undir `out`

Til dæmis mun `.i18n/htm/ol.yml` búa til `out/ol` möppu.

`dev.yml` og `ol.yml` eru sjálfgefnar stillingar.

`dev` er skammstöfunin `development` , sem táknar þróunarumhverfið, er notað fyrir staðbundna forskoðun og er einnig sjálfgefna stillingarskráin.
`ol` er skammstöfunin á `online` , sem táknar netumhverfið, er notað fyrir opinbera útgáfu og er einnig sjálfgefin stillingarskrá þegar birt er á `npm` með því að nota skipanalínubreytuna `-n` .

Þú getur líka búið til aðrar stillingarskrár. Notaðu `--htm_conf`

til dæmis:
```
i18n.site --htm_conf yourConfig --save
```

`--save` gefur til kynna útgáfunúmer uppfærslunnar.

#### <a rel=id href="#npm" id="npm"></a> Birtu efni á npmjs.com

Að birta efni á [npmjs.com](//npmjs.com) er ráðlögð sjálfgefin lausn (sjá [Framhlið High Availability](/i18n.site/feature#ha) ).

##### npm login &

Settu upp `nodejs` notaðu `npm login` til að skrá þig inn.

Breyttu `md/.i18n/htm/ol.yml` breyttu `i18n.site` í `v: //unpkg.com/i18n.site` í þitt eigið `npm` pakkanafn.

Notaðu bara óupptekna pakkanafnið á [npmjs.com](//npmjs.com)

Þegar þú birtir út frá `npm` -pakkanum, **vertu viss um að nota `//unpkg.com/`** sem forskeytið fyrir `v:` gildið. Skyndiminnistíminn `i18n.site` undir þessari forskeytisslóð `/.v` hefur verið sérstaklega fínstilltur til að hægt sé að skoða nýjar útgáfur.

Keyrðu `i18n.site --npm` eða `i18n.site -n` í `md` til að þýða og birta.

Ef þú notar samfellt samþættingarumhverfi til að birta, þá er engin þörf á að setja það upp `nodejs` Afritaðu bara innskráða og birta heimild `~/.npmrc` í umhverfið.

Ef þú breytir pakkanafninu í `v:` `ol.yml` , vinsamlegast **vertu viss um að eyða `.i18n/v/ol` fyrst** og birta það síðan.

##### Proxy Miðlari Gefinn Út Af npm

Ef notendur á meginlandi Kína lenda í netvandamálum og geta ekki birt `npm` , geta þeir stillt umhverfisbreytuna `https_proxy` til að stilla proxy-þjóninn.

Að því gefnu að tengi fyrir proxy-miðlara sé `7890` geturðu skrifað:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Efni Sem Hýst Er Sjálft

Ef þú vilt hýsa efnið sjálft `md/.i18n/htm/ol.yml` fyrst breyta og breyta `v: //unpkg.com/i18n.site` í vefslóðarforskeytið þitt, eins og `v: //i18n-v.xxx.com` !

Sláðu inn `md` og keyrðu

```
i18n.site --htm_conf ol --save
```

eða skammstöfun

```
i18n.site -c ol -s
```

Stilltu síðan efnið `v:` `md/out/ol/v`

Að lokum **skaltu stilla skyndiminnistíma slóðarinnar `/.v` endar á `1s`** , annars er ekki hægt að nálgast nýútgefið efni strax.

Hægt er að stilla skyndiminnistímann fyrir aðrar leiðir á eitt ár eða lengur til að draga úr óþarfa beiðnum.

##### Hýsa Efni Á s3

Til + hýsa efni, auk þess að nota þinn eigin netþjón, `CDN` annar algengur valkostur að nota `S3`

Þú getur notað [rclone](https://rclone.org) `S3` , vísað til og breytt handritinu hér að neðan og afritað aðeins stigvaxandi breytingar á `S3` í hvert sinn sem þú birtir.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Mundu að stilla `CDN` þannig að skyndiminni slóðarinnar sem endar á `/.v` sé `1s` , annars muntu ekki geta nálgast hið nýútkomna efni strax.

### Birta Vefsíðu

Hægt er að nota vefsíðuna hvar sem er [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) eru góðir kostir.

Vegna þess að vefsíðan tekur upp arkitektúr [eins síðu forrits](https://developer.mozilla.org/docs/Glossary/SPA) , mundu `index.html` endurskrifa vefslóðina sem inniheldur ekki `. `

Innsláttarsíðu vefsíðunnar þarf aðeins að dreifa einu sinni og það er engin þörf á að endursetja vefsíðufærslusíðuna fyrir síðari efnisuppfærslur.

#### Dreifa Á github Síðu

[Smelltu fyrst github til að búa til stofnun](https://github.com/account/organizations/new?plan=free) Eftirfarandi stofnunarheiti er `i18n-demo`

Búðu til vöruhús undir þessari `i18n-demo.github.io` (Vinsamlegast skiptu um `i18n-demo` með nafni fyrirtækisins sem þú bjóst til):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Þegar þú birtir efnið í fyrri greininni hefur það verið búið til `out/ol/htm` Vinsamlegast sláðu inn þessa möppu og keyrðu :

```
ln -s index.html 404.html
```


Vegna þess að `github page` styður ekki endurskrifun vefslóða, þannig að `404.html` er notað í staðinn.

Keyrðu síðan `i18n-demo/i18n-demo.github.io.git` skipun : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Eftir að hafa ýtt á kóðann, bíddu eftir að dreifing á `github page` gangi upp (eins og sýnt er hér að neðan) og þá geturðu fengið aðgang að honum.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fyrir kynningarsíðu vinsamlegast sjá:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Dreifa Á cloudflare Síðu

[cloudflare page](//pages.cloudflare.com) Samanborið við `github page` , það veitir endurskrifun á slóðum og er vingjarnlegra fyrir meginland Kína og er aðgengilegra.

`cloudflare page` Uppsetningin er venjulega byggð á uppsetningu `github page` hér að ofan.

Búðu til verkefni og bindðu vöruhúsið að ofan `i18n-demo.github.io`

Ferlið er sýnt á myndinni hér að neðan:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Vinsamlegast smelltu `Add Account` til að veita aðgang að `i18n-demo` samtökunum.

Ef þú hefur bundið vöruhús annarrar stofnunar gætirðu þurft `Add Account` smella tvisvar til að heimila það tvisvar áður en nýja stofnunin verður birt.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Veldu `i18n-demo.github.io` Vöruhús, smelltu síðan á `Begin setup` og notaðu sjálfgefin gildi fyrir síðari skref.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Eftir bindingu í fyrsta skipti þarftu að bíða í nokkrar mínútur áður en þú færð aðgang að henni.

Eftir uppsetningu geturðu bundið sérsniðið lén.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Eftir að hafa bundið sérsniðna lénið, vinsamlegast farðu á lénið til að stilla slóð umritunar á einni síðu forritinu, eins og sýnt er hér að neðan:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Reglurnar á myndinni hér að ofan eru sem hér segir `i18n.site`

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

Að auki, vinsamlegast stilltu skyndiminnisreglurnar, eins og sýnt er hér að neðan, og stilltu tíma skyndiminni á einn mánuð.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vinsamlegast breyttu samsvörun lénsins í öðru skrefi á myndinni hér að ofan í lénið sem þú bundnir.

#### Fínstilla Uppsetningu Vefsíðu Á Meginlandi Kína

Ef þú vilt ná betri frammistöðu aðgengis í netumhverfi meginlands Kína, vinsamlegast [skráðu lén](//beian.aliyun.com) fyrst.

Notaðu síðan `out/ol/htm` skýjaframleiðenda á meginlandi `CDN` +

Þú getur notað brúntölvu til að endurskrifa leiðina til að laga sig að forritum á einni síðu, eins og [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Vegna þess að `MX` færslur og `CNAME` færslur geta ekki verið samhliða, ef þú vilt fá lénsnafnapóst á sama tíma, þarftu að vinna með skriftinni til að fletja `CNAME` inn í `A` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Þar að auki, vegna þess að erlend umferðargjöld skýjaframleiðenda á meginlandi Kína eru tiltölulega dýr, ef þú vilt hagræða kostnað, geturðu notað [ókeypis landfræðilega upplausn Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) sérsniðið lén (eins og sýnt er hér að neðan) til að ná umferðarbreyting──Umferð á meginlandi Kína Baidu Cloud `CDN` alþjóðleg umferð fer cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Þessar hagræðingarlausnir fyrir uppsetningu eru flóknari og verða kynntar í sérstökum köflum í framtíðinni.

#### Almenn Tilvísun Léns

Ef þú notar `i18n.site` að búa til vefsíðu sem aðalvefsíðu þína þarftu venjulega að stilla tilvísun á léni, það er að beina `*.xxx.com` (þar á meðal `www.xxx.com` ) aðgang að `xxx.com` .

Þessari kröfu er hægt að ná með hjálp Alibaba Cloud `CDN` `EdgeScript` ( [enskt skjal](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Kínverskt skjal](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Bættu við léni í [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og bendi `*.xxx.com` á `CNAME` Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Til dæmis er samskipun lénsins á `*.i18n.site` hér að ofan sem hér segir:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Dreifa Með nginx

Vinsamlegast bættu við stillingu sem líkist eftirfarandi í `server` nginx þar sem `/root/i18n/md/out/ol/htm` vinsamlegast breyttu því í slóð eigin verkefnis `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Uppbygging Skráa

#### Almennings

Statískar skrár vefsíðunnar, svo sem `favicon.ico` `robots.txt` , osfrv.

Táknskrárnar hér er hægt að búa til með [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Undir möppunni eru stillingarskrár `i18n.site` , þýðingarskyndiminni osfrv. Sjá næsta kafla ["Stillingar"](/i18n.site/conf) fyrir nánari upplýsingar.

#### en

Heimildamálsskrá, sem `.i18n/conf.yml` `fromTo` `en` í stillingarskránni

```yaml
i18n:
  fromTo:
    en: zh
```

Vinsamlegast skoðaðu uppsetningu þýðingar [i18](/i18/use)

