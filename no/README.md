<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en flerspråklig statisk nettstedsgenerator, kan automatisk oversette Markdown til [mer enn hundre forskjellige språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Noen vil kanskje spørre, nå som nettlesere har innebygde oversettelsesfunksjoner, er det unødvendig å internasjonalisere nettstedet?

Jeg vil si at **bare ved å internasjonalisere hele nettstedet kan vi støtte flerspråklige fulltekstsøk på stedet og søkemotoroptimalisering .**

## Sekvens

"Bibel · Genesis":

> De gamle skilte ikke mellom språk. De ble født med stolthet og ønsket å bygge et høyt tårn med toppen til himmelen.
>
> <blockquote><p>Gud var misfornøyd med menneskets arroganse, så han spredte alle levende vesener på forskjellige steder, ute av stand til å forstå hverandre.</p></blockquote>
>
> <blockquote><p>Siden den gang har det vært vanskelig for mennesker å kommunisere, tvister har fortsatt, og det er ikke noe Babelstårn i verden.</p></blockquote>

Science fiction-romanen &quot;Three-Body&quot; (kinesisk uttale: `3Ti` ) fiksjonaliserer en fremmed sivilisasjon som kommuniserer gjennom elektromagnetiske bølger, har ingen språkbarrierer og er teknologisk velstående.

Jeg håper at ved hjelp av dette verktøyet vil menneskene på jorden bli som trekroppsmennesker, kommunikasjon vil ikke bli begrenset av språk, og hele menneskeheten vil bli forent igjen.

## Opplæringen

## Funksjon Introduksjon

### Behold Markdown-Format

### Endre Oversettelse

Etter å ha modifisert oversettelsen, må du kjøre `./i18n.sh` på nytt for å oppdatere cachen.

### Oversettelsesnotater

Oversettelseskommentarer må angi språket etter \```, for eksempel ` ```rust` .

Støtter for øyeblikket kommentaroversettelse for rust, c, cpp, java, js, kaffe, python og bash.

Rediger [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) for å legge til oversettelsesstøtte for kommentarer på flere språk.

### Konfigurer Proxy

Ved å angi følgende miljøvariabler kan Google Translate API-kall gå gjennom proxyen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Innebygging

```
test: 测试变量<br 0>嵌入
```

### Tømme Hurtigbufferen

```bash
rm -rf .i18n/.cache
```
