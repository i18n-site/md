# .i18n/conf.yml

Het configuratiebestand voor `i18n.site` is `.i18n/conf.yml`, en de inhoud ervan is als volgt:

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Hiervan betekent de `upload`-sectie met `ext:` dat alleen `.md`-bestanden worden geüpload tijdens de publicatie.

## Bovenste navigatie

De configuratieopties voor `nav:` komen overeen met het navigatiemenu aan de bovenkant van de startpagina.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Hiervan komt `i18n: home` overeen met `home: Home` in `en/i18n.yml` (waarbij `en` de brontaal van de projectvertaling is).

De inhoud van `en/i18n.yml` is de tekst die wordt weergegeven in het navigatiemenu en deze wordt vertaald op basis van de configuratie `fromTo`, zoals bijvoorbeeld vertaald naar `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat de vertaling is voltooid, kunt u de waarden in het vertaalde `yml` aanpassen, maar u mag de sleutels in het vertaalde `yml` niet toevoegen of verwijderen.

### `use: Toc`, sjabloon voor een enkel bestand met een inhoudsopgave

In de `nav`-configuratie:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betekent dat de sjabloon `Toc` wordt gebruikt om te renderen, wat neerkomt op het renderen van een enkele `Markdown`-sjabloon.

`TOC` is de afkorting van `Table of Contents`. Wanneer deze sjabloon wordt weergegeven, wordt de inhoudsopgave van dit `Markdown`-bestand in de zijbalk weergegeven.

`url:` geeft het pad van het `Markdown`-bestand weer ( `/` komt overeen met de rootmap `/README.md`, waarbij de bestandsnaam een hoofdletter voor de voorvoegsel en een kleine letter voor de achtervoegsel moet hebben).

### `use: Md`, sjabloon voor een enkel bestand zonder inhoudsopgave

De `Md`-sjabloon en de `Toc`-sjabloon zijn hetzelfde en beide worden gebruikt om één enkel `Markdown`-bestand te renderen. Maar de `Md`-sjabloon toont geen inhoudsopgave in de zijbalk.

U kunt de `use: Toc` in de bovenstaande configuratie wijzigen in `use: Md`, voer `i18n.site` opnieuw uit in de `md`-map en bezoek vervolgens de ontwikkelingsvoorbeeld-URL om de wijzigingen op de startpagina te bekijken.

### `use: Blog` Blogsjabloon

De blogsjabloon toont een lijst van artikelen (titels en samenvattingen) in volgorde van publicatiedatum.

[→ Klik hier voor gedetailleerde configuratie](/i18n.site/conf/blog)

### `use: Doc`, sjabloon voor meerdere documenten

In het configuratiebestand:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Dit geeft aan dat `Doc` wordt gebruikt voor het renderen van sjablonen.

De `Doc`-sjabloon ondersteunt de integratie van meerdere `Markdown`-bestanden om een enkele of meerdere projectdocumentcontouren te genereren.

#### Meerdere projecten en meerdere bestanden

In `.i18n/conf.yml` is de configuratie van `i18n:doc` voor de weergavemodus van meerdere projecten en meerdere bestanden.

Hier betekent `menu: NB demo1,demo2` dat de `NB`-sjabloon wordt gebruikt om het vervolgkeuzemenu weer te geven.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` is de afkorting van `Name Brief`, wat betekent dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2`.

Let op: ** Er mogen geen spaties zijn ** voor en na de komma `,` in `demo1,demo2`.

Voor de bovenstaande parameters is het overeenkomstige mapindexbestand:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Een enkel project met meerdere bestanden

Als je maar één project hebt, kun je het zo configureren.

```
  - i18n: xxx
    use: Doc
```

##### Als De url Leeg Is, Wordt Standaard De Waarde i18n Gebruikt

Als `url` niet wordt opgegeven, heeft `url` standaard de waarde `i18n`. Deze regel geldt ook voor andere sjablonen.

Deze schrijfwijze komt overeen met `url: xxx`, waarbij het bijbehorende bestand `en/xxx/TOC` is.

#### TOC inhoudsopgave index

`i18n.site` voert de `js`-plug-in `.i18n/hook/after.tran/TOC.js` uit in het demomagazijn om het indexbestand met `TOC` mappen te lezen dat overeenkomt met de `doc` sjabloonconfiguratie om een inhoudsopgave `json` te genereren.

Als u de `doc`-sjabloon gebruikt, moet u over deze plug-in beschikken.

Als u `i18n.site` initialiseert vanuit een lege map, vergeet dan niet om de `.i18n` van het demoproject naar uw map te kopiëren.

De `Doc`-sjabloon rendert de inhoudsopgave op basis van de gegenereerde `json`.

##### Uitgebreide inhoudelijke uitleg

De inhoud van `en/blog/TOC` is als volgt:

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik inspringingen om niveaus aan te geven

De eerste regel van `en/blog/TOC`, `README.md`, komt overeen met `i18n.site` in de onderstaande afbeelding, wat de projectnaam is.

De volgende twee regels zijn zoals weergegeven in de onderstaande afbeelding.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` komt overeen met `News`
`news/begin.md` komt overeen met `Our Product is Online !`

`TOC`-bestanden gebruiken inspringingen om de hiërarchische relatie van de inhoudsopgave aan te geven, ondersteunen meerdere inspringingsniveaus en regelcommentaar dat begint met `#`.

##### Op het bovenliggende niveau wordt alleen de titel geschreven, niet de inhoud

Als er meerdere inspringingsniveaus zijn, wordt alleen de titel op het bovenliggende niveau geschreven, niet de inhoud, om te voorkomen dat de lay-out verward raakt.

##### Project README.md

In de project `README.md`, zoals `en/demo2/README.md`, kan inhoud worden geschreven.

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Project slogan

Zoals te zien is, heeft `Deme Two` de projectslogan onder het vervolgkeuzemenu en de `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Dit komt overeen met de eerste regel van `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

De inhoud na de eerste dubbele punt `:` van de eerste niveau-titel van het project `README.md` wordt beschouwd als de projectslogan.

Gebruikers uit China, Japan en Korea: let op dat u een half breedte dubbele punt `:` moet gebruiken in plaats van een volledige breedte dubbele punt.

##### Hoe kan de TOC in bulk worden verplaatst?

`TOC`-bestanden moeten in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is `TOC` hierboven `zh/blog/TOC`.

Als de brontaal wordt gewijzigd, moet u de `TOC`-bestanden van een bepaalde taal in het project bulksgewijs naar een andere taal verplaatsen.

U kunt de volgende opdrachten raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando naar uw taalcode.

### Standaard laden zonder configuratiepad

Als een bepaald pad wordt bezocht en het padvoorvoegsel staat niet geconfigureerd in `nav:`, dan wordt standaard het bijbehorende `Markdown`-bestand geladen en weergegeven met behulp van de `Md`-sjabloon.

Bijvoorbeeld, als `/test` wordt bezocht en `nav:` is niet geconfigureerd voor de voorvoegsel van dit pad, en de huidige browsertaal is Engels (code `en`), dan wordt `/en/test.md` standaard geladen en weergegeven met behulp van de `Md`-sjabloon.

Als `/en/test.md` niet bestaat, wordt de standaard `404`-pagina weergegeven.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">