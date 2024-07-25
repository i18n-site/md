# .i18n/conf.yml

`i18n.site` La agorda dosiero estas `.i18n/conf.yml` .

Krom `ignore:` kaj `i18n:` agordoj de [`i18`](/i18) la agorda dosiero estas jena:

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

Inter ili, la `ext:` agorda `.md` de `upload`

## Supra Navigado nav

`nav:` agordaj opcioj, respondaj al la navigada menuo ĉe la supro de la ĉefpaĝo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter ili, `i18n: home` respondas al `en/i18n.yml`中`home: Home` .

`en/i18n.yml` estos tradukita en plurajn lingvojn, kiel `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Post kiam la traduko estas kompletigita, vi povas modifi la valoron de `yml` en la traduko, sed ne aldoni aŭ forigi la ŝlosilon de traduko `yml` .

### `use: Toc` Unudosiera Ŝablono (Kun Skizo)

`nav` Agordante :

```
  - i18n: home
    use: Toc
    url: /
```

signifas uzi `Toc` bildigo, kio estas bildigo de ununura `Markdown` ŝablono `use: Toc`

`TOC` estas la mallongigo de `Table of Contents` . Kiam ĉi tiu ŝablono estas prezentita, la konturo de ĉi tiu `Markdown` dosiero estos montrata en la flanka kolumno.

`url:` la dosiervojon de `Markdown` ( `/` respondas al la radika dosierujo `/README.md` , ĉi tiu dosiernomo postulas majusklan prefikson kaj minusklan sufikson).

### `use: Md` Unudosiera Ŝablono (Neniu Skizo)

`Md` estas sama kiel `Toc` , ambaŭ estas uzataj por bildigi ununuran `Markdown` dosieron. Tamen `Md` la ŝablono ne montras la skizon en la flanka kolumno.

Vi povas `use: Toc` en ĉi-supra agordo al `use: Md` , ruli `i18n.site` en la `md` dosierujon denove, kaj poste viziti la evoluan antaŭrigardan URL por observi la ŝanĝojn sur la hejmpaĝo.

### Defaŭlta Ŝarĝo Sen Agorda Vojo

Se la vojprefikso de certa vojo alirebla ne estas agordita en `nav:` la `MarkDown` dosiero responda al la vojo estos ŝarĝita defaŭlte kaj bildigita per `Md` ŝablono.

Ekzemple, se vi vizitas `/test` kaj `nav:` estas agordita sen ĉi tiu vojo, kaj la paĝlingvo estas la angla (kodo `en` ), la ŝablono estos ŝarĝita `/en/test.md` kaj bildigita uzante `Md` defaŭlte.

Se `/en/test.md` tiu dosiero ne ekzistas, la defaŭlta `404` paĝo estos montrata.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multdosiera Ŝablono

En la agorda dosiero:

```
  - i18n: blog
    use: Doc
```

Indikas uzi `Doc` por ŝablona bildigo.

`Doc` subtenas integri plurajn `MarkDown` por generi dokumentajn konturojn por unuopaj aŭ pluraj projektoj.

#### Ununura Projekto (Multaj Dosieroj)

`blog` en la supre estas la unu-projekta reĝimo de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kiam url Estas Malplena, Ĝi Defaŭlte Al La Valoro De i18n

Se vi ne skribas `url` `url` al la valoro de `i18n` Ĉi tiu regulo efektiviĝas ankaŭ por aliaj ŝablonoj.

La supra skribmetodo estas ekvivalenta al havi `url: blog` kaj ĝia responda dosiero estas `en/blog/TOC` .

#### Multoblaj Projektoj

`.i18n/conf.yml` La agordo en `i18n:doc` estas plurprojekta reĝimo.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Ĉi tie `menu: NB demo1,demo2` signifas uzi `NB` por bildigi la falmenuon.

`NB` , estas la mallongigo de `Name Breif` , indikante ke la falmenuo povas montri la nomon kaj sloganon de la projekto.

`NB` estas sekvata de la parametro `demo1,demo2` pasigita al ĝi.
: ** Ne devus esti spacoj ** antaŭ kaj post la komo `,` en `demo1,demo2`

Por ĉi-supraj parametroj, la responda dosierujo indeksa dosiero estas:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC-Indekso

Ekzekutos la `js` kromaĵo `.i18n/hook/after.tran/TOC.js` en la demo `i18n.site` stokejo por legi la dosierujan indeksan dosieron `doc` responda al la ŝablono agordo `TOC` por generi `json` de la dosierujo.

Se vi uzas `doc` ŝablonon, vi devas havi ĉi tiun kromprogramon.

Se vi inicialigas la `i18n.site` de malplena dosierujo, memoru kopii `.i18n` en la demo-projekto al via dosierujo.

La ŝablono bildigos la enhavtabelon surbaze de la generita `json` `Doc`

##### Detala Enhavo Klarigo

`en/blog/TOC` La enhavo estas jena :

```
README.md

news/README.md
  news/begin.md
```

##### Uzu Indentaĵon Por Indiki Nivelojn

Supre `en/blog/TOC` `README.md` en la unua linio respondas al `i18n.site` en la suba bildo, kiu estas la nomo de la projekto.

La sekvaj du linioj estas kiel montritaj en la ekrankopio malsupre.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` respondas al `News` ,
`news/begin.md` respondas al `Our Product is Online !`

`TOC` La dosiero estas indentigita por indiki la hierarkian rilaton de la skizo kaj subtenas plurnivelan indentadon.

##### La Gepatra Nivelo Nur Skribas La Titolon, Ne La Enhavon.

Kiam ekzistas multoblaj niveloj de indentaĵo, la gepatra nivelo nur skribas la titolon kaj ne la enhavon. Alie, tipografio estos fuŝita.

##### Projekto README.md 

`README.md` de la projekto, ekzemple, vi povas skribi enhavon en `en/demo2/README.md` .

Notu, ke la enhavo de ĉi tiu dosiero ne montras enhavtabelon, do rekomendas limigi la longon kaj skribi mallongan enkondukon.

###### Projekta Slogano

Kiel vi povas vidi `Deme Two` Sub la falmenuo kaj kataloga skiza nomo de projekto, estas `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: respondas al la unua linio `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekto `README.md` La enhavo post la unua dupunkto `:` en la unuanivela titolo estos rigardata kiel la projektslogano.

Uzantoj el Ĉinio, Japanio kaj Koreio, bonvolu noti, ke vi devas uzi duonlarĝan dupunkton anstataŭ plenlarĝan dupunkton `:`

##### Kiel Movi TOC en Amaso?

`TOC` La dosiero devas esti metita en la dosierujon de la fontlingvo.

Ekzemple, se la fontlingvo estas ĉina, `TOC` supre estas `zh/blog/TOC` .

Se la fontlingvo estas modifita, vi devas grupigi movi `TOC` en certa lingvo en la projekto al alia lingvo.

Vi povas raporti al la sekvaj komandoj:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bonvolu modifi `en/` kaj `zh/` en la supra komando al via lingvokodo.


