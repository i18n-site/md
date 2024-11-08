# Blog Schabloun

`i18n/conf.yml` vun `use: Blog` heescht benotzt de Blog Schabloun fir Rendering.

D' `markdown` Datei vum Blog Post muss Meta Informatioun konfiguréieren.

Meta Informatioun muss am Ufank vun der Datei sinn, ugefaange mat `---` a mat `---` D'Format vun der Konfiguratiounsinformatioun an der Mëtt ass `YAML` .

D'Konfiguratioun vun enger Demo-Datei ass wéi follegt:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` weist den Inhaltsresumé un, deen op der Blog Index Säit ugewise gëtt.

Mat der Hëllef vun `YMAL` ' | `Syntax, Dir kënnt Multi-Linn Zesummefaassungen schreiwen.

D'Konfiguratioun vum Verzeechnesbam op der rietser Säit vum Blog ass och `TOC` Dateien (kuckt dat viregt Kapitel Nëmmen Artikelen, déi an `TOC` opgezielt sinn, erschéngen am Blog Homepage Index.

Artikelen déi keng Meta-Informatioun enthalen erschéngen net op der Blog-Homepage, awer kënnen am Verzeechnesbam op der rietser Säit erschéngen.

## Auteur Informatiounen

Auteur Informatioun kann an der Meta Informatioun vum Artikel geschriwwe ginn, sou wéi:

```yml
author: marlowe
```

Dann ännert `author.yml` am Quellsproochverzeechnes a füügt Auteurinformatioun un, wéi :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` an `title` sinn all fakultativ. Wann `name` net agestallt ass, gëtt de Schlësselnumm (hei `marlowe` ) als `name` benotzt.

Kuckt Demo Projet [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) an [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Gepecht Artikel

Wann Dir den Artikel un d'Spëtzt pinne musst, fuert w.e.g. `i18n.site` an ännert déi `xxx.yml` Dateien ënner `.i18n/data/blog` , a ännert den Zäitstempel op eng negativ Zuel (méi negativ Zuelen ginn vu gréissten op déi klengst zortéiert).