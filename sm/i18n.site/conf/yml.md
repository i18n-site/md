# .i18n/conf.yml

`i18n.site` `.i18n/conf.yml`

Se'i vagana ai `ignore:` ma `i18n:` seti o le [`i18`](/i18)

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

Faatasi ai ma ia mea, `.md` le mea `ext:` configuration o `upload`

## Pito I Luga Navigation

`nav:` filifiliga fetuutuunai, e fetaui ma le lisi o fa'atautaiga i le pito i luga o le itulau autu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Faatasi ai ma i latou `i18n: home` e fetaui ma `en/i18n.yml`中`home: Home` .

`en/i18n.yml` o le a faaliliuina i le tele o gagana, pei ole `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

A mae'a le fa'aliliuga, e mafai ona e suia le tau o `yml` `yml`

### `use: Toc` , Fa'ata'ita'iga Faila E Tasi (Fa'atasi Ai Ma Fa'asologa)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` o lona uiga o le fa'aogaina o `Toc` rendering, o lo'o tu'uina atu se `Markdown` template e tasi.

`TOC` o le fa'apuupuuga `Markdown` le `Table of Contents` .

`url:` o lo'o fa'atusalia ai le ala faila o `Markdown` ( `/` e fetaui ma le fa'atonuga a'a `/README.md` , o lenei igoa faila e mana'omia se fa'auluuluga mataitusi ma se suffix laiti).

### `use: Md` , Faila Faila E Tasi (Leai Se Otootoga)

`Md` E tutusa le mamanu ma `Toc` , e fa'aoga uma e fai ai se `Markdown` faila. Peita'i `Md` e le fa'aalia e le fa'ata'ita'iga le auivi i le itu.

E mafai ona e suia `use: Toc` i le faʻatulagaga o loʻo i luga i le `use: Md` , toe faʻasolo `i18n.site` i le `md` directory, ona asiasi lea i le atinaʻe muamua URL e mataʻituina suiga i le itulau autu.

### Fa'atonu Uta E Aunoa Ma Le Fa'atulagaina O Ala

Afai o le ala muamua o se auala o loʻo faʻaogaina e le o faʻapipiʻiina i totonu `nav:` o le `MarkDown` faila e fetaui ma le ala o le a utaina e ala i le le mafai ona faʻaaogaina ma faʻaaoga `Md` template.

Mo se fa'ata'ita'iga, afai e te asiasi i ai `/test` , ma `nav:` ua fa'atulagaina e aunoa ma lenei ala, ma o le gagana o le itulau o le Igilisi (code `en` ), o le a fa'apipi'i le fa'ata'ita'iga `/en/test.md` ma fa'aaoga `Md` e ala i le fa'aletonu.

`/en/test.md` e le o iai lenei faila, o le a fa'aalia le itulau fa'aletonu `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Fa'ata'ita'iga Tele-Faila

I le faila faatulagaina:

```
  - i18n: blog
    use: Doc
```

Fa'ailoa mai le fa'aogaina o le `Doc`

`Doc` E lagolagoina e le Fa'ata'ita'iga le tu'ufa'atasia o le tele `MarkDown` e fa'atupu ai fa'asologa o pepa mo galuega ta'itasi pe tele.

#### Poloketi Tasi (Tele Faila)

`blog` i luga o le faiga e tasi-poloketi o `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### A Gaogao Le Url, E Faaletonu Ile Tau Ole i18n

Afai e te le tusia `url` , `url` i le tau o le `i18n` .

O le auala tusitusi o loʻo i luga e tutusa ma le iai `url: blog` ma o lona faila tutusa o `en/blog/TOC` .

#### Tele Galuega Faatino

`.i18n/conf.yml` O le fa'atulagaina i `i18n:doc` e tele-poloketi faiga.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Lenei, `menu: NB demo1,demo2` o lona uiga o le fa'aogaina o `NB` e fa'ailoa ai le lisi fa'alalo.

`NB` , o le fa'apu'upu'u o le `Name Breif` , e fa'ailoa mai ai e mafai e le lisi fa'alalo-lalo ona fa'aalia le igoa ma le fa'aupuga o le poloketi.

`NB` o lo'o soso'o ma le fa'ailoga `demo1,demo2` na pasi atu i ai.
`demo1,demo2` : ** `,` **

Mo fa'amaufa'ailoga o lo'o i luga, o le faila fa'asinomaga o le fa'ailoga o le:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Fa'asinomaga O Mea I Totonu

`i18n.site` O le a fa'atino le `js` plugin `.i18n/hook/after.tran/TOC.js` i totonu o le faleteuoloa fa'ata'ita'iga e faitau ai le faila fa'asino igoa `doc` fa'atatau i le fa'asologa o fa'ata'ita'iga `TOC` e fa'atupu ai `json` o le fa'asologa o fa'atonuga.

Afai e te fa'aoga `doc`

Afai e te amataina `.i18n` poloketi `i18n.site`

`Doc` O le fa'ata'ita'iga o le a tu'uina atu le fa'asologa o mea e fa'atatau i le `json` .

##### Fa'amatalaga Auiliili O Mea

`en/blog/TOC` :

```
README.md

news/README.md
  news/begin.md
```

##### Fa'aoga Le Fa'ailoga E Fa'ailoa Ai Tulaga

Luga `en/blog/TOC` `README.md` i le laina muamua e fetaui ma `i18n.site` i le ata o loʻo i lalo, o le igoa o le poloketi.

O isi laina e lua o loʻo faʻaalia i le faʻamalama o loʻo i lalo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` fetaui ma `News` ,
`news/begin.md` fetaui ma `Our Product is Online !`

`TOC` O le faila o loʻo faʻapipiʻiina e faʻaalia ai le faʻasologa o le faʻasologa o le otootoga ma lagolagoina le faʻaogaina o tulaga faʻaopoopo.

##### O Le Tulaga Matua E Na'o Le Ulutala E Tusia, Ae Le O Le Anotusi.

A tele la'asaga o fa'ailoga, e na'o le ulutala matua e tusia ae le o le anotusi. A leai, o le a fa'afefeteina lomitusi.

##### Poloketi README.md 

`README.md` o le poloketi, mo se faʻataʻitaʻiga, e mafai ona e tusia mea i totonu `en/demo2/README.md` .

Manatua o mea o loʻo i totonu o lenei faila e le o faʻaalia se lisi o mea o loʻo i ai, o lea e fautuaina ai e faʻatapulaʻa le umi ma tusi se folasaga puupuu.

###### Fa'aupuga O Le Poloketi

E pei ona e va'ai i ai, `Deme Two` I lalo ifo o le fa'asologa o le lisi ma le fa'asologa o igoa o le galuega, o lo'o i ai lana fa'aupuga o `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

E fetaui : ma le laina muamua `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Poloketi `README.md` O mea i tua atu o le koluma muamua `:` i le ulutala tulaga muamua o le a fa'apea o le fa'aupuga o le poloketi.

Tagata fa'aoga mai Saina, Iapani ma Korea, fa'amolemole maitau e tatau ona e fa'aoga le afa-lautele kolone `:`

##### E Fa'afefea Ona Fa'agaoioi Le TOC I Le Tele?

`TOC` E tatau ona tu'u le faila i le fa'atonuga o le gagana fa'apogai.

Mo se faʻataʻitaʻiga, afai o le gagana faʻaSaina, `TOC` loʻo i luga o `zh/blog/TOC` .

Afai e suia le gagana fa'apogai, e tatau ona e fa'aputu `TOC` i se gagana fa'apitoa i le poloketi i se isi gagana.

E mafai ona e va'ai i tulafono nei:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Fa'amolemole sui `en/` ma `zh/` i le fa'atonuga i luga i lau fa'ailoga gagana.


