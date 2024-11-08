# Blog Template

`i18n/conf.yml` ex `use: Blog` ope diarii templates reddendi.

Tabula `markdown` diarii nuntia meta configurare indiget.

Meta informationes debet esse in principio tabellae, incipiens ab `---` et usque ad `---` Forma configurationis informationis in medio est `YAML` .

Configuratio demo fasciculi talis est:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` summarium contentum indicat, quod in pagina diarii indice ostendetur.

Ope `YMAL` ' | `Syntax, multi-linea summaria scribere potes.

Configuratio indicis arboris in dextra parte diarii est etiam `TOC` fasciculi (vide caput `TOC` ).

Articuli qui meta informationes non continent in pagina diarii non apparent, sed in indice ligno dextrorsum possunt apparere.

## Auctor Notitia

Auctor informationis meta scribi potest in notitia articuli, ut:

```yml
author: marlowe
```

Deinde `author.yml` in fonte linguarum directorium recensere et auctoris notitias addere, quales sunt :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` et `title` omnes ad libitum. Si `name` non ponitur, nomen clavis (hic `marlowe` ) utendum est `name` .

Vide demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) et [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Adfixum Articulum

Si articulum ad cacumen suspendere debes, curre `i18n.site` et `xxx.yml` fasciculos infra `.i18n/data/blog` recense, et notam ad numerum negativum muta (multiplices numeri negativi a maximis ad minimos digesti erunt).