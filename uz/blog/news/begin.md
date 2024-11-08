---

brief: |
  Hozirda ikkita ochiq kodli buyruq qatori vositalari joriy qilingan: i18 (MarkDown buyruq satrini tarjima qilish vositasi) va i18n.site (ko'p tilli statik hujjat sayt generatori)

---


# i18n.site · MarkDown Tarjima Va Veb-Sayt Yaratish Vositasi Endi Onlayn!

Yarim yildan ortiq rivojlanishdan so'ng, onlayn [https://i18n.site](//i18n.site)

Hozirgi vaqtda ikkita ochiq kodli buyruq qatori vositalari qo'llanilmoqda:

* `i18` Buyruqlar qatorini tarjima qilish : MarkDown
* `i18n.site` : **O'qish tajribasi uchun optimallashtirilgan** ko'p tilli statik hujjat sayt generatori

Tarjima `Markdown` formatini mukammal darajada saqlab turishi mumkin. Fayl o'zgarishlarini aniqlay oladi va faqat o'zgarishlar kiritilgan fayllarni tarjima qiladi.

Tarjimani tahrirlash mumkin; agar siz asl matnni o'zgartirsangiz va uni qayta tarjima qilsangiz, tarjimaga qo'lda kiritilgan o'zgartirishlar yozilmaydi (agar asl matnning ushbu bandi o'zgartirilmagan bo'lsa).

[➤ github Library-ga avtorizatsiya qilish va avtomatik ravishda kuzatib i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) va **$50 olish** uchun shu yerni bosing.

## Kelib Chiqishi

Internet davrida butun dunyo bozor bo'lib, ko'p tillilik va mahalliylashtirish asosiy ko'nikmalardir.

Mavjud tarjimani boshqarish vositalari juda og'irdir, `git` versiya boshqaruviga tayanadigan dasturchilar uchun ular hali ham buyruq qatorini afzal ko'rishadi.

Shunday qilib, men tarjima vositasi `i18` ishlab chiqdim va tarjima vositasi asosida ko'p tilli statik sayt generatorini `i18n.site` qurdim.

![](https://p.3ti.site/1723777556.avif)

Bu hali boshlanishi, qilinadigan ishlar ko'p.

Misol uchun, statik hujjat saytini ijtimoiy media va elektron pochta obunalari bilan bog'lash orqali foydalanuvchilarga yangilanishlar chiqarilganda o'z vaqtida murojaat qilish mumkin.

Misol uchun, ko'p tilli forumlar va ish tartibi tizimlari har qanday veb-sahifaga joylashtirilishi mumkin, bu esa foydalanuvchilarga to'siqlarsiz muloqot qilish imkonini beradi.

## Ochiq Manba

Frontend, backend va buyruq qatori [kodlari hammasi ochiq manbadir](https://i18n.site/i18n.site/c/src) (tarjima modeli hali ochiq manba emas).

Amaldagi texnologik stack quyidagicha:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Buyruqlar qatori va backend zangga asoslangan holda ishlab chiqilgan.

orqa qism [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Buyruqlar qatori [js Dvigatel boa_engine](https://docs.rs/boa_engine) , [o'rnatilgan ma'lumotlar bazasi fjall](https://github.com/fjall-rs/fjall) .

server [contabo](https://my.contabo.com) VPS

ma'lumotlar bazasi [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

O'z-o'zidan SMTP [chasquid](https://github.com/albertito/chasquid) ga xat yuboring.

## Biz Bilan Bog'lanish

Yangi mahsulotlar paydo bo'lganda, muammolar muqarrar.

Google Forum [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) orqali biz bilan bog'laning :