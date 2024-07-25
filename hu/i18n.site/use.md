# Telepítse &

## Konfigurációs Token

`i18n.site` `i18` [`i18`](/i18/use)

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projekt

Kezdjük egy demóprojekttel, és tanuljuk meg a használatát `i18n.site`

Először klónozzuk a demótárat, és futtassuk a parancsot a következőképpen:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

A szárazföldi kínai felhasználók:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

A kód alapklónjának könyvtárnevének `md` -nek kell lennie `demo.i18n.site` hogy megkönnyítse a helyi előnézetet `docker` segítségével.

### Fordít

Először lépjen be a `md` könyvtárba, és futtassa `i18n.site` , amely `en` -t `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A futás után `git add . ` fordítás és a gyorsítótár fájlokat generál `md`

### Helyi Előnézet

`MAC` és `docker` [orbstack](https://orbstack.dev) `docker`

Ezután [https://127.0.0.1](https://127.0.0.1) `./up.sh` a `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tartalom Közzététele

`i18n.site` [alkalmazásarchitektúrát](https://developer.mozilla.org/docs/Glossary/SPA) alkalmaz, és a webhely belépési oldala és a webhely tartalma egymástól függetlenül kerül telepítésre.

A fenti fordítás futtatása után `htm` és `v` könyvtárak jönnek létre a `md/out/dev`

Itt `dev` azt jelzi, hogy a `.i18n/htm/dev.yml` fájl alapján készült.

: tartalom alatt `dev`

A címtár alatt `htm` a weboldal belépési oldala.

A `v` tartalmazza a weboldal tartalmát verziószámmal.

A helyi előnézet az összes fájlt a `out/dev/v/0.1.0` könyvtárba másolja, a verziószámtól függetlenül.

A hivatalos kiadáshoz a módosított fájlok az új verziószámú könyvtárba lesznek másolva.

#### A -c Használatával Adja Meg a Konfigurációs Fájlt

A különböző konfigurációs fájlok megfelelő könyvtárakat hoznak létre a `out`

Például `.i18n/htm/ol.yml` létrehoz egy `out/ol` könyvtárat.

`dev.yml` `ol.yml` az alapértelmezett konfigurációk.

A `development` rövidítése, amely a fejlesztői környezetet jelöli, a helyi előnézethez használatos, és egyben az alapértelmezett konfigurációs fájl `dev` .
A `online` rövidítése, amely az online környezetet jelöli, hivatalos kiadáshoz használatos, és egyben az alapértelmezett konfigurációs fájl is `ol` amikor közzéteszed a `npm` z) `-n` parancssori paramétert.

Más konfigurációs fájlokat is létrehozhat a parancssorban a `--htm_conf`

például:
```
i18n.site --htm_conf yourConfig --save
```

`--save` jelöli a frissítés verziószámát.

#### <a rel=id href="#npm" id="npm"></a> Tegye közzé a tartalmat az npmjs.com webhelyen

Az ajánlott [alapértelmezett](/i18n.site/feature#ha) megoldás a tartalom közzététele a [npmjs.com](//npmjs.com)

##### npm login & Kiadás

Telepítse `nodejs` a `npm login` gombbal jelentkezzen be.

Szerkesztés `md/.i18n/htm/ol.yml` módosítsa `i18n.site` a `v: //unpkg.com/i18n.site` -ben a sajátjára `npm` csomagnév.

Csak használja az üres csomagnevet a webhelyen [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `v:` `npm` `i18n.site` `/.v`

A fordításhoz és közzétételhez futtassa `i18n.site --npm` vagy `i18n.site -n` a `md`

Ha folyamatos integrációs környezetet használ a közzétételhez, akkor nem kell telepítenie `nodejs` Csak másolja be a bejelentkezett és közzétett engedélyt `~/.npmrc` a környezetbe.

Ha módosítja a csomag nevét a `v:` `ol.yml` , kérjük **, először törölje `.i18n/v/ol`** , majd tegye közzé.

##### Proxyszervert Az npm Tette Közzé

Ha a kínai szárazföldi felhasználók hálózati problémákba ütköznek, és nem `https_proxy` közzétenni a `npm`

Feltételezve, hogy a proxykiszolgáló portja `7890` következőket írhatja:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Saját Hosztolt Tartalom

Ha önállóan szeretné tárolni a tartalmat, először `v: //i18n-v.xxx.com` `v: //unpkg.com/i18n.site` `md/.i18n/htm/ol.yml`

Lépjen be a `md` könyvtárba, és futtassa

```
i18n.site --htm_conf ol --save
```

vagy rövidítése

```
i18n.site -c ol -s
```

Ezután állítsa be a `md/out/ol/v` könyvtár tartalmát a `v:` -ben beállított URL-előtag elérési útjára.

Végül **állítsa be a `1s` `/.v` végződő elérési út gyorsítótár idejét** , ellenkező esetben az újonnan kiadott tartalom nem érhető el azonnal.

A többi útvonal gyorsítótárának ideje egy évre vagy többre állítható be a szükségtelen kérések csökkentése érdekében.

##### Tartalom Tárolása Az S3-Ban

A saját szerver használata mellett egy másik gyakori lehetőség `CDN` + `S3`

Használhatja [rclone](https://rclone.org) `S3` szervert, majd tekintse meg és módosítsa az alábbi szkriptet, és minden közzétételkor csak a növekményes módosításokat másolja `S3` -be.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne felejtse el beállítani `CDN` hogy a `/.v` -re végződő elérési út gyorsítótárának ideje `1s` legyen, különben nem tud majd azonnal hozzáférni az újonnan kiadott tartalomhoz.

### Weboldal Közzététele

A webhely bárhol telepíthető [github page](https://pages.github.com) és [cloudflare page](https://pages.cloudflare.com) jó választás.

Mivel a webhely [egy egyoldalas alkalmazás](https://developer.mozilla.org/docs/Glossary/SPA) architektúráját alkalmazza, ne felejtse el átírni az URL elérési útját, amely nem tartalmazza a következőt `. ` `index.html` !

A webhely belépési oldalát csak egyszer kell üzembe helyezni, és nincs szükség a webhely belépési oldalának újratelepítésére a későbbi tartalomfrissítésekhez.

#### Telepítés a github Oldalon

Először [kattintson github a szervezet létrehozásához](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Ezután hozzon létre egy raktárt a szervezet alatt `i18n-demo.github.io` Kérjük, cserélje ki `i18n-demo` a létrehozott szervezet nevére):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Az előző cikkben szereplő tartalom közzétételekor az létrejött `out/ol/htm` Kérjük, lépjen be ebbe a könyvtárba, és futtassa :

```
ln -s index.html 404.html
```


Mivel `404.html` `github page`

`i18n-demo/i18n-demo.github.io.git` futtassa a következő parancsot : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

A kód lenyomása után várja meg, amíg a `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

A bemutató oldalért lásd:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Telepítés a cloudflare Oldalon

Összehasonlítva `github page` [cloudflare page](//pages.cloudflare.com)

A telepítés `cloudflare page` a fenti `github page` telepítésén alapul.

Hozzon létre egy projektet, és kösse össze a fenti raktárt `i18n-demo.github.io`

A folyamat az alábbi ábrán látható:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Kattintson a gombra `Add Account` hogy hozzáférést biztosítson a `i18n-demo` .

Ha egy másik szervezet raktárát lekötötte, előfordulhat, hogy kétszer kell `Add Account` az engedélyezéshez, mielőtt az új szervezet megjelenik.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ezután válassza `i18n-demo.github.io` Raktár lehetőséget, majd kattintson `Begin setup` gombra, és használja az alapértelmezett értékeket a további lépésekhez.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Az első bekötés után várnia kell néhány percet, mielőtt hozzáférhet.

A telepítés után egyéni tartománynevet köthet.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Az egyéni tartománynév összerendelése után lépjen a tartománynévre az egyoldalas alkalmazás útvonal-újraírásának konfigurálásához, az alábbiak szerint:

<img alt="" src="https://p.3ti.site/1721119320.avif">

A fenti képen látható `i18n.site` a következők.

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

Ezenkívül, kérjük, állítsa be a gyorsítótár szabályait az alábbiak szerint, és állítsa be a gyorsítótár időtartamát egy hónapra.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Kérjük, változtassa meg a fenti kép második lépésében szereplő domain nevet a kötött domain névre.

#### A Webhelyek Telepítésének Optimalizálása Kínában

Ha jobb akadálymentesítési teljesítményt szeretne elérni a szárazföldi kínai hálózati környezetben, először [regisztráljon egy domain nevet](//beian.aliyun.com) .

Ezután használja `CDN` szárazföldi kínai felhőszolgáltatók objektumtárolóját + Telepítse `out/ol/htm` következő tartalmat!

A szélső számítástechnika segítségével átírhatja az elérési utat az egyoldalas alkalmazásokhoz, például [a Baidu Smart Cloudhoz `CDN`](//cloud.baidu.com/product/cdn.html) A következőképpen konfigurálható:

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

`MX` a rekordok és `CNAME` rekordok nem létezhetnek egymás mellett, ha egyszerre szeretne tartománynévvel kapcsolatos e-maileket kapni, együttműködnie kell a [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) , hogy `CNAME` `A` rekord.

Ezen túlmenően, mivel a szárazföldi Kínában a felhőszolgáltatók tengerentúli forgalmi díjai viszonylag drágák, ha optimalizálni szeretné a költségeket, használhatja [a Huawei DNS ingyenes földrajzi felbontását](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) és [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) egyéni domainnevét (lásd alább). forgalom elterelése──Kína szárazföldi forgalmát Baidu Cloud `CDN` nemzetközi forgalom megy cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ezek a telepítés-optimalizálási megoldások összetettebbek, és a jövőben külön fejezetekben kerülnek bemutatásra.

#### Általános Domain Név Átirányítás

`www.xxx.com` fő `xxx.com` `*.xxx.com` `i18n.site`

Ez a követelmény az Alibaba Cloud `EdgeScript` ( [angol dokumentum](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kínai dokumentum](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) segítségével teljesíthető `CDN`

Adjon hozzá egy domain nevet [az Alibaba CDN](https://cdn.console.aliyun.com/domain/list) , és mutasson `*.xxx.com` domain névvel az Alibaba Cloud `CDN` `CNAME` nevére.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Például a fenti képen `*.i18n.site` pándomainnév-átirányítási konfiguráció a következő:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Telepítés Nginx-Szel

Kérjük, adjon hozzá egy, a következőhöz hasonló konfigurációt `server` nginx ahol `/root/i18n/md/out/ol/htm` kérjük módosítsa a saját projektje elérési útjára `out/ol/htm` !

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Címtárszerkezet

#### Nyilvános

A webhely statikus fájljai, például `favicon.ico` `robots.txt` stb.

Az itt található ikonfájlok a [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

A könyvtár alatt `i18n.site` konfigurációs fájljai, a fordítási [gyorsítótár](/i18n.site/conf) stb `.i18n`

#### Hu

Forrásnyelvi könyvtár, amely megfelel a konfigurációs fájl `fromTo` `en` `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Kérjük, olvassa el a fordítás konfigurációját [i18](/i18/use)

