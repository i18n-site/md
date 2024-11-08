# Tss

## Tasodifan O'chirildi `.i18n/v` , Bu `npm` Paketni Nashr Eta Olmadi

`npm` paket tomonidan chiqarilgan tarixiy versiya `.i18n/v/ol/v.hash` da saqlanadi.

Agar siz tasodifan `.i18n/v/ol` `npm` paket chiqarilmaydi.

Bu vaqtda, avvalo, loyihangizning oxirgi versiyasining versiya raqamini [npmjs.com](//npmjs.com) masalan, `0.1.9` toping.

Keyin faylni yaratish uchun quyidagi `bash` ga qarang.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Shuni esda tutingki, bu tarzda tuzatish fayl tarixini yo'qotadi, bu keyingi versiyani bosqichma-bosqich yangilashni imkonsiz qiladi va barcha kontent bir marta qayta paketlanadi va yuklanadi.