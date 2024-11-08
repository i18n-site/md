# ناوبری سفارشی

بیایید سایت آزمایشی را به عنوان [i18n-demo.github.io](//i18n-demo.github.io) در نظر بگیریم تا نحوه سفارشی کردن ناوبری را توضیح دهیم.

![](https://p.3ti.site/1731036697.avif)

فایل های مربوط به نواحی شماره گذاری شده در شکل بالا به شرح زیر است:

1. سمت چپ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. راست [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) یک زبان قالب است که `HTML` را تولید می کند.

[➔ برای یادگیری گرامر اینجا را کلیک کنید pug](https://pugjs.org)

رشته فرمت `${I18N.sponsor}` در فایل برای پیاده سازی بین المللی استفاده می شود و محتوای آن با متن [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) در فهرست زبان مبدأ جایگزین می شود.

**`css` و `js` را در `pug` ننویسید** ، در غیر این صورت خطایی رخ می دهد.

سبک ها به `css` نوشته می شوند و تعامل با ایجاد اجزای وب حاصل می شود.

در اینجا، فایل مربوط به سبک نوار [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) است :