# Šablóna Blogu

`i18n/conf.yml` z `use: Blog` znamená použitie šablóny blogu na vykresľovanie.

Súbor `markdown` blogového príspevku potrebuje nakonfigurovať meta informácie.

Meta informácie musia byť na začiatku súboru, počnúc `---` a končiac `---` Formát konfiguračných informácií v strede je `YAML` .

Konfigurácia demo súboru je nasledovná:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` označuje súhrn obsahu, ktorý sa zobrazí na stránke indexu blogu.

S pomocou `YMAL` ' | `Syntax, môžete písať viacriadkové súhrny.

Konfigurácia stromu adresárov na pravej strane blogu je tiež `TOC` súborov (pozri predchádzajúcu kapitolu) V indexe domovskej stránky blogu sa zobrazia iba články uvedené v `TOC` .

Články, ktoré neobsahujú meta informácie, sa nezobrazia na domovskej stránke blogu, ale môžu sa objaviť v strome adresárov vpravo.

## Informácie O Autorovi

Informácie o autorovi môžu byť napísané v meta informáciách článku, ako napríklad:

```yml
author: marlowe
```

Potom upravte `author.yml` v adresári zdrojového jazyka a pridajte informácie o autorovi, ako napríklad :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` a `title` sú všetky voliteľné. Ak nie je nastavené `name` , názov kľúča (tu `marlowe` ) sa použije ako `name` .

Pozrite si ukážkový projekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) a [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pripnutý Článok

Ak potrebujete pripnúť článok na začiatok, spustite `i18n.site` a upravte `xxx.yml` súbory pod `.i18n/data/blog` a zmeňte časovú pečiatku na záporné číslo (viaceré záporné čísla budú zoradené od najväčšieho po najmenšie).