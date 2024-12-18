# مصنوعات کی خصوصیات

## `i18` ترجمے مربوط

پروگرام میں بلٹ ان `i18` ترجمہ ہے، براہ کرم مخصوص استعمال کے لیے [➔ `i18` دستاویز](/i18) دیکھیں۔

## براؤزر کی زبان کو خود بخود میچ کریں۔

ویب سائٹ کی ڈیفالٹ زبان خود بخود براؤزر کی زبان سے مماثل ہو جائے گی۔

صارف کے دستی طور پر زبانوں کو تبدیل کرنے کے بعد، صارف کی پسند کو یاد رکھا جائے گا۔

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## موبائل ٹرمینل موافقت

موبائل فون پر پڑھنے کا بہترین تجربہ بھی ہے۔

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> سامنے کے آخر میں اعلی دستیابی

`i18n.site` سائٹ کے مواد کو بطور ڈیفالٹ `npmjs.com` پر شائع کرے گا [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) اور `npm` پر لوڈ کردہ دیگر `CDN` مواد۔

اس بنیاد پر، مین لینڈ چین سے آئینے کے ذرائع کو شامل کیا گیا تاکہ چینی صارفین کو مستحکم رسائی حاصل ہو اور **اعلیٰ فرنٹ اینڈ دستیابی** حاصل ہو سکے۔

اصول یہ ہے کہ: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) کے ساتھ درخواستوں کو روکیں، دوسرے `CDN` پر ناکام درخواستوں کی دوبارہ کوشش کریں، اور سب سے تیز جواب دینے والی اصل سائٹ کو پہلے سے طے شدہ لوڈنگ سورس کے طور پر انکولی طور پر فعال کریں۔

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## سنگل پیج ایپلیکیشن، انتہائی تیز لوڈنگ

ویب سائٹ سنگل پیج ایپلیکیشن آرکیٹیکچر کو اپناتی ہے، صفحات کو سوئچ کرتے وقت اور انتہائی تیز لوڈنگ کے دوران ریفریش کے بغیر۔

## پڑھنے کے تجربے کے لیے موزوں ہے۔

### اچھی طرح سے ڈیزائن کیا گیا انداز

> اس ویب سائٹ کے ویب ڈیزائن میں سادگی کی خوبصورتی کی بالکل ترجمانی کی گئی ہے۔
> یہ ضرورت سے زیادہ سجاوٹ کو ترک کرتا ہے اور مواد کو اپنی خالص ترین شکل میں پیش کرتا ہے۔
> ایک خوبصورت نظم کی طرح اگرچہ یہ مختصر ہے لیکن لوگوں کے دلوں کو چھو لیتی ہے۔

<p style="text-align:right" style=";text-align:right;direction:rtl">── مصنف I18N.SITE</p>

[➔ اسٹائل کی فہرست دیکھنے کے لیے یہاں کلک کریں](/i18n.site/md/styl) ۔

### `RSS`

![](//p.3ti.site/1725541085.avif)

اوپر کی تصویر [inoreader.com](//inoreader.com) `i18n.site` استعمال کرتے ہوئے کثیر زبان `RSS` دکھاتی ہے۔

### آن لائن فونٹس لوڈ کریں، چینی کو سپورٹ کریں۔

پہلے سے طے شدہ طور پر [، علیما دوہری محور متغیر مستطیل](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) فونٹس [MiSans](https://hyperos.mi.com/font/zh/download/) اور دیگر آن لائن فونٹس مختلف پلیٹ فارمز پر صارفین کے پڑھنے کے تجربے کو یکجا کرنے کے لیے ویب پیج پر فعال کیے گئے ہیں۔

اسی وقت، لوڈنگ کی رفتار کو بہتر بنانے کے لیے، الفاظ کی فریکوئنسی کے اعداد و شمار کے مطابق فونٹس کو کاٹا جاتا ہے۔

[github.com/i18n-site/font](https://github.com/i18n-site/font) :

### سرفہرست نیویگیشن خود بخود پوشیدہ ہے۔

نیچے سکرول کریں اور اوپر کی نیویگیشن خود بخود چھپ جائے گی۔

اوپر سکرول کریں اور پوشیدہ نیویگیشن دوبارہ ظاہر ہوگی۔

جب ماؤس حرکت نہیں کرتا ہے تو یہ ختم ہوجائے گا۔

نیویگیشن بار کے اوپری دائیں کونے میں ایک فل سکرین بٹن موجود ہے تاکہ ایک عمیق دستاویز پڑھنے کا تجربہ بنایا جا سکے۔

### موجودہ باب کی مطابقت پذیر خاکہ کو نمایاں کرنا

مواد کو دائیں طرف سکرول کرتے وقت، بائیں طرف کا خاکہ بیک وقت پڑھے ہوئے باب کو نمایاں کرے گا۔

## ٹھنڈی تفصیلات

### ماؤس اثرات

ٹھنڈے خصوصی اثرات دیکھنے کے لیے اوپر نیویگیشن کے دائیں جانب بٹن پر اپنے ماؤس کو ہوور کریں۔

### `404` چھوٹا بھوت

`404` صفحہ پر ایک پیارا سا تیرتا ہوا بھوت ہے، جس کی آنکھیں ماؤس کے ساتھ چلیں گی، [➔ دیکھنے کے لیے یہاں کلک کریں](/404) ،

## کوڈ اوپن سورس

[کوڈ اوپن سورس ہے](/i18n.site/c/src) اگر آپ ترقی میں حصہ لینے میں دلچسپی رکھتے ہیں تو براہ کرم [میلنگ لسٹ](//groups.google.com/u/2/g/i18n-site) میں اپنا تعارف کرائیں۔

بہت سی چھوٹی ضروریات ہیں جو اہم ہیں لیکن فوری نہیں ہیں، ڈیولپمنٹ ٹیم ان ٹکنالوجیوں کی بنیاد پر کام تفویض کرے گی جن میں آپ اچھے ہیں، اور ضروریات کو تفویض کرتے ہوئے ترقیاتی دستاویزات کو بہتر بنائیں گے۔