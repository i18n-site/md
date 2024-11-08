# Šablona Blogu

`i18n/conf.yml` z `use: Blog` znamená použití šablony blogu pro vykreslování.

Soubor `markdown` blogového příspěvku potřebuje nakonfigurovat metainformace.

Metainformace musí být na začátku souboru, počínaje `---` a končit `---` Formát konfiguračních informací uprostřed je `YAML` .

Konfigurace ukázkového souboru je následující:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` označuje souhrn obsahu, který se zobrazí na stránce indexu blogu.

S pomocí `YMAL` ' | `Syntaxe, můžete psát víceřádkové souhrny.

Konfigurace stromu adresářů na pravé straně blogu je také `TOC` souborů (viz předchozí kapitola V indexu domovské stránky blogu se zobrazí pouze články uvedené v `TOC` ).

Články, které neobsahují metainformace, se nezobrazí na domovské stránce blogu, ale mohou se objevit ve stromu adresářů vpravo.

## Informace O Autorovi

Informace o autorovi lze zapsat do metainformací článku, například:

```yml
author: marlowe
```

Poté upravte `author.yml` v adresáři zdrojového jazyka a přidejte informace o autorovi, například :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` a `title` jsou všechny volitelné. Pokud není nastaveno `name` , použije se název klíče (zde `marlowe` ) jako `name` .

Viz ukázkový projekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) a [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Připnutý Článek

Pokud potřebujete připnout článek nahoru, spusťte `i18n.site` a upravte `xxx.yml` soubory pod `.i18n/data/blog` a změňte časové razítko na záporné číslo (více záporných čísel bude seřazeno od největšího po nejmenší).