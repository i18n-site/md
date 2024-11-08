# انسٽال ڪريو ۽ استعمال ڪريو

## ونڊوز پهريون ڀيرو گٽ بش انسٽال ڪريو

سسٽم windows مهرباني ڪري [هتي ڪلڪ ڪريو ڊائون لوڊ ۽ انسٽال ڪريو `git bash` پهرين](https://git-scm.com/download/win) .

`git bash` ۾ ايندڙ عملن کي هلائڻ.

## انسٽال ڪريو

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### ترجمي جي ٽوڪن کي ترتيب ڏيو

ٽوڪن کي نقل ڪرڻ لاءِ ڪلڪ [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

ٺاھيو `~/.config/i18n.site.yml` ، ان ۾ ڪاپي ڪيل مواد پيسٽ ڪريو، مواد ھيٺ ڏنل آھي:

```
token: YOUR_API_TOKEN
```

اضافي طور تي، توهان [کي](/#price) ادائيگي جي ڪريڊٽ ڪارڊ کي پابند ڪرڻ جي ضرورت آهي [i18n.site/payBill](//i18n.site/payBill)

## استعمال ڪرڻ

### ڊيمو پروجيڪٽ

`i18` ترجمي جي ترتيب سکڻ لاءِ مهرباني ڪري ڊيمو پروجيڪٽ جو حوالو ڏيو [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

چين ۾ استعمال ڪندڙ کلون ڪري سگهن ٿا [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

ڪلوننگ کان پوء، ڊاريڪٽري ۾ داخل ڪريو ۽ ترجمو مڪمل ڪرڻ لاء `i18` هلائي.

### ڊاريڪٽري جي جوڙجڪ

ٽيمپليٽ گودام ڊاريڪٽري جي جوڙجڪ هن ريت آهي

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` ڊاريڪٽري ۾ ترجمو ٿيل ڊيمو فائلون صرف هڪ مثال آهن ۽ ختم ڪري سگھجن ٿيون.

### ترجمو ڪريو

ڊاريڪٽري داخل ڪريو ۽ `i18` هلائڻ لاء ترجمو ڪريو.

ترجمي کان علاوه، پروگرام `.i18n/data` فولڊر پڻ ٺاهيندو، مھرباني ڪري ان کي مخزن ۾ شامل ڪريو.

نئين فائل کي ترجمو ڪرڻ کان پوء، هن ڊاريڪٽري ۾ هڪ نئين ڊيٽا فائل ٺاهي ويندي `git add . ` شامل ڪرڻ لاء.

## ٺاھ جوڙ فائيل

`.i18n/conf.yml` `i18` ڪمانڊ لائن ترجمي واري اوزار جي ترتيب واري فائل آھي

مواد هن ريت آهي:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ماخذ ٻولي &

ترتيب واري فائل ۾، ماتحت `fromTo` :

`en` ذريعو ٻولي آھي، `zh ja ko de fr` آھي ترجمي جي ھدف واري ٻولي.

ٻولي ڪوڊ ڏسو [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

مثال طور، جيڪڏھن توھان چاھيو ٿا چيني ترجمو انگريزيءَ ۾، ھن لائن کي وري لکو `zh: en` .

جيڪڏھن توھان چاھيو ٿا ترجمو ڪيل سڀني ٻولين ۾، مھرباني ڪري `:` کان پوءِ خالي ڇڏي ڏيو. مثال طور

```
i18n:
  fromTo:
    en:
```

توھان / ذيلي ڊائريڪٽرن لاءِ مختلف `fromTo` ترتيب ڏئي سگھو ٿا ھڪڙي نمائش ھيٺ ڏنل آھي :

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

هن ترتيب واري جدول ۾، ڪيٽلاگ `blog` ترجمي جي ماخذ ٻولي `zh` آهي، ۽ فهرست `blog/your_file_name.md` ترجمي جي ماخذ ٻولي `ja` آهي.

### گهڻ لساني تصويرون/ لنڪ

جڏهن تصويرن ۾ URLs ۽ لنڪس `replace:` ۽ `MarkDown` ۾ (۽ شامل ڪيل `HTML` جون `src` ۽ `href` خاصيتون) هن اڳياڙي سان `.i18n/conf.yml` ۾ ترتيب ڏنل آهن، URL ۾ ماخذ ٻوليءَ جو ڪوڊ بدلجي ويندو ترجمي جي ٻوليءَ جو ڪوڊ ( [ٻولي ڪوڊ لسٽ](/i18/LANG_CODE) ).

مثال طور، توھان جي ترتيب ھيٺ ڏنل آھي:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` هڪ ڊڪشنري آهي، ڪنجي آهي URL اڳياڙي کي تبديل ڪيو وڃي، ۽ قدر آهي متبادل قاعدو.

مٿي ڏنل قاعدي `ko de uk>ru zh-TW>zh >en` کي مٽائڻ جو مطلب اهو آهي ته `ko de` پنهنجي ٻوليءَ جي ڪوڊ جي تصوير استعمال ڪري ٿو، `zh-TW` ۽ `zh` استعمال ڪري ٿو `zh` جي تصوير، `uk` استعمال ڪري ٿو `ru` جي تصوير، ۽ ٻيون ٻوليون (جهڙوڪ `ja` ) تصوير استعمال ڪن ٿيون. ڊفالٽ طور `en` جو.

مثال طور، فرينچ ( `fr` ) سورس فائل جو `MarkDown` هيٺ ڏنل آهي :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

ترجمو ڪيل ۽ ٺاهيل انگريزي ( `en` ) فائيل هن ريت آهي :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

ھتي، ماخذ ٻوليءَ جي ڪوڊ ۾ `/en/` ھدف واري ٻولي ۾ `/zh/` سان تبديل ڪيو ويو آھي.

نوٽ : URL ۾ تبديل ٿيل متن جي ٻولي ڪوڊ کان اڳ ۽ بعد ۾ `/` هجڻ گھرجي.

> [!TIP]
> جيڪڏهن `- /` `url:` ۾ ترتيب ڏنو ويو آهي، صرف لاڳاپيل رستا ملندا، پر `//` سان شروع ٿيندڙ URLs نه ملندا.
>
> جيڪڏهن ڊومين جي نالي جي ڪجهه لنڪ کي تبديل ڪرڻ چاهيو ٿا ۽ ڪجهه تبديل ٿيڻ نٿا چاهيون، توهان انهن کي فرق ڪرڻ لاء مختلف اڳڪٿين جهڙوڪ `[x](//x.com/en/)` ۽ `[x](https://x.com/en/)` استعمال ڪري سگهو ٿا.

### فائل کي نظر انداز ڪريو

ڊفالٽ طور، `.md` ۽ `.yml` سان شروع ٿيندڙ سڀني فائلن جو ماخذ ٻولي ڊاريڪٽري ۾ ترجمو ڪيو ويندو.

جيڪڏهن توهان ڪجهه فائلن کي نظر انداز ڪرڻ چاهيو ٿا ۽ انهن جو ترجمو نه ڪرڻ چاهيو ٿا (جهڙوڪ نامڪمل ڊرافٽ)، توهان ان کي `ignore` فيلڊ سان ترتيب ڏئي سگهو ٿا.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) نحو استعمال ڪري ٿو `.gitignore` فائل.

مثال طور، مٿي ڏنل ترتيب واري فائل ۾ `_* ` جو مطلب آهي ته `_` سان شروع ٿيندڙ فائلن جو ترجمو نه ڪيو ويندو.

## ترجمي جا ضابطا

### ترجمي جي ايڊيٽرن کي لائنن کي شامل يا ختم نه ڪرڻ گھرجي

ترجمو قابل تدوين آهي. اصل متن کي تبديل ڪريو ۽ مشين-ان کي ٻيهر ترجمو ڪريو، ترجمي ۾ دستي ترميمون اوور رائٽ نه ٿينديون (جيڪڏهن اصل متن جي هن پيراگراف ۾ ترميم نه ڪئي وئي آهي).

> [!WARN]
> ترجمي جي لائنن ۽ اصل متن جي وچ ۾ هڪ ٻئي کان هڪ خطوط هجڻ گهرجي. اهو آهي، ترجمي کي گڏ ڪرڻ وقت لائين شامل يا ختم نه ڪريو. ٻي صورت ۾، اهو ترجمي جي ترميمي ڪيش ۾ مونجهارو پيدا ڪندو.

جيڪڏھن ڪجھھ غلط ٿي وڃي، مھرباني ڪري حوالو ڏيو [FAQ حل لاءِ.](/i18/qa#H1)

### `YAML` ترجمو

ڪمانڊ لائن ٽول `.yml` سان ختم ٿيندڙ سڀني فائلن کي سرچ ٻولي فائل ڊاريڪٽري ۾ ڳوليندو ۽ انھن کي ترجمو ڪندو.

* نوٽ ڪريو ته فائل جي نالي جو لاڳاپو `.yml` هجڻ گهرجي (نه `.yaml` ).

اوزار صرف ڊڪشنري جي قيمتن کي `.yml` ۾ ترجمو ڪري ٿو، نه ڊڪشنري ڪيچ.

مثال طور `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` طور ترجمو ڪيو ويندو

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` جو ترجمو پڻ دستي طور تي تبديل ڪري سگھجي ٿو (پر ترجمي ۾ ڪيز يا لائينون شامل يا ختم نه ڪريو).

`YAML` ترجمي جي بنياد تي، توهان آساني سان ٺاهي سگهو ٿا بين الاقوامي حل مختلف پروگرامنگ ٻولين لاءِ.

## ترقي يافته استعمال

### ترجمي جي ذيلي ڊائريڪٽري

جيستائين `.i18n/conf.yml` ٺاھيو ويو آھي (ھر وقت ڊيمو پروجيڪٽ ٽيمپليٽ کان شروع ڪرڻ جي ضرورت نه آھي)، `i18` ٺيڪ ڪم ڪندو.

ڪمانڊ لائن ٽول ملندو `.i18n/conf.yml` ترتيبون سڀني سب ڊاريڪٽريز ۾ ۽ انھن کي ترجمو ڪندي.

پروجيڪٽ جيڪي استعمال ڪن ٿا [monorepo](//monorepo.tools) ٻولي فائلن کي ذيلي ڊائريڪٽرن ۾ ورهائي سگهن ٿا.

![](https://p.3ti.site/1719910016.avif)

### ڪسٽم انسٽاليشن ڊاريڪٽري

اهو ڊفالٽ طور `/usr/local/bin` تي نصب ڪيو ويندو.

جيڪڏهن `/usr/local/bin` لکڻ جي اجازت نه آهي ته اهو `~/.bin` تي نصب ڪيو ويندو.

ماحول جي متغير سيٽنگ `TO` انسٽاليشن ڊاريڪٽري کي بيان ڪري سگھي ٿو، مثال طور :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```