# Thempleite Ya Blog

`i18n/conf.yml` go tšwa go `use: Blog` e ra gore go šomiša thempleite ya blog bakeng sa go fetolela.

Faele ya `markdown` ya poso ya blog e hloka go beakanya tshedimošo ya meta.

Tshedimošo ya meta e swanetše go ba mathomong a faele, e thoma ka `---` gomme e fele ka `---` Sebopego sa tshedimošo ya peakanyo bogareng ke `YAML` .

Peakanyo ya faele ya demo ke ka tsela ye e latelago:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` e laetša kakaretšo ya diteng, yeo e tlago bontšhwa letlakaleng la tšhupamabaka ya blog.

Ka thušo ya `YMAL` ' . | `Popopolelo, o ka ngwala dikakaretšo tša mela ye mentši.

Peakanyo ya sehlare sa tšhupetšo ka lehlakoreng le letona la blog le yona ke difaele `TOC` (bona kgaolo ye e fetilego Ke fela dihlogo tšeo di lokeleditšwego go `TOC` tšeo di tlago tšwelela ka go tšhupamabaka ya letlakala la gae la blog).

Diathikele tšeo di se nago tshedimošo ya meta di ka se tšwelele letlakaleng la gae la blog, eupša di ka tšwelela mohlareng wa tšhupetšo ka go le letona.

## Tshedimošo Ya Mongwadi

Tshedimošo ya mongwadi e ka ngwalwa ka go tshedimošo ya meta ya sengwalwa, go swana le:

```yml
author: marlowe
```

Ke moka o rulaganye `author.yml` ka go tšhupetšo ya polelo ya mothopo gomme o oketše tshedimošo ya mongwadi, go swana le :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` le `title` ka moka ke tša boikgethelo. Ge e le gore `name` ga se ya bewa, leina la senotlelo (mo `marlowe` ) le tla šomišwa bjalo ka `name` .

Bona projeke ya demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) le [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Sehlogo Se Se Kgomaretšwego

Ge o hloka go kgomaretša sengwalwa godimo, hle kitima `i18n.site` gomme o rulaganye difaele `xxx.yml` ka fase ga `.i18n/data/blog` , gomme o fetoše setempe sa nako go palo ye mpe (dinomoro tše ntši tše mpe di tla hlophišwa go tšwa go tše kgolo go ya go tše nnyane).