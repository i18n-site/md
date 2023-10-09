<h1 style="justify-content:space-between">I18N.SITE · Gbegbɔgblɔ si me liƒo mele o<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, si nye gbegbɔgblɔ geɖe me static site generator, ate ŋu aɖe Markdown gɔme le eɖokui si ɖe [gbe vovovo siwo wu alafa ɖeka](https://github.com/i18n-site/node/blob/main/lang/src/index.js) me .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ame aɖewo adi be yewoabia be, fifia si gbegɔmeɖeɖedɔ siwo wotu ɖe web-browserwo me la, ɖe mehiã be woatsɔ nyatakakadzraɖoƒea awɔ dukɔwo domee oa?

Medi be magblɔ be **ne míetsɔ nyatakakadzraɖoƒe bliboa wɔ dukɔwo domee ko hafi míate ŋu ado alɔ gbegbɔgblɔ geɖe me nyatakakadzraɖoƒea ƒe nuŋɔŋlɔ bliboa didi kple mɔ̃ siwo dia nyatakakawo ƒe nyonyome** .

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
