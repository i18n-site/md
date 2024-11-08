# Eklenti

Eklentiler `.i18n/conf.yml` şu şekilde yapılandırılabilir:

```yml
addon:
  - i18n.addon/toc
```

## Resmi Eklenti

* `i18n.addon/toc` : Dizin dizini
  `TOC` dayalı olarak `json` dizin dizini oluştur, varsayılan olarak etkindir

* `i18n.addon/mouse` : Fare efektleri

## Dosya Adı Kuralı

Eklentilerin tümü `npm` pakettir.

Yukarıdaki `i18n.addon/toc` karşılık gelen paket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Eklenti varsayılan olarak en son sürümü kullanır ve haftalık olarak güncellemeleri kontrol eder.

Sürümü düzeltmek istiyorsanız `i18n.addon/toc@0.1.3` yazabilirsiniz.

Çeviri komut satırı `i18n.site` eklenti paketinin kural dosyasını yükleyecek ve ardından çalıştıracaktır.

Kabul edilen dosya adları aşağıdaki gibidir

### htmIndex.js

`.i18n/htm/index.js` sonuna `htmIndex.js` enjekte edilecektir.

Burada `__CONF__` , mevcut konfigürasyonun adıyla ( `dev` veya `ol` gibi) değiştirilecektir.

### afterTran.js

Çeviri tamamlandıktan sonra çağrılacak olup, aktarılan parametreler aşağıdaki gibidir.

* `lang_li` : Dil listesi, ilk dil kaynak dildir
* `changed` : Değiştirilmiş dosyalar
* `root` : Proje kök dizini

Dönüş değeri bir sözlüktür, örneğin

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` çıktı dosyası listesi, `path` dosya yolu ve `txt` dosya içeriğidir.

## Yerleşik Işlevler

Yerleşik `js` çalışma zamanı [boa](https://github.com/boa-dev/boa) nin ikincil gelişimine dayanmaktadır ve yerleşik işlevler aşağıdaki gibidir :

* `wPath(path, txt)` : Dosyaya yaz
* `rTxt(path)` : Metin dosyasını oku
* `rBin(path)` : İkili dosyayı oku
* `rDir(dirpath)` : Dizini okuyun, dönüş değeri bir dizidir : listesi, dosya listesi

## Geliştirme Kılavuzu

Eklenti geliştirme bir referans olabilir [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)