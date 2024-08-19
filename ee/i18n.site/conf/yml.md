# .i18n/conf.yml

`i18n.site` ƒe nɔnɔmetata nye `.i18n/conf.yml` .

Negbe [`i18`](/i18) , `ignore:` kple `i18n:` ƒe ɖoɖowo ko la, ɖoɖowɔɖi ƒe faɛl la le ale:

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

Le wo dome la, ɖoɖowɔɖi ƒe nu `upload` va ɖo `ext:` fia be `.md` koe woada ɖe Internet dzi ne wole etam.

## Dziƒomɔzɔzɔ nav

`nav:` ɖoɖowɔɖi ƒe tiatia, si sɔ kple mɔfianu si le aƒeme ƒe axaa tame.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Le wo dome la, `i18n: home` sɔ kple `home: Home` le `en/i18n.yml` me.

woaɖe `en/i18n.yml` gɔme ɖe gbegbɔgblɔ geɖe me, abe `zh/i18n.yml` ene.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ne èwu gbegɔmeɖeɖea nu vɔ la, àte ŋu atrɔ asi le gbegɔmeɖeɖe `yml` ƒe asixɔxɔ ŋu, gake mègatsɔ gbegɔmeɖeɖe `yml` ƒe safui akpe ɖe eŋu alo atutui o.

### `use: Toc` , Faɛl Ɖeka Ƒe Nɔnɔmetata (Kple Nɔnɔmetata) .

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` fia be woaɖe egɔme to `Toc` nɔnɔmetata zazã me, si nye `Markdown` ƒe nɔnɔmetata ɖeka gɔmeɖeɖe.

`TOC` nye `Table of Contents` ƒe kpukpui.Ne woɖe nɔnɔmetata sia gɔme la, woaɖe faɛl `Markdown` sia ƒe nɔnɔmetata afia le axadzinuŋɔŋlɔa me.

`url:` tsi tre ɖi na faɛl ƒe mɔ si nye `Markdown` ( `/` sɔ kple ke ƒe nuŋlɔɖi `/README.md` , faɛl ŋkɔ sia bia ŋɔŋlɔdzesi gãwo ƒe ŋgɔdonya kple ŋɔŋlɔdzesi suewo ƒe megbenya).

### `use: Md` , Faɛl Ɖeka Ƒe Nɔnɔmetata (Ɖoɖo Aɖeke Meli O) .

`Md` ƒe nɔnɔmetata kple `Toc` ƒe nɔnɔmetata la sɔ eye wozãa wo ame evea siaa tsɔ ɖea `Markdown` faɛl ɖeka gɔme. Gake `Md` nɔnɔmetata la meɖea nɔnɔmetata si le axadzinuŋɔŋlɔa me fiana o.

Àteŋu atrɔ asi le `use: Toc` le ɖoɖowɔɖi si le etame me wòazu `use: Md` , awɔ `i18n.site` le `md` ƒe nuŋlɔɖiwo me ake, eye emegbe nàyi ŋgɔyiyi ƒe ŋgɔdonya ƒe URL dzi be nàlé ŋku ɖe tɔtrɔ siwo le gɔmedzedzea me ŋu.

### Default Loading Si Me Ɖoɖowɔɖi Ƒe Mɔ Manɔmee

Ne woge ɖe mɔ aɖe koŋ me eye womeɖo eƒe mɔ ƒe ŋgɔdonya ɖe `nav:` me o la, woatsɔ faɛl `MarkDown` si sɔ kple mɔa la ade eme le gɔmedzedzea me eye woaɖee afia to `Md` ƒe nɔnɔmetata zazã me.

Le kpɔɖeŋu me, ne woge ɖe `/test` me, eye woɖo `nav:` mɔ sia manɔmee, eye axaa ƒe gbegbɔgblɔ nye Eŋlisigbe (kɔda `en` ), woatsɔ `/en/test.md` ade eme le gɔmedzedzea me eye woaɖee afia to nɔnɔmetata `Md` zazã me.

Ne `/en/test.md` faɛl sia meli o la, woaɖe axa `404` si woɖo ɖi la afia.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Faɛl Geɖe Ƒe Nɔnɔmetata

Le ɖoɖowɔɖi ƒe faɛl la me la:

```
  - i18n: blog
    use: Doc
```

Fia be wozãa `Doc` hena nɔnɔmetata ƒe gɔmeɖeɖe.

`Doc` template doa alɔ `MarkDown` geɖe ƒoƒo ƒu ɖekae be woawɔ nuŋlɔɖi ƒe nɔnɔmetatawo na dɔ ɖeka alo geɖe.

#### Dɔ Ɖeka (Fail Geɖewo) .

`blog` le etame la nye nu ɖeka ƒe nɔnɔme si nye `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ne url Le Ƒuƒlu La, Ewɔa Dɔ Tso i18n Ƒe Asixɔxɔ Dzi

Ne womeŋlɔ `url` o la, `url` aɖo asixɔxɔ si nye `i18n` Se sia dzea dɔwɔwɔ gɔme na nɔnɔmetata bubuwo hã.

Nuŋɔŋlɔmɔnu si le etame la sɔ kple `url: blog` , eye eƒe faɛl si sɔ kplii nye `en/blog/TOC` .

#### Dɔ Geɖe Wɔwɔ

`i18n:doc` le `.i18n/conf.yml` me ƒe ɖoɖowɔwɔ nye dɔ geɖe wɔwɔ ƒe nɔnɔme.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Le afisia la, `menu: NB demo1,demo2` , fia be nàzã `NB` ƒe nɔnɔmetata atsɔ awɔ nusiwo le tsia dzi la gɔme.

`NB` , si nye `Name Breif` ƒe kpukpui, fia be nusiwo le tsia dzi ate ŋu aɖe dɔa ƒe ŋkɔ kple nyagbɔgblɔ afia.

`NB` kplɔe ɖo kple parameter `demo1,demo2` si wotsɔ yi nɛ.
De : ** Mele be dometsotso ** aɖeke nanɔ anyi do ŋgɔ na koma `,` le `demo1,demo2` me kple emegbe o.

Directory index file si sɔ na parameter siwo le etame enye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Ƒe Emenyawo Ƒe Xexlẽdzesifiaƒe

`i18n.site` awɔ `js` plug-in `.i18n/hook/after.tran/TOC.js` le demo nudzraɖoƒea be wòaxlẽ `doc` directory index file si sɔ kple `TOC` template configuration be wòawɔ `json` directory outline.

Ne èzã `doc` template la, ele be plug-in sia nanɔ asiwò.

Ne èdze dɔ `i18n.site` gɔme tso agbalẽdzraɖoƒe ƒuƒlu la, ɖo ŋku edzi be yeawɔ demo project `.i18n` ƒe kɔpi ɖe wò agbalẽdzraɖoƒe.

`Doc` nɔnɔmetata la awɔ emenyawo ƒe nɔnɔmetata si wotu ɖe `json` si wowɔ dzi.

##### Emenyawo Me Ɖeɖe Tsitotsito

`en/blog/TOC` le ale :

```
README.md

news/README.md
  news/begin.md
```

##### Zã Indentation Nàtsɔ Afia Dzidzenuwo

`README.md` si le fli gbãtɔ si le `en/blog/TOC` me le etame la sɔ kple `i18n.site` le nɔnɔmetata si le ete me, si nye dɔa ƒe ŋkɔ.

Fli eve siwo kplɔe ɖo la le abe alesi woɖee fia le screenshot si le ete me ene.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sɔ kple `News` , .
`news/begin.md` sɔ kple `Our Product is Online !`

Wotsɔ faɛl `TOC` de eme be woatsɔ afia ƒomedodo si le ɖoɖowɔɖia me le ɖoɖo nu eye woado alɔ indentation si le ɖoƒe vovovowo.

##### Dzila Ƒe Ɖoƒea Ŋlɔa Tanya La Ko, Ke Menye Emenyawo O.

Ne indentation ƒe dzidzenu vovovowo li la, dzila ƒe dzidzenu koe ŋlɔa tanya la ke menye emenyawo o. Ne menye nenema o la, agbalẽtata ƒe nɔnɔme atɔtɔ.

##### Dɔwɔwɔ Si Nye README.md

Woate ŋu aŋlɔ emenyawo ɖe nu `README.md` , abe `en/demo2/README.md` ene me.

De dzesii be faɛl sia me nyawo meɖea emenyawo ƒe ɖoɖowɔɖi aɖeke fiana o, eyata anyo be nàɖo seɖoƒe na didime eye nàŋlɔ ŋgɔdonya kpui aɖe.

###### Dɔa Ƒe Nyagbɔgblɔ

Àte ŋu akpɔe be `Deme Two` ƒe dɔwɔwɔ ƒe dzesi le nusiwo le fli dzi kple agbalẽdzraɖoƒe ƒe nɔnɔmetata ƒe dɔwɔwɔ ƒe : `Your Project slogan` te.

![](https://p.3ti.site/1721276842.avif)

Esia sɔ kple fli gbãtɔ `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Woabu nya siwo le dɔ `README.md` ƒe tanya si le ɖoƒe gbãtɔ ƒe xexlẽdzesi gbãtɔ `:` megbe be wonye dɔa ƒe nyagbɔgblɔ.

Zãla siwo tso China, Japan kple Korea, taflatse de dzesii be ele be nàzã eve-si ƒe kekeme ƒe eve `:` ɖe kekeme blibo ƒe eve teƒe.

##### Aleke Woawɔ Aʋu TOC Le Agbɔsɔsɔ Gã Me?

Ele be woatsɔ faɛl `TOC` ade gbe si wodo tso eme ƒe nyatakakadzraɖoƒe.

Le kpɔɖeŋu me, ne gbe si wodo tso eme nye Chinagbe la, ekema `TOC` si le etame nye `zh/blog/TOC` .

Ne wotrɔ gbegbɔgblɔ si me wotso la, ele be nàɖe gbegbɔgblɔ aɖe ƒe faɛl `TOC` siwo le dɔa me la ayi gbe bubu me.

Àte ŋu akpɔ sedede siwo gbɔna:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Taflatse trɔ asi le `en/` kple `zh/` le sedede si le etame me ɖe wò gbegbɔgblɔ ƒe kɔpi ŋu.