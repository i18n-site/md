<h1 style="justify-content:space-between">3Ti.Site · Dink geen grense nie<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, &#39;n veeltalige statiese werfgenerator, kan Markdown outomaties in [meer as honderd verskillende tale](https://github.com/i18n-site/node/blob/main/lang/src/index.js) vertaal.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sommige mense wil dalk vra, noudat blaaiers ingeboude vertaalfunksies het, is dit onnodig om die webwerf te internasionaliseer?

Ek wil sê dat **ons slegs deur die hele webwerf te internasionalisering kan meertalige voltekssoektog op die webwerf en soekenjinoptimalisering ondersteun** .

## Volgorde

"Bybel · Genesis":

> Die ou mense het nie tussen tale onderskei nie. Hulle is met trots gebore en wou 'n hoë toring bou met die bokant wat na die hemel reik.
> <blockquote><p>God was ontevrede met die mens se arrogansie, en daarom het hy alle lewende wesens op verskillende plekke verstrooi, nie in staat om mekaar te verstaan ​​nie.</p></blockquote>
> <blockquote><p>Sedertdien was dit moeilik vir mense om te kommunikeer, geskille het voortgeduur en daar is geen toring van Babel in die wêreld nie.</p></blockquote>

Die wetenskapfiksie-roman &quot;Three-Body&quot; (Chinese uitspraak: `3Ti` ) fiksionaliseer &#39;n uitheemse beskawing wat deur elektromagnetiese golwe kommunikeer, geen taalgrense het nie en tegnologies voorspoedig is.

Ek hoop dat met die hulp van hierdie hulpmiddel die mense van die aarde soos drie-liggaam mense sal wees, kommunikasie sal nie deur taal beperk word nie, en die hele mensdom sal weer verenig word.

## Tutoriaal

## Funksie Inleiding

### Hou Markdown-Formaat

### Verander Vertaling

Nadat jy die vertaling gewysig het, moet jy `./i18n.sh` weer laat loop om die kas op te dateer.

### Vertaling Notas

Vertaalkommentaar moet die taal na \``` aandui, soos ` ```rust` .

Ondersteun tans kommentaarvertaling vir roes, c, cpp, java, js, koffie, luislang en bash.

Wysig [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) om vertalingsteun by te voeg vir opmerkings in meer tale.

### Stel Instaanbediener Op

Deur die volgende omgewingsveranderlikes in te stel, kan Google Translate API-oproepe deur die instaanbediener gaan.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Veranderlike Inbedding

```
test: 测试变量<br 0>嵌入
```

### Maak Die Kas Leeg

```bash
rm -rf .i18n/.cache
```
