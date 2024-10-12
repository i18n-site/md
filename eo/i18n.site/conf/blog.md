# Blogo Ŝablono

`i18n/conf.yml` el `use: Blog` signifas uzi la blogan ŝablonon por bildigo.

La `markdown` dosiero de la blogaĵo bezonas agordi metainformojn.

Meta-informoj devas esti komence de la dosiero, komencante per `---` kaj finiĝante per `---` La formato de la agorda informo en la mezo estas `YAML` .

Demo-dosiero estas agordita jene:

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

Kun la helpo de `YMAL` '|`Sintakso, vi povas skribi plurliniajn resumojn.

La agordo de la dosierujo ĉe la dekstra flanko de la blogo ankaŭ estas `TOC` dosieroj (vidu la antaŭan ĉapitron Nur artikoloj listigitaj en `TOC` aperos en la bloga hejmpaĝo).

Artikoloj kiuj ne enhavas metainformojn ne aperos sur la bloga hejmpaĝo, sed povas aperi en la dosierujo dekstre.

Se vi bezonas alpingli la artikolon al la supro, bonvolu ruli `i18n.site` kaj redakti la `xxx.yml` dosierojn sub `.i18n/data/blog` , kaj ŝanĝi la tempomarkon al negativa nombro (multoblaj negativaj nombroj estos ordigitaj de malgranda al granda en absoluta valoro).