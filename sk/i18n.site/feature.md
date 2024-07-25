# Vlastnosť Produktu

## Integrovaný `I18`

Program má `i18` preklad, pozrite si [➔ `i18`](/i18) pre konkrétne použitie.

## Automaticky Prispôsobiť Jazyk Prehliadača

Predvolený jazyk webovej stránky bude automaticky zodpovedať jazyku prehliadača.

Keď používateľ manuálne prepne jazyky, výber používateľa sa zapamätá.

Súvisiaci [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Prispôsobenie Mobilného Terminálu

Dokonalý zážitok z čítania je aj na mobilnom telefóne.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end vysoká dostupnosť

`i18n.site` `CDN` predvolenom `npm` bude obsah stránky publikovaný na `npmjs.com` , s [unpkg.com](//unpkg.com) [jsdelivr.com](//jsdelivr.com)

Na tomto základe boli pridané zrkadlové zdroje z pevninskej Číny, aby čínski používatelia mali stabilný prístup a dosiahli **vysokú dostupnosť front-endu** .

Princíp je: zachyťte požiadavku pomocou [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , ak požiadavka zlyhá, skúste to znova na inom `CDN` a adaptívne povoľte najrýchlejšie reagujúcu pôvodnú stanicu ako predvolený zdroj načítania.

Súvisiaci [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Jednostránková Aplikácia, Extrémne Rýchle Načítanie

Web využíva architektúru jednostránkovej aplikácie bez obnovovania pri prepínaní stránok a extrémne rýchle načítanie.

## Optimalizované Pre Zážitok Z Čítania

### Dobre Navrhnutý Štýl

> Krásu jednoduchosti dokonale vystihuje webový dizajn tejto webovej stránky.
> Opúšťa zbytočnú dekoráciu a prezentuje obsah v jeho najčistejšej podobe.
> Ako krásna báseň, hoci je krátka, dotýka sa ľudských sŕdc.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kliknutím sem zobrazíte zoznam štýlov](/i18n.site/md/styl) .

### Načítajte Online Písma, Podporujte Čínštinu

V predvolenom nastavení sú na webovej stránke povolené [dvojosové variabilné obdĺžnikové písma Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) a ďalšie online písma, aby sa zjednotil zážitok používateľov na rôznych platformách.

Zároveň, aby sa zlepšila rýchlosť načítania, písma sú rozdelené na plátky podľa štatistík frekvencie slov.

Súvisiaci [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Horná Navigácia Je Automaticky Skrytá

Prejdite nadol a horná navigácia sa automaticky skryje.

Prejdite nahor a znova sa zobrazí skrytá navigácia.

Zhasne, keď sa myš nepohybuje.

V pravom hornom rohu navigačného panela sa nachádza tlačidlo na celú obrazovku, ktoré vytvára pohlcujúci zážitok z čítania dokumentov.

### Synchronizované Zvýraznenie Obrysu Aktuálnej Kapitoly

Pri posúvaní obsahu vpravo obrys vľavo súčasne zvýrazní práve čítanú kapitolu.

## Cool Detaily

### Efekty Myši

Umiestnite kurzor myši na tlačidlo na pravej strane hornej navigácie, aby ste videli skvelé špeciálne efekty.

### Malý `404`

Na `404` je malý roztomilý plávajúci duch, jeho oči sa budú pohybovať pomocou myši, [➔ Kliknutím sem zobrazíte](/404) ,

## Kód Open Source

[Kód je open source](/i18n.site/src) Ak máte záujem podieľať sa na vývoji, predstavte sa v [mailing listu](//groups.google.com/u/2/g/i18n-site) .

Existuje veľa malých požiadaviek, ktoré sú dôležité, ale nie naliehavé. Vývojový tím zadá cvičné úlohy podľa technológie, v ktorej ste dobrí, a pri zadávaní požiadaviek vylepší vývojové dokumenty.

