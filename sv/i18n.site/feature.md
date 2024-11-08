# Produktegenskaper

## `i18` Översättningar Integrerade

Programmet har inbyggd `i18` översättning, se [➔ `i18` dokument](/i18) för specifik användning.

## Matcha Webbläsarens Språk Automatiskt

Webbplatsens standardspråk kommer automatiskt att matcha webbläsarens språk.

När användaren manuellt byter språk kommer användarens val att komma ihåg.

Relaterad [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobilterminalanpassning

Det finns även en perfekt läsupplevelse på mobilen.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end hög tillgänglighet

`i18n.site` kommer att publicera webbplatsens innehåll till `npmjs.com` som standard, med hjälp av [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) och annat `CDN` innehåll som laddas på `npm` .

På grundval av detta lades spegelkällor från Kina till för att låta kinesiska användare ha stabil åtkomst och uppnå **hög front-end-tillgänglighet** .

Principen är: avlyssna förfrågningar med [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , försök igen misslyckade förfrågningar på andra `CDN` :or och aktivera adaptivt den snabbast svarande ursprungsplatsen som standardladdningskälla.

Relaterad [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Ensidig Applikation, Extremt Snabb Laddning

Webbplatsen antar en ensidig applikationsarkitektur, utan uppdatering när du byter sida och extremt snabb laddning.

## Optimerad För Läsupplevelse

### Väldesignad Stil

> Skönheten i enkelheten tolkas perfekt i webbdesignen på denna webbplats.
> Den överger överflödig dekoration och presenterar innehåll i sin renaste form.
> Som en vacker dikt, fastän den är kort, berör den människors hjärtan.

<p style="text-align:right">── I18N.SITE</p>

[➔ Klicka här för att se en lista med stilar](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Bilden ovan `i18n.site` flerspråkig `RSS` med abonnemang [inoreader.com](//inoreader.com) .

### Ladda Online-Teckensnitt, Stödja Kinesiska

Som standard är [Alimama variabla rektangulära typsnitt med dubbla axlar](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) och andra onlineteckensnitt aktiverade på webbsidan för att förena läsupplevelsen för användare på olika plattformar.

Samtidigt, för att förbättra laddningshastigheten, skivas teckensnitt enligt ordfrekvensstatistik.

Relaterad [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Toppnavigering Döljs Automatiskt

Scrolla nedåt så döljs den övre navigeringen automatiskt.

Rulla uppåt och den dolda navigeringen visas igen.

Det kommer att tona ut när musen inte rör sig.

Det finns en helskärmsknapp i det övre högra hörnet av navigeringsfältet för att skapa en uppslukande dokumentläsupplevelse.

### Synkroniserad Konturmarkering Av Det Aktuella Kapitlet

När du bläddrar i innehållet till höger kommer konturen till vänster samtidigt att markera det kapitel som läses för närvarande.

## Coola Detaljer

### Museffekter

Håll musen över knappen till höger i toppnavigeringen för att se coola specialeffekter.

### `404` Litet Spöke

Det finns ett sött litet svävande spöke på `404` -sidan, vars ögon kommer att röra sig med musen, [➔ Klicka här för att se](/404) ,

## Kod Öppen Källkod

[Koden är öppen källkod](/i18n.site/c/src) Om du är intresserad av att delta i utveckling, vänligen presentera dig för [e-postlistan](//groups.google.com/u/2/g/i18n-site) .

Det finns många små krav som är viktiga men inte brådskande. Utvecklingsteamet kommer att tilldela praktiska uppgifter baserat på de teknologier du är bra på, och förbättra utvecklingsdokumenten samtidigt som de tilldelar kraven.