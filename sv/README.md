# I18N.SITE · Språk Utan Gränser<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, en flerspråkig statisk webbplatsgenerator, kan automatiskt översätta Markdown till [mer än hundra olika språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vissa kanske vill fråga, nu när webbläsare har inbyggda översättningsfunktioner, är det onödigt att internationalisera webbplatsen?

Jag vill säga att **endast genom att internationalisera hela webbplatsen kan vi stödja flerspråkig fulltextsökning på webbplatsen och sökmotoroptimering .**

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
