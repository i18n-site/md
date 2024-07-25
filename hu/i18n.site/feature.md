# A Termék Jellemzője

## Integrált Fordítás `I18`

A program `i18` fordítással rendelkezik, kérjük, lásd [a ➔ `i18`](/i18) a konkrét használathoz.

## A Böngésző Nyelvének Automatikus Egyeztetése

A webhely alapértelmezett nyelve automatikusan megegyezik a böngésző nyelvével.

Miután a felhasználó manuálisan váltott nyelvet, a rendszer emlékezni fog a felhasználó választására.

Kapcsolódó kód : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobil Terminál Adaptáció

A mobiltelefonon is tökéletes olvasási élmény.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Az előtérben magas rendelkezésre állás

`i18n.site` szerint a webhely tartalma `npmjs.com` helyen lesz közzétéve [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) és több `CDN` tartalom betöltve a `npm` !

Ennek alapján a szárazföldi Kínából származó tükörforrásokat adták hozzá, hogy a kínai felhasználók stabil hozzáférést biztosítsanak, és **magas szintű előtér-elérhetőséget** érjenek el.

Az elv a következő: elfogja a kérést a [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , ha a kérés sikertelen, próbálkozzon újra egy másik `CDN` -on, és adaptívan engedélyezze a leggyorsabban válaszoló kiindulási állomást alapértelmezett betöltési forrásként.

Kapcsolódó kód : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Egyoldalas Alkalmazás, Rendkívül Gyors Betöltés

A webhely egyoldalas alkalmazásarchitektúrát alkalmaz, oldalváltáskor nincs frissítés, és rendkívül gyors a betöltés.

## Olvasási Élményre Optimalizálva

### Jól Megtervezett Stílus

> Az egyszerűség szépsége tökéletesen értelmezhető ennek a weboldalnak a webdesignjában.
> Elhagyja a felesleges díszítést, és a tartalmat a legtisztább formában jeleníti meg.
> Mint egy szép vers, bár rövid, megérinti az emberek szívét.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kattintson ide a stílusok listájának megtekintéséhez](/i18n.site/md/styl) .

### Töltsön Be Online Betűtípusokat, Támogassa a Kínai Nyelvet

Alapértelmezés szerint [az Alimama kéttengelyes változó téglalap alakú betűtípusok](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) és más online betűtípusok engedélyezve vannak a weboldalon, hogy egységesítsék a felhasználók olvasási élményét a különböző platformokon.

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

### A Kis `404`

Egy aranyos kis lebegő szellem van az oldalon, a szeme mozog az egérrel, [➔ Kattintson ide a megtekintéséhez](/404) `404`

## Nyílt Forráskódú Kód

[A kód nyílt forráskódú](/i18n.site/src) Ha szeretne részt venni a fejlesztésben, kérjük, mutatkozzon be [a levelezőlistán](//groups.google.com/u/2/g/i18n-site) .

Sok apró követelmény van, amelyek fontosak, de nem sürgősek A fejlesztőcsapat az Ön által jól ismert technológiák alapján gyakorlati feladatokat oszt ki, és a követelmények hozzárendelése során javítja a fejlesztési dokumentumokat.

