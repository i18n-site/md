# Șablon De Blog

`i18n/conf.yml` din `use: Blog` înseamnă folosirea șablonului de blog pentru randare.

Fișierul `markdown` al postării de blog trebuie să configureze meta informații.

Metainformațiile trebuie să fie la începutul fișierului, începând cu `---` și terminând cu `---` Formatul informațiilor de configurare din mijloc este `YAML` .

Configurația unui fișier demo este după cum urmează:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indică rezumatul conținutului, care va fi afișat pe pagina de index al blogului.

Cu ajutorul lui `YMAL` ' | `Sintaxă, puteți scrie rezumate pe mai multe rânduri.

Configurația arborelui de directoare din partea dreaptă a blogului este, de asemenea, `TOC` fișiere (vezi capitolul anterior Numai articolele enumerate în `TOC` vor apărea în indexul paginii de start a blogului).

Articolele care nu conțin metainformații nu vor apărea pe pagina de pornire a blogului, dar pot apărea în arborele de directoare din dreapta.

## Informații Despre Autor

Informațiile despre autor pot fi scrise în meta informațiile articolului, cum ar fi:

```yml
author: marlowe
```

Apoi editați `author.yml` în directorul limbii sursă și adăugați informații despre autor, cum ar fi :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` și `title` sunt toate opționale. Dacă nu este setat `name` , numele cheii (aici `marlowe` ) va fi folosit ca `name` .

Vezi proiectul demonstrativ [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) și [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Articol Fixat

Dacă trebuie să fixați articolul în partea de sus, rulați `i18n.site` și editați cele `xxx.yml` fișiere de sub `.i18n/data/blog` și schimbați marcajul temporal la un număr negativ (mai multe numere negative vor fi sortate de la cel mai mare la cel mai mic).