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

Mei help fan `YMAL` ' | `Syntaksis, jo kinne gearfettings mei meardere rigels skriuwe.

De konfiguraasje fan 'e mapbeam oan' e rjochterkant fan 'e blog is ek `TOC` bestannen (sjoch it foarige haadstik Allinich artikels neamd yn `TOC` sille ferskine yn' e blog-homepage-yndeks.

Artikels dy't gjin meta-ynformaasje befetsje sille net ferskine op 'e blog thússide, mar kinne ferskine yn' e mapbeam oan 'e rjochterkant.

## Auteur Ynformaasje

Auteurynformaasje kin skreaun wurde yn 'e meta-ynformaasje fan it artikel, lykas:

```yml
author: marlowe
```

Bewurkje dan `author.yml` yn 'e boarnetaalmap en foegje auteurynformaasje ta, lykas :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` en `title` binne allegear opsjoneel. As `name` net ynsteld is, sil de kaainamme (hjir `marlowe` ) brûkt wurde as `name` .

Sjoch demoprojekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) en [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Artikel

As jo moatte pin it artikel oan de top, please run `i18n.site` en bewurkje de `xxx.yml` triemmen ûnder `.i18n/data/blog` , en feroarje it tiidstempel nei in negatyf nûmer (meardere negative sifers wurde sortearre fan grutste nei lytste).