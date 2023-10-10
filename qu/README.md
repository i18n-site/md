<h1 style="justify-content:space-between">3Ti.Siti · Mana Fronterayuq Yuyay<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, achka simiyuq mana kuyukuq sitio ruwaq, kikinmanta Markdown [pachakmanta aswan hukniray simikunaman](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tikrayta atin .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Wakin runakuna tapuyta munankuman, kunan navegadorkuna tikray ruwanakuna ruwasqayuq kasqankurayku, ¿mana necesariochu web kitita internacionalización ruway?

Munani **niyta tukuy sitiota internacionalizaspalla yanapayta atiykuman achka simiyuq sitiopi hunt'asqa qillqa maskana chaymanta maskana motor allinchay** .

## Qallariy

Biblia · Génesis :

> Ñawpa pachakunapi, simikuna huklla kaptin, runa kayqa hanaq pachaman chayaq torreta ruwarqanku, Diospa kamachiyninman haykunapaq punkuta, runaq atiyninta willaspa.
>
> Diosmi willarqan: "Runakunaqa hukllachakunku huk ayllu hina, huk simillawan, kay torretaq huk prologolla. Kunanqa munasqankuta hunt'anku, manañan manchakuy kanqachu".
>
> Chhaynapin Diosqa uraykamurqan, imaymana k’uchukunaman runakunata ch’eqechispa, hukniray simikunata rimaspa.
>
> Chaymantapachan runakunaq rimanakuynin sasachakuyman tukupurqan, ch’aqwaykunapas mana tukukuqmi kapurqan, manañan hanaq pachata llamiq torrepas karqanñachu.

&quot;Kimsa-Kurku&quot; (China simipi t'uqyay: `3Ti` ) ciencia ficción nisqa novelaqa huk hawa llaqtayuq civilización nisqatam ficcionalizan, chaymi electromagnética olakunawan rimanakunku, mana simi hark'aykunayuqmi, tecnología nisqapipas qhapaqmi.

Suyachkani huk yanapakuyta paqarichiyta, chaywanmi kay pachapi runakuna kimsa kurkuyuq runakuna hina kanankupaq, rimaywan mana watasqa kaspa rimanakunankupaq, llapa runakunata yapamanta hukllawanankupaq.

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
