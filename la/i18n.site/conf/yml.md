# .i18n/conf.yml

Configuratio fasciculi pro `i18n.site` est `.i18n/conf.yml` et contentum sic est :

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

Inter eos, `upload` ad `ext:` figurationem item significat quod tantum `.md` uploaded in edendo erit.

## Navigation Top

`nav:` optiones conformationis, respondens tabulae navigationis in summitate protocollum.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter eos, `i18n: home` correspondet `home: Home` in `en/i18n.yml` (ubi `en` fons est lingua translationis documenti).

`en/i18n.yml` contentus est textus in menu navigandi monstratus, qui secundum `fromTo` in configuratione transferetur, exempli gratia, ad `zh/i18n.yml` translatum.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Expleto translatione, valorem translationis mutare potes `yml` , sed clavis translationis `yml` noli addere vel delere.

### `use: Toc` Documentum Template Cum Forma

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significat efficere utens `Toc` template, quod est unum `Markdown` template.

`TOC` est abbreviatio `Table of Contents` Cum hoc template redditum est, forma huius `Markdown` fasciculi in parte laterali ostendetur.

`url:` tabella semita of `Markdown` ( `/` respondet radicis indicis `/README.md` , hoc nomen fasciculi praepositionem autocineticam requirit et suffixo lowercase).

### `use: Md` Documentum Template Sine Forma

The `Md` template and the `Toc` template are the same and both are used to make a single `Markdown` file. Sed `Md` template non ostendit figuram in parte laterali.

Potes mutare `use: Toc` in schemate de supra `use: Md` , iterum currere `i18n.site` in `md` directorio, et tunc visitare evolutionem praevisum URL ut mutationes protocollum observes.

### `use: Blog` Blog Templates

Formulae blogorum indices articulorum (titulorum et abstractorum) ostendit in ordine temporis publici.

[→ Hic strepita ut discas de configuratione specifica](/i18n.site/conf/blog)

### `use: Doc` Documentum File Templates

In configuration file:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Template utens `Doc` indicat rationem reddere.

`Doc` template subsidium multiple `MarkDown` ad generare delineationes documenti pro singulis vel pluribus inceptis.

#### Multiplex Incepta Et Multiplex Files

Configuratio `.i18n/conf.yml` in `i18n:doc` est multi-projecti multi- plicis reddendi modus.

Here, `menu: NB demo1,demo2` , means using the `NB` template to render the drop-down menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , quae est abbreviatio `Name Breif` , significat gutta-down tabulae nomen et slogan rei ostendere posse.

`NB` sequitur modulo `demo1,demo2` latam esse.

`demo1,demo2` : ** `,` **

Inscriptio indicis correspondens indicis ad parametri superiores est:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Unius Project Plures Files

Si unum consilium tantum habes, sic configurare potes.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Unum consilium cum pluribus lima non sustinet Vestibulum `url` ut radix semita `/`
> Si __conf.yml → nav:__ Nulla radix radicis configuratur, cum accedere ad paginam interretialem, sponte ad primum URL sub `nav:` configuratione rescriptum erit.
> Hoc consilium est melius distinguere documenta project, diaria et alia contenta per directoria.
> Commendatur ut unum fasciculum et una pagina pro prima pagina.

> [!TIP]
> Si `url` scriptum non est, `url` defalta ad valorem `i18n` Haec regula etiam vim habet in aliis template.

#### TOC Tabula Contentorum Index

Si template `use: Doc` fit in configuratione, da obturaculum in `i18n.addon/toc` in `.i18n/conf.yml` Configuratio hoc modo est :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automatice instituet et hoc obturaculum-instruet, `TOC` indicem indicem lima lege et `json` indicem indicem generabis.

Si unum consilium cum multiplicibus fasciculis est, `zh/flashduty/TOC` directorium `TOC` est directorium respondens `url:` in `url: flashduty` linguae fonte.

Si incepta multiplex et multiplex imaginum sit, nihil configurare oportet `url:` Directorium radicis `TOC` est directorium valori `i18n` respondens.

##### Explicatio Contentus Detailed

`en/blog/TOC` content is as follows :

```
README.md

news/README.md
  news/begin.md
```

##### Utere Incisum Ut Indicant Gradus

`README.md` in primo versu `en/blog/TOC` supra respondet `i18n.site` in tabula infra, quod est nomen exertus.

Duae sequentes lineae in screenshot infra monstratae sunt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` correspondet `News` ,
`news/begin.md` respondet `Our Product is Online !`

`TOC` lima indentatum ad designandum ordinem hierarchicum delineatum, fulcimentum multi-level incisum, et lineae commentationes incipientes ab `# ` .

##### Herennius Parens Titulo Tantum Scribit, Non Contentus.

Cum plures gradus incisationis sunt, parens gradu titulum tantum scribit et non contentum. Alioquin, erit viator typography.

##### Project README.md

Contenta in item `README.md` scribi possunt, ut `en/demo2/README.md` .

Nota quod contentum huius fasciculi non ostendit tabulam contentorum adumbrationem, ideo commendatur ut longitudinem finiat et brevem introductionem scribat.

###### Project Slogan

You can see `Your Project slogan` `Deme Two` has its project tagline below the drop-down menu and catalogue outline project name :

![](https://p.3ti.site/1721276842.avif)

Hoc primo versu `en/demo2/README.md` respondet :

```
# Demo Two : Your Project slogan
```

Contentum post primam coloniam `:` primi gradus tituli `README.md` project slogan projectus erit.

Usores e Sinis, Iaponia et Corea, note placet quod loco mediae latitudinis `:` colon plenissimae latitudinis uti debetis.

##### Quam Mole Movere TOC?

`TOC` lima in indice fontis linguae opus esse.

Exempli gratia, si fons linguae Sinica est, `TOC` supra est `zh/blog/TOC` .

Si fons linguae modificatur, debes massam movere `TOC` scrinia cuiusdam linguae in project in aliam linguam.

Potes referri ad sequentia mandata;

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Quaeso, `en/` et `zh/` in praefato mandato tuo linguae codicem temperare.

### Default Loading Sine Configuratione Iter

Ad certum iter accessum, si praepositionem in `nav:` iter non configuratur, `MarkDown` fasciculus qui semitae respondet oneratur per defaltam et reddita utens `Md` template.

Exempli gratia, si `/test` accessed et `nav:` sine praepositione huius viae configuratur, et lingua latina vena carpendi est (code `en` ), `/en/test.md` onerari per defaltam et usu templates `Md` reddi.

Si fasciculus iste `/en/test.md` non est, pagina `404` default proponendum est.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">