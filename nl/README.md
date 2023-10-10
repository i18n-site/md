<h1 style="justify-content:space-between">3Ti.Site · Denken zonder grenzen<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, een statische sitegenerator, kan Markdown automatisch in [meer dan honderd verschillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) vertalen.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sommige mensen vragen zich misschien af: is het niet nodig om de website te internationaliseren nu browsers ingebouwde vertaalfuncties hebben?

Ik wil zeggen dat **we alleen door de hele site te internationaliseren meertalige in-site full-text zoekacties en zoekmachineoptimalisatie kunnen ondersteunen** .

## Invoering

Bijbel · Genesis :

> In de oudheid, toen de talen één waren, bouwde de mensheid een toren die tot aan de hemel reikte, een poort naar Gods domein, die de macht van de mensheid verkondigde.
>
> God verklaarde: "Mensen verenigen zich als één stam, met een gedeelde taal, en deze toren is slechts een proloog. Nu verwezenlijken ze hun verlangen, en er zal geen angst meer zijn."
>
> Zo daalde God neer, waardoor mensen naar verschillende hoeken werden verspreid en verschillende talen werden gebruikt.
>
> Vanaf dat moment werd de menselijke communicatie een uitdaging, waren de geschillen eindeloos, en was er geen toren meer die de hemel raakte.

De sciencefictionroman &quot;Three-Body&quot; (Chinese uitspraak: `3Ti` ) fictionaliseert een buitenaardse beschaving die communiceert via elektromagnetische golven, geen taalbarrières kent en technologisch welvarend is.

Ik hoop een hulpmiddel te creëren dat de mensen op aarde in staat zal stellen om als mensen met drie lichamen te zijn, te communiceren zonder gebonden te zijn aan taal, en de hele mensheid weer te verenigen.

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
