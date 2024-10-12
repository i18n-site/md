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

`YMAL` ' yardımıyla|`Sözdizimi, çok satırlı özetler yazabilirsiniz.

Blogun sağ tarafındaki dizin ağacının konfigürasyonu da `TOC` dosyadır (önceki bölüme bakın). Yalnızca `TOC` listelenen makaleler blog ana sayfa dizininde görünecektir.

Meta bilgi içermeyen makaleler blog ana sayfasında görünmez ancak sağdaki dizin ağacında görünebilir.

Makaleyi en üste sabitlemeniz gerekiyorsa, lütfen `i18n.site` çalıştırın ve `.i18n/data/blog` altındaki `xxx.yml` dosyayı düzenleyin ve zaman damgasını negatif bir sayıyla değiştirin (birden fazla negatif sayı, mutlak değer olarak küçükten büyüğe doğru sıralanacaktır).