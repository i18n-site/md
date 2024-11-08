# Blog Skabelon

`i18n/conf.yml` ud af `use: Blog` betyder brug af blogskabelonen til gengivelse.

`markdown` -filen i blogindlægget skal konfigurere metaoplysninger.

Metainformation skal være i begyndelsen af filen, begyndende med `---` og slutter med `---` Formatet af konfigurationsoplysningerne i midten er `YAML` .

Konfigurationen af en demofil er som følger:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` angiver indholdsoversigten, som vil blive vist på blogindekssiden.

Ved hjælp af `YMAL` ' | `Syntaks, du kan skrive multi-line resuméer.

Konfigurationen af mappetræet i højre side af bloggen er også `TOC` filer (se det forrige kapitel. Kun artikler opført i `TOC` vises i bloggens hjemmesideindeks).

Artikler, der ikke indeholder metainformation, vises ikke på bloggens hjemmeside, men kan vises i mappetræet til højre.

## Forfatteroplysninger

Forfatterinformation kan skrives i artiklens metainformation, såsom:

```yml
author: marlowe
```

Rediger derefter `author.yml` i kildesprogsbiblioteket og tilføj forfatterinformation, såsom :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` og `title` er alle valgfrie. Hvis `name` ikke er indstillet, vil nøglenavnet (her `marlowe` ) blive brugt som `name` .

Se demoprojekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) og [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Fastgjort Artikel

Hvis du har brug for at fastgøre artiklen til toppen, skal du køre `i18n.site` og redigere de `xxx.yml` filer under `.i18n/data/blog` , og ændre tidsstemplet til et negativt tal (flere negative tal vil blive sorteret fra største til mindste).