# Ürünün Özelliği

## Entegre `I18`

Programın yerleşik `i18` çevirisi vardır, özel kullanım için lütfen [➔ `i18`](/i18) bakın.

## Tarayıcı Dilini Otomatik Olarak Eşleştir

Web sitesinin varsayılan dili otomatik olarak tarayıcının diliyle eşleşecektir.

Kullanıcı dilleri manuel olarak değiştirdikten sonra kullanıcının seçimi hatırlanacaktır.

[github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) kod :

## Mobil Terminal Adaptasyonu

Cep telefonunda da mükemmel bir okuma deneyimi var.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Ön uçta yüksek kullanılabilirlik

`i18n.site` Varsayılan olarak, site içeriği `npmjs.com` [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) ve birden fazla `CDN` içeriğinin `npm` .

Bu temelde, Çinli kullanıcıların istikrarlı erişime sahip olmalarını ve **yüksek ön uç kullanılabilirliği** elde etmelerini sağlamak için Çin ana karasından yansıtma kaynakları eklendi.

Prensip şudur: İsteği [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) yardımıyla durdurun, eğer istek başarısız olursa, onu diğer `CDN` üzerinde yeniden deneyin ve en hızlı yanıt veren başlangıç ​​istasyonunu varsayılan yükleme kaynağı olarak uyarlanabilir bir şekilde etkinleştirin.

[github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) kod :

## Tek Sayfalı Uygulama, Son Derece Hızlı Yükleme

Web sitesi, sayfalar arasında geçiş yaparken yenileme gerektirmeyen ve son derece hızlı yüklenen tek sayfalı bir uygulama mimarisini benimser.

## Okuma Deneyimi Için Optimize Edildi

### İyi Tasarlanmış Stil

> Sadeliğin güzelliği bu web sitesinin web tasarımında mükemmel bir şekilde yorumlanmıştır.
> Gereksiz dekorasyondan vazgeçerek içeriği en saf haliyle sunar.
> Güzel bir şiir gibi, kısa da olsa insanın yüreğine dokunuyor.

<p style="text-align:right">── I18N.SITE</p>

[➔ Stillerin listesini görmek için buraya tıklayın](/i18n.site/md/styl) .

### Çevrimiçi Yazı Tiplerini Yükleyin, Çinceyi Destekleyin

Farklı platformlardaki kullanıcıların okuma deneyimini birleştirmek için [Alimama çift eksenli değişken dikdörtgen yazı tipleri](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) ve diğer çevrimiçi yazı tipleri varsayılan olarak etkinleştirilmiştir.

Aynı zamanda yükleme hızını artırmak için yazı tipleri kelime sıklığı istatistiklerine göre dilimlenir.

[github.com/i18n-site/font](https://github.com/i18n-site/font) kod :

### Üst Gezinme Otomatik Olarak Gizlendi

Aşağı kaydırdığınızda üst gezinme otomatik olarak gizlenecektir.

Yukarı kaydırdığınızda gizli gezinme yeniden görünecektir.

Fare hareket etmediğinde kaybolacaktır.

Sürükleyici bir belge okuma deneyimi oluşturmak için gezinme çubuğunun sağ üst köşesinde tam ekran bir düğme bulunur.

### Geçerli Bölümün Senkronize Anahat Vurgulaması

İçeriği sağa doğru kaydırırken, soldaki ana hat aynı anda okunmakta olan bölümü vurgulayacaktır.

## Harika Ayrıntılar

### Fare Efektleri

Harika özel efektleri görmek için farenizi üst gezinme bölümünün sağ tarafındaki düğmenin üzerine getirin.

### Küçük Hayalet `404`

`404` Sayfada sevimli küçük bir hayalet var, gözleri fareyle hareket edecek, [➔ Görmek için buraya tıklayın](/404) ,

## Kod Açık Kaynak

[Kod açık kaynaktır](/i18n.site/src) . Geliştirmeye katılmak istiyorsanız lütfen kendinizi [e-posta listesine](//groups.google.com/u/2/g/i18n-site) tanıtın.

Önemli ama acil olmayan birçok küçük gereksinim vardır. Geliştirme ekibi, iyi olduğunuz teknolojiye göre uygulama görevleri atayacak ve gereksinimleri atarken geliştirme belgelerini iyileştirecektir.

