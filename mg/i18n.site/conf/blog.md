# Môdely Bilaogy

`i18n/conf.yml` amin'ny `use: Blog` dia midika hoe mampiasa ny môdelin'ny bilaogy amin'ny famoahana.

Ny rakitra `markdown` amin'ny lahatsoratra bilaogy dia mila manamboatra fampahalalana meta.

Ny fampahalalana meta dia tsy maintsy eo amin'ny fiandohan'ny rakitra, manomboka amin'ny `---` ary mifarana amin'ny `---` Ny endriky ny fampahalalana momba ny fanamafisana eo afovoany dia `YAML` .

Toy izao manaraka izao ny fandrindrana ny rakitra demo:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` dia manondro ny famintinana votoaty, izay haseho eo amin'ny pejin'ny bilaogy.

Miaraka amin'ny fanampian'ny `YMAL` ' | `Syntax, afaka manoratra famintinana maromaro ianao.

Ny fandrindrana ny hazo firaketana eo amin'ny ilany havanana amin'ny bilaogy dia `TOC` ihany koa ny rakitra (jereo ny toko teo aloha) Ny lahatsoratra voatanisa ao amin'ny `TOC` ihany no hiseho ao amin'ny index homepage.

Ny lahatsoratra tsy misy fampahafantarana meta dia tsy hiseho amin'ny pejin'ny bilaogy, fa mety hiseho amin'ny hazo lahatahiry eo ankavanana.

## Fampahafantarana Ny Mpanoratra

Ny fampahalalana momba ny mpanoratra dia azo soratana amin'ny fampahalalana meta amin'ny lahatsoratra, toy ny:

```yml
author: marlowe
```

Avy eo amboary `author.yml` ao amin'ny lahatahiry fiteny loharano ary ampio ny mombamomba ny mpanoratra, toy ny :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ary `title` dia azo atao avokoa. Raha toa ka tsy napetraka `name` , ny anarana fanalahidy (eto `marlowe` ) dia ampiasaina ho `name` .

Jereo ny tetikasa demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) sy [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Lahatsoratra Voapetaka

Raha mila manindrona ilay lahatsoratra eny an-tampony ianao dia mandehana `i18n.site` ary ovay ny rakitra `xxx.yml` eo ambanin'ny `.i18n/data/blog` , ary ovay ho isa ratsy ny mari-pamantarana (isa maromaro miiba dia alahatra manomboka amin'ny lehibe indrindra ka hatramin'ny kely indrindra).