# نسخه پروژه

پروژه دمو را به عنوان مثال در نظر بگیرید:

`en/demo2/v` شماره نسخه فعلی پروژه است که در سمت راست نام پروژه در طرح کلی نوار کناری نمایش داده می شود.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

در اینجا `en/` کد زبان مربوط به زبان مبدأ ترجمه است که توسط `.i18n/conf.yml` پیکربندی شده است.

اگر زبان مبدأ شما انگلیسی نیست، فایل `v` باید در فهرست پروژه زبان مبدأ شما قرار گیرد.

قابلیت مرور نسخه های تاریخی اسناد در دست توسعه است.

توصیه میشود تنها زمانی که بهروزرسانیهای اصلی منتشر میشوند، شماره نسخه سند را تغییر دهید (مانند `v1` ، `v2` ) تا از تعداد بیش از حد نسخهها که باعث به هم ریختگی صفحات فهرستشده توسط موتورهای جستجو میشوند، جلوگیری شود.

## از فایل های خالی `v` برای تقسیم فهرست فایل های پروژه های مختلف استفاده کنید

در پروژه دمو، علاوه بر `en/demo2/v` ، همچنین می توانید مشاهده کنید که `v` فایل خالی در دایرکتوری های `en/blog` و `en/demo1` وجود دارد.

`v` خالی در طرح کلی نوار کناری نمایش داده نمی شود، اما تا زمانی که یک فایل `v` وجود دارد، یک فهرست مستقل برای فایل های دایرکتوری و زیر شاخه ها ایجاد می شود.

با تقسیم نمایه های پروژه های مختلف، می توانید از دسترسی آهسته ناشی از بارگذاری فهرست همه فایل ها در کل سایت به طور همزمان جلوگیری کنید.

برای مثال، فایل ایندکس مربوط [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog` در پروژه آزمایشی است :