# O'rnatish Va Ishlatish

## windows Birinchi Navbatda git Bash-Ni O'rnatadi

windows , [avval `git bash` yuklab olish va o'rnatish uchun shu yerni bosing](https://git-scm.com/download/win) .

`git bash` da keyingi operatsiyalarni bajaring.

## O'rnatish

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tarjima Tokenini Sozlang

Tokenni nusxalash uchun tashrif [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` yarating, nusxalangan tarkibni unga joylashtiring, mazmuni quyidagicha:

```
token: YOUR_API_TOKEN
```

Bundan tashqari, siz to'lov kredit kartasini [bog'lashingiz](/#price) kerak [i18n.site/payBill](//i18n.site/payBill)

## Foydalanish

### Demo Loyihasi

`i18` tarjimasi konfiguratsiyasini oʻrganish uchun demo loyihasiga murojaat qiling [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Xitoydagi foydalanuvchilar klonlashlari mumkin [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlashdan so'ng, katalogni kiriting va tarjimani yakunlash uchun `i18` ishga tushiring.

### Katalog Tuzilishi

Shablon ombori katalogining tuzilishi quyidagicha

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` katalogidagi tarjima qilingan demo fayllar faqat bir misol va ularni o'chirib tashlash mumkin.

### Tarjimani Ishga Tushiring

Katalogni kiriting va tarjima qilish uchun `i18` ishga tushiring.

Tarjimaga qo'shimcha ravishda, dastur `.i18n/data` jildini ham yaratadi, iltimos, uni omborga qo'shing.

Yangi faylni tarjima qilgandan so'ng, ushbu katalogda yangi ma'lumotlar fayli hosil bo'ladi `git add . ` qo'shishni unutmang.

## Konfiguratsiya Fayli

`.i18n/conf.yml` `i18` buyruq qatori tarjima vositasining konfiguratsiya fayli

Tarkib quyidagicha:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Manba Tili &

Konfiguratsiya faylida `fromTo` ga bo'ysunuvchi:

`en` - manba tili, `zh ja ko de fr` - tarjimaning maqsad tili.

Til kodi qarang [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misol uchun, agar siz xitoy tilini ingliz tiliga tarjima qilmoqchi bo'lsangiz, ushbu qatorni `zh: en` qayta yozing.

Agar barcha qoʻllab-quvvatlanadigan tillarga tarjima qilmoqchi boʻlsangiz, `:` dan keyin boʻsh qoldiring. masalan

```
i18n:
  fromTo:
    en:
```

Turli subkataloglar uchun turli xil `fromTo` sozlashingiz mumkin Namoyish quyidagi tarzda yoziladi : /

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

Ushbu konfiguratsiya jadvalida katalog `blog` tarjimasining manba tili `zh` ga, `blog/your_file_name.md` katalog tarjimasining manba tili esa `ja` ga teng.

### Ko'p Tilli Rasmlar/Havolalar

`replace:` va `MarkDown` dagi rasmlar va havolalardagi URL manzillari (va oʻrnatilgan `HTML` ning `src` va `href` atributlari) ushbu prefiks bilan `.i18n/conf.yml` ga sozlanganda, URL-dagi manba til kodi tarjimaning til kodi ( [til)](/i18/LANG_CODE) bilan almashtiriladi. [kodlar ro'yxati](/i18/LANG_CODE) ).

Masalan, sizning konfiguratsiyangiz quyidagicha:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` lug'at bo'lib, kalit almashtiriladigan URL prefiksi, qiymat esa almashtirish qoidasidir.

Yuqoridagi `ko de uk>ru zh-TW>zh >en` qoidasini almashtirishning ma'nosi shundaki, `ko de` o'z til kodining rasmini ishlatadi, `zh-TW` va `zh` `zh` rasmini, `uk` `ru` rasmini va boshqa tillar (masalan, `ja` ) rasmni ishlatadi. sukut bo'yicha `en` dan.

Masalan, frantsuzcha ( `fr` ) `MarkDown` manba fayli quyidagicha :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Tarjima qilingan va yaratilgan ingliz ( `en` ) fayli quyidagicha :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Bu yerda boshlang‘ich til kodidagi `/en/` maqsadli tilda `/zh/` ga almashtiriladi.

Eslatma : URLda almashtirilgan matnning til kodidan oldin va keyin `/` boʻlishi kerak.

> [!TIP]
> `url:` da `- /` sozlangan bo'lsa, faqat nisbiy yo'llar mos keladi, lekin `//` bilan boshlangan URL manzillar mos kelmaydi.
>
> Agar domen nomining ba'zi havolalari almashtirilishini istasa va ba'zilari almashtirilishini istamasa, ularni farqlash uchun `[x](//x.com/en/)` va `[x](https://x.com/en/)` kabi turli xil prefikslardan foydalanishingiz mumkin.

### Faylga E'tibor Bermaslik

Odatiy bo'lib, manba til katalogidagi `.md` va `.yml` bilan boshlangan barcha fayllar tarjima qilinadi.

Agar siz ba'zi fayllarni e'tiborsiz qoldirmoqchi bo'lsangiz va ularni tarjima qilmasangiz (masalan, tugallanmagan qoralamalar), uni `ignore` maydoni bilan sozlashingiz mumkin.

`ignore` `.gitignore` fayl bilan [globset](https://docs.rs/globset/latest/globset/#syntax) xil sintaksisdan foydalanadi.

Masalan, yuqoridagi konfiguratsiya faylidagi `_* ` `_` bilan boshlangan fayllar tarjima qilinmasligini bildiradi.

## Tarjima Qoidalari

### Tarjima Muharrirlari Qatorlarni Qo'shmasligi Yoki O'chirilmasligi Kerak

Tarjima tahrirlanishi mumkin. Asl matnni o'zgartiring va uni mashinada qayta tarjima qiling, tarjimaga qo'lda kiritilgan o'zgartirishlar qayta yozilmaydi (agar asl matnning ushbu bandi o'zgartirilmagan bo'lsa).

> [!WARN]
> Tarjima satrlari va asl matn o'rtasida yakkama-yakka muvofiqlik bo'lishi kerak. Ya'ni, tarjimani kompilyatsiya qilishda qatorlarni qo'shmang yoki o'chirmang. Aks holda, bu tarjimani tahrirlash keshida chalkashlikka olib keladi.

Agar biror narsa noto'g'ri bo'lsa, [yechimlar uchun tez-tez so'raladigan savollarga qarang.](/i18/qa#H1)

### `YAML` Tarjima

Buyruqlar qatori vositasi manba tilidagi fayllar katalogida `.yml` bilan tugaydigan barcha fayllarni topadi va ularni tarjima qiladi.

* E'tibor bering, fayl nomi qo'shimchasi `.yml` bo'lishi kerak ( `.yaml` emas).

Asbob lug'at kalitlarini emas, balki faqat lug'at qiymatlarini `.yml` ga tarjima qiladi.

Masalan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` deb tarjima qilinadi

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` ning tarjimasi ham qo'lda o'zgartirilishi mumkin (lekin tarjimada kalitlarni yoki qatorlarni qo'shmang yoki o'chirmang).

`YAML` tarjimasiga asoslanib, siz turli xil dasturlash tillari uchun xalqaro yechimlarni osongina yaratishingiz mumkin.

## Kengaytirilgan Foydalanish

### Tarjima Pastki Katalogi

`.i18n/conf.yml` yaratilgan ekan (har safar demo loyiha shablonidan boshlash shart emas), `i18` yaxshi ishlaydi.

Buyruqlar qatori vositasi barcha pastki kataloglarda `.i18n/conf.yml` konfiguratsiyani topadi va ularni tarjima qiladi.

[monorepo](//monorepo.tools) arxitekturasidan foydalanadigan loyihalar til fayllarini kichik kataloglarga bo'lishlari mumkin.

![](https://p.3ti.site/1719910016.avif)

### Maxsus O'rnatish Katalogi

U sukut bo'yicha `/usr/local/bin` ga o'rnatiladi.

Agar `/usr/local/bin` yozish ruxsati bo'lmasa, u `~/.bin` ga o'rnatiladi.

`TO` muhit o'zgaruvchisini sozlash o'rnatish katalogini belgilashi mumkin, masalan :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```