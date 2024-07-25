# .i18n/nyatakakawo.yml

`i18n.site` `.i18n/conf.yml`

Negbe `ignore:` kple `i18n:` ƒe ɖoɖowo ko [`i18`](/i18) , ɖoɖowɔɖi ƒe faɛl la le ale:

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

Le wo dome la, `ext:` ɖoɖowɔɖi ƒe nu si nye `upload` fia be `.md` koe woatsɔ ade eme ne wole etam.

## Dziƒomɔzɔzɔ nav

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` wo dome `home: Home` , `i18n: home`

Woaɖe egɔme ɖe gbegbɔgblɔ geɖe me, abe `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ne èwu gbegɔmeɖeɖea nu `yml` , àte ŋu atrɔ asi le `yml`

### `use: Toc` , Faɛl Ɖeka Ƒe Nɔnɔmetata (Kple Nɔnɔmetata)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` fia be woazã `Toc` gɔmeɖeɖe, si nye `Markdown` template ɖeka gɔmeɖeɖe.

`TOC` `Table of Contents` `Markdown`

`url:` tsi tre ɖi na faɛl ƒe mɔ si nye `Markdown` ( `/` sɔ kple ke ƒe nuŋlɔɖi `/README.md` , faɛl ŋkɔ sia bia ŋɔŋlɔdzesi gãwo ƒe ŋgɔdonya kple ŋɔŋlɔdzesi suewo ƒe megbenya).

### `use: Md` , Faɛl Ɖeka Ƒe Nɔnɔmetata (Ɖoɖo Aɖeke Meli O)

`Md` Template nye nu ɖeka kple `Toc` , wozãa wo ame evea siaa tsɔ ɖea `Markdown` faɛl ɖeka gɔme. Ke hã `Md` template la meɖea nɔnɔmetata la fiana le axadzinuŋɔŋlɔa me o.

`use: Md` atrɔ `i18n.site` `md` `use: Toc`

### Default Loading Si Me Ɖoɖowɔɖi Ƒe Mɔ Manɔmee

Ne womeɖo mɔ aɖe si dzi wole gegem ɖo ƒe mɔ ƒe ŋgɔdonya ɖe `nav:` woatsɔ `MarkDown` faɛl si sɔ kple mɔa la ade eme le gɔmedzedzea me eye woaɖee afia to `Md` template zazã me.

`/en/test.md` kpɔɖeŋu `Md` , `nav:` `en` `/test`

Ne `/en/test.md` faɛl sia meli o la, woaɖe `404` axa si woɖo ɖi la afia.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Faɛl Geɖe Ƒe Nɔnɔmetata

Le ɖoɖowɔɖi ƒe faɛl la me la:

```
  - i18n: blog
    use: Doc
```

Fia be wozãa `Doc` na template gɔmeɖeɖe.

`Doc` `MarkDown`

#### Dɔ Ɖeka (Fail Geɖewo) .

le etame la, dɔ ɖeka ƒe nɔnɔme si nye `Doc` `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ne url Le Ƒuƒlu La, Ewɔa Dɔ Tso i18n Ƒe Asixɔxɔ Dzi

`url` `i18n` `url`

Nuŋɔŋlɔmɔnu si le etame la sɔ kple `url: blog` eye eƒe faɛl si sɔ kplii nye `en/blog/TOC` .

#### Dɔ Geɖe Wɔwɔ

`.i18n/conf.yml` Ðoɖo si le `i18n:doc` me nye dɔ geɖe ƒe nɔnɔme.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Le afisia la, `menu: NB demo1,demo2` fia be nàzã `NB` atsɔ aɖe nusiwo le tsia dzi la gɔme.

`NB` `Name Breif`

`NB` `demo1,demo2`
De dzesii be mele `demo1,demo2` dometsotso ** aɖeke nanɔ anyi do ŋgɔ na dzesideŋkɔ `,` le : **

Le parameter siwo le etame gome la, directory index file si sɔ kplii enye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ƒe Emenyawo Ƒe Xexlẽdzesifiaƒe

`i18n.site` Awɔ `js` plugin `.i18n/hook/after.tran/TOC.js` le demo warehouse me be wòaxlẽ directory index file `doc` si sɔ kple template configuration `TOC` be wòawɔ `json` directory outline.

Ne èzã `doc`

`.i18n` èdze `i18n.site`

`Doc` `json`

##### Emenyawo Me Ɖeɖe Tsitotsito

Emenyawo le : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Zã Indentation Nàtsɔ Afia Dzidzenuwo

Le etame `en/blog/TOC` `README.md` le fli gbãtɔ me sɔ kple `i18n.site` le nɔnɔmetata si le ete me, si nye dɔa ƒe ŋkɔ.

Fli eve siwo kplɔe ɖo la le abe alesi woɖee fia le screenshot si le ete me ene.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

sɔ kple `News` , `news/README.md`
sɔ kple `Our Product is Online !` `news/begin.md`

`TOC` Wode faɛl la me be wòafia ƒomedodo si le ɖoɖowɔɖia me le ɖoɖo nu eye wòdoa alɔ indentation si le ɖoƒe vovovowo.

##### Dzila Ƒe Ɖoƒea Ŋlɔa Tanya La Ko, Ke Menye Emenyawo O.

Ne indentation ƒe dzidzenu vovovowo li la, dzila ƒe dzidzenu koe ŋlɔa tanya la ke menye emenyawo o. Ne menye nenema o la, agbalẽtata ƒe nɔnɔme atɔtɔ.

##### Dɔwɔwɔ Si Nye README.md 

ƒe dɔa, le kpɔɖeŋu me, àte ŋu aŋlɔ emenyawo ɖe `en/demo2/README.md` `README.md`

De dzesii be faɛl sia me nyawo meɖea emenyawo ƒe ɖoɖowɔɖi aɖeke fiana o, eyata anyo be nàɖo seɖoƒe na didime eye nàŋlɔ ŋgɔdonya kpui aɖe.

###### Dɔa Ƒe Nyagbɔgblɔ

Abe alesi nàte ŋu akpɔe `Your Project slogan` : , `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: sɔ kple fli gbãtɔ `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`:` `README.md`

Zãla siwo tso China, Japan kple Korea, taflatse de dzesii be ele be nàzã eve-si ƒe kekeme le eve teƒe `:`

##### Aleke Woawɔ Aʋu TOC Le Agbɔsɔsɔ Gã Me?

`TOC` Ehiã be woatsɔ faɛl la ade gbe si me woɖee tsoe ƒe nyatakakadzraɖoƒe.

Le kpɔɖeŋu me, ne gbe si wodo tso eme nye Chinagbe `zh/blog/TOC` , ekema `TOC`

Ne wotrɔ gbe si me wotso la, ele be nàtsɔ batch move `TOC` le gbegbɔgblɔ aɖe me le dɔa me ayi gbe bubu me.

Àte ŋu akpɔ sedede siwo gbɔna:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Taflatse trɔ asi le `en/` kple `zh/` le sedede si le etame me ɖe wò gbegbɔgblɔ ƒe kɔpi ŋu.


