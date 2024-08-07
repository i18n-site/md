# i18n/conf.yml

کنفیگریشن فائل ہے `.i18n/conf.yml` `i18n.site`

سوائے `ignore:` اور `i18n:` کی ترتیبات کے [`i18`](/i18) کنفیگریشن فائل درج ذیل ہے:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

ان میں سے `ext:` کنفیگریشن آئٹم کا مطلب `upload` کہ اشاعت کے وقت صرف `.md` اپ لوڈ کیا جائے گا۔

## سب سے اوپر نیویگیشن nav

کنفیگریشن کے اختیارات `nav:` ہوم پیج کے اوپری حصے میں موجود نیویگیشن مینو کے مطابق۔

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ان میں سے، `en/i18n.yml`中`home: Home` کے مساوی ہے `i18n: home`

متعدد زبانوں میں ترجمہ کیا جائے گا، جیسے `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

ترجمہ مکمل ہونے کے بعد، آپ ترجمہ میں `yml` قدر میں ترمیم کر سکتے ہیں، لیکن ترجمہ `yml` کی کلید کو شامل یا حذف نہ کریں۔

### `use: Toc` ، سنگل فائل ٹیمپلیٹ (خارہ کے ساتھ)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` کا مطلب ہے `Toc` رینڈرنگ، جو ایک `Markdown` ٹیمپلیٹ پیش کر رہا ہے۔

`Table of Contents` مخفف `TOC` جب یہ ٹیمپلیٹ پیش کیا جائے گا، اس `Markdown` فائل کا خاکہ سائڈبار میں دکھایا جائے گا۔

`Markdown` کے فائل پاتھ کی نمائندگی کرتا ہے ( `/` روٹ ڈائرکٹری سے مطابقت رکھتا ہے `/README.md` `url:` اس فائل کے نام کے لیے بڑے حروف کا سابقہ ​​اور ایک چھوٹے کا لاحقہ درکار ہے)۔

### `use: Md` ، سنگل فائل ٹیمپلیٹ (کوئی خاکہ نہیں)

`Md` `Toc` جیسا ہی ہے، دونوں ایک ہی `Markdown` فائل کو رینڈر کرنے کے لیے استعمال ہوتے ہیں۔ تاہم `Md` ٹیمپلیٹ سائڈبار میں خاکہ نہیں دکھاتا ہے۔

آپ مندرجہ بالا ترتیب میں `use: Toc` کر سکتے ہیں `use: Md` ، چلائیں `i18n.site` دوبارہ `md` ڈائرکٹری میں، اور پھر ہوم پیج پر تبدیلیوں کا مشاہدہ کرنے کے لیے ڈیولپمنٹ کا پیش نظارہ URL ملاحظہ کریں۔

### کنفیگریشن پاتھ کے بغیر ڈیفالٹ لوڈنگ

اگر کسی مخصوص راستے تک رسائی `Md` کرنے کے `MarkDown` کا سابقہ `nav:`

مثال کے طور پر، اگر آپ ملاحظہ کریں `/test` ، اور `nav:` اس راستے کے بغیر ترتیب دیا گیا ہے، اور صفحہ کی زبان انگریزی ہے (کوڈ `en` )، ٹیمپلیٹ کو بطور ڈیفالٹ لوڈ کیا جائے گا `/en/test.md` اور پیش کیا جائے گا `Md` ۔

اگر یہ فائل موجود نہیں ہے `/en/test.md` پہلے سے طے شدہ `404` صفحہ دکھایا جائے گا۔

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` ملٹی فائل ٹیمپلیٹ

کنفیگریشن فائل میں:

```
  - i18n: blog
    use: Doc
```

ٹیمپلیٹ رینڈرنگ کے لیے استعمال کرتے ہوئے اشارہ کرتا ہے `Doc`

ٹیمپلیٹ ایک یا ایک سے زیادہ پروجیکٹس کے لیے دستاویز کی خاکہ تیار کرنے کے لیے متعدد `MarkDown` یکجا کرنے کی حمایت کرتا ہے `Doc`

#### سنگل پروجیکٹ (متعدد فائلیں)

اوپر میں `Doc` کا واحد پروجیکٹ موڈ ہے `blog`

```
  - i18n: blog
    url: blog
    use: Doc
```

##### جب url خالی ہوتا ہے، تو یہ i18n کی قدر سے پہلے سے طے شدہ ہوتا ہے۔

اگر آپ نہیں لکھتے ہیں `url` ، `i18n` کی قیمت پر یہ اصول دوسرے سانچوں پر بھی لاگو `url` ہے۔

اوپر لکھنے کا طریقہ رکھنے کے مترادف ہے `url: blog` اور اس کی متعلقہ فائل `en/blog/TOC` ہے۔

#### متعدد منصوبوں

`i18n:doc` میں کنفیگریشن ملٹی پروجیکٹ موڈ ہے `.i18n/conf.yml`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

یہاں، ڈراپ ڈاؤن مینو کو رینڈر کرنے کے لیے `NB` استعمال کرنا `menu: NB demo1,demo2` ۔

`NB` ، `Name Breif` کا مخفف ہے، جس سے ظاہر ہوتا ہے کہ ڈراپ ڈاؤن مینو پروجیکٹ کا نام اور نعرہ دکھا سکتا ہے۔

`NB` کے بعد پیرامیٹر `demo1,demo2` اس کو دیا گیا۔
نوٹ کریں کہ `,` کوما `demo1,demo2` پہلے اور بعد میں ** خالی جگہ نہیں ہونی چاہیے : **

مندرجہ بالا پیرامیٹرز کے لئے، متعلقہ ڈائریکٹری انڈیکس فائل ہے:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC مشمولات کا اشاریہ

ڈائرکٹری انڈیکس فائل `doc` ٹیمپلیٹ کنفیگریشن کے مطابق `TOC` `json` ڈائرکٹری آؤٹ لائن بنانے کے لیے ڈیمو گودام میں `js` پلگ ان `.i18n/hook/after.tran/TOC.js` انجام دے گا `i18n.site`

اگر آپ `doc` استعمال کرتے ہیں، تو آپ کے پاس یہ پلگ ان ہونا ضروری ہے۔

اگر آپ ایک خالی فولڈر سے `i18n.site` شروع کرتے ہیں تو، ڈیمو پروجیکٹ میں `.i18n` اپنی ڈائرکٹری میں کاپی کرنا یاد رکھیں۔

ٹیمپلیٹ تیار کردہ `json` کی بنیاد پر مشمولات کا خاکہ پیش کرے گا `Doc`

##### تفصیلی مواد کی وضاحت

مندرجہ ذیل مواد : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### سطحوں کی نشاندہی کرنے کے لیے انڈینٹیشن کا استعمال کریں۔

اوپر `en/blog/TOC` پہلی لائن میں `README.md` نیچے دی گئی تصویر میں `i18n.site` سے مساوی ہے، جو کہ پروجیکٹ کا نام ہے۔

اگلی دو سطریں ہیں جیسا کہ نیچے اسکرین شاٹ میں دکھایا گیا ہے۔

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`News` سے مماثل ہے `news/README.md`
`Our Product is Online !` سے مماثل `news/begin.md`

فائل کو آؤٹ لائن کے درجہ بندی کے تعلق کی نشاندہی کرنے کے لیے انڈینٹ کیا `TOC` ہے اور ملٹی لیول انڈینٹیشن کو سپورٹ کرتا ہے۔

##### پیرنٹ لیول صرف عنوان لکھتا ہے، مواد نہیں۔

جب انڈینٹیشن کی متعدد سطحیں ہوتی ہیں، تو پیرنٹ لیول صرف عنوان لکھتا ہے نہ کہ مواد۔ دوسری صورت میں، نوع ٹائپ گڑبڑ ہو جائے گا.

##### پروجیکٹ README.md 

پروجیکٹ کا، مثال کے طور پر، آپ `en/demo2/README.md` میں مواد لکھ سکتے ہیں `README.md`

نوٹ کریں کہ اس فائل کا مواد مندرجات کا خاکہ نہیں دکھاتا، اس لیے لمبائی کو محدود کرنے اور مختصر تعارف لکھنے کی سفارش کی جاتی ہے۔

###### پروجیکٹ کا نعرہ

جیسا کہ آپ دیکھ سکتے ہیں `Deme Two` ڈراپ ڈاؤن مینو اور کیٹلاگ کے نیچے پروجیکٹ کا نعرہ ہے `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: پہلی سطر کے مساوی ہے `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

پروجیکٹ `README.md` پہلے درجے کے عنوان میں پہلی بڑی `:` کے بعد کے مواد کو پروجیکٹ کا نعرہ سمجھا جائے گا۔

چین، جاپان اور کوریا کے صارفین، براہ کرم نوٹ کریں کہ آپ کو پوری چوڑائی والی بڑی آنت کی بجائے آدھی چوڑائی والی بڑی آنت کا استعمال کرنا چاہیے `:`

##### TOC کو بلک میں کیسے منتقل کیا جائے؟

فائل کو ماخذ زبان کی ڈائرکٹری میں رکھنے کی ضرورت ہے `TOC`

مثال کے طور پر، اگر ماخذ زبان چینی ہے، تو اوپر ہے `zh/blog/TOC` `TOC`

اگر ماخذ کی زبان میں ترمیم کی گئی ہے، تو آپ کو پروجیکٹ کی ایک مخصوص زبان میں `TOC` دوسری زبان میں منتقل کرنے کی ضرورت ہے۔

آپ درج ذیل کمانڈز کا حوالہ دے سکتے ہیں۔

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

براہ `zh/` اوپر والے کمانڈ میں اپنے زبان کے کوڈ میں ترمیم کریں `en/`


