# Producteigenschappen

## Geïntegreerde `i18`-vertalingen

Het programma bevat ingebouwde `i18`-vertalingen; zie [➔ `i18`-document](/i18) voor de specifieke toepassing.

## Automatische browser taal detectie

De standaardtaal van de website wordt automatisch aangepast aan de taal van de browser.

Wanneer een gebruiker handmatig van taal wisselt, wordt de keuze van de gebruiker onthouden.

gerelateerde code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiel aangepaste interface

Ook op mobiele apparaten biedt de website een perfecte leeservaring.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hoge beschikbaarheid van de front-end

`i18n.site` publiceert standaard site-inhoud naar `npmjs.com`, met behulp van [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) en andere `CDN`-diensten voor het laden van inhoud op `npm`.

Hiernaast zijn Chinese mirror-servers toegevoegd om Chinese gebruikers een stabiele toegang te bieden, waardoor een **hoge front-end beschikbaarheid** is bereikt.

Het principe is: verzoeken afvangen met een [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API), mislukte verzoeken op andere `CDN`-servers opnieuw proberen en de snelst reagerende bron als standaard laden.

gerelateerde code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Een enkele pagina applicatie, snel laden

De website maakt gebruik van een enkele pagina applicatie-architectuur, waarbij pagina's zonder vernieuwing snel laden.

## Geoptimaliseerd voor leeservaring

### Carefull ontworpen stijl

> De schoonheid van eenvoud wordt perfect weergegeven in het webdesign van deze website.
> Door overbodige versieringen te vermijden, wordt de inhoud in zijn puurste vorm gepresenteerd.
> Net als een prachtig gedicht, misschien kort, maar raken ze de harten van mensen.

<p style="text-align:right">── Auteur van I18N.SITE</p>

[➔ Klik hier voor een overzicht van de stijlen](/i18n.site/md/styl).

### Online lettertypen laden, ondersteuning voor Chinese tekens

Standaard zijn [Alimama variabele rechthoekige lettertypen met twee assen](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) en andere online lettertypen ingeschakeld op de webpagina om een uniforme leeservaring op verschillende platforms te waarborgen.

Tegelijkertijd zijn lettertypen, om de laadsnelheid te verbeteren, opgesplitst op basis van het woordfrequentie-aandeel.

gerelateerde code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatisch verbergen van de bovenste navigatie

Scroll naar beneden en de bovenste navigatie wordt automatisch verborgen.

Scroll naar boven en de verborgen navigatie verschijnt weer.

Wanneer de muis niet beweegt, zal de navigatie fade-out.

In de rechterbovenhoek van de navigatiebalk bevindt zich een knop voor volledig scherm, die een meeslepende documentleeservaring biedt.

### Synchroniseren van de inhoudsopgave met het huidige hoofdstuk

Wanneer je door de rechterinhoud scrolt, wordt de linkerkant inhoudsopgave gesynchroniseerd en het huidige gelezen hoofdstuk gemarkeerd.

## Coole details

### Muiseffecten

Als je de muis over de knoppen aan de rechterkant van de bovenste navigatie houdt, kun je coole effecten zien.

### Het `404`-kleine spookje

Op de `404`-pagina wacht een lieve, zwevende spookjesfiguur op je, zijn ogen volgen je muisbewegingen, [➔ klik hier](/404) om hem te ontdekken

## Codeer open source

[De code is open source](/i18n.site/src). Als je geïnteresseerd bent in het bijdragen aan de ontwikkeling, introduceer jezelf dan op de [mailinglijst](//groups.google.com/u/2/g/i18n-site).

Er zijn veel kleine, maar belangrijke vereisten die niet urgent zijn. Het ontwikkelingsteam zal op basis van je technische vaardigheden oefentaken toewijzen en tegelijkertijd de ontwikkelingsdocumentatie verbeteren bij het toewijzen van vereisten.