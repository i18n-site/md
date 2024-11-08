# Blog Ukax Mä Plantilla Ukhamawa

`i18n/conf.yml` `use: Blog` ukanx blog plantilla ukar renderización ukar apnaqaña sañ muni.

Blog qillqatan `markdown` qillqatapax meta yatiyawinak wakicht’añatakiw wakisi.

Meta yatiyawix qillqat qalltawinx utjañapawa, `---` ukampiw qalltasini ukatx `---` ukampiw tukuyañapa, chika taypinx configuración de información ukan formatopax `YAML` ukhamawa.

Mä demostración qillqatan configuración ukax akhamawa:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ukax contenido resumen uñacht’ayi, ukax blog índice ukan uñacht’ayatarakiniwa.

Ukax `YMAL` ' . | `Sintaxis, walja chimpunak qillqt’asma.

Blog ukan ch’iqa tuqinkir directorio quqan configuración ukax `TOC` archivonakawa (nayrir jalja uñakipt’aña, `TOC` ukan qillqt’at qillqatanakakiw blog ukan nayrïr uñstawipan uñstani).

Artículos ukanakax meta yatiyawinak jan utjki ukanakax janiw blog ukan nayrïr uñstawipan uñstkaniti, jan ukasti ch’iqa tuqin directorio quqan uñstaspawa.

## Qillqiri Yatiyawi

Qillqirin yatiyawipax qillqatan meta yatiyawipan qillqt’asispawa, sañäni:

```yml
author: marlowe
```

Ukatx `author.yml` ukx phuqhat arunak uñt’ayañanx qillqirin yatiyawinak yapxatañani, sañäni :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ukat `title` ukanakax taqpachaw munañapa. `name` jan utt’ayatäkchi ukhaxa, llave sutix (aka chiqanx `marlowe` ) `name` ukhamaw apnaqasini.

Uñxatt’añataki proyecto demostración [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ukat [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pined Uka Qillqata

Uka qillqat patat pintañax wakisispa ukhax `i18n.site` t’ijt’ayañamawa ukatx `.i18n/data/blog` ukan `xxx.yml` qillqatanakap chiqanchañamawa, ukatx pacha chimpunak mä jan wali jakhüwiruw mayjt’ayañama (walja jan wali jakhüwinakax jach’a jakhunakat jisk’a jakhunakaruw uñakipt’atäni).