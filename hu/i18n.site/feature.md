# A Termék Jellemzői

## `i18` Fordítás Integrálva

A program beépített `i18` fordítással rendelkezik, lásd [az ➔ `i18` dokumentumot](/i18) a konkrét felhasználáshoz.

## A Böngésző Nyelvének Automatikus Egyeztetése

A webhely alapértelmezett nyelve automatikusan megegyezik a böngésző nyelvével.

Miután a felhasználó manuálisan váltott nyelvet, a felhasználó választása megjegyzi.

Kapcsolódó kód : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobil Terminál Adaptáció

A mobiltelefonon is tökéletes olvasási élmény.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Az előtérben magas rendelkezésre állás

`i18n.site` alapértelmezés szerint `npmjs.com` -ben teszi közzé a webhely tartalmát [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) és `npm` ra betöltött további `CDN` tartalom segítségével.

Ennek alapján a szárazföldi Kínából származó tükörforrásokat adták hozzá, hogy a kínai felhasználók stabil hozzáférést biztosítsanak, és **magas szintű előtér-elérhetőséget** érjenek el.

Az elv a következő: elfogja a kéréseket [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) val, próbálja újra a sikertelen kéréseket más `CDN` , és adaptívan engedélyezze a leggyorsabban válaszoló forráshelyet alapértelmezett betöltési forrásként.

Kapcsolódó kód : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Egyoldalas Alkalmazás, Rendkívül Gyors Betöltés

A webhely egyoldalas alkalmazásarchitektúrát alkalmaz, oldalváltáskor nincs frissítés, és rendkívül gyors a betöltés.

## Olvasási Élményre Optimalizálva

### Jól Megtervezett Stílus

> Az egyszerűség szépsége tökéletesen értelmezhető ennek a weboldalnak a webdesignjában.
> Felhagy a felesleges díszítéssel, és a tartalmat a legtisztább formában mutatja be.
> Mint egy szép vers, bár rövid, megérinti az emberek szívét.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kattintson ide a stílusok listájának megtekintéséhez](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

A fenti képen `RSS` `i18n.site` [inoreader.com](//inoreader.com) látható.

### Töltsön Be Online Betűtípusokat, Támogassa a Kínai Nyelvet

Alapértelmezés szerint [az Alimama kéttengelyes változó téglalap alakú](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) és egyéb online betűtípusok engedélyezve vannak a weboldalon, hogy egységesítsék a felhasználók olvasási élményét a különböző platformokon.

Ugyanakkor a betöltési sebesség javítása érdekében a betűtípusokat a szógyakorisági statisztikák szerint szeleteljük.

Kapcsolódó kód : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### A Felső Navigáció Automatikusan Elrejtve

Görgessen le, és a felső navigáció automatikusan elrejti.

Görgessen felfelé, és újra megjelenik a rejtett navigáció.

Elhalványul, ha az egér nem mozog.

A navigációs sáv jobb felső sarkában található egy teljes képernyős gomb, amely magával ragadó dokumentumolvasási élményt nyújt.

### Az Aktuális Fejezet Szinkronizált Vázlatkiemelése

A jobb oldali tartalom görgetése során a bal oldali körvonal egyidejűleg kiemeli az éppen olvasott fejezetet.

## Klassz Részletek

### Egér Effektusok

Vidd az egeret a felső navigációs panel jobb oldalán található gomb fölé, hogy megtekinthesd a klassz speciális effektusokat.

### `404` Kis Szellem

A `404` oldalon van egy aranyos kis lebegő szellem, akinek az egérrel mozog a szeme, [➔ Kattints ide a megtekintéséhez](/404) ,

## Nyílt Forráskódú Kód

[A kód nyílt forráskódú](/i18n.site/c/src) Ha szeretne részt venni a fejlesztésben, kérjük, mutatkozzon be [a levelezőlistán](//groups.google.com/u/2/g/i18n-site) .

Sok apró követelmény van, amelyek fontosak, de nem sürgősek A fejlesztőcsapat az Ön által jól ismert technológiák alapján gyakorlati feladatokat oszt ki, és a követelmények hozzárendelése során javítja a fejlesztési dokumentumokat.