# FAQ

## په ناڅاپه توګه `.i18n/v` ړنګ شوی، د `npm` کڅوړه د خپریدو ناکامۍ لامل کیږي

د پیکج `npm` لخوا خپور شوی تاریخي نسخه په `.i18n/v/ol/v.hash` کې خوندي شوی.

که تاسو په ناڅاپي ډول `.i18n/v/ol` بسته `npm` به خوشې نشي.

پدې وخت کې، لومړی د خپلې پروژې د وروستي خوشې شوي نسخې نسخه شمیره ومومئ [npmjs.com](//npmjs.com) د بیلګې په توګه، `0.1.9` .

بیا د فایل جوړولو لپاره لاندې `bash` ته مراجعه وکړئ.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

په یاد ولرئ چې پدې طریقه ترمیم کول به د فایل تاریخ له لاسه ورکړي، دا به ناشونی وي چې راتلونکی ریلیز په تدریجي ډول تازه کړي، او ټول مینځپانګې به یو ځل بیا پیک او اپلوډ شي.