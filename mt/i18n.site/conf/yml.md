# .i18n/conf.yml

Il-profil għal `i18n.site` huwa `.i18n/conf.yml` .

Ħlief għall-issettjar ta ' [`i18`](/i18) , `ignore:` u `i18n:` , il-fajl tal-konfigurazzjoni huwa kif ġej:

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

Fosthom, oġġett ta' konfigurazzjoni `upload` sa `ext:` ifisser li `.md` biss se jittellgħu meta jiġu ppubblikati.

## Top Navigazzjoni nav

`nav:` għażliet ta' konfigurazzjoni, li jikkorrispondu mal-menu tan-navigazzjoni fin-naħa ta' fuq tal-paġna ewlenija.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Fosthom, `i18n: home` jikkorrispondi għal `home: Home` `en/i18n.yml` .

`en/i18n.yml` se jiġi tradott f'diversi lingwi, bħal `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Wara li titlesta t-traduzzjoni, tista' timmodifika l-valur tat-traduzzjoni `yml` , iżda ma żżidx jew tħassarx iċ-ċavetta tat-traduzzjoni `yml` .

### `use: Toc` , Mudell Ta' Fajl Wieħed (Bil-Kontorn)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tfisser tirrendi bl-użu ta 'mudell `Toc` , li qed tirrendi mudell `Markdown` wieħed.

`TOC` hija l-abbrevjazzjoni ta' `Table of Contents` Meta dan il-mudell jiġi ppreżentat, il-kontorn ta 'dan il-fajl `Markdown` se jintwera fil-sidebar.

`url:` jirrappreżenta l-mogħdija tal-fajl ta ' `Markdown` ( `/` tikkorrispondi għad-direttorju tal-għeruq `/README.md` , dan l-isem tal-fajl jeħtieġ prefiss kbir u suffiss żgħir).

### `use: Md` , Mudell Ta' Fajl Wieħed (L-Ebda Kontorn)

Il-mudell `Md` u l-mudell `Toc` huma l-istess u t-tnejn jintużaw biex jirrendu fajl `Markdown` wieħed. Iżda l-mudell `Md` ma jurix il-kontorn fil-sidebar.

Tista 'timmodifika `use: Toc` fil-konfigurazzjoni ta' hawn fuq għal `use: Md` , erġa' ħaddem `i18n.site` fid-direttorju `md` , u mbagħad żur il-URL tal-preview tal-iżvilupp biex tosserva l-bidliet fuq il-homepage.

### Tagħbija Default Mingħajr Mogħdija Tal-Konfigurazzjoni

Jekk tiġi aċċessata ċerta mogħdija u l-prefiss tal-passaġġ tagħha ma jkunx ikkonfigurat `nav:` , il-fajl `MarkDown` li jikkorrispondi mal-mogħdija jitgħabba b'mod awtomatiku u jingħata bl-użu tal-mudell `Md` .

Pereżempju, jekk jiġi aċċessat `/test` , u `nav:` jiġi kkonfigurat mingħajr din il-mogħdija, u l-lingwa tal-paġna hija l-Ingliż (kodiċi `en` ), `/en/test.md` jitgħabba b'mod awtomatiku u jingħata bl-użu tal-mudell `Md` .

Jekk `/en/test.md` dan il-fajl ma jeżistix, tintwera l-paġna `404` default.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mudell Multi-Fajl

Fil-fajl tal-konfigurazzjoni:

```
  - i18n: blog
    use: Doc
```

Jindika l-użu ta `Doc` għall-għoti tal-mudelli.

Il-mudell `Doc` jappoġġja l-integrazzjoni ta 'multipli `MarkDown` biex jiġġenera deskrizzjonijiet ta' dokumenti għal proġetti singoli jew multipli.

#### Proġett Wieħed (Fajls Multipli)

`blog` hawn fuq huwa l-mod ta 'oġġett wieħed ta' `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Meta L-Url Ikun Vojt, Huwa Default Għall-Valur Ta 'i18n

Jekk `url` ma jkunx miktub, `url` default għall-valur ta ' `i18n` Din ir-regola tidħol fis-seħħ ukoll għal mudelli oħra.

Il-metodu ta 'kitba ta' hawn fuq huwa ekwivalenti għal `url: blog` , u l-fajl korrispondenti tiegħu huwa `en/blog/TOC` .

#### Proġetti Multipli

Il-konfigurazzjoni ta ' `i18n:doc` minn `.i18n/conf.yml` hija modalità multi-proġett.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hawnhekk, `menu: NB demo1,demo2` , tfisser li tuża l-mudell `NB` biex tirrendi l-menu drop-down.

`NB` , li hija l-abbrevjazzjoni ta ' `Name Breif` , tfisser li l-menu drop-down jista' juri l-isem u s-slogan tal-proġett.

`NB` huwa segwit mill-parametru `demo1,demo2` mgħoddi lilha.
: ** M'għandux ikun hemm spazji ** qabel u wara l-virgola `,` `demo1,demo2` .

Il-fajl tal-indiċi tad-direttorju korrispondenti għall-parametri ta 'hawn fuq huwa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indiċi Tal-Kontenut Tat-TOC

`i18n.site` se jesegwixxi `js` plug-in `.i18n/hook/after.tran/TOC.js` fil-maħżen demo biex taqra l-fajl tal-indiċi tad-direttorju `doc` li jikkorrispondi għall-konfigurazzjoni tal-mudelli `TOC` biex jiġġenera l-kontorn tad-direttorju `json` .

Jekk tuża `doc` template, irid ikollok dan il-plug-in.

Jekk inizjalizza l-proġett `i18n.site` minn folder vojt, ftakar li tikkopja l-proġett demo `.i18n` fid-direttorju tiegħek.

Il-mudell `Doc` jirrendi l-qosor tal-kontenut ibbażat fuq l- `json` ġġenerat.

##### Spjegazzjoni Dettaljata Tal-Kontenut

`en/blog/TOC` kontenut huwa kif ġej :

```
README.md

news/README.md
  news/begin.md
```

##### Uża Indentazzjoni Biex Tindika L-Livelli

`README.md` fl-ewwel ringiela ta ' `en/blog/TOC` hawn fuq jikkorrispondi għal `i18n.site` fl-istampa hawn taħt, li huwa l-isem tal-proġett.

Iż-żewġ linji li jmiss huma kif muri fil-screenshot hawn taħt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` jikkorrispondi għal `News` ,
`news/begin.md` jikkorrispondi għal `Our Product is Online !`

`TOC` fajls huma indentati biex jindikaw ir-relazzjoni ġerarkika tal-kontorn u jappoġġjaw indentazzjoni f'ħafna livelli.

##### Il-Livell Tal-Ġenitur Jikteb Biss It-Titlu, Mhux Il-Kontenut.

Meta jkun hemm diversi livelli ta 'indentazzjoni, il-livell ġenitur jikteb biss it-titlu u mhux il-kontenut. Inkella, it-tipografija tkun imħassra.

##### Proġett README.md

Il-kontenut jista' jinkiteb f'oġġett `README.md` , bħal `en/demo2/README.md` .

Innota li l-kontenut ta 'dan il-fajl ma jurix sommarju tal-kontenut, għalhekk huwa rakkomandat li jiġi limitat it-tul u tikteb introduzzjoni qasira.

###### Slogan Tal-Proġett

Tista' tara li `Deme Two` għandu t-tagline tal-proġett tiegħu taħt il-menu drop-down u l-isem tal-proġett tal-kontorn tal : katalgu `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Dan jikkorrispondi għall-ewwel ringiela `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Il-kontenut wara l-ewwel kolon `:` tat-titolu tal-ewwel livell tal-proġett `README.md` se jitqies bħala l-islogan tal-proġett.

Utenti miċ-Ċina, il-Ġappun u l-Korea, jekk jogħġbok innota li għandek tuża nofs wisa 'kolon `:` minflok kolon full-wisa'.

##### Kif Timxi TOC Bl-Ingrossa?

`TOC` fajls jeħtieġ li jitqiegħdu fid-direttorju tal-lingwa tas-sors.

Pereżempju, jekk il-lingwa tas-sors hija Ċiniża, allura `TOC` hawn fuq huwa `zh/blog/TOC` .

Jekk il-lingwa tas-sors tiġi modifikata, għandek bżonn tmexxi l-lott tal-fajls `TOC` ta 'ċerta lingwa fil-proġett għal lingwa oħra.

Tista' tirreferi għall-kmandi li ġejjin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Jekk jogħġbok immodifika `en/` u `zh/` fil-kmand ta' hawn fuq għall-kodiċi tal-lingwa tiegħek.