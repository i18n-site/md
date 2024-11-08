# Blogo Ŝablono

`i18n/conf.yml` el `use: Blog` signifas uzi la blogan ŝablonon por bildigo.

La `markdown` dosiero de la blogaĵo bezonas agordi metainformojn.

Meta-informoj devas esti komence de la dosiero, komencante per `---` kaj finiĝante per `---` La formato de la agorda informo en la mezo estas `YAML` .

La agordo de demo-dosiero estas jena:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indikas la enhavresumon, kiu estos montrata sur la bloga indeksa paĝo.

Kun la helpo de `YMAL` ' | `Sintakso, vi povas skribi plurliniajn resumojn.

La agordo de la dosierujo ĉe la dekstra flanko de la blogo ankaŭ estas `TOC` dosieroj (vidu la antaŭan ĉapitron Nur artikoloj listigitaj en `TOC` aperos en la bloga hejmpaĝo).

Artikoloj kiuj ne enhavas metainformojn ne aperos sur la bloga hejmpaĝo, sed povas aperi en la dosierujo dekstre.

## Informoj Pri Aŭtoro

Aŭtorinformoj povas esti skribitaj en la metainformoj de la artikolo, kiel ekzemple:

```yml
author: marlowe
```

Poste redaktu `author.yml` en la fontlingva dosierujo kaj aldonu aŭtorajn informojn, kiel :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` kaj `title` estas ĉiuj laŭvolaj. Se `name` ne estas agordita, la ŝlosilnomo (ĉi tie `marlowe` ) estos uzata kiel `name` .

Vidu demoprojekton [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) kaj [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Alpinglita Artikolo

Se vi bezonas alpingli la artikolon al la supro, bonvolu ruli `i18n.site` kaj redakti la `xxx.yml` dosierojn sub `.i18n/data/blog` , kaj ŝanĝi la tempomarkon al negativa nombro (multoblaj negativaj nombroj estos ordigitaj de plej granda al plej malgranda).