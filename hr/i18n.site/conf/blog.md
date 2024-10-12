# Predložak Bloga

`i18n/conf.yml` od `use: Blog` znači korištenje predloška bloga za iscrtavanje.

Datoteka `markdown` posta na blogu mora konfigurirati meta informacije.

Meta informacije moraju biti na početku datoteke, počevši s `---` i završavajući s `---` Format informacija o konfiguraciji u sredini je `YAML` .

Demo datoteka je konfigurirana na sljedeći način:

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

Uz pomoć `YMAL` '|`Sintaksa, možete pisati sažetke u više redaka.

Konfiguracija stabla direktorija na desnoj strani bloga također je `TOC` datoteka (pogledajte prethodno poglavlje). Samo će se članci navedeni u `TOC` pojaviti u indeksu početne stranice bloga.

Članci koji ne sadrže meta informacije neće se pojaviti na početnoj stranici bloga, ali se mogu pojaviti u stablu imenika s desne strane.

Ako trebate prikvačiti članak na vrh, pokrenite `i18n.site` i uredite `xxx.yml` datoteke ispod `.i18n/data/blog` te promijenite vremensku oznaku u negativan broj (višestruki negativni brojevi bit će poredani od malih prema velikim u apsolutnoj vrijednosti).