# Arama Motoru Optimizasyonu (SEO)

## Ilke

`i18n.site`, yenilenmeyen tek sayfalı bir mimari kullanır. Arama motorlarının dizine eklemesini kolaylaştırmak amacıyla, ayrı bir statik sayfa ve `sitemap.xml` oluşturur.

İstek yapılan `User-Agent` bir arama motoru botu olduğunda, istek `302` yönlendirmesiyle statik sayfaya yönlendirilir.

Statik sayfalarda, bu sayfanın farklı dil sürümlerine olan bağlantılarını belirtmek için `link` etiketi kullanılır:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Statik Dosyaları Yükleme İçin Nesne Depolamayı Yapılandırma

Statik dosyalar yerel olarak oluşturulabilir, ancak daha yaygın bir uygulama, bunları nesne depolama alanına yüklemektir.

Gösterim projesindeki `.i18n/htm/ol.yml` yapılandırma dosyası örneği:

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Lütfen öncelikle `host:` değerini kendi alan adınızla değiştirin, örneğin `i18n.site`.

Daha sonra `~/.config/i18n.site.yml` dosyasını düzenleyin ve aşağıdaki yapılandırmayı ekleyin:

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Yapılandırmada, `i18n.site` değerini `.i18n/htm/ol.yml` dosyasındaki `host:` değeri ile değiştirin; `s3` altında birden fazla nesne depolama yapılandırabilirsiniz, `region` alanı ise isteğe bağlıdır (birçok nesne depolama hizmeti bu alanı gerektirmez).

Daha sonra `i18n.site -n` komutunu çalıştırarak projeyi yeniden yayınlayın.

Eğer `~/.config/i18n.site.yml` dosyasını düzenlediyseniz ve yeniden yükleme yapmak istiyorsanız, aşağıdaki komutu kullanarak proje kök dizininde yükleme önbelleğini temizleyin:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare Yapılandırması

Alan adını [cloudflare](//www.cloudflare.com) na yönlendirin.

### Dönüşüm Kuralları

Aşağıdaki gibi dönüşüm kuralları ekleyin:

![](//p.3ti.site/1725436822.avif)

Kural kodu aşağıdaki gibidir, lütfen "i18n.site" kodunu alan adınız olarak değiştirin:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Önbellekleme Kuralları

Aşağıdaki gibi önbellekleme kuralları ekleyin:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Yönlendirme Kuralları

Yönlendirme kurallarını aşağıdaki gibi ayarlayın, lütfen "i18n.site" kodunu alan adınıza göre değiştirin

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` seçeneğini dinamik yönlendirme olarak ayarlayın ve `concat("/en",http.request.uri.path,".htm")` yolundaki `/en` kısmını, arama motorlarının varsayılan dil olarak indekslemesini istediğiniz dille değiştirin.

## Baidu Akıllı Bulut Yapılandırması

Çin ana karasına hizmet sunmanız gerekiyorsa [Baidu Smart Cloud](//cloud.baidu.com) kullanabilirsiniz.

Verileri Baidu Nesne Depolamaya yükleyin ve Baidu İçerik Dağıtım Ağına bağlayın.

Daha sonra [EdgeJS kenar hizmetinde](//console.bce.baidu.com/cdn/#/cdn/ejs/list) aşağıdaki gibi bir betik oluşturun:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

`Debug` ve ardından Tüm ağa yayınla'ya tıklayın.

![](//p.3ti.site/1725437754.avif)

## Gelişmiş Kullanım: Bölgesel Çözünürlüğe Göre Trafiği Dağıtma

Çin ana karasında hizmet vermek ve aynı zamanda `cloudflare` ücretsiz uluslararası trafik istiyorsanız, `DNS` bölgesel çözünürlükle kullanabilirsiniz.

Örneğin, [Huawei Cloud DNS](https://www.huaweicloud.com) Çin ana karasındaki trafiğin Baidu Smart Cloud'dan geçebileceği ve uluslararası trafiğin `cloudflare` geçebileceği ücretsiz bölgesel analiz sağlar.

`cloudflare` konfigürasyonunda pek çok tuzak vardır. Burada dikkat edilmesi gereken birkaç nokta var:

### Alan Adı Diğer `DNS` Barındırılıyor, Nasıl Kullanılır `cloudflare`

Öncelikle, rastgele bir alan adını `cloudflare`'e bağlayın ve ardından ana alan adını bu alan adıyla ilişkilendirmek için `SSL/TLS` → özel alan adını kullanın.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Özel Bir Alan Adı Aracılığıyla Erişilemez

`R2` özelleştirilmiş bir etki alanı adı ile `cloudflare`'e erişilemez, bu nedenle statik dosyaları yerleştirmek için üçüncü taraf bir nesne depolama hizmeti kullanmanız gerekecek.

Burada [backblaze.com](https://www.backblaze.com) örneğiyle, üçüncü taraf nesne depolama hizmetini `cloudflare`'e nasıl bağlayacağınızı gösteriyoruz.

`backblaze.com` sitesinde bir depolama kutusu oluşturun, herhangi bir dosya yükleyin, dosyaya göz atın ve `f003.backblazeb2.com` gibi bir `Friendly URL` alan adını alın.

![](//p.3ti.site/1725440783.avif)

Alan adını `cloudflare`'e `CNAME` olarak `f003.backblazeb2.com` değiştirin ve proxy'yi etkinleştirin.

![](//p.3ti.site/1725440896.avif)

`cloudflare`'in `SSL` → şifreleme modunu `Tam` olarak ayarlayın

![](//p.3ti.site/1725438572.avif)

Aşağıdaki gibi bir dönüşüm kuralı ekleyin, bu kuralı listenin başına yerleştirin (en düşük önceliğe sahip):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` seçeneğini dinamik olarak ayarlayın ve `concat("/file/your_bucketname",http.request.uri.path)` yolundaki `your_bucketname` kısmını kendi depolama kutusu adıyla değiştirin.

Ayrıca, yukarıdaki `cloudflare` dönüşüm kuralında `index.html`'i `file/your_bucketname/index.html` olarak değiştirin, diğer konfigürasyonlar aynı kalır.

![](//p.3ti.site/1725441384.avif)