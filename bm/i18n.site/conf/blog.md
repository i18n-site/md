# Blog Modɛli

`i18n/conf.yml` ka bɔ `use: Blog` la, o kɔrɔ ye ka baara kɛ ni bulɔgu jatebɔlan ye walasa ka ɲɛfɔli kɛ.

Bulɔgu sɛbɛn in `markdown` file ka kan ka meta kunnafoniw labɛn.

Meta kunnafoniw ka kan ka kɛ dosiye daminɛ na, k’a daminɛ ni `---` ye ka laban ni `---` kunnafoni minnu bɛ cɛmancɛ la olu cogoya ye `YAML` ye.

Demo file dɔ bɛ labɛn nin cogo la:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` bɛ kɔnɔkow lajɛlen jira, minnu bɛna jira bulɔgu index ɲɛ kan.

Ni dɛmɛ ye `YMAL` ' . | `Sintax, i bɛ se ka zana caman lajɛlenw sɛbɛn.

Bulɔgu kinin fɛ ɲɛbilajiri labɛncogo fana ye dosiye `TOC` ye (aw ye tilayɔrɔba tɛmɛnen lajɛ Barokun minnu bɛ `TOC` kɔnɔ, olu dɔrɔn de bɛna bɔ bulɔgu ɲɛ fɔlɔ index kɔnɔ.

Barokun minnu tɛ meta kunnafoni sɔrɔ, olu tɛna bɔ bulɔgu daminɛ na, nka u bɛ se ka bɔ ɲɛbilasɛbɛn jiri la kinin fɛ.

## Sɛbɛnnikɛla Ka Kunnafoniw

Sɛbɛnnikɛla ka kunnafoniw bɛ se ka sɛbɛn barokun ka meta-kunnafoni kɔnɔ, i n’a fɔ:

```yml
author: marlowe
```

O kɔ fɛ, `author.yml` ladilan source language directory kɔnɔ ka sɛbɛnnikɛla kunnafoniw fara a kan, i n’a fɔ :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ani `title` bɛɛ ye ŋaniyataama ye. Ni `name` ma sigi, kilisi tɔgɔ (yan `marlowe` ) bɛna kɛ `name` ye.

Aw ye demo poroze [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ani [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) lajɛ

## Barokun Min Bɛ Pinɛ

N’i mago b’a la ka barokun pinɛ sanfɛ, i ka `i18n.site` boli ka dosiye `xxx.yml` minnu bɛ `.i18n/data/blog` jukɔrɔ, olu ladilan, ka waati taamasiyɛn Changer ka kɛ jateden jugu ye (jateden jugu caman bɛna labɛn ka bɔ a bonya la ka taa a fitinin na).