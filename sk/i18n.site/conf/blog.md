# Šablóna Blogu

`i18n/conf.yml` z `use: Blog` znamená použitie šablóny blogu na vykresľovanie.

Súbor `markdown` blogového príspevku potrebuje nakonfigurovať meta informácie.

Meta informácie musia byť na začiatku súboru, počnúc `---` a končiac `---` Formát konfiguračných informácií v strede je `YAML` .

Demo súbor je nakonfigurovaný takto:

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

S pomocou `YMAL` '|`Syntax, môžete písať viacriadkové súhrny.

Konfigurácia stromu adresárov na pravej strane blogu je tiež `TOC` súborov (pozri predchádzajúcu kapitolu) V indexe domovskej stránky blogu sa zobrazia iba články uvedené v `TOC` .

Články, ktoré neobsahujú meta informácie, sa nezobrazia na domovskej stránke blogu, ale môžu sa objaviť v strome adresárov vpravo.

Ak potrebujete pripnúť článok na začiatok, spustite `i18n.site` a upravte `xxx.yml` súbory pod `.i18n/data/blog` a zmeňte časovú pečiatku na záporné číslo (viaceré záporné čísla budú zoradené od malých po veľké v absolútnej hodnote).