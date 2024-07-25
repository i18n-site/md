# Mahsulot Xususiyatlari

tarjima qilish Markdown & Yaml buyruq qatori vositasi `i18`

## Markdown Formatini Mukammal Darajada Ushlab Turishi Mumkin

Formatga zarar bermasdan Markdown jadvallarini tarjima qilishni qo'llab-quvvatlaydi, matematik formulalar yoki havolalardagi so'zlarni tarjima qilmaydi;

HTML Markdown `<pre>` tarjimasini qo'llab HTML quvvatlaydi va `<code>` teglaridagi kontent tarjima `MarkDown`

## Matematik Formulalarni Taniy Oladi Va Tarjimani O'tkazib Yuboradi

Matematik formulalar tan olinadi va tarjima o'tkazib yuboriladi.

Matematik formulalarni yozish uchun [" Github Matematik ifodalarni yozish haqida"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) ga qarang.

## Kod Parchalarida Sharhlarni Tarjima Qilish Qobiliyati

Inline kod va kod parchalari tarjima qilinmaydi, lekin koddagi izohlarni tarjima qilish mumkin.

Tarjima izohlarda keyin til ko'rsatish kerak ` ``` ` masalan : ` ```rust ` !

Ayni paytda , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` , `php` [va boshqa tillardagi](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) `toml` qo'llab-quvvatlaydi.

Agar sizga kerak bo'lgan dasturlash tili mavjud bo'lmasa, [biz bilan bog'laning](https://groups.google.com/g/i18n-site) .

## Buyruqlar Qatori Do'stona

Tarjima hujjatlarini boshqarish uchun juda ko'p [og'ir vositalar](https://www.capterra.com/translation-management-software) mavjud.

, `vim` , `vscode` bilan tanish bo'lgan dasturchilar uchun hujjatlarni tahrirlash va versiyalarni boshqarish uchun ushbu vositalardan foydalanish `git` shubhasiz, o'rganish narxini oshiradi.

`KISS` ( `Keep It Simple, Stupid` ) Bu tamoyilga ishonuvchilar orasida korxona darajasidagi yechimlar noqulay, samarasiz va ulardan foydalanish qiyinligi bilan sinonimdir.

Tarjima buyruqlar kiritish va uni bir marta bosish orqali bajarish kerak, hech qanday murakkab muhitga bog'liqlik bo'lmasligi kerak.

Agar kerak bo'lmasa, ob'ektlarni qo'shmang.

## Hech Qanday O'zgartirish, Tarjima Yo'q

[translate-shell](https://github.com/soimort/translate-shell) kabi buyruq qatorini tarjima qilish vositalari ham mavjud.

Biroq, ular fayl modifikatsiyalarini aniqlashni qo'llab-quvvatlamaydi va xarajatlarni kamaytirish va samaradorlikni oshirish uchun faqat o'zgartirilgan fayllarni tarjima qiladi.

## Tarjimani Tahrirlash Mumkin Va Mashina Tarjimasi Mavjud O'zgarishlarni Qayta Yozmaydi.

Tarjima tahrirlanishi mumkin.

Asl matnni o'zgartiring va uni mashinada qayta tarjima qiling, tarjimaga qo'lda kiritilgan o'zgartirishlar yozilmaydi (agar asl matnning ushbu paragrafi o'zgartirilmagan bo'lsa).

## Xindayaning Yuqori Sifatli Tarjimasi

Biz tarjimalarni aniq, silliq va nafis qilish uchun anʼanaviy mashinali tarjima modellari va katta til modellarining texnik afzalliklarini birlashtirgan yangi avlod tarjima texnologiyasini ishlab chiqdik.

Koʻr-koʻrona testlar shuni koʻrsatadiki, bizning tarjima sifatimiz shunga oʻxshash xizmatlarga qaraganda ancha yaxshi.

Xuddi shu sifatga erishish uchun Google Tarjimon tomonidan talab qilinadigan qo‘lda tahrirlash miqdori mos ravishda `3.15` `2.67` marta va `ChatGPT`

## <a rel=id href="#price" id="price"></a> Haddan tashqari raqobatbardosh narxlash

|                                                                                   | USD/million so'z |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Eslatma: Hisob-kitob qilinadigan belgilar soni = manba faylidagi [unicode soni](https://en.wikipedia.org/wiki/Unicode) × tarjimadagi tillar soni

## Tarjimani Qo'llab-Quvvatlang `YAML`

Asbob lug'at kalitlarini emas, faqat lug'at qiymatlarini tarjima qiladi `YAML`

`YAML` asosida siz turli xil dasturlash tillari uchun xalqaro yechimlarni osongina yaratishingiz mumkin.

## Sarlavha Konfiguratsiyasini Qo'llab-Quvvatlang `HOGO`

[HOGO](https://github.com/gohugoio/hugo) blogning sarlavha konfiguratsiyasini qo'llab-quvvatlaydi, `title` , `summary` va `description` maydonlari tarjima qilinadi.

## O'zgaruvchilar Nomlarini Tarjima Qilmang

`Markdown` E-pochta shabloni sifatida, `YAML` til fayli konfiguratsiyasi sifatida foydalanilganda o'zgaruvchan parametrlar bo'ladi (masalan: to'ldirish `${amount}` qabul qilindi).

`${varname}` Bunday o'zgaruvchi nomi inglizcha tarjima sifatida qabul qilinmaydi.

## Xitoy, Yaponiya Va Koreya Uchun Tarjimani Optimallashtirish

### Ingliz Tiliga Tarjima Qilinganda, Sarlavhaning Birinchi Harfi Avtomatik Ravishda Bosh Harf Bilan Yoziladi.

Xitoy, Yaponiya va Koreyada katta yoki kichik harflar mavjud emas, lekin inglizcha sarlavhalar odatda birinchi harfni katta qiladi.

`i18` `MarkDown` dagi sarlavhalarni taniy oladi va katta-kichik harflarni sezgir tilga tarjima qilganda avtomatik ravishda birinchi harfni bosh harf bilan yozadi.

Masalan `为阅读体验而优化` `Optimized for Reading Experience` deb tarjima qilinadi.

### Xitoy, Yapon, Koreys Va Xitoy Tillaridagi Inglizcha Atamalar Tarjima Qilinmaydi

Xitoy, Yaponiya va Koreya hujjatlarida ko'pincha inglizcha atamalar mavjud.

Xitoy, yapon va koreys tillarining mashina tarjimasi inglizcha bo'lmagan tilga aylandi va atamalar ko'pincha birgalikda tarjima qilinadi, masalan, quyidagi xitoycha jumla:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Agar siz Google yoki DeepL dan foydalansangiz, ikkalasi ham asl boʻlib qolishi kerak boʻlgan inglizcha atamalarni notoʻgʻri tarjima qiladi (misol sifatida yapon va frantsuz tillarini oling).

### Google Tarjimon

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` tiliga tarjima qilingan :

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` tiliga tarjima qilingan :

`Falcon` `faucon` deb tarjima qilinadi va `Llama` `lama` . To'g'ri otlar sifatida tarjima qilinmasligi kerak.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Tarjimasi

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` tiliga tarjima qilingan :

<img alt="" src="//p.3ti.site/1720199550.avif">

Yuqoridagilarning frantsuz tiliga tarjimasi (shuningdek DeepL tegishli ismlarni qayta yozish va toq qo'shish `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Tarjimasi

`i18` tarjimasi xitoy, yapon va koreys hujjatlaridagi inglizcha atamalarni taniydi va atamalar o'zgarmasdan qoladi.

Masalan, yuqoridagi yaponcha tarjima natijasi:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransuzcha tarjimasi:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Inglizcha so'z bilan xitoycha, yaponcha va koreyscha matn o'rtasida bo'sh joy bo'lsa yoki inglizcha uzunligi 1 dan katta bo'lsa, so'z atama sifatida qabul qilinadi.

Masalan: `C罗` `Cristiano Ronaldo` deb tarjima qilinadi.

## Ko'p Tilli Veb-Sayt Yaratish Mumkin `i18n.site`

`i18` Ko'p tilli veb-sayt yaratish uchun buyruq qatori vositasiga kiritilgan [`i18n.site`](/i18n.site)

Tafsilotlar uchun [`i18n.site`](/i18n.site) qarang.

## Kod Ochiq Manba

Mijoz butunlay ochiq manba va kodning 90 server tomoni [manba kodini ko'rish uchun shu yerni bosing](/i18n.site/src) .

Biz ochiq manba kodini ishlab chiqish va tarjima qilingan matnlarni tekshirishda ishtirok etish uchun ko'ngillilarni qidiramiz.

Agar sizni qiziqtirsa, iltimos [, → Profilingizni to'ldirish uchun shu yerni bosing](https://ggl.link/i18n) va keyin aloqa uchun [pochta ro'yxatiga](https://groups.google.com/u/2/g/i18n-site) qo'shiling.

## Aloqada Bo'lish

Iltimos <button onclick="mailsub()">, mahsulot yangilanishlariga obuna bo'lish</button> va <button onclick="webpush()">brauzerni yoqish uchun</button> ushbu xatni bosing.

/ akkauntlarimizga ham xush [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)
