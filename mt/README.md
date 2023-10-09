<h1 style="justify-content:space-between">I18N.SITE · Lingwa mingħajr fruntieri<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

I18N.SITE, ġeneratur ta &#39;sit statiku b&#39;ħafna lingwi, jista&#39; jittraduċi Markdown awtomatikament [f&#39;aktar minn mitt lingwa differenti](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Xi nies jistgħu jixtiequ jistaqsu, issa li l-browsers għandhom funzjonijiet ta 'traduzzjoni inkorporati, mhuwiex meħtieġ li tiġi internazzjonalizzata l-websajt?

Irrid ngħid li **biss billi ninternazzjonalizzaw is-sit kollu nistgħu nappoġġaw it-tfittxija b&#39;test sħiħ fuq il-post b&#39;ħafna lingwi u l-ottimizzazzjoni tal-magni tat-tiftix** .

## Tutorja

## Funzjoni Introduzzjoni

### Żomm Markdown Format

### Immodifika Traduzzjoni

Wara li timmodifika t-traduzzjoni, trid terġa&#39; tħaddem `./i18n.sh` biex taġġorna l-cache.

### Noti Tat-Traduzzjoni

Il-kummenti tat-traduzzjoni jeħtieġ li jindikaw il-lingwa wara \```, bħal ` ```rust` .

Bħalissa jappoġġja t-traduzzjoni tal-kummenti għal rust, c, cpp, java, js, coffee, python, u bash.

Editja [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) biex iżżid l-appoġġ tat-traduzzjoni għall-kummenti f&#39;aktar lingwi.

### Ikkonfigura L-Prokura

L-issettjar tal-varjabbli ambjentali li ġejjin jippermetti li sejħiet tal-API ta' Google Translate jgħaddu mill-prokura.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Inkorporazzjoni Varjabbli

```
test: 测试变量<br 0>嵌入
```

### Battal Il-Cache

```bash
rm -rf .i18n/.cache
```
