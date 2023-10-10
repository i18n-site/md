<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en flersproget statisk webstedsgenerator, kan automatisk oversætte Markdown til [mere end hundrede forskellige sprog](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Nogle mennesker vil måske spørge, nu hvor browsere har indbyggede oversættelsesfunktioner, er det unødvendigt at internationalisere hjemmesiden?

Jeg vil sige, at **kun ved at internationalisere hele webstedet, kan vi understøtte flersproget in-site fuldtekstsøgning og søgemaskineoptimering** .

## Sekvens

"Bibel · Genesis":

> De gamle skelnede ikke mellem sprog. De byggede tårne, der nåede himlen for at nå Guds port for at fremme den menneskelige races prestige.
>
> Gud sagde, at mennesker er deres egen stamme, med samme kultur og art. At bygge et tårn er blot en optakt. Nu kan du opnå, hvad du vil, og du har intet at frygte.
>
> Så kom Gud og spredte folket forskellige steder, ude af stand til at forstå hinanden.
>
> Fra da af kæmpede menneskeheden for at kommunikere, konflikter opstod i det uendelige, og verden så ikke mere et tårn, der nåede himlen.

Science fiction-romanen &quot;Three-Body&quot; (kinesisk udtale: `3Ti` ) fiktionaliserer en fremmed civilisation, der kommunikerer gennem elektromagnetiske bølger, har ingen sprogbarrierer og er teknologisk velstående.

Jeg håber, at ved hjælp af dette værktøj vil jordens mennesker være som tre-kroppe mennesker, kommunikation vil ikke blive begrænset af sprog, og hele menneskeheden vil blive forenet igen.

## Tutorial

## Funktion Introduktion

### Behold Markdown-Format

### Rediger Oversættelse

Efter at have ændret oversættelsen, skal du køre `./i18n.sh` igen for at opdatere cachen.

### Oversættelsesnoter

Oversættelseskommentarer skal angive sproget efter \```, såsom ` ```rust` .

Understøtter i øjeblikket kommentaroversættelse til rust, c, cpp, java, js, kaffe, python og bash.

Rediger [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) for at tilføje oversættelsesstøtte til kommentarer på flere sprog.

### Konfigurer Proxy

Indstilling af følgende miljøvariabler gør det muligt for Google Translate API-kald at gå gennem proxyen.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Indlejring

```
test: 测试变量<br 0>嵌入
```

### Tøm Cachen

```bash
rm -rf .i18n/.cache
```
