# Producteigenschappen

## `i18` Vertalingen Geïntegreerd

Het programma heeft `i18` ingebouwde vertalingen, zie [➔ `i18` document](/i18) voor specifiek gebruik.

## Automatisch Overeenkomen Met De Browsertaal

De standaardtaal van de website komt automatisch overeen met de taal van de browser.

Nadat de gebruiker handmatig van taal heeft gewisseld, wordt de keuze van de gebruiker onthouden.

Gerelateerde code : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Aanpassing Van Mobiele Terminals

Ook op de mobiele telefoon is er een perfecte leeservaring.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hoge beschikbaarheid aan de voorkant

`i18n.site` publiceert de site-inhoud standaard naar `npmjs.com` , met behulp van [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) en andere `CDN` inhoud die op `npm` is geladen.

Op deze basis werden spiegelbronnen van het vasteland van China toegevoegd om Chinese gebruikers stabiele toegang te bieden en **een hoge front-end beschikbaarheid** te bereiken.

Het principe is: verzoeken onderscheppen met [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , mislukte verzoeken op andere `CDN` opnieuw proberen en de snelst reagerende oorspronkelijke site adaptief inschakelen als standaard laadbron.

Gerelateerde code : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Applicatie Voor Één Pagina, Extreem Snel Laden

De website maakt gebruik van een applicatiearchitectuur van één pagina, zonder vernieuwing bij het schakelen tussen pagina's en extreem snel laden.

## Geoptimaliseerd Voor Leeservaring

### Goed Ontworpen Stijl

> De schoonheid van eenvoud wordt perfect vertolkt in het webdesign van deze website.
> Het laat overbodige decoratie achterwege en presenteert de inhoud in zijn puurste vorm.
> Net als een mooi gedicht, ook al is het kort, raakt het de harten van mensen.

<p style="text-align:right">── I18N.SITE Auteur</p>

[➔ Klik hier voor een lijst met stijlen](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

De afbeelding hierboven toont meertalig `RSS` met [inoreader.com](//inoreader.com) `i18n.site` .

### Laad Online Lettertypen, Ondersteun Chinees

Standaard zijn [Alimama variabele rechthoekige lettertypen met twee assen](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) en andere online lettertypen ingeschakeld op de webpagina om de leeservaring van gebruikers op verschillende platforms te verenigen.

Tegelijkertijd worden lettertypen, om de laadsnelheid te verbeteren, opgedeeld op basis van woordfrequentiestatistieken.

Gerelateerde code : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Topnavigatie Automatisch Verborgen

Scroll naar beneden en de bovenste navigatie wordt automatisch verborgen.

Scroll naar boven en de verborgen navigatie verschijnt weer.

Het verdwijnt als de muis niet beweegt.

Er is een knop op volledig scherm in de rechterbovenhoek van de navigatiebalk om een meeslepende leeservaring voor documenten te creëren.

### Gesynchroniseerde Overzichtsmarkering Van Het Huidige Hoofdstuk

Wanneer u door de inhoud aan de rechterkant bladert, zal de omtrek aan de linkerkant tegelijkertijd het hoofdstuk markeren dat momenteel wordt gelezen.

## Coole Details

### Muiseffecten

Beweeg je muis over de knop aan de rechterkant van de navigatie bovenaan om coole speciale effecten te zien.

### `404` Klein Spookje

Er is een schattig klein zwevend spookje op de `404` pagina, wiens ogen bewegen met de muis, [➔ Klik hier om te bekijken](/404) ,

## Codeer Open Source

[De code is open source](/i18n.site/c/src) . Als u geïnteresseerd bent in deelname aan de ontwikkeling, stel uzelf dan voor aan [de mailinglijst](//groups.google.com/u/2/g/i18n-site) .

Er zijn veel kleine vereisten die belangrijk maar niet urgent zijn. Het ontwikkelingsteam zal praktische taken toewijzen op basis van de technologieën waar u goed in bent, en de ontwikkelingsdocumenten verbeteren terwijl u de vereisten toewijst.