<h1 style="justify-content:space-between">3Ti.Site · Panse pa gen fwontyè<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, yon dèlko sit estatik milti-lang, ka otomatikman tradui Markdown nan [plis pase yon santèn lang diferan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Gen kèk moun ki ka vle mande, kounye a ke navigatè yo gen fonksyon tradiksyon bati, èske li pa nesesè entènasyonalize sit entènèt la?

Mwen vle di ke **se sèlman lè nou entènasyonalize sit la tout antye nou ka sipòte rechèch ak tèks konplè sou sit ki nan plizyè lang ak optimize motè rechèch** .

## Sekans

"Labib · Jenèz":

> Ansyen yo pa t fè distenksyon ant lang. Yo bati gwo fò won ki rive nan syèl la pou rive nan pòtay Bondye a pou ankouraje prestige ras imen an.
>
> Bondye te di ke moun yo se yon branch fanmi pa yo, ki gen menm kilti ak espès yo. Bati yon gwo kay won se jis yon prelid. Koulye a, ou ka akonpli tou sa ou vle, epi ou pa pral gen anyen yo pè.
>
> Lè sa a, Bondye vini, li gaye pèp la nan divès kote, yo pa t 'kapab konprann youn ak lòt.
>
> Depi lè sa a, limanite te lite pou yo kominike, konfli te leve san rete, e mond lan pa wè yon gwo fò won ankò ki te rive nan syèl la.

Roman syans fiksyon &quot;Three-Body&quot; (pwononsyasyon Chinwa: `3Ti` ) fiksyonalize yon sivilizasyon etranje ki kominike atravè onn elektwomayetik, pa gen okenn baryè lang, epi li se teknolojik pwospè.

Mwen espere ke avèk èd zouti sa a, moun ki sou tè a pral tankou moun ki gen twa kò, kominikasyon pa pral limite pa lang, ak tout limanite pral ini ankò.

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
