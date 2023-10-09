# I18N.SITO · Simi Sin Fronteras<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, achka simiyuq mana kuyukuq sitio ruwaq, kikinmanta Markdown [pachakmanta aswan hukniray simikunaman](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tikrayta atin .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

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

[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) llamk&#39;apuy, aswan simikunapi rimaykunapaq tikray yanapakuy yapanaykipaq.

### Proxy Nisqa Wakichiy

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
