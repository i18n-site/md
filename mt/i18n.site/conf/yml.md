# .i18n/conf.yml

`i18n.site` Il-fajl tal-konfigurazzjoni huwa `.i18n/conf.yml` .

Ħlief għas `ignore:` u `i18n:` ta [`i18`](/i18) , il-fajl tal-konfigurazzjoni huwa kif ġej:

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

Fosthom, l-oġġett ta' konfigurazzjoni `ext:` ta' `upload` ifisser li `.md` biss se jittella' meta tiġi ppubblikata.

## Top Navigazzjoni nav

`nav:` Għażliet ta' konfigurazzjoni, li jikkorrispondu mal-menu tan-navigazzjoni fil-quċċata tal-paġna ewlenija.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Fosthom `i18n: home` jikkorrispondi għal `en/i18n.yml`中`home: Home` .

`en/i18n.yml` se jiġi tradott f'diversi lingwi, bħal `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Wara li titlesta t-traduzzjoni, tista' timmodifika l-valur ta' `yml` fit-traduzzjoni, iżda ma żżidx jew tħassarx iċ-ċavetta tat-traduzzjoni `yml` .

### `use: Toc` , Mudell Ta' Fajl Wieħed (Bil-Kontorn)

`nav` Konfigurazzjoni :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` li tuża `Toc` rendering, li qed tirrendi `Markdown` template wieħed.

`TOC` hija l-abbrevjazzjoni ta `Markdown` `Table of Contents` .

`url:` l-mogħdija tal-fajl ta' `Markdown` ( `/` jikkorrispondi għad-direttorju tal-għeruq `/README.md` , dan l-isem tal-fajl jeħtieġ prefiss kbir u suffiss).

### `use: Md` Mudell Ta' Fajl Wieħed (L-Ebda Kontorn)

`Md` huwa l-istess bħal `Toc` , it-tnejn jintużaw biex jirrendu `Markdown` fajl wieħed. Madankollu `Md` il-mudell ma jurix il-kontorn fl-istrixxa tal-ġenb.

Tista' timmodifika `use: Toc` fil-konfigurazzjoni ta' hawn fuq għal `use: Md` , run `i18n.site` fid-direttorju `md` mill-ġdid, u mbagħad żur il-URL tal-preview tal-iżvilupp biex tosserva l-bidliet fuq il-homepage.

### Tagħbija Default Mingħajr Mogħdija Tal-Konfigurazzjoni

Jekk il-prefiss tal-mogħdija ta' ċertu mogħdija li tkun qed tiġi aċċessata ma jkunx ikkonfigurat f' `nav:` il-fajl `MarkDown` li jikkorrispondi għall-mogħdija jitgħabba b'mod awtomatiku u jingħata bl-użu ta `Md` template.

Pereżempju, jekk iżżur `/test` , u `nav:` huwa kkonfigurat mingħajr din il-mogħdija, u l-lingwa tal-paġna hija l-Ingliż (kodiċi `en` ), il-mudell jitgħabba `/en/test.md` u jingħata bl-użu `Md` awtomatikament.

Jekk `/en/test.md` dan il-fajl ma jeżistix, tintwera l-paġna `404` default.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mudell Multi-Fajl

Fil-fajl tal-konfigurazzjoni:

```
  - i18n: blog
    use: Doc
```

Jindika l-użu ta' `Doc`

`Doc` -mudell jappoġġa l-integrazzjoni ta `MarkDown` multipli biex jiġġenera deskrizzjonijiet ta' dokumenti għal proġetti singoli jew multipli.

#### Proġett Wieħed (Fajls Multipli)

`blog` f'hawn fuq huwa l-mod ta 'proġett wieħed ta' `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Meta L-Url Ikun Vojt, Huwa Default Għall-Valur Ta 'i18n

Jekk ma tiktebx `url` `url` għall-valur ta' `i18n` Din ir-regola tidħol fis-seħħ ukoll għal mudelli oħra.

Il-metodu ta 'kitba ta' hawn fuq huwa ekwivalenti għal li jkollok `url: blog` u l-fajl korrispondenti tiegħu huwa `en/blog/TOC` .

#### Proġetti Multipli

`.i18n/conf.yml` Il-konfigurazzjoni f' `i18n:doc` hija modalità multi-proġett.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hawnhekk, `menu: NB demo1,demo2` tfisser li tuża `NB` biex tirrendi l-menu drop-down.

`NB` , hija l-abbrevjazzjoni ta' `Name Breif` , li tindika li l-menu drop-down jista 'juri l-isem u l-islogan tal-proġett.

`NB` huwa segwit mill-parametru `demo1,demo2` mgħoddi lilha.
`demo1,demo2` li m'għandux ikun hemm spazji ** qabel u wara l-virgola `,` in : **

Għall-parametri ta 'hawn fuq, il-fajl tal-indiċi tad-direttorju korrispondenti huwa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tabella Tal-Kontenut TOC

Se tesegwixxi l- `js` plugin `.i18n/hook/after.tran/TOC.js` fil-maħżen `i18n.site` -demo biex taqra l-fajl tal-indiċi tad-direttorju `doc` li jikkorrispondi għall-konfigurazzjoni tal-mudell `TOC` biex jiġġenera `json` tal-kontorn tad-direttorju.

Jekk tuża l `doc` mudell, irid ikollok dan il-plug-in.

Jekk inizjalizza l-proġett `i18n.site` minn folder vojt, ftakar li tikkopja `.i18n` fil-proġett demo fid-direttorju tiegħek.

Il `Doc` mudell se jirrendi l-kontorn tal-kontenut ibbażat fuq il- `json` ġenerat.

##### Spjegazzjoni Dettaljata Tal-Kontenut

`en/blog/TOC` Il-kontenut huwa kif ġej :

```
README.md

news/README.md
  news/begin.md
```

##### Uża Indentazzjoni Biex Tindika L-Livelli

Fuq `en/blog/TOC` `README.md` fl-ewwel linja jikkorrispondi għall- `i18n.site` fl-istampa hawn taħt, li huwa l-isem tal-proġett.

Iż-żewġ linji li jmiss huma kif muri fil-screenshot hawn taħt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` jikkorrispondi għal `News` ,
`news/begin.md` għal `Our Product is Online !`

`TOC` Il-fajl huwa indentjat biex jindika r-relazzjoni ġerarkika tal-kontorn u jappoġġja indentazzjoni f'diversi livelli.

##### Il-Livell Tal-Ġenitur Jikteb Biss It-Titlu, Mhux Il-Kontenut.

Meta jkun hemm diversi livelli ta 'indentazzjoni, il-livell ġenitur jikteb biss it-titlu u mhux il-kontenut. Inkella, it-tipografija tkun imħawwda.

##### Proġett README.md 

`README.md` tal-proġett, pereżempju, tista' tikteb kontenut f' `en/demo2/README.md` .

Innota li l-kontenut ta 'dan il-fajl ma jurix sommarju tal-kontenut, għalhekk huwa rakkomandat li jiġi limitat it-tul u tikteb introduzzjoni qasira.

###### Slogan Tal-Proġett

`Your Project slogan` tistgħu taraw : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: jikkorrispondi għall-ewwel linja `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proġett `README.md` Il-kontenut wara l-ewwel kolon `:` fit-titlu tal-ewwel livell se jitqies bħala l-islogan tal-proġett.

Utenti miċ-Ċina, il-Ġappun u l-Korea, jekk jogħġbok innota li trid tuża kolon nofs wisa 'minflok kolon wisa' sħiħ `:`

##### Kif Timxi TOC Bl-Ingrossa?

`TOC` Il-fajl jeħtieġ li jitqiegħed fid-direttorju tal-lingwa tas-sors.

Pereżempju, jekk il-lingwa tas-sors hija ċ-Ċiniż, `TOC` hawn fuq hija `zh/blog/TOC` .

Jekk il-lingwa tas-sors tiġi modifikata, għandek bżonn timxi lottijiet `TOC` f'ċerta lingwa fil-proġett għal lingwa oħra.

Tista' tirreferi għall-kmandi li ġejjin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Jekk jogħġbok immodifika `en/` u `zh/` fil-kmand ta' hawn fuq għall-kodiċi tal-lingwa tiegħek.


