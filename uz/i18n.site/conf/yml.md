# .i18n/conf.yml

`i18n.site` uchun profil `.i18n/conf.yml` ga teng.

[`i18`](/i18) , `ignore:` va `i18n:` sozlamalaridan tashqari, konfiguratsiya fayli quyidagicha:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Ular orasida `upload` dan `ext:` gacha konfiguratsiya elementi nashr etilganda faqat `.md` yuklanishini bildiradi.

## Yuqori Navigatsiya Navigatsiyasi

Bosh sahifaning yuqori qismidagi navigatsiya menyusiga mos keladigan `nav:` konfiguratsiya parametrlari.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ularning orasida `i18n: home` `en/i18n.yml` `home: Home` ga to'g'ri keladi.

`en/i18n.yml` bir nechta tillarga tarjima qilinadi, masalan, `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tarjima tugallangandan so'ng siz tarjimaning qiymatini o'zgartirishingiz mumkin `yml` , lekin tarjima kalitini qo'shmang yoki o'chirmang `yml` .

### `use: Toc` , Bitta Fayl Shabloni (Kontur Bilan)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` shablon yordamida renderlashni anglatadi, bu esa bitta `Markdown` shablonni ko'rsatadi.

`TOC` - `Table of Contents` ning qisqartmasi. Ushbu shablon ko'rsatilganda yon panelda ushbu `Markdown` faylning konturi ko'rsatiladi.

`url:` fayl yo'lini ifodalaydi `Markdown` ( `/` ildiz katalogiga mos keladi `/README.md` , bu fayl nomi katta harflar prefiksi va kichik harf qo'shimchasini talab qiladi).

### `use: Md` , Bitta Fayl Shabloni (Kontursiz)

`Md` shablon va `Toc` shablon bir xil va ikkalasi ham bitta `Markdown` faylni ko'rsatish uchun ishlatiladi. Ammo `Md` shablon yon paneldagi konturni ko'rsatmaydi.

Yuqoridagi konfiguratsiyadagi `use: Toc` `use: Md` ga o'zgartirishingiz, `md` katalogida `i18n.site` qayta ishga tushirishingiz va keyin bosh sahifadagi o'zgarishlarni kuzatish uchun rivojlanishni oldindan ko'rish URL manziliga tashrif buyurishingiz mumkin.

### Konfiguratsiya Yo'lisiz Standart Yuklash

Agar ma'lum bir yo'lga kirsa va uning yo'l prefiksi `nav:` ga sozlanmagan bo'lsa, yo'lga mos keladigan `MarkDown` fayl sukut bo'yicha yuklanadi va `Md` shablon yordamida ko'rsatiladi.

Misol uchun, agar `/test` ga kirsa va `nav:` bu yo'lsiz sozlangan bo'lsa va sahifa tili ingliz (kod `en` ) bo'lsa, `/en/test.md` sukut bo'yicha yuklanadi va shablon `Md` yordamida ko'rsatiladi.

Agar `/en/test.md` bu fayl mavjud bo'lmasa, standart `404` sahifa ko'rsatiladi.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Ko'p Faylli Shablon

Konfiguratsiya faylida:

```
  - i18n: blog
    use: Doc
```

Shablonni ko'rsatish uchun `Doc` foydalanishni bildiradi.

`Doc` shabloni bir yoki bir nechta loyihalar uchun hujjat konturlarini yaratish uchun bir nechta `MarkDown` birlashtirishni qo'llab-quvvatlaydi.

#### Yagona Loyiha (Bir Nechta Fayl)

Yuqoridagi `blog` `Doc` ning bitta elementli rejimidir.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Agar url Bo'sh Bo'lsa, U Sukut Bo'yicha i18n Qiymatini Oladi

Agar `url` yozilmagan bo'lsa, `url` sukut bo'yicha `i18n` qiymatiga o'rnatiladi. Bu qoida boshqa andozalar uchun ham kuchga kiradi.

Yuqoridagi yozish usuli `url: blog` ga ekvivalent va unga mos keladigan fayl `en/blog/TOC` ga teng.

#### Bir Nechta Loyihalar

`i18n:doc` dan `.i18n/conf.yml` konfiguratsiyasi ko'p loyiha rejimidir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Bu erda, `menu: NB demo1,demo2` , ochiladigan menyuni ko'rsatish uchun `NB` shablonidan foydalanishni anglatadi.

`Name Breif` ning qisqartmasi bo'lgan `NB` , ochiladigan menyuda loyiha nomi va shiorini ko'rsatishi mumkinligini anglatadi.

`NB` dan keyin unga uzatilgan `demo1,demo2` parametr keladi.
Eslatma : ** `demo1,demo2` `,` oldin va keyin ** bo'sh joy qolmasligi kerak.

Yuqoridagi parametrlar uchun tegishli katalog indeks fayli:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tarkibi Indeksi

`i18n.site` `json` katalog konturini yaratish uchun `TOC` shablon konfiguratsiyasiga mos keladigan `doc` katalog indeks faylini o'qish uchun demo omborida `js` plagin `.i18n/hook/after.tran/TOC.js` ishga tushiradi.

Agar siz `doc` shablonidan foydalansangiz, sizda ushbu plagin bo'lishi kerak.

Agar siz `i18n.site` loyihani bo'sh papkadan ishga tushirsangiz, demo loyiha `.i18n` katalogingizga nusxalashni unutmang.

`Doc` shabloni yaratilgan `json` ga asoslanib mundarija konturini ko'rsatadi.

##### Tarkibni Batafsil Tushuntirish

`en/blog/TOC` quyidagicha :

```
README.md

news/README.md
  news/begin.md
```

##### Darajani Ko'rsatish Uchun Chiziqdan Foydalaning

Yuqoridagi `en/blog/TOC` ning birinchi qatoridagi `README.md` quyidagi rasmdagi `i18n.site` ga mos keladi, bu loyiha nomi.

Keyingi ikki qator quyidagi skrinshotda ko'rsatilganidek.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ga mos keladi,
`news/begin.md` `Our Product is Online !` ga mos keladi

`TOC` fayl konturning ierarxik munosabatini ko'rsatish va ko'p darajali chekinishni qo'llab-quvvatlash uchun chegaralangan.

##### Ota-Ona Darajasi Kontentni Emas, Balki Faqat Sarlavhani Yozadi.

Bir necha darajali chekinishlar mavjud bo'lganda, ota-ona darajasi kontentni emas, balki faqat sarlavhani yozadi. Aks holda, tipografiya buziladi.

##### README.md Loyihasi

Tarkib `README.md` bandiga yozilishi mumkin, masalan, `en/demo2/README.md` .

E'tibor bering, ushbu faylning mazmuni mazmun jadvalini ko'rsatmaydi, shuning uchun uning uzunligini cheklash va qisqacha kirishni yozish tavsiya etiladi.

###### Loyiha Shiori

Ko'rishingiz mumkinki `Your Project slogan` `Deme Two` ochiladigan menyusi va katalog konturi loyihasi nomi ostida joylashgan :

![](https://p.3ti.site/1721276842.avif)

Bu `en/demo2/README.md` birinchi qatoriga to'g'ri keladi :

```
# Demo Two : Your Project slogan
```

`README.md` -loyihaning birinchi darajali sarlavhasining birinchi ikki nuqta `:` keyingi mazmuni loyiha shiori sifatida qabul qilinadi.

Xitoy, Yaponiya va Koreyalik foydalanuvchilar, shuni yodda tutingki, toʻliq kenglikdagi ikki nuqta oʻrniga yarim kenglikdagi ikki nuqta `:` foydalanish kerak.

##### TOCni Ommaviy Ravishda Qanday Ko'chirish Mumkin?

`TOC` fayl manba tilining katalogiga joylashtirilishi kerak.

Misol uchun, agar manba tili xitoy tili bo'lsa, yuqoridagi `TOC` `zh/blog/TOC` ga teng.

Agar manba tili o'zgartirilsa, loyihadagi ma'lum bir tilning `TOC` faylini boshqa tilga ko'chirishingiz kerak.

Siz quyidagi buyruqlarga murojaat qilishingiz mumkin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Iltimos, yuqoridagi buyruqdagi `en/` va `zh/` raqamlarini til kodingizga o'zgartiring.