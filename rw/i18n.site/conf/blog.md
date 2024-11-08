# Inyandiko Yerekana Blog

`i18n/conf.yml` kuri `use: Blog` bisobanura gukoresha inyandikorugero ya blog mugutanga.

Idosiye `markdown` yinyandiko ikeneye gushiraho amakuru ya meta.

Ibisobanuro bya Meta bigomba kuba ku ntangiriro ya dosiye, guhera kuri `---` bikarangirana na `---` Imiterere yamakuru yimiterere hagati ni `YAML` .

Iboneza rya dosiye ya demo niyi ikurikira:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` yerekana incamake y'ibirimo, izerekanwa kurupapuro rwerekana blog.

Hifashishijwe `YMAL` ' | `Syntax, urashobora kwandika incamake y'imirongo myinshi.

Iboneza ryububiko bwibiti kuruhande rwiburyo bwa blog nabwo ni dosiye `TOC` (reba igice kibanziriza `TOC` ).

Ingingo zitarimo amakuru ya meta ntizagaragara kurubuga rwa blog, ariko irashobora kugaragara mububiko bwibiti iburyo.

## Amakuru Yumwanditsi

Amakuru yumwanditsi arashobora kwandikwa muri meta amakuru yingingo, nka:

```yml
author: marlowe
```

Noneho hindura `author.yml` mubisobanuro byururimi rwinkomoko hanyuma wongere amakuru yumwanditsi, nka :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` na `title` byose birashoboka. Niba `name` idashyizweho, izina ryibanze (hano `marlowe` ) rizakoreshwa nka `name` .

Reba umushinga wa demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) na [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Ingingo

Niba ukeneye guhuza ingingo hejuru, nyamuneka koresha `i18n.site` hanyuma uhindure dosiye `xxx.yml` ziri munsi ya `.i18n/data/blog` , hanyuma uhindure ingengabihe kuri numero itari nziza (imibare myinshi itari myiza izatondekwa kuva munini kugeza kuri muto).