# Plantilia Ti Blog

`i18n/conf.yml` iti `use: Blog` ket kayatna a sawen ti panagusar ti plantilia ti blog para iti panagiparang.

Ti `markdown` a file ti blog post ket kasapulan a mangikonfigura ti meta nga impormasion.

Ti meta nga impormasion ket masapul nga adda iti rugi ti papeles, mangrugi iti `---` ken agpatingga iti `---` Ti pormat ti impormasion ti panagisaad iti tengnga ket `YAML` .

Ti panagisaad ti maysa a demo a file ket kas ti sumaganad:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ket mangipakita ti pakagupgopan ti linaon, a maiparangto iti panid ti indeks ti blog.

Babaen ti tulong ti `YMAL` '.|`Sintaksis, mabalinmo ti agsurat kadagiti adu a linia a pakagupgopan.

Ti panagisaad ti kayo ti direktorio iti kannawan a sikigan ti blog ket `TOC` met a file (kitaen ti napalabas a kapitulo Dagiti laeng artikulo a nailista iti `TOC` ti agparang iti indeks ti homepage ti blog).

Dagiti artikulo nga awan ti linaon ti meta nga impormasion ket saan nga agparang iti homepage ti blog, ngem mabalin nga agparang iti kayo ti direktorio iti kannawan.

No kasapulam nga i-pin ti artikulo iti ngato, pangngaasi nga tarayen `i18n.site` ken i-edit ti `xxx.yml` a papeles iti baba `.i18n/data/blog` , ken baliwam ti timestamp iti negatibo a numero (adu a negatibo a numero ket maurnos manipud iti bassit aginggana iti dakkel iti absoluto a pateg).