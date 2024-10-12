# Plagin

Plaginlarni `.i18n/conf.yml` da sozlash mumkin, masalan:

```yml
addon:
  - i18n.addon/toc
```

## Rasmiy Plagin

* `i18n.addon/toc` :
  `TOC` ga asoslangan `json` katalog indeksini yarating, sukut bo'yicha yoqilgan

* `i18n.addon/mouse` sichqoncha :

## Fayl Nomi Konventsiyasi

Plaginlar hammasi `npm` ta paketdan iborat.

Yuqoridagi `i18n.addon/toc` ga mos keladigan paket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plagin sukut bo'yicha eng so'nggi versiyadan foydalanadi va har hafta yangilanishlarni tekshiradi.

Agar siz versiyani tuzatmoqchi bo'lsangiz, `i18n.addon/toc@0.1.3` yozishingiz mumkin.

Tarjima buyruq qatori `i18n.site` plagin paketining konventsiya faylini o'rnatadi va keyin uni bajaradi.

Kelishilgan fayl nomlari quyidagicha

### htmIndex.js

`htmIndex.js` `.i18n/htm/index.js` ning oxirigacha AOK qilinadi.

Bu erda `__CONF__` joriy konfiguratsiya nomi bilan almashtiriladi (masalan, `dev` yoki `ol` ).

### afterTran.js

Tarjima tugallangandan keyin chaqiriladi va kiritilgan parametrlar quyidagicha bo'ladi.

* `lang_li` : Tillar roʻyxati, birinchi til manba tildir
* `changed` : fayllar
* `root` : Loyihaning asosiy katalogi

Qaytish qiymati lug'atdir, masalan

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` - chiqish fayllari ro'yxati, `path` - fayl yo'li va `txt` - fayl mazmuni.

## O'rnatilgan Funktsiyalar

O'rnatilgan `js` ish vaqti [boa](https://github.com/boa-dev/boa) ikkinchi darajali rivojlanishiga asoslanadi va o'rnatilgan funktsiyalar quyidagilardan iborat :

* `wPath(path, txt)` faylga :
* `rTxt(path)` : Matn faylini o'qing
* `rBin(path)` : Ikkilik faylni o'qing
* `rDir(dirpath)` : Katalogni o'qing, qaytish qiymati massiv : ro'yxati, fayllar ro'yxati

## Rivojlanish Bo'yicha Qo'llanma

Plaginni ishlab chiqish ma'lumotnoma bo'lishi mumkin [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)