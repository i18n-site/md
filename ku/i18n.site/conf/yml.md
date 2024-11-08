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

`nav:` vebijarkên veavakirinê, yên ku bi menuya navîgasyonê ya li serê rûpelê malê re têkildar in.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Di nav wan de, `i18n: home` bi `home: Home` di `en/i18n.yml` de (ku `en` zimanê çavkaniyê yê wergera projeyê ye) re têkildar e.

Naveroka `en/i18n.yml` ew nivîsar e ku di pêşeka navîgasyonê de tê xuyang kirin, ku dê li gorî `fromTo` di veavakirinê de were wergerandin, mînakî, were wergerandin `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Piştî ku werger qediya, hûn dikarin nirxa wergerê `yml` biguherînin, lê mifteya wergerê `yml` zêde nekin an jê nekin.

### `use: Toc` Belgeya Yekane Bi Xêzkirin

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tê wateya danasîna bi karanîna `Toc` şablonê, ya ku pêşkêşkirina yek şablonek `Markdown` ye.

`TOC` kurteya `Table of Contents` -ê ye. Dema ku ev şablon were pêşkêş kirin, dê xêzkirina vê pelê `Markdown` di milê kêlekê de were xuyang kirin.

`url:` riya pelê ya `Markdown` nîşan dide ( `/` bi pelrêça root `/README.md` re têkildar e, navê vê pelê pêşgirek mezin û paşgirek piçûk hewce dike).

### `use: Md` Belgeya Yekane Bê Xêzkirin

Şablonên `Md` û şablonên `Toc` yek in û her du jî ji bo pêşkêşkirina yek pelê `Markdown` têne bikar anîn. Lê şablonê `Md` xêzkirina li kêlekê nîşan nade.

Hûn dikarin `use: Toc` di veavakirina jorîn de biguhezînin `use: Md` , dîsa `i18n.site` di pelrêça `md` de bimeşînin, û dûv re serdana URL-ya pêşdîtina pêşkeftinê bikin da ku guheztinên li ser rûpelê malê temaşe bikin.

### `use: Blog` Şablonên Blog

Şablona blogê li gorî dema weşanê navnîşek gotaran (sernav û kurte) nîşan dide.

[→ Li vir bikirtînin ku hûn li ser veavakirina taybetî fêr bibin](/i18n.site/conf/blog)

### 0 Şablonên Pelê Yên `use: Doc`

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

Ji bo pîvanên jorîn pelê navnîşa pelrêça têkildar ev e:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projeya Yekane Pelên Pirjimar

Ger projeyek we tenê hebe, hûn dikarin wê wekî jêrîn mîheng bikin.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Projeya yekane bi gelek pelan veavakirina `url` wekî riya root `/` piştgirî nake
> Ger __conf.yml nav:__ Rêya root neyê mîheng kirin, dema ku meriv xwe bigihîne rûpela sereke ya malperê, ew ê bixweber li URL-ya yekem di bin veavakirina `nav:` de ji nû ve were nivîsandin.
> Ev sêwirandin ew e ku belgeyên projeyê, blog û naverokên din bi navgîniya pelrêçan çêtir cûda bike.
> Tê pêşniyar kirin ku pelek yek û yek rûpelek wekî rûpela malê bikar bînin.

> [!TIP]
> Heke `url` neyê nivîsandin, `url` ji bo nirxa `i18n` -ê vedigire.

#### Indeksa Tabloya Naverokê Ya TOC

Ger şablon `use: Doc` di veavakirinê de çalak be, ji kerema xwe pêveka `i18n.addon/toc` di `.i18n/conf.yml` de çalak bike. Veavakirin wiha ye :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` dê bixweber vê pêvekê saz bike û bixebite, pelê pelrêça pelrêça `TOC` bixwîne û `json` nexşeya pelrêça çêbike.

Heke ew projeyek yekane ye ku bi çend `zh/flashduty/TOC` ve girêdayî ye, pelrêça root `TOC` di pelrêça zimanê çavkaniyê de pelrêça ku `url: flashduty` `url:` re têkildar e.

Heke ew pir proje û pir pelan be, ne hewce ye ku meriv `url:` mîheng bike. Pelrêça root ya `TOC` pelrêça li gorî nirxa `i18n` ye.

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

Dema ku gelek astên vekêşanê hene, asta dêûbav tenê sernavê dinivîse û ne naverokê. Wekî din, tîpografiya wê tevlihev bibe.

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

Mînakî, heke `/test` were gihîştin û `nav:` bêyî pêşgira vê rêyê were mîheng kirin, û zimanê geroka heyî îngilîzî ye (kod `en` ), dê `/en/test.md` ji hêla xwerû ve were barkirin û bi karanîna şablonê `Md` were pêşkêş kirin.

Heke `/en/test.md` ev pel tune be, dê rûpela `404` ya xwerû were xuyang kirin.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">