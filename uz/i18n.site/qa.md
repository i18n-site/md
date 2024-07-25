# Umumiy Muammo

## Tasodifan `Npm` `.i18n/V`

`npm` paketining tarixiy versiyasi saqlangan `.i18n/v/ol/v.hash`

Agar siz tasodifan o'chirsangiz `.i18n/v/ol` `npm` paket nashr etilmaydi.

Ayni paytda, avvalo, loyihangizning oxirgi versiyasining versiya raqamini toping, masalan [npmjs.com](//npmjs.com) `0.1.9`

Keyin quyidagi `bash` yaratishga qarang.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Shuni esda tutingki, bu tarzda tuzatish fayl tarixini yo'qotadi, bu keyingi versiyani bosqichma-bosqich yangilashni imkonsiz qiladi va barcha kontent bir marta qayta paketlanadi va yuklanadi.

