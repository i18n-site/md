# Modèle De Blog

`i18n/conf.yml` sur `use: Blog` signifie utiliser le modèle de blog pour le rendu.

Le fichier `markdown` de l'article de blog doit configurer les méta-informations.

Les méta-informations doivent se trouver au début du fichier, en commençant par `---` et en terminant par `---` Le format des informations de configuration au milieu est `YAML` .

La configuration d'un fichier de démonstration est la suivante :

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

Avec l'aide de `YMAL` ' | `Syntaxe, vous pouvez rédiger des résumés sur plusieurs lignes.

La configuration de l'arborescence des répertoires sur le côté droit du blog est également `TOC` fichier (voir le chapitre précédent). Seuls les articles listés en `TOC` apparaîtront dans l'index de la page d'accueil du blog.

Les articles qui ne contiennent pas de méta-informations n'apparaîtront pas sur la page d'accueil du blog, mais pourront apparaître dans l'arborescence des répertoires à droite.

## Informations Sur L'auteur

Les informations sur l'auteur peuvent être écrites dans les méta-informations de l'article, telles que :

```yml
author: marlowe
```

Modifiez ensuite `author.yml` dans le répertoire de la langue source et ajoutez les informations sur l'auteur, telles que :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` et `title` sont tous facultatifs. Si `name` n'est pas défini, le nom de la clé (ici `marlowe` ) sera utilisé comme `name` .

Voir les projets démo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) et [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Article Épinglé

Si vous devez épingler l'article en haut, veuillez exécuter `i18n.site` et modifier les `xxx.yml` fichiers ci-dessous `.i18n/data/blog` , et changer l'horodatage en un nombre négatif (plusieurs nombres négatifs seront triés du plus grand au plus petit).