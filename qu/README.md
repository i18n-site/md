<h1 style="justify-content:space-between">3Ti.Siti · Mana fronterayuq yuyaykuna<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, achka simiyuq mana kuyukuq sitio ruwaq, kikinmanta Markdown [pachakmanta aswan hukniray simikunaman](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tikrayta atin .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Wakin runakuna tapuyta munankuman, kunan navegadorkuna tikray ruwanakuna ruwasqayuq kasqankurayku, ¿mana necesariochu web kitita internacionalización ruway?

Munani **niyta tukuy sitiota internacionalizaspalla yanapayta atiykuman achka simiyuq sitiopi hunt&#39;asqa qillqa maskana chaymanta maskana motor allinchay** .

## Qati Qati

"Biblia·Génesis".:

> Ñawpa pacha runakunaqa manan simikunata t’aqaqkuchu. Paykunaqa hatunchakuspankun nacerqanku, hinaspan huk hatun torreta ruwayta munarqanku, patantaq hanaq pachaman chayaq.
> <blockquote><p>Runapa hatunchakuyninwanmi Diosqa mana allinpaqchu hapirqa, chaymi lliw kawsaqkunata imaymana cheqaskunapi chiqichirqa, mana entiendenakuspa.</p></blockquote>
> <blockquote><p>Chaymantapachan runakunapaqqa sasa rimay, ch’aqwaykunapas hinallam, kay pachapiqa manañam kanchu Babel torrepas.</p></blockquote>

&quot;Kimsa-Kurku&quot; (China simipi t&#39;uqyay: `3Ti` ) ciencia ficción nisqa novelaqa huk hawa llaqtayuq civilización nisqatam ficcionalizan, chaymi electromagnética olakunawan rimanakunku, mana simi hark&#39;aykunayuqmi, tecnología nisqapipas qhapaqmi.

Suyachkani kay yanapakuypa yanapayninwan kay pachapi runakunaqa kimsa kurkuyuq runakuna hina kanankuta, rimanakuy mana simiwan hark’asqa kananta, llapa runa hukmanta hukllachasqa kananta.

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
