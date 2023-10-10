<h1 style="justify-content:space-between">3Ti.Site · Hunahunaa ang Walay Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ang 3Ti.Site, usa ka multi-language static site generator, awtomatik nga makahubad sa Markdown ngadto sa [labaw sa usa ka gatos ka lain-laing mga pinulongan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ang ubang mga tawo tingali gusto nga mangutana, karon nga ang mga browser adunay built-in nga mga gimbuhaton sa paghubad, dili ba kinahanglan nga i-internationalize ang website?

Gusto nakong isulti nga **pinaagi lamang sa pag-internationalize sa tibuok site masuportahan namo ang multi-lingual in-site nga full-text nga pagpangita ug search engine optimization** .

## Pagkasunodsunod

"Bibliya·Genesis":

> Sa karaang mga panahon, sa dihang usa ang pinulongan, ang katawhan natawo nga garboso. Nagtinguha sila sa pagtukod ug usa ka habog nga edipisyo, usa ka torre nga nakaabot sa kalangitan.
>
> Apan, ang Dios, nga wala mahimuot sa ilang pagkamapahitas-on, nagpahinabo sa mga tawo nga magkatibulaag sa tibuok yuta, nga naghimo sa ilang mga dila nga dili masabtan sa usag usa.
>
> Sukad niadto, ang katawhan nanlimbasug sa pagpakigkomunikar, ang mga panagbangi mitungha nga walay kataposan, ug ang kalibotan wala nay nakitang torre nga moabot sa kalangitan.

Ang science fiction nga nobela nga &quot;Three-Body&quot; (Intsik nga paglitok: `3Ti` ) nagmugna sa usa ka langyaw nga sibilisasyon nga nakigkomunikar pinaagi sa electromagnetic waves, walay mga babag sa pinulongan, ug sa teknolohiya mauswagon.

Nanghinaut ko nga uban sa tabang niini nga himan, ang mga tawo sa yuta mahisama sa tulo ka lawas nga mga tawo, ang komunikasyon dili mapugngan sa pinulongan, ug ang tanang katawhan mahiusa pag-usab.

## Tutorial

## Pasiuna Sa Function

### Ipadayon Ang Markdown Format

### Usba Ang Hubad

Human sa pag-usab sa hubad, kinahanglan nimo nga modagan pag-usab `./i18n.sh` aron ma-update ang cache.

### Mga Nota Sa Paghubad

Ang mga komento sa paghubad kinahanglang magpakita sa pinulongan human sa \```, sama sa ` ```rust` .

Kasamtangang nagsuporta sa paghubad sa komento alang sa taya, c, cpp, java, js, kape, python, ug bash.

I-edit [ang tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) aron idugang ang suporta sa paghubad alang sa mga komento sa daghang mga pinulongan.

### I-Configure Ang Proxy

Ang pagtakda sa mosunod nga mga variable sa palibot nagtugot sa mga tawag sa Google Translate API nga moagi sa proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Kuhaa Ang Cache

```bash
rm -rf .i18n/.cache
```
