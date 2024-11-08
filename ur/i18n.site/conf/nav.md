# حسب ضرورت نیویگیشن

نیویگیشن کو کس طرح اپنی مرضی کے مطابق بنانا ہے اس کی وضاحت کے لیے ڈیمو سائٹ کو ایک مثال کے طور پر لیتے ہیں [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

مندرجہ بالا اعداد و شمار میں نمبر والے علاقوں سے متعلق فائلیں مندرجہ ذیل ہیں:

1. بائیں [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. دائیں [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ایک ٹیمپلیٹ لینگویج ہے جو `HTML` کی تخلیق کرتی ہے۔

[➔ گرامر سیکھنے کے لیے یہاں کلک کریں pug](https://pugjs.org)

فارمیٹ سٹرنگ `${I18N.sponsor}` فائل میں بین الاقوامی بنانے کے لیے استعمال کیا جاتا ہے، اور اس کے مواد کو ماخذ زبان کی ڈائرکٹری میں متعلقہ متن سے بدل دیا جائے گا [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`css` اور `js` `pug` میں نہ لکھیں** ، ورنہ غلطی ہو جائے گی۔

طرزیں `css` میں لکھی جاتی ہیں، اور تعامل ویب اجزاء بنا کر حاصل کیا جاتا ہے۔

یہاں، نیویگیشن بار کے انداز سے متعلق فائل ہے : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)