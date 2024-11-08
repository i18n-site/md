# Modèle Ya Blog

`i18n/conf.yml` sur `use: Blog` elakisi kosalela modèle ya blog pona rendu.

Fichier `markdown` ya poste ya blog esengeli ko configurer ba méta informations.

Ba information ya méta esengeli ezala na ebandeli ya fichier, kobanda na `---` pe kosuka na `---` Format ya information ya configuration na kati ezali `YAML` .

Configuration ya fichier ya démonstration ezali boye:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` elakisi bokundoli ya makambo, oyo ekolakisama na lokasa ya index ya blog.

Na lisalisi ya `YMAL` ' . | `Syntaxe, okoki kokoma ba résumés ya ba lignes ebele.

Configuration ya nzete ya répertoire na ngambo ya droite ya blog ezali pe `TOC` fichiers (tala chapitre oyo eleki Kaka ba articles oyo etangami na `TOC` nde ekobima na index ya page d’accueil ya blog.

Ba articles oyo ezali na ba informations ya méta te ekobima te na page d’accueil ya blog, kasi ekoki kobima na nzete ya répertoire na droite.

## Ba Informations Ya Mokomi

Ba informations ya mokomi ekoki kokomama na méta information ya article, lokola :

```yml
author: marlowe
```

Na sima bongisa `author.yml` na répertoire ya monoko ya source mpe bakisa ba information ya mokomi, lokola :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` mpe `title` nyonso ezali ya kopona. Soki `name` etiamaki te, nkombo ya fungola (awa `marlowe` ) ekosalelama lokola `name` .

Tala projet ya démonstration [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) na [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Lisolo Oyo Ekangami Na Pin

Soki osengeli ko piner article na likolo, svp tambuisa `i18n.site` pe bongisa ba fichiers `xxx.yml` oyo ezali na se ya `.i18n/data/blog` , pe changer timestamp na nombre négatif (ba nombres négatifs ebele ekozala classé depuis ya munene ti na ya moke).