<h1 style="justify-content:space-between">3Ti.Site · Tamesusuwo siwo me liƒo mele o<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, si nye gbegbɔgblɔ geɖe me static site generator, ate ŋu aɖe Markdown gɔme le eɖokui si ɖe [gbe vovovo siwo wu alafa ɖeka](https://github.com/i18n-site/node/blob/main/lang/src/index.js) me .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ame aɖewo adi be yewoabia be, fifia si gbegɔmeɖeɖedɔ siwo wotu ɖe web-browserwo me la, ɖe mehiã be woatsɔ nyatakakadzraɖoƒea awɔ dukɔwo domee oa?

Medi be magblɔ be **ne míetsɔ nyatakakadzraɖoƒe bliboa wɔ dukɔwo domee ko hafi míate ŋu ado alɔ gbegbɔgblɔ geɖe me nyatakakadzraɖoƒea ƒe nuŋɔŋlɔ bliboa didi kple mɔ̃ siwo dia nyatakakawo ƒe nyonyome** .

## Yomenuwo

"Biblia·Mose Ƒe Agbalẽ Gbãtɔ".:

> Blematɔwo mede vovototo gbegbɔgblɔwo dome o. Wodzi wo kple dada eye wodi be yewoatu xɔ kɔkɔ aɖe si tame naɖo dziƒo.
> <blockquote><p>Amegbetɔ ƒe dada medze Mawu ŋu o, eyata ekaka nu gbagbewo katã ɖe teƒe vovovowo, eye womete ŋu se wo nɔewo gɔme o.</p></blockquote>
> <blockquote><p>Tso ɣemaɣi la, esesẽna na amegbetɔwo be woaɖo dze, masɔmasɔwo yi edzi, eye Babel Mɔ̃ kɔkɔ aɖeke mele xexeame o.</p></blockquote>

Dzɔdzɔmeŋutinunya me nyakpakpa gbalẽ si nye &quot;Three-Body&quot; (Chinagbe me nyayɔyɔ: `3Ti` ) tsɔ amedzro deŋgɔ aɖe si ɖoa dze to elektrikŋusẽ ƒe ƒutsotsoewo dzi, gbegbɔgblɔ ƒe mɔxenu aɖeke mele eŋu o, eye wòkpɔ dzidzedze le mɔ̃ɖaŋununya me la ƒe nyakpakpa.

Mele mɔ kpɔm be to dɔwɔnu sia ƒe kpekpeɖeŋu me la, anyigba dzi tɔwo anɔ abe ame siwo ƒe ŋutilã etɔ̃ le ene, gbegbɔgblɔ maxe mɔ ɖe kadodo nu o, eye ameƒomea katã agawɔ ɖeka ake.

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
