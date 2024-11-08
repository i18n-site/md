# Predložak Bloga

`i18n/conf.yml` od `use: Blog` znači korištenje predloška bloga za iscrtavanje.

Datoteka `markdown` posta na blogu mora konfigurirati meta informacije.

Meta informacije moraju biti na početku datoteke, počevši s `---` i završavajući s `---` Format informacija o konfiguraciji u sredini je `YAML` .

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

Uz pomoć `YMAL` ' | `Sintaksa, možete pisati sažetke u više redaka.

Konfiguracija stabla direktorija na desnoj strani bloga također je `TOC` datoteka (pogledajte prethodno poglavlje). Samo će se članci navedeni u `TOC` pojaviti u indeksu početne stranice bloga.

Članci koji ne sadrže meta informacije neće se pojaviti na početnoj stranici bloga, ali se mogu pojaviti u stablu imenika s desne strane.

## Podaci O Autoru

Podaci o autoru mogu se napisati u meta informacijama članka, kao što su:

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

`name` , `url` i `title` su izborni. Ako `name` nije postavljeno, naziv ključa (ovdje `marlowe` ) koristit će se kao `name` .

Pogledajte demo projekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) i [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Prikvačeni Članak

Ako trebate prikvačiti članak na vrh, pokrenite `i18n.site` i uredite `xxx.yml` datoteke ispod `.i18n/data/blog` i promijenite vremensku oznaku u negativan broj (više negativnih brojeva bit će poredano od najvećeg prema najmanjem).