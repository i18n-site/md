# Blog Schabloun

`i18n/conf.yml` vun `use: Blog` heescht d'Benotzung vun der Blog Schabloun fir Rendering.

D' `markdown` Datei vum Blog Post muss Meta Informatioun konfiguréieren.

Meta-Informatioun muss am Ufank vun der Datei sinn, ugefaange mat `---` a mat `---` D'Format vun der Konfiguratiounsinformatioun an der Mëtt ass `YAML` .

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

Mat der Hëllef vun `YMAL` '|`Syntax, Dir kënnt Multi-Linn Zesummefaassungen schreiwen.

D'Konfiguratioun vum Verzeechnesbam op der rietser Säit vum Blog ass och `TOC` Dateien (kuckt dat viregt Kapitel Nëmmen Artikelen, déi am `TOC` opgezielt sinn, erschéngen am Blog Homepage Index.

Artikelen déi keng Meta-Informatioun enthalen erschéngen net op der Blog-Homepage, awer kënnen am Verzeechnesbam op der rietser Säit erschéngen.

Wann Dir den Artikel un d'Spëtzt pinne musst, fuert w.e.g. `i18n.site` an ännert déi `xxx.yml` Dateien ënner `.i18n/data/blog` , an ännert den Zäitstempel op eng negativ Zuel (Méi negativ Zuelen gi vu kleng op grouss am absolute Wäert zortéiert).