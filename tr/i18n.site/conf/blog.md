# Blog Şablonu

`use: Blog` üzerinden `i18n/conf.yml` , oluşturma için blog şablonunu kullanmak anlamına gelir.

Blog gönderisinin `markdown` dosyasının meta bilgileri yapılandırması gerekiyor.

Meta bilgileri dosyanın başında `---` ile başlayıp `---` ile bitmelidir. Ortadaki konfigürasyon bilgilerinin formatı `YAML` .

Bir demo dosyasının konfigürasyonu aşağıdaki gibidir:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` blog dizin sayfasında görüntülenecek içerik özetini belirtir.

`YMAL` ' yardımıyla | `Sözdizimi, çok satırlı özetler yazabilirsiniz.

Blogun sağ tarafındaki dizin ağacının konfigürasyonu da `TOC` dosyadır (önceki bölüme bakın). Yalnızca `TOC` listelenen makaleler blog ana sayfa dizininde görünecektir.

Meta bilgi içermeyen makaleler blog ana sayfasında görünmez ancak sağdaki dizin ağacında görünebilir.

## Yazar Bilgileri

Yazar bilgileri makalenin meta bilgilerinde şu şekilde yazılabilir:

```yml
author: marlowe
```

Daha sonra kaynak dil dizininde `author.yml` düzenleyin ve : gibi yazar bilgilerini ekleyin.

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ve `title` tümü isteğe bağlıdır. `name` ayarlanmamışsa anahtar adı (burada `marlowe` ) `name` olarak kullanılacaktır.

Demo proje [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ve [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) bakın

## Sabitlenmiş Makale

Makaleyi en üste sabitlemeniz gerekiyorsa lütfen `i18n.site` çalıştırın ve `.i18n/data/blog` altındaki `xxx.yml` dosyayı düzenleyin ve zaman damgasını negatif bir sayıyla değiştirin (birden fazla negatif sayı büyükten küçüğe doğru sıralanacaktır).