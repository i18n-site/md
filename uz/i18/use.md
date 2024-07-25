# O'rnatish Va Ishlatish

## windows Birinchi Navbatda git Bash-Ni O'rnatadi

windows , [avval yuklab olish va o'rnatish uchun shu yerni bosing `git bash`](https://git-scm.com/download/win)

da keyingi operatsiyalarni bajaring `git bash`

## O'rnatish

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tarjima Tokenini Sozlang

Tokenni nusxalash uchun tashrif [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Yarating `~/.config/i18n.site.yml` nusxalangan tarkibni unga joylashtiring, mazmuni quyidagicha:

```
token: YOUR_API_TOKEN
```

Bundan tashqari, siz to'lov uchun kredit kartani bog'lashingiz [i18n.site/payBill](//i18n.site/payBill) (to'lovni to'ldirish shart emas, veb-sayt foydalanishga qarab to'lovlarni avtomatik ravishda ushlab turadi, [narxlash uchun bosh sahifaga qarang](/#price) ).

## Foydalanish

### Demo Loyihasi

`i18` konfiguratsiyasini o'rganish uchun demo loyihasiga murojaat qiling [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Xitoydagi foydalanuvchilar klonlashlari mumkin [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlashdan so'ng, tarjimani bajarish uchun katalogni kiriting va ishga tushiring `i18`

### Katalog Tuzilmasi

Shablon ombori katalogining tuzilishi quyidagicha

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` katalogida tarjima qilingan demo fayllar mavjud bo'lib, ular faqat misol bo'lib, ularni o'chirib tashlash mumkin.

### Tarjimani Ishga Tushirish

Tarjima qilish uchun katalogga kiring va ishga tushiring `i18`

### Fayllarni Omborga Qo'shing

Tarjimadan tashqari, dastur quyidagi fayllarni ham yaratadi, iltimos, ularni omborga qo'shing.

```
.i18n/hash
.i18n/cache/.gitignore
```

: orasida `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Bu `.i18n/cache/` barcha fayllarga e'tibor bermaslikni anglatadi ( `.i18n/cache/.gitignore` dan tashqari).

Agar versiyani boshqarish dasturi bo'lmasa `git` uni ushbu konfiguratsiyaga ko'ra e'tiborsiz qoldiring.

## Konfiguratsiya Fayli

`.i18n/conf.yml` Bu `i18` qatorini tarjima qilish vositasining konfiguratsiya fayli

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

Konfiguratsiya faylida `fromTo` ning bo'ysunuvchilari:

`en` - manba tili, `zh ja ko de fr` - tarjimaning maqsad tili.

Til kodi qarang [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misol uchun, agar siz xitoy tilini ingliz tiliga tarjima qilmoqchi bo'lsangiz, ushbu qatorni qayta yozing `zh: en`

Agar barcha qoʻllab-quvvatlanadigan tillarga tarjima qilmoqchi boʻlsangiz, keyin boʻsh qoldiring `:` masalan

```
i18n:
  fromTo:
    en:
```

### Faylga E'tibor Bermaslik

Odatiy bo'lib, manba til katalogidagi `.md` va `.yml` bilan boshlangan barcha fayllar tarjima qilinadi.

Agar siz ba'zi fayllarni e'tiborsiz qoldirmoqchi bo'lsangiz va ularni tarjima qilmasangiz (masalan, tugallanmagan qoralamalar), siz `ignore` maydon konfiguratsiyasidan foydalanishingiz mumkin.

`.gitignore` o'xshash sintaksisdan [globset](https://docs.rs/globset/latest/globset/#syntax) `ignore`

Masalan, yuqoridagi konfiguratsiya faylida `_* ` `_` boshlangan fayllar tarjima qilinmasligini bildiradi.

## Tarjima Qoidalari

### Tarjima Muharrirlari Qatorlarni Qo'shmasligi Yoki O'chirilmasligi Kerak

Tarjima tahrirlanishi mumkin. Asl matnni o'zgartiring va uni mashinada qayta tarjima qiling, tarjimaga qo'lda kiritilgan o'zgartirishlar yozilmaydi (agar asl matnning ushbu paragrafi o'zgartirilmagan bo'lsa).

Ammo shuni esda tutingki, tarjima satrlari va asl matn bittaga mos kelishi kerak. Ya'ni, tarjimani kompilyatsiya qilishda qatorlarni qo'shmang yoki o'chirmang. Aks holda, bu tarjimani tahrirlash keshida chalkashlikka olib keladi.

Agar biror narsa noto'g'ri bo'lsa, [yechimlar uchun tez-tez so'raladigan savollarga qarang.](/i18/qa#H1)

### Tarjima Qiling `YAML`

Buyruqlar qatori vositasi manba tilidagi fayllar katalogida `.yml` bilan tugaydigan barcha fayllarni topadi va ularni tarjima qiladi.

* E'tibor bering `.yml` fayl nomi qo'shimchasi bo'lishi kerak ( `.yaml` emas).

Asbob lug'at kalitlarini emas, faqat lug'at qiymatlarini tarjima qiladi `.yml`

masalan `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

sifatida tarjima qilinadi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` ning tarjimasi ham qoʻlda oʻzgartirilishi mumkin (lekin tarjimada kalitlar yoki qatorlarni qoʻshmang yoki oʻchirmang).

`YAML` asosida siz turli xil dasturlash tillari uchun xalqaro yechimlarni osongina yaratishingiz mumkin.

## Kengaytirilgan Foydalanish

### Tarjima Pastki Katalogi

Siz `.i18n/conf.yml` ekansiz (har safar demo loyiha shablonidan boshlash shart emas), `i18` yaxshi ishlaydi.

Buyruqlar qatori vositasi barcha pastki kataloglarda `.i18n/conf.yml` topadi va uni tarjima qiladi.

[monorepo](//monorepo.tools) arxitekturasidan foydalanadigan loyihalar til fayllarini kichik kataloglarga bo'lishlari mumkin.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Maxsus O'rnatish Katalogi

U sukut bo'yicha o'rnatiladi `/usr/local/bin`

`/usr/local/bin` yozish ruxsati bo'lmasa, u `~/.bin` ga o'rnatiladi.

Atrof-muhit o'zgaruvchilarini o'rnatish `TO` Masalan, o'rnatish katalogini belgilashingiz mumkin :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
