# Blog Sjabloan

`i18n/conf.yml` fan `use: Blog` betsjut it brûken fan it blogsjabloan foar rendering.

It `markdown` bestân fan 'e blogpost moat meta-ynformaasje konfigurearje.

Meta-ynformaasje moat oan it begjin fan 'e triem wêze, begjinnend mei `---` en einigje mei `---` It formaat fan 'e konfiguraasjeynformaasje yn 'e midden is `YAML` .

De konfiguraasje fan in demo-bestân is as folget:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` jout de ynhâld gearfetting oan, dy't sil wurde werjûn op de blog yndeks side.

Mei help fan `YMAL` '|`Syntaksis, jo kinne gearfettings mei meardere rigels skriuwe.

De konfiguraasje fan 'e mapbeam oan' e rjochterkant fan 'e blog is ek `TOC` bestannen (sjoch it foarige haadstik Allinich artikels neamd yn `TOC` sille ferskine yn' e blog-homepage-yndeks.

Artikels dy't gjin meta-ynformaasje befetsje sille net ferskine op 'e blog thússide, mar kinne ferskine yn' e mapbeam oan 'e rjochterkant.

As jo moatte pin it artikel oan de top, please run `i18n.site` en bewurkje de `xxx.yml` triemmen ûnder `.i18n/data/blog` , en feroarje it tiidstempel nei in negatyf nûmer (meardere negative sifers wurde sortearre fan lyts nei grut yn absolute wearde).