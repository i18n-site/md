# Blog Template

`i18n/conf.yml` ex `use: Blog` ope diarii templates reddendi.

Tabula `markdown` diarii nuntia meta configurare indiget.

Meta informationes debet esse in initio tabellae, incipiens ab `---` et usque ad `---` Forma configurationis informationes in medio est `YAML` .

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

Ope `YMAL` '|`Syntax, multi-linea summaria scribere potes.

Configuratio indicis arboris in dextra parte diarii est etiam `TOC` fasciculi (vide caput `TOC` ).

Articuli qui meta informationes non continent in pagina diarii non apparent, sed in indice ligno dextrorsum possunt apparere.

Si articulum ad cacumen suspendere debes, curre `i18n.site` et `xxx.yml` fasciculos infra `.i18n/data/blog` recense, et notam ad numerum negativum muta (multiplex numerus negativus a parvo ad magnum absolutum valorem digestus erit).