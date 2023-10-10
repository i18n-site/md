<h1 style="justify-content:space-between">3Ti.Siti · Yuyaykuy Mana Fronterakunayuq<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, achka simiyuq mana kuyukuq sitio ruwaq, kikinmanta Markdown [pachakmanta aswan hukniray simikunaman](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tikrayta atin .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Wakin runakuna tapuyta munankuman, kunan navegadorkuna tikray ruwanakuna ruwasqayuq kasqankurayku, ¿mana necesariochu web kitita internacionalización ruway?

Munani **niyta tukuy sitiota internacionalizaspalla yanapayta atiykuman achka simiyuq sitiopi hunt'asqa qillqa maskana chaymanta maskana motor allinchay** .

## Qati Qati

"Biblia·Génesis".:

> Ñawpa pachakunapi, simi huklla kaptin, runa kayqa hatun sunquyuqmi paqarirqa. Paykunaqa huk hatun wasi ruwaytan maskharqanku, chay torreqa hanaq pachatan llamiykurqan.
>
> Ichaqa, Divino, hatunchakusqankuwan mana kusisqa kaspan, runakunata kay pachaman ch’eqechirqan, qallunkuta mana entiendenakunankupaq.
>
> Chaymantapachan runakunaqa sasachakurqanku rimanakunankupaq, ch’aqwaykunapas mana tukukuqmi hatarirqan, kay pachapas manañan rikurqankuñachu hanaq pachaman chayaq torreta.

&quot;Kimsa-Kurku&quot; (China simipi t'uqyay: `3Ti` ) ciencia ficción nisqa novelaqa huk hawa llaqtayuq civilización nisqatam ficcionalizan, chaymi electromagnética olakunawan rimanakunku, mana simi hark'aykunayuqmi, tecnología nisqapipas qhapaqmi.

Suyachkani kay yanapakuypa yanapayninwan kay pachapi runakunaqa kimsa kurkuyuq runakuna hina kanankuta, rimanakuy mana simiwan hark’asqa kananta, llapa runa hukmanta hukllachasqa kananta.

## Yachachiy

## Ruway Riqsichikuy

### Formato De Markdown Nisqapi Waqaychay

### Traducciónta Modificay

Tikrayta tikraspaykiqa, `./i18n.sh` musuqmanta purichinayki, waqaychanata musuqyachinaykipaq.

### Traducción Nisqamanta Notas

Tikray rimaykunaqa \``` nisqamanta qhipaman simita rikuchinan tiyan, ahinataq ` ```rust` .

Kunanqa yanapakunmi rimay tikrayta rust, c, cpp, java, js, café, python, chaymanta bash kaqpaq.

[tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) llamk'apuy, aswan simikunapi rimaykunapaq tikray yanapakuy yapanaykipaq.

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
