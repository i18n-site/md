# .i18n/conf.yml

`i18n.site` Die konfigurasielêer is `.i18n/conf.yml` .

Behalwe vir `ignore:` en `i18n:` instellings van [`i18`](/i18) is die konfigurasielêer soos volg:

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

Onder hulle beteken die `ext:` konfigurasie-item `.md` `upload`

## Top Navigasie nav

`nav:` konfigurasie-opsies, wat ooreenstem met die navigasie-kieslys boaan die tuisblad.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onder hulle stem `i18n: home` ooreen met `en/i18n.yml`中`home: Home` .

`en/i18n.yml` sal in verskeie tale vertaal word, soos `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nadat die vertaling voltooi is, kan jy die waarde van `yml` in die vertaling verander, maar moenie die sleutel van vertaling `yml` byvoeg of uitvee nie.

### `use: Toc` Enkele Lêer Sjabloon (Met Uiteensetting)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` beteken die gebruik van `Toc` weergawe, wat 'n enkele `Markdown` -sjabloon weergee.

`TOC` is die afkorting van `Table of Contents` Wanneer hierdie sjabloon weergegee word, sal die buitelyn van hierdie `Markdown` -lêer in die sybalk vertoon word.

`url:` verteenwoordig die lêerpad van `Markdown` ( `/` stem ooreen met die wortelgids `/README.md` , hierdie lêernaam vereis 'n hoofletter-voorvoegsel en 'n kleinletter-agtervoegsel).

### `use: Md` Enkele Lêer Sjabloon (Geen Uiteensetting)

`Md` Sjabloon is dieselfde as `Toc` , beide word gebruik om 'n enkele `Markdown` -lêer weer te gee. Die `Md` wys egter nie die buitelyn in die sybalk nie.

U kan `use: Toc` in die bogenoemde konfigurasie verander na `use: Md` , hardloop `i18n.site` weer in die `md` -gids, en dan die ontwikkelingsvoorskou-URL besoek om die veranderinge op die tuisblad waar te neem.

### Versteklaai Sonder Konfigurasiepad

As die padvoorvoegsel van 'n sekere pad wat toegang verkry word nie in `nav:` sal die `MarkDown` lêer wat ooreenstem met die pad by verstek gelaai word en met `Md` sjabloon weergegee word.

Byvoorbeeld, as jy `/test` en `nav:` is gekonfigureer sonder hierdie pad, en die bladsytaal is Engels (kode `en` ), sal die sjabloon by verstek gelaai word `/en/test.md` en weergegee word met `Md` .

`/en/test.md` hierdie lêer nie bestaan ​​nie, sal die verstek `404` bladsy vertoon word.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Multi-Lêer Sjabloon

In die konfigurasielêer:

```
  - i18n: blog
    use: Doc
```

Dui aan om `Doc` vir sjabloonweergawe te gebruik.

`Doc` Sjabloon ondersteun die integrasie van veelvuldige `MarkDown` om dokumentomtrekke vir enkele of veelvuldige projekte te genereer.

#### Enkele Projek (Veelvuldige Lêers)

`blog` in die bogenoemde is die enkelprojekmodus van `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Wanneer url Leeg Is, Is Dit Verstek Na Die Waarde Van i18n

As jy nie skryf `url` , `url` tot die waarde van `i18n` . Hierdie reël tree ook in werking vir ander sjablone.

Die bogenoemde skryfmetode is gelykstaande aan `url: blog` en die ooreenstemmende lêer is `en/blog/TOC` .

#### Veelvuldige Projekte

`.i18n/conf.yml` Die konfigurasie in `i18n:doc` is multi-projek af.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hier beteken `menu: NB demo1,demo2` die gebruik van `NB` om die aftreklys weer te gee.

`NB` , is die afkorting van `Name Breif` , wat aandui dat die aftreklys die naam en slagspreuk van die projek kan vertoon.

`NB` word gevolg deur die parameter `demo1,demo2` wat daaraan oorgedra word.
Let daarop dat daar geen spasies ** voor en na die komma `,` in moet wees : ** `demo1,demo2`

Vir die bogenoemde parameters is die ooreenstemmende gidsindekslêer:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Inhoudsopgawe Indeks

`i18n.site` Sal die `js` plugin `.i18n/hook/after.tran/TOC.js` in die demo-pakhuis uitvoer om die gidsindekslêer `doc` wat ooreenstem met die sjabloonkonfigurasie `TOC` te lees om `json` van die gidsomtrek te genereer.

As jy `doc` gebruik, moet jy hierdie inprop hê.

As jy `i18n.site` projek in 'n leë gids initialiseer, onthou om `.i18n` in die demo-projek na jou gids te kopieer.

Die `Doc` sal die inhoudsopgawe uiteensit gebaseer op die gegenereerde `json` .

##### Gedetailleerde Inhoud Verduideliking

Die inhoud is soos : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Gebruik Inkeping Om Vlakke Aan Te Dui

Bo `en/blog/TOC` `README.md` in die eerste reël stem ooreen met `i18n.site` in die prent hieronder, wat die projeknaam is.

Die volgende twee reëls is soos getoon in die skermkiekie hieronder.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` stem ooreen met `News` ,
`news/begin.md` stem ooreen met `Our Product is Online !`

`TOC` Die lêer is ingekeep om die hiërargiese verhouding van die buitelyn aan te dui en ondersteun multi-vlak inkeping.

##### Die Ouervlak Skryf Net Die Titel, Nie Die Inhoud Nie.

Wanneer daar veelvuldige vlakke van inkeping is, skryf die ouervlak net die titel en nie die inhoud nie. Andersins sal tipografie deurmekaar wees.

##### Projek README.md 

`README.md` van die projek, byvoorbeeld, kan jy inhoud in `en/demo2/README.md` skryf.

Let daarop dat die inhoud van hierdie lêer nie 'n uiteensetting van die inhoudsopgawe toon nie, daarom word dit aanbeveel om die lengte te beperk en 'n kort inleiding te skryf.

###### Projek Slagspreuk

Soos jy kan sien, is daar `Deme Two` projek se slagspreuk `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: stem ooreen met die eerste reël `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projek `README.md` Die inhoud na die eerste dubbelpunt `:` in die eerstevlaktitel sal as die projek slagspreuk beskou word.

Gebruikers van China, Japan en Korea, let asseblief daarop dat jy halfwydte dubbelpunt in plaas van volwydte dubbelpunt moet gebruik `:`

##### Hoe Om TOC in Grootmaat Te Skuif?

`TOC` Die lêer moet in die gids van die brontaal geplaas word.

Byvoorbeeld, as die brontaal Chinees is, dan `zh/blog/TOC` `TOC`

As die brontaal gewysig word, moet jy `TOC` in 'n sekere taal in die projek na 'n ander taal skuif.

U kan na die volgende opdragte verwys:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Verander asseblief `en/` en `zh/` in die bogenoemde opdrag na jou taalkode.


