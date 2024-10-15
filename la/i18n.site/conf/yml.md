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

## Summo Navigationis nav

`nav:` optiones conformationis, respondens menu navigandi in summitate paginae.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter eos, `i18n: home` correspondet `home: Home` in `en/i18n.yml` (ubi `en` fons est lingua translationis documenti).

`en/i18n.yml` contentum textus exhibetur in tabula navigationis, quae secundum `fromTo` in configuratione, exempli gratia, ad `zh/i18n.yml` transferetur.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Expleto translatione, valorem translationis mutare potes `yml` , sed clavis translationis `yml` noli addere vel delere.

### `use: Toc` , Una File Template Cum Adumbratim

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significat efficere utens `Toc` template, quod est unum `Markdown` template.

`TOC` est abbreviatio `Table of Contents` Cum hoc template redditum est, forma huius `Markdown` fasciculi in parte laterali ostendetur.

`url:` tabella semita of `Markdown` ( `/` respondet radicis indicis `/README.md` , hoc nomen fasciculi praepositionem autocineticam requirit et suffixo lowercase).

### `use: Md` , Una File Template Sine Adumbratione

The `Md` template and the `Toc` template are the same and both are used to make a single `Markdown` file. Sed `Md` template non ostendit figuram in parte laterali.

Potes mutare `use: Toc` in schemate de supra `use: Md` , iterum currere `i18n.site` in `md` directorio, et tunc visitare evolutionem praevisum URL ut mutationes in pagina protoco observes.

### `use: Blog` Blog Templates

Formulae blogorum indices articulorum (titulorum et abstractorum) ostendit in ordine temporis publici.

[→ Hic strepita ut discas de configuratione specifica](/i18n.site/conf/blog)

### `use: Doc` , Multi Documenti Documentum Template

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

Ad parametros supradictos, index indicis correspondens est:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Unius Project Plures Files

Si unum consilium tantum habes, sic configurare potes.

```
  - i18n: xxx
    use: Doc
```

##### Cum Domicilium Vacuum Est, Defaltam Facit Ad Valorem i18n

Si `url` scriptum non est, `url` defalta ad valorem `i18n` Haec regula etiam vim habet in aliis template.

Methodus superior scripto aequipollet `url: xxx` , eiusque fasciculus respondens `en/xxx/TOC` est.

#### TOC Tabula Contentorum Index

`i18n.site` faciet `js` obturaculum-in `.i18n/hook/after.tran/TOC.js` in demo CELLA legere `TOC` directorium indicem fasciculi respondentem `doc` configurationem templates ut `json` directorium adumbrationem generare.

Si uteris `doc` template, hoc obturaculum in debebis habere.

Si initialize proiectum `i18n.site` ex folder inani, memento exscribere demo consilium `.i18n` ad indicem tuum.

The `Doc` template will render the table of contents outline based on the generated `json` .

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

Cum plures gradus incisae sunt, parens gradu titulum tantum scribit et non contentus. Alioquin, erit viator typography.

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

`TOC` lima in indicem fontis linguae opus esse.

Exempli gratia, si fons linguae Sinica est, `TOC` supra est `zh/blog/TOC` .

Si fons linguae modificatur, debes massam movere `TOC` scrinia cuiusdam linguae in project in aliam linguam.

Potes referri ad sequentia mandata;

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Quaeso, `en/` et `zh/` in praefato mandato tuo linguae codicem temperare.

### Default Loading Sine Configuratione Iter

Ad certum iter accessum, si praeverbium iter in `nav:` non configuratur, `MarkDown` fasciculus viae correspondens per defaltam oneratur et redditur utens `Md` template.

Exempli gratia, si `/test` accessum est, et `nav:` sine praepositione huius viae configuratur, et lingua latina vena carpendi est (code `en` ), `/en/test.md` oneratus per defaltam et usu template `Md` reddita.

Si fasciculus iste `/en/test.md` non est, defalta `404` pagina ostendetur.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">