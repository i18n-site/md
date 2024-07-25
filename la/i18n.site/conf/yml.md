# .i18n/conf.yml

`i18n.site` Configuratio fasciculi est `.i18n/conf.yml` .

Exceptis `ignore:` et `i18n:` occasus [`i18`](/i18) fasciculus conformatio talis est:

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

Inter eos, item configurationis `ext:` `upload` quod tantum `.md` erit uploaded in edendo.

## Summo Navigationis nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Inter eos `i18n: home` respondet `en/i18n.yml`中`home: Home` .

`en/i18n.yml` `zh/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Peracta translatione, valorem mutare `yml` in translatione, sed clavis translationis `yml` noli addere vel delere .

### `use: Toc`

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` `Markdown`

`TOC` is the abbreviation of `Table of Contents` `Markdown`

`url:` significat tabella iter `Markdown` ( `/` correspondet radicis directorio `/README.md` , hoc nomen fasciculi praepositionem autocineticam requirit et suffixo minusculae).

### `use: Md`

`Md` Template idem est quod `Toc` , utrumque adhibetur ad unum fasciculum `Markdown` reddere. Autem `Md` semplaris figuram in parte laterali non ostendit.

Mutare potes `use: Toc` in schemate de `use: Md` supra, curre `i18n.site` in directorio iterum `md` et tunc visitare evolutionem praevisum URL ut mutationes in pagina protoco observes.

### Default Loading Sine Configuratione Iter

Si via praepositionis cuiusdam semitae accessed non configuratur `nav:` tabella `MarkDown` quae viae respondet, oneratur per defaltam et in usu `Md` template.

Exempli gratia, si visitas `/test` et sine hac via configuratur `nav:` , et pagina lingua Latina est (code `en` ), template onerari `/en/test.md` et reddi utens `Md` per defaltam.

Si `/en/test.md` Hic fasciculus non est, pagina `404` proponendum est.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-File Template

In configuration file:

```
  - i18n: blog
    use: Doc
```

Indicat usus `Doc`

`Doc` Formulae plures `MarkDown` integrantes adiuvat ad delineationes documenti generandi pro una vel pluribus inceptis.

#### Unius Project (Multa Files)

`blog` `Doc`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Cum Domicilium Vacuum Est, Defaltam Facit Ad Valorem i18n

Si non scribis `url` `url` ad valorem `i18n` .

Methodus superior scripto aequiparatur se habere `url: blog` et fasciculus eius respondentis est `en/blog/TOC` .

#### Multa Incepta

`.i18n/conf.yml` Configuratio in `i18n:doc` multi-projecti modus est.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

`NB` , `menu: NB demo1,demo2`

`NB` , est abbreviatio `Name Breif` , significans quod gutta-down menu potest ostentare nomen et slogan rei.

`NB` `demo1,demo2`
`demo1,demo2` : ** `,` **

Ad parametros supradictos, index indicis correspondens est:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tabula Contentorum Index

`i18n.site` `js` Plugin `.i18n/hook/after.tran/TOC.js` in demo warehouse faciet ut indicem paginae indices `doc` configurationi indici respondeat `TOC` generabit `json` .

Si uteris `doc` template, oportet hoc obturaculum-in habere.

If you initialize `i18n.site` project from an empty folder, memento imitari `.i18n` in demo project ad tuum presul.

`Doc` reddet tabulam contentorum adumbrationem ex genito `json` .

##### Explicatio Contentus Detailed

Contentum sic : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Utere Incisum Ut Indicant Gradus

`README.md` `en/blog/TOC` `i18n.site`

Duae sequentes lineae in screenshot infra monstratae sunt.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News`
`news/begin.md` `Our Product is Online !`

`TOC`

##### Herennius Parens Titulo Tantum Scribit, Non Contentus.

Cum plures gradus incisae sunt, parens gradu titulum tantum scribit et non contentus. Alioquin, erit viator typography.

##### Project README.md 

`README.md` , exempli gratia, potes scribere contentus in `en/demo2/README.md` .

Nota quod contentum huius fasciculi non ostendit tabulam contentorum adumbrationem, ideo commendatur ut longitudinem finiat et brevem introductionem scribat.

###### Project Slogan

: you `Your Project slogan` see, `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: primae lineae respondet `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Users e Sinis, Iaponia et Corea, note placet quod loco dimidiae latitudinis colono uti debetis `:`

##### Quam Mole Movere TOC?

`TOC`

Exempli gratia, si lingua Sinica est, `TOC` superius est `zh/blog/TOC` .

Si fons linguae modificatur, `TOC` movere debes quadam lingua in incepto in aliam linguam.

Potes referri ad sequentia mandata;

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

`zh/` mitigare `en/`


