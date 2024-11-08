# .i18n/conf.yml

Het configuratiebestand voor `i18n.site` is `.i18n/conf.yml` en de inhoud is als volgt :

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

Daarvan betekent `upload` tot `ext:` configuratie-item dat er bij publicatie slechts `.md` worden geüpload.

## Navigatie Bovenaan

`nav:` configuratie-opties, overeenkomend met het navigatiemenu bovenaan de startpagina.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hen komt `i18n: home` overeen met `home: Home` op `en/i18n.yml` (waarbij `en` de brontaal van de projectvertaling is).

`en/i18n.yml` inhoud is de tekst die wordt weergegeven in het navigatiemenu en die in de configuratie wordt vertaald volgens `fromTo` , bijvoorbeeld vertaald naar `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat de vertaling is voltooid, kunt u de waarde van vertaling `yml` wijzigen, maar u kunt de sleutel van vertaling `yml` niet toevoegen of verwijderen.

### `use: Toc` Document Met Omtrek

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betekent renderen met behulp van een `Toc` sjabloon, wat neerkomt op een enkele `Markdown` sjabloon.

`TOC` is de afkorting van `Table of Contents` Wanneer deze sjabloon wordt weergegeven, wordt de omtrek van dit `Markdown` bestand in de zijbalk weergegeven.

`url:` vertegenwoordigt het bestandspad van `Markdown` ( `/` komt overeen met de hoofdmap `/README.md` , deze bestandsnaam vereist een voorvoegsel in hoofdletters en een achtervoegsel in kleine letters).

### 0Sjabloon `use: Md` Document Zonder Omtrek

De `Md` sjabloon en de `Toc` sjabloon zijn hetzelfde en beide worden gebruikt om één enkel `Markdown` bestand weer te geven. Maar de `Md` sjabloon toont niet de omtrek in de zijbalk.

U kunt `use: Toc` in de bovenstaande configuratie wijzigen in `use: Md` , `i18n.site` opnieuw uitvoeren in de map `md` en vervolgens de ontwikkelingsvoorbeeld-URL bezoeken om de wijzigingen op de startpagina te bekijken.

### `use: Blog` Blog-Sjablonen

De blogsjabloon toont een lijst met artikelen (titels en samenvattingen) in volgorde van publicatietijd.

[→ Klik hier voor meer informatie over de specifieke configuratie](/i18n.site/conf/blog)

### `use: Doc` Bestandsdocumentsjablonen

In het configuratiebestand:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Geeft aan dat `Doc` wordt gebruikt voor sjabloonweergave.

`Doc` sjabloon ondersteunt de integratie van meerdere `MarkDown` om documentcontouren te genereren voor enkele of meerdere projecten.

#### Meerdere Projecten en Meerdere Bestanden

De configuratie van `.i18n/conf.yml` op `i18n:doc` is de weergavemodus voor meerdere projecten en meerdere bestanden.

Hier betekent `menu: NB demo1,demo2` dat u de `NB` -sjabloon gebruikt om het vervolgkeuzemenu weer te geven.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , wat de afkorting is van `Name Breif` , betekent dat het vervolgkeuzemenu de naam en slogan van het project kan weergeven.

`NB` wordt gevolgd door de parameter `demo1,demo2` die eraan wordt doorgegeven.

Let op : ** Er mogen geen spaties ** voor en na de komma `,` in `demo1,demo2` staan.

Het corresponderende directory-indexbestand voor de bovenstaande parameters is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Eén Project Meerdere Bestanden

Als u slechts één project heeft, kunt u dit als volgt configureren.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Eén project met meerdere bestanden biedt geen ondersteuning voor het configureren `url` als hoofdpad `/`
> Als __conf.yml → nav:__ Er geen rootpad is geconfigureerd, wordt het bij toegang tot de startpagina van de website automatisch herschreven naar de eerste URL onder de `nav:` configuratie.
> Dit ontwerp is bedoeld om projectdocumenten, blogs en andere inhoud beter te onderscheiden via mappen.
> Het wordt aanbevolen om één enkel bestand en één pagina als startpagina te gebruiken.

> [!TIP]
> Als `url` niet wordt geschreven, heeft `url` standaard de waarde `i18n` Deze regel geldt ook voor andere sjablonen.

#### TOC Inhoudsopgave Index

Als sjabloon `use: Doc` is ingeschakeld in de configuratie, schakel dan plug-in `i18n.addon/toc` in `.i18n/conf.yml` in. De configuratie is als volgt :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` zal deze plug-in automatisch installeren en uitvoeren, `TOC` het mapindexbestand lezen en `json` het mapoverzicht genereren.

Als het een enkel project is met meerdere bestanden, is de hoofdmap `TOC` de map die overeenkomt met `url:` in de brontaalmap. Als de brontaal bijvoorbeeld Chinees is: het bestand dat overeenkomt met `url: flashduty` is `zh/flashduty/TOC` .

Als het om meerdere projecten en meerdere bestanden gaat, is het niet nodig om `url:` te configureren. De hoofdmap van `TOC` is de map die overeenkomt met de waarde van `i18n` .

##### Uitgebreide Inhoudelijke Uitleg

`en/blog/TOC` inhoud is als volgt :

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik Inspringingen Om Niveaus Aan Te Geven

`README.md` in de eerste rij van `en/blog/TOC` hierboven komt overeen met `i18n.site` in de onderstaande afbeelding, wat de projectnaam is.

De volgende twee regels zijn zoals weergegeven in de onderstaande schermafbeelding.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` komt overeen met `News` ,
`news/begin.md` komt overeen met `Our Product is Online !`

`TOC` bestanden zijn ingesprongen om de hiërarchische relatie van de omtrek aan te geven, ondersteunen inspringen op meerdere niveaus en regelcommentaar dat begint met `# ` .

##### Het Bovenliggende Niveau Schrijft Alleen De Titel, Niet De Inhoud.

Als er meerdere inspringingsniveaus zijn, schrijft het bovenliggende niveau alleen de titel en niet de inhoud. Anders zal de typografie in de war raken.

##### Project README.md

Inhoud kan worden geschreven in item `README.md` , zoals `en/demo2/README.md` .

Houd er rekening mee dat de inhoud van dit bestand geen inhoudsopgave bevat, dus het wordt aanbevolen om de lengte te beperken en een korte introductie te schrijven.

###### Projectslogan

U kunt zien dat `Deme Two` de projectslogan heeft onder het vervolgkeuzemenu en de `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Dit komt overeen met de eerste rij van `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

De inhoud na de eerste dubbele punt `:` van de titel van het eerste niveau van project `README.md` wordt beschouwd als de projectslogan.

Gebruikers uit China, Japan en Korea: houd er rekening mee dat u een dubbele punt van halve breedte `:` moet gebruiken in plaats van een dubbele punt van volledige breedte.

##### Hoe TOC Bulksgewijs Verplaatsen?

`TOC` bestanden moeten in de map van de brontaal worden geplaatst.

Als de brontaal bijvoorbeeld Chinees is, is `TOC` hierboven `zh/blog/TOC` .

Als de brontaal wordt gewijzigd, moet u de `TOC` bestanden van een bepaalde taal in het project batchgewijs naar een andere taal verplaatsen.

U kunt de volgende opdrachten raadplegen:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Wijzig `en/` en `zh/` in het bovenstaande commando in uw taalcode.

### Standaard Laden Zonder Configuratiepad

Als voor een bepaald pad toegang wordt verkregen en het padvoorvoegsel niet is geconfigureerd in `nav:` , wordt het `MarkDown` bestand dat overeenkomt met het pad standaard geladen en weergegeven met behulp van de `Md` sjabloon.

Als bijvoorbeeld `/test` wordt benaderd en `nav:` is geconfigureerd zonder het voorvoegsel van dit pad, en de huidige browsertaal Engels is (code `en` ), wordt `/en/test.md` standaard geladen en weergegeven met behulp van sjabloon `Md` .

`/en/test.md` dit bestand niet bestaat, wordt de standaardpagina `404` weergegeven.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">