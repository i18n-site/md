# Proje Sürümü

Örnek olarak demo projesini ele alalım:

`en/demo2/v` , kenar çubuğu taslağında proje adının sağında görüntülenecek olan projenin geçerli sürüm numarasıdır.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Burada `en/` `.i18n/conf.yml` tarafından yapılandırılan çeviri kaynak diline karşılık gelen dil kodudur.

Kaynak diliniz İngilizce değilse, `v` dosyasının kaynak dilinizin proje dizinine yerleştirilmesi gerekir.

Belgelerin geçmiş sürümlerine göz atma özelliği geliştirilme aşamasındadır.

Arama motorları tarafından indekslenen sayfalarda çok fazla sürüm numarasının karışıklığa yol açmasını önlemek için, belgenin sürüm numarasını yalnızca büyük güncellemeler yayınlandığında ( `v1` , `v2` gibi) değiştirmeniz önerilir.

## Farklı Projelerin Dosya Dizinlerini Bölmek Için Boş `v` Dosyalarını Kullanın

Demo projede `en/demo2/v` ek olarak `en/blog` ve `en/demo1` dizinlerinde de boş `v` dosyanın olduğunu görebilirsiniz.

Kenar çubuğu anahattında boş bir `v` görüntülenmez ancak `v` dosyası olduğu sürece dizindeki ve alt dizinlerdeki dosyalar için bağımsız bir dizin oluşturulur.

Farklı projelerin indekslerini bölerek sitenin tamamındaki tüm dosyaların indeksinin aynı anda yüklenmesinden kaynaklanan yavaş erişimi önleyebilirsiniz.

Örneğin demo projesinde `blog` karşılık gelen indeks dosyası : [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)