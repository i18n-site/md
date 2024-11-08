# & کنید

## نصب کنید

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## نشانه پیکربندی

`i18n.site` دارای یک ابزار ترجمه `i18` است لطفاً [اینجا را کلیک کنید تا به سند `i18` برای پیکربندی نشانه دسترسی مراجعه کنید](/i18/use) .

## پروژه نمایشی

بیایید با یک پروژه آزمایشی شروع کنیم تا نحوه استفاده `i18n.site` را بیاموزیم.

ابتدا مخزن دمو را کلون می کنیم و دستور را به صورت زیر اجرا می کنیم:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

کاربران در سرزمین اصلی چین می توانند:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

نام دایرکتوری کلون پایه کد `demo.i18n.site` باید `md` باشد تا پیش نمایش محلی با `docker` تسهیل شود.

### ترجمه کن

ابتدا دایرکتوری `md` را وارد کرده و `i18n.site` را اجرا کنید که `en` به `zh` ترجمه می شود.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

پس از اجرا، فایلهای ترجمه و کش تولید میشوند، لطفاً به خاطر داشته باشید که آنها را به مخزن در `git add . ` `md` اضافه کنید.

### پیش نمایش محلی

`docker` را نصب و شروع کنید ( `MAC` کاربر توصیه می کند از [orbstack](https://orbstack.dev) به عنوان زمان اجرا برای `docker` استفاده کنید).

سپس، دایرکتوری `docker` را وارد کنید و `./up.sh` را اجرا کنید و سپس برای پیش نمایش به صورت محلی از آن بازدید کنید [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">