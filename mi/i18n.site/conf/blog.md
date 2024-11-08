# Tauira Rangitaki

Ko `i18n/conf.yml` o `use: Blog` ko te whakamahi i te tauira rangitaki mo te whakaputa.

Ko te kōnae `markdown` o te pou rangitaki me whirihora i nga korero meta.

Ko nga korero meta me noho i te timatanga o te konae, timata ki te `---` ka mutu ki te `---` Ko te whakatakotoranga o nga korero whirihoranga kei waenganui ko `YAML` .

Ko te whirihoranga o te konae demo e whai ake nei:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` e tohu ana i te whakarāpopototanga ihirangi, ka whakaatuhia ki te wharangi taurangi rangitaki.

Ma te awhina o `YMAL` ' | `Wetereo, ka taea e koe te tuhi whakarāpopoto rārangi maha.

Ko te whirihoranga o te rakau whaiaronga kei te taha matau o te rangitaki he `TOC` ano nga konae (tirohia te upoko o mua ko nga tuhinga kua whakarārangihia ki te `TOC` ka puta ki te taurangi whārangi kāinga.

Ko nga tuhinga karekau he korero meta e kore e puta ki te whaarangi paetukutuku, engari ka puta ki te rakau raarangi kei te taha matau.

## Nga Korero a Te Kaituhi

Ka taea te tuhi i nga korero a te kaituhi ki nga korero meta o te tuhinga, penei:

```yml
author: marlowe
```

Na ka whakatika i `author.yml` ki te raarangi reo puna me te taapiri i nga korero a te kaituhi, penei i te :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` me `title` he mea whiriwhiri katoa. Ki te kore e tautuhia `name` , ka whakamahia te ingoa matua (i konei `marlowe` ) hei `name` .

Tirohia te kaupapa demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) me [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Tuhinga Kua Titi

Mena ka hiahia koe ki te pine i te tuhinga ki runga, rere koa `i18n.site` ka whakatika i nga konae `xxx.yml` kei raro iho i `.i18n/data/blog` , ka huri i te tohu wa ki te tau kino (he maha nga tau kino ka tohua mai i te rahi ki te iti).