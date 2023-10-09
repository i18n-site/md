# I18N.SITE · Taal Sonder Grense<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, &#39;n veeltalige statiese werfgenerator, kan Markdown outomaties in [meer as honderd verskillende tale](https://github.com/i18n-site/node/blob/main/lang/src/index.js) vertaal.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sommige mense wil dalk vra, noudat blaaiers ingeboude vertaalfunksies het, is dit onnodig om die webwerf te internasionaliseer?

Ek wil sê dat **ons slegs deur die hele webwerf te internasionalisering kan meertalige voltekssoektog op die webwerf en soekenjinoptimalisering ondersteun** .

## Tutoriaal

## Funksie Inleiding

### Hou Markdown-Formaat

### Verander Vertaling

Nadat jy die vertaling gewysig het, moet jy `./i18n.sh` weer laat loop om die kas op te dateer.

### Vertaling Notas

Vertaalkommentaar moet die taal na \``` aandui, soos ` ```rust` .

Ondersteun tans kommentaarvertaling vir roes, c, cpp, java, js, koffie, luislang en bash.

Wysig [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) om vertalingsteun by te voeg vir opmerkings in meer tale.

### Stel Instaanbediener Op

Deur die volgende omgewingsveranderlikes in te stel, kan Google Translate API-oproepe deur die instaanbediener gaan.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Veranderlike Inbedding

```
test: 测试变量<br 0>嵌入
```

### Maak Die Kas Leeg

```bash
rm -rf .i18n/.cache
```
