# Bloggmal

`i18n/conf.yml` med `use: Blog` betyr at bloggmalen brukes for rendering.

Blogginnleggets `markdown`-fil må ha metadata konfigurert.

Metadata må være i begynnelsen av filen, starte med `---` og avsluttes med `---`. Formatet for konfigurasjonsinformasjonen i midten er `YAML`.

En eksempelfil er konfigurert slik:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` representerer et innholdssammendrag som vises på bloggens indeksside.

Ved hjelp av `YMAL` ' | `sintaks, kan du skrive sammendrag med flere linjer.

Konfigurasjonen av katalogtreet på høyre side av bloggen er også en `TOC`-fil (se forrige kapittel). Kun artikler som er oppført i `TOC` vil vises i bloggens hjemmesideindeks.

Artikler uten metadata vil ikke vises på bloggens hjemmeside, men kan vises i katalogtreet til høyre.

## Forfatterinformasjon

Artikkelens metadata kan inneholde informasjon om forfatteren, for eksempel:

```yml
author: marlowe
```

Deretter rediger `author.yml` i kildespråkkatalogen og legg til informasjon om forfatteren, for eksempel:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` og `title` er alle valgfrie. Hvis `name` ikke er satt, vil nøkkelenavnet (her `marlowe`) brukes som `name`.

Se eksempelprosjektets [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) og [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Topptekst for artikkel

Hvis du ønsker å lime artikkelen til toppen, kjør `i18n.site` og rediger `xxx.yml`-filene under `.i18n/data/blog`, og endre tidsstempelet til et negativt tall (flere negative tall vil bli sortert i synkende rekkefølge).