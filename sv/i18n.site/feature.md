# Egenskap Hos Produkten

## `I18` Översättning

Programmet har `i18` översättning, se [➔ `i18`](/i18) för specifik användning.

## Matcha Webbläsarens Språk Automatiskt

Webbplatsens standardspråk kommer automatiskt att matcha webbläsarens språk.

Efter att användaren byter språk manuellt kommer användarens val att komma ihåg.

Relaterad kod : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobilterminalanpassning

Det finns även en perfekt läsupplevelse på mobilen.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end hög tillgänglighet

`i18n.site` Som standard publiceras webbplatsens innehåll till `npmjs.com` , med hjälp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) och flera `CDN` -innehåll som laddas på `npm` .

På grundval av detta lades spegelkällor från Kina till för att låta kinesiska användare ha stabil åtkomst och uppnå **hög front-end-tillgänglighet** .

Principen är: avlyssna begäran med hjälp [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , om begäran misslyckas, försök igen på andra `CDN` och aktivera den snabbast svarande ursprungsstationen som standardladdningskälla.

Relaterad kod : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Ensidig Applikation, Extremt Snabb Laddning

Webbplatsen antar en ensidig applikationsarkitektur, utan uppdatering när du byter sida och extremt snabb laddning.

## Optimerad För Läsupplevelse

### Väldesignad Stil

> Skönheten i enkelheten tolkas perfekt i webbdesignen på denna webbplats.
> Den överger onödig dekoration och presenterar innehåll i sin renaste form.
> Som en vacker dikt, fastän den är kort, berör den människors hjärtan.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klicka här för att se en lista med stilar](/i18n.site/md/styl) .

### Ladda Online-Teckensnitt, Stödja Kinesiska

Som standard är [Alimama variabla rektangulära typsnitt med dubbla axlar](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) och andra onlineteckensnitt aktiverade på webbsidan för att förena läsupplevelsen för användare på olika plattformar.

Samtidigt, för att förbättra laddningshastigheten, skivas teckensnitt enligt ordfrekvensstatistik.

Relaterad kod : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Toppnavigering Döljs Automatiskt

Scrolla nedåt så döljs den övre navigeringen automatiskt.

Rulla uppåt och den dolda navigeringen visas igen.

Det kommer att tona ut när musen inte rör sig.

Det finns en helskärmsknapp i det övre högra hörnet av navigeringsfältet för att skapa en uppslukande dokumentläsupplevelse.

### Synkroniserad Konturmarkering Av Det Aktuella Kapitlet

När du bläddrar i innehållet till höger, kommer konturen till vänster samtidigt att markera det kapitel som läses för närvarande.

## Coola Detaljer

### Museffekter

Håll musen över knappen till höger i toppnavigeringen för att se coola specialeffekter.

### Det Lilla `404`

Det finns ett sött litet svävande spöke på sidan `404` dess ögon rör sig med musen, [➔ Klicka här för att se](/404) ,

## Kod Öppen Källkod

[Koden är öppen källkod](/i18n.site/src) Om du är intresserad av att delta i utveckling, vänligen presentera dig för [e-postlistan](//groups.google.com/u/2/g/i18n-site) .

Det finns många små krav som är viktiga men inte brådskande. Utvecklingsteamet kommer att tilldela övningsuppgifter enligt den teknik du är bra på, och förbättra utvecklingsdokumenten samtidigt som de tilldelar kraven.

