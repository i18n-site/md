# Umumiy Muammo

## Tarjima Satrlarini Qo'shish Yoki O'chirish Tarjimada Chalkashlikka Olib Keladi

Esda tutingki, **tarjimadagi satrlar soni asl matndagi satrlarga mos kelishi kerak** .

Ya'ni, tarjimani qo'lda sozlashda, **tarjima satrlarini qo'shmang yoki o'chirmang** , aks holda tarjima va asl matn o'rtasidagi xaritalash munosabatlari buziladi.

Agar siz tasodifan chiziq qo‘shsangiz yoki o‘chirib tashlasangiz, chalkashliklarga olib kelsangiz, iltimos, tarjimani o‘zgartirishdan oldingi versiyaga tiklang, tarjimani `i18` ishga tushiring va to‘g‘ri xaritalashni qayta keshlang.

Tarjima va asl matn o'rtasidagi xaritalash [i18n.site/token](//i18n.site/token) da yangi token yarating, o'chiring `.i18h/hash` chalkash xaritani tozalash uchun qayta tarjima qiling (lekin bu tarjimaga qo'lda qilingan barcha sozlashlarni yo'qotishiga olib keladi).

## Havola `HTML` Ni `Markdown` Ga Aylantirishni : Oldini Olish Mumkin `YAML`

`YAML` qiymati tarjima uchun `MarkDown` sifatida qabul qilinadi.

`HTML` → `MarkDown` ning konvertatsiyasi biz xohlagan narsa emas, masalan, `<a href="/">Home</a>` ga `[Home](/)` .

Ushbu konvertatsiyani oldini olish uchun `a` `href` dan boshqa har qanday atributni qo'shing, masalan, `<a class="A" href="/">Home</a>` .

## `./I18n/Hash` Quyidagi Fayllar Ziddiyatli

Qarama-qarshi fayllarni o'chirib tashlang va Tarjimonni qayta ishga tushiring `i18`
