# A termék jellemzői

## `i18` fordítás integrálva

A program beépített `i18` fordítást tartalmaz, részletes használati útmutatóért lásd az [➔ `i18` dokumentumot](/i18).

## A böngésző nyelvének automatikus egyeztetése

A webhely alapértelmezett nyelve automatikusan illeszkedik a böngésző nyelvéhez.

Miután a felhasználó manuálisan nyelvet váltott, a rendszer megjegyzi a felhasználó választását.

Kapcsolódó kód: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobil eszközökhöz történő alkalmazkodás

Mobil eszközökön is tökéletes olvasási élményet nyújt.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Előtér magas elérhetősége

`i18n.site` alapértelmezés szerint a webhely tartalmát a `npmjs.com`-ra teszi közzé, és a tartalmat a [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) és más `CDN`-ek segítségével tölti be, amelyek a `npm`-on elérhetőek.

Ezen felül, kínai tükörforrásokat adtunk hozzá, hogy a kínai felhasználók számára is stabil hozzáférést biztosítsunk, elérve ezzel a **front-end magas elérhetőségét**.

Az elv: a [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) segítségével fogjuk a kéréseket, és ha egy kérés meghiúsul, más `CDN`-eken próbáljuk újra, és a leggyorsabban válaszoló forrást használjuk alapértelmezett betöltési forrásként.

Kapcsolódó kód: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Egyoldalas alkalmazás, gyors betöltés

A webhely egyoldalas alkalmazás架构 használ, oldalváltáskor nem történik frissítés, így gyorsan betölt.

## Olvashatóságra optimalizálva

### Rafinált stílus

> A egyszerűség szépsége tökéletesen megjelenik a weboldal tervezésében.
> Elhagyja a fölösleges díszítéseket, és a tartalmat a legtisztább formában mutatja be.
> Mint egy szép vers, rövid, de megérinti az emberek szívét.

<p style="text-align:right">── I18N.SITE szerzője</p>

[➔ Kattintson ide a stílusok megtekintéséhez](/i18n.site/md/styl).

### Online betűtípusok betöltése, kínai nyelv támogatása

Alapértelmezésben a [Alimama kéttengelyes változó téglalap alakú betűtípus](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) és [MiSans](https://hyperos.mi.com/font/zh/download/) online betűtípusok aktívak a weboldalon, hogy egységes olvasási élményt nyújtsanak különböző platformokon.

Ugyanakkor a betöltési sebesség javítása érdekében a betűtípusokat a szógyakorisági statisztikák alapján szeleteljük.

Kapcsolódó kód: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Felső navigáció automatikus elrejtése

Lenyílt görgoláskor a felső navigáció automatikusan elrejtődik.

Felfelé görgoláskor a rejtett navigáció újra megjelenik.

Ha az egér nem mozog, az elhalványodik.

A navigációs sáv jobb felső sarkában egy teljes képernyős gomb található, amely teljesen elmerülő dokumentumolvasási élményt nyújt.

### Az aktuális fejezet szinkronizált kiemelése az összefoglalóban

Ha a jobb oldali tartalom görgetése közben, a bal oldali összefoglaló szinkronizáltan kiemeli az aktuális fejezetet.

## Különleges részletek

### Egér effektusok

Vidd az egeret a felső navigációs panel jobb oldalán található gomb fölé, hogy meglásd a lenyűgöző effektusokat.

### `404` kis szellem

A `404` oldalon egy aranyos kis lebegő szellem található, amelynek szeme követi az egeret, [➔ kattintson ide a megtekintéséhez](/404)

## 代码开源

[A kód nyílt forráskód](/i18n.site/src). Ha érdekel a fejlesztés, köszönöm, ha bemutatkozol a [levelezőlistán](//groups.google.com/u/2/g/i18n-site).

Sok apró, de nem sürgős követelmény van.