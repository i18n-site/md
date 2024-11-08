# Template Blog

`i18n/conf.yml` ti `use: Blog` hartina ngagunakeun template blog pikeun rendering.

Berkas `markdown` tina pos blog kedah ngonpigurasikeun inpormasi meta.

Inpormasi meta kedah aya dina awal file, dimimitian ku `---` sareng ditungtungan ku `---` Format inpormasi konfigurasi di tengahna nyaéta `YAML` .

Konfigurasi file demo nyaéta kieu:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nunjukkeun kasimpulan eusi, anu bakal dipintonkeun dina halaman indéks blog.

Kalayan bantuan `YMAL` ' | `Sintaksis, anjeun tiasa nyerat kasimpulan multi-garis.

Konfigurasi tangkal diréktori di sisi katuhu blog ogé `TOC` file (tingali bab saméméhna Ngan artikel didaptarkeun dina `TOC` bakal muncul dina indéks homepage blog).

Artikel nu teu ngandung meta informasi moal muncul dina homepage blog, tapi bisa muncul dina tangkal diréktori katuhu.

## Inpo Pangarang

Inpormasi pangarang tiasa ditulis dina inpormasi meta tina tulisan, sapertos:

```yml
author: marlowe
```

Teras édit `author.yml` dina diréktori basa sumber sareng tambahkeun inpormasi pangarang, sapertos :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` sareng `title` sadayana opsional. Upami `name` henteu disetel, nami konci (di dieu `marlowe` ) bakal dianggo salaku `name` .

Tempo proyék demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) jeung [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artikel Disematkeun

Lamun perlu pin artikel ka luhur, punten ngajalankeun `i18n.site` tur edit `xxx.yml` file handap `.i18n/data/blog` , sarta ngarobah timestamp kana angka négatip (sababaraha angka négatip bakal diurutkeun ti nu panggedéna ka pangleutikna).