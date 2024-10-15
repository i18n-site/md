# Blogsjabloon

`i18n/conf.yml` met `use: Blog` geeft aan dat de blogsjabloon wordt gebruikt voor de weergave.

Het `markdown`-bestand van een blogpost moet metadata instellen.

De metadata moet aan het begin van het bestand staan, ingeleid door `---` en afgesloten door `---`. Het formaat van de configuratie-informatie daartussen is `YAML`.

Een voorbeeldbestand is als volgt geconfigureerd:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` verwijst naar de inhoudsamenvatting, die zichtbaar is op de blogindexpagina.

Met behulp van `YMAL` ' | `Syntaxis, kunt u samenvattingen van meerdere regels schrijven.

De configuratie van de rechterkant目录structuur van de blog is ook `TOC`-bestanden (zie vorige hoofdstuk). Alleen artikelen die in `TOC` worden vermeld, verschijnen in de index van de bloghomepage.

Artikelen zonder meta-informatie verschijnen niet op de startpagina van de blog, maar kunnen wel in de rechterkant目录structuur verschijnen.

## Auteurinformatie

Auteursinformatie kan in de metadata van het artikel worden opgenomen, zoals:

```yml
author: marlowe
```

Werk vervolgens de `author.yml` in de bronmap bij en voeg de auteursinformatie toe, zoals:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` en `title` zijn optioneel. Indien `name` niet is ingesteld, wordt de sleutelnaam (in dit geval `marlowe`) als `name` gebruikt.

Zie het voorbeeldproject [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) en [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artikelen op de voorgrond plaatsen

Als u een artikel wilt vastzetten aan de top, voer dan `i18n.site` uit en bewerk het `xxx.yml`-bestand onder `.i18n/data/blog`, door de tijdstempel aan te passen naar een negatief getal (meerdere negatieve getallen worden in aflopende volgorde gesorteerd).