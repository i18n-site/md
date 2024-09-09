# .i18n/conf.yml

Die profiel vir `i18n.site` is `.i18n/conf.yml` .

Behalwe vir die instellings van [`i18`](/i18) , `ignore:` en `i18n:` , is die konfigurasielêer soos volg:

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

Onder hulle beteken `upload` tot `ext:` konfigurasie-item dat slegs `.md` opgelaai sal word wanneer dit gepubliseer word.

## Top Navigasie nav

`nav:` konfigurasie opsies, wat ooreenstem met die navigasie kieslys boaan die tuisblad.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hulle stem `i18n: home` ooreen met `home: Home` in `en/i18n.yml` .

`en/i18n.yml` sal in verskeie tale vertaal word, soos `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat die vertaling voltooi is, kan jy die waarde van vertaling `yml` wysig, maar moenie die sleutel van vertaling `yml` byvoeg of uitvee nie.

### `use: Toc` , Enkellêer Sjabloon (Met Uiteensetting)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` beteken om 'n `Toc` sjabloon te gebruik, wat 'n enkele `Markdown` sjabloon weergee.

`TOC` is die afkorting van `Table of Contents` Wanneer hierdie sjabloon weergegee word, sal die buitelyn van hierdie `Markdown` lêer in die sybalk vertoon word.

`url:` verteenwoordig die lêerpad van `Markdown` ( `/` stem ooreen met die wortelgids `/README.md` , hierdie lêernaam vereis 'n hoofletter-voorvoegsel en 'n kleinletter-agtervoegsel).

### `use: Md` , Enkellêer Sjabloon (Geen Uiteensetting)

Die `Md` -sjabloon en die `Toc` sjabloon is dieselfde en albei word gebruik om 'n enkele `Markdown` lêer weer te gee. Maar die `Md` sjabloon wys nie die buitelyn in die sybalk nie.

U kan `use: Toc` in die bogenoemde konfigurasie na `use: Md` verander, `i18n.site` weer in die `md` gids laat loop, en dan die ontwikkelingsvoorskou-URL besoek om die veranderinge op die tuisblad waar te neem.

### Versteklaai Sonder Konfigurasiepad

As toegang tot 'n sekere pad verkry word en sy padvoorvoegsel is nie in `nav:` gekonfigureer nie, sal die `MarkDown` lêer wat met die pad ooreenstem, by verstek gelaai word en met die `Md` sjabloon weergegee word.

Byvoorbeeld, as `/test` verkry word, en `nav:` is gekonfigureer sonder hierdie pad, en die bladsytaal is Engels (kode `en` ), sal `/en/test.md` by verstek gelaai word en met sjabloon `Md` weergegee word.

As `/en/test.md` hierdie lêer nie bestaan nie, sal die verstek `404` bladsy vertoon word.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-Lêer Sjabloon

In die konfigurasielêer:

```
  - i18n: blog
    use: Doc
```

Dui aan om `Doc` vir sjabloonweergawe te gebruik.

`Doc` sjabloon ondersteun die integrasie van veelvuldige `MarkDown` om dokumentomtrekke vir enkele of veelvuldige projekte te genereer.

#### Enkele Projek (Veelvuldige Lêers)

`blog` hierbo is die enkelitemmodus van `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wanneer url Leeg Is, Is Dit Verstek Na Die Waarde Van i18n

As `url` nie geskryf word nie, is `url` verstek op die waarde van `i18n` Hierdie reël tree ook in werking vir ander sjablone.

Die bogenoemde skryfmetode is gelykstaande aan `url: blog` , en die ooreenstemmende lêer is `en/blog/TOC` .

#### Veelvuldige Projekte

Die konfigurasie van `i18n:doc` uit `.i18n/conf.yml` is multiprojekmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier, `menu: NB demo1,demo2` , beteken die gebruik van die `NB` sjabloon om die aftreklys weer te gee.

`NB` , wat die afkorting van `Name Breif` is, beteken dat die aftreklys die naam en slagspreuk van die projek kan vertoon.

`NB` word gevolg deur die parameter `demo1,demo2` wat daaraan oorgedra word.
Let wel : ** Daar moet geen spasies ** voor en na die komma `,` in `demo1,demo2` wees nie.

Vir die bogenoemde parameters is die ooreenstemmende gidsindekslêer:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhoudsopgawe Indeks

`i18n.site` sal `js` inprop `.i18n/hook/after.tran/TOC.js` in die demo-pakhuis uitvoer om die `doc` gidsindekslêer te lees wat ooreenstem met die `TOC` sjabloonkonfigurasie om die `json` gidsomtrek te genereer.

As jy `doc` -sjabloon gebruik, moet jy hierdie inprop hê.

As jy projek `i18n.site` inisialiseer vanaf 'n leë lêergids, onthou om demonstrasieprojek `.i18n` na jou gids te kopieer.

Die `Doc` sjabloon sal die inhoudsopgawe uiteensetting op grond van die gegenereerde `json` weergee.

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

`TOC` -lêers word ingekeep om die hiërargiese verhouding van die buitelyn aan te dui, ondersteun multi-vlak inkeping, en lynkommentaar wat met `#` begin.

##### Die Ouervlak Skryf Net Die Titel, Nie Die Inhoud Nie.

Wanneer daar veelvuldige vlakke van inkeping is, skryf die ouervlak net die titel en nie die inhoud nie. Andersins sal tipografie deurmekaar wees.

##### Projek README.md

Inhoud kan in item `README.md` geskryf word, soos `en/demo2/README.md` .

Let daarop dat die inhoud van hierdie lêer nie 'n uiteensetting van die inhoudsopgawe toon nie, daarom word dit aanbeveel om die lengte te beperk en 'n kort inleiding te skryf.

###### Projek Slagspreuk

Jy kan sien dat `Deme Two` sy projekbyskrif onder die aftreklys en katalogus-omtrek-projeknaam het : `Your Project slogan`

![](https://p.3ti.site/1721276842.avif)

Dit stem ooreen met die eerste ry `en/demo2/README.md` :

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