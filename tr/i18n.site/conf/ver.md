# Proje Sürümü

Örnek olarak demo projesini ele alalım:

`en/demo2/v` , kenar çubuğu taslağında proje adının sağında görüntülenecek olan projenin geçerli sürüm numarasıdır.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Burada `en/` , yapılandırılan çeviri kaynak `.i18n/conf.yml` karşılık gelen dil kodudur.

Kaynak diliniz İngilizce değilse `v` dosyası kaynak dilinizin proje dizinine yerleştirilmelidir. 

Belgelerin geçmiş sürümlerine göz atma özelliği geliştirilme aşamasındadır.

Çok fazla sürüm numarası nedeniyle arama motorları tarafından dizine eklenen sayfaların karışıklığını önlemek için, büyük güncellemeler (örneğin `v1` , `v2` ) yayınlanırken belgenin yalnızca sürüm numarasını değiştirmeniz önerilir.

## Farklı Projeler Için Dosya Dizinlerini Bölmek Üzere Boş `v` Kullanın

Demo projesinde `en/demo2/v` e ek olarak `en/blog` ve `en/demo1` dizinlerinin içeriğinin de boş olduğunu görebilirsiniz `v` files.txt).

Boş `v` kenar çubuğu anahattında görüntülenmez, ancak `v` dosyası mevcut olduğu sürece, dizindeki ve alt dizinlerdeki dosyalar için bağımsız bir dizin oluşturulur.

Farklı projelerin indekslerini bölerek sitenin tamamındaki tüm dosyaların indeksinin aynı anda yüklenmesinden kaynaklanan yavaş erişimi önleyebilirsiniz.

Örneğin, demo projesinde karşılık gelen [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) dosyası `blog` :

