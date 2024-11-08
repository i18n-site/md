# قالب وبلاگ

`i18n/conf.yml` از `use: Blog` به معنای استفاده از قالب وبلاگ برای رندر است.

فایل `markdown` پست وبلاگ باید اطلاعات متا را پیکربندی کند.

اطلاعات متا باید در ابتدای فایل باشد و با `---` شروع و با `---` ختم شود. فرمت اطلاعات پیکربندی در وسط `YAML` است.

پیکربندی یک فایل دمو به شرح زیر است:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` خلاصه محتوا را نشان می دهد که در صفحه فهرست وبلاگ نمایش داده می شود.

با کمک `YMAL` ' | نحو، شما می توانید خلاصه های چند خطی بنویسید.

پیکربندی درخت دایرکتوری در سمت راست وبلاگ نیز `TOC` فایل است (به فصل قبل مراجعه کنید فقط مقالات فهرست شده در `TOC` در فهرست صفحه اصلی وبلاگ ظاهر می شوند).

مقالاتی که حاوی اطلاعات متا نیستند در صفحه اصلی وبلاگ ظاهر نمی شوند، اما می توانند در درخت دایرکتوری در سمت راست ظاهر شوند.

## اطلاعات نویسنده

اطلاعات نویسنده را می توان در اطلاعات متا مقاله نوشت، مانند:

```yml
author: marlowe
```

سپس `author.yml` در فهرست زبان مبدأ ویرایش کنید و اطلاعات نویسنده را اضافه کنید، مانند :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` ، `url` و `title` همه اختیاری هستند. اگر `name` تنظیم نشده باشد، نام کلید (در اینجا `marlowe` ) به عنوان `name` استفاده می شود.

پروژه دمو [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) و [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) را ببینید

## مقاله پین شده

اگر میخواهید مقاله را به بالا پین کنید، لطفاً `i18n.site` اجرا کنید و `xxx.yml` فایل زیر `.i18n/data/blog` را ویرایش کنید و مهر زمانی را به عدد منفی تغییر دهید (اعداد منفی متعدد از بزرگترین به کوچکترین مرتبسازی میشوند).