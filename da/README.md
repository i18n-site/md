# I18N.SITE · Sprog Uden Grænser<img Src="//i-01.eu.org/i18n.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, en flersproget statisk webstedsgenerator, kan automatisk oversætte Markdown til [mere end hundrede forskellige sprog](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Nogle mennesker vil måske spørge, nu hvor browsere har indbyggede oversættelsesfunktioner, er det unødvendigt at internationalisere hjemmesiden?

Jeg vil sige, at **kun ved at internationalisere hele webstedet, kan vi understøtte flersproget in-site fuldtekstsøgning og søgemaskineoptimering** .

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
