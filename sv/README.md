<h1 style="justify-content:space-between">3Ti.Site · Att tänka utan gränser<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en statisk webbplatsgenerator, kan automatiskt översätta Markdown till [mer än hundra olika språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vissa kanske frågar, eftersom alla webbläsare har översättningsfunktioner, är det onödigt att internationalisera webbplatsen?

Jag skulle vilja säga att **endast webbplatser som genererar statiska översättningar kan stödja flerspråkig fulltextsökning på webbplatsen och sökmotoroptimering .**

## Introduktion

Bibeln · Genesis :

> I forntida tider, när språken var ett, byggde mänskligheten ett torn som sträckte sig till himlen, en portal till Guds domän och förkunnade mänsklighetens makt.
>
> Gud förklarade, "Människor förenas som en stam, med en delad tunga, och detta torn är bara en prolog. Nu uppnår de sin önskan, och det kommer ingen rädsla längre."
>
> Sålunda kom Gud ned, spridda människor till olika hörn, använd olika språk.
>
> Från och med då blev mänsklig kommunikation utmanande, tvister oändliga, och det fanns inte längre ett torn som rörde vid himlen.

Science fiction-romanen &quot;Three-Body&quot; (kinesiskt uttal: `3Ti` ) fiktionaliserar en främmande civilisation som kommunicerar genom elektromagnetiska vågor, har inga språkbarriärer och är teknologiskt välmående.

Jag hoppas kunna skapa ett verktyg som gör det möjligt för jordens människor att vara som trekroppsmänniskor, kommunicera utan att vara bundna av språk och förena hela mänskligheten igen.

## Handledning

## Funktionsintroduktion

### Behåll Markdown-Format

### Ändra Översättning

Efter att ha modifierat översättningen måste du köra `./i18n.sh` igen för att uppdatera cachen.

### Översättningsanteckningar

Översättningskommentarer måste ange språket efter \```, till exempel ` ```rust` .

Stöder för närvarande kommentarsöversättning för rust, c, cpp, java, js, kaffe, python och bash.

Redigera [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) för att lägga till översättningsstöd för kommentarer på fler språk.

### Konfigurera Proxy

Genom att ställa in följande miljövariabler kan Google Translate API-anrop gå via proxyn.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Inbäddning

```
test: 测试变量<br 0>嵌入
```

### Töm Cachen

```bash
rm -rf .i18n/.cache
```
