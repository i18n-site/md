<h1 style="justify-content:space-between">I18N.SITE · Pinulongan nga walay utlanan<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

Ang I18N.SITE, usa ka multi-language static site generator, awtomatik nga makahubad sa Markdown ngadto sa [labaw sa usa ka gatos ka lain-laing mga pinulongan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ang ubang mga tawo tingali gusto nga mangutana, karon nga ang mga browser adunay built-in nga mga gimbuhaton sa paghubad, dili ba kinahanglan nga i-internationalize ang website?

Gusto nakong isulti nga **pinaagi lamang sa pag-internationalize sa tibuok site masuportahan namo ang multi-lingual in-site nga full-text nga pagpangita ug search engine optimization** .

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
