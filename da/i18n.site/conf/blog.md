# Blog Skabelon

`i18n/conf.yml` ud af `use: Blog` betyder brug af blogskabelonen til gengivelse.

`markdown` -filen i blogindlægget skal konfigurere metaoplysninger.

Metainformation skal være i begyndelsen af filen, begyndende med `---` og slutter med `---` Formatet af konfigurationsoplysningerne i midten er `YAML` .

En demofil er konfigureret som følger:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` angiver indholdsoversigten, som vil blive vist på blogindekssiden.

Ved hjælp af `YMAL` '|`Syntaks, du kan skrive multi-line resuméer.

Konfigurationen af mappetræet i højre side af bloggen er også `TOC` filer (se det forrige kapitel. Kun artikler opført i `TOC` vises i bloggens hjemmesideindeks).

Artikler, der ikke indeholder metainformation, vises ikke på bloggens hjemmeside, men kan vises i mappetræet til højre.

Hvis du har brug for at fastgøre artiklen til toppen, skal du køre `i18n.site` og redigere de `xxx.yml` filer under `.i18n/data/blog` , og ændre tidsstemplet til et negativt tal (flere negative tal vil blive sorteret fra små til store i absolut værdi).