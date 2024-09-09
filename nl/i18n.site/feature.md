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

## <a rel=id href="#ha" id="ha"></a> Hoge beschikbaarheid van de frontend

`i18n.site` publiceert standaard site-inhoud naar `npmjs.com`, met behulp van [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) en andere `CDN`s om de inhoud van `npm` te laden.

Op deze basis zijn er mirrorbronnen toegevoegd voor het Chinese vasteland, zodat Chinese gebruikers stabiele toegang kunnen krijgen en een **hoge frontend-beschikbaarheid** is bereikt.

Het principle is: verzoeken afvangen met [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), mislukte verzoeken op andere `CDN`s opnieuw proberen en de snelst reagerende bron als standaard laden.

Relevante code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Enkel paginetoepassing, snelle laden

De website gebruikt een enkel paginatoepassingstructuur, waarbij pagina's zonder vernieuwing worden geschakeld en snel laden.

## Geoptimaliseerd voor leeservaring

### Carefull ontworpen stijl

> De schoonheid van eenvoud wordt perfect weergegeven in het webdesign van deze website.
> Het laat overbodige versieringen achterwege en presenteert de inhoud in zijn puurste vorm.
> Net als een prachtig gedicht, hoewel kort, raakt het de harten van mensen.

<p style="text-align:right">── Auteur van I18N.SITE</p>

[➔ Klik hier voor een overzicht van stijlen](/i18n.site/md/styl).

### Meertalige `RSS`-abonnementen

![](//p.3ti.site/1725541085.avif)

De afbeelding hierboven toont een meertalig `RSS`-abonnement op `i18n.site` via [inoreader.com](//inoreader.com).

### Online lettertypen laden, Chinese ondersteuning

De website gebruikt standaard [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) en andere online lettertypen om de leeservaring voor gebruikers op verschillende platforms te standaardiseren.

Tegelijkertijd worden lettertypen gesliced op basis van woordfrequentiestatistieken om de laadsnelheid te verbeteren.

Relevante code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisch verbergen van de bovenste navigatie

Als je naar beneden scrolt, wordt de bovenste navigatie automatisch verborgen.

Als je naar boven scrolt, wordt de verborgen navigatie opnieuw weergegeven.

Wanneer de muis niet beweegt, zal de navigatie fade-out.

In de rechterbovenhoek van de navigatiebalk bevindt zich een knop voor volledig scherm, die een meeslepende documentleeservaring creëert.

### Synchrone markering van het huidige hoofdstuk in het overzicht

Wanneer je door de inhoud aan de rechterkant scrolt, zal het overzicht aan de linkerkant synchroon het huidige gelezen hoofdstuk markeren.

## Coole details

### Muiseffecten

Als je de muis over de knoppen aan de rechterkant van de bovenste navigatie houdt, kun je coole effecten zien.

### `404`-klein spookje

De `404`-pagina heeft een schattig zwevend spookje dat zijn ogen beweegt met de muis, [➔ Klik hier om te bekijken](/404)

## Code is open source

[De code is open source](/i18n.site/src). Als je geïnteresseerd bent in het bijdragen aan de ontwikkeling, stel jezelf dan voor op [de mailinglijst](//groups.google.com/u/2/g/i18n-site).

Er zijn veel kleine, maar belangrijke niet-acute vereisten. Het ontwikkelingsteam zal op basis van je technische vaardigheden praktische taken toewijzen en tegelijkertijd de ontwikkelingsdocumentatie verbeteren bij het toewijzen van vereisten.