# Produktegenskaper

## Integrerade `i18`-översättningar

Programmet har inbyggda `i18`-översättningar, se [➔ `i18`-dokument](/i18) för specifik användning.

## Automatisk matchning av webbläsarens språk

Webbplatsens standardspråk matchas automatiskt med webbläsarens språk.

Efter manuell språkbyte av användaren kommer användarens val att kommas ihåg.

Relaterad kod: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiltillpassning

En perfekt läsupplevelse även på mobila enheter.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Frontend-hög tillgänglighet

`i18n.site` publicerar som standard webbplatsens innehåll på `npmjs.com`, med hjälp av [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) och andra `CDN` för att ladda innehåll på `npm`.

Därutöver har kinesiska spegelkällor lagts till för att ge kinesiska användare stabil åtkomst, vilket uppnår **hög frontend-tillgänglighet**.

Principen är: använda [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) för att avlyssna förfrågningar, försöka igen på andra `CDN` vid misslyckade förfrågningar och adaptivt aktivera den snabbaste svarande källan som standardladdningskälla.

Relaterad kod: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Ensidig applikation, snabb laddning

Webbplatsen använder en ensidig applikationsarkitektur för att byta sidor utan omladdning och för snabb laddning.

## Optimerad för läsupplevelse

### Exakt designad stil

> Skönheten i enkelhet interpreteras perfekt i denna webbplats design.
> Den avstår från överflödiga dekorationer och presenterar innehållet i dess renaste form.
> Som en vacker dikt, kort men rörande.

<p style="text-align:right">── I18N.SITE:s författare</p>

[➔ Klicka här för att se stilöversikt](/i18n.site/md/styl).

### Ladda online-teckensnitt, stöd för kinesiska

Webbsidan använder som standard [Alimama variabla rektangulära typsnitt med dubbla axlar](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) och andra online-teckensnitt för att ge en enhetlig läsupplevelse för användare på olika plattformar.

Samtidigt har teckensnitten delats upp baserat på ordfrekvensstatistik för att förbättra laddningstiden.

Relaterad kod: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatiskt dold toppnavigering

När du rullar nedåt döljs den övre navigeringen automatiskt.

När du rullar uppåt visas den dolda navigeringen igen.

Navigeringen tonar ut när musen är stilla.

I det övre högra hörnet av navigeringsfältet finns en helskärmsknapp för en uppslukande dokumentläsupplevelse.

### Synkroniserad höjdpunktning av det aktuella kapitlet

När du rullar till höger i innehållet, höjdpunktas det aktuella kapitlet i den vänstra sidofältet.

## Coola detaljer

### Museffekter

Håll musen över knappen till höger i toppnavigeringen för att se coola effekter.

### Litet `404`-spöke

`404`-sidan har ett sött litet svävande spöke, vars ögon följer musen, [➔ Klicka här för att se](/404)

## Kod öppen källkod

[Koden är öppen källkod](/i18n.site/src). Om du är intresserad av att delta i utvecklingen, är du välkommen att presentera dig på [e-postlistan](//groups.google.com/u/2/g/i18n-site).

Det finns många små, viktiga men inte brådskande krav. Utvecklingsteamet kommer att tilldela övningsuppgifter baserat på din tekniska styrka och kommer att förbättra utvecklingsdokumenten samtidigt som kraven tilldelas.