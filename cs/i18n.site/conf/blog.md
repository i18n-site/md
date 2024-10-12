# Šablona Blogu

`i18n/conf.yml` z `use: Blog` znamená použití šablony blogu pro vykreslování.

Soubor `markdown` blogového příspěvku potřebuje nakonfigurovat metainformace.

Metainformace musí být na začátku souboru, počínaje `---` a končit `---` Formát konfiguračních informací uprostřed je `YAML` .

Demo soubor je nakonfigurován následovně:

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

S pomocí `YMAL` '|`Syntaxe, můžete psát víceřádkové souhrny.

Konfigurace stromu adresářů na pravé straně blogu je také `TOC` souborů (viz předchozí kapitola V indexu domovské stránky blogu se zobrazí pouze články uvedené v `TOC` ).

Články, které neobsahují metainformace, se nezobrazí na domovské stránce blogu, ale mohou se objevit ve stromu adresářů vpravo.

Pokud potřebujete připnout článek nahoru, spusťte prosím `i18n.site` a upravte `xxx.yml` soubory pod `.i18n/data/blog` a změňte časové razítko na záporné číslo (více záporných čísel bude seřazeno od malých po velké v absolutní hodnotě).