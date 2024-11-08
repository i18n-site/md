# Templed Blog

Mae `i18n/conf.yml` allan o `use: Blog` yn golygu defnyddio'r templed blog ar gyfer rendro.

Mae angen i ffeil `markdown` y post blog ffurfweddu gwybodaeth meta.

Rhaid i wybodaeth meta fod ar ddechrau'r ffeil, gan ddechrau gyda `---` a gorffen ag `---` Fformat y wybodaeth ffurfweddu yn y canol yw `YAML` .

Mae ffurfweddiad ffeil demo fel a ganlyn:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

Mae `brief` yn nodi'r crynodeb o'r cynnwys, a fydd yn cael ei arddangos ar dudalen mynegai'r blog.

Gyda chymorth `YMAL` ' | `Cystrawen, gallwch ysgrifennu crynodebau aml-linell.

Mae ffurfweddiad y goeden cyfeiriadur ar ochr dde'r blog hefyd yn `TOC` ffeil (gweler y bennod flaenorol) `TOC`

Ni fydd erthyglau nad ydynt yn cynnwys meta gwybodaeth yn ymddangos ar hafan y blog, ond gallant ymddangos yn y goeden cyfeiriadur ar y dde.

## Gwybodaeth Awdur

Gellir ysgrifennu gwybodaeth awdur yng ngwybodaeth meta yr erthygl, megis:

```yml
author: marlowe
```

Yna golygwch `author.yml` yn y cyfeiriadur iaith ffynhonnell ac ychwanegu gwybodaeth awdur, megis :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

Mae `name` , `url` a `title` i gyd yn ddewisol. Os nad yw `name` wedi'i osod, bydd yr enw bysell (yma `marlowe` ) yn cael ei ddefnyddio fel `name` .

Gweler prosiect demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ac [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Erthygl Wedi'i Phinio

Os oes angen pinio'r erthygl i'r brig, rhedwch `i18n.site` a golygu'r `xxx.yml` ffeil o dan `.i18n/data/blog` , a newid y stamp amser i rif negatif (bydd rhifau negatif lluosog yn cael eu didoli o'r mwyaf i'r lleiaf).