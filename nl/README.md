<h1 style="justify-content:space-between">3Ti.Site · Denk zonder grenzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, een meertalige statische sitegenerator, kan Markdown automatisch in [meer dan honderd verschillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) vertalen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sommige mensen willen zich misschien afvragen: is het niet nodig om de website te internationaliseren, nu browsers ingebouwde vertaalfuncties hebben?

Ik wil zeggen dat **we alleen door de hele site te internationaliseren meertalige in-site full-text zoekacties en zoekmachineoptimalisatie kunnen ondersteunen** .

## Reeks

"Bijbel·Genesis":

> De Ouden maakten geen onderscheid tussen talen. Ze waren met trots geboren en wilden een hoge toren bouwen waarvan de top tot aan de hemel reikte.
>
> <blockquote><p>God was ontevreden over de arrogantie van de mens, dus verspreidde hij alle levende wezens over verschillende plaatsen, niet in staat elkaar te begrijpen.</p></blockquote>
>
> <blockquote><p>Sindsdien is het moeilijk voor mensen om te communiceren, zijn de geschillen voortgezet en is er geen Toren van Babel meer in de wereld.</p></blockquote>

De sciencefictionroman &quot;Three-Body&quot; (Chinese uitspraak: `3Ti` ) fictionaliseert een buitenaardse beschaving die communiceert via elektromagnetische golven, geen taalbarrières kent en technologisch welvarend is.

Ik hoop dat met behulp van dit instrument de mensen op aarde als mensen met drie lichamen zullen zijn, dat de communicatie niet beperkt zal worden door taal, en dat de hele mensheid weer verenigd zal worden.

## Handleiding

## Functie Introductie

### Behoud Het Markdown-Formaat

### Wijzig Vertaling

Nadat u de vertaling heeft gewijzigd, moet u `./i18n.sh` opnieuw uitvoeren om de cache bij te werken.

### Vertaalnotities

Bij vertalingsopmerkingen moet de taal na \``` worden aangegeven, bijvoorbeeld ` ```rust` .

Ondersteunt momenteel commentaarvertaling voor roest, c, cpp, java, js, koffie, python en bash.

Bewerk [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) om vertaalondersteuning voor opmerkingen in meer talen toe te voegen.

### Configureer Proxy

Als u de volgende omgevingsvariabelen instelt, kunnen API-aanroepen van Google Translate via de proxy gaan.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabele Insluiting

```
test: 测试变量<br 0>嵌入
```

### Maak De Cache Leeg

```bash
rm -rf .i18n/.cache
```
