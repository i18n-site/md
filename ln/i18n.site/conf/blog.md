# Modèle Ya Blog

`i18n/conf.yml` sur `use: Blog` elakisi kosalela modèle ya blog pona rendu.

Fichier `markdown` ya poste ya blog esengeli ko configurer ba méta informations.

Ba information ya méta esengeli ezala na ebandeli ya fichier, kobanda na `---` pe kosuka na `---` Format ya information ya configuration na kati ezali `YAML` .

Fichier ya démonstration e configuré boye:

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

Na lisalisi ya `YMAL` '.|`Syntaxe, okoki kokoma ba résumés ya ba lignes ebele.

Configuration ya nzete ya répertoire na ngambo ya droite ya blog ezali pe `TOC` fichiers (tala chapitre oyo eleki Kaka ba articles oyo etangami na `TOC` nde ekobima na index ya page d’accueil ya blog.

Ba articles oyo ezali na ba informations ya méta te ekobima te na page d’accueil ya blog, kasi ekoki kobima na nzete ya répertoire na droite.

Soki osengeli ko piner article na likolo, svp tambuisa `i18n.site` pe bongisa ba fichiers `xxx.yml` oyo ezali na se ya `.i18n/data/blog` , pe changer timestamp na nombre négatif (ba nombres négatifs ebele ekozala classés depuis petits à grandes na valeur absolue).