# .i18n/conf.yml

Die konfigurasielêer vir `i18n.site` is `.i18n/conf.yml` en die inhoud is soos volg :

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

Onder hulle beteken `upload` tot `ext:` konfigurasie-item dat slegs `.md` opgelaai sal word wanneer dit gepubliseer word.

## Top Navigasie nav

`nav:` konfigurasie opsies, wat ooreenstem met die navigasie kieslys boaan die tuisblad.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hulle stem `i18n: home` ooreen met `home: Home` in `en/i18n.yml` (waar `en` die brontaal van die projekvertaling is).

`en/i18n.yml` inhoud is die teks wat in die navigasiekieslys vertoon word, wat volgens `fromTo` in die konfigurasie vertaal sal word, byvoorbeeld na `zh/i18n.yml` vertaal.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat die vertaling voltooi is, kan jy die waarde van vertaling `yml` wysig, maar moenie die sleutel van vertaling `yml` byvoeg of uitvee nie.

### `use: Toc` Dokument Sjabloon Met Uiteensetting

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` beteken om 'n `Toc` sjabloon te gebruik, wat 'n enkele `Markdown` -sjabloon weergee.

`TOC` is die afkorting van `Table of Contents` Wanneer hierdie sjabloon weergegee word, sal die buitelyn van hierdie `Markdown` lêer in die sybalk vertoon word.

`url:` verteenwoordig die lêerpad van `Markdown` ( `/` stem ooreen met die wortelgids `/README.md` , hierdie lêernaam vereis 'n hoofletter-voorvoegsel en 'n kleinletter-agtervoegsel).

### `use: Md` Dokument Sjabloon Sonder Buitelyn

Die `Md` sjabloon en die `Toc` sjabloon is dieselfde en albei word gebruik om 'n enkele `Markdown` lêer weer te gee. Maar die `Md` sjabloon wys nie die buitelyn in die sybalk nie.

U kan `use: Toc` in die bogenoemde konfigurasie na `use: Md` verander, `i18n.site` weer in die `md` -gids laat loop, en dan die ontwikkelingsvoorskou-URL besoek om die veranderinge op die tuisblad waar te neem.

### `use: Blog` Blog Sjablone

Die blogsjabloon vertoon 'n lys van artikels (titels en opsommings) in volgorde van publikasietyd.

[→ Klik hier om meer te wete te kom oor die spesifieke opstelling](/i18n.site/conf/blog)

### `use: Doc` Lêer Dokument Sjablone

In die konfigurasielêer:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Dui aan die gebruik van `Doc` vir sjabloonweergawe.

`Doc` sjabloon ondersteun die integrasie van veelvuldige `MarkDown` om dokumentomtrekke vir enkele of veelvuldige projekte te genereer.

#### Veelvuldige Projekte en Veelvuldige Lêers

Die konfigurasie van `.i18n/conf.yml` in `i18n:doc` is multi-projek multi-lêer lewering af.

Hier, `menu: NB demo1,demo2` , beteken die gebruik van die `NB` -sjabloon om die aftreklys weer te gee.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , wat die afkorting van `Name Breif` is, beteken dat die aftreklys die naam en slagspreuk van die projek kan vertoon.

`NB` word gevolg deur die parameter `demo1,demo2` wat daaraan oorgedra word.

Let wel : ** Daar moet geen spasies ** voor en na die komma `,` in `demo1,demo2` wees nie.

Die ooreenstemmende gids-indekslêer vir die bogenoemde parameters is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Enkele Projek Veelvuldige Lêers

As jy net een projek het, kan jy dit soos volg instel.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Enkele projek met veelvuldige lêers ondersteun nie die konfigurasie van `url` as die wortelpad `/` nie
> As __conf.yml → nav:__ Geen wortelpad opgestel is nie, sal dit outomaties na die eerste URL onder die `nav:` konfigurasie herskryf word wanneer u toegang tot die tuisblad van die webwerf kry.
> Hierdie ontwerp is om projekdokumente, blogs en ander inhoud beter deur gidse te onderskei.
> Dit word aanbeveel om 'n enkele lêer en 'n enkele bladsy as die tuisblad te gebruik.

> [!TIP]
> As `url` nie geskryf word nie, is `url` verstek op die waarde van `i18n` Hierdie reël tree ook in werking vir ander sjablone.

#### TOC Inhoudsopgawe Indeks

As sjabloon `use: Doc` in die konfigurasie geaktiveer is, aktiveer asseblief inprop `i18n.addon/toc` in `.i18n/conf.yml` Die konfigurasie is soos volg :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` sal outomaties hierdie inprop installeer en uitvoer, lees `TOC` die gidsindekslêer en genereer `json` die gidsomtrek.

As dit 'n enkele projek met veelvuldige lêers is, is die wortelgids `TOC` die gids wat ooreenstem met `url:` in die brontaalgids. Byvoorbeeld, as die brontaal Chinees is: die lêer wat met `url: flashduty` ooreenstem, is `zh/flashduty/TOC` .

As dit veelvuldige projekte en veelvuldige lêers is, is dit nie nodig om `url:` op te stel nie. Die wortelgids van `TOC` is die gids wat ooreenstem met die waarde van `i18n` .

##### Gedetailleerde Inhoud Verduideliking

`en/blog/TOC` inhoud is soos volg :

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik Inkeping Om Vlakke Aan Te Dui

`README.md` in die eerste ry van `en/blog/TOC` hierbo stem ooreen met `i18n.site` in die prent hieronder, wat die projeknaam is.

Die volgende twee reëls is soos getoon in die skermkiekie hieronder.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` stem ooreen met `News` ,
`news/begin.md` stem ooreen met `Our Product is Online !`

`TOC` lêers word ingekeep om die hiërargiese verhouding van die buitelyn aan te dui, ondersteun multi-vlak inkeping, en lynkommentaar wat met `# ` begin.

##### Die Ouervlak Skryf Net Die Titel, Nie Die Inhoud Nie.

Wanneer daar veelvuldige vlakke van inkeping is, skryf die ouervlak net die titel en nie die inhoud nie. Andersins sal tipografie deurmekaar wees.

##### Projek README.md

Inhoud kan in item `README.md` geskryf word, soos `en/demo2/README.md` .

Let daarop dat die inhoud van hierdie lêer nie 'n uiteensetting van die inhoudsopgawe toon nie, daarom word dit aanbeveel om die lengte te beperk en 'n kort inleiding te skryf.

###### Projek Slagspreuk

`Your Project slogan` kan sien dat `Deme Two` sy projekbyskrif onder die aftreklys en katalogus-omtrek-projeknaam het : .

![](https://p.3ti.site/1721276842.avif)

Dit stem ooreen met die eerste ry van `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Die inhoud na die eerste dubbelpunt `:` van die eerstevlaktitel van projek `README.md` sal as die projek slagspreuk beskou word.

Gebruikers van China, Japan en Korea, let asseblief daarop dat jy halfwydte dubbelpunt `:` in plaas van volwydte dubbelpunt moet gebruik.

##### Hoe Om TOC in Grootmaat Te Skuif?

`TOC` lêers moet in die gids van die brontaal geplaas word.

Byvoorbeeld, as die brontaal Chinees is, dan is `TOC` hierbo `zh/blog/TOC` .

As die brontaal gewysig word, moet jy die `TOC` lêers van 'n sekere taal in die projek bondel na 'n ander taal skuif.

U kan na die volgende opdragte verwys:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Verander asseblief `en/` en `zh/` in die bogenoemde opdrag na jou taalkode.

### Versteklaai Sonder Konfigurasiepad

Vir 'n sekere pad wat toeganklik is, as die pad-voorvoegsel nie in `nav:` gekonfigureer is nie, sal die `MarkDown` lêer wat ooreenstem met die pad by verstek gelaai word en met die `Md` -sjabloon weergegee word.

Byvoorbeeld, as `/test` verkry word en `nav:` is gekonfigureer sonder die voorvoegsel van hierdie pad, en die huidige blaaitaal is Engels (kode `en` ), sal `/en/test.md` by verstek gelaai word en met sjabloon `Md` weergegee word.

As `/en/test.md` hierdie lêer nie bestaan nie, sal die verstek `404` bladsy vertoon word.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">