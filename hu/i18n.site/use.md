# Telepítse &

## Telepítés

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurációs Token

`i18n.site` beépített `i18` fordítóeszközzel rendelkezik. [Kattintson ide a `i18` dokumentum megtekintéséhez a hozzáférési token konfigurálásához](/i18/use) .

## Demo Projekt

Kezdjük egy demóprojekttel, hogy megtanuljuk `i18n.site` használatát.

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

A `demo.i18n.site` kód alapklónjának könyvtárnevének `md` kell lennie, hogy megkönnyítse a helyi előnézetet `docker` vel.

### Lefordítani

Először írja be a `md` könyvtárat, és futtassa `i18n.site` , amely lefordítja `en` t `zh` ra.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

A futás után a fordítás és a gyorsítótár fájlok generálódnak. Ne felejtse el hozzáadni őket a `md` `git add . ` .

### Helyi Előnézet

Telepítse és indítsa el `docker` ( `MAC` felhasználó javasolja [orbstack](https://orbstack.dev) használatát `docker` futási környezeteként).

Ezután lépjen be a `docker` könyvtárba, és futtassa `./up.sh` , majd látogasson el [https://127.0.0.1](https://127.0.0.1) a helyi előnézethez.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tartalom Közzététele

`i18n.site` [egyoldalas alkalmazásarchitektúrát](https://developer.mozilla.org/docs/Glossary/SPA) alkalmaz, és a webhely belépési oldala és a webhely tartalma egymástól függetlenül kerül telepítésre.

A fenti fordítás futtatása után az `htm` és `v` könyvtár a `md/out/dev` könyvtár alatt jön létre.

Itt `dev` azt jelenti, hogy az `.i18n/htm/dev.yml` konfigurációs fájl alapján készült.

`dev` könyvtár :

A `htm` könyvtár a webhely belépési oldala.

A `v` könyvtár tartalmazza a webhely tartalmát verziószámokkal.

A helyi előnézet nem törődik a verziószámmal, és az összes fájlt a `out/dev/v/0.1.0` könyvtárba másolja.

A hivatalos kiadáshoz a módosított fájlok az új verziószámú könyvtárba lesznek másolva.

#### Adja Meg a Konfigurációs Fájlt `-c` Val

A különböző konfigurációs fájlok megfelelő könyvtárakat hoznak létre a `out` könyvtárban.

Például `.i18n/htm/ol.yml` létrehozza az `out/ol` könyvtárat.

`dev.yml` és `ol.yml` az alapértelmezett konfigurációk.

`dev` az `development` rövidítése, amely a fejlesztői környezetet jelzi, a helyi előnézethez használatos, és egyben az alapértelmezett konfigurációs fájl is.
`ol` az `online` rövidítése, amely a hivatalos kiadáshoz használt online környezetet jelöli. Ez egyben az alapértelmezett konfigurációs fájl is `-n` `npm` ig terjedő parancssori paraméterek kiadásához.

Más konfigurációs fájlokat is létrehozhat. Használja `--htm_conf` a parancssorban a használni kívánt konfigurációs fájlnév megadásához:

például:
```
i18n.site --htm_conf yourConfig --save
```

Itt `--save` a frissítés kiadásának verziószámát jelenti.

#### <a rel=id href="#npm" id="npm"></a> Tegye közzé a tartalmat az npmjs.com webhelyen

Az ajánlott alapértelmezett megoldás a tartalom közzététele [a](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login &

Telepítse `nodejs` , jelentkezzen be `npm login` .

Szerkessze `md/.i18n/htm/ol.yml` [npmjs.com](//npmjs.com) változtassa meg az [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` -re a saját `npm` csomagnévként.

Ezután módosítsa `md/.i18n/htm/ol.package.json`

Futtassa `i18n.site --npm` vagy `i18n.site -n` a `md` könyvtárban a fordításhoz és közzétételhez.

Ha folyamatos integrációs környezetet használ a közzétételhez, akkor nem kell telepítenie `nodejs` , csak másolja be a bejelentkezett és közzétételi engedélyt `~/.npmrc` a környezetbe.

Ha módosítja az `v:` a `ol.yml` -ban csomagnevet, **kérjük, először törölje `.i18n/v/ol`** , majd tegye közzé.

##### Proxyszervert Az npm Tette Közzé

Ha a kínai szárazföldi felhasználók hálózati problémákba ütköznek, és nem tudnak `npm` csomagot közzétenni, beállíthatják az `https_proxy` környezeti változót a proxykiszolgáló konfigurálásához.

Feltételezve, hogy a proxyszerver portja `7890` , a következőket írhatja:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Saját Hosztolt Tartalom

Ha saját maga szeretné tárolni a tartalmat, először szerkessze `md/.i18n/htm/ol.yml` , és módosítsa `v: //unpkg.com/i18n.site` az URL-előtagra, például `v: //i18n-v.xxx.com` re.

Írja be a `md` könyvtárat, és futtassa

```
i18n.site --htm_conf ol --save
```

vagy rövidítése

```
i18n.site -c ol -s
```

Ezután állítsa be a `md/out/ol/v` könyvtár tartalmát az `v:` -ben beállított URL előtag elérési útjára.

Végül **állítsa be a `/.v` tól `1s` ig végződő útvonal gyorsítótár idejét** , különben az újonnan kiadott tartalom nem érhető el azonnal.

A többi útvonal gyorsítótárának ideje egy évre vagy többre állítható be a szükségtelen kérések csökkentése érdekében.

##### Tartalom Tárolása Az S3-Ban

A tartalom saját üzemeltetéséhez a saját szerver használata mellett egy másik gyakori lehetőség `CDN` `S3` +

[rclone](https://rclone.org) segítségével bejelentkezhet a `S3` szerverre, majd tekintse meg és módosítsa a következő szkriptet, és csak a növekményes módosításokat másolja `S3` -re minden kiadáshoz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ne felejtse el `CDN` úgy beállítani, hogy az `/.v` re végződő útvonal gyorsítótárideje `1s` legyen, különben az újonnan kiadott tartalom nem érhető el azonnal.

### Weboldal Közzététele

A webhely bárhol telepíthető [github page](https://pages.github.com) és [cloudflare page](https://pages.cloudflare.com) jó választás.

Mivel a webhely [egyoldalas alkalmazásarchitektúrát](https://developer.mozilla.org/docs/Glossary/SPA) használ, ne felejtse el átírni azokat az URL-útvonalakat, amelyek nem tartalmaznak `. ` -t `index.html` re.

A webhely belépési oldalát csak egyszer kell üzembe helyezni, és nincs szükség a webhely belépési oldalának újratelepítésére a későbbi tartalomfrissítésekhez.

#### Telepítés a github Oldalon

Először [kattintson github a szervezet létrehozásához](https://github.com/account/organizations/new?plan=free) . A következő szervezet neve példaként `i18n-demo` .

Ezután hozza létre a `i18n-demo.github.io` raktárt ehhez a szervezethez (kérjük, cserélje ki `i18n-demo` a létrehozott szervezet nevére):

![](https://p.3ti.site/1721098657.avif)

Az előző cikkben szereplő tartalom közzétételekor `out/ol/htm` keletkezett Kérjük, lépjen be ebbe a könyvtárba, és futtassa a :

```
ln -s index.html 404.html
```


Mivel `github page` nem támogatja az URL-útvonal átírását, helyette `404.html` kerül felhasználásra.

Ezután futtassa a következő parancsot a `htm` könyvtárban (ne felejtse el lecserélni `i18n-demo/i18n-demo.github.io.git` a saját raktárcímére) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

A kód lenyomása után várja meg, amíg a `github page` telepítése sikeresen lefut (az alább látható módon), mielőtt hozzáférhetne.

<img src="//p.3ti.site/1721116586.avif" width="350px">

A bemutató oldalt lásd:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Telepítés a cloudflare Oldalon

`github page` hoz [cloudflare page](//pages.cloudflare.com) átírja az útvonalat, barátságosabb a szárazföldi Kínával szemben, és jobban elérhető.

A `cloudflare page` telepítése általában a fenti `github page` telepítésén alapul.

Hozzon létre egy projektet, és kösse össze a fenti `i18n-demo.github.io` raktárt.

A folyamat az alábbi ábrán látható:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kattintson `Add Account` , hogy hozzáférést biztosítson az `i18n-demo` szervezethez.

Ha egy másik szervezet raktárát lekötötte, előfordulhat, hogy kétszer kell `Add Account` kattintania az engedélyezéshez, mielőtt az új szervezet megjelenik.

![](https://p.3ti.site/1721118306.avif)

Ezután válassza ki a `i18n-demo.github.io` raktárt, majd kattintson `Begin setup` , és használja az alapértelmezett értékeket a további lépésekhez.

![](https://p.3ti.site/1721118490.avif)

Az első bekötés után várnia kell néhány percet, mielőtt hozzáférhet.

A telepítés után egyéni tartománynevet köthet.

![](https://p.3ti.site/1721119459.avif)

Az egyéni tartománynév összerendelése után lépjen a tartománynévre az egyoldalas alkalmazás útvonal-átírásának konfigurálásához, az alábbiak szerint:

![](https://p.3ti.site/1721119320.avif)

A fenti képen a `i18n.site` a következők.

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

#### A Webhelyek Telepítésének Optimalizálása Kínában

Ha jobb akadálymentesítési teljesítményt szeretne elérni a szárazföldi kínai hálózati környezetben, először [regisztráljon egy domain nevet](//beian.aliyun.com) .

Ezután használja a szárazföldi kínai felhőszolgáltatók objektumtárolását + `CDN` Telepítse a következő tartalmat `out/ol/htm` .

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

Mivel a `MX` rekord és az `CNAME` rekord nem létezhet együtt, ha egyidejűleg szeretne domain névvel kapcsolatos e-maileket kapni, akkor a `CNAME` szintű scripttel kell [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) a `A` rekorddal.

Ezen túlmenően, mivel a szárazföldi Kínában a felhőszolgáltatók tengerentúli forgalmi díjai viszonylag drágák, ha optimalizálni szeretné a költségeket, használhatja [a Huawei DNS ingyenes földrajzi felbontását](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) és [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) egyéni domainnevét (lásd alább). forgalom elterelése──A forgalom a szárazföldi Kínában Baidu Cloud `CDN` , a nemzetközi forgalom megy cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ezek a telepítés-optimalizálási megoldások összetettebbek, és a jövőben külön fejezetekben kerülnek bemutatásra.

#### Általános Domain Név Átirányítás

Ha `i18n.site` használ egy webhely létrehozásához fő webhelyként, akkor általában be kell állítania a pándomain átirányítást, azaz át kell irányítania a hozzáférést `*.xxx.com` -re (beleértve `www.xxx.com` is) `xxx.com` -ra.

Ez a követelmény az Alibaba Cloud `CDN` `EdgeScript` ( [angol dokumentum](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kínai dokumentum](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) segítségével teljesíthető .

Adja hozzá a domain nevet [az Alibaba Cloudban CDN](https://cdn.console.aliyun.com/domain/list) és mutasson rá `*.xxx.com` `CNAME` az Alibaba Cloud `CDN` -ben.

![](https://p.3ti.site/1721122000.avif)

Például a fenti képen a `*.i18n.site` pándomainnév-átirányítási konfiguráció a következő:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Telepítés Nginx-Szel

Kérjük, adjon `out/ol/htm` `/root/i18n/md/out/ol/htm` , `server` következőhöz hasonló konfigurációt a nginx

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

A webhely statikus fájljai, például `favicon.ico` , `robots.txt` stb.

Az itt található ikonfájlok a [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

A `.i18n` könyvtár alatt találhatók az `i18n.site` konfigurációs fájlok, fordítási gyorsítótár stb.. A részleteket lásd a következő [„Konfiguráció”](/i18n.site/conf) fejezetben.

#### `en`

Forrásnyelvi könyvtár, amely megfelel `en` `.i18n/conf.yml` konfigurációs `fromTo`

```yaml
i18n:
  fromTo:
    en: zh
```

Kérjük, olvassa el a fordítás konfigurációját [i18](/i18/use)