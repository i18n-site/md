# Blog Şablony

`use: Blog` den `i18n/conf.yml` görkezmek üçin blog şablonyny ulanmagy aňladýar.

Blog ýazgysynyň `markdown` faýly meta maglumatyny sazlamaly.

Meta maglumatlary faýlyň başynda `---` dan başlap, `---` bilen gutarmaly. Ortadaky konfigurasiýa maglumatlarynyň formaty `YAML` .

Demo faýlyň konfigurasiýasy aşakdaky ýaly:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` , blog indeks sahypasynda görkeziljek mazmun mazmunyny görkezýär.

`YMAL` 'kömegi bilen|`Sintaksis, köp setirli gysgaça mazmun ýazyp bilersiňiz.

Blogyň sag tarapyndaky katalog agajynyň konfigurasiýasy hem `TOC` faýl (öňki bölüme serediň) Blogyň baş sahypasynda diňe `TOC` -de görkezilen makalalar peýda bolar.

Meta maglumatlary öz içine almaýan makalalar blogyň baş sahypasynda peýda bolmaz, ýöne sag tarapdaky katalog agajynda peýda bolup biler.

Makalany ýokarsyna gysmak zerur bolsa, `i18n.site` işlediň we `.i18n/data/blog` faýlyň aşagyndaky `xxx.yml` faýly redaktirläň we wagt belligini otrisatel sana üýtgediň (köp sanly negatiw sanlar ululykdan mutlak bahada tertiplener).