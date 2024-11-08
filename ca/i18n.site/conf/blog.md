# Plantilla De Blog

`i18n/conf.yml` de `use: Blog` significa utilitzar la plantilla del bloc per a la representació.

El fitxer `markdown` de la publicació del blog ha de configurar la metainformació.

La metainformació ha d'estar al principi del fitxer, començant per `---` i acabant amb `---` El format de la informació de configuració al mig és `YAML` .

La configuració d'un fitxer de demostració és la següent:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica el resum del contingut, que es mostrarà a la pàgina d'índex del bloc.

Amb l'ajuda de `YMAL` ' | `Sintaxi, podeu escriure resums de diverses línies.

La configuració de l'arbre de directoris a la part dreta del bloc també és `TOC` fitxers (vegeu el capítol anterior Només apareixeran els articles `TOC` a l'índex de la pàgina d'inici del blog).

Els articles que no continguin metainformació no apareixeran a la pàgina d'inici del blog, però poden aparèixer a l'arbre de directoris de la dreta.

## Informació De L'autor

La informació de l'autor es pot escriure a la metainformació de l'article, com ara:

```yml
author: marlowe
```

A continuació, editeu `author.yml` al directori de l'idioma font i afegiu informació de l'autor, com ara :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` i `title` són tots opcionals. Si no s'estableix `name` , el nom de la clau (aquí `marlowe` ) s'utilitzarà com a `name` .

Vegeu el projecte de demostració [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) i [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Article Fixat

Si necessiteu fixar l'article a la part superior, executeu `i18n.site` i editeu els `xxx.yml` fitxers per sota d' `.i18n/data/blog` i canvieu la marca de temps a un nombre negatiu (s'ordenaran diversos números negatius de més gran a més petit).