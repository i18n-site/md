# .i18n/conf.yml

La agorda dosiero por `i18n.site` estas `.i18n/conf.yml` kaj la enhavo estas jena :

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

Inter ili, `upload` ĝis `ext:` agorda ero signifas, ke nur `.md` estos alŝutitaj dum eldonado.

## Supra Navigado nav

`nav:` agordaj opcioj, respondaj al la navigada menuo ĉe la supro de la ĉefpaĝo.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter ili, `i18n: home` respondas al `home: Home` en `en/i18n.yml` (kie `en` estas la fontlingvo de la projekttraduko).

`en/i18n.yml` enhavo estas la teksto montrata en la navigada menuo, kiu estos tradukita laŭ `fromTo` en la agordo, ekzemple, tradukita al `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Post kiam la traduko estas finita, vi povas modifi la valoron de traduko `yml` , sed ne aldoni aŭ forigi la ŝlosilon de traduko `yml` .

### `use: Toc` , Ununura Dosierŝablono Kun Skizo

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` signifas bildigi uzante `Toc` ŝablonon, kio estas bildigo de ununura `Markdown` ŝablono.

`TOC` estas la mallongigo de `Table of Contents` Kiam ĉi tiu ŝablono estas prezentita, la skizo de ĉi tiu `Markdown` dosiero estos montrata en la flanka kolumno.

`url:` reprezentas la dosiervojon de `Markdown` ( `/` respondas al la radika dosierujo `/README.md` , ĉi tiu dosiernomo postulas majusklan prefikson kaj minusklan sufikson).

### `use: Md` , Ununura Dosierŝablono Sen Skizo

La `Md` ŝablono kaj la `Toc` ŝablono estas la samaj kaj ambaŭ estas uzataj por bildigi ununuran `Markdown` dosieron. Sed la `Md` ŝablono ne montras la skizon en la flanka kolumno.

Vi povas modifi `use: Toc` en la supra agordo al `use: Md` , ruli `i18n.site` en la dosierujo `md` denove, kaj poste viziti la evoluan antaŭrigardan URL por observi la ŝanĝojn sur la hejmpaĝo.

### `use: Blog` Blogaj Ŝablonoj

La blogŝablono montras liston de artikoloj (titoloj kaj resumoj) en ordo de publikigtempo.

[→ Klaku ĉi tie por lerni pri la specifa agordo](/i18n.site/conf/blog)

### `use: Doc` , Multdosiera Dokumentŝablono

En la agorda dosiero:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indikas uzi `Doc` por ŝablona bildigo.

`Doc` ŝablono subtenas integri multoblajn `MarkDown` por generi dokumentajn konturojn por unuopaj aŭ pluraj projektoj.

#### Multoblaj Projektoj Kaj Pluraj Dosieroj

La agordo de `.i18n/conf.yml` en `i18n:doc` estas plurprojekta plurdosiera bildiga reĝimo.

Ĉi tie, `menu: NB demo1,demo2` , signifas uzi la ŝablonon `NB` por bildigi la falmenuon.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , kiu estas la mallongigo de `Name Breif` , signifas ke la falmenuo povas montri la nomon kaj sloganon de la projekto.

`NB` estas sekvata de la parametro `demo1,demo2` pasita al ĝi.

: ** Ne devus esti spacoj ** antaŭ kaj post la komo `,` en `demo1,demo2` .

Por ĉi-supraj parametroj, la responda dosierujo indeksa dosiero estas:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Ununura Projekto Pluraj Dosieroj

Se vi havas nur unu projekton, vi povas agordi ĝin jene.

```
  - i18n: xxx
    use: Doc
```

##### Kiam url Estas Malplena, Ĝi Defaŭlte Al La Valoro De i18n

Se `url` ne estas skribita, `url` defaŭlte al la valoro de `i18n` Ĉi tiu regulo ankaŭ efikas por aliaj ŝablonoj.

La supra skribmetodo estas ekvivalenta al `url: xxx` , kaj ĝia responda dosiero estas `en/xxx/TOC` .

#### TOC-Indekso

`i18n.site` ekzekutos `js` kromprogramon `.i18n/hook/after.tran/TOC.js` en la demo-stokejo por legi la `TOC` -dosierujon indeksdosieron responda al la `doc` -ŝablona agordo por generi la `json` -dosierujon.

Se vi uzas `doc` ŝablonon, vi devas havi ĉi tiun kromprogramon.

Se vi pravigas projekton `i18n.site` el malplena dosierujo, memoru kopii demoprojekton `.i18n` al via dosierujo.

La ŝablono `Doc` prezentos la enhavtabelon surbaze de la generita `json` .

##### Detala Enhavo Klarigo

`en/blog/TOC` enhavo estas jena :

```
README.md

news/README.md
  news/begin.md
```

##### Uzu Indentaĵon Por Indiki Nivelojn

`README.md` en la unua vico de `en/blog/TOC` supre respondas al `i18n.site` en la suba bildo, kiu estas la nomo de la projekto.

La sekvaj du linioj estas kiel montritaj en la ekrankopio malsupre.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` respondas al `News` ,
`news/begin.md` respondas al `Our Product is Online !`

`TOC` dosieroj estas indentitaj por indiki la hierarkian rilaton de la skizo, subtenas plurnivelan indentaĵon kaj linikomentojn komencantajn per `# ` .

##### La Gepatra Nivelo Nur Skribas La Titolon, Ne La Enhavon.

Kiam ekzistas multoblaj niveloj de indentaĵo, la gepatra nivelo nur skribas la titolon kaj ne la enhavon. Alie, tipografio estos fuŝita.

##### Projekto README.md

Enhavo povas esti skribita en ero `README.md` , kiel ekzemple `en/demo2/README.md` .

Notu, ke la enhavo de ĉi tiu dosiero ne montras enhavtabelon, do rekomendas limigi la longon kaj skribi mallongan enkondukon.

###### Projekta Slogano

Vi povas vidi `Your Project slogan` ke `Deme Two` havas sian projekton sub la falmenuo kaj kataloga skizo projektnomo : .

![](https://p.3ti.site/1721276842.avif)

Ĉi tio respondas al la unua vico de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

La enhavo post la unua dupunkto `:` de la unuanivela titolo de projekto `README.md` estos rigardata kiel la projektslogano.

Uzantoj el Ĉinio, Japanio kaj Koreio, bonvolu noti, ke vi devas uzi duonlarĝan dupunkton `:` anstataŭ plenlarĝan dupunkton.

##### Kiel Movi TOC en Amaso?

`TOC` dosieroj devas esti metitaj en la dosierujon de la fontlingvo.

Ekzemple, se la fontlingvo estas ĉina, tiam `TOC` supre estas `zh/blog/TOC` .

Se la fontlingvo estas modifita, vi devas grupe movi la `TOC` dosierojn de certa lingvo en la projekto al alia lingvo.

Vi povas raporti al la sekvaj komandoj:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Bonvolu modifi `en/` kaj `zh/` en la supra komando al via lingvokodo.

### Defaŭlta Ŝarĝo Sen Agorda Vojo

Por certa vojo alirebla, se la padoprefikso ne estas agordita en `nav:` , la `MarkDown` dosiero responda al la vojo estos defaŭlte ŝarĝita kaj prezentita per la ŝablono `Md` .

Ekzemple, se `/test` estas alirita, kaj `nav:` estas agordita sen la prefikso de ĉi tiu vojo, kaj la nuna foliumlingvo estas la angla (kodo `en` ), `/en/test.md` estos ŝarĝita defaŭlte kaj prezentita uzante ŝablonon `Md` .

Se `/en/test.md` ĉi tiu dosiero ne ekzistas, la defaŭlta `404` paĝo estos montrata.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">