# Template Sa Blog

`i18n/conf.yml` sa `use: Blog` nagpasabot sa paggamit sa template sa blog para sa paghubad.

Ang `markdown` nga file sa post sa blog kinahanglan nga i-configure ang impormasyon sa meta.

Ang impormasyon sa meta kinahanglang anaa sa sinugdanan sa payl, sugod sa `---` ug matapos sa `---` Ang format sa impormasyon sa configuration sa tunga mao ang `YAML` .

Ang usa ka demo file gi-configure sama sa mosunod:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nagpakita sa summary sa sulod, nga ipakita sa pahina sa index sa blog.

Sa tabang sa `YMAL` '|`Syntax, mahimo nimong isulat ang mga summary sa daghang linya.

Ang pag-configure sa punoan sa direktoryo sa tuo nga bahin sa blog `TOC` usab nga mga file (tan-awa ang miaging kapitulo Mga artikulo ra nga nalista sa `TOC` ang makita sa index sa homepage sa blog).

Ang mga artikulo nga walay impormasyon sa meta dili makita sa homepage sa blog, apan mahimong makita sa punoan sa direktoryo sa tuo.

Kung kinahanglan nimo nga i-pin ang artikulo sa ibabaw, palihug padagana `i18n.site` ug usba ang `xxx.yml` nga mga file sa ubos sa `.i18n/data/blog` , ug usba ang timestamp sa usa ka negatibo nga numero (daghang negatibo nga mga numero ang paghan-ay gikan sa gamay hangtod sa dako sa hingpit nga kantidad).