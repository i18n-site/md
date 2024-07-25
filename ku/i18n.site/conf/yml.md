# .i18n/conf.yml

Pelê veavakirinê `.i18n/conf.yml` ye `i18n.site`

Ji xeynî mîhengên `ignore:` û `i18n:` yên [`i18`](/i18) pelê veavakirinê wiha ye:

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

Di nav wan de, hêmana `ext:` veavakirinê `upload` tê vê wateyê ku tenê `.md` dê were barkirin.

## Navîgasyon Top nav

Vebijarkên `nav:` , li gorî menuya navîgasyonê ya li serê rûpelê.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Di nav wan de, bi `en/i18n.yml`中`home: Home` re têkildar `i18n: home` .

`en/i18n.yml` li gelek zimanan bên wergerandin, wek `zh/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Piştî ku werger qediya, hûn dikarin di wergerê de `yml` biguherînin, lê mifteya wergerê `yml` zêde nekin û jê nekin.

### `use: Toc` Şablonê Yek Pelê (Bi Xêzkirin)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` karanîna `Toc` , ku yek şablonek `Markdown` pêşkêş dike.

Kurtenivîsa `Table of Contents` `TOC` `Markdown`

Rêya pelê ya `Markdown` nîşan dide ( `/` bi pelrêça root re têkildar e `/README.md` `url:` ev navê pelê pêşgirek mezin û paşgirek piçûk hewce dike).

### `use: Md` Şablonê Pelê Yekane (Bê Xêzkirin)

`Md` `Toc` `Markdown` Lêbelê `Md` şablon di milê kêlekê de nexşerêyê nîşan nade.

Hûn dikarin di veavakirina jorîn de `use: Toc` `use: Md` , dîsa di pelrêça `md` de `i18n.site` û dûv re biçin URL-ya pêşdîtina pêşveçûnê da ku li ser guheztinên li ser rûpelê binêre.

### Barkirina Xwerû Bêyî Rêça Veavakirinê

Ger pêşgira rê ya rêyek diyarkirî ya ku tê gihîştinê di `nav:` pela `MarkDown` ya ku bi rêkê re têkildar e wekî xwerû were barkirin û bi karanîna şablonê `Md` were pêşkêş kirin.

Mînakî, ger hûn biçin `/test` û `nav:` bêyî vê rêyê were mîheng kirin, û zimanê rûpelê îngilîzî ye (kod `en` ), dê şablon were barkirin `/en/test.md` û bi karanîna `Md` were pêşkêş kirin.

`/en/test.md` ev pel tune be, dê rûpela `404` xwerû were xuyang kirin.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Şablonê Pir-Pel

Di pelê veavakirinê de:

```
  - i18n: blog
    use: Doc
```

Ji bo pêşkêşkirina şablonê bi kar tîne `Doc`

`Doc` `MarkDown`

#### Projeya Yekane (Pir Pel)

Di jorîn de moda yek-projeyê ya `Doc` ye `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Dema Ku url Vala Ye, Ew Nirxa i18n Vedigire

Heke hûn nenivîsin `url` ji bo şablonên `i18n` jî tê bandor `url` .

Rêbaza nivîsandinê ya jorîn bi hebûna `url: blog` û pelê wê yê têkildar `en/blog/TOC` e.

#### Gelek Projeyên

Veavakirina `i18n:doc` moda pir-projeyan de ye `.i18n/conf.yml`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

`NB` vir, `menu: NB demo1,demo2`

`NB` `Name Breif`

`NB` `demo1,demo2`
`demo1,demo2` : ** `,` **

Ji bo pîvanên jorîn, pelê navnîşa pelrêça têkildar ev e:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeksa Tabloya Naverokê Ya TOC

Dê `js` pêveka `.i18n/hook/after.tran/TOC.js` di embara demo `i18n.site` bixebite da ku pelê pelrêça pelrêçayê `doc` li gorî mîhengê şablonê `TOC` bixwîne da ku `json` ya pelrêçê çêbike.

Ger hûn `doc` bikar bînin, divê hûn vê pêvekê hebe.

Ger hûn `i18n.site` ji peldankek vala dest pê bikin, ji bîr mekin ku `.i18n` di projeya demo de li pelrêça xwe kopî bikin.

`Doc` dê tabloya naverokê li ser bingeha `json` ya hatî çêkirin nîşan bide.

##### Ravekirina Naverokê Ya Berfireh

Naverok wiha : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Indentation Bikar Bînin Ku Asta Nîşan Bikin

Li `en/blog/TOC` `README.md` di rêza yekem de bi `i18n.site` di wêneya jêrîn de, ku navê projeyê ye re têkildar e.

Du rêzikên paşîn wekî ku di dîmendera jêrîn de têne xuyang kirin.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

bi `News` `news/README.md` têkildar e,
bi `Our Product is Online !` re têkildar e `news/begin.md`

`TOC`

##### Asta Dêûbav Tenê Sernavê Dinivîse, Ne Naverokê.

Gava ku gelek astên vekêşanê hene, asta dêûbavê tenê sernavê dinivîse û ne naverokê. Wekî din, tîpografiya wê tevlihev bibe.

##### Projeya README.md 

Ji bo nimûne, hûn dikarin naverokê bi `en/demo2/README.md` `README.md`

Bala xwe bidinê ku naveroka vê pelê tabloyek naverokê nîşan nade, ji ber vê yekê tê pêşniyar kirin ku dirêjahiyê sînordar bikin û pêşgotinek kurt binivîsin.

###### Slogana Projeyê

Wekî ku hûn dibînin `Deme Two` li jêr menuya daketî û navnîşa katalogê ya projeyê, slogana wê : heye `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: bi rêza yekem re têkildar e `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Bikarhênerên ji Chinaîn, Japonya û Koreyê, ji kerema xwe bala xwe bidin ku divê hûn li şûna kolona tev-fireh bikar bînin `:`

##### Meriv Çawa TOC-Ê Bi Girseyî Bar Dike?

Divê pel di pelrêça zimanê çavkaniyê de were danîn `TOC`

Ji bo nimûne, eger zimanê çavkanî Çînî ye, wê `TOC` li jor `zh/blog/TOC` ye.

Ger zimanê çavkaniyê were guheztin, hûn hewce ne ku `TOC` bi zimanek diyarkirî di projeyê de berbi zimanekî din veguhezînin.

Hûn dikarin fermanên jêrîn binihêrin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ji kerema `zh/` re di fermana jorîn de koda zimanê xwe biguherînin `en/`


