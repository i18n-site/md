# Blog Shabloni

`i18n/conf.yml` dan `use: Blog` ko'rsatish uchun blog shablonidan foydalanishni anglatadi.

Blog postining `markdown` fayli meta-ma'lumotni sozlashi kerak.

Meta-ma'lumot faylning boshida bo'lishi kerak, `---` dan boshlanib, `---` bilan tugaydi. O'rtadagi konfiguratsiya ma'lumotlarining formati `YAML` ga teng.

Namoyish faylining konfiguratsiyasi quyidagicha:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` blog indeksi sahifasida ko'rsatiladigan kontent xulosasini bildiradi.

`YMAL` yordamida|`Sintaksis, siz ko'p qatorli xulosalar yozishingiz mumkin.

Blogning o'ng tomonidagi katalog daraxtining konfiguratsiyasi ham `TOC` fayl ( `TOC` bobga qarang).

Meta-ma'lumotni o'z ichiga olmagan maqolalar blogning bosh sahifasida ko'rinmaydi, lekin o'ngdagi katalog daraxtida paydo bo'lishi mumkin.

Agar siz maqolani yuqoriga qo'yishingiz kerak bo'lsa, iltimos, `i18n.site` ishga tushiring va `.i18n/data/blog` dan past bo'lgan `xxx.yml` ta faylni tahrirlang va vaqt tamg'asini manfiy raqamga o'zgartiring (bir nechta salbiy raqamlar mutlaq qiymatda kichikdan kattagacha tartiblanadi).