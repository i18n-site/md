# Produktegenskaper

## Integrerad `i18`-översättning

Programmet har inbyggd `i18`-översättning; se [➔ `i18`-dokument](/i18) för specifik användning.

## Automatisk matchning av webbläsarens språk

Webbplatsens standardspråk kommer automatiskt att matcha webbläsarens språk.

När användaren manuellt byter språk kommer valet att minnas.

Relaterad kod: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobilt anpassad

En perfekt läsupplevelse även på mobila enheter.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end hög tillgänglighet

`i18n.site` kommer att publicera webbplatsens innehåll till `npmjs.com` som standard, med hjälp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) och annat multipelt `CDN` innehåll som laddas på `npm` .

Därutöver har kinesiska spegelkällor lagts till för att ge kinesiska användare stabil åtkomst, vilket uppnår **hög front-end tillgänglighet**.

Principen är: avlyssna förfrågningar med [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , försök igen misslyckade förfrågningar på andra `CDN` och aktivera adaptivt den snabbast svarande ursprungsplatsen som standardladdningskälla.

Relaterad kod: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Ensidig applikation, snabb laddning

Webbplatsen använder en ensidig applikationsarkitektur för att byta sidor utan omladdning och för snabb laddning.

## Optimerad för läsupplevelse

### Exakt designad stil

> Skönheten i enkelhet manifesteras perfekt i denna webbplats design.
> Den avstår från överflödig dekoration och presenterar innehåll i dess renaste form.
> Som en vacker dikt, kort men rörande.

<p style="text-align:right">── I18N.SITE Författare</p>

[➔ Klicka här för att se stilöversikt](/i18n.site/md/styl).

### Flerlings `RSS`-prenumeration

![](//p.3ti.site/1725541085.avif)

Ovan bild visar flerspråkig `RSS`-prenumeration på [inoreader.com](//inoreader.com) för `i18n.site`.

### Ladda online-teckensnitt, stöd för kinesiska

Webbsidan använder som standard [Alimama variabla rektangulära typsnitt med dubbla axlar](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) och andra online-teckensnitt för att ge en enhetlig läsupplevelse på olika plattformar.

Samtidigt, för att förbättra laddningstiden, har teckensnitt delats upp baserat på ordfrekvens.

Relaterad kod: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatiskt dold toppnavigering

När du rullar nedåt döljs den övre navigeringen automatiskt.

När du rullar uppåt visas den dolda navigeringen igen.

Navigeringen tonar ut när musen är stilla.

I det övre högra hörnet av navigeringsfältet finns en helskärmsknapp för en uppslukande dokumentläsupplevelse.

### Synkroniserad höjdpunktning av aktuellt kapitel

När du rullar till höger i innehållet, höjdpunktas det aktuella kapitlet i den vänstra sidofältet.

## Coola detaljer

### Museffekter

Håll musen över knappen till höger i toppnavigeringen för att se coola effekter.

### Litet `404`-spöke

`404`-sidan har ett sött litet svävande spöke, vars ögon följer musen, [➔ Klicka här för att se](/404)

## Kod öppen källkod

[Koden är öppen källkod](/i18n.site/src). Om du är intresserad av att delta i utvecklingen, presentera dig gärna på [e-postlistan](//groups.google.com/u/2/g/i18n-site).

Det finns många små, men viktiga krav som inte är brådskande. Utvecklingsteamet kommer att tilldela praktiska uppgifter baserat på dina tekniska färdigheter och samtidigt förbättra utvecklingsdokumentationen när vi tilldelar kraven.