# .i18n/conf.yml

Het configuratiebestand voor `i18n.site` is `.i18n/conf.yml` en de inhoud is als volgt:

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

Daarvan betekent de `upload`-configuratie met `ext:` dat alleen `.md`-bestanden worden geüpload bij publicatie.

## Topnavigatie

De `nav:`-configuratieopties komen overeen met het navigatiemenu aan de bovenkant van de startpagina.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hen komt `i18n: home` overeen met `home: Home` in `en/i18n.yml` (waarbij `en` de brontaal van de projectvertaling vormt).

De inhoud van `en/i18n.yml` is de tekst die wordt weergegeven in het navigatiemenu en deze wordt vertaald volgens de configuratie van `fromTo`, zoals bijvoorbeeld vertaald naar `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat de vertaling is voltooid, kunt u de waarden in het vertaalde `yml`-bestand wijzigen, maar u mag de sleutels in het vertaalde `yml`-bestand niet toevoegen of verwijderen.

### `use: Toc`, sjabloon met inhoudsopgave voor één bestand

In de `nav`-configuratie:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betekent het renderen met behulp van de `Toc`-sjabloon, wat overeenkomt met het renderen van een enkele `Markdown`-sjabloon.

`TOC` is de afkorting van `Table of Contents`. Wanneer deze sjabloon wordt weergegeven, verschijnt de inhoudsopgave van het `Markdown`-bestand in de zijbalk.

`url:` geeft het pad van het `Markdown`-bestand aan ( `/` komt overeen met de rootmap `/README.md`, waarbij de bestandsnaam een hoofdletter voorvoegsel en een kleine letter achtervoegsel moet hebben).

### `use: Md`, sjabloon zonder inhoudsopgave voor één bestand

De `Md`-sjabloon is vergelijkbaar met de `Toc`-sjabloon en wordt ook gebruikt om een enkel `Markdown`-bestand te renderen. Maar de `Md`-sjabloon toont geen inhoudsopgave in de zijbalk.

U kunt de `use: Toc`-configuratie in de bovenstaande instellingen wijzigen in `use: Md`, voer `i18n.site` opnieuw uit in de `md`-map en bekijk vervolgens de wijzigingen op de startpagina via de ontwikkelingsvoorbeeld-URL.

### `use: Blog` voor blog sjablonen

De blogsjabloon toont een lijst met artikelen (titels en samenvattingen) in volgorde van publicatiedatum.

[→ Klik hier voor meer informatie over de specifieke configuratie](/i18n.site/conf/blog)

### `use: Doc`, sjabloon voor meerdere bestanden

In het configuratiebestand:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Dit geeft aan dat de `Doc`-sjabloon wordt gebruikt voor de sjabloonweergave.

De `Doc`-sjabloon ondersteunt de integratie van meerdere `Markdown`-bestanden om een enkele of meerdere projectdocumenten te genereren.

#### Meerdere projecten, meerdere bestanden

De `i18n:doc`-configuratie in `.i18n/conf.yml` is de rendermodus voor meerdere projecten en meerdere bestanden.

Hierbij betekent `menu: NB demo1,demo2` dat het `NB`-sjabloon wordt gebruikt om het vervolgkeuzemenu te renderen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` is de afkorting van `Name Brief`, wat betekent dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2`.

Let op : ** Er mogen geen spaties ** voor en na de komma `,` op `demo1,demo2` staan.

De overeenkomstige mapindexbestanden voor de bovenstaande parameters zijn:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Eén project, meerdere bestanden

Als u slechts één project heeft, kunt u dit als volgt configureren.

```
  - i18n: xxx
    use: Doc
```

##### Als De url Leeg Is, Wordt Standaard De Waarde i18n Gebruikt

Als `url` niet wordt opgegeven, wordt `url` standaard ingesteld op `i18n`. Deze regel geldt ook voor andere sjablonen.

Deze schrijfwijze is equivalent aan `url: xxx`, waarbij het overeenkomstige bestand `en/xxx/TOC` is.

#### TOC-index

`i18n.site` voert het `js`-plugin `.i18n/hook/after.tran/TOC.js` uit in het demomagazijn om het indexbestand met `TOC`-mappen te lezen dat overeenkomt met de `doc`-sjabloonconfiguratie om een inhoudsopgave `json` te genereren.

Als u de `doc`-sjabloon gebruikt, moet u deze plugin hebben.

Als u `i18n.site` initialiseert vanuit een lege map, vergeet dan niet om de `.i18n`-map van het demoproject naar uw map te kopiëren.

De `Doc`-sjabloon rendert de inhoudsopgave op basis van de gegenereerde `json`.

##### Uitgebreide inhoudsbeschrijving

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

`TOC`-bestanden gebruiken inspringing om de hiërarchische relatie van het inhouds-overzicht weer te geven, ondersteunen meerdere niveaus van inspringing en regelcommentaar dat begint met `#`.

##### Op het bovenliggende niveau wordt alleen de titel geschreven, niet de inhoud

In geval van meerdere inspringniveaus moet het bovenliggende niveau alleen de titel bevatten, anders kan de opmaak verward raken.

##### Project README.md

In de project `README.md`, zoals `en/demo2/README.md`, kan inhoud worden geschreven.

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Project slogan

U kunt zien dat `Deme Two` de project slogan heeft onder het vervolgkeuzemenu en de `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Dit komt overeen met de eerste regel van `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

De inhoud na de eerste dubbele punt `:` van de eerste titel van het project `README.md` wordt beschouwd als de project slogan.

Gebruikers uit China, Japan en Korea: gebruik een half breedte dubbele punt `:` in plaats van een volledige breedte dubbele punt.

##### Hoe kan de TOC in bulk worden verplaatst?

`TOC`-bestanden moeten in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is de `TOC` hierboven `zh/blog/TOC`.

Als de brontaal wordt gewijzigd, moet u de `TOC`-bestanden van een bepaalde taal in het project in bulk naar een andere taal verplaatsen.

U kunt de volgende opdrachten raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando naar uw taalcode.

### Standaard laden zonder configuratiepad

Als een bepaald pad wordt benaderd en het padvoorvoegsel niet is geconfigureerd in `nav:`, wordt het `Markdown`-bestand dat overeenkomt met het pad standaard geladen en weergegeven met behulp van de `Md`-sjabloon.

Als bijvoorbeeld `/test` wordt benaderd en `nav:` is geconfigureerd zonder het padvoorvoegsel, en de huidige browsertaal Engels is (code `en`), wordt `/en/test.md` standaard geladen en weergegeven met behulp van de `Md`-sjabloon.

Als `/en/test.md` niet bestaat, wordt de standaard `404`-pagina weergegeven.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">