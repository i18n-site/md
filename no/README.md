# I18N.SITE · Dokumenter Uten Grenser<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, en statisk nettstedsgenerator som støtter automatisk oversettelse til [133 forskjellige språk](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

Noen vil kanskje spørre, nå som nettlesere har innebygde oversettelsesfunksjoner, er det unødvendig å internasjonalisere nettstedet?

Jeg vil si at **bare ved å internasjonalisere hele nettstedet kan vi støtte flerspråklige fulltekstsøk på stedet og søkemotoroptimalisering .**

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

### Variabel Innebygging

```
test: 测试变量<br 0>嵌入
```

### Tømme Hurtigbufferen

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
