# Settu Upp &

## Settu Upp

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Stillingartákn

`i18n.site` er með innbyggt `i18` þýðingartól Vinsamlega [smelltu hér til að vísa í `i18` skjalið til að stilla aðgangslykilinn](/i18/use) .

## Demo Verkefni

Byrjum á kynningarverkefni til að læra hvernig á að nota `i18n.site` .

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

Möppuheiti `demo.i18n.site` kóða grunnklónsins verður að vera `md` til að auðvelda staðbundna forskoðun með `docker` .

### Þýða

Fyrst skaltu slá inn `md` möppuna og keyra `i18n.site` , sem mun þýða `en` til `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Eftir keyrslu verða þýðingar- og skyndiminni skrár búnar til. Mundu að bæta þeim við geymsluna í `md` `git add . ` .

### Staðbundin Forskoðun

Settu upp og byrjaðu `docker` ( `MAC` notandi mælir með að nota [orbstack](https://orbstack.dev) sem keyrslutíma fyrir `docker` ).

Sláðu síðan inn `docker` möppuna og keyrðu `./up.sh` og farðu síðan á [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Birta Efni

`i18n.site` tekur upp [einnar síðu](https://developer.mozilla.org/docs/Glossary/SPA) forritaarkitektúr og inngangssíða vefsíðunnar og innihald vefsíðunnar eru sett upp sjálfstætt.

Eftir að hafa keyrt ofangreinda þýðingu verða möppur `htm` og `v` búnar til undir `md/out/dev` möppunni.

Hér þýðir `dev` að það er byggt á `.i18n/htm/dev.yml` stillingarskránni.

`dev` skrá :

`htm` skráin er inngangssíða vefsíðunnar.

`v` skráin inniheldur vefsíðuefni með útgáfunúmerum.

Local preview er sama um útgáfunúmerið og mun afrita allar skrár í `out/dev/v/0.1.0` möppuna.

Fyrir opinbera útgáfu verða breyttar skrár afritaðar í nýju útgáfunúmeraskrána.

#### Tilgreindu Stillingarskrá Með `-c`

Mismunandi stillingarskrár munu búa til samsvarandi möppur í `out` möppunni.

Til dæmis mun `.i18n/htm/ol.yml` búa til `out/ol` möppuna.

`dev.yml` og `ol.yml` eru sjálfgefnar stillingar.

`dev` er skammstöfunin á `development` , sem gefur til kynna þróunarumhverfið, notað fyrir staðbundna forskoðun, og er einnig sjálfgefna stillingarskráin.
`ol` er skammstöfunin á `online` , sem gefur til `-n` netumhverfið, sem er notað fyrir opinbera útgáfu `npm`

Þú getur líka búið til aðrar stillingarskrár. Notaðu `--htm_conf` á skipanalínunni til að tilgreina heiti stillingarskrárinnar:

til dæmis:
```
i18n.site --htm_conf yourConfig --save
```

Hér táknar `--save` útgáfunúmer uppfærslu útgáfunnar.

#### <a rel=id href="#npm" id="npm"></a> Birtu efni á npmjs.com

Að birta efni á [npmjs.com](//npmjs.com) er ráðlögð sjálfgefin lausn (sjá [Framhlið High Availability](/i18n.site/feature#ha) ).

##### npm login &

Settu upp `nodejs` , skráðu þig inn með `npm login` .

Breyttu `md/.i18n/htm/ol.yml` og breyttu gildinu [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) þitt eigið `npm` pakkanafn á !

Breyttu síðan `md/.i18n/htm/ol.package.json`

Keyrðu `i18n.site --npm` eða `i18n.site -n` í `md` möppunni til að þýða og birta.

Ef þú notar samfellt samþættingarumhverfi til að birta, þá er engin þörf á að setja upp `nodejs` , bara afritaðu innskráða og útgáfuheimild `~/.npmrc` í umhverfið.

Ef þú breytir pakkanafni `v:` á móti `ol.yml` , vinsamlegast **vertu viss um að eyða `.i18n/v/ol` fyrst** og birta það síðan.

##### Proxy Miðlari Gefinn Út Af npm

Ef notendur á meginlandi Kína lenda í netvandamálum og geta ekki birt `npm` pakka, geta þeir stillt umhverfisbreytuna `https_proxy` til að stilla proxy-þjóninn.

Miðað við að tengi fyrir proxy-miðlara sé `7890` geturðu skrifað:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Efni Sem Hýst Er Sjálft

Ef þú vilt hýsa efnið sjálft skaltu fyrst breyta `md/.i18n/htm/ol.yml` og breyta `v: //unpkg.com/i18n.site` í vefslóðarforskeyti þitt, eins og `v: //i18n-v.xxx.com` .

Sláðu inn `md` möppuna og keyrðu

```
i18n.site --htm_conf ol --save
```

eða skammstöfun

```
i18n.site -c ol -s
```

Stilltu síðan efnið í `md/out/ol/v` möppunni í slóð slóðarforskeytisins sem sett er í `v:` .

Að lokum **skaltu stilla skyndiminni tíma leiðarinnar sem endar á `/.v` til `1s`** , annars er ekki hægt að nálgast nýútgefið efni strax.

Hægt er að stilla skyndiminnistímann fyrir aðrar leiðir á eitt ár eða lengur til að draga úr óþarfa beiðnum.

##### Hýsa Efni Á s3

Til að hýsa efni sjálf, auk þess að nota þinn eigin netþjón, er `CDN` algengur valkostur að nota `S3` +

Þú getur notað [rclone](https://rclone.org) til að skrá þig inn á `S3` netþjóninn, vísað til og breytt eftirfarandi skriftu og afritað aðeins stigvaxandi breytingar í `S3` fyrir hverja útgáfu.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Mundu að stilla `CDN` þannig að skyndiminni slóðarinnar sem endar á `/.v` sé `1s` , annars er ekki hægt að nálgast nýútgefið efni strax.

### Birta Vefsíðu

Hægt er að nota vefsíðuna hvar sem er [github page](https://pages.github.com) og [cloudflare page](https://pages.cloudflare.com) eru góðir kostir.

Vegna þess að vefsíðan notar [forritaarkitektúr á einni síðu](https://developer.mozilla.org/docs/Glossary/SPA) , mundu að endurskrifa vefslóðir sem innihalda ekki `. ` á móti `index.html` .

Innsláttarsíðu vefsíðunnar þarf aðeins að dreifa einu sinni og það er engin þörf á að endursetja vefsíðufærslusíðuna fyrir síðari efnisuppfærslur.

#### Dreifa Á github Síðu

[Smelltu fyrst github til að búa til stofnun](https://github.com/account/organizations/new?plan=free) Eftirfarandi stofnunarheiti er `i18n-demo` sem dæmi.

Búðu síðan til vöruhús `i18n-demo.github.io` undir þessari stofnun (vinsamlegast skiptu `i18n-demo` út fyrir nafn stofnunarinnar sem þú bjóst til):

![](https://p.3ti.site/1721098657.avif)

Þegar þú birtir efnið í fyrri greininni hefur `out/ol/htm` verið búið til. Vinsamlegast sláðu inn þessa möppu og keyrðu :

```
ln -s index.html 404.html
```


Þar sem `github page` styður ekki endurskrifun vefslóða er `404.html` notað í staðinn.

Keyrðu síðan eftirfarandi skipun í `htm` möppunni (mundu að skipta út `i18n-demo/i18n-demo.github.io.git` fyrir þitt eigið vöruhús heimilisfang) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Eftir að hafa ýtt á kóðann, bíddu eftir að dreifing `github page` gangi vel (eins og sýnt er hér að neðan) áður en þú hefur aðgang að honum.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fyrir kynningarsíðu vinsamlegast sjá:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Dreifa Á cloudflare Síðu

[cloudflare page](//pages.cloudflare.com) Samanborið við `github page` veitir það endurskrifun á slóðum og er vingjarnlegra fyrir meginland Kína og er aðgengilegra.

Uppsetning `cloudflare page` er venjulega byggð á uppsetningu `github page` hér að ofan.

Búðu til verkefni og bindðu `i18n-demo.github.io` vöruhúsið hér að ofan.

Ferlið er sýnt á myndinni hér að neðan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Vinsamlegast smelltu á `Add Account` til að veita stofnun `i18n-demo` aðgang.

Ef þú hefur bundið vöruhús annarrar stofnunar gætirðu þurft að smella tvisvar á `Add Account` til að heimila tvisvar áður en nýja stofnunin birtist.

![](https://p.3ti.site/1721118306.avif)

Næst skaltu velja vöruhús `i18n-demo.github.io` , smelltu síðan á `Begin setup` og notaðu sjálfgefin gildi fyrir síðari skref.

![](https://p.3ti.site/1721118490.avif)

Eftir bindingu í fyrsta skipti þarftu að bíða í nokkrar mínútur áður en þú færð aðgang að henni.

Eftir uppsetningu geturðu bundið sérsniðið lén.

![](https://p.3ti.site/1721119459.avif)

Eftir að hafa bundið sérsniðna lénið, vinsamlegast farðu á lénið til að stilla slóð umritunar á einni síðu forritinu, eins og sýnt er hér að neðan:

![](https://p.3ti.site/1721119320.avif)

Reglurnar á myndinni hér að ofan eru sem hér segir Vinsamlega skiptu um `i18n.site` í fyrstu línunni fyrir neðan fyrir lénið sem þú hefur bundið.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Að auki, vinsamlegast stilltu skyndiminnisreglurnar, eins og sýnt er hér að neðan, og stilltu tíma skyndiminni á einn mánuð.

![](https://p.3ti.site/1721125111.avif)

Vinsamlegast breyttu samsvörun lénsins í öðru skrefi á myndinni hér að ofan í lénið sem þú bundnir.

#### Fínstilla Uppsetningu Vefsíðu Á Meginlandi Kína

Ef þú vilt ná betri frammistöðu aðgengis í netumhverfi meginlands Kína, vinsamlegast [skráðu lén](//beian.aliyun.com) fyrst.

Notaðu síðan hlutgeymslu skýjaframleiðenda á meginlandi + `CDN` Settu upp eftirfarandi efni `out/ol/htm` !

Þú getur notað brúntölvu til að endurskrifa leiðina til að laga sig að forritum á einni síðu. Til dæmis er hægt að stilla [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) á þennan hátt:

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
![](https://p.3ti.site/1721121273.avif)

Vegna þess að skrá `MX` og skrá `CNAME` geta ekki verið samhliða, ef þú vilt fá lénsnafnapóst á sama tíma, þarftu að vinna með [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) til að stig `CNAME` í færslu `A` .

Þar að auki, vegna þess að erlend umferðargjöld skýjaframleiðenda á meginlandi Kína eru tiltölulega dýr, ef þú vilt hámarka kostnað, geturðu notað [DNS landfræðilega upplausn Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) sérsniðið lén (eins og sýnt er hér að neðan) til að ná umferðarbreyting──Umferð á meginlandi Kína Baidu Cloud `CDN` , alþjóðleg umferð fer cloudflare .

![](https://p.3ti.site/1721119788.avif)

Þessar hagræðingarlausnir fyrir uppsetningu eru flóknari og verða kynntar í sérstökum köflum í framtíðinni.

#### Almenn Tilvísun Léns

Ef þú notar `i18n.site` til að búa til vefsíðu sem aðalvefsíðu þína þarftu venjulega að stilla tilvísun á léni, það er að beina aðgangi að `*.xxx.com` (þar á meðal `www.xxx.com` ) í `xxx.com` .

Þessari kröfu er hægt að ná með hjálp Alibaba Cloud `CDN` `EdgeScript` ( [enskt skjal](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kínverskt skjal](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Bættu við léninu í [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) og bentu léninu `*.xxx.com` `CNAME` í Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Til dæmis er samskipun lénsframvísunar á `*.i18n.site` á myndinni hér að ofan sem hér segir:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Dreifa Með nginx

Vinsamlegast bættu við stillingu sem líkist eftirfarandi í `server` málsgrein nginx Vinsamlegast breyttu `/root/i18n/md/out/ol/htm` í slóð þína eigin verkefnis `out/ol/htm` :

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

#### `public`

Statískar skrár vefsíðunnar, svo sem `favicon.ico` , `robots.txt` , osfrv.

Táknskrárnar hér er hægt að búa til með [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Undir `.i18n` möppunni eru stillingarskrár, þýðingarskyndiminni o.s.frv. af `i18n.site` Sjá næsta kafla [„Stillingar“](/i18n.site/conf) fyrir frekari upplýsingar.

#### `en`

Heimildamálsskrá, sem samsvarar `en` af `fromTo` í `.i18n/conf.yml` stillingarskrá

```yaml
i18n:
  fromTo:
    en: zh
```

Vinsamlegast skoðaðu uppsetningu þýðingar [i18](/i18/use)