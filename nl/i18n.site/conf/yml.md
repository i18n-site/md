# .i18n/conf.yml

`i18n.site` Het configuratiebestand is `.i18n/conf.yml` .

Met uitzondering van `ignore:` en `i18n:` instellingen van [`i18`](/i18) is het configuratiebestand als volgt:

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

Onder hen betekent het `ext:` configuratie-item van `upload` dat slechts `.md` wordt geüpload bij het publiceren.

## Navigatie Bovenaan

`nav:` configuratieopties, overeenkomend met het navigatiemenu bovenaan de startpagina.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hen komt `i18n: home` overeen met `en/i18n.yml`中`home: Home` .

`en/i18n.yml` wordt vertaald in meerdere talen, zoals `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat de vertaling is voltooid, kunt u de `yml` van de vertaling wijzigen, maar u kunt de sleutel van vertaling `yml` niet toevoegen of verwijderen.

### `use: Toc` , Sjabloon Voor Één Bestand (Met Omtrek)

`nav` Configureren :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betekent het gebruik van `Toc` rendering, wat een enkele `Markdown` -sjabloon weergeeft.

`TOC` de afkorting van `Table of Contents` . Wanneer deze sjabloon wordt weergegeven, wordt de omtrek van dit `Markdown` -bestand weergegeven in de zijbalk.

`url:` vertegenwoordigt het bestandspad van `Markdown` ( `/` komt overeen met de hoofdmap `/README.md` , deze bestandsnaam vereist een voorvoegsel in hoofdletters en een achtervoegsel in kleine letters).

### `use: Md` , Sjabloon Voor Één Bestand (Geen Omtrek)

`Md` is hetzelfde als `Toc` , beide worden gebruikt om een ​​enkel `Markdown` -bestand weer te geven. De `Md` toont echter niet de omtrek in de zijbalk.

U kunt `use: Toc` in de bovenstaande configuratie wijzigen in `use: Md` , voer `i18n.site` opnieuw uit in de map `md` en bezoek vervolgens de ontwikkelingsvoorbeeld-URL om de wijzigingen op de startpagina te bekijken.

### Standaard Laden Zonder Configuratiepad

Als het padvoorvoegsel van een bepaald pad dat wordt benaderd niet is geconfigureerd in `nav:` wordt het `MarkDown` -bestand dat overeenkomt met het pad standaard geladen en weergegeven met behulp van `Md` -sjabloon.

Als u bijvoorbeeld `/test` bezoekt en `nav:` is geconfigureerd zonder dit pad, en de paginataal Engels is (code `en` ), wordt de sjabloon standaard geladen `/en/test.md` en weergegeven met `Md` .

`/en/test.md` dit bestand niet bestaat, wordt de standaardpagina `404` weergegeven.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Sjabloon Met Meerdere Bestanden

In het configuratiebestand:

```
  - i18n: blog
    use: Doc
```

Geeft aan dat `Doc` wordt gebruikt voor sjabloonweergave.

`Doc` ondersteunt de integratie van meerdere `MarkDown` om documentcontouren te genereren voor enkele of meerdere projecten.

#### Eén Project (Meerdere Bestanden)

`blog` in het bovenstaande is de modus voor één project van `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Als De url Leeg Is, Wordt Standaard De Waarde i18n Gebruikt

Als u niet `url` schrijft, `url` op de waarde `i18n` . Deze regel geldt ook voor andere sjablonen.

De bovenstaande schrijfmethode is gelijk aan het hebben van `url: blog` en het bijbehorende bestand is `en/blog/TOC` .

#### Meerdere Projecten

`.i18n/conf.yml` Configuratie in `i18n:doc` is multi-projectmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier betekent `menu: NB demo1,demo2` het gebruik van `NB` om het vervolgkeuzemenu weer te geven.

`NB` , is de afkorting van `Name Breif` , wat aangeeft dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2` die eraan wordt doorgegeven.
Merk op dat er geen spaties ** voor en na de komma `,` in moeten `demo1,demo2` : **

Voor de bovenstaande parameters is het overeenkomstige directory-indexbestand:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhoudsopgave Index

`i18n.site` de `js` plug-in `.i18n/hook/after.tran/TOC.js` uitvoeren in het demo-magazijn om het directory-indexbestand `doc` overeenkomend met de sjabloonconfiguratie `TOC` te lezen om `json` van de directory-omtrek te genereren.

Als u de `doc` -sjabloon gebruikt, moet u over deze plug-in beschikken.

Als u het `i18n.site` -project vanuit een lege map initialiseert, vergeet dan niet om `.i18n` in het demoproject naar uw map te kopiëren.

`Doc` sjabloon geeft de inhoudsopgave weer op basis van het gegenereerde `json` .

##### Uitgebreide Inhoudelijke Uitleg

`en/blog/TOC` De inhoud is als volgt :

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik Inspringingen Om Niveaus Aan Te Geven

Boven `en/blog/TOC` `README.md` in de eerste regel komt overeen met `i18n.site` in de onderstaande afbeelding, wat de projectnaam is.

De volgende twee regels zijn zoals weergegeven in de onderstaande schermafbeelding.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` komt overeen met `News` ,
`news/begin.md` komt overeen met `Our Product is Online !`

`TOC` Het bestand is ingesprongen om de hiërarchische relatie van de omtrek aan te geven en ondersteunt inspringen op meerdere niveaus.

##### Het Bovenliggende Niveau Schrijft Alleen De Titel, Niet De Inhoud.

Als er meerdere inspringingsniveaus zijn, schrijft het bovenliggende niveau alleen de titel en niet de inhoud. Anders zal de typografie in de war raken.

##### Project README.md 

`README.md` van het project kunt u bijvoorbeeld inhoud schrijven in `en/demo2/README.md` .

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Projectslogan

Zoals u kunt zien, staat `Deme Two` Onder het vervolgkeuzemenu en de catalogusoverzichtprojectnaam staat `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: komt overeen met de eerste regel `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Project `README.md` De inhoud na de eerste dubbele punt `:` in de titel van het eerste niveau wordt beschouwd als de projectslogan.

Gebruikers uit China, Japan en Korea: houd er rekening mee dat u een dubbele punt van halve breedte moet gebruiken in plaats van een dubbele punt van volledige breedte `:`

##### Hoe TOC Bulksgewijs Verplaatsen?

`TOC` Het bestand moet in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is `TOC` hierboven `zh/blog/TOC` .

Als de brontaal wordt gewijzigd, moet u `TOC` in een bepaalde taal in het project batchgewijs naar een andere taal verplaatsen.

U kunt de volgende opdrachten raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando naar uw taalcode.


