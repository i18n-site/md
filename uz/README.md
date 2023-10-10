<h1 style="justify-content:space-between">3Ti.Site · Chegarasiz o&#39;ylang<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, ko'p tilli statik sayt generatori Markdownni avtomatik ravishda [yuzdan ortiq turli tillarga](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tarjima qilishi mumkin.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Ba'zi odamlar so'rashlari mumkin, endi brauzerlarda o'rnatilgan tarjima funktsiyalari mavjud, veb-saytni xalqarolashtirish kerak emasmi?

Aytmoqchimanki **, faqat butun saytni xalqarolashtirish orqali biz ko'p tilli sayt ichidagi to'liq matnli qidiruv va qidiruv tizimini optimallashtirishni qo'llab-quvvatlashimiz mumkin** .

## Ketma-Ketlik

"Injil · Ibtido":

> Qadimgi odamlar tillarni farqlashmagan. Ular g'urur bilan tug'ilganlar va tepasi osmonga yetadigan baland minora qurishni xohlashgan.
>
> <blockquote><p>Xudo insonning takabburligidan norozi bo&#39;lib, barcha tirik mavjudotlarni bir-birini tushuna olmay, turli joylarga tarqatib yubordi.</p></blockquote>
>
> <blockquote><p>O&#39;shandan beri odamlar uchun muloqot qilish qiyin bo&#39;ldi, tortishuvlar davom etdi va dunyoda Bobil minorasi yo&#39;q.</p></blockquote>

“Uch tana” (xitoycha talaffuzi: `3Ti` ) ilmiy-fantastik romani elektromagnit to‘lqinlar orqali muloqot qiladigan, til to‘siqlariga ega bo‘lmagan va texnologik jihatdan gullab-yashnayotgan begona sivilizatsiyani o‘ylab topadi.

Umid qilamanki, bu vosita yordamida yer yuzidagi odamlar uch tanali odamlardek bo‘ladi, muloqot til bilan cheklanmaydi, butun insoniyat yana birlashadi.

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
