# Mudell Tal-Blog

`i18n/conf.yml` minn `use: Blog` tfisser li tuża l-mudell tal-blog għall-għoti.

Il-fajl `markdown` tal-blog post jeħtieġ li jiġi kkonfigurat meta informazzjoni.

Meta informazzjoni għandha tkun fil-bidu tal-fajl, tibda `---` u tispiċċa `---` Il-format tal-informazzjoni tal-konfigurazzjoni fin-nofs huwa `YAML` .

Il-konfigurazzjoni ta 'fajl demo hija kif ġej:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` jindika s-sommarju tal-kontenut, li se jintwera fuq il-paġna tal-indiċi tal-blog.

Bl-għajnuna ta `YMAL` ' | `Sintassi, tista' tikteb sommarji b'ħafna linji.

Il-konfigurazzjoni tas-siġra tad-direttorju fuq in-naħa tal-lemin tal-blog hija wkoll `TOC` fajls (ara l-kapitolu preċedenti biss l-artikoli elenkati `TOC` se jidhru fl-indiċi tal-homepage tal-blog).

L-artikoli li ma fihomx meta informazzjoni mhux se jidhru fuq il-homepage tal-blog, iżda jistgħu jidhru fis-siġra tad-direttorju fuq il-lemin.

## Informazzjoni Tal-Awtur

L-informazzjoni tal-awtur tista' tinkiteb fil-meta informazzjoni tal-artiklu, bħal:

```yml
author: marlowe
```

Imbagħad editja `author.yml` fid-direttorju tal-lingwa tas-sors u żid l-informazzjoni tal-awtur, bħal :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` u `title` huma kollha fakultattivi. Jekk `name` ma jkunx issettjat, l-isem taċ-ċavetta (hawnhekk `marlowe` ) se jintuża bħala `name` .

Ara l-proġett demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) u [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artiklu Ippinjat

Jekk għandek bżonn tpinġi l-artiklu fil-quċċata, jekk jogħġbok mexxi `i18n.site` u editja l-fajls `xxx.yml` taħt `.i18n/data/blog` , u ibdel il-timestamp għal numru negattiv (numri negattivi multipli jiġu magħżula mill-akbar għall-iżgħar).