# پێشبینی دامەزراندن &

## دامەزراندن

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## نیشانەی ڕێکخستن

`i18n.site` ئامرازێکی وەرگێڕانی `i18` ی ناوەکی هەیە تکایە [کلیک لێرە بکە بۆ ئاماژەدان بە بەڵگەنامەی `i18` بۆ ڕێکخستنی نیشانەی دەستڕاگەیشتن](/i18/use) .

## پڕۆژەی دیمۆ

با لە پرۆژەیەکی دیمۆوە دەست پێ بکەین بۆ ئەوەی فێربین چۆن `i18n.site` بەکاربهێنین.

سەرەتا کۆگای دیمۆکە کلۆن دەکەین و فەرمانەکە بەم شێوەیە جێبەجێ دەکەین:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

بەکارهێنەرانی چین دەتوانن:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

ناوی بەڕێوەبەرایەتی کلۆنی بنەڕەتی کۆدی `demo.i18n.site` دەبێت `md` بێت بۆ ئاسانکاری پێشبینیکردنی ناوخۆیی لەگەڵ `docker` .

### وەرگێڕان

سەرەتا دایرێکتۆری `md` داخڵ بکە و `i18n.site` جێبەجێ بکە کە `en` وەرگێڕان دەکات بۆ `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

دوای جێبەجێکردن، فایلەکانی وەرگێڕان و کاش دروست دەبن تکایە لەبیرت بێت زیادیان بکەیت بۆ کۆگاکە لە `git add . ` `md` .

### پێشبینی ناوخۆیی

دامەزراندن و دەستپێکردنی `docker` ( `MAC` بەکارهێنەر پێشنیاری بەکارهێنانی [orbstack](https://orbstack.dev) وەک کاتی جێبەجێکردن بۆ `docker` ).

پاشان، دایرێکتۆری `docker` داخڵ بکە و `./up.sh` جێبەجێ بکە، و پاشان سەردانی [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">