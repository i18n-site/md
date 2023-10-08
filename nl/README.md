# I18N.SITE · Taal Zonder Grenzen<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, een statische sitegenerator die automatische vertaling in [100 verschillende talen](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ondersteunt.

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Sommige mensen willen zich misschien afvragen: is het niet nodig om de website te internationaliseren, nu browsers ingebouwde vertaalfuncties hebben?

Ik wil zeggen dat **we alleen door de hele site te internationaliseren meertalige in-site full-text zoekacties en zoekmachineoptimalisatie kunnen ondersteunen** .

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
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabele Insluiting

```
test: 测试变量<br 0>嵌入
```

### Maak De Cache Leeg

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
