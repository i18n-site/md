# Producteigenschappen

## `i18`-vertalingen geïntegreerd

Het programma bevat ingebouwde `i18`-vertalingen; zie [➔ `i18`-document](/i18) voor specifieke toepassingen.

## Automatische browserluitaalafstemming

De standaardtaal van de website stemt automatisch overeen met de taal van de browser.

Nadat de gebruiker handmatig van taal heeft gewisseld, onthoudt het de keuze van de gebruiker.

Gerelateerde code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiele terminalaanpassing

Ook op mobiele telefoons biedt het een perfecte leeservaring.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hoge beschikbaarheid aan de voorkant

`i18n.site` publiceert standaard site-inhoud naar `npmjs.com`, met behulp van [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) en andere `CDN`-inhoud geladen op `npm`.

Op deze basis zijn er spiegelbronnen toegevoegd voor het Chinese vasteland, waardoor Chinese gebruikers stabiele toegang kunnen krijgen en **hoge front-end beschikbaarheid** wordt bereikt.

Het principe is: met [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) verzoeken onderscheppen, mislukte verzoeken op andere `CDN` opnieuw proberen en de snelst reagerende bron adaptief instellen als standaard laadbron.

Gerelateerde code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkel paginatoepassing, snelle laden

De website maakt gebruik van een enkel paginatoepassingstructuur, waarbij pagina's zonder vernieuwing worden geschakeld en snel laden.

## Geoptimaliseerd voor leeservaring

### Verfijnde stijl

> De schoonheid van eenvoud wordt perfect weergegeven in het webdesign van deze website.
> Het schuwt overbodige versieringen en presenteert de inhoud in zijn puurste vorm.
> Net als een prachtig gedicht, misschien kort, maar raken het de harten van mensen.

<p style="text-align:right">── Auteur van I18N.SITE</p>

[➔ Klik hier voor een overzicht van stijlen](/i18n.site/md/styl).

### Meertalige `RSS`-abonnementen

![](//p.3ti.site/1725541085.avif)

De afbeelding hierboven toont een `RSS`-abonnement met [inoreader.com](//inoreader.com) voor `i18n.site` in meerdere talen.

### Online lettertypen laden, ondersteuning voor Chinese tekens

Standaard zijn [Alimama Dubbele As Variabele Rechthoekige Lettertypen](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) en andere online lettertypen ingeschakeld op de webpagina's om de leeservaring voor gebruikers op verschillende platforms te standaardiseren.

Tegelijkertijd, om de laadsnelheid te verbeteren, zijn lettertypen opgesplitst op basis van woordfrequentiestatistieken.

Gerelateerde code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisch verbergen van de bovenste navigatie

Als je naar beneden scrolt, wordt de bovenste navigatie automatisch verborgen.

Als je naar boven scrolt, wordt de verborgen navigatie opnieuw weergegeven.

Wanneer de muis niet beweegt, zal het langzaam verdwijnen.

In de rechterbovenhoek van de navigatiebalk bevindt zich een knop voor volledig scherm, die een meeslepende documentleeservaring biedt.

### Synchroniseren van het overzicht met de huidige sectie

Wanneer je door de inhoud aan de rechterkant scrolt, zal het overzicht aan de linkerkant de huidige gelezen sectie markeren.

## Coole details

### Muiseffecten

Als je de muis over de knoppen aan de rechterkant van de bovenste navigatie houdt, kun je coole effecten zien.

### `404`-klein spookje

De `404`-pagina heeft een schattig zwevend spookje dat zijn ogen bewegen met de muis; [➔ Klik hier om het te bekijken](/404)

## Code is open source

[De code is open source](/i18n.site/src). Als je geïnteresseerd bent in het bijdragen aan de ontwikkeling, stel jezelf dan voor op [de mailinglijst](//groups.google.com/u/2/g/i18n-site).

Er zijn veel kleine, maar belangrijke vereisten die niet urgent zijn. Het ontwikkelingsteam zal op basis van je technische vaardigheden praktische taken toewijzen en tegelijkertijd de ontwikkelingsdocumentatie verbeteren bij het toewijzen van vereisten.