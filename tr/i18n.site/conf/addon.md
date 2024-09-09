# Eklenti

`.i18n/conf.yml` dosyasında eklentiler şu şekilde yapılandırılabilir:

```yml
addon:
  - i18n.addon/toc
```

## Resmi Eklenti

* `i18n.addon/toc` : İçindekiler dizini
  `TOC` temelinde `json` içerik dizini oluşturur, varsayılan olarak etkindir

* `i18n.addon/mouse` : Fare efektleri

## Dosya Adı Kuralları

Eklentiler, `npm` paketleridir.

Yukarıdaki `i18n.addon/toc` için karşılık gelen paket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Eklentiler, varsayılan olarak en son sürümü kullanır ve haftalık olarak güncellemeleri kontrol eder.

Sürümü sabitlemek istiyorsanız `i18n.addon/toc@0.1.3` yazabilirsiniz.

Çeviri komut satırı `i18n.site`, eklenti paketinin anlaşmalı dosyasını yükler ve ardından yürütür.

Anlaşılan dosya adları aşağıdaki gibi belirtilmiştir

### htmIndex.js

`.i18n/htm/index.js` dosyasının sonuna `htmIndex.js` enjekte edilir.

`__CONF__` ifadesi, mevcut yapılandırma adıyla (örneğin `dev` veya `ol`) değiştirilir.

### afterTran.js

Çeviri tamamlandıktan sonra çağrılır, aşağıdaki parametreler ile:

* `lang_li` : Dil listesi, ilk dil kaynak dilidir
* `changed` : Değiştirilmiş dosyalar
* `root` : Proje kök dizini

Dönüş değeri, örneğin aşağıdaki gibi bir sözlüktür:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` çıktı dosya listesi, `path` dosya yolu, `txt` dosya içeriğidir.

## Yerleşik Fonksiyonlar

Yerleşik `js` çalışma zamanı, [boa](https://github.com/boa-dev/boa) ikincil geliştirilmiş versiyonuna dayanmaktadır ve aşağıdaki yerleşik fonksiyonlar mevcuttur:

* `wPath(path, txt)` : Dosyaya yaz
* `rTxt(path)` : Metin dosyasını oku
* `rBin(path)` : İkili dosyayı oku
* `rDir(dirpath)` : Dizini oku, dizi olarak dizin listesi ve dosya listesi döner

## Geliştirme Kılavuzu

Eklenti geliştirme için referans olarak [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon) incelenebilir