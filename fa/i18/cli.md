# توضیح دقیق پارامترهای خط فرمان

## 0 فایل ها را `-p`

`-p` یا `--purge` فایل هایی را که در هر فهرست ترجمه وجود دارد اما در فهرست زبان مبدأ وجود ندارد پاک می کند.

زیرا هنگام نوشتن اسناد، نام فایل های Markdown اغلب تنظیم می شود که منجر به بسیاری از فایل های قدیمی و رها شده در فهرست ترجمه می شود.

از این پارامتر برای پاک کردن فایل هایی که باید در فهرست های زبان های دیگر حذف شوند استفاده کنید.

## `-d` فهرست راهنمای ترجمه را مشخص می کند

دایرکتوری ترجمه شده به طور پیش فرض روی دایرکتوری قرار می گیرد که فایل فعلی در آن قرار دارد.

`-d` یا `--workdir` می تواند فهرست راهنمای ترجمه را مشخص کند، مانند:

```
i18 -d ~/i18n/md
```

## `-h` مشاهده راهنما

`-h` یا `--help` برای مشاهده راهنمای خط فرمان.