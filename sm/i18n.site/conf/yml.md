# .i18n/conf.yml

O le faila faatulagaina mo `i18n.site` o le `.i18n/conf.yml` ma o le anotusi o loʻo mulimuli mai :

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

Faatasi ai ma i latou, `upload` i `ext:` mea faʻatulagaina o lona uiga e naʻo `.md` o le a faʻapipiʻiina pe a faʻasalalau.

## Pito I Luga Navigation

`nav:` filifiliga faʻatulagaina, e fetaui ma le lisi o faʻasalalauga i le pito i luga ole itulau autu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Faatasi ai ma i latou, `i18n: home` e fetaui ma `home: Home` i `en/i18n.yml` (lea o `en` o le gagana autu o le faaliliuga o le poloketi).

`en/i18n.yml` anotusi o le tusitusiga o loʻo faʻaalia i le lisi o faʻasalalauga, lea o le a faʻaliliuina e tusa ai ma `fromTo` i le faʻatulagaga, mo se faʻataʻitaʻiga, faaliliuina i `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

A mae'a le fa'aliliuga, e mafai ona e suia le tau o le fa'aliliuga `yml` , ae aua le fa'aopoopo pe tape le ki o le fa'aliliuga `yml` .

### `use: Toc` , Faila Faila E Tasi Ma Le Otootoga

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` o lona uiga o le fa'aliliuina e fa'aaoga ai le `Toc` fa'ata'ita'iga, o lo'o tu'uina atu se ata e tasi `Markdown` .

`TOC` o le fa'apu'upu'u o `Table of Contents` A fa'aalia lenei fa'ata'ita'iga, o le a fa'aalia le auivi o lenei faila `Markdown` i le itu.

`url:` o loʻo faʻatusalia le ala faila o `Markdown` ( `/` e fetaui ma le root directory `/README.md` , o lenei igoa faila e manaʻomia ai se faʻailoga pito i luga ma se suffix laʻititi).

### `use: Md` , Faila Faila E Tasi E Aunoa Ma Se Otootoga

O le `Md` template ma le `Toc` template e tutusa ma o loʻo faʻaogaina uma e tuʻu ai se faila `Markdown` e tasi. Ae o le `Md` template e le o faʻaalia le otootoga i le itu.

E mafai ona e suia `use: Toc` i le faʻatulagaga o loʻo i luga i `use: Md` , toe faʻasolo `i18n.site` i le `md` directory, ona asiasi lea i le atinaʻe faʻaaliga URL e mataʻituina suiga i luga o le itulau autu.

### `use: Blog` Blog Templates

O le blog template e faʻaalia ai se lisi o tala (igoa ma faʻamatalaga) i le faasologa o le taimi faʻasalalau.

[→ Kiliki iinei e aʻoaʻo ai e uiga i le faʻatulagaga patino](/i18n.site/conf/blog)

### `use: Doc` , Faʻataʻitaʻiga Pepa Faila Tele

I le faila faatulagaina:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Fa'ailoa mai le fa'aogaina o `Doc` mo le fa'ata'ita'iga.

`Doc` fa'ata'ita'iga e lagolagoina le tu'ufa'atasia o le tele o `MarkDown` e fa'atupu ai fa'asologa o pepa mo galuega ta'itasi pe tele.

#### Tele Galuega Faatino Ma Tele Faila

O le fa'atulagaina o `.i18n/conf.yml` i `i18n:doc` o le tele-project multi-file rendering mode.

O iinei, `menu: NB demo1,demo2` , o lona uiga o le faʻaaogaina o le `NB` faʻataʻitaʻiga e tuʻuina atu ai le lisi faʻalalo.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , o le faapuupuuga o `Name Breif` , o lona uiga e mafai ona faʻaalia e le lisi faʻalalo le igoa ma le faʻaupuga o le poloketi.

`NB` o lo'o soso'o ma le parakalafa `demo1,demo2` na pasi atu i ai.

Manatua : ** E le tatau ona i ai ni avanoa ** i luma ma pe a uma le koma `,` i `demo1,demo2` .

Mo fa'amaufa'ailoga o lo'o i luga, o le faila fa'asinomaga o le fa'ailoga o le:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Poloketi Tasi Faila E Tele

Afai e na'o le tasi lau poloketi, e mafai ona e fa'atulagaina e pei ona taua i lalo.

```
  - i18n: xxx
    use: Doc
```

##### A Gaogao Le Url, E Fa'aletonu Ile Tau Ole i18n

Afai e le tusia `url` , e le mafai e `url` le tau o `i18n` E aoga foi lenei tulafono mo isi mamanu.

O le auala tusitusi o loʻo i luga e tutusa ma le i ai o `url: xxx` , ma o lona faila tutusa o `en/xxx/TOC` .

#### TOC Fa'asinomaga O Mea I Totonu

`i18n.site` o le a faʻatinoina `js` plug-in `.i18n/hook/after.tran/TOC.js` i totonu o le faleteuoloa demo e faitau ai le `TOC` directory index file e fetaui ma le `doc` template configuration e faʻatupu ai le `json` directory outline.

Afai e te fa'aogaina `doc` fa'ata'ita'iga, e tatau ona i ai lenei fa'apipi'i.

Afai e te amataina le poloketi `i18n.site` mai se faila gaogao, manatua e kopi le demo project `.i18n` i lau lisi.

O le `Doc` fa'ata'ita'iga o le a tu'uina atu le fa'asologa o mea e fa'atatau i le `json` na faia.

##### Fa'amatalaga Auiliili O Mea

`en/blog/TOC` mea o lo'o i lalo :

```
README.md

news/README.md
  news/begin.md
```

##### Fa'aoga Le Fa'ailoga E Fa'ailoa Ai Tulaga

`README.md` i le laina muamua o `en/blog/TOC` i luga e fetaui ma `i18n.site` i le ata o loʻo i lalo, o le igoa o le poloketi.

O isi laina e lua o loʻo faʻaalia i le faʻamalama o loʻo i lalo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` e tutusa ma `News` ,
`news/begin.md` e tutusa ma `Our Product is Online !`

`TOC` faila o loʻo faʻapipiʻiina e faʻaalia ai le vaʻaiga faʻatulagaina o le otootoga, lagolago faʻasologa o tulaga maualuga, ma faʻamatalaga laina e amata i `#` .

##### O Le Tulaga Matua E Na'o Le Ulutala E Tusia, Ae Le O Le Anotusi.

Afai e tele ni vaega o fa'ailoga, e na'o le ulutala matua e tusia ae le o le anotusi. A leai, o le a fa'afefeteina lomitusi.

##### Poloketi README.md

O mea e mafai ona tusia i le mea `README.md` , pei ole `en/demo2/README.md` .

Manatua o mea o loʻo i totonu o lenei faila e le o faʻaalia se lisi o mea o loʻo i ai, o lea e fautuaina ai e faʻatapulaʻa le umi ma tusi se folasaga puupuu.

###### Fa'aupuga O Le Poloketi

E mafai ona e va'aia o le `Deme Two` o lo'o i ai lana fa'ailoga `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

E fetaui lea ma le laina muamua o le `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

O mea i tua atu o le koluma muamua `:` o le ulutala tulaga muamua o le poloketi `README.md` o le a fa'apea o le fa'aupuga o le poloketi.

Tagata fa'aoga mai Saina, Iapani ma Korea, fa'amolemole maitau e tatau ona e fa'aogaina le afa-lautele kolone `:` nai lo le lautele-lautele kolone.

##### E Fa'afefea Ona Fa'agaoioi Le TOC I Le Tele?

`TOC` faila e mana'omia ona tu'u i le lisi o le gagana fa'apogai.

Mo se fa'ata'ita'iga, afai o le gagana fa'aSaina, o le `TOC` i luga o le `zh/blog/TOC` .

Afai e suia le gagana fa'apogai, e tatau ona e fa'aputuina le `TOC` faila o se gagana fa'apitoa i le poloketi i se isi gagana.

E mafai ona e va'ai i tulafono nei:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Fa'amolemole sui `en/` ma `zh/` i le fa'atonuga i luga i lau fa'ailoga gagana.

### Fa'atonu Uta E Aunoa Ma Le Fa'atulagaina O Ala

Mo se auala patino o loʻo faʻaogaina, afai e le faʻapipiʻiina le ala muamua i `nav:` , o le `MarkDown` faila e fetaui ma le ala o le a utaina e ala i le le mafai ona faʻaaogaina ma faʻaaogaina le `Md` template.

Mo se faʻataʻitaʻiga, afai e maua `/test` ma faʻapipiʻi `nav:` e aunoa ma le prefix o lenei ala, ma o le gagana suʻesuʻe o loʻo i ai nei o le Igilisi (code `en` ), `/en/test.md` o le a utaina e ala i le faaletonu ma faʻaaogaina e faʻaaoga ai le mamanu `Md` .

Afai e le o iai `/en/test.md` lenei faila, o le a faʻaalia le itulau faʻaletonu `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">