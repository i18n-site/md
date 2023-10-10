<h1 style="justify-content:space-between">3Ti.Site · Tænk uden grænser<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, en statisk site-generator, kan automatisk oversætte Markdown til [mere end hundrede forskellige sprog](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Nogle mennesker vil måske spørge, eftersom alle browsere har oversættelsesfunktioner, er det unødvendigt at internationalisere webstedet?

Jeg vil gerne sige, at **kun websteder, der genererer statiske oversættelser, kan understøtte flersproget fuldtekstsøgning på stedet og søgemaskineoptimering** .

## Introduktion

Bibelen · Første Mosebog :

> I oldtiden, hvor sprog var ét, byggede menneskeheden et tårn, der nåede til himlen, en portal til Guds domæne, der forkyndte menneskehedens magt.
>
> Gud erklærede: "Mænd forenes som én stamme, med en fælles tunge, og dette tårn er kun en prolog. Nu opnår de deres ønske, og der vil ikke være mere frygt."
>
> Således kom Gud ned, spredte mennesker til forskellige hjørner, bruger forskellige sprog.
>
> Fra da af blev menneskelig kommunikation udfordrende, stridigheder uendelige, og der var ikke længere et tårn, der rørte himlen.

Science fiction-romanen &quot;Three-Body&quot; (kinesisk udtale: `3Ti` ) fiktionaliserer en fremmed civilisation, der kommunikerer gennem elektromagnetiske bølger, har ingen sprogbarrierer og er teknologisk velstående.

Jeg håber at skabe et værktøj, der vil gøre det muligt for jordens mennesker at være som tre-kroppe mennesker, kommunikere uden at være bundet af sprog og forene hele menneskeheden igen.

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
