# U Mudellu Di Blog

`i18n/conf.yml` fora di `use: Blog` significa aduprà u mudellu di blog per rendering.

U schedariu `markdown` di u blog post hà bisognu di cunfigurà meta infurmazione.

A meta infurmazione deve esse à u principiu di u schedariu, cuminciendu cù `---` è finiscinu cù `---` U furmatu di l'infurmazioni di cunfigurazione in u mezu hè `YAML` .

A cunfigurazione di un schedariu demo hè a siguenti:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica u riassuntu di cuntenutu, chì serà affissatu nantu à a pagina di l'indexu di u blog.

Cù l'aiutu di `YMAL` ' | `Sintassi, pudete scrive sintesi multi-linea.

A cunfigurazione di l'arbulu di u cartulare à u latu drittu di u blog hè ancu `TOC` schedari (vede u capitulu precedente Solu l'articuli listati in `TOC` apparisceranu in l'indexu di a pagina di u blog).

L'articuli chì ùn cuntenenu micca meta infurmazione ùn apparisceranu micca nantu à a pagina di u blog, ma ponu appare in l'arbulu di u repertoriu à a diritta.

## Informazioni Di L'autore

L'infurmazione di l'autore pò esse scritta in a meta infurmazione di l'articulu, cum'è:

```yml
author: marlowe
```

Allora editate `author.yml` in u repertoriu di a lingua fonte è aghjunghje l'infurmazioni di l'autore, cum'è :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` è `title` sò tutti opzionali. Se `name` ùn hè micca stabilitu, u nome chjave (qui `marlowe` ) serà usatu cum'è `name` .

Vede u prughjettu demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) è [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Articulu Appiccicatu

Sè avete bisognu di pinà l'articulu à a cima, per piacè eseguite `i18n.site` è edità i schedarii `xxx.yml` sottu `.i18n/data/blog` , è cambiate u timestamp à un numeru negativu (multipli numeri negativi seranu ordinati da u più grande à u più chjucu).