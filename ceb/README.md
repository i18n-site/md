<h1 style="justify-content:space-between">3Ti.Site · Paghunahuna nga Walay Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Ang 3Ti.Site, usa ka static nga site generator, mahimong awtomatikong maghubad sa Markdown ngadto sa [labaw sa usa ka gatos ka lain-laing mga pinulongan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mahimong mangutana ang pipila ka mga tawo, karon nga ang mga browser adunay mga built-in nga mga gimbuhaton sa paghubad, dili ba kinahanglan nga i-internationalize ang website?

Gusto nakong isulti nga **pinaagi lamang sa pag-internationalize sa tibuok site masuportahan namo ang multi-lingual in-site nga full-text nga pagpangita ug search engine optimization** .

## Pasiuna

Bibliya · Genesis :

> Sa karaang mga panahon, sa dihang usa pa ang mga pinulongan, ang katawhan nagtukod ug usa ka torre nga moabot hangtod sa langit, usa ka ganghaan ngadto sa dominyo sa Diyos, nga nagmantala sa gahom sa katawhan.
>
> Ang Dios nagpahayag, "Ang mga tawo nagkahiusa ingon nga usa ka banay, uban ang usa ka sinultihan, ug kini nga torre usa lamang ka pasiuna. Karon ilang makab-ot ang ilang tinguha, ug wala nay kahadlok."
>
> Busa, ang Dios mikunsad, nagpatibulaag sa mga tawo ngadto sa lain-laing mga suok, naggamit sa lain-laing mga pinulongan.
>
> Sukad niadto, ang komunikasyon sa tawo nahimong mahagiton, ang mga panaglalis walay katapusan, ug wala nay usa ka torre nga mitandog sa langit.

Ang science fiction nga nobela nga &quot;Three-Body&quot; (Intsik nga paglitok: `3Ti` ) nagmugna sa usa ka langyaw nga sibilisasyon nga nakigkomunikar pinaagi sa electromagnetic waves, walay mga babag sa pinulongan, ug sa teknolohiya mauswagon.

Nanghinaut ko nga makahimo og himan nga makapahimo sa mga tawo sa yuta nga mahisama sa tulo-ka-lawas nga mga tawo, makig-istorya nga dili gapuson sa pinulongan, ug maghiusa pag-usab sa tanang katawhan.

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
