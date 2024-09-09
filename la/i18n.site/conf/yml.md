# .i18n/conf.yml

Profile for `i18n.site` is `.i18n/conf.yml` .

Exceptis lectis [`i18`](/i18) , `ignore:` et `i18n:` , fasciculi conformatio talis est:

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

Inter eos, `upload` ad `ext:` figurationem item significat quod tantum `.md` uploaded in edendo erit.

## Navigation Top

`nav:` optiones conformationis, respondens menu navigandi in summitate paginae.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter eas `i18n: home` respondet `home: Home` in `en/i18n.yml` .

`en/i18n.yml` transferetur in plures linguas, ut `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Expleto translatione, valorem translationis mutare potes `yml` , sed clavis translationis `yml` noli addere vel delere.

### `use: Toc` , Una File Template (Cum Adumbratim)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significat efficere utens `Toc` template, quod est unum `Markdown` template.

`TOC` est abbreviatio `Table of Contents` Cum hoc template redditum est, forma huius `Markdown` fasciculi in parte laterali ostendetur.

`url:` tabella semita of `Markdown` ( `/` respondet radicis indicis `/README.md` , hoc nomen fasciculi praepositionem autocineticam requirit et suffixo lowercase).

### `use: Md` , Una File Templates (Non Adumbratim)

The `Md` template and the `Toc` template are the same and both are used to make a single `Markdown` file. Sed `Md` template non ostendit figuram in parte laterali.

Potes mutare `use: Toc` in schemate de supra `use: Md` , iterum currere `i18n.site` in `md` directorio, et tunc visitare evolutionem praevisum URL ut mutationes in pagina protoco observes.

### Default Loading Sine Configuratione Iter

Si via quaedam accessitur eiusque praepositionem in `nav:` non configuratur, `MarkDown` fasciculus semitae respondet oneratus per defaltam et in `Md` template.

Exempli gratia, si `/test` accessum est, et `nav:` sine hac vi configuratur, et pagina lingua Latina est (code `en` ), `/en/test.md` oneratus per defaltam et usu templates `Md` redditur.

Si fasciculus iste `/en/test.md` non est, defalta `404` pagina ostendetur.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Template

In configuration file:

```
  - i18n: blog
    use: Doc
```

Template utens `Doc` indicat rationem reddere.

`Doc` template subsidium multiple `MarkDown` ad generare delineationes documenti pro singulis vel pluribus inceptis.

#### Unius Project (Multa Files)

`blog` above is the single-item modus of `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cum Domicilium Vacuum Est, Defaltam Facit Ad Valorem i18n

Si `url` scriptum non est, `url` defaltam ad valorem `i18n` Haec regula etiam vim obtinet in aliis template.

Methodus superior scripto aequipollet `url: blog` , eiusque fasciculus respondens `en/blog/TOC` est.

#### Multa Incepta

Configuratio `i18n:doc` ex `.i18n/conf.yml` multi-projecti est modus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Here, `menu: NB demo1,demo2` , means using the `NB` template to render the drop-down menu.

`NB` , quae est abbreviatio `Name Breif` , significat gutta-down tabulae nomen et slogan rei ostendere posse.

`NB` , sequitur modulo `demo1,demo2` latam esse.
`demo1,demo2` : ** `,` **

Ad parametros supradictos, index indicis correspondens est:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabula Contentorum Index

`i18n.site` faciet `js` obturaculum-in `.i18n/hook/after.tran/TOC.js` in demo CELLA legere `doc` directorium indicem fasciculi respondentem `TOC` configurationem templates ut `json` directorium adumbrationem generare.

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

`TOC` lima indentatum ad designandum ordinem hierarchicum delineatum, fulcimentum multi-level incisum, et lineae commentationes incipientes ab `#` .

##### Herennius Parens Titulo Tantum Scribit, Non Contentus.

Cum plures gradus incisationis sunt, parens gradu titulum tantum scribit et non contentum. Alioquin, erit viator typography.

##### Project README.md

Contenta in item `README.md` scribi possunt, ut `en/demo2/README.md` .

Nota quod contentum huius fasciculi non ostendit tabulam contentorum adumbrationem, ideo commendatur ut longitudinem finiat et brevem introductionem scribat.

###### Project Slogan

You can see that `Deme Two` has its `Your Project slogan` tagline below the drop-down menu and catalogue outline project name :

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