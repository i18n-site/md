# Templed Blog

Mae `i18n/conf.yml` allan o `use: Blog` yn golygu defnyddio'r templed blog ar gyfer rendro.

Mae angen i ffeil `markdown` y post blog ffurfweddu gwybodaeth meta.

Rhaid i wybodaeth meta fod ar ddechrau'r ffeil, gan ddechrau gyda `---` a gorffen ag `---` Fformat y wybodaeth ffurfweddu yn y canol yw `YAML` .

Mae ffeil demo wedi'i ffurfweddu fel a ganlyn:

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

Gyda chymorth `YMAL` '|`Cystrawen, gallwch ysgrifennu crynodebau aml-linell.

Mae ffurfweddiad y goeden cyfeiriadur ar ochr dde'r blog hefyd yn `TOC` ffeil (gweler y bennod flaenorol) `TOC`

Ni fydd erthyglau nad ydynt yn cynnwys meta gwybodaeth yn ymddangos ar hafan y blog, ond gallant ymddangos yn y goeden cyfeiriadur ar y dde.

Os oes angen pinio'r erthygl i'r brig, rhedwch `i18n.site` a golygu'r `xxx.yml` ffeil o dan `.i18n/data/blog` , a newid y stamp amser i rif negatif (bydd rhifau negyddol lluosog yn cael eu didoli o fach i fawr mewn gwerth absoliwt).