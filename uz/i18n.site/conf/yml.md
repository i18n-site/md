# .i18n/conf.yml

Konfiguratsiya fayli `.i18n/conf.yml` `i18n.site`

ning `ignore:` va `i18n:` sozlamalaridan tashqari [`i18`](/i18) konfiguratsiya fayli quyidagicha:

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

Ular orasida `ext:` konfiguratsiya elementi nashr etilganda faqat `.md` yuklanishini `upload` .

## Yuqori Navigatsiya Navigatsiyasi

Bosh sahifaning yuqori qismidagi navigatsiya menyusiga mos keladigan `nav:` opsiyalari.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Ular orasida, `i18n: home` `en/i18n.yml` to'g'ri keladi `home: Home`

`en/i18n.yml` `zh/i18n.yml` bir nechta tillarga tarjima qilinadi.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tarjima tugallangandan so'ng siz tarjimadagi `yml` o'zgartirishingiz mumkin, lekin `yml` tarjima kalitini qo'shmang yoki o'chirmang.

### `use: Toc` Bitta Fayl Shabloni (Kontur Bilan)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` bitta `Markdown` shablonini ko'rsatadigan `Toc` ko'rsatishdan foydalanishni anglatadi.

`TOC` - bu `Table of Contents` ning qisqartmasi `Markdown`

`url:` fayl yo'lini ko'rsatadi `Markdown` ( `/` ildiz katalogiga to'g'ri keladi `/README.md` , bu fayl nomi katta harf va kichik harf qo'shimchasini talab qiladi).

### `use: Md` Bitta Fayl Shabloni (Kontursiz)

`Md` `Toc` bilan bir xil, ikkalasi ham bitta `Markdown` faylini ko'rsatish uchun ishlatiladi. Biroq `Md` shablon yon panelda konturni ko'rsatmaydi.

ni yuqoridagi konfiguratsiyada `use: Md` ga `use: Toc` , yana `md` katalogida `i18n.site` tushirishingiz va keyin bosh sahifadagi o'zgarishlarni kuzatish uchun ishlanmani oldindan ko'rish URL manziliga tashrif buyurishingiz mumkin.

### Konfiguratsiya Yo'lisiz Standart Yuklash

Agar kirilayotgan muayyan yoʻlning yoʻl prefiksi `nav:` yoʻlga mos keladigan `MarkDown` fayl sukut boʻyicha yuklanadi va `Md` shablonidan foydalanib koʻrsatiladi.

Misol uchun, agar siz `/test` ga tashrif buyursangiz va `nav:` ushbu yo'lsiz sozlangan bo'lsa va sahifa tili ingliz (kod `en` ) bo'lsa, andoza sukut bo'yicha yuklanadi `/en/test.md` va yordamida ko'rsatiladi `Md` .

`/en/test.md` bu fayl mavjud bo'lmasa, standart `404` sahifa ko'rsatiladi.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Ko'p Faylli Shablon

Konfiguratsiya faylida:

```
  - i18n: blog
    use: Doc
```

Shablonni ko'rsatish uchun foydalanishni bildiradi `Doc`

`Doc` bitta yoki bir nechta loyihalar uchun hujjat konturlarini yaratish uchun bir nechta `MarkDown` birlashtirishni qo'llab-quvvatlaydi.

#### Yagona Loyiha (Bir Nechta Fayl)

`blog` yuqoridagi `Doc` ning yagona loyiha rejimi.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Agar url Bo'sh Bo'lsa, U Sukut Bo'yicha i18n Qiymatini Oladi

Agar siz yozmasangiz `url` `url` `i18n` qiymatiga o'rnatiladi.

Yuqoridagi yozish usuli ega bo'lgan `url: blog` ga teng va unga mos keladigan fayl `en/blog/TOC` ga teng.

#### Bir Nechta Loyihalar

`.i18n/conf.yml` `i18n:doc` dagi konfiguratsiya ko'p loyiha rejimidir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Bu erda `menu: NB demo1,demo2` ochiladigan menyuni ko'rsatish uchun `NB` foydalanish demakdir.

`NB` `Name Breif` ning qisqartmasi bo'lib, ochiladigan menyuda loyiha nomi va shiori ko'rsatilishi mumkinligini ko'rsatadi.

`NB` dan keyin `demo1,demo2` parametri unga uzatiladi.
E'tibor bering `demo1,demo2` `,` da verguldan oldin va keyin ** bo'sh joy qolmasligi kerak : **

Yuqoridagi parametrlar uchun tegishli katalog indeks fayli:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Tarkibi Indeksi

`i18n.site` Katalog konturining `json` yaratish uchun katalog indeks faylini `doc` shablon konfiguratsiyasiga mos `TOC` o'qish uchun `.i18n/hook/after.tran/TOC.js` `js` demo omborida ishga tushiradi.

Agar siz `doc` foydalansangiz, sizda ushbu plagin bo'lishi kerak.

Agar siz bo'sh papkadan `i18n.site` ishga tushirsangiz, demo loyihadagi `.i18n` katalogingizga nusxalashni unutmang.

`Doc` yaratilgan `json` ga asoslanib tarkiblar konturini yaratadi.

##### Tarkibni Batafsil Tushuntirish

Tarkib : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Darajani Ko'rsatish Uchun Chiziqdan Foydalaning

`en/blog/TOC` birinchi qatordagi `README.md` quyidagi rasmdagi `i18n.site` ga mos keladi, bu loyiha nomi.

Keyingi ikki qator quyidagi skrinshotda ko'rsatilganidek.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`News` ga to'g'ri keladi `news/README.md`
`Our Product is Online !` ga to'g'ri keladi `news/begin.md`

`TOC` Fayl konturning ierarxik munosabatini ko'rsatish uchun chizilgan va ko'p darajali chekinishni qo'llab-quvvatlaydi.

##### Ota-Ona Darajasi Kontentni Emas, Balki Faqat Sarlavhani Yozadi.

Bir necha darajali chekinishlar mavjud bo'lganda, ota-ona darajasi kontentni emas, balki faqat sarlavhani yozadi. Aks holda, tipografiya buziladi.

##### README.md Loyihasi 

`README.md` , masalan, `en/demo2/README.md` dagi kontentni yozishingiz mumkin.

E'tibor bering, ushbu faylning mazmuni mazmun jadvalini ko'rsatmaydi, shuning uchun uning uzunligini cheklash va qisqacha kirishni yozish tavsiya etiladi.

###### Loyiha Shiori

Ko'rib turganingizdek `Deme Two` ochiladigan menyu va katalogning loyiha nomi ostida : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: birinchi qatorga to'g'ri keladi `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Loyiha `README.md` Birinchi darajali sarlavhadagi birinchi nuqta `:` dan keyingi tarkib loyiha shiori sifatida qabul qilinadi.

Xitoy, Yaponiya va Koreyadan kelgan foydalanuvchilar, toʻliq kenglikdagi yoʻgʻon nuqta oʻrniga yarim kenglikdagi ikki nuqtadan foydalanish kerakligini unutmang `:`

##### TOCni Ommaviy Ravishda Qanday Ko'chirish Mumkin?

`TOC` manba tilining katalogiga joylashtirilishi kerak.

Misol uchun, agar manba tili xitoy bo'lsa, yuqorida `zh/blog/TOC` `TOC`

Agar manba tili o'zgartirilgan bo'lsa, siz loyihadagi ma'lum bir tildagi `TOC` boshqa tilga ko'chirishingiz kerak.

Siz quyidagi buyruqlarga murojaat qilishingiz mumkin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Iltimos, yuqoridagi buyruqdagi `en/` va `zh/` til kodingizga o'zgartiring.


