# Blog Ƒe Nɔnɔmetata

`i18n/conf.yml` le `use: Blog` me fia be woazã blog ƒe nɔnɔmetata hena gɔmeɖeɖe.

Ehiã be `markdown` file si le blog post la me naɖo meta nyatakakawo.

Ele be meta nyatakakawo nanɔ faɛl la ƒe gɔmedzedze, adze egɔme kple `---` eye wòawu enu kple `---` Ðoɖowɔwɔ ŋuti nyatakaka siwo le titina ƒe nɔnɔme nye `YAML` .

Demo file ƒe ɖoɖowɔwɔ le ale:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` fia emenyawo ƒe kpukpui, si woaɖe afia le blog ƒe index ƒe axa dzi.

Le kpekpeɖeŋu si `YMAL` ' . | `Nyagɔmeɖeɖe, àteŋu aŋlɔ fli geɖe ƒe kpukpuiwo.

Nyatakakadzraɖoƒe ƒe ati si le blog la ƒe ɖusime hã nye faɛl `TOC` (kpɔ ta si do ŋgɔ Nyati siwo woŋlɔ ɖe `TOC` me koe adze le blog ƒe gɔmedzedze ƒe xexlẽdzesi me.

Nyati siwo me meta nyatakaka mele o madze le blog ƒe gɔmedzedze o, gake woateŋu adze le nyatakakadzraɖoƒe ƒe ati si le ɖusime.

## Agbalẽŋlɔla Ŋuti Nyatakakawo

Woateŋu aŋlɔ agbalẽŋlɔla ŋuti nyatakakawo ɖe nyatia ƒe meta nyatakakawo me, abe:

```yml
author: marlowe
```

Emegbe trɔ asi le `author.yml` ŋu le gbegbɔgblɔ dzɔtsoƒe ƒe nuŋlɔɖi me eye nàtsɔ agbalẽŋlɔla ŋuti nyatakakawo akpe ɖe eŋu, abe :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` kple `title` katã nye tiatiawɔblɔɖe. Ne womeɖo `name` o la, woazã safuia ƒe ŋkɔ ( `marlowe` le afisia) abe `name` ene.

Kpɔ demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) kple [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Nyati Si Wotsɔ Pin Wɔe

Ne ehiã be nàtsɔ nyatia aɖo etame la, taflatse ƒu du `i18n.site` eye nàtrɔ asi le faɛl `xxx.yml` siwo le `.i18n/data/blog` te ŋu, eye nàtrɔ ɣeyiɣi ƒe dzesi la wòazu xexlẽdzesi manyomanyo (woaɖo xexlẽdzesi manyomanyo geɖe ɖe ɖoɖo nu tso gãtɔ dzi va ɖo suetɔ dzi).