# I18N.SITO · Mana Fronterayuq Qillqakuna<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, huk mana kuyukuq sitio ruwaq, [133 hukniray simikunaman](https://github.com/i18n-site/node/blob/main/lang/src/index.js) kikillanmanta tikrayta yanapan .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Wakin runakuna tapuyta munankuman, kunan navegadorkuna tikray ruwanakuna ruwasqayuq kasqankurayku, ¿mana necesariochu web kitita internacionalización ruway?

Munani **niyta tukuy sitiota internacionalizaspalla yanapayta atiykuman achka simiyuq sitiopi hunt&#39;asqa qillqa maskana chaymanta maskana motor allinchay** .

## Yachachiy

## Ruway Riqsichikuy

### Formato De Markdown Nisqapi Waqaychay

### Traducciónta Modificay

Tikrayta tikraspaykiqa, `./i18n.sh` musuqmanta purichinayki, waqaychanata musuqyachinaykipaq.

### Traducción Nisqamanta Notas

Tikray rimaykunaqa \``` nisqamanta qhipaman simita rikuchinan tiyan, ahinataq ` ```rust` .

Kunanqa yanapakunmi rimay tikrayta rust, c, cpp, java, js, café, python, chaymanta bash kaqpaq.

[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) llamk'apuy, aswan simikunapi rimaykunapaq tikray yanapakuy yapanaykipaq.

### Proxy Nisqa Ruway

Kay qatiq muyuriq tikraqkunata churayqa Google Translate API waqyakuykunata proxy kaqninta purichiyta saqin.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Variable Nisqa Churay

```
test: 测试变量<br 0>嵌入
```

### Ch'usaq El Caché

```bash
rm -rf .i18n/.cache


```
