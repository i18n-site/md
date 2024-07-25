# Ortak Sorun

## Çeviride Karışıklığa Neden Olacak Şekilde Çeviri Satırlarının Eklenmesi Veya Silinmesi

**Çevirideki satır sayısının orijinal metindeki satır sayısına karşılık gelmesi gerektiğini** unutmayın.

Yani çeviriyi manuel olarak ayarlarken **çeviriye satır eklemeyin veya silmeyin** , aksi takdirde çeviri ile orijinal metin arasındaki eşleme ilişkisi bozulur.

Yanlışlıkla bir satır ekler veya silerseniz, karışıklığa neden olursanız, lütfen çeviriyi değişiklik yapılmadan önceki sürüme geri yükleyin, çeviriyi `i18` çalıştırın ve doğru eşlemeyi yeniden önbelleğe alın.

Çeviri ile orijinal metin arasındaki eşleme belirtece bağlıdır. [i18n.site/token](//i18n.site/token) 'de yeni bir belirteç oluşturun, silin `.i18h/hash` ve kafa karıştırıcı eşlemeyi temizlemek için tekrar çevirin (ancak bu, çeviride yapılan tüm manuel ayarlamaların kaybolmasına neden olur).

## Bağlantı `HTML` Nın `Markdown` a Dönüştürülmesi : Önlenir `YAML`

`YAML` nin değeri çeviri için `MarkDown` olarak değerlendirilecektir.

Bazen `HTML` → `MarkDown` dönüşümü istediğimiz şey değildir, örneğin `<a href="/">Home</a>` ın `[Home](/)` .

Bu dönüşümü önlemek için `a` etiketine `href` dışında `<a class="A" href="/">Home</a>` bir özellik ekleyin.

## Aşağıdaki Dosyalar Çakışıyor `./I18n/Hash`

Çakışan dosyaları silin ve `i18` Translate'i yeniden çalıştırın.
