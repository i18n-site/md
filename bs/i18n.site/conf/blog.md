# Šablon Bloga

`i18n/conf.yml` od `use: Blog` znači korištenje šablona bloga za renderiranje.

Datoteka `markdown` blog posta treba da konfiguriše meta informacije.

Meta informacije moraju biti na početku datoteke, počevši sa `---` i završavajući sa `---` Format informacija o konfiguraciji u sredini je `YAML` .

Konfiguracija demo datoteke je sljedeća:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` označava sažetak sadržaja koji će biti prikazan na indeksnoj stranici bloga.

Uz pomoć `YMAL` ' | `Sintaksa, možete pisati višelinijske sažetke.

Konfiguracija stabla direktorija na desnoj strani bloga je također `TOC` datoteka (pogledajte prethodno poglavlje Samo članci navedeni u `TOC` će se pojaviti u indeksu početne stranice bloga).

Članci koji ne sadrže meta informacije neće se pojaviti na početnoj stranici bloga, ali se mogu pojaviti u stablu direktorija s desne strane.

## Podaci O Autoru

Informacije o autoru mogu biti zapisane u meta informacijama članka, kao što su:

```yml
author: marlowe
```

Zatim uredite `author.yml` u direktoriju izvornog jezika i dodajte informacije o autoru, kao što je :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` i `title` su sve opcione. Ako `name` nije postavljeno, ime ključa (ovdje `marlowe` ) će se koristiti kao `name` .

Pogledajte demo projekat [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) i [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Zakačen Članak

Ako želite da zakačite članak na vrh, pokrenite `i18n.site` i uredite `xxx.yml` datoteke ispod `.i18n/data/blog` i promijenite vremensku oznaku na negativan broj (više negativnih brojeva će biti sortirano od najvećeg do najmanjeg).