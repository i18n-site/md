# Plug-In

Pluginlər `.i18n/conf.yml` -da konfiqurasiya edilə bilər, məsələn:

```yml
addon:
  - i18n.addon/toc
```

## Rəsmi Plagin

* `i18n.addon/toc` :
  Defolt olaraq aktivləşdirilmiş `TOC` əsasında `json` kataloq indeksi yaradın

* `i18n.addon/mouse` siçan :

## Fayl Adı Konvensiyası

Pluginlərin hamısı `npm` paketdir.

Yuxarıdakı `i18n.addon/toc` -a uyğun gələn paket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin defolt olaraq ən son versiyadan istifadə edir və həftəlik yeniləmələri yoxlayır.

Əgər versiyanı düzəltmək istəyirsinizsə, `i18n.addon/toc@0.1.3` yaza bilərsiniz.

Tərcümə əmr satırı `i18n.site` plug-in paketinin konvensiya faylını quraşdıracaq və sonra onu icra edəcək.

Razılaşdırılmış fayl adları aşağıdakılardır

### htmIndex.js

`.i18n/htm/index.js` in sonuna qədər `htmIndex.js` vurulacaq.

Burada `__CONF__` cari konfiqurasiyanın adı ilə əvəz olunacaq (məsələn, `dev` və ya `ol` ).

### afterTran.js

Tərcümə tamamlandıqdan sonra çağırılacaq və daxil edilən parametrlər aşağıdakı kimidir.

* `lang_li` Dil siyahısı : ilk dil mənbə dildir
* `changed` : fayllar
* `root` : kök kataloqu

Qaytarılan dəyər bir lüğətdir, məsələn

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` çıxış faylı siyahısı, `path` fayl yolu və `txt` fayl məzmunudur.

## Daxili Funksiyalar

Daxili `js` iş vaxtı [boa](https://github.com/boa-dev/boa) -in ikincil inkişafına əsaslanır və daxili funksiyalar aşağıdakı kimidir :

* `wPath(path, txt)` : yazın
* `rTxt(path)` : Mətn faylını oxuyun
* `rBin(path)` : faylı oxuyun
* `rDir(dirpath)` : Kataloqu oxuyun, qaytarılan dəyər : siyahısı, fayl siyahısıdır

## İnkişaf Bələdçisi

Plug-in inkişafı bir istinad ola bilər [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)