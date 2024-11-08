# Plantilia Ti Blog

`i18n/conf.yml` iti `use: Blog` ket kayatna a sawen ti panagusar ti plantilia ti blog para iti panagiparang.

Ti `markdown` a file ti blog post ket kasapulan a mangikonfigura ti meta nga impormasion.

Ti meta nga impormasion ket masapul nga adda iti rugi ti papeles, mangrugi iti `---` ken agpatingga iti `---` Ti pormat ti impormasion ti panagisaad iti tengnga ket `YAML` .

Ti konfigurasion ti demo file ket kas ti sumaganad:

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

Babaen ti tulong ti `YMAL` '. | `Sintaksis, mabalinmo ti agsurat kadagiti adu a linia a pakagupgopan.

Ti panagisaad ti kayo ti direktorio iti kannawan a sikigan ti blog ket `TOC` met a file (kitaen ti napalabas a kapitulo Dagiti laeng artikulo a nailista iti `TOC` ti agparang iti indeks ti homepage ti blog).

Dagiti artikulo nga awan ti linaon ti meta nga impormasion ket saan nga agparang iti homepage ti blog, ngem mabalin nga agparang iti kayo ti direktorio iti kannawan.

## Impormasion Ti Autor

Ti impormasion ti autor ket mabalin a maisurat iti meta nga impormasion ti artikulo, a kas ti:

```yml
author: marlowe
```

Kalpasanna, i-edit `author.yml` iti direktorio ti taudan a pagsasao ken manginayon ti impormasion ti autor, a kas ti :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ken `title` ket opsional amin. No saan a naikeddeng `name` , ti nagan ti tulbek (ditoy `marlowe` ) ket mausarto a kas `name` .

Kitaen ti proyekto ti demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ken [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Naipit Nga Artikulo

No kasapulam nga i-pin ti artikulo iti ngato, pangngaasim nga tarayen `i18n.site` ken i-edit ti `xxx.yml` a papeles iti baba `.i18n/data/blog` , ken baliwam ti timestamp iti negatibo a numero (adu a negatibo a numero ket maurnos manipud iti kadakkelan aginggana iti kabassitan).