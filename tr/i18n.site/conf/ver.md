# Proje Sürümü

Örnek olarak demo projesini ele alalım:

`en/demo2/v` , kenar çubuğunda proje adının sağında görüntülenecek olan projenin mevcut sürüm numarasıdır.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Burada `en/`, `.i18n/conf.yml` dosyasında yapılandırılan çeviri kaynak diline karşılık gelen dil kodudur.

Eğer kaynak diliniz İngilizce değilse, `v` dosyasını kaynak dilinizin proje dizinine yerleştirilmesi gerekmektedir.

Belgelerin geçmiş sürümlerine göz atma özelliği şu anda geliştirme aşamasındadır.

Arama motorlarının indekslediği sayfalarda karışıklığı önlemek için, yalnızca önemli güncellemeler (örneğin `v1`, `v2`) üzerinde belge sürüm numarasını değiştirmeniz önerilir.

## Farklı projelerin dosya dizinlerini ayırmak için boş `v` dosyalarını kullanabilirsiniz

Demo projede `en/demo2/v`'nin yanı sıra `en/blog` ve `en/demo1` dizinlerinde de boş `v` dosyaları bulunmaktadır.

Kenar çubuğu anahattında boş bir `v` görüntülenmez, ancak `v` dosyasının var olduğu sürece, bu dizin ve alt dizinlerdeki dosyalar için bağımsız bir indeks oluşturulur.

Farklı projelerin dizinlerini ayırmak, tüm sitenin dosya dizinlerinin aynı anda yüklenmesi sonucu ortaya çıkan yavaş erişimi önlemek için kullanışlıdır.

Örneğin, demo projede `blog` dizinine karşılık gelen indeks dosyası: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)