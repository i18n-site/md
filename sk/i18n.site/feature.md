# Vlastnosti Produktu

## `i18` Integrovaných Prekladov

Program má vstavaný `i18` preklad, konkrétne použitie nájdete [v ➔ `i18` dokumente](/i18) .

## Automaticky Prispôsobiť Jazyk Prehliadača

Predvolený jazyk webovej stránky bude automaticky zodpovedať jazyku prehliadača.

Keď používateľ manuálne prepne jazyky, výber používateľa sa zapamätá.

Súvisiaci [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Prispôsobenie Mobilného Terminálu

Dokonalý zážitok z čítania je aj na mobilnom telefóne.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end vysoká dostupnosť

`i18n.site` štandardne zverejní obsah stránky na `npmjs.com` s pomocou [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) a ďalších `CDN` obsahu načítaných na `npm` .

Na tomto základe boli pridané zrkadlové zdroje z pevninskej Číny, aby čínski používatelia mali stabilný prístup a dosiahli **vysokú dostupnosť front-endu** .

Princíp je: zachytiť požiadavky s [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , zopakovať neúspešné požiadavky na iné `CDN` a adaptívne povoliť najrýchlejšie reagujúci pôvodnú stránku ako predvolený zdroj načítania.

Súvisiaci [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Jednostránková Aplikácia, Extrémne Rýchle Načítanie

Web využíva architektúru jednostránkovej aplikácie bez obnovovania pri prepínaní stránok a extrémne rýchle načítanie.

## Optimalizované Pre Zážitok Z Čítania

### Dobre Navrhnutý Štýl

> Krásu jednoduchosti dokonale vystihuje webový dizajn tejto webovej stránky.
> Opúšťa nadbytočnú výzdobu a prezentuje obsah vo svojej najčistejšej forme.
> Ako krásna báseň, hoci je krátka, dotýka sa ľudských sŕdc.

<p style="text-align:right">── I18N.SITE</p>

[➔ Kliknutím sem zobrazíte zoznam štýlov](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Obrázok vyššie zobrazuje viacjazyčné `RSS` pomocou [inoreader.com](//inoreader.com) `i18n.site` .

### Načítajte Online Písma, Podporujte Čínštinu

V predvolenom nastavení sú na webovej stránke povolené [dvojosové variabilné obdĺžnikové písma Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) ďalšie online písma, aby sa zjednotil zážitok používateľov na rôznych platformách.

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

### `404` Malý Duch

Na stránke `404` je roztomilý malý plávajúci duch, ktorého oči sa budú pohybovať myšou, [➔ Kliknutím sem zobrazíte](/404) ,

## Kód Open Source

[Kód je open source](/i18n.site/c/src) Ak máte záujem podieľať sa na vývoji, predstavte sa v [mailing listu](//groups.google.com/u/2/g/i18n-site) .

Existuje veľa malých požiadaviek, ktoré sú dôležité, ale nie naliehavé. Vývojový tím zadá praktické úlohy na základe technológií, v ktorých ste dobrí, a pri zadávaní požiadaviek vylepší vývojové dokumenty.