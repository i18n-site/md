<h1 style="justify-content:space-between">3Ti.Site · Panse San Fwontyè<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, yon dèlko sit estatik, ka otomatikman tradui Markdown nan [plis pase yon santèn lang diferan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Gen kèk moun ki ka mande, kounye a ke navigatè yo gen fonksyon tradiksyon entegre, èske li pa nesesè entènasyonalize sit entènèt la?

Mwen vle di ke **se sèlman lè nou entènasyonalize sit la tout antye nou ka sipòte rechèch ak tèks konplè sou sit ki nan plizyè lang ak optimize motè rechèch** .

## Entwodiksyon

Bib · Jenèz :

> Nan tan lontan, lè lang yo te yon sèl, limanite te bati yon gwo fò won rive nan syèl la, yon pòtal nan domèn Bondye a, pwoklame pisans limanite.
>
> Bondye te deklare, "Gason ini kòm yon sèl branch fanmi, ak yon lang pataje, ak gwo kay won sa a se sèlman yon pwològ. Kounye a yo reyalize dezi yo, epi p ap gen laperèz ankò."
>
> Kidonk, Bondye desann, gaye moun nan diferan kwen, sèvi ak lang diferan.
>
> Depi lè sa a, kominikasyon imen te vin difisil, diskisyon kontinuèl, e pa t gen yon gwo kay won ankò ki te manyen syèl la.

Roman syans fiksyon &quot;Three-Body&quot; (pwononsyasyon Chinwa: `3Ti` ) fiksyonalize yon sivilizasyon etranje ki kominike atravè onn elektwomayetik, pa gen okenn baryè lang, epi li se teknolojik pwospè.

Mwen espere kreye yon zouti ki pral pèmèt moun ki sou tè a vin tankou moun ki gen twa kò, kominike san yo pa mare nan lang, epi ini tout limanite ankò.

## Tutorial

## Fonksyon Entwodiksyon

### Kenbe Fòma Markdown

### Modifye Tradiksyon

Apre modifye tradiksyon an, ou bezwen re-kouri `./i18n.sh` pou mete ajou kachèt la.

### Nòt Tradiksyon

Kòmantè tradiksyon yo dwe endike lang apre \```, tankou ` ```rust` .

Kounye a sipòte tradiksyon kòmantè pou rouye, c, cpp, java, js, kafe, python, ak bash.

Edite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) pou ajoute sipò tradiksyon pou kòmantè nan plis lang.

### Konfigirasyon Proxy

Mete varyab anviwònman sa yo pèmèt apèl API Google Translate yo pase nan prokurasyon an.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Entègrasyon Varyab

```
test: 测试变量<br 0>嵌入
```

### Vide Kachèt La

```bash
rm -rf .i18n/.cache
```
