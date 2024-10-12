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

Uz pomoć `YMAL` '|`Sintaksa, možete pisati višelinijske sažetke.

Konfiguracija stabla direktorija na desnoj strani bloga je također `TOC` datoteka (pogledajte prethodno poglavlje Samo će se članci navedeni u `TOC` pojaviti u indeksu početne stranice bloga).

Članci koji ne sadrže meta informacije neće se pojaviti na početnoj stranici bloga, ali se mogu pojaviti u stablu direktorija s desne strane.

Ako želite da zakačite članak na vrh, pokrenite `i18n.site` i uredite `xxx.yml` datoteke ispod `.i18n/data/blog` i promijenite vremensku oznaku na negativan broj (više negativnih brojeva će biti sortirano od malih do velikih u apsolutnoj vrijednosti).