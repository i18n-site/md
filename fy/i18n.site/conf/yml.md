# .i18n/conf.yml

`i18n.site` De konfiguraasjetriem is `.i18n/conf.yml` .

Utsein `ignore:` en `i18n:` ynstellings fan [`i18`](/i18) is it konfiguraasjetriem as folget:

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

Under harren betsjut it `ext:` konfiguraasje `.md` item fan `upload`

## Top Navigaasje nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Under harren, `i18n: home` oerien mei `en/i18n.yml`中`home: Home` .

`en/i18n.yml` sil oerset wurde yn meardere talen, lykas `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nei't `yml` oersetting foltôge is, kinne jo de wearde fan `yml`

### `use: Toc` Sjabloan Foar Ien Bestân (Mei Omtrek)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` is de ôfkoarting `Markdown` `Table of Contents` .

`url:` stiet foar it bestânspaad fan `Markdown` ( `/` komt oerien mei de rootmap `/README.md` , dizze triemnamme fereasket in haadletter foarheaksel en in efterheaksel foar lytse letters).

### `use: Md` Sjabloan Foar Ien Bestân (Gjin Omtrek)

`Md` `Toc` `Markdown` Lykwols `Md` it sjabloan toant de omtrek net yn 'e sydbalke.

Jo kinne yn 'e boppesteande konfiguraasje `use: Toc` nei `use: Md` , útfiere `i18n.site` yn 'e `md` -map wer, en besykje dan de URL-foarbyld fan ûntwikkeling om de wizigingen op 'e thússide te observearjen.

### Standert Laden Sûnder Konfiguraasjepaad

As it paadfoarheaksel fan in bepaald paad dat tagong wurdt net ynsteld is yn `nav:` sil de `MarkDown` triem dy't oerienkomt mei it paad standert wurde laden en werjûn mei `Md` sjabloan.

As jo ​​bygelyks `/test` , en `nav:` is konfigurearre sûnder dit paad, en de sidetaal is Ingelsk (koade `en` ), sil it sjabloan standert wurde laden `/en/test.md` en werjûn mei `Md` .

`/en/test.md` dizze triem net bestiet, sil de standert `404` side werjûn wurde.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Sjabloan Foar Meardere Bestannen

Yn it konfiguraasjetriem:

```
  - i18n: blog
    use: Doc
```

Jout oan op it brûken fan `Doc`

`Doc` Sjabloan stipet it yntegrearjen fan meardere `MarkDown` om dokumintoutlines te generearjen foar inkele of meardere projekten.

#### Ien Projekt (Meardere Triemmen)

`blog` yn it boppesteande is de ienprojektmodus fan `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### As url Leech Is, Stiet It Standert Op De Wearde Fan i18n

As jo ​​net skriuwe `url` `url` de wearde fan `i18n` .

De boppesteande skriuwmetoade is lykweardich oan it hawwen fan `url: blog` en de oerienkommende triem is `en/blog/TOC` .

#### Meardere Projekten

`.i18n/conf.yml` De konfiguraasje yn `i18n:doc` is multi-projekt modus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hjir `NB` `menu: NB demo1,demo2`

`NB` , is de ôfkoarting fan `Name Breif` , wat oanjout dat it útklapmenu de namme en slogan fan it projekt werjaan kin.

`NB` wurdt folge troch de parameter `demo1,demo2` trochjûn.
Tink derom dat d'r gjin spaasjes ** foar en nei de komma `,` yn moatte `demo1,demo2` : **

Foar de boppesteande parameters is de oerienkommende triemtafel yndeks triem:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ynhâldsopjefte Yndeks

`i18n.site` Sil de `js` plugin `.i18n/hook/after.tran/TOC.js` útfiere yn it demo-pakhús om it mapyndeksbestân te lêzen `doc` oerienkomt mei de sjabloankonfiguraasje `TOC` om `json` fan 'e mapoersjoch te generearjen.

As jo `doc` brûke, moatte jo dizze plug-in hawwe.

As jo ​​it `i18n.site` -projekt initialisearje fanút in lege map, tink dan om `.i18n` yn it demo-projekt nei jo map te kopiearjen.

It `Doc` sil de ynhâldsopjefte werjaan op basis fan it generearre `json` .

##### Detaillearre Ynhâld Útlis

De ynhâld is : folget `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Brûk Ynspringen Om Nivo's Oan Te Jaan

`en/blog/TOC` `README.md` yn 'e earste rigel komt oerien mei `i18n.site` yn' e ôfbylding hjirûnder, dat is de projektnamme.

De folgjende twa rigels binne lykas werjûn yn 'e skermprint hjirûnder.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` stimt oerien mei `News` ,
`news/begin.md` stimt oerien mei `Our Product is Online !`

`TOC`

##### It Âldernivo Skriuwt Allinich De Titel, Net De Ynhâld.

As d'r meardere ynspringingsnivo's binne, skriuwt it âldernivo allinich de titel en net de ynhâld. Oars wurdt typografy fergriemd.

##### Projekt README.md 

`README.md` fan it projekt kinne jo bygelyks ynhâld skriuwe yn `en/demo2/README.md` .

Tink derom dat de ynhâld fan dit bestân gjin ynhâldsopjefte sjen lit, dus it is oan te rieden om de lingte te beheinen en in koarte ynlieding te skriuwen.

###### Projekt Slogan

Sa't jo sjen kinne `Deme Two` ûnder it útklapmenu en de projektnamme fan 'e katalogus, is d'r de projektslogan `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: komt oerien mei de earste rigel `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Brûkers út Sina, Japan en Korea, tink derom dat jo de kolon fan 'e heule breedte moatte brûke `:`

##### Hoe Kinne Jo TOC Yn Bulk Ferpleatse?

`TOC` It bestân moat pleatst wurde yn de map fan de boarnetaal.

As de boarnetaal bygelyks Sineesk is, dan `zh/blog/TOC` `TOC`

As de boarnetaal wizige is, moatte jo `TOC` yn in bepaalde taal yn it projekt batch ferpleatse nei in oare taal.

Jo kinne ferwize nei de folgjende kommando's:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Feroarje asjebleaft `en/` en `zh/` yn it boppesteande kommando oan jo taalkoade.


