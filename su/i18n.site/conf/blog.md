# Template Blog

`i18n/conf.yml` ti `use: Blog` hartina ngagunakeun template blog pikeun rendering.

Berkas `markdown` tina pos blog kedah ngonpigurasikeun inpormasi meta.

Inpormasi meta kedah aya dina awal file, dimimitian ku `---` sareng ditungtungan ku `---` Format inpormasi konfigurasi di tengahna nyaéta `YAML` .

File demo dikonpigurasikeun sapertos kieu:

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

Kalayan bantuan `YMAL` '|`Sintaksis, anjeun tiasa nyerat kasimpulan multi-garis.

Konfigurasi tangkal diréktori di sisi katuhu blog ogé `TOC` file (tingali bab saméméhna Ngan artikel didaptarkeun dina `TOC` bakal muncul dina indéks homepage blog).

Artikel nu teu ngandung meta informasi moal muncul dina homepage blog, tapi bisa muncul dina tangkal diréktori katuhu.

Lamun perlu pin artikel ka luhur, punten ngajalankeun `i18n.site` tur edit `xxx.yml` file handap `.i18n/data/blog` , sarta ngarobah timestamp kana angka négatip (sababaraha angka négatip bakal diurutkeun ti leutik nepi ka badag dina nilai mutlak).