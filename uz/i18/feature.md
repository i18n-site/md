# Mahsulot Xususiyatlari

`i18` - tarjima uchun buyruq qatori vositasi Markdown & Yaml

## Markdown Formatini Mukammal Darajada Ushlab Turishi Mumkin

Formatga zarar bermasdan Markdown jadvallarini tarjima qilishni qo'llab-quvvatlaydi, matematik formulalar yoki havolalardagi so'zlarni tarjima qilmaydi;

HTML Markdown ning tarjimasini qo'llab-quvvatlaydi, HTML `MarkDown` ichiga o'rnatilgan `<pre>` va `<code>` teglardagi kontent tarjima qilinmaydi

## Matematik Formulalarni Taniy Oladi Va Tarjimani O'tkazib Yuboradi

Matematik formulalar tan olinadi va tarjima o'tkazib yuboriladi.

Matematik formulalarni yozish uchun [" Github Matematik ifodalarni yozish haqida"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) ga qarang.

## Kod Parchalarida Sharhlarni Tarjima Qilish Qobiliyati

Inline kod va kod parchalari tarjima qilinmaydi, lekin koddagi izohlarni tarjima qilish mumkin.

Tarjima sharhlari ` ``` ` dan keyin tilni ko'rsatishi kerak, masalan ` ```rust ` :

Hozirda u `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [va boshqa tillarda](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) izohlarni tarjima qilishni qoʻllab-quvvatlaydi.

Agar siz koddagi barcha ingliz bo'lmagan belgilarni tarjima qilmoqchi bo'lsangiz, kod segmentini ` ```i18n ` bilan belgilang.

Agar sizga kerak bo'lgan dasturlash tili mavjud bo'lmasa, [biz bilan bog'laning](https://groups.google.com/g/i18n-site) .

## Buyruqlar Qatori Do'stona

Tarjima hujjatlarini boshqarish uchun juda ko'p [og'ir vositalar](https://www.capterra.com/translation-management-software) mavjud.

`git` , `vim` va `vscode` bilan tanish bo'lgan dasturchilar uchun hujjatlarni tahrirlash va versiyalarni boshqarish uchun ushbu vositalardan foydalanish, shubhasiz, o'rganish narxini oshiradi.

`KISS` ( `Keep It Simple, Stupid` ) Prinsipiy imonlilar orasida korporativ darajadagi yechimlar noqulay, samarasiz va ulardan foydalanish qiyinligi bilan sinonimdir.

Tarjima buyruqlar kiritish va uni bir marta bosish orqali bajarish kerak, hech qanday murakkab muhitga bog'liqlik bo'lmasligi kerak.

Agar kerak bo'lmasa, ob'ektlarni qo'shmang.

## Hech Qanday O'zgartirish, Tarjima Yo'q

[translate-shell](https://github.com/soimort/translate-shell) kabi buyruq qatorini tarjima qilish vositalari ham mavjud.

Biroq, ular fayl modifikatsiyalarini aniqlashni qo'llab-quvvatlamaydi va xarajatlarni kamaytirish va samaradorlikni oshirish uchun faqat o'zgartirilgan fayllarni tarjima qiladi.

## Tarjimani Tahrirlash Mumkin Va Mashina Tarjimasi Mavjud O'zgarishlarni Qayta Yozmaydi.

Tarjima tahrirlanishi mumkin.

Asl matnni o'zgartiring va uni mashinada qayta tarjima qiling, tarjimaga qo'lda kiritilgan o'zgartirishlar qayta yozilmaydi (agar asl matnning ushbu bandi o'zgartirilmagan bo'lsa).

## Eng Yaxshi Sifatli Mashina Tarjimasi

Biz tarjimalarni aniq, silliq va nafis qilish uchun anʼanaviy mashinali tarjima modellari va katta til modellarining texnik afzalliklarini birlashtirgan yangi avlod tarjima texnologiyasini ishlab chiqdik.

Ko'r-ko'rona testlar shuni ko'rsatadiki, bizning tarjima sifatimiz shunga o'xshash xizmatlarga qaraganda ancha yaxshi.

Xuddi shu sifatga erishish uchun Google Translate va `ChatGPT` tomonidan talab qilinadigan qo‘lda tahrirlash miqdori biznikidan mos ravishda `2.67` va `3.15` baravar ko‘p.

## <a rel=id href="#price" id="price"></a> Haddan tashqari raqobatbardosh narxlash

|                                                                                   | USD/million so'z |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ github Library-ga avtorizatsiya qilish va avtomatik ravishda kuzatib i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) va **$50 olish** uchun shu yerni bosing.

Eslatma: Hisob-kitob qilinadigan belgilar soni = manba faylidagi [unicode soni](https://en.wikipedia.org/wiki/Unicode) × tarjimadagi tillar soni

## Tarjimani Qo'llab-Quvvatlash `YAML`

Asbob lug'at kalitlarini emas, balki faqat lug'at qiymatlarini `YAML` ga tarjima qiladi.

`YAML` tarjimasiga asoslanib, siz turli xil dasturlash tillari uchun xalqaro yechimlarni osongina yaratishingiz mumkin.

## Tarjimani Qo'llab-Quvvatlash `HOGO` Sarlavha Konfiguratsiyasi

statik [HOGO](https://github.com/gohugoio/hugo) sarlavha konfiguratsiyasini qo'llab-quvvatlaydi va faqat `title` , `summary` , `brief` va `description` maydonlarini tarjima qiladi.

## O'zgaruvchilar Nomlarini Tarjima Qilmang

`Markdown` elektron pochta shabloni sifatida ishlatiladi, `YAML` til fayli konfiguratsiyasi sifatida ishlatiladi va o'zgaruvchan parametrlar bo'ladi (masalan: zaryadlash `${amount}` olindi).

`${varname}` kabi o'zgaruvchilar nomlari ingliz tiliga tarjima sifatida qabul qilinmaydi.

## Xitoy, Yaponiya Va Koreya Uchun Tarjimani Optimallashtirish

### Ingliz Tiliga Tarjima Qilinganda, Sarlavhaning Birinchi Harfi Avtomatik Ravishda Bosh Harf Bilan Yoziladi.

Xitoy, Yaponiya va Koreyada katta va kichik harflar mavjud emas, lekin inglizcha nomlar uchun konventsiya birinchi harfni bosh harf bilan yozishdir.

`i18` `MarkDown` dagi sarlavhani taniy oladi va katta harflarni sezgir tilga tarjima qilganda avtomatik ravishda birinchi harfni bosh harf bilan yozadi.

Masalan, `为阅读体验而优化` `Optimized for Reading Experience` ga tarjima qilinadi.

### Xitoy, Yapon, Koreys Va Xitoy Tillaridagi Inglizcha Atamalar Tarjima Qilinmaydi

Xitoy, Yaponiya va Koreya hujjatlarida ko'pincha inglizcha atamalar mavjud.

Xitoy, yapon va koreys tillarining mashina tarjimasi inglizcha bo'lmagan tilga aylandi va atamalar ko'pincha birgalikda tarjima qilinadi, masalan, quyidagi xitoycha jumla:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Agar siz Google yoki DeepL dan foydalansangiz, ikkalasi ham asl boʻlib qolishi kerak boʻlgan inglizcha atamalarni notoʻgʻri tarjima qiladi (misol sifatida yapon va frantsuz tillarini oling).

### Google Tarjimon

Yapon tiliga tarjima `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Fransuz tiliga `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` qilingan :

`Falcon` `faucon` deb tarjima qilinadi va `Llama` `lama` deb tarjima qilinadi. To'g'ri otlar sifatida ular tarjima qilinmasligi kerak.

![](//p.3ti.site/1720199451.avif)

### DeepL Tarjimasi

Yapon tiliga tarjima `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

Yuqoridagilarning DeepL tiliga tarjimasi (shuningdek, tegishli nomlarni qayta yozish va toq `... ` qo'shish):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Tarjimasi

`i18` ning tarjimasi xitoy, yapon va koreys hujjatlaridagi ingliz atamalarini taniydi va atamalar o'zgarmasdan qoladi.

Masalan, yuqoridagi yaponcha tarjima natijasi:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Fransuzcha tarjimasi:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Inglizcha so'z bilan xitoycha, yaponcha va koreyscha matn o'rtasida bo'sh joy bo'lsa yoki inglizcha uzunligi 1 dan katta bo'lsa, so'z atama sifatida qabul qilinadi.

Masalan: `C罗` `Cristiano Ronaldo` deb tarjima qilinadi.

## Veb-Sayt Yaratish Uchun `i18n.site` Dan Ortiq Tillar Bilan Birlashtirilishi Mumkin

`i18` ko'p tilli veb-sayt yaratish buyruq qatori vositasi [`i18n.site`](/i18n.site) bilan birlashtirilgan.

Tafsilotlar uchun [`i18n.site`](/i18n.site) hujjatiga qarang.

## Kod Ochiq Manba

Mijoz butunlay ochiq manba va kodning % server 90 [manba kodini ko'rish uchun shu yerni bosing](/i18n.site/c/src) .

Biz ochiq manba kodini ishlab chiqish va tarjima qilingan matnlarni tekshirishda ishtirok etish uchun ko'ngillilarni qidiramiz.

Agar sizni qiziqtirsa, iltimos [, → Profilingizni to'ldirish uchun shu yerni bosing](https://ggl.link/i18n) va keyin aloqa uchun [pochta ro'yxatiga](https://groups.google.com/u/2/g/i18n-site) qo'shiling.

## Aloqada Bo'lish

Iltimos <button onclick="mailsub()">, mahsulot yangilanishlariga obuna bo'lish</button> va <button onclick="webpush()">brauzerni yoqish</button> uchun ushbu xatni bosing.

/ akkauntlarimizga ham [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) kelibsiz [X.COM: @i18nSite](https://x.com/i18nSite)