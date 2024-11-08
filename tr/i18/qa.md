# Sss

## Çeviride Karışıklığa Neden Olacak Şekilde Çeviri Satırlarının Eklenmesi Veya Silinmesi

> [!WARN]
> **Çevirideki satır sayısının orijinal metindeki satır sayısına karşılık gelmesi gerektiğini** unutmayın.
> Yani çeviriyi manuel olarak ayarlarken **çeviriye satır eklemeyin veya silmeyin** , aksi takdirde çeviri ile orijinal metin arasındaki eşleme ilişkisi bozulacaktır.

Yanlışlıkla bir satır ekler veya silerseniz, karışıklığa neden olursanız, lütfen değişiklik yapmadan önce çeviriyi sürüme geri yükleyin, `i18` çevirisini yeniden çalıştırın ve doğru eşlemeyi yeniden önbelleğe alın.

Çeviri ile orijinal metin arasındaki eşleme belirtece bağlıdır. [i18n.site/token](//i18n.site/token) `.i18h/hash` silin ve kafa karıştırıcı eşlemeyi temizlemek için tekrar çevirin (ancak bu, çeviride yapılan tüm manuel ayarlamaların kaybolmasına neden olur).

## `YAML` : Bağlantı `HTML` `Markdown` Dönüştürülmesi Nasıl Önlenir?

Çeviri için `YAML` değeri `MarkDown` olarak kabul edilir.

Bazen `HTML` → `MarkDown` dönüşümü istediğimiz şey değildir, örneğin `<a href="/">Home</a>` `[Home](/)` dönüştürülmesi gibi.

`a` etiketine `href` dışında herhangi bir özelliğin ( `<a class="A" href="/">Home</a>` gibi) eklenmesi bu dönüşümü önleyebilir.

## Aşağıda `./i18n/hash` Dosya Çakışması Var

Çakışan dosyaları silin ve `i18` çeviriyi yeniden çalıştırın.