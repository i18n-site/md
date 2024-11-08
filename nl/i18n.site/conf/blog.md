# Blogsjabloon

`i18n/conf.yml` uit `use: Blog` betekent dat je de blogsjabloon gebruikt voor weergave.

Het `markdown` bestand van de blogpost moet meta-informatie configureren.

Meta-informatie moet aan het begin van het bestand staan, beginnend met `---` en eindigend met `---` Het formaat van de configuratie-informatie in het midden is `YAML` .

De configuratie van een demobestand is als volgt:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` geeft de samenvatting van de inhoud aan, die wordt weergegeven op de blogindexpagina.

Met behulp van `YMAL` ' | `Syntaxis, u kunt samenvattingen van meerdere regels schrijven.

De configuratie van de directorystructuur aan de rechterkant van de blog is ook `TOC` bestanden (zie het vorige hoofdstuk). Alleen artikelen die in `TOC` staan vermeld, verschijnen in de index van de bloghomepage.

Artikelen die geen meta-informatie bevatten, verschijnen niet op de startpagina van de blog, maar kunnen wel in de directorystructuur aan de rechterkant verschijnen.

## Auteur Informatie

Auteursinformatie kan in de meta-informatie van het artikel worden geschreven, zoals:

```yml
author: marlowe
```

Bewerk vervolgens `author.yml` in de brontaaldirectory en voeg auteursinformatie toe, zoals :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` en `title` zijn allemaal optioneel. Als `name` niet is ingesteld, wordt de sleutelnaam (hier `marlowe` ) gebruikt als `name` .

Zie demoproject [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) en [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Vastgezet Artikel

Als u het artikel bovenaan wilt vastzetten, voert u `i18n.site` uit en bewerkt u de `xxx.yml` bestanden onder `.i18n/data/blog` , en wijzigt u de tijdstempel in een negatief getal (meerdere negatieve getallen worden gesorteerd van groot naar klein).