# انسٹال کریں اور استعمال کریں۔

## ونڈوز پہلے گٹ باش انسٹال کریں۔

سسٹم windows [پہلے `git bash` ڈاؤن لوڈ اور انسٹال کرنے کے لیے یہاں کلک کریں](https://git-scm.com/download/win) ۔

`git bash` میں بعد کے آپریشنز چلائیں۔

## انسٹال کریں۔

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### ترجمہ ٹوکن کنفیگر کریں۔

ٹوکن کاپی کرنے کے لیے کلک کریں [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` بنائیں، اس میں کاپی شدہ مواد پیسٹ کریں، مواد درج ذیل ہے:

```
token: YOUR_API_TOKEN
```

اس کے علاوہ، آپ [کو](/#price) ادائیگی کے کریڈٹ کارڈ کا پابند کرنا ہوگا [i18n.site/payBill](//i18n.site/payBill)

## استعمال کریں

### ڈیمو پروجیکٹ

`i18` ترجمہ کی ترتیب سیکھنے کے لیے براہ کرم ڈیمو پروجیکٹ کا حوالہ دیں [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

چین میں صارفین کلون کر سکتے ہیں [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

کلوننگ کے بعد، ڈائریکٹری درج کریں اور ترجمہ مکمل کرنے کے لیے `i18` چلائیں۔

### ڈائریکٹری کا ڈھانچہ

ٹیمپلیٹ گودام ڈائریکٹری ڈھانچہ مندرجہ ذیل ہے۔

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` ڈائرکٹری میں ترجمہ شدہ ڈیمو فائلیں صرف ایک مثال ہیں اور انہیں حذف کیا جا سکتا ہے۔

### ترجمہ چلائیں۔

ڈائریکٹری درج کریں اور ترجمہ کرنے کے لیے `i18` چلائیں۔

ترجمہ کے علاوہ، پروگرام `.i18n/data` فولڈر بھی تیار کرے گا، براہ کرم اسے ذخیرہ میں شامل کریں۔

نئی فائل کا ترجمہ کرنے کے بعد، اس ڈائرکٹری میں ایک نئی ڈیٹا فائل تیار کی جائے گی `git add . ` شامل کرنا یاد رکھیں۔

## کنفیگریشن فائل

`.i18n/conf.yml` `i18` کمانڈ لائن ٹرانسلیشن ٹول کی کنفیگریشن فائل ہے۔

مندرجہ ذیل مواد ہے:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ماخذ کی زبان &

کنفیگریشن فائل میں، `fromTo` کا ماتحت:

`en` ماخذ کی زبان ہے، `zh ja ko de fr` ترجمہ کی ہدف کی زبان ہے۔

زبان کا کوڈ دیکھیں [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

مثال کے طور پر، اگر آپ چینی کا انگریزی میں ترجمہ کرنا چاہتے ہیں، تو اس لائن کو دوبارہ لکھیں `zh: en` ۔

اگر آپ تمام معاون زبانوں میں ترجمہ کرنا چاہتے ہیں، تو براہ کرم `:` کے بعد خالی چھوڑ دیں۔ مثال کے طور پر

```
i18n:
  fromTo:
    en:
```

آپ مختلف ذیلی ڈائرکٹریز کے لیے مختلف `fromTo` ترتیب دے سکتے : /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

اس کنفیگریشن ٹیبل میں، کیٹلاگ `blog` ترجمہ کی ماخذ زبان `zh` ہے، اور کیٹلاگ `blog/your_file_name.md` ترجمہ کی ماخذ زبان `ja` ہے۔

### کثیر لسانی تصاویر/ لنکس

جب `replace:` اور `MarkDown` میں تصویروں اور لنکس میں یو آر ایل (اور ایمبیڈڈ `HTML` کے `src` اور `href` اوصاف) کو اس سابقے کے ساتھ `.i18n/conf.yml` میں کنفیگر کیا جاتا ہے، تو URL میں سورس لینگویج کوڈ کو ترجمہ کے لینگویج کوڈ سے بدل دیا جائے گا [۔ کوڈ کی فہرست](/i18/LANG_CODE) )۔

مثال کے طور پر، آپ کی ترتیب مندرجہ ذیل ہے:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ایک لغت ہے، کلید یو آر ایل کا سابقہ ہے جسے تبدیل کیا جانا ہے، اور قدر متبادل اصول ہے۔

اوپر قاعدہ `ko de uk>ru zh-TW>zh >en` تبدیل کرنے کا مطلب یہ ہے کہ `ko de` اپنی زبان کے کوڈ کی تصویر استعمال کرتا ہے، `zh-TW` اور `zh` `zh` کی تصویر استعمال کرتا ہے، `uk` `ru` کی تصویر استعمال کرتا ہے، اور دوسری زبانیں (جیسے `ja` ) تصویر استعمال کرتی ہیں۔ بطور ڈیفالٹ `en` ۔

مثال کے طور پر، `MarkDown` کی فرانسیسی ( `fr` ) سورس فائل درج ذیل ہے :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

ترجمہ شدہ اور تیار کردہ انگریزی ( `en` ) فائل درج ذیل ہے :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

یہاں، ماخذ زبان کے کوڈ میں `/en/` ہدف کی زبان میں `/zh/` سے بدل دیا جاتا ہے۔

نوٹ : یو آر ایل میں تبدیل کیے گئے لینگویج کوڈ سے پہلے اور بعد میں `/` ہونا چاہیے۔

> [!TIP]
> اگر `- /` `url:` میں کنفیگر کیا گیا ہے، تو صرف متعلقہ راستے ہی مماثل ہوں گے، لیکن `//` سے شروع ہونے والے یو آر ایل کو نہیں ملایا جائے گا۔
>
> اگر ڈومین نام کے کچھ لنکس کو تبدیل کرنا چاہتے ہیں اور کچھ کو تبدیل نہیں کرنا چاہتے ہیں، تو آپ ان میں فرق کرنے کے لیے مختلف سابقے جیسے `[x](//x.com/en/)` اور `[x](https://x.com/en/)` استعمال کر سکتے ہیں۔

### فائل کو نظر انداز کریں

بطور ڈیفالٹ، سورس لینگویج ڈائرکٹری میں `.md` اور `.yml` سے شروع ہونے والی تمام فائلوں کا ترجمہ کیا جائے گا۔

اگر آپ کچھ فائلوں کو نظر انداز کرنا چاہتے ہیں اور ان کا ترجمہ نہیں کرنا چاہتے ہیں (جیسے نامکمل مسودے)، تو آپ اسے `ignore` فیلڈ کے ساتھ کنفیگر کر سکتے ہیں۔

`ignore` نحو کو `.gitignore` فائل کی طرح استعمال کرتا ہے [globset](https://docs.rs/globset/latest/globset/#syntax)

مثال کے طور پر، اوپر کی کنفیگریشن فائل میں `_* ` کا مطلب ہے کہ `_` سے شروع ہونے والی فائلوں کا ترجمہ نہیں کیا جائے گا۔

## ترجمے کے قواعد

### ترجمہ ایڈیٹرز کو لائنوں کو شامل یا حذف نہیں کرنا چاہئے۔

ترجمہ قابل تدوین ہے۔ اصل متن میں ترمیم کریں اور مشین سے اس کا دوبارہ ترجمہ کریں، ترجمہ میں دستی ترمیم کو اوور رائٹ نہیں کیا جائے گا (اگر اصل متن کے اس پیراگراف میں ترمیم نہیں کی گئی ہے)۔

> [!WARN]
> ترجمہ کی سطروں اور اصل متن کے درمیان ون ٹو ون خط و کتابت ہونی چاہیے۔ یعنی ترجمہ مرتب کرتے وقت سطریں شامل یا حذف نہ کریں۔ بصورت دیگر، یہ ترجمے کی تدوین کیش میں الجھن پیدا کرے گا۔

اگر کچھ غلط ہو جاتا ہے تو، براہ کرم [حل کے لیے اکثر پوچھے گئے سوالات سے رجوع کریں۔](/i18/qa#H1)

### `YAML` ترجمہ

کمانڈ لائن ٹول سورس لینگویج فائل ڈائرکٹری میں `.yml` سے ختم ہونے والی تمام فائلوں کو تلاش کرے گا اور ان کا ترجمہ کرے گا۔

* نوٹ کریں کہ فائل نام کا لاحقہ `.yml` ہونا چاہیے ( `.yaml` نہیں)۔

یہ ٹول صرف ڈکشنری کی قدروں کا ترجمہ `.yml` میں کرتا ہے، ڈکشنری کیز کا نہیں۔

مثال کے طور پر `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` کے طور پر ترجمہ کیا جائے گا۔

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` کا ترجمہ دستی طور پر بھی تبدیل کیا جا سکتا ہے (لیکن ترجمے میں کلیدیں یا لائنیں شامل یا حذف نہ کریں)۔

`YAML` ترجمہ کی بنیاد پر، آپ مختلف پروگرامنگ زبانوں کے لیے بین الاقوامی حل آسانی سے بنا سکتے ہیں۔

## اعلی درجے کا استعمال

### ترجمہ ذیلی ڈائرکٹری

جب تک `.i18n/conf.yml` بنایا جاتا ہے (ہر بار ڈیمو پروجیکٹ ٹیمپلیٹ سے شروع کرنے کی ضرورت نہیں)، `i18` ٹھیک کام کرے گا۔

کمانڈ لائن ٹول تمام ذیلی ڈائریکٹریوں میں `.i18n/conf.yml` کنفیگریشن تلاش کرے گا اور ان کا ترجمہ کرے گا۔

وہ پروجیکٹ جو [monorepo](//monorepo.tools) تعمیر کو استعمال کرتے ہیں وہ زبان کی فائلوں کو ذیلی ڈائریکٹریوں میں تقسیم کر سکتے ہیں۔

![](https://p.3ti.site/1719910016.avif)

### کسٹم انسٹالیشن ڈائرکٹری

یہ بطور ڈیفالٹ `/usr/local/bin` پر انسٹال ہوگا۔

اگر `/usr/local/bin` لکھنے کی اجازت نہیں ہے تو اسے `~/.bin` پر انسٹال کر دیا جائے گا۔

ماحول متغیر `TO` کی ترتیب انسٹالیشن ڈائرکٹری کی وضاحت کر سکتی ہے، مثال کے طور پر :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```