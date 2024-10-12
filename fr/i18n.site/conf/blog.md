# Modèle De Blog

`i18n/conf.yml` sur `use: Blog` signifie utiliser le modèle de blog pour le rendu.

Le fichier `markdown` de l'article de blog doit configurer les méta-informations.

Les méta-informations doivent se trouver au début du fichier, en commençant par `---` et en terminant par `---` Le format des informations de configuration au milieu est `YAML` .

Un fichier de démonstration est configuré comme suit :

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indique le résumé du contenu, qui sera affiché sur la page d'index du blog.

Avec l'aide de `YMAL` '|`Syntaxe, vous pouvez rédiger des résumés sur plusieurs lignes.

La configuration de l'arborescence des répertoires sur le côté droit du blog est également `TOC` fichier (voir le chapitre précédent). Seuls les articles listés en `TOC` apparaîtront dans l'index de la page d'accueil du blog.

Les articles qui ne contiennent pas de méta-informations n'apparaîtront pas sur la page d'accueil du blog, mais pourront apparaître dans l'arborescence des répertoires à droite.

Si vous devez épingler l'article en haut, veuillez exécuter `i18n.site` et modifier les `xxx.yml` fichiers ci-dessous `.i18n/data/blog` , et changer l'horodatage en un nombre négatif (plusieurs nombres négatifs seront triés de petit à grand en valeur absolue).