# Telepítés és telepítés

## Beállítási token

`i18n.site` beépített `i18` fordítóeszközzel rendelkezik. [Kattintson ide a `i18` dokumentum megtekintéséhez a hozzáférési token beállításához](/i18/use) .

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo projekt

Kezdjük egy demo projekttel, hogy megtanuljuk az `i18n.site` használatát.

Először klónozzuk a demo tárat, és futtassuk a következő parancsot:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

A szárazföldi kínai felhasználók:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

A `demo.i18n.site` kód alapklónjának könyvtárnevének `md`-nek kell lennie, hogy könnyítsen a `docker`-vel való helyi előnézetre.

### Lefordítás

Először lépjen be a `md` könyvtárba, futtassa az `i18n.site`-et, amely lefordítja az `en` nyelvet `zh`-ra.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A futás után a fordítás és a gyorsítótár fájlok generálódnak. Ne felejtse el a `md` könyvtárban futtatni a `git add .` parancsot, hogy hozzáadja azokat a verziótárhoz.

### Helyi előnézet

Telepítse és indítsa el a `docker`-t (`MAC` felhasználók számára javasolt az [orbstack](https://orbstack.dev) használata a `docker` futási környezeteként).

Ezután lépjen be a `docker` könyvtárba, futtassa a `./up.sh` parancsot, majd látogasson el a [https://127.0.0.1](https://127.0.0.1) címre a helyi előnézethez.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tartalom közzététele

A `i18n.site` [egyoldalas alkalmazás architektúráját](https://developer.mozilla.org/docs/Glossary/SPA) alkalmazza, és a webhely belépési oldala és tartalma külön-külön kerül telepítésre.

A fenti fordítás futtatása után az `htm` és `v` könyvtárak a `md/out/dev` könyvtár alatt keletkeznek.

Itt a `dev` azt jelenti, hogy az `.i18n/htm/dev.yml` konfigurációs fájl alapján készült.

`dev` könyvtár:

A `htm` könyvtár a webhely belépési oldala.

A `v` könyvtár tartalmazza a webhely tartalmát verziószámokkal.

A helyi előnézetnél ne törődjön a verziószámokkal, az összes fájlt átmásolja a `out/dev/v/0.1.0` könyvtárba.

A hivatalos kiadásnál a módosított fájlokat az új verziószámú könyvtárba másolják.

#### A -c Használatával Adja Meg a Konfigurációs Fájlt

A különböző konfigurációs fájlok megfelelő könyvtárakat hoznak létre az `out` könyvtárban.

Például a `.i18n/htm/ol.yml` létrehozza az `out/ol` könyvtárat.

A `dev.yml` és `ol.yml` az alapértelmezett konfigurációk.

A `dev` a `development` rövidítése, amely a fejlesztői környezetet jelenti, a helyi előnézethez használatos, és egyben az alapértelmezett konfigurációs fájl is.
A `ol` az `online` rövidítése, amely a hivatalos kiadáshoz használt online környezetet jelöli. Ez egyben az alapértelmezett konfigurációs fájl is a `-n` opcióval `npm` parancssori paraméterek kiadásához.

Más konfigurációs fájlokat is létrehozhat. Használja a `--htm_conf` opciót a parancssorban a használni kívánt konfigurációs fájl megadásához:

például:
```
i18n.site --htm_conf yourConfig --save
```

Itt a `--save` a frissítés kiadásának verziószámát jelenti.

#### <a rel=id href="#npm" id="npm"></a> Tegye közzé a tartalmat az npmjs.com webhelyen

Az ajánlott [alapértelmezett](/1) megoldás a tartalom közzététele a [npmjs.com](/0)

##### npm login és közzététel

Telepítse a `nodejs`-t, és jelentkezzen be `npm login`-gal.

Szerkessze `md/.i18n/htm/ol.yml` és módosítsa `i18n.site` `v: //unpkg.com/i18n.site` -ben a saját `npm` csomagnevére.

Csak használja az üres csomagnevet a webhelyen [npmjs.com](//npmjs.com).

A `npm` csomagon alapuló közzétételkor **ügyeljen arra, hogy `//unpkg.com/` használjon** `/.v` `i18n.site` `v:` es előtagként.

Futtassa az `i18n.site --npm` vagy `i18n.site -n` parancsot a `md` könyvtárban a fordítás és közzétételhez.

Ha folyamatos integrációs környezetet használ a közzétételhez, nincs szükség a `nodejs` telepítésére. Csak másolja át a bejelentkezési és közzétételi engedélyeket a `~/.npmrc`-ből a környezetbe.

Ha módosítja az `v:`-et az `ol.yml`-ben a csomagnevet, **kérjük, először törölje a `.i18n/v/ol`-et** , majd tegye közzé.

##### npm közzétételének proxy kiszolgálója

Ha a szárazföldi kínai felhasználók hálózati problémákba ütköznek, és nem tudnak `npm` csomagot közzétenni, beállíthatják az `https_proxy` környezeti változót a proxykiszolgáló konfigurálásához.

Feltételezve, hogy a proxyszerver portja `7890` , a következőket írhatja:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Saját hosztolt tartalom

Ha saját maga szeretné tárolni a tartalmat, először szerkessze a `md/.i18n/htm/ol.yml`-et, és módosítsa a `v: //unpkg.com/i18n.site`-et az URL előtagra, például `v: //i18n-v.xxx.com`.

Írja be a `md` könyvtárat, és futtassa:

```
i18n.site --htm_conf ol --save
```

vagy rövidítve

```
i18n.site -c ol -s
```

Ezután állítsa be a `md/out/ol/v` könyvtár tartalmát az `v:`-ben beállított URL előtag elérési útjához.

Végül **állítsa be a `/.v` végződő útvonal gyorsítótár idejét `1s`-re** , különben az újonnan kiadott tartalom nem érhető el azonnal.

A többi útvonal gyorsítótárának ideje egy évre vagy többre állítható be a szükségtelen kérések csökkentése érdekében.

##### Tartalom tárolása az S3-ban

A tartalom saját üzemeltetéséhez `CDN` saját szerver használata mellett egy másik gyakori lehetőség az `S3` +

A [rclone](https://rclone.org) segítségével jelentkezzen be az `S3` szerverre, majd tekintse meg és módosítsa a következő szkriptet, és csak a növekményes módosításokat másolja az `S3`-ra minden kiadáshoz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne felejtse el a `CDN` beállítását, hogy az `/.v` végződő útvonal gyorsítótárideje `1s` legyen, különben az újonnan kiadott tartalom nem érhető el azonnal.

### Weboldal közzététele

A webhely bárhol telepíthető, [github page](https://pages.github.com) és [cloudflare page](https://pages.cloudflare.com) is jó választás.

Mivel a webhely [egyoldalas alkalmazás architektúráját](https://developer.mozilla.org/docs/Glossary/SPA) használja, ne felejtse el átírni azokat az URL útvonalakat, amelyek nem tartalmaznak `.`, az `index.html`-re.

A webhely belépési oldalát csak egyszer kell telepíteni, és nincs szükség a webhely belépési oldalának újratelepítésére a későbbi tartalomfrissítésekhez.

#### Github oldalon való telepítés

Először [kattintson ide a github szervezet létrehozásához](https://github.com/account/organizations/new?plan=free). A következő szervezet neve példaként `i18n-demo`.

Ezután hozza létre a `i18n-demo.github.io` raktárt ehhez a szervezethez (kérjük, cserélje ki `i18n-demo` a létrehozott szervezet nevére):

![](https://p.3ti.site/1721098657.avif)

Az előző cikkben szereplő tartalom közzétételekor az `out/ol/htm` keletkezett. Kérjük, lépjen be ebbe a könyvtárba, és futtassa:

```
ln -s index.html 404.html
```


Mivel a `github page` nem támogatja az URL útvonal átírását, helyette a `404.html` kerül felhasználásra.

Ezután futtassa a következő parancsot az `htm` könyvtárban (ne felejtse el lecserélni `i18n-demo/i18n-demo.github.io.git` a saját raktárcímére):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

A kód lenyomása után várja meg, amíg a `github page` telepítése sikeresen lefut (az alábbi ábra szerint), mielőtt hozzáférhetne.

<img src="//p.3ti.site/1721116586.avif" width="350px">

A bemutató oldalt lásd:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Cloudflare oldalon való telepítés

A `github page`-nél [cloudflare page](//pages.cloudflare.com) jobb útvonal átírását és a szárazföldi Kínával szemben barátságosabb elérhetőséget kínál, ezért ajánlott.

A `cloudflare page` telepítése általában a fenti `github page` telepítésén alapul.

Hozzon létre egy projektet, és kösse össze a fenti `i18n-demo.github.io` raktárt.

A folyamat az alábbi ábrán látható:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kattintson a `Add Account` gombra, hogy hozzáférést biztosítson az `i18n-demo` szervezethez.

Ha egy másik szervezet raktárát lekötötte, előfordulhat, hogy kétszer kell kattintania a `Add Account` gombra az engedélyezéshez, mielőtt az új szervezet megjelenik.

![](https://p.3ti.site/1721118306.avif)

Ezután válassza ki a `i18n-demo.github.io` raktárt, majd kattintson a `Begin setup` gombra, és használja az alapértelmezett értékeket a további lépésekhez.

![](https://p.3ti.site/1721118490.avif)

Az első bekötés után várnia kell néhány percet, mielőtt hozzáférhet.

A telepítés után egyéni tartománynevet köthet.

![](https://p.3ti.site/1721119459.avif)

Az egyéni tartománynév összerendelése után lépjen a tartománynévre, hogy az egyoldalas alkalmazás útvonal-átírását konfigurálja, az alábbiak szerint:

![](https://p.3ti.site/1721119320.avif)

A fenti képen az `i18n.site` a következők.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ezenkívül kérjük, konfigurálja a gyorsítótár szabályait az alábbiak szerint, és állítsa be a gyorsítótár időtartamát egy hónapra.

![](https://p.3ti.site/1721125111.avif)

Kérjük, változtassa meg a fenti kép második lépésében szereplő domain nevet a kötött domain névre.

#### A kínában való weboldal telepítésének optimalizálása

Ha jobb elérhetőséget szeretne elérni a szárazföldi kínai hálózati környezetben, először [regisztráljon egy domain nevet](//beian.aliyun.com).

Ezután használja a szárazföldi kínai felhőszolgáltatók objektumtárolását + `CDN`-t a `out/ol/htm` alatti tartalom telepítéséhez.

Az élszámítással átírhatja az elérési utat az egyoldalas alkalmazásokhoz való alkalmazkodáshoz. Például [a Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) a következőképpen konfigurálható:

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

Mivel a `MX` rekord és az `CNAME` rekord nem létezhet együtt, ha egyidejűleg szeretne domain névvel kapcsolatos e-maileket kapni, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) a `CNAME` szintű scripttel kell együttműködnie a `A` rekorddal.

Ezen túlmenően, mivel a szárazföldi Kínában a felhőszolgáltatók tengerentúli forgalmi díjai viszonylag magasak, a költségek optimalizálása érdekében használhatja a [Huawei Cloud DNS ingyenes földrajzi felbontását](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) és a [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) egyéni domainnevét (lásd az alábbi képet), hogy a forgalmat elossza ── a szárazföldi Kína forgalma a Baidu Cloud `CDN`-en keresztül, a nemzetközi forgalom pedig a Cloudflare-en.

![](https://p.3ti.site/1721119788.avif)

Ezek a telepítési optimalizálási megoldások viszonylag bonyolultak, és a jövőben külön fejezetben fogok részletesen bemutatni őket.

#### Pándomain átirányítás

Ha az `i18n.site` segítségével hoz létre egy webhelyet főként, általában szükséges a pándomain átirányítás beállítása, azaz a `*.xxx.com` (beleértve a `www.xxx.com`-ot is) elérést át kell irányítani az `xxx.com`-ra.

Ez az igény az Alibaba Cloud `CDN` `EdgeScript` segítségével valósítható meg ( [angol dokumentum](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kínai dokumentum](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Adja hozzá a domain nevet az [Alibaba Cloud CDN-hez](https://cdn.console.aliyun.com/domain/list), és irányítsa a `*.xxx.com` domaint az Alibaba Cloud `CDN` `CNAME`-jére.

![](https://p.3ti.site/1721122000.avif)

Például a fenti képen a `*.i18n.site` pándomain átirányítási konfiguráció a következőképpen néz ki:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Telepítés Nginx-sel

Kérjük, adjon hozzá a következő konfigurációt az nginx `server` szekciójához, ahol a `/root/i18n/md/out/ol/htm` helyett a saját projektje `out/ol/htm` útvonalát adja meg:

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

#### `public`

A webhely statikus fájljai, például `favicon.ico`, `robots.txt` stb.

Az itt található ikonfájlok a [realfavicongenerator.net](https://realfavicongenerator.net) segítségével generálhatók.

#### `.i18n`

A `.i18n` könyvtárban találhatók az `i18n.site` konfigurációs fájlok, fordítási gyorsítótárak stb., a részleteket a következő [„Konfiguráció”](/i18n.site/conf) fejezetben találhatók.

#### `en`

Forrásnyelvi könyvtár, az `en` megfelel a `.i18n/conf.yml` konfigurációs fájlban található `fromTo`-nak

```yaml
i18n:
  fromTo:
    en: zh
```

A fordítás konfigurációját lásd az [i18](/i18/use) oldalon.