# Blog Template

`i18n/conf.yml` tawm ntawm `use: Blog` txhais tau tias siv lub blog template rau rendering.

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

Nrog kev pab ntawm `YMAL` '|'Syntax, koj tuaj yeem sau cov ntsiab lus ntau kab.

Kev teeb tsa ntawm cov ntawv teev npe ntawm sab xis ntawm blog kuj tseem yog `TOC` cov ntaub ntawv (saib `TOC` dhau los).

Cov khoom uas tsis muaj cov ntaub ntawv meta yuav tsis tshwm rau ntawm nplooj ntawv blog, tab sis tuaj yeem tshwm sim hauv nplooj ntawv ntawm sab xis.

Yog tias koj xav tau pin cov kab lus mus rau sab saum toj, thov khiav `i18n.site` thiab hloov kho `xxx.yml` cov ntaub ntawv hauv qab no `.i18n/data/blog` , thiab hloov lub sij hawm mus rau tus lej tsis zoo (ntau tus lej tsis zoo yuav raug txheeb xyuas los ntawm me mus rau qhov loj hauv tus nqi tiag).