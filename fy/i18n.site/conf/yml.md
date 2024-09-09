# .i18n/conf.yml

It profyl foar `i18n.site` is `.i18n/conf.yml` .

Utsein de ynstellings fan [`i18`](/i18) , `ignore:` en `i18n:` , is it konfiguraasjetriem as folget:

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

Under harren betsjut `upload` oant `ext:` konfiguraasje item dat mar `.md` sille wurde uploade by publisearjen.

## Top Navigaasje nav

`nav:` konfiguraasjeopsjes, oerienkomt mei it navigaasjemenu boppe oan 'e thússide.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Under harren komt `i18n: home` oerien mei `home: Home` yn `en/i18n.yml` .

`en/i18n.yml` sil oerset wurde yn meardere talen, lykas `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nei't de oersetting foltôge is, kinne jo de wearde fan oersetting `yml` feroarje, mar de kaai fan oersetting `yml` net tafoegje of wiskje.

### `use: Toc` , Sjabloan Foar Ien Bestân (Mei Skema)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betsjut rendering mei help fan in `Toc` sjabloan, dat is rendering in inkele `Markdown` sjabloan.

`TOC` is de ôfkoarting fan `Table of Contents` As dit sjabloan werjûn wurdt, sil de omtrek fan dit `Markdown` bestân yn de sydbalke werjûn wurde.

`url:` stiet foar it bestânspaad fan `Markdown` ( `/` komt oerien mei de rootmap `/README.md` , dizze triemnamme fereasket in haadletter foarheaksel en in efterheaksel foar lytse letters).

### `use: Md` , Sjabloan Foar Ien Bestân (Gjin Skets)

It sjabloan `Md` en it sjabloan `Toc` binne itselde en beide wurde brûkt om ien `Markdown` bestân wer te jaan. Mar it sjabloan `Md` toant de omtrek net yn 'e sydbalke.

Jo kinne `use: Toc` yn 'e boppesteande konfiguraasje wizigje nei `use: Md` , `i18n.site` opnij útfiere yn' e `md` map, en besykje dan de ûntwikkelingsfoarbyld URL om de wizigingen op 'e thússide te observearjen.

### Standert Laden Sûnder Konfiguraasjepaad

As in bepaald paad tagong is en syn paadfoarheaksel is net konfigureare yn `nav:` , sil de `MarkDown` bestân dy't oerienkomt mei it paad standert wurde laden en werjûn mei it `Md` sjabloan.

Bygelyks, as `/test` tagong wurdt, en `nav:` is ynsteld sûnder dit paad, en de sidetaal is Ingelsk (koade `en` ), sil `/en/test.md` standert laden wurde en werjûn mei sjabloan `Md` .

As `/en/test.md` dizze triem net bestiet, sil de standert `404` side werjûn wurde.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Sjabloan Foar Meardere Bestannen

Yn it konfiguraasjetriem:

```
  - i18n: blog
    use: Doc
```

Jout oan mei it brûken fan `Doc` foar sjabloan rendering.

`Doc` -sjabloan stipet it yntegrearjen fan meardere `MarkDown` foar it generearjen fan dokumintoutline foar ien of meardere projekten.

#### Ien Projekt (Meardere Triemmen)

`blog` hjirboppe is de modus fan ien item fan `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### As url Leech Is, Stiet It Standert Op De Wearde Fan i18n

As `url` net skreaun is, stiet `url` standert op de wearde fan `i18n` Dizze regel jildt ek foar oare sjabloanen.

De boppesteande skriuwmetoade is lykweardich oan `url: blog` , en de oerienkommende triem is `en/blog/TOC` .

#### Meardere Projekten

De konfiguraasje fan `i18n:doc` fan `.i18n/conf.yml` is multi-projekt modus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hjir, `menu: NB demo1,demo2` , betsjut it brûken fan it sjabloan `NB` om it dellûkmenu wer te jaan.

`NB` , dat is de ôfkoarting fan `Name Breif` , betsjut dat it útklapmenu de namme en slogan fan it projekt werjaan kin.

`NB` wurdt folge troch de parameter `demo1,demo2` trochjûn oan it.
Opmerking : ** D'r moatte gjin spaasjes ** foar en nei de komma `,` op `demo1,demo2` stean.

Foar de boppesteande parameters is de oerienkommende triemtafel yndeks triem:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ynhâldsopjefte Yndeks

`i18n.site` sil `js` plug-in `.i18n/hook/after.tran/TOC.js` útfiere yn it demo-pakhús om it `doc` map-yndeksbestân te lêzen dat oerienkomt mei de `TOC` sjabloankonfiguraasje om de `json` mapkonfiguraasje te generearjen.

As jo `doc` -sjabloan brûke, moatte jo dizze plug-in hawwe.

As jo projekt `i18n.site` inisjalisearje fan in lege map, tink dan om demoprojekt `.i18n` nei jo map te kopiearjen.

It sjabloan `Doc` sil de ynhâldsopjefte werjaan op basis fan de generearre `json` .

##### Detaillearre Ynhâld Útlis

`en/blog/TOC` ynhâld is as folget :

```
README.md

news/README.md
  news/begin.md
```

##### Brûk Ynspringen Om Nivo's Oan Te Jaan

`README.md` yn 'e earste rige fan `en/blog/TOC` hjirboppe komt oerien mei `i18n.site` yn' e ôfbylding hjirûnder, dat is de projektnamme.

De folgjende twa rigels binne lykas werjûn yn 'e skermprint hjirûnder.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` komt oerien mei `News` ,
`news/begin.md` komt oerien mei `Our Product is Online !`

`TOC` -bestannen wurde ynspringe om de hiërargyske relaasje fan 'e rigel oan te jaan, stipe foar ynspringing op meardere nivo's, en line-kommentaar begjinnend mei `#` .

##### It Âldernivo Skriuwt Allinich De Titel, Net De Ynhâld.

As d'r meardere ynspringingsnivo's binne, skriuwt it âldernivo allinich de titel en net de ynhâld. Oars wurdt typografy fergriemd.

##### Projekt README.md

Ynhâld kin skreaun wurde yn item `README.md` , lykas `en/demo2/README.md` .

Tink derom dat de ynhâld fan dit bestân gjin ynhâldsopjefte sjen lit, dus it is oan te rieden om de lingte te beheinen en in koarte ynlieding te skriuwen.

###### Projekt Slogan

Jo kinne sjen dat `Deme Two` syn projektlabel hat ûnder it útklapmenu en katalogus-projektnamme `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Dit komt oerien mei de earste rige `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

De ynhâld nei de earste kolon `:` fan de titel op it earste nivo fan projekt `README.md` wurdt beskôge as de projektslogan.

Brûkers út Sina, Japan en Korea, tink derom dat jo de kolon `:` fan 'e heale breedte moatte brûke ynstee fan' e heule breedte.

##### Hoe Kinne Jo TOC Yn Bulk Ferpleatse?

`TOC` triemmen moatte wurde pleatst yn de map fan de boarne taal.

As de boarnetaal bygelyks Sineesk is, dan is `TOC` hjirboppe `zh/blog/TOC` .

As de boarnetaal wizige is, moatte jo de `TOC` bestannen fan in bepaalde taal yn it projekt batch ferpleatse nei in oare taal.

Jo kinne ferwize nei de folgjende kommando's:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Feroarje asjebleaft `en/` en `zh/` yn it boppesteande kommando oan jo taalkoade.