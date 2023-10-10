<h1 style="justify-content:space-between">3Ti.Site · Tenke uten grenser<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en statisk nettstedsgenerator, kan automatisk oversette Markdown til [mer enn hundre forskjellige språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Noen spør kanskje, nå som nettlesere har innebygde oversettelsesfunksjoner, er det unødvendig å internasjonalisere nettstedet?

Jeg vil si at **bare ved å internasjonalisere hele nettstedet kan vi støtte flerspråklige fulltekstsøk på stedet og søkemotoroptimalisering .**

## Introduksjon

Bibelen · 1. Mosebok :

> I gamle tider, da språk var ett, bygde menneskeheten et tårn som nådde himmelen, en portal til Guds domene, og forkynte menneskehetens makt.
>
> Gud erklærte, "Menn forenes som én stamme, med en felles tunge, og dette tårnet er bare en prolog. Nå oppnår de ønsket, og det vil ikke være frykt lenger."
>
> Dermed kom Gud ned, spredte folk til forskjellige hjørner, bruker forskjellige språk.
>
> Fra da av ble menneskelig kommunikasjon utfordrende, stridigheter uendelige, og ikke lenger var det et tårn som rørte himmelen.

Science fiction-romanen &quot;Three-Body&quot; (kinesisk uttale: `3Ti` ) fiksjonaliserer en fremmed sivilisasjon som kommuniserer gjennom elektromagnetiske bølger, har ingen språkbarrierer og er teknologisk velstående.

Jeg håper å skape et verktøy som vil gjøre det mulig for menneskene på jorden å være som trekroppsmennesker, kommunisere uten å være bundet av språk, og forene hele menneskeheten igjen.

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
