# Producteigenschappen

## Geïntegreerde `i18`-vertalingen

Het programma bevat ingebouwde `i18`-vertalingen; zie [➔ `i18`-document](/i18) voor specifieke toepassingen.

## Automatische browserlinguaanpassing

De standaardtaal van de website past automatisch aan de taal van de browser aan.

Na handmatige taalwisseling door de gebruiker, wordt de keuze van de gebruiker onthouden.

Relevante code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiele terminalaanpassing

Ook op mobiele telefoons biedt het een perfecte leeservaring.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hoge beschikbaarheid aan de voorkant

`i18n.site` publiceert standaard site-inhoud naar `npmjs.com`, met behulp van [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) en andere `CDN`s om de inhoud van `npm` te laden.

Op basis hiervan zijn er spiegelbronnen toegevoegd voor het Chinese vasteland, zodat Chinese gebruikers stabiele toegang kunnen krijgen en **hoge beschikbaarheid aan de voorkant** is bereikt.

Het principe is: verzoeken afvangen met [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), mislukte verzoeken op andere `CDN`s opnieuw proberen en de snelst reagerende bron als standaard laadbron adaptief inschakelen.

Relevante code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkel paginetoepassing, snelle laden

De website maakt gebruik van een enkel paginatoepassingstructuur, waarbij pagina's zonder vernieuwing worden gewisseld en snel laden.

## Geoptimaliseerd voor leeservaring

### Verfijnde stijl

> De schoonheid van eenvoud wordt perfect weergegeven in het webdesign van deze website.
> Het schuwt overbodige versieringen en presenteert de inhoud in zijn puurste vorm.
> Net als een prachtig gedicht, misschien kort, maar raken mensen diep.

<p style="text-align:right">── Auteur van I18N.SITE</p>

[➔ Klik hier voor een overzicht van stijlen](/i18n.site/md/styl).

### Meertalige `RSS`-abonnementen

![](//p.3ti.site/1725541085.avif)

De afbeelding hierboven toont het gebruik van een abonnement op `i18n.site` met meertalig `RSS` via [inoreader.com](//inoreader.com).

### Online lettertypen laden, ondersteuning voor Chinees

De website gebruikt standaard [Alimama Dubbele As Variabele Rechthoekige Lettertypen](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) en andere online lettertypen om de leeservaring van gebruikers op verschillende platforms te standaardiseren.

Tegelijkertijd, om de laadsnelheid te verbeteren, zijn lettertypen opgesplitst op basis van woordfrequentiestatistieken.

Relevante code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisch verbergen van de bovenste navigatie

Als je naar beneden scrolt, wordt de bovenste navigatie automatisch verborgen.

Als je naar boven scrolt, wordt de verborgen navigatie opnieuw weergegeven.

Wanneer de muis niet beweegt, zal het langzaam verdwijnen.

In de rechterbovenhoek van de navigatiebalk bevindt zich een knop voor volledig scherm, die een meeslepende documentleeservaring biedt.

### Synchroniseren van het overzicht met de huidige sectie

Wanneer je door de inhoud aan de rechterkant scrolt, wordt de linkerkant van het overzicht gesynchroniseerd en de huidige gelezen sectie gemarkeerd.

## Coole details

### Muiseffecten

Als je de muis above de knoppen in de rechterbovenhoek van de navigatie houdt, kun je coole effecten zien.

### `404`-klein spookje

De `404`-pagina heeft een schattig zwevend spookje dat zijn ogen bewegen met de muis; [➔ Klik hier om te bekijken](/404)

## Open source code

[De code is open source](/i18n.site/src). Als je geïnteresseerd bent in het bijdragen aan de ontwikkeling, stel jezelf dan voor op [de mailinglijst](//groups.google.com/u/2/g/i18n-site).

Er zijn veel kleine, maar belangrijke vereisten die niet urgent zijn. Het ontwikkelingsteam zal op basis van je technische vaardigheden praktische taken toewijzen en tegelijkertijd de ontwikkelingsdocumentatie verbeteren terwijl ze de vereisten toewijzen.