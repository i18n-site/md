<h1 style="justify-content:space-between">3Ti.Site · Panse san fwontyè<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, yon dèlko sit estatik milti-lang, ka otomatikman tradui Markdown nan [plis pase yon santèn lang diferan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Gen kèk moun ki ka vle mande, kounye a ke navigatè yo gen fonksyon tradiksyon bati, èske li pa nesesè entènasyonalize sit entènèt la?

Mwen vle di ke **se sèlman lè nou entènasyonalize sit la tout antye nou ka sipòte rechèch ak tèks konplè sou sit ki nan plizyè lang ak optimize motè rechèch** .

## Sekans

"Labib · Jenèz":

> Ansyen yo pa t fè distenksyon ant lang. Yo te fèt ak fyète e yo te vle bati yon gwo fò won ak tèt la rive nan syèl la.
> <blockquote><p>Bondye te fache ak awogans lèzòm, se konsa li gaye tout bèt vivan nan divès kote, yo pa t &#39;kapab konprann youn ak lòt.</p></blockquote>
> <blockquote><p>Depi lè sa a, li te difisil pou lèzòm kominike, diskisyon kontinye, e pa gen okenn Tour Babèl nan monn nan.</p></blockquote>

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
