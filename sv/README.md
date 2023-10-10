<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en flerspråkig statisk webbplatsgenerator, kan automatiskt översätta Markdown till [mer än hundra olika språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vissa kanske vill fråga, nu när webbläsare har inbyggda översättningsfunktioner, är det onödigt att internationalisera webbplatsen?

Jag vill säga att **endast genom att internationalisera hela webbplatsen kan vi stödja flerspråkig fulltextsökning på webbplatsen och sökmotoroptimering .**

## Sekvens

"Bibel · Genesis":

> De gamla gjorde ingen skillnad på språk. De föddes med stolthet och ville bygga ett högt torn med toppen nådd mot himlen.
> <blockquote><p>Gud var missnöjd med människans arrogans, så han spred alla levande varelser på olika platser, oförmögna att förstå varandra.</p></blockquote>
> <blockquote><p>Sedan dess har det varit svårt för människor att kommunicera, tvister har fortsatt och det finns inget Babels torn i världen.</p></blockquote>

Science fiction-romanen &quot;Three-Body&quot; (kinesiskt uttal: `3Ti` ) fiktionaliserar en främmande civilisation som kommunicerar genom elektromagnetiska vågor, har inga språkbarriärer och är teknologiskt välmående.

Jag hoppas att med hjälp av detta verktyg kommer jordens människor att bli som trekroppsmänniskor, kommunikation kommer inte att begränsas av språket och hela mänskligheten kommer att förenas igen.

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
