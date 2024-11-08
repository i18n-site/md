# ویژگی های محصول

`i18` ابزار خط فرمان برای ترجمه است Markdown & Yaml

## می تواند فرمت Markdown را کاملاً حفظ کند

پشتیبانی از ترجمه جداول Markdown بدون آسیب رساندن به قالب، کلمات را در فرمول های ریاضی یا پیوندها ترجمه نمی کند.

از ترجمه ترکیبی HTML پشتیبانی می کند Markdown محتوای تگ های `<pre>` و `<code>` تعبیه شده در `MarkDown` HTML ترجمه نمی شود

## می تواند فرمول های ریاضی را تشخیص دهد و از ترجمه صرف نظر کند

فرمول های ریاضی شناسایی می شوند و از ترجمه صرف نظر می شود.

برای نحوه نوشتن فرمول های ریاضی، لطفاً به [" Github درباره نوشتن عبارات ریاضی"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) مراجعه کنید.

## امکان ترجمه نظرات در قطعه کد

کد درون خطی و قطعه کد ترجمه نمی شوند، اما نظرات موجود در کد قابل ترجمه هستند.

نظرات ترجمه باید زبان را بعد از ` ``` ` ` ```rust ` :

در حال حاضر، از ترجمه حاشیه نویسی به `toml` ، `yaml` ، `json5` ، `go` ، `rust` ، `c` ، `cpp` ، `java` ، `js` ، `coffee` ، `python` ، `bash` ، `php` [و سایر زبان ها](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) پشتیبانی می کند.

اگر میخواهید همه کاراکترهای غیرانگلیسی کد را ترجمه کنید، بخش کد را با ` ```i18n ` علامت بزنید.

اگر زبان برنامه نویسی مورد نیاز شما در دسترس نیست، لطفا [با ما تماس بگیرید](https://groups.google.com/g/i18n-site) .

## خط فرمان دوستانه

[ابزارهای سنگین وزن](https://www.capterra.com/translation-management-software) زیادی برای مدیریت اسناد ترجمه وجود دارد.

برای برنامه نویسانی که با `git` ، `vim` و `vscode` آشنا هستند، استفاده از این ابزارها برای ویرایش اسناد و مدیریت نسخه ها بدون شک هزینه یادگیری را افزایش می دهد.

`KISS` ( `Keep It Simple, Stupid` ) در میان معتقدان به اصول، راه حل های سطح سازمانی مترادف با دست و پا گیر بودن، ناکارآمد بودن و استفاده دشوار است.

ترجمه باید با وارد کردن دستورات و تکمیل آن با یک کلیک انجام شود.

جز در موارد ضروری، موجودیت ها را اضافه نکنید.

## بدون تغییر، بدون ترجمه

برخی از ابزارهای ترجمه خط فرمان نیز وجود دارد، مانند [translate-shell](https://github.com/soimort/translate-shell)

با این حال، آنها از شناسایی تغییرات فایل پشتیبانی نمی کنند و فقط فایل های اصلاح شده را برای کاهش هزینه ها و افزایش کارایی ترجمه می کنند.

## ترجمه را می توان ویرایش کرد و ترجمه ماشینی تغییرات موجود را بازنویسی نمی کند.

ترجمه قابل ویرایش است.

متن اصلی را اصلاح کنید و دوباره آن را به صورت ماشینی ترجمه کنید، تغییرات دستی ترجمه بازنویسی نخواهد شد (اگر این پاراگراف از متن اصلی اصلاح نشده باشد).

## بهترین کیفیت ترجمه ماشینی

ما نسل جدیدی از فناوری ترجمه را توسعه دادهایم که مزایای فنی مدلهای ترجمه ماشینی سنتی و مدلهای زبان بزرگ را ترکیب میکند تا ترجمهها را دقیق، روان و ظریف کند.

تست های کور نشان می دهد که کیفیت ترجمه ما به طور قابل توجهی در مقایسه با خدمات مشابه بهتر است.

برای دستیابی به همین کیفیت، میزان ویرایش دستی مورد نیاز Google Translate و `ChatGPT` به ترتیب `2.67` برابر و `3.15` برابر ما است.

## <a rel=id href="#price" id="price"></a> قیمت بسیار رقابتی

|                                                                                   | دلار/میلیون کلمه |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [مایکروسافت](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [آمازون](https://aws.amazon.com/translate/pricing)                                | 15            |
| [گوگل](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ اینجا را کلیک کنید تا کتابخانه github را تأیید کنید و به طور خودکار دنبال i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) و **$50 دریافت کنید** .

توجه: تعداد کاراکترهای قابل پرداخت = [تعداد unicode](https://en.wikipedia.org/wiki/Unicode) فایل منبع × تعداد زبان های ترجمه

## پشتیبانی از ترجمه `YAML`

این ابزار فقط مقادیر فرهنگ لغت را به `YAML` ترجمه می کند، نه کلیدهای فرهنگ لغت.

بر اساس ترجمه `YAML` ، می توانید به راحتی راه حل های بین المللی برای زبان های برنامه نویسی مختلف بسازید.

## پشتیبانی از تنظیمات هدر ترجمه `HOGO`

از پیکربندی هدر نوع [HOGO](https://github.com/gohugoio/hugo) پشتیبانی می کند و فقط فیلدهای `title` ، `summary` ، `brief` و `description` را ترجمه می کند.

## نام متغیرها را ترجمه نکنید

`Markdown` به عنوان یک الگوی ایمیل استفاده می شود، `YAML` به عنوان پیکربندی فایل زبان استفاده می شود، و پارامترهای متغیری وجود خواهد داشت (به عنوان مثال: شارژ `${amount}` دریافت شده است).

نام متغیرهایی مانند `${varname}` به عنوان ترجمه انگلیسی در نظر گرفته نمی شود.

## بهینه سازی ترجمه برای چین، ژاپن و کره

### وقتی به انگلیسی ترجمه می شود، حرف اول عنوان به طور خودکار بزرگ می شود.

چین، ژاپن و کره حروف بزرگ و کوچک ندارند، اما قرارداد عناوین انگلیسی بزرگ کردن حرف اول است.

`i18` می تواند عنوان را در `MarkDown` تشخیص دهد و در هنگام ترجمه به زبان حساس به حروف بزرگ به طور خودکار حرف اول را بزرگ می کند.

به عنوان مثال، `为阅读体验而优化` به `Optimized for Reading Experience` ترجمه می شود.

### اصطلاحات انگلیسی در زبان های چینی، ژاپنی، کره ای و چینی ترجمه نمی شوند

اسناد چین، ژاپن و کره اغلب شامل بسیاری از اصطلاحات انگلیسی هستند.

ترجمه ماشینی زبان های چینی، ژاپنی و کره ای به یک زبان غیرانگلیسی تبدیل شده است و اصطلاحات اغلب با هم ترجمه می شوند، مانند جمله چینی زیر:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

اگر از Google یا DeepL استفاده می کنید، هر دو اصطلاحات انگلیسی را به اشتباه ترجمه می کنند که باید اصلی باقی بمانند (به عنوان مثال ژاپنی و فرانسوی را در نظر بگیرید).

### ترجمه گوگل

ترجمه `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` به ژاپنی :

![](//p.3ti.site/1720199391.avif)

ترجمه `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` به فرانسوی :

`Falcon` به عنوان `faucon` و `Llama` به عنوان `lama` ترجمه می شود. به عنوان اسامی خاص، آنها نباید ترجمه شوند.

![](//p.3ti.site/1720199451.avif)

### ترجمه DeepL

ترجمه `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` به ژاپنی :

![](//p.3ti.site/1720199550.avif)

DeepL موارد فوق به فرانسوی (همچنین بازنویسی نام های مناسب و اضافه کردن `... ` فرد):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### ترجمه سایت i18n

ترجمه `i18` اصطلاحات انگلیسی را در اسناد چینی، ژاپنی و کره ای تشخیص می دهد و اصطلاحات را دست نخورده باقی می گذارد.

به عنوان مثال، نتیجه ترجمه ژاپنی در بالا این است:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

ترجمه فرانسه این است:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

فقط زمانی که بین کلمه انگلیسی و متن چینی، ژاپنی و کره ای فاصله وجود داشته باشد یا طول انگلیسی بزرگتر از 1 باشد، کلمه به عنوان یک اصطلاح در نظر گرفته می شود.

به عنوان مثال: `C罗` به عنوان `Cristiano Ronaldo` ترجمه می شود.

## می توان آن را با بیش از `i18n.site` زبان برای ساخت یک وب سایت ترکیب کرد

`i18` در ابزار خط فرمان ساخت وب سایت چند زبانه [`i18n.site`](/i18n.site) ادغام شده است.

برای جزئیات بیشتر به مستندات [`i18n.site`](/i18n.site) مراجعه کنید.

## کد منبع باز

کلاینت کاملاً منبع باز است و سمت 90 کد [منبع](/i18n.site/c/src) باز است.

ما به دنبال داوطلبانی برای مشارکت در توسعه کد منبع باز و تصحیح متون ترجمه شده هستیم.

اگر علاقه مند هستید، لطفاً [اینجا را کلیک کنید تا نمایه خود را پر کنید](https://ggl.link/i18n) و سپس برای ارتباط [به لیست پستی](https://groups.google.com/u/2/g/i18n-site) بپیوندید.

## در تماس باشید

لطفاً <button onclick="mailsub()">روی این ایمیل کلیک کنید تا در بهروزرسانیهای محصول مشترک شوید</button> و <button onclick="webpush()">فشار مرورگر را فعال کنید</button> .

همچنین به دنبال حساب های اجتماعی / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) آمدید [X.COM: @i18nSite](https://x.com/i18nSite)