# .i18n/conf.yml

Het configuratiebestand voor `i18n.site` is `.i18n/conf.yml`.

Behalve de instellingen van [`i18`](/i18), `ignore:` en `i18n:`, ziet het configuratiebestand er als volgt uit:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Hiervan betekent de `upload`-sectie met `ext:` dat alleen `.md`-bestanden worden geüpload bij publicatie.

## Bovenste Navigatie

De configuratieopties voor `nav:` komen overeen met het navigatiemenu bovenaan de startpagina.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Hiervan komt `i18n: home` overeen met `home: Home` in `en/i18n.yml`.

`en/i18n.yml` wordt vertaald naar meerdere talen, zoals `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat de vertaling is voltooid, kunt u de waarden in de vertaalde `yml`-bestanden aanpassen, maar u mag de sleutels in de vertaalde `yml`-bestanden niet toevoegen of verwijderen.

### `use: Toc`, sjabloon voor één bestand (met inhoudsopgave)

In de `nav`-configuratie:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betekent dat de sjabloon `Toc` wordt gebruikt om te renderen, wat neerkomt op het renderen van een enkele `Markdown`-sjabloon.

`TOC` is de afkorting van `Table of Contents`. Wanneer deze sjabloon wordt weergegeven, verschijnt de inhoudsopgave van dit `Markdown`-bestand in de zijbalk.

`url:` geeft het pad van het `Markdown`-bestand weer ( `/` komt overeen met de rootmap `/README.md`, waarbij de bestandsnaam een hoofdletter voorvoegsel en een kleine letter achtervoegsel moet hebben).

### `use: Md`, sjabloon voor één bestand (zonder inhoudsopgave)

De `Md`-sjabloon is hetzelfde als de `Toc`-sjabloon en wordt ook gebruikt om één enkel `Markdown`-bestand te renderen. Maar de `Md`-sjabloon toont geen inhoudsopgave in de zijbalk.

U kunt de configuratie `use: Toc` in het bovenstaande voorbeeld wijzigen in `use: Md`, voer `i18n.site` opnieuw uit in de `md`-map en bezoek vervolgens de ontwikkelingsvoorbeeld-URL om de wijzigingen op de startpagina te bekijken.

### Standaard laden zonder configuratiepad

Als een bepaald pad wordt benaderd en het padvoorvoegsel ervan niet is geconfigureerd in `nav:`, wordt standaard het `Markdown`-bestand dat overeenkomt met het pad geladen en weergegeven met behulp van de `Md`-sjabloon.

Als bijvoorbeeld `/test` wordt benaderd en `nav:` is niet geconfigureerd voor dit pad, en de paginataal is Engels (code `en`), dan wordt `/en/test.md` standaard geladen en weergegeven met behulp van de `Md`-sjabloon.

Als `/en/test.md` niet bestaat, wordt de standaard `404`-pagina weergegeven.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, sjabloon voor meerdere bestanden

In het configuratiebestand:

```
  - i18n: blog
    use: Doc
```

Dit betekent dat `Doc` wordt gebruikt voor het renderen van sjablonen.

De `Doc`-sjabloon ondersteunt het integreren van meerdere `Markdown`-bestanden om een enkele of meerdere projectdocumentatieoverzichten te genereren.

#### Enkel project (meerdere bestanden)

`blog` hierboven is de modus voor één item van `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Als de URL leeg is, wordt standaard de waarde van i18n gebruikt

Als `url` niet wordt opgegeven, heeft `url` standaard de waarde `i18n`. Deze regel geldt ook voor andere sjablonen.

De bovenstaande schrijfwijze is equivalent aan `url: blog`, waarbij het bijbehorende bestand `en/blog/TOC` is.

#### Meerdere projecten

De configuratie van `i18n:doc` in `.i18n/conf.yml` is de modus voor meerdere projecten.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier betekent `menu: NB demo1,demo2` dat de `NB`-sjabloon wordt gebruikt om het vervolgkeuzemenu te renderen.

`NB` is de afkorting van `Name Brief`, wat betekent dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2`.
Let op: ** Er mogen geen spaties zijn voor en na de komma `,` in `demo1,demo2`**.

Het bijbehorende directory-indexbestand voor de bovenstaande parameters is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhoudsopgave Index

`i18n.site` voert de `js`-plugin `.i18n/hook/after.tran/TOC.js` uit in het demomagazijn om het indexbestand met `doc`-mappen te lezen dat overeenkomt met de `TOC`-sjabloonconfiguratie om een inhoudsopgave `json` te genereren.

Als u de `doc`-sjabloon gebruikt, moet u over deze plugin beschikken.

Als u `i18n.site` initialiseert vanuit een lege map, vergeet dan niet om de `.i18n`-map van het demoproject naar uw map te kopiëren.

De `Doc`-sjabloon rendert de inhoudsopgave op basis van de gegenereerde `json`.

##### Uitgebreide inhoudelijke uitleg

De inhoud van `en/blog/TOC` is als volgt:

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik inspringingen om niveaus aan te geven

De eerste regel `README.md` in `en/blog/TOC` hierboven komt overeen met `i18n.site` in de onderstaande afbeelding, wat de projectnaam is.

De volgende twee regels zijn zoals weergegeven in de onderstaande afbeelding.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` komt overeen met `News`
`news/begin.md` komt overeen met `Our Product is Online !`

`TOC`-bestanden gebruiken inspringingen om de hiërarchische relatie van de inhoudsopgave aan te geven en ondersteunen inspringing op meerdere niveaus.

##### Op hogere niveaus wordt alleen de titel geschreven, geen inhoud

In geval van meerdere inspringingsniveaus wordt alleen de titel op het hogere niveau geschreven, geen inhoud, anders kan de opmaak verward raken.

##### Project README.md

In de `README.md` van het project, zoals `en/demo2/README.md`, kan inhoud worden geschreven.

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Project slogan

Als je ziet, heeft `Deme Two` een project slogan onder het vervolgkeuzemenu en `Your Project slogan` onder de projectnaam in de inhoudsopgave.

![](https://p.3ti.site/1721276842.avif)

Dit komt overeen met de eerste regel in `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

De inhoud na de eerste dubbele punt `:` van de eerste niveau titel in het `README.md` van het project wordt beschouwd als de project slogan.

Gebruikers uit China, Japan en Korea: let op dat je een half breedte dubbele punt `:` moet gebruiken in plaats van een vol breedte dubbele punt.

##### Hoe kan de TOC in bulk worden verplaatst?

`TOC`-bestanden moeten in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is de `TOC` hierboven `zh/blog/TOC`.

Als de brontaal wordt gewijzigd, moet je de `TOC`-bestanden van een bepaalde taal in het project in bulk naar een andere taal verplaatsen.

Als je de volgende opdrachten kunt raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando naar uw taalcode.