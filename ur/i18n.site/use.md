# انسٹال کریں &

## انسٹال کریں۔

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## کنفیگریشن ٹوکن

`i18n.site` میں `i18` ترجمہ ٹول ہے براہ کرم [رسائی ٹوکن کو ترتیب دینے کے لیے `i18` دستاویز کا حوالہ دینے کے لیے یہاں کلک کریں](/i18/use) ۔

## ڈیمو پروجیکٹ

آئیے `i18n.site` استعمال کرنے کا طریقہ سیکھنے کے لیے ایک ڈیمو پروجیکٹ کے ساتھ شروع کریں۔

ہم پہلے ڈیمو ریپوزٹری کو کلون کرتے ہیں اور کمانڈ کو اس طرح چلاتے ہیں:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

مین لینڈ چین میں صارفین یہ کر سکتے ہیں:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` کوڈ بیس کلون کا ڈائرکٹری کا نام `md` ہونا چاہیے تاکہ `docker` کے ساتھ مقامی پیش نظارہ کی سہولت فراہم کی جا سکے۔

### ترجمہ

سب سے پہلے، `md` ڈائرکٹری داخل کریں اور `i18n.site` چلائیں، جو `en` سے `zh` ترجمہ کرے گی۔

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

چلانے کے بعد، ترجمہ اور کیش فائلیں تیار ہو جائیں گی، براہ کرم انہیں `md` `git add . ` میں ریپوزٹری میں شامل کرنا یاد رکھیں۔

### مقامی پیش نظارہ

`docker` انسٹال اور شروع کریں ( `MAC` صارف تجویز کرتا ہے [orbstack](https://orbstack.dev) `docker` کے لیے رن ٹائم کے طور پر استعمال کریں)۔

پھر، `docker` ڈائرکٹری داخل کریں اور `./up.sh` چلائیں، اور پھر مقامی طور پر پیش نظارہ کرنے کے لیے ملاحظہ کریں [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">