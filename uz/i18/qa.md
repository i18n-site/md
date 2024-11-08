# Tss

## Tarjima Satrlarini Qo'shish Yoki O'chirish Tarjimada Chalkashlikka Olib Keladi

> [!WARN]
> Esda tutingki, **tarjimadagi satrlar soni asl matndagi satrlarga mos kelishi kerak** .
> Ya'ni, tarjimani qo'lda sozlashda, **tarjima satrlarini qo'shmang yoki o'chirmang** , aks holda tarjima va asl matn o'rtasidagi xaritalash munosabatlari buziladi.

Agar siz tasodifan qatorni qo‘shsangiz yoki o‘chirib tashlasangiz, chalkashliklarga olib kelsangiz, o‘zgartirishdan oldin tarjimani versiyaga tiklang, `i18` tarjimasini qayta ishga tushiring va to‘g‘ri xaritalashni qayta keshlang.

Tarjima va asl matn o'rtasidagi xaritalash tokenga bog'langan [i18n.site/token](//i18n.site/token) `.i18h/hash` o'chiring va chalkash xaritani tozalash uchun qayta tarjima qiling (lekin bu tarjimaga qo'lda kiritilgan barcha sozlashlarni yo'qotishiga olib keladi).

## `YAML` : Havolani `HTML` `Markdown` Aylantirmaslik Uchun Qanday Qilib

Tarjima uchun `YAML` qiymati `MarkDown` sifatida qabul qilinadi.

Ba'zan `HTML` → `MarkDown` dan konvertatsiya qilish biz xohlagan narsa emas, masalan, `<a href="/">Home</a>` `[Home](/)` ga aylantiriladi.

`a` tegiga `href` dan boshqa atributni qo'shish, masalan, `<a class="A" href="/">Home</a>` , bu konvertatsiyadan qochishi mumkin.

## `./i18n/hash` Fayl Quyida Ziddiyatli

Qarama-qarshi fayllarni o'chiring va `i18` tarjimasini qayta ishga tushiring.