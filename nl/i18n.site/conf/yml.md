# .i18n/conf.yml

Het configuratiebestand voor `i18n.site` is `.i18n/conf.yml`.

Met uitzondering van de instellingen van [`i18`](/i18) , `ignore:` en `i18n:` is het configuratiebestand als volgt:

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
addon:
  - i18n.addon/toc
```

Hiervan betekent de `upload`-sectie met `ext:` dat alleen `.md`-bestanden worden geüpload bij publicatie.

## Topnavigatie

De configuratieopties voor `nav:` komen overeen met het navigatiemenu aan de bovenkant van de startpagina.

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

`url:` geeft het pad van het `Markdown`-bestand aan ( `/` komt overeen met de rootmap `/README.md`, waarbij de bestandsnaam een hoofdletter voorvoegsel en een kleine letter achtervoegsel moet hebben).

### `use: Md`, sjabloon voor één bestand (zonder inhoudsopgave)

De `Md`-sjabloon is hetzelfde als de `Toc`-sjabloon en wordt ook gebruikt om één enkel `Markdown`-bestand te renderen. Maar de `Md`-sjabloon toont geen inhoudsopgave in de zijbalk.

U kunt de `use: Toc`-configuratie in de bovenstaande configuratie wijzigen in `use: Md`, voer `i18n.site` opnieuw uit in de `md`-map en bezoek vervolgens de ontwikkelingsvoorbeeld-URL om de wijzigingen op de startpagina te bekijken.

### Geen configuratiepad, standaard laden

Als een bepaald pad wordt benaderd en het padvoorvoegsel ervan niet is geconfigureerd in `nav:`, wordt het overeenkomstige `Markdown`-bestand standaard geladen en met de `Md`-sjabloon weergegeven.

Als bijvoorbeeld `/test` wordt benaderd en het `nav:`-pad is niet geconfigureerd, en de paginataal is Engels (code `en`), wordt `/en/test.md` standaard geladen en met de `Md`-sjabloon weergegeven.

Als `/en/test.md` niet bestaat, wordt de standaard `404`-pagina weergegeven.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, sjabloon voor meerdere bestanden

In het configuratiebestand:

```
  - i18n: blog
    use: Doc
```

Dit betekent dat `Doc` wordt gebruikt voor het renderen van sjablonen.

De `Doc`-sjabloon ondersteunt het integreren van meerdere `Markdown`-bestanden om een enkele of meerdere projectdocumenten te genereren.

#### Enkel project (meerdere bestanden)

`blog` hierboven is de modus voor één item van `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Als De url Leeg Is, Wordt Standaard De Waarde i18n Gebruikt

Als `url` niet wordt opgegeven, heeft `url` standaard de waarde `i18n`. Deze regel geldt ook voor andere sjablonen.

Deze schrijfwijze is equivalent aan `url: blog`, waarbij het overeenkomstige bestand `en/blog/TOC` is.

#### Meerdere projecten

De configuratie van `i18n:doc` in `.i18n/conf.yml` is de modus voor meerdere projecten.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier betekent `menu: NB demo1,demo2` dat de `NB`-sjabloon wordt gebruikt om het vervolgkeuzemenu weer te geven.

`NB` is de afkorting van `Name Brief`, wat betekent dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2`.
Let op: ** Er mogen geen spaties zijn ** voor en na de komma `,` in `demo1,demo2`.

Deze parameters correleren met het volgende mapindexbestand:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhoudsopgave Index

`i18n.site` voert de `js`-plug-in `.i18n/hook/after.tran/TOC.js` uit in het demomagazijn om het indexbestand met `doc`-mappen te lezen dat overeenkomt met de `TOC`-sjabloonconfiguratie om een inhoudsopgave `json` te genereren.

Als u de `doc`-sjabloon gebruikt, moet u deze plug-in hebben.

Als u `i18n.site` initialiseert vanuit een lege map, vergeet dan niet om de `.i18n` van het demoproject naar uw directory te kopiëren.

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

##### Alleen de titel wordt geschreven op het bovenliggende niveau, niet de inhoud

Als er meerdere inspringingsniveaus zijn, wordt alleen de titel op het bovenliggende niveau geschreven, niet de inhoud, om typografische problemen te voorkomen.

##### Project README.md

In de project `README.md`, zoals `en/demo2/README.md`, kan inhoud worden geschreven.

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Project slogan

U kunt zien dat `Deme Two` een project slogan heeft onder het vervolgkeuzemenu en `Your Project slogan` in het catalogusoverzicht van de projectnaam.

![](https://p.3ti.site/1721276842.avif)

Dit komt overeen met de eerste regel van `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

De inhoud na de eerste dubbele punt `:` van de eerste niveau titel van het project `README.md` wordt beschouwd als de project slogan.

Gebruikers uit China, Japan en Korea: gebruik een halve breedte dubbele punt `:` in plaats van een volledige breedte dubbele punt.

##### Hoe kan de TOC in bulk worden verplaatst?

`TOC`-bestanden moeten in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is de `TOC` hierboven `zh/blog/TOC`.

Als de brontaal wordt gewijzigd, moet u de `TOC`-bestanden van een bepaalde taal in het project bulksgewijs naar een andere taal verplaatsen.

U kunt de volgende opdrachten raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando naar uw taalcode.