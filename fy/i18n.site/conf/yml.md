# .i18n/conf.yml

It konfiguraasjetriem foar `i18n.site` is `.i18n/conf.yml` en de ynhâld is as folget :

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

Under harren betsjut `upload` oant `ext:` konfiguraasje item dat mar `.md` sille wurde uploade by publisearjen.

## Top Navigaasje nav

`nav:` konfiguraasjeopsjes, oerienkommende mei it navigaasjemenu oan 'e boppekant fan' e thússide.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Under harren komt `i18n: home` oerien mei `home: Home` op `en/i18n.yml` (wêr't `en` de boarnetaal fan 'e projektoersetting is).

`en/i18n.yml` ynhâld is de tekst werjûn yn it navigaasjemenu, dy't oerset wurdt neffens `fromTo` yn 'e konfiguraasje, bygelyks oerset nei `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Nei't de oersetting foltôge is, kinne jo de wearde fan oersetting `yml` feroarje, mar de kaai fan oersetting `yml` net tafoegje of wiskje.

### `use: Toc` Dokumint Mei Omtrek

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betsjut rendering mei help fan in `Toc` sjabloan, dat is rendering in inkele `Markdown` sjabloan.

`TOC` is de ôfkoarting fan `Table of Contents` As dit sjabloan werjûn wurdt, sil de omtrek fan dit `Markdown` -bestân yn de sydbalke werjûn wurde.

`url:` stiet foar it bestânspaad fan `Markdown` ( `/` komt oerien mei de rootmap `/README.md` , dizze triemnamme fereasket in haadletter foarheaksel en in efterheaksel foar lytse letters).

### `use: Md` Dokumint Sûnder Omtrek

It sjabloan `Md` en it sjabloan `Toc` binne itselde en beide wurde brûkt om ien `Markdown` -bestân wer te jaan. Mar it sjabloan `Md` toant de omtrek net yn 'e sydbalke.

Jo kinne `use: Toc` yn 'e boppesteande konfiguraasje wizigje nei `use: Md` , `i18n.site` opnij útfiere yn' e `md` map, en besykje dan de ûntwikkelingsfoarbyld URL om de wizigingen op 'e thússide te observearjen.

### `use: Blog` Blog Templates

It blogsjabloan toant in list mei artikels (titels en abstracts) yn folchoarder fan publikaasjetiid.

[→ Klik hjir om te learen oer de spesifike konfiguraasje](/i18n.site/conf/blog)

### `use: Doc` Triem Dokumint Sjabloanen

Yn it konfiguraasjetriem:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Jout oan mei it brûken fan `Doc` foar sjabloan rendering.

`Doc` sjabloan stipet it yntegrearjen fan meardere `MarkDown` foar it generearjen fan dokumintoutline foar ien of meardere projekten.

#### Meardere Projekten en Meardere Bestannen

De konfiguraasje fan `.i18n/conf.yml` yn `i18n:doc` is multi-projekt multi-file rendering modus.

Hjir, `menu: NB demo1,demo2` , betsjut it brûken fan it sjabloan `NB` om it dellûkmenu wer te jaan.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , dat is de ôfkoarting fan `Name Breif` , betsjut dat it útklapmenu de namme en slogan fan it projekt werjaan kin.

`NB` wurdt folge troch de parameter `demo1,demo2` trochjûn oan it.

Opmerking : ** D'r moatte gjin spaasjes ** foar en nei de komma `,` op `demo1,demo2` stean.

De oerienkommende triemtafel yndeks triem foar de boppesteande parameters is:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Projekt Meardere Triemmen

As jo mar ien projekt hawwe, kinne jo it as folgjend konfigurearje.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ien projekt mei meardere bestannen stipet it konfigurearjen fan `url` net as it rootpaad `/`
> As __conf.yml → nav:__ Gjin rootpaad is konfigureare, by tagong ta de thússide fan 'e webside, sil it automatysk oerskreaun wurde nei de earste URL ûnder de `nav:` konfiguraasje.
> Dit ûntwerp is om projektdokuminten, blogs en oare ynhâld better te ûnderskieden fia mappen.
> It is oan te rieden om ien bestân en ien side te brûken as de thússide.

> [!TIP]
> As `url` net skreaun is, stiet `url` standert op de wearde fan `i18n` Dizze regel jildt ek foar oare sjabloanen.

#### TOC Ynhâldsopjefte Yndeks

As sjabloan `use: Doc` is ynskeakele yn de konfiguraasje, asjebleaft ynskeakelje plug-in `i18n.addon/toc` yn `.i18n/conf.yml` De konfiguraasje is as folget :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` sil dizze plug-in automatysk ynstallearje en útfiere, lêze `TOC` it mapyndeksbestân, en generearje `json` de mapoersjoch.

As it in inkeld projekt is mei meardere triemmen, is de rootmap `TOC` de map dy't oerienkomt mei `url:` yn de boarnetaalmap. As de boarnetaal bygelyks Sineesk is: it bestân dat oerienkomt mei `url: flashduty` is `zh/flashduty/TOC` .

As it meardere projekten en meardere bestannen binne, is it net nedich om `url:` te konfigurearjen. De root-map fan `TOC` is de map dy't oerienkomt mei de wearde fan `i18n` .

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

`TOC` bestannen wurde ynspringe om de hiërargyske relaasje fan 'e rigel oan te jaan, stipe foar ynspringing op meardere nivo's, en line-kommentaar begjinnend mei `# ` .

##### It Âldernivo Skriuwt Allinich De Titel, Net De Ynhâld.

As d'r meardere ynspringingsnivo's binne, skriuwt it âldernivo allinich de titel en net de ynhâld. Oars wurdt typografy fergriemd.

##### Projekt README.md

Ynhâld kin skreaun wurde yn item `README.md` , lykas `en/demo2/README.md` .

Tink derom dat de ynhâld fan dit bestân gjin ynhâldsopjefte sjen lit, dus it is oan te rieden om de lingte te beheinen en in koarte ynlieding te skriuwen.

###### Projekt Slogan

Jo kinne sjen dat `Deme Two` syn projektlabel hat ûnder it útklapmenu en katalogus-projektnamme `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Dit komt oerien mei de earste rige fan `en/demo2/README.md` :

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

### Standert Laden Sûnder Konfiguraasjepaad

Foar in bepaald paad dat tagong wurdt, as it paadfoarheaksel net yn `nav:` is ynsteld, sil it `MarkDown` bestân dat oerienkomt mei it paad standert wurde laden en werjûn mei it `Md` sjabloan.

Bygelyks, as `/test` tagong is en `nav:` is ynsteld sûnder it foarheaksel fan dit paad, en de hjoeddeiske blêdzjentaal is Ingelsk (koade `en` ), sil `/en/test.md` standert laden wurde en werjûn mei sjabloan `Md` .

As `/en/test.md` dizze triem net bestiet, sil de standert `404` side werjûn wurde.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">