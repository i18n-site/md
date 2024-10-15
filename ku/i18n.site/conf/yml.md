# .i18n/conf.yml

Pelê veavakirinê ji bo `i18n.site` `.i18n/conf.yml` e û naverok jî wiha ye :

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

Di nav wan de, ji `upload` heta `ext:` hêmanên veavakirinê tê vê wateyê ku dê tenê `.md` dema weşandinê werin barkirin.

## Navîgasyon Top nav

`nav:` vebijarkên veavakirinê, ku bi pêşeka navîgasyonê ya li serê rûpelê malê re têkildar in.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Di nav wan de, `i18n: home` bi `home: Home` di `en/i18n.yml` de (ku `en` zimanê çavkaniyê yê wergera projeyê ye) re têkildar e.

Naveroka `en/i18n.yml` ew nivîsa ku di menuya navîgasyonê de tê xuyang kirin e, ku dê li gorî `fromTo` di veavakirinê de were wergerandin, mînakî, were wergerandin `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Piştî ku werger qediya, hûn dikarin nirxa wergerê `yml` biguherînin, lê mifteya wergerê `yml` zêde nekin an jê nekin.

### `use: Toc` , Şablonê Pelê Yekane Bi Xêzkirin

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tê wateya danasîna bi karanîna `Toc` şablonê, ya ku pêşkêşkirina yek şablonek `Markdown` ye.

`TOC` kurteya `Table of Contents` -ê ye. Dema ku ev şablon were pêşkêş kirin, dê xêzkirina vê pelê `Markdown` di milê kêlekê de were xuyang kirin.

`url:` riya pelê ya `Markdown` nîşan dide ( `/` bi pelrêça root `/README.md` re têkildar e, navê vê pelê pêşgirek mezin û paşgirek piçûk hewce dike).

### `use: Md` , Şablonê Pelê Yekane Bê Xêzkirin

Şablonên `Md` û şablonên `Toc` yek in û her du jî ji bo pêşkêşkirina yek pelê `Markdown` têne bikar anîn. Lê şablonê `Md` xêzkirina li kêlekê nîşan nade.

Hûn dikarin `use: Toc` di veavakirina jorîn de biguhezînin `use: Md` , dîsa `i18n.site` di pelrêça `md` de bimeşînin, û dûv re serdana URL-ya pêşdîtina pêşkeftinê bikin da ku guheztinên li ser rûpelê malê temaşe bikin.

### `use: Blog` Şablonên Blog

Şablona blogê li gorî dema weşanê navnîşek gotaran (sernav û kurte) nîşan dide.

[→ Li vir bikirtînin ku hûn li ser veavakirina taybetî fêr bibin](/i18n.site/conf/blog)

### `use: Doc` , Şablonê Belgeya Pir-Pel

Di pelê veavakirinê de:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Ji bo pêşkêşkirina şablonê `Doc` bikar tîne.

`Doc` şablon yekkirina pirjimar `MarkDown` piştgirî dike da ku nexşeyên belgeyê ji bo projeyên yek an pirjimar çêbike.

#### Pir Proje Û Pelên Pirjimar

Veavakirina `.i18n/conf.yml` di `i18n:doc` de moda pêşkêşkirina pir-pelê pir-proje ye.

Li vir, `menu: NB demo1,demo2` , tê vê wateyê ku hûn şablona `NB` bikar bînin da ku menuya dakêşanê pêşkêş bikin.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , ku kurteya `Name Breif` -ê ye, tê vê wateyê ku menuya daketî dikare nav û dirûşma projeyê nîşan bide.

`NB` li pey parametreya `demo1,demo2` tê ku jê re derbas dibe.

`demo1,demo2` : ** `,` **

Ji bo pîvanên jorîn, pelê navnîşa pelrêça têkildar ev e:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projeya Yekane Pelên Pirjimar

Ger projeyek we tenê hebe, hûn dikarin wê wekî jêrîn mîheng bikin.

```
  - i18n: xxx
    use: Doc
```

##### Dema Ku url Vala Ye, Ew Nirxa i18n Vedigire

Heke `url` neyê nivîsandin, `url` ji bo nirxa `i18n` -ê vedigire.

Rêbaza nivîsandina li jor bi `url: xxx` re hevwate ye, û pelê wê yê têkildar `en/xxx/TOC` e.

#### Indeksa Tabloya Naverokê Ya TOC

`i18n.site` dê `js` pêvek `.i18n/hook/after.tran/TOC.js` -ê di depoya demo de bicîh bike da ku pelê pelrêça `TOC` pelrêça ku bi `doc` veavakirina şablonê re têkildar e bixwîne da ku nexşeya pelrêça `json` çêbike.

Ger hûn şablonê `doc` bikar bînin, divê hûn vê pêvekê hebe.

Ger hûn projeya `i18n.site` ji peldankek vala dest pê bikin, ji bîr mekin ku projeya demo `.i18n` li pelrêça xwe kopî bikin.

Şablon `Doc` dê tabloya naverokê li ser bingeha `json` ya hatî çêkirin diyar bike.

##### Ravekirina Naverokê Ya Berfireh

`en/blog/TOC` wiha ye :

```
README.md

news/README.md
  news/begin.md
```

##### Indentation Bikar Bînin Ku Asta Nîşan Bikin

`README.md` di rêza yekem a `en/blog/TOC` ya jorîn de bi `i18n.site` ya wêneya jêrîn re têkildar e, ku navê projeyê ye.

Du rêzikên paşîn wekî ku di dîmendera jêrîn de têne xuyang kirin.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` bi `News` re têkildar e,
`news/begin.md` bi `Our Product is Online !` re têkildar e

`TOC` pel ji bo nîşankirina pêwendiya hiyerarşîk a xêzkirinê, piştgirîkirina dakêşana pir-asta, û şîroveyên rêzê yên ku bi `# ` dest pê dikin têne veqetandin.

##### Asta Dêûbav Tenê Sernavê Dinivîse, Ne Naverokê.

Gava ku gelek astên vekêşanê hene, asta dêûbavê tenê sernavê dinivîse û ne naverokê. Wekî din, tîpografiya wê tevlihev bibe.

##### Projeya README.md

Naverok dikare di xala `README.md` de, wek `en/demo2/README.md` , were nivîsandin.

Bala xwe bidinê ku naveroka vê pelê tabloyek naverokê nîşan nade, ji ber vê yekê tê pêşniyar kirin ku dirêjahî bi sînor bikin û pêşgotinek kurt binivîsin.

###### Slogana Projeyê

Hûn dikarin bibînin ku `Deme Two` `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Ev bi rêza yekem a `en/demo2/README.md` re têkildar e :

```
# Demo Two : Your Project slogan
```

Naveroka piştî kolona yekem `:` ya sernavê asta yekem a projeya `README.md` dê wekî dirûşmeya projeyê were hesibandin.

Bikarhênerên ji Çîn, Japonya û Koreyê, ji kerema xwe bala xwe bidin ku divê hûn li şûna kolona tev-fireh, kolona nîv-fireh `:` bikar bînin.

##### Meriv Çawa TOC-Ê Bi Girseyî Bar Dike?

Pêdivî ye ku `TOC` pel di pelrêça zimanê çavkaniyê de bêne danîn.

Ji bo nimûne, eger zimanê çavkaniyê Çînî ye, wê demê `TOC` li jor `zh/blog/TOC` e.

Ger zimanê çavkaniyê were guheztin, hûn hewce ne ku hûn `TOC` pelên zimanek diyarkirî yên di projeyê de berbi zimanekî din veguhezînin.

Hûn dikarin fermanên jêrîn binihêrin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ji kerema xwe `en/` û `zh/` di fermana jorîn de li koda zimanê xwe biguherînin.

### Barkirina Xwerû Bêyî Rêça Veavakirinê

Ji bo rêyek diyarkirî ku tê gihîştin, heke pêşgira rêyê di `nav:` de neyê mîheng kirin, pelê `MarkDown` ku bi rêyê re têkildar e dê ji hêla xwerû ve were barkirin û bi karanîna şablonê `Md` were pêşkêş kirin.

Mînakî, heke `/test` were gihîştin, û `nav:` bêyî pêşgira vê rêyê were mîheng kirin, û zimanê geroka heyî îngilîzî ye (kod `en` ), dê `/en/test.md` ji hêla xwerû ve were barkirin û bi karanîna şablonê `Md` were pêşkêş kirin.

Heke `/en/test.md` ev pel tune be, dê rûpela `404` ya xwerû were xuyang kirin.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">