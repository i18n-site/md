# Mudell Tal-Blog

`i18n/conf.yml` minn `use: Blog` tfisser li tuża l-mudell tal-blog għall-għoti.

Il-fajl `markdown` tal-blog post jeħtieġ li jiġi kkonfigurat meta informazzjoni.

Meta informazzjoni għandha tkun fil-bidu tal-fajl, tibda `---` u tispiċċa `---` Il-format tal-informazzjoni tal-konfigurazzjoni fin-nofs huwa `YAML` .

Fajl demo huwa kkonfigurat kif ġej:

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

Bl-għajnuna ta `YMAL` '|`Sintassi, tista' tikteb sommarji b'ħafna linji.

Il-konfigurazzjoni tas-siġra tad-direttorju fuq in-naħa tal-lemin tal-blog hija wkoll `TOC` fajls (ara l-kapitolu preċedenti biss l-artikoli elenkati `TOC` se jidhru fl-indiċi tal-homepage tal-blog).

L-artikoli li ma fihomx meta informazzjoni mhux se jidhru fuq il-homepage tal-blog, iżda jistgħu jidhru fis-siġra tad-direttorju fuq il-lemin.

Jekk għandek bżonn tpinġi l-artiklu fil-quċċata, jekk jogħġbok mexxi `i18n.site` u editja t- `xxx.yml` fajls taħt `.i18n/data/blog` , u ibdel it-timestamp għal numru negattiv (numri negattivi multipli jiġu magħżula minn żgħar għal kbar f'valur assolut).