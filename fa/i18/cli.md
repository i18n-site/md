# توضیح دقیق پارامترهای خط فرمان

## فایل ها را پاک `-p`

`-p` `--purge` فایل هایی را که در هر دایرکتوری ترجمه وجود دارد اما در دایرکتوری زبان مبدأ وجود ندارد پاک می کند.

زیرا هنگام نوشتن اسناد، نام فایل‌های Markdown اغلب تنظیم می‌شوند و در نتیجه بسیاری از فایل‌های قدیمی و رها شده در فهرست ترجمه ایجاد می‌شوند.

از این پارامتر برای پاک کردن فایل هایی که باید در فهرست های زبان های دیگر حذف شوند استفاده کنید.

## فهرست راهنمای ترجمه را مشخص `-d`

دایرکتوری ترجمه شده به طور پیش فرض روی دایرکتوری قرار می گیرد که فایل فعلی در آن قرار دارد.

`-d` `--workdir` می تواند دایرکتوری ترجمه را مشخص کند، مانند:

```
i18 -d ~/i18n/md
```

## `-h` راهنما

`-h` `--help` می توانید راهنمای خط فرمان را مشاهده کنید.