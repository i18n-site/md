# Blog Template

`i18n/conf.yml` tawm ntawm `use: Blog` txhais tau hais tias siv lub blog template rau rendering.

`markdown` cov ntaub ntawv ntawm blog ncej yuav tsum tau teeb tsa cov ntaub ntawv meta.

Meta cov ntaub ntawv yuav tsum yog nyob rau hauv qhov pib ntawm cov ntaub ntawv, pib nrog `---` thiab xaus nrog `---` Cov hom ntawv ntawm configuration ntaub ntawv nyob rau hauv nruab nrab yog `YAML` .

Kev teeb tsa ntawm cov ntaub ntawv demo yog raws li hauv qab no:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` qhia txog cov ntsiab lus cov ntsiab lus, uas yuav tshwm sim ntawm nplooj ntawv blog index.

Nrog kev pab ntawm `YMAL` ' | 'Syntax, koj tuaj yeem sau cov ntsiab lus ntau kab.

Kev teeb tsa ntawm cov ntawv teev npe ntawm sab xis ntawm blog kuj tseem yog `TOC` cov ntaub ntawv (saib `TOC` dhau los).

Cov khoom uas tsis muaj cov ntaub ntawv meta yuav tsis tshwm rau ntawm nplooj ntawv blog, tab sis tuaj yeem tshwm sim hauv cov ntawv teev npe ntawm sab xis.

## Cov Ntaub Ntawv Sau

Cov ntaub ntawv sau tuaj yeem sau rau hauv cov ntaub ntawv meta ntawm tsab xov xwm, xws li:

```yml
author: marlowe
```

Tom qab ntawd hloov kho `author.yml` nyob rau hauv cov npe hom lus thiab ntxiv cov ntaub ntawv sau, xws li :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` thiab `title` yog xaiv tau. Yog tias `name` tsis tau teeb tsa, lub npe tseem ceeb (ntawm no `marlowe` ) yuav raug siv ua `name` .

Saib demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) thiab [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Tsab Xov Xwm

Yog tias koj xav tau pin cov kab lus mus rau sab saum toj, thov khiav `i18n.site` thiab hloov kho `xxx.yml` cov ntaub ntawv hauv qab `.i18n/data/blog` , thiab hloov lub sijhawm rau tus lej tsis zoo (ntau tus lej tsis zoo yuav raug txheeb xyuas los ntawm ntau tshaj mus rau qhov tsawg tshaj plaws).