# Installéieren &

## Configuratioun Token

Den `i18` Iwwersetzungsinstrument ass agebonnen, klickt `i18n.site` [hei fir op den `i18` Dokument ze referenzéieren fir den Zougangstoken ze konfiguréieren](/i18/use) .

## Installéieren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projet

Loosst eis mat engem Demo-Projet ufänken a léiere wéi Dir `i18n.site`

Mir klonen als éischt den Demo-Repository a lafen de Kommando wéi follegt:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Benotzer am Festland China kënnen:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Den Verzeechnesnumm vum Codebasisklon muss `md` sinn fir lokal Virschau mat `docker` ze erliichteren.

### Iwwersetzen

Gitt als éischt den `md` Verzeechnes a lafen `i18n.site` , wat `en` op `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nom Laafen ginn d'Iwwersetzungs- a Cache-Dateien generéiert. Denkt drun se an de Repository `git add . ` am `md`

### Lokal Virschau

Installéieren a `docker` ( `MAC` recommandéieren [orbstack](https://orbstack.dev) als Runtime vun `docker` ).

Da gitt de `docker` Verzeechnes a lafen `./up.sh` , a besicht dann [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Inhalt

`i18n.site` eng [eenzeg Säit Applikatiounsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) , an d'Websäit Entrée Säit an d'Websäit Inhalt ginn onofhängeg ofgesat.

Nodeems Dir déi uewe genannte Iwwersetzung ausgeführt hutt, ginn `htm` an `v` Verzeichnisser am `md/out/dev`

Hei, `dev` weist datt et baséiert op der `.i18n/htm/dev.yml` .

`dev` Ënnert Inhalt :

Ënnert `htm` Verzeechnes ass d'Entrée Säit vun der Websäit.

`v` De Verzeichnis enthält den Inhalt vun der Websäit mat der Versiounsnummer.

Lokal Virschau kopéiert all Dateien an den `out/dev/v/0.1.0`

Fir offiziell Verëffentlechung, geännert Dateien ginn an déi nei Versiounsnummerverzeechnes kopéiert.

#### Benotzt -c Fir d'Konfiguratiounsdatei Ze Spezifizéieren

Verschidde Konfiguratiounsdateien erstellen entspriechend Verzeichnisser ënner dem `out`

Zum Beispill `.i18n/htm/ol.yml` wäert e `out/ol` Verzeechnes erstellen.

`dev.yml` an `ol.yml` sinn d'Standardkonfiguratioun.

`dev` ass d'Ofkierzung vun `development` , déi d'Entwécklungsëmfeld duerstellt, gëtt fir lokal Virschau benotzt an ass och d'Standardkonfiguratiounsdatei.
`ol` ass d'Ofkierzung vun `online` , déi d'Online-Ëmfeld duerstellt, gëtt fir offiziell Verëffentlechung benotzt, an ass och d'Standardkonfiguratiounsdatei beim Verëffentlechen op `npm` mam Kommandozeilparameter `-n` .

Dir kënnt och aner Konfiguratiounsdateien erstellen Benotzt `--htm_conf`

zum Beispill:
```
i18n.site --htm_conf yourConfig --save
```

`--save` weist d'Verëffentlechungsnummer vun der Update un.

#### <a rel=id href="#npm" id="npm"></a> Verëffentlechen Inhalt op npmjs.com

Verëffentlechung [vum](/i18n.site/feature#ha) Inhalt op [npmjs.com](//npmjs.com)

##### npm login &

Installéiert `nodejs` benotzt `npm login` fir aloggen.

Edit `md/.i18n/htm/ol.yml` ännert `i18n.site` an `v: //unpkg.com/i18n.site` op Ären eegenen `npm` Package Numm.

Benotzt just den onbesetzten Package Numm op [npmjs.com](//npmjs.com)

`i18n.site` Verëffentlechung baséiert op `npm` `/.v` , **gitt sécher `//unpkg.com/`** als Präfix vum `v:` Wäert ze benotzen.

Run `i18n.site --npm` oder `i18n.site -n` am `md` fir ze iwwersetzen an ze publizéieren.

Wann Dir `~/.npmrc` kontinuéierleche Integratiounsëmfeld benotzt fir ze publizéieren, ass et net néideg et z'installéieren `nodejs`

Wann Dir de Packagenumm an `v:` `ol.yml` ännert, **gitt sécher `.i18n/v/ol` fir d'éischt ze läschen** an duerno ze publizéieren.

##### Proxy Server Publizéiert Vun npm

Wann d'Benotzer am Festland China Netzwierkproblemer begéinen an net fäeg sinn de `npm` ze verëffentlechen, kënnen se d'Ëmfeldvariabel `https_proxy` setzen fir de Proxy-Server ze konfiguréieren.

Unzehuelen datt Äre Proxy Server Hafen ass `7890` kënnt Dir schreiwen:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Self-Gehost Inhalt

Wann Dir den Inhalt selwer wëllt hosten, ännert d' `md/.i18n/htm/ol.yml` a ännert `v: //unpkg.com/i18n.site` op Ären URL Präfix, wéi `v: //i18n-v.xxx.com` .

Gitt `md` Verzeechnes a lafen

```
i18n.site --htm_conf ol --save
```

oder Ofkierzung

```
i18n.site -c ol -s
```

Konfiguréiert dann den Inhalt am Verzeechnes op den URL Präfix Wee, deen an `v:` `md/out/ol/v`

**Konfiguréiert endlech d'Cachezäit vum Wee `/.v` `1s`** , soss kann den nei verëffentlechten Inhalt net direkt zougänglech sinn.

D'Cachezäit fir aner Weeër kann op ee Joer oder méi gesat ginn fir onnéideg Ufroen ze reduzéieren.

##### Host Inhalt Op s3

Fir den Inhalt selwer ze hosten, zousätzlech fir Ären eegene Server `CDN` benotzen, ass eng aner gemeinsam Optioun + `S3`

Dir kënnt [rclone](https://rclone.org) `S3` Server benotzen, da kuckt op d'Skript hei ënnen, a kopéiert nëmmen inkrementell Ännerungen op `S3` all Kéier wann Dir publizéiert.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Denkt drun ze konfiguréieren `CDN` sou datt d'Cachezäit vum Wee deen op `/.v` endet `1s` ass, soss kënnt Dir net direkt op den nei verëffentlechten Inhalt kommen.

### Websäit Publizéieren

D'Websäit kann iwwerall agesat ginn [github page](https://pages.github.com) an [cloudflare page](https://pages.cloudflare.com) si gutt Choixen.

Well d'Websäit d'Architektur vun [enger eenzeger Säit Applikatioun](https://developer.mozilla.org/docs/Glossary/SPA) adoptéiert, erënnert Iech un den URL Wee deen net op `index.html` enthält `. `

D'Websäit Entrée Säit muss nëmmen eemol ofgebaut ginn, an et ass net néideg der Websäit Entrée Säit fir spéider Inhalt Aktualiséierungen nei z'installéieren.

#### Deploy Op github Säit

Als éischt [klickt github fir eng Organisatioun ze kreéieren](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Erstellt dann e Lager ënner dëser `i18n-demo.github.io` (ersetzt `i18n-demo` w.e.g. mam Numm vun der Organisatioun déi Dir erstallt hutt):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Wann Dir den Inhalt am viregten Artikel publizéiert, ass et generéiert ginn `out/ol/htm` Gitt w.e.g. dëse Verzeechnes a lafen :

```
ln -s index.html 404.html
```


Well `github page` Ënnerstëtzt net d'URL-Wee ëmschreiwen, also `404.html` gëtt amplaz benotzt.

Fuert dann de `i18n-demo/i18n-demo.github.io.git` Kommando : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nodeems Dir de Code gedréckt hutt, waart bis den Ofbau vun `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fir Demo Säit kuckt w.e.g.:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Op cloudflare Säit

[cloudflare page](//pages.cloudflare.com) Am Verglach mat `github page` ass et méi frëndlech fir Festland China an ass méi zougänglech ze benotzen.

`cloudflare page` D'Deployment baséiert normalerweis op der Deployment vun `github page` uewen.

Erstellt e Projet a bindt dat hei uewen `i18n-demo.github.io`

De Prozess gëtt an der Figur hei ënnen gewisen:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Klickt `Add Account` fir Zougang zu der `i18n-demo` ze ginn.

Wann Dir de Lager vun enger anerer Organisatioun gebonnen hutt, `Add Account` Dir vläicht zweemol klicken fir et zweemol ze autoriséieren ier déi nei Organisatioun ugewise gëtt.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Wielt `i18n-demo.github.io` Warehouse, klickt dann op `Begin setup` , a benotzt d'Standardwäerter fir spéider Schrëtt.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nodeems Dir fir d'éischte Kéier gebonnen hutt, musst Dir e puer Minutten waarden ier Dir Zougang kritt.

Nom Détachement kënnt Dir e personaliséierten Domain Numm binden.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nodeems Dir de personaliséierten Domain Numm gebonnen hutt, gitt w.e.g. op den Domain Numm fir de Wee ëmschreiwen vun der eenzeger Säit Applikatioun ze konfiguréieren, wéi hei ënnendrënner:

<img alt="" src="https://p.3ti.site/1721119320.avif">

D'Regelen op der Foto hei uewen sinn wéi follegt `i18n.site`

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

Zousätzlech, konfiguréiert w.e.g. d'Cache-Regelen, wéi hei ënnendrënner, a setzt d'Cache-Dauer op ee Mount.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ännert w.e.g. den Domain Numm, deen am zweete Schrëtt am Bild hei uewen passt, zum Domain Numm deen Dir gebonnen hutt.

#### Optimiséierung Vun Der Websäit Deployment Am Festland China

Wann Dir besser Accessibilitéitsleeschtungen am Netzëmfeld vum Festland China wëllt kréien, [registréiert w.e.g. als éischt en Domain Numm](//beian.aliyun.com) .

Dann, benotzt d'Objetlagerung vu Cloud Verkeefer `out/ol/htm` Festland `CDN` +

Dir kënnt Edge Computing benotze fir de Wee z'änneren fir un eenzel Säit Uwendungen z'adaptéieren, sou wéi [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Et kann esou konfiguréiert ginn:

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

Well `MX` records an `CNAME` records kënnen `A` coexistéieren, wann Dir wëllt Domain Numm Emails op der selwechter Zäit ze kréien, Dir musst `CNAME` der [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Zousätzlech, well d'auslännesch Verkéierskäschte vu Cloud Ubidder am Festland China relativ deier sinn, wann Dir d'Käschte optiméiere wëllt, kënnt Dir [d'gratis geographesch Opléisung vum Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) an den personaliséierten Domain Numm vum [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (wéi hei ënnendrënner) benotzen Verkéier Diversioun──Traffic am Festland China Baidu Cloud `CDN` international Verkéier geet cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Dës Détachement Optimisatiounsléisungen si méi komplex a ginn an Zukunft a separat Kapitelen agefouert.

#### Generesch Domain Numm Viruleedung

Wann Dir `i18n.site` fir eng Websäit als Är Haaptwebsäit ze generéieren, musst Dir normalerweis Pan-Domain Viruleedung konfiguréieren, dat heescht Redirect `*.xxx.com` (inklusiv `www.xxx.com` ) Zougang zu `xxx.com` .

Dës Fuerderung ka mat der Hëllef vum Alibaba Cloud's `EdgeScript` ( [Englesch Dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinesesch Dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) erreecht ginn `CDN`

Füügt en Domain Numm an [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) derbäi a weist `*.xxx.com` Domain Numm op Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Zum Beispill, d'Pan-Domain Numm Viruleedung Konfiguratioun `*.i18n.site` op der Foto hei uewen ass wéi follegt:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy Mat nginx

Füügt w.e.g. eng Konfiguratioun wéi déi folgend am `server` nginx `/root/i18n/md/out/ol/htm` w.e.g. op de Wee vun Ärem eegene Projet `out/ol/htm` änneren:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directory Struktur

#### Ëffentlech

Statesch Dateie vun der Websäit, wéi `favicon.ico` `robots.txt` , etc.

D'Ikondateien hei kënne generéiert ginn [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Ënnert dem Verzeechnes sinn d'Konfiguratiounsdateien vun `i18n.site` , Iwwersetzungscache, etc. Kuckt dat nächst Kapitel ["Configuratioun"](/i18n.site/conf) fir Detailer.

#### en

Quellsproochverzeechnes, entspriechend `.i18n/conf.yml` `fromTo` `en` an der Konfiguratiounsdatei

```yaml
i18n:
  fromTo:
    en: zh
```

Kuckt w.e.g. op d'Konfiguratioun vun der Iwwersetzung [i18](/i18/use)

