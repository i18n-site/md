<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, margra tungumála kyrrstæður síða rafall, getur sjálfkrafa þýtt Markdown á [meira en hundrað mismunandi tungumál](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sumir gætu viljað spyrja, nú þegar vafrar eru með innbyggða þýðingaraðgerðir, er óþarfi að alþjóðavæða vefsíðuna?

Ég vil segja að **aðeins með því að alþjóðavæða alla síðuna getum við stutt fjöltyngda leit í fullum texta á staðnum og leitarvélabestun** .

## Röð

"Biblían · Genesis":

> Fornmenn gerðu ekki greinarmun á tungumálum. Þeir byggðu turna sem náðu til himins til að komast að hliði Guðs til að efla álit mannkynsins.
>
> Guð sagði að fólk væri eigin ættkvísl, með sömu menningu og tegund. Að byggja turn er bara forleikur. Nú geturðu afrekað hvað sem þú vilt og þú þarft ekkert að óttast.
>
> Þá kom Guð og tvístraði fólkinu á ýmsa staði, ófær um að skilja hver annan.
>
> Upp frá því átti mannkynið í erfiðleikum með samskipti, endalaust komu upp átök og heimurinn sá ekki lengur turn sem náði til himins.

Vísindaskáldsagan „Three-Body“ (kínverskur framburður: `3Ti` ) skáldar upp framandi siðmenningu sem hefur samskipti í gegnum rafsegulbylgjur, hefur engar tungumálahindranir og er tæknilega velmegandi.

Ég vona að með hjálp þessa verkfæris verði fólk á jörðinni eins og þriggja líkama fólk, samskipti verði ekki takmörkuð af tungumáli og allt mannkyn muni sameinast á ný.

## Kennsla

## Aðgerðarkynning

### Haltu Markdown Sniði

### Breyta Þýðingu

Eftir að hafa breytt þýðingunni þarftu að keyra `./i18n.sh` aftur til að uppfæra skyndiminni.

### Þýðingarskýringar

Þýðingar athugasemdir þurfa að gefa til kynna tungumálið á eftir \```, svo sem ` ```rust` .

Styður sem stendur athugasemdaþýðingu fyrir ryð, c, cpp, java, js, kaffi, python og bash.

Breyttu [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) til að bæta við þýðingarstuðningi fyrir athugasemdir á fleiri tungumálum.

### Stilla Proxy

Að stilla eftirfarandi umhverfisbreytur gerir Google Translate API símtölum kleift að fara í gegnum proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Tæmdu Skyndiminni

```bash
rm -rf .i18n/.cache
```
