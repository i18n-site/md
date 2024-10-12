# Bloggmal

`i18n/conf.yml` med `use: Blog` betyr at vi bruker bloggmalen for rendering.

Blogginnleggets `markdown`-fil må ha metadata konfigurert.

Metadata må være i begynnelsen av filen, starte med `---` og avsluttes med `---`. Formatet for konfigurasjonsinformasjonen i midten er `YAML`.

En demonstrasjonsfills konfigurasjon ser slik ut:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` representerer en innholdssammendrag som vises på bloggens indeks-side.

Ved hjelp av `YMAL` '|Original: `Syntaks, du kan skrive sammendrag med flere linjer.

Konfigurasjonen av katalogtreet på høyre side av bloggen er også en `TOC`-fil (se forrige kapittel). Kun artikler som er oppført i `TOC` vil vises i bloggens indeks-side.

Artikler uten metadata vil ikke vises på bloggens forsiden, men kan vises i katalogtreet til høyre.

Hvis du ønsker å lime en artikkel til toppen, kjør `i18n.site` og rediger `xxx.yml`-filene under `.i18n/data/blog`, og endre tidsstempelet til et negativt tall (flere negative tall vil bli sortert etter avtagende absoluttverdi).