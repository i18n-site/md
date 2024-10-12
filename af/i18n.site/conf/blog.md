# Blog Sjabloon

`i18n/conf.yml` uit `use: Blog` beteken om die blogsjabloon vir lewering te gebruik.

Die `markdown` lêer van die blogplasing moet meta-inligting opstel.

Meta-inligting moet aan die begin van die lêer wees, begin met `---` en eindig met `---` Die formaat van die konfigurasie-inligting in die middel is `YAML` .

'n Demo-lêer word soos volg gekonfigureer:

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

Met die hulp van `YMAL` '|`Sintaksis, jy kan multi-reël opsommings skryf.

Die konfigurasie van die gidsboom aan die regterkant van die blog is ook `TOC` lêers (sien die vorige hoofstuk Slegs artikels wat in `TOC` gelys is, sal in die blog-tuisblad-indeks verskyn).

Artikels wat nie meta-inligting bevat nie, sal nie op die blog-tuisblad verskyn nie, maar kan in die gidsboom aan die regterkant verskyn.

As jy die artikel na bo moet vaspen, hardloop asseblief `i18n.site` en wysig die `xxx.yml` lêers onder `.i18n/data/blog` , en verander die tydstempel na 'n negatiewe getal (veelvuldige negatiewe getalle sal in absolute waarde van klein na groot gesorteer word).