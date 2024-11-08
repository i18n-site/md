# Blog Template

`i18n/conf.yml` mai `use: Blog` o lona uiga o le faʻaaogaina o le blog template mo le tuʻuina atu.

O le `markdown` faila o le blog post e manaʻomia le faʻatulagaina o faʻamatalaga meta.

Meta faʻamatalaga e tatau ona i ai i le amataga o le faila, amata i `---` ma faʻaiʻu i le `---` O le faʻatulagaina o faʻamatalaga faʻatulagaina i le ogatotonu o `YAML` .

O le faʻatulagaina o se faila demo e faʻapea:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` o loʻo faʻaalia ai le aotelega o anotusi, lea o le a faʻaalia i luga o le itulau faʻailoga blog.

Faatasi ai ma le fesoasoani a `YMAL` ' | `Syntax, e mafai ona e tusia ni aotelega e tele laina.

O le faʻatulagaina o le laʻau faʻatonu i le itu taumatau o le blog o `TOC` faila foi (silasila i le mataupu muamua) Naʻo tala o loʻo lisiina i le `TOC` o le a faʻaalia i le blog homepage index.

O tala e leai ni fa'amatalaga meta o le a le fa'aalia i luga o le itulau autu o le blog, ae mafai ona fa'aalia i le la'au fa'atonu i le itu taumatau.

## Fa'amatalaga a Le Tusitala

E mafai ona tusia faʻamatalaga a le tusitala i faʻamatalaga meta o le tusiga, e pei o:

```yml
author: marlowe
```

Ona fa'asa'o lea o `author.yml` ile fa'atonuga o le gagana fa'apogai ma fa'aopoopo fa'amatalaga a le tusitala, pei ole :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ma le `title` e filifili uma. Afai e le o setiina `name` , o le igoa autu (nei `marlowe` ) o le a faʻaaogaina e pei o `name` .

Va'ai fa'ata'ita'iga poloketi [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ma le [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Fa'amau Tala

Afai e te manaʻomia le pine o le tusiga i le pito i luga, faʻamolemole tamoʻe `i18n.site` ma faʻasaʻo le `xxx.yml` faila i lalo ole `.i18n/data/blog` , ma sui le timestamp i se numera le lelei (tele numera le lelei o le a faʻavasega mai le tele i le laʻititi).