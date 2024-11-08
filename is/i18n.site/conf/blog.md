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

Með hjálp `YMAL` ' | `Syntax, þú getur skrifað multi-line yfirlit.

Uppsetning möpputrésins hægra megin á blogginu er `TOC` `TOC` skrár (sjá fyrri kafla).

Greinar sem innihalda ekki meta upplýsingar munu ekki birtast á heimasíðu bloggsins, en geta birst í skráartrénu til hægri.

## Upplýsingar Um Höfund

Höfundarupplýsingar geta verið skrifaðar í metaupplýsingar greinarinnar, svo sem:

```yml
author: marlowe
```

Breyttu síðan `author.yml` í frummálsskránni og bættu við höfundaupplýsingum, svo sem :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` og `title` eru allir valfrjálsir. Ef `name` er ekki stillt verður lykilheitið (hér `marlowe` ) notað sem `name` .

Sjá kynningarverkefni [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) og [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Festa Grein

Ef þú þarft að festa greinina efst, vinsamlegast keyrðu `i18n.site` og breyttu `xxx.yml` skrám fyrir neðan `.i18n/data/blog` og breyttu tímastimplinum í neikvæða tölu (margar neikvæðar tölur verða flokkaðar frá stærstu til minnstu).