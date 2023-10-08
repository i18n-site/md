# I18N.SITE · Lang San Fwontyè<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, yon dèlko sit estatik plizyè lang, ka otomatikman tradui Markdown nan [plis pase yon santèn lang diferan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Gen kèk moun ki ka vle mande, kounye a ke navigatè yo gen fonksyon tradiksyon bati, èske li pa nesesè entènasyonalize sit entènèt la?

Mwen vle di ke **se sèlman lè nou entènasyonalize sit la tout antye nou ka sipòte rechèch ak tèks konplè sou sit ki nan plizyè lang ak optimize motè rechèch** .

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
