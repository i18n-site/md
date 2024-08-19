# Ürün Özellikleri

## `i18` Çevirisi Entegre

Program, yerleşik `i18` çevirisine sahiptir; özel kullanım için lütfen [➔ `i18` belgeye](/i18) bakın.

## Tarayıcı Dilini Otomatik Eşleştir

Web sitesinin varsayılan dili, tarayıcının dilini otomatik olarak eşleştirecektir.

Kullanıcı dilini manuel olarak değiştirdikten sonra, kullanıcı seçimini hatırlayacaktır.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) kodu:

## Mobil Uyumluluk

Cep telefonlarında da mükemmel bir okuma deneyimi sunar.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Ön Uç Yüksek Kullanılabilirlik

`i18n.site` varsayılan olarak, site içeriğini [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) gibi çeşitli `CDN`'ler üzerinden `npm` üzerinde yüklenen içeriklerin yardımıyla `npmjs.com` adresine yayınlayacaktır.

Bu temel üzerinde, Çin kullanıcılarının da istikrarlı erişim sağlamak için Çin ana karasındaki yansıtma kaynakları eklenmiştir, böylece **öncü uç yüksek kullanılabilirlik** sağlanmıştır.

Prensip şudur: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) ile istekleri durdurun, başarısız olan diğer `CDN`'lerde yeniden deneyin ve en hızlı yanıt veren kaynağı varsayılan olarak kullanın.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) kodu:

## Tek Sayfalı Uygulama, Hızlı Yükleme

Web sitesi, sayfalar arasında geçiş yaparken yenileme gerektirmeyen ve hızlı yüklenen tek sayfalı uygulama mimarisini kullanır.

## Okuma Deneyimi İçin Optimizasyon

### Özenle tasarlanmış stil

> Sadeliğin güzelliği, bu site tasarımında mükemmel bir şekilde yansıtılmıştır.
> Gereksiz süslemelerden arınarak en saf haliyle içerik sunar.
> İyi bir şiir gibi, kısa da olsa yürekleri hoplatır.

<p style="text-align:right">── I18N.SITE Yazarı</p>

[➔ Stillerin Özetini Gör](/i18n.site/md/styl).

### Çevrimiçi Yazı Tipleri, Çinceyi Destekler

Web sitesi, [Alimama Çift Eksenli Değişken Dikdörtgen Yazı Tipleri](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) ve [MiSans](https://hyperos.mi.com/font/zh/download/) gibi çevrimiçi yazı tiplerini varsayılan olarak etkinleştirir, farklı platformlardaki kullanıcıların okuma deneyimlerini birleştirir.

Yükleme hızını artırmak için yazı tipleri, kelime sıklığına göre dilimlenmiştir.

[github.com/i18n-site/font](https://github.com/i18n-site/font) kodu:

### Üst Kısımlı Gezinme Otomatik Olarak Gizlenir

Aşağı doğru kaydırırken üst gezinme çubuğu otomatik olarak gizlenir.

Yukarı doğru kaydırırken gizlenmiş gezinme çubuğu yeniden görünür.

Fare hareket etmediğinde gezinme çubuğu kaybolur.

Gezinme çubuğunun sağ üst köşesinde tam ekran modu düğmesi bulunur, sürükleyici bir belge okuma deneyimi sunar.

### Geçerli Bölümün Anahat Vurgulaması

Yan içerik sağa doğru kaydırıldığında, sol anahat geçerli bölümü vurgular.

## Özel Detaylar

### Fare Efektleri

Üst gezinme çubuğunun sağ tarafındaki düğmeyi fareyle üzerine getirerek özel efektleri görebilirsiniz.

### `404` Küçük Hayalet

`404` sayfasında, fareyle hareket ettikçe gözleri izleyen sevimli bir küçük hayalet bulunur. [➔ Görüntülemek için buraya tıklayın](/404)

## Kod açık kaynak

[Kod açık kaynaktır](/i18n.site/src). Geliştirmeye katılmak istiyorsanız, kendinizi [e-posta listesine](//groups.google.com/u/2/g/i18n-site) tanıtın.

Birçok önemli ancak acil olmayan küçük talep vardır. Geliştirme ekibi, yeteneklerinize göre görevler atayacak ve talepleri atarken geliştirme belgelerini güncelleyecektir.