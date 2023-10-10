<h1 style="justify-content:space-between">3Ti.Site · Tamebubu Liƒo Manɔmee<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, si nye static site generator, ate ŋu aɖe Markdown gɔme le eɖokui si ɖe [gbe vovovo siwo wu alafa ɖeka](https://github.com/i18n-site/node/blob/main/lang/src/index.js) me .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ame aɖewo abia be, esi gbegɔmeɖeɖedɔwo le web-browserwo katã si ta la, ɖe mehiã be woatsɔ nyatakakadzraɖoƒea awɔ dukɔwo domee oa?

Madi be magblɔ be **nyatakakadzraɖoƒe siwo wɔa gbegɔmeɖeɖe siwo mewɔa tɔtrɔ o koe ate ŋu ado alɔ gbegbɔgblɔ geɖe me nyawo didi le nyatakakadzraɖoƒea kple nyatakakawo didi ƒe mɔ̃wo ƒe nyonyome** .

## Kpɔkplɔyiɖeme

Biblia · Mose ƒe Agbalẽ Gbãtɔ :

> Le blemaɣeyiɣiwo me, esime gbegbɔgblɔwo nye ɖeka la, ameƒomea tu xɔ kɔkɔ aɖe si keke ta ɖo dziƒo, si nye agbo si dzi woato ayi Mawu ƒe dziɖuƒe, henɔ gbeƒã ɖem ameƒomea ƒe ŋusẽ.
>
> Mawu ɖe gbeƒãe be, "Ŋutsuwo wɔa ɖeka abe to ɖeka ene, kple aɖe ɖeka, eye xɔ kɔkɔ sia nye ŋgɔdonya ko. Fifia woɖo woƒe didi gbɔ, eye vɔvɔ̃ maganɔ anyi o."
>
> Eyata Mawu ɖiɖi, kaka amewo ɖe dzogoe vovovowo dzi, zã gbegbɔgblɔ vovovowo.
>
> Tso ɣemaɣi dzi la, amegbetɔwo ƒe kadodo va nɔ sesẽm, masɔmasɔwo nu metsina o, eye xɔ kɔkɔ si ka dziŋgɔli meganɔ anyi o.

Dzɔdzɔmeŋutinunya me nyakpakpa gbalẽ si nye &quot;Three-Body&quot; (Chinagbe me nyayɔyɔ: `3Ti` ) tsɔ amedzro deŋgɔ aɖe si ɖoa dze to elektrikŋusẽ ƒe ƒutsotsoewo dzi, gbegbɔgblɔ ƒe mɔxenu aɖeke mele eŋu o, eye wòkpɔ dzidzedze le mɔ̃ɖaŋununya me la ƒe nyakpakpa.

Mele mɔ kpɔm be mawɔ dɔwɔnu aɖe si ana anyigba dzi tɔwo nanɔ abe ŋutilã etɔ̃ ƒe ame ene, aɖo dze evɔ gbegbɔgblɔ mabla wo o, eye wòagawɔ ameƒomea katã ɖekae ake.

## Nufiame

## Dɔwɔwɔ Ƒe Ŋgɔdonya

### Na Markdown Format Nanɔ Asiwò

### Trɔ Asi Le Gbegɔmeɖeɖea Ŋu

Ne ètrɔ asi le gbegɔmeɖeɖea ŋu vɔ la, ele be nàgbugbɔ awɔ `./i18n.sh` be nàwɔ cache la yeyee.

### Gbegɔmeɖeɖe Ŋuti Nyatakakawo

Ele be gbegɔmeɖeɖe ƒe nyawo nafia gbe si le \``` megbe, abe ` ```rust` .

Fifia edoa alɔ nyaŋuɖoɖo gɔmeɖeɖe na rust, c, cpp, java, js, kɔfi, python, kple bash.

Trɔ asi le [tran_md/src/comment.coffee ŋu](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) be nàtsɔ gbegɔmeɖeɖe ƒe kpekpeɖeŋu akpe ɖe nyaŋuɖoɖowo ŋu le gbegbɔgblɔ geɖe me.

### Ðo Ðoɖo Ðe Teƒenɔla Ŋu

Nutoa me tɔtrɔ siwo gbɔna ɖoɖo ɖea mɔ na Google Translate API yɔyɔwo be woato teƒenɔla la me.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Trɔtrɔ Ƒe Embedding

```
test: 测试变量<br 0>嵌入
```

### Ƒuƒlu Le Cache La Me

```bash
rm -rf .i18n/.cache
```
