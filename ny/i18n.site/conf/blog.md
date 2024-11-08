# Blog Template

`i18n/conf.yml` mwa `use: Blog` amatanthauza kugwiritsa ntchito template ya blog popereka.

Fayilo ya `markdown` ya positi yabulogu iyenera kukonza zambiri za meta.

Zambiri za meta ziyenera kukhala kumayambiriro kwa fayilo, kuyambira `---` ndi kutha ndi `---` Maonekedwe a chidziwitso chokonzekera pakati ndi `YAML` .

Kukonzekera kwa fayilo ya demo kuli motere:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ikuwonetsa chidule cha zomwe zili, zomwe zidzawonetsedwa patsamba labulogu.

Mothandizidwa ndi `YMAL` ' | `Syntax, mutha kulemba chidule cha mizere yambiri.

Kukonzekera kwa mtengo wowongolera kumanja kwabulogu kulinso mafayilo `TOC` (onani mutu wam'mbuyo) Ndi zolemba zokha zomwe zalembedwa mu `TOC` zomwe zimawoneka patsamba loyambira labulogu.

Zolemba zomwe zilibe chidziwitso cha meta sizidzawonekera patsamba loyambira labulogu, koma zitha kuwonekera mumndandanda womwe uli kumanja.

## Zambiri Za Wolemba

Zambiri za wolemba zitha kulembedwa muzambiri zankhaniyo, monga:

```yml
author: marlowe
```

Kenako sinthani `author.yml` mu chikwatu cha chilankhulo ndikuwonjezera zambiri za wolemba, monga :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ndi `title` zonse ndizosankha. Ngati `name` sichinakhazikitsidwe, dzina lofunikira (pano `marlowe` ) lidzagwiritsidwa ntchito ngati `name` .

Onani polojekiti yowonetsera [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ndi [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Nkhani Yosindikizidwa

Ngati mukufuna kusindikiza nkhaniyo pamwamba, chonde thamangani `i18n.site` ndikusintha mafayilo `xxx.yml` omwe ali pansipa `.i18n/data/blog` , ndikusintha sitampuyo kukhala nambala yolakwika (manambala angapo otsutsa adzasanjidwa kuchokera ku zazikulu mpaka zazing'ono).