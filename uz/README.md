<h1 style="justify-content:space-between">3Ti.Site · Chegarasiz o&#39;ylang<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ko'p tilli statik sayt generatori Markdownni avtomatik ravishda [yuzdan ortiq turli tillarga](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tarjima qilishi mumkin.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ba'zi odamlar so'rashlari mumkin, endi brauzerlarda o'rnatilgan tarjima funktsiyalari mavjud, veb-saytni xalqarolashtirish kerak emasmi?

Aytmoqchimanki **, faqat butun saytni xalqarolashtirish orqali biz ko'p tilli sayt ichidagi to'liq matnli qidiruv va qidiruv tizimini optimallashtirishni qo'llab-quvvatlashimiz mumkin** .

## Ketma-Ketlik

Injil · Ibtido :

> Qadim zamonlarda, tillar bir bo‘lganida, insoniyat osmonga yetib boruvchi minora, Xudoning qudratini e’lon qiladigan darvoza qurgan.
>
> Xudo: "Odamlar bir qabila bo'lib birlashadilar, tillari umumiydir va bu minora faqat muqaddimadir. Endi ular o'z xohishlariga erishadilar va hech qanday hurmat qolmaydi".
>
> Shunday qilib, Xudo odamlarni turli burchaklarga tarqatib, turli tillarni ishlatib, tushdi.
>
> O'shandan beri odamlarning muloqoti qiyinlashdi, tortishuvlar cheksiz edi va endi osmonga tegadigan minora yo'q edi.

“Uch tana” (xitoycha talaffuzi: `3Ti` ) ilmiy-fantastik romani elektromagnit to‘lqinlar orqali muloqot qiladigan, til to‘siqlariga ega bo‘lmagan va texnologik jihatdan gullab-yashnayotgan begona sivilizatsiyani o‘ylab topadi.

Umid qilamanki, yer yuzidagi odamlar uch tanali odamlarga o‘xshab, tilga bog‘lanmagan holda muloqot qilish va butun insoniyatni yana birlashtirish imkonini beradigan vosita yarataman.

## Oʻquv Qoʻllanma

## Funktsiya Kirish

### Markdown Formatini Saqlang

### Tarjimani O'zgartirish

Tarjimani o'zgartirgandan so'ng, keshni yangilash uchun `./i18n.sh` qayta ishga tushirishingiz kerak.

### Tarjima Eslatmalari

Tarjima izohlari \``` dan keyin tilni ko`rsatishi kerak, masalan, ` \```rust` .

Hozirda rust, c, cpp, java, js, coffee, python va bash uchun sharhlar tarjimasini qo'llab-quvvatlaydi.

Koʻproq tillardagi sharhlar uchun tarjimani qoʻshish uchun [tran_md/src/comment.coffee-](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ni tahrirlang.

### Proksi-Serverni Sozlang

Quyidagi muhit oʻzgaruvchilarini oʻrnatish Google Translate API chaqiruvlariga proksi-server orqali oʻtish imkonini beradi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### O'zgaruvchan Joylashtirish

```
test: 测试变量<br 0>嵌入
```

### Keshni Bo'shating

```bash
rm -rf .i18n/.cache
```
