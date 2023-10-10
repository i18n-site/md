<h1 style="justify-content:space-between">3Ti.Site · Dink geen grense nie<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, 'n veeltalige statiese werfgenerator, kan Markdown outomaties in [meer as honderd verskillende tale](https://github.com/i18n-site/node/blob/main/lang/src/index.js) vertaal.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sommige mense wil dalk vra, noudat blaaiers ingeboude vertaalfunksies het, is dit onnodig om die webwerf te internasionaliseer?

Ek wil sê dat **ons slegs deur die hele webwerf te internasionalisering kan meertalige voltekssoektog op die webwerf en soekenjinoptimalisering ondersteun** .

## Inleiding

Bybel · Genesis :

> In antieke tye, toe tale een was, het die mensdom 'n toring gebou wat na die hemel reik, 'n poort na God se domein, wat die mensdom se mag verkondig het.
>
> God het verklaar: "Mans verenig as een stam, met 'n gedeelde tong, en hierdie toring is maar 'n proloog. Nou bereik hulle hul begeerte, en daar sal geen vrees meer wees nie."
>
> So het God neergedaal, mense na verskillende uithoeke verstrooi, verskillende tale gebruik.
>
> Van toe af het menslike kommunikasie uitdagend geword, geskille eindeloos, en daar was nie meer 'n toring wat die lug aangeraak het nie.

Die wetenskapfiksie-roman &quot;Three-Body&quot; (Chinese uitspraak: `3Ti` ) fiksionaliseer 'n uitheemse beskawing wat deur elektromagnetiese golwe kommunikeer, geen taalgrense het nie en tegnologies voorspoedig is.

Ek hoop om 'n instrument te skep wat die mense van die aarde in staat sal stel om soos drie-liggaam mense te wees, te kommunikeer sonder om deur taal gebonde te wees, en die hele mensdom weer te verenig.

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
