# Blogg Sniðmát

`i18n/conf.yml` af `use: Blog` þýðir að nota bloggsniðmátið til að birta.

`markdown` skrá bloggfærslunnar þarf að stilla meta upplýsingar.

Meta upplýsingar verða að vera í upphafi skráarinnar, byrja á `---` og enda á `---` Snið stillingarupplýsinganna í miðjunni er `YAML` .

Uppsetning kynningarskráar er sem hér segir:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` gefur til kynna innihaldssamantektina sem birtist á bloggsíðunni.

Með hjálp `YMAL` '|`Syntax, þú getur skrifað multi-line yfirlit.

Uppsetning möpputrésins hægra megin á blogginu er `TOC` `TOC` skrár (sjá fyrri kafla).

Greinar sem innihalda ekki meta upplýsingar munu ekki birtast á heimasíðu bloggsins, en geta birst í skráartrénu til hægri.

Ef þú þarft að festa greinina efst, vinsamlegast keyrðu `i18n.site` og breyttu `xxx.yml` skrám fyrir neðan `.i18n/data/blog` og breyttu tímastimplinum í neikvæða tölu (margar neikvæðar tölur verða flokkaðar frá litlum til stórar í algildi).