# .i18n/conf.yml

Ðoɖowɔɖi ƒe faɛl na `i18n.site` nye `.i18n/conf.yml` eye emenyawo le ale :

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

Le wo dome la, ɖoɖowɔɖi ƒe nu `upload` va ɖo `ext:` fia be `.md` koe woada ɖe Internet dzi ne wole etam.

## Dziƒomɔzɔzɔ nav

`nav:` ɖoɖowɔɖi ƒe tiatia, si sɔ kple mɔfianu si le gɔmedzedzea ƒe tame.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Le wo dome la, `i18n: home` sɔ kple `home: Home` le `en/i18n.yml` me (afisi `en` nye dɔa gɔmeɖeɖe ƒe gbegbɔgblɔ tsoƒe).

`en/i18n.yml` emenyawo nye nuŋɔŋlɔ si woɖe fia le mɔfianu ƒe nyawo me, si gɔme woaɖe ɖe `fromTo` nu le ɖoɖowɔɖia me, le kpɔɖeŋu me, woaɖe egɔme ɖe `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ne èwu gbegɔmeɖeɖea nu vɔ la, àte ŋu atrɔ asi le gbegɔmeɖeɖe `yml` ƒe asixɔxɔ ŋu, gake mègatsɔ gbegɔmeɖeɖe `yml` ƒe safui akpe ɖe eŋu alo atutui o.

### `use: Toc` Ƒe Nɔnɔmetata Kple Nɔnɔmetata

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` fia be woaɖe egɔme to `Toc` ƒe nɔnɔmetata zazã me, si nye `Markdown` ƒe nɔnɔmetata ɖeka gɔmeɖeɖe.

`TOC` nye `Table of Contents` ƒe kpukpui.Ne woɖe nɔnɔmetata sia gɔme la, woaɖe faɛl `Markdown` sia ƒe nɔnɔmetata afia le axadzinuŋɔŋlɔa me.

`url:` tsi tre ɖi na faɛl ƒe mɔ si nye `Markdown` ( `/` sɔ kple ke ƒe nuŋlɔɖi `/README.md` , faɛl ŋkɔ sia bia ŋɔŋlɔdzesi gãwo ƒe ŋgɔdonya kple ŋɔŋlɔdzesi suewo ƒe megbenya).

### 0Nuŋlɔɖi `use: Md` Ƒe Nɔnɔmetata Si Me Nɔnɔmetata Mele O

`Md` ƒe nɔnɔmetata kple `Toc` ƒe nɔnɔmetata la sɔ eye wozãa wo ame evea siaa tsɔ ɖea `Markdown` ƒe faɛl ɖeka gɔme. Gake `Md` nɔnɔmetata la meɖea nɔnɔmetata si le axadzinuŋɔŋlɔa me fiana o.

Àteŋu atrɔ asi le `use: Toc` le ɖoɖowɔɖi si le etame me wòazu `use: Md` , awɔ `i18n.site` le `md` ƒe nuŋlɔɖiwo me ake, eye emegbe nàyi ŋgɔyiyi ƒe ŋgɔdonya ƒe URL dzi be nàlé ŋku ɖe tɔtrɔ siwo le gɔmedzedzea me ŋu.

### `use: Blog` Blog Ƒe Nɔnɔmetatawo

Blog ƒe nɔnɔmetata la ɖea nyatiwo (tanyawo kple nya kpuiwo) ƒe xexlẽdzesiwo fiana le ɖoɖo si nu wota wo ɖo nu.

[→ Zi afisia dzi be nàsrɔ̃ nu tso ɖoɖo tɔxɛa ŋu](/i18n.site/conf/blog)

### `use: Doc` Ƒe Nuŋlɔɖi Ƒe Nɔnɔmetata Geɖewo

Le ɖoɖowɔɖi ƒe faɛl la me la:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Fia be wozãa `Doc` hena nɔnɔmetata ƒe gɔmeɖeɖe.

`Doc` template doa alɔ `MarkDown` geɖe ƒoƒo ƒu ɖekae be woawɔ nuŋlɔɖi ƒe nɔnɔmetatawo na dɔ ɖeka alo geɖe.

#### Dɔ Geɖewo Kple Faɛl Geɖewo

`.i18n/conf.yml` le `i18n:doc` me ƒe ɖoɖowɔwɔ nye dɔ geɖe wɔwɔ ƒe faɛl geɖe ƒe gɔmeɖeɖe ƒe nɔnɔme.

Le afisia la, `menu: NB demo1,demo2` , fia be nàzã `NB` ƒe nɔnɔmetata atsɔ awɔ nusiwo le tsia dzi la gɔme.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , si nye `Name Breif` ƒe kpukpui, fia be nusiwo le tsia dzi ate ŋu aɖe dɔa ƒe ŋkɔ kple nyagbɔgblɔ afia.

`NB` kplɔe ɖo kple parameter `demo1,demo2` si wotsɔ yi nɛ.

De : ** Mele be dometsotso ** aɖeke nanɔ anyi do ŋgɔ na koma `,` le `demo1,demo2` me kple emegbe o.

Directory index file si sɔ na parameter siwo le etame enye:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Single Project Geɖe Ƒe Faɛlwo

Ne dɔ ɖeka koe le asiwò la, àte ŋu aɖoe ale.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Dɔwɔwɔ ɖeka si me faɛl geɖewo le medoa alɔ ɖoɖowɔwɔ `url` abe kemɔ `/` ene o
> Ne __conf.yml → nav:__ Womeɖo kemɔ aɖeke o la, ne èle nyatakakadzraɖoƒea ƒe gɔmedzedze la, woagbugbɔ aŋlɔe le eɖokui si ɖe URL gbãtɔ si le `nav:` ƒe ɖoɖoa te.
> Aɖaŋu sia nye be woade vovototo dɔa ƒe nuŋlɔɖiwo, blogwo kple nyatakaka bubuwo dome nyuie wu to agbalẽdzraɖoƒewo dzi.
> Wokafui be nàzã faɛl ɖeka kple axa ɖeka abe axa gbãtɔ ene.

> [!TIP]
> Ne womeŋlɔ `url` o la, `url` aɖo asixɔxɔ si nye `i18n` Se sia dzea dɔwɔwɔ gɔme na nɔnɔmetata bubuwo hã.

#### TOC Ƒe Emenyawo Ƒe Xexlẽdzesifiaƒe

Ne wowɔ template `use: Doc` le ɖoɖowɔɖia me la, taflatse wɔ plug-in `i18n.addon/toc` le `.i18n/conf.yml` Ðoɖoa le ale :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` aɖo plug-in sia le eɖokui si eye wòawɔe, axlẽ `TOC` directory index file la, eye wòawɔ `json` directory outline.

Ne enye dɔ ɖeka si me faɛl geɖe le la, ke ƒe agbalẽdzraɖoƒe `TOC` nye agbalẽdzraɖoƒe si sɔ kple `url:` le gbegbɔgblɔ dzɔtsoƒe ƒe nuŋlɔɖi me Le kpɔɖeŋu me, ne dzɔtsoƒegbe nye Chinagbe: faɛl si sɔ kple `url: flashduty` nye `zh/flashduty/TOC` .

Nenye be enye dɔ geɖewo kple faɛl geɖewo la, mehiã be woaɖo `url:` Root directory of `TOC` nye directory si sɔ kple asixɔxɔ si le `i18n` .

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

Wotsɔ faɛl `TOC` de eme be woatsɔ afia ƒomedodo si le ɖoɖowɔɖia ƒe ɖoɖo nu, ado alɔ nuŋɔŋlɔ si le ɖoƒe vovovowo, kple fli ƒe nyaŋuɖoɖo siwo dze egɔme kple `# ` .

##### Dzila Ƒe Ɖoƒea Ŋlɔa Tanya La Ko, Ke Menye Emenyawo O.

Ne indentation ƒe dzidzenu vovovowo li la, dzila ƒe dzidzenu koe ŋlɔa tanya la ke menye emenyawo o. Ne menye nenema o la, agbalẽtata ƒe nɔnɔme atɔtɔ.

##### Dɔwɔwɔ Si Nye README.md

Woate ŋu aŋlɔ emenyawo ɖe nu `README.md` , abe `en/demo2/README.md` ene me.

De dzesii be faɛl sia me nyawo meɖea emenyawo ƒe ɖoɖowɔɖi aɖeke fiana o, eyata anyo be nàɖo seɖoƒe na didime eye nàŋlɔ ŋgɔdonya kpui aɖe.

###### Dɔa Ƒe Nyagbɔgblɔ

Àte ŋu akpɔe be `Deme Two` ƒe `Your Project slogan` : .

![](https://p.3ti.site/1721276842.avif)

Esia sɔ kple fli gbãtɔ si nye `en/demo2/README.md` :

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

### Default Loading Si Me Ɖoɖowɔɖi Ƒe Mɔ Manɔmee

Le mɔ aɖe si dzi wole gegem ɖo gome la, ne womeɖo mɔ ƒe ŋgɔdonya ɖe `nav:` me o la, woatsɔ faɛl `MarkDown` si sɔ kple mɔa la ade eme le gɔmedzedzea me eye woaɖee afia to `Md` ƒe nɔnɔmetata zazã me.

Le kpɔɖeŋu me, ne woge ɖe `/test` me eye woɖo `nav:` mɔ sia ƒe ŋgɔdonya manɔmee, eye gbe si wozãna fifia nye Eŋlisigbe (kɔda `en` ), woatsɔ `/en/test.md` ade eme le gɔmedzedzea me eye woaɖee afia to nɔnɔmetata `Md` zazã me.

Ne `/en/test.md` faɛl sia meli o la, woaɖe axa `404` si woɖo ɖi la afia.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">