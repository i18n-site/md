# Blog Sjabloon

`i18n/conf.yml` uit `use: Blog` beteken om die blogsjabloon vir lewering te gebruik.

Die `markdown` lêer van die blogplasing moet meta-inligting opstel.

Meta-inligting moet aan die begin van die lêer wees, begin met `---` en eindig met `---` Die formaat van die konfigurasie-inligting in die middel is `YAML` .

Die konfigurasie van 'n demo-lêer is soos volg:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` dui die inhoudsopsomming aan, wat op die blog-indeksbladsy vertoon sal word.

Met die hulp van `YMAL` ' | `Sintaksis, jy kan multi-reël opsommings skryf.

Die konfigurasie van die gidsboom aan die regterkant van die blog is ook `TOC` lêers (sien die vorige hoofstuk Slegs artikels wat in `TOC` gelys is, sal in die blog-tuisblad-indeks verskyn).

Artikels wat nie meta-inligting bevat nie, sal nie op die blog-tuisblad verskyn nie, maar kan in die gidsboom aan die regterkant verskyn.

## Skrywer Inligting

Outeurinligting kan in die meta-inligting van die artikel geskryf word, soos:

```yml
author: marlowe
```

Redigeer dan `author.yml` in die brontaalgids en voeg outeurinligting by, soos :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` en `title` is almal opsioneel. As `name` nie gestel is nie, sal die sleutelnaam (hier `marlowe` ) as `name` gebruik word.

Sien demo-projek [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) en [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Gespelde Artikel

As jy die artikel na bo moet vaspen, hardloop asseblief `i18n.site` en wysig die `xxx.yml` lêers onder `.i18n/data/blog` , en verander die tydstempel na 'n negatiewe getal (veelvuldige negatiewe getalle sal van grootste na kleinste gesorteer word).