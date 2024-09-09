# A Termék Jellemzői

## `i18` fordítás integrálva

A program beépített `i18` fordítással rendelkezik, lásd az [➔ `i18` dokumentumot](/i18) a konkrét felhasználáshoz.

## A böngésző nyelvének automatikus egyeztetése

A webhely alapértelmezett nyelve automatikusan megegyezik a böngésző nyelvével.

Miután a felhasználó manuálisan váltott nyelvet, a rendszer emlékezni fog a felhasználó választására.

Kapcsolódó kód: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobil eszközök adaptációja

A mobiltelefonon is tökéletes olvasási élmény.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> A frontend magas rendelkezésre állása

`i18n.site` alapértelmezés szerint publikálja a webhely tartalmát a `npmjs.com`-on, és a [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) és más `CDN`-eken keresztül tölti be az `npm`-on található tartalmakat.

Ennek alapján a szárazföldi Kínából származó tükörforrásokat adták hozzá, hogy a kínai felhasználók is stabil hozzáférést biztosítsanak, és **magas szintű előtér-elérhetőséget** érjenek el.

Az elv a következő: a kéréseket [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) fogja el, és ha a kérés sikertelen, más `CDN`-eken próbálkozik újra, adaptívan engedélyezve a leggyorsabban válaszoló forráshelyet alapértelmezett betöltési forrásként.

Kapcsolódó kód: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Egyoldalas alkalmazás, rendkívül gyors betöltéssel

A webhely egyoldalas alkalmazásarchitektúrát alkalmaz, oldalváltáskor nincs frissítés, és rendkívül gyors a betöltés.

## Olvasási élményre optimalizálva

### Jól megtervezett stílus

> Az egyszerűség szépsége tökéletesen értelmezhető ennek a weboldalnak a webdesignjában.
> Elhagyja a felesleges díszítést, és a tartalmat a legtisztább formában jeleníti meg.
> Mint egy szép vers, bár rövid, megérinti az emberek szívét.

<p style="text-align:right">── I18N.SITE szerző</p>

[➔ Kattintson ide a stílusok listájának megtekintéséhez](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

A fenti képen többnyelvű `RSS` előfizetés `i18n.site`-ról [inoreader.com](//inoreader.com)-on látható.

### Online betűtípusok betöltése, kínai nyelv támogatása

A weboldal alapértelmezés szerint [az Alimama kéttengelyes változó téglalap alakú betűtípusok](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) és más online betűtípusok használatát támogatja, hogy egységesítsék a különböző platformokon lévő felhasználók olvasási élményét.

Ugyanakkor a betöltési sebesség javítása érdekében a betűtípusokat a szógyakorisági statisztikák alapján szeletelik.

Kapcsolódó kód: [github.com/i18n-site/font](https://github.com/i18n-site/font)

### A felső navigáció automatikus elrejtése

Görgessen le, és a felső navigáció automatikusan elrejtődik.

Görgessen felfelé, és a rejtett navigáció újra megjelenik.

Ha az egér nem mozog, az elhalványodik.

A navigációs sáv jobb felső sarkában található egy teljes képernyős gomb, amely teljesen elmerülő dokumentumolvasási élményt nyújt.

### A jelenlegi fejezet szinkronizált kiemelése az összefoglalóban

Ha a jobb oldali tartalmat görgetik, a bal oldali vázlat egyidejűleg kiemeli az éppen olvasott fejezetet.

## Kiváló részletek

### Egérhatású effektek

Vidd az egeret a felső navigációs panel jobb oldalán található gomb fölé, hogy megtekinthesd a lenyűgöző speciális effektusokat.

### `404` kis lélek

A `404` oldalon egy aranyos kislélek lebeg, amely szemei az egér mozgásával követik, [➔ Kattintson ide a megtekintéséhez](/404)

## Forráskód nyílt

[A kód nyílt forrású](/i18n.site/src). Ha érdekel, hogy részt vegyél a fejlesztésben, kérlek, mutatkozz be a [levelezőlistán](//groups.google.com/u/2/g/i18n-site).

Sok apró, de nem sürgős követelmény van.