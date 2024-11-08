# Bloggmal

`i18n/conf.yml` av `use: Blog` betyr å bruke bloggmalen for gjengivelse.

`markdown` -filen til blogginnlegget må konfigurere metainformasjon.

Metainformasjon må være i begynnelsen av filen, som starter med `---` og slutter med `---` Formatet på konfigurasjonsinformasjonen i midten er `YAML` .

Konfigurasjonen av en demofil er som følger:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indikerer innholdssammendraget, som vil bli vist på bloggindekssiden.

Ved hjelp av `YMAL` ' | `Syntaks, du kan skrive sammendrag med flere linjer.

Konfigurasjonen av katalogtreet på høyre side av bloggen er også `TOC` filer (se forrige kapittel Kun artikler oppført i `TOC` vil vises i bloggens hjemmesideindeks).

Artikler som ikke inneholder metainformasjon vil ikke vises på bloggens hjemmeside, men kan vises i katalogtreet til høyre.

## Forfatterinformasjon

Forfatterinformasjon kan skrives i metainformasjonen til artikkelen, for eksempel:

```yml
author: marlowe
```

Rediger så `author.yml` i kildespråkkatalogen og legg til forfatterinformasjon, for eksempel :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` og `title` er alle valgfrie. Hvis `name` ikke er satt, vil nøkkelnavnet (her `marlowe` ) brukes som `name` .

Se demoprosjekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) og [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Festet Artikkel

Hvis du trenger å feste artikkelen til toppen, kjør `i18n.site` og rediger de `xxx.yml` filene under `.i18n/data/blog` , og endre tidsstemplet til et negativt tall (flere negative tall vil bli sortert fra størst til minste).