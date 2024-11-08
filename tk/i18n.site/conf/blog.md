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

`YMAL` 'kömegi bilen | `Sintaksis, köp setirli gysgaça mazmun ýazyp bilersiňiz.

Blogyň sag tarapyndaky katalog agajynyň konfigurasiýasy hem `TOC` faýl ( `TOC` bölüme serediň).

Meta maglumatyny öz içine almaýan makalalar blogyň baş sahypasynda peýda bolmaz, ýöne sag tarapdaky katalog agajynda peýda bolup biler.

## Awtor Maglumatlary

Awtor maglumatlary makalanyň meta maglumatlarynda ýazylyp bilner:

```yml
author: marlowe
```

Soňra çeşme dil katalogynda `author.yml` redaktirläň we awtor maglumatlary goşuň :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` we `title` hemmesi islege bagly. `name` kesgitlenmedik bolsa, açar ady (şu ýerde `marlowe` ) `name` hökmünde ulanylar.

[`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) we [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) demo taslamasyna serediň

## Berkidilen Makala

Makalany ýokarsyna gysmaly bolsaňyz, `i18n.site` işlediň we `.i18n/data/blog` faýlyň aşagyndaky `xxx.yml` faýly redaktirläň we wagt belgisini otrisatel sana üýtgediň (köp sanly san ulydan kiçä tertiplener).