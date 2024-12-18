---

brief: |
  i18n.site اکنون از جستجوی متن کامل بدون سرور پشتیبانی می کند.

  این مقاله پیادهسازی فناوری جستجوی متن کامل جلویی خالص، از جمله نمایه معکوس ساخته شده توسط IndexedDB، جستجوی پیشوند، بهینهسازی تقسیمبندی کلمات و پشتیبانی از چند زبان را معرفی میکند.

  در مقایسه با راهحلهای موجود، جستجوی متن کامل جلویی خالص i18n.site از نظر اندازه کوچک و سریع است، برای وبسایتهای کوچک و متوسط مانند اسناد و وبلاگها مناسب است و بهصورت آفلاین در دسترس است.

---

# جستجوی متن کامل وارونه جلویی خالص

## دنباله

& از چندین هفته توسعه markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

این مقاله اجرای فنی `i18n.site` جستجوی تمام متنی خالص را به اشتراک می گذارد تا اثر جستجو را تجربه کنید [i18n.site](//i18n.site)

[کد](//github.com/i18n-site/plugin/tree/main/qy) [منبع](//github.com/i18n-site/ie/tree/main/qy) / :

## مروری بر راه حل های جستجوی متن کامل بدون سرور

برای وبسایتهای کوچک و متوسط صرفاً ثابت مانند اسناد/وبلاگهای شخصی، ساختن پشتیبان جستجوی متن کامل خودساخته بسیار سنگین است و جستجوی متن کامل بدون سرویس، انتخاب رایجتری است.

راه حل های جستجوی متن کامل بدون سرور به دو دسته کلی تقسیم می شوند:

اول [algolia.com](//algolia.com) ارائه دهندگان خدمات جستجوی شخص ثالث، اجزای جلویی را برای جستجوی متن کامل ارائه می دهند.

چنین خدماتی نیاز به پرداخت بر اساس حجم جستجو دارند و اغلب به دلیل مسائلی مانند انطباق وب سایت برای کاربران در سرزمین اصلی چین در دسترس نیستند.

نمی توان از آن به صورت آفلاین استفاده کرد، نمی توان از آن در اینترانت استفاده کرد و محدودیت های زیادی دارد. این مقاله زیاد بحث نمی کند.

دومی، جستجوی متن کامل جلویی خالص است.

در حال حاضر `lunrjs` جستجوهای تمام متنی خالص [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) شامل [lunrjs](//lunrjs.com)

`lunrjs` دو راه برای ساخت ایندکس وجود دارد و هر دو مشکلات خاص خود را دارند.

1. فایل های شاخص از پیش ساخته شده

   از آنجایی که فهرست شامل کلماتی از همه اسناد است، اندازه آن بزرگ است.
   هر زمان که سندی اضافه یا اصلاح شود، یک فایل فهرست جدید باید بارگذاری شود.
   زمان انتظار کاربر را افزایش می دهد و پهنای باند زیادی مصرف می کند.

2. اسناد را بارگیری کنید و نمایه ها را در پرواز بسازید

   ایجاد یک نمایه یک کار محاسباتی فشرده است.

---

علاوه بر `lunrjs` ، راه حل های جستجوی کامل متن دیگری نیز وجود دارد، مانند :

[fusejs](//www.fusejs.io) شباهت بین رشته ها را برای جستجو محاسبه کنید.

عملکرد این راه حل بسیار ضعیف است و نمی توان از آن برای جستجوی متن کامل استفاده کرد (نگاه کنید به [Fuse.js جستجوی طولانی بیش از 10 ثانیه طول می کشد، چگونه آن را بهینه کنیم؟](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) از فیلتر بلوم برای جستجو استفاده کنید، نمی توان از آن برای جستجوی پیشوند استفاده کرد (به عنوان مثال، `goo` را وارد کنید، جستجوی `good` ، `google` )، و نمی توان به اثر تکمیل خودکار مشابه دست یافت.

به دلیل کاستیهای راهحلهای موجود، `i18n.site` یک راهحل جستجوی کامل متنی خالص جلویی جدید ایجاد کرد که دارای ویژگیهای زیر است :

1. از جستجوی چند زبانه پشتیبانی می `25KB` و اندازه `gzip` `6.9KB` است `lunrjs`
1. یک شاخص معکوس بر اساس `indexedb` بسازید که حافظه کمتری را اشغال می کند و سریع است.
1. هنگامی که اسناد اضافه یا اصلاح می شوند، فقط اسناد اضافه یا اصلاح شده مجدداً نمایه می شوند و میزان محاسبات را کاهش می دهد.
1. از جستجوی پیشوند پشتیبانی می کند و می تواند نتایج جستجو را در زمان تایپ کاربر به صورت بلادرنگ نمایش دهد.
1. آفلاین موجود است

در زیر `i18n.site` جزئیات اجرایی فنی به تفصیل معرفی خواهد شد.

## تقسیم بندی کلمات چند زبانه

بخش بندی کلمه از تقسیم بندی کلمه بومی مرورگر `Intl.Segmenter` استفاده می کند و همه مرورگرهای اصلی از این رابط پشتیبانی می کنند.

![](//p.3ti.site/1727667759.avif)

کد قطعه بندی کلمه `coffeescript` به شرح زیر است

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

در:

* `/\p{P}/` یک عبارت منظم است که با علائم نگارشی مطابقت دارد: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> `split('.')` به این دلیل است که `Firefox` بخش بندی کلمه مرورگر `. ` را تقسیم نمی کند.</li>


## ساختمان شاخص

5 جدول ذخیره شی در `IndexedDB` ایجاد شد :

* `word` کلمه : id -
* `doc` : id - url - شماره نسخه سند
* `docWord` آرایه سند id - id :
* `prefix` : از پیشوند - کلمه id
* `rindex` : id - سند id : آرایه اعداد خط

از آرایه سند `url` و نسخه شماره `ver` عبور کنید و جستجو کنید که آیا سند در جدول `doc` وجود دارد یا خیر. اگر وجود نداشت، یک نمایه معکوس ایجاد کنید. در عین حال، شاخص معکوس را برای اسنادی که وارد نشده اند حذف کنید.

به این ترتیب می توان به نمایه سازی افزایشی دست یافت و میزان محاسبه را کاهش داد.

[در](//juejin.cn/post/7413586285954154522) تعامل جلویی، [نوار](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) پیشرفت بارگیری نمایه / می توان css جلوگیری از progress + در هنگام بارگیری برای اولین بار نمایش داد.

### نوشتن همزمان IndexedDB بالا

این پروژه بر اساس کپسوله [idb](//www.npmjs.com/package/idb) ناهمزمان از IndexedDB

خواندن و نوشتن IndexedDB ناهمزمان است. هنگام ایجاد یک نمایه، اسناد به طور همزمان برای ایجاد نمایه بارگذاری می شوند.

به منظور جلوگیری از از دست دادن جزئی داده های ناشی از نوشتن رقابتی، می توانید به کد `coffeescript` زیر مراجعه کنید و یک حافظه `ing` بین خواندن و نوشتن برای رهگیری نوشته های رقیب اضافه کنید.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## دقت و یادآوری

جستجو ابتدا کلمات کلیدی وارد شده توسط کاربر را تقسیم بندی می کند.

فرض کنید `N` کلمه بعد از تقسیم بندی کلمه وجود دارد در هنگام برگرداندن نتایج، ابتدا نتایج حاوی تمام کلمات کلیدی و سپس نتایج حاوی `N-1` ، `N-2` ،...، `1` کلمه کلیدی برگردانده می شود.

نتایج جستجوی نمایش داده شده ابتدا صحت پرس و جو را تضمین می کند و نتایج بارگیری شده متعاقبا (روی دکمه بارگذاری بیشتر کلیک کنید) نرخ فراخوان را تضمین می کند.

![](//p.3ti.site/1727684564.avif)

## بار در صورت تقاضا

به منظور بهبود سرعت پاسخگویی، جستجو از ژنراتور `yield` برای اجرای بارگیری بر اساس تقاضا استفاده می کند و `limit` بار که یک نتیجه پرس و جو می شود، برمی گردد.

توجه داشته باشید که هر بار که بعد از `yield` دوباره جستجو می کنید، باید تراکنش پرس و جوی `IndexedDB` را دوباره باز کنید.

## پیشوند جستجوی بلادرنگ

به منظور نمایش نتایج جستجو در حین تایپ کاربر، به عنوان مثال، زمانی که `wor` وارد می شود، کلماتی که با پیشوند `wor` مانند `words` و `work` هستند نمایش داده می شوند.

![](//p.3ti.site/1727684944.avif)

هسته جستجو از جدول `prefix` برای آخرین کلمه پس از تقسیم بندی کلمه استفاده می کند تا همه کلمات پیشوند با آن را پیدا کند و به ترتیب جستجو کند.

عملکرد ضد لرزش `debounce` نیز در تعامل جلویی (به شرح زیر اجرا می شود) برای کاهش فرکانس جستجوهای آغازگر ورودی کاربر و کاهش میزان محاسبه استفاده می شود.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## آفلاین موجود است

جدول فهرست، متن اصلی را ذخیره نمی کند، فقط کلمات را ذخیره می کند، که میزان ذخیره سازی را کاهش می دهد.

برجسته کردن نتایج جستجو مستلزم بارگیری مجدد متن اصلی است و تطبیق `service worker` می تواند از درخواست های مکرر شبکه جلوگیری کند.

در عین حال، به دلیل اینکه `service worker` همه مقالات را در حافظه پنهان نگه می دارد، پس از انجام جستجوی کاربر، کل وب سایت، از جمله جستجو، به صورت آفلاین در دسترس است.

## نمایش بهینه سازی اسناد MarkDown

راه حل جستجوی خالص `i18n.site` برای `MarkDown` سند بهینه شده است.

هنگام نمایش نتایج جستجو، نام فصل نمایش داده می شود و با کلیک روی آن فصل پیمایش می شود.

![](//p.3ti.site/1727686552.avif)

## خلاصه کنید

جستجوی متن کامل معکوس صرفاً در قسمت جلویی اجرا شده است، بدون نیاز به سرور. برای وب سایت های کوچک و متوسط مانند اسناد و وبلاگ های شخصی بسیار مناسب است.

`i18n.site` جستجوی فرانتاند خالص خود توسعهیافته منبع باز، اندازه کوچک و پاسخدهی سریع، کاستیهای جستجوی متن کامل جلویی خالص فعلی را برطرف میکند و تجربه کاربری بهتری را ارائه میدهد.