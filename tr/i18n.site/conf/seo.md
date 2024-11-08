# Arama Motoru Optimizasyonu (Seo)

## Prensip

`i18n.site` yenilenmeyen tek sayfalı bir mimariyi benimser. Arama dizine eklemeyi kolaylaştırmak amacıyla, tarayıcıların taraması için ayrı bir statik sayfa ve `sitemap.xml` oluşturulacaktır.

Erişim isteğinin `User-Agent` arama motoru tarayıcısı tarafından kullanıldığında, istek `302` üzerinden statik sayfaya yönlendirilecektir.

Statik sayfalarda, bu sayfanın farklı dil sürümlerine olan bağlantıları belirtmek için `link` kullanın; örneğin :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Yerel nginx Yapılandırması

Örnek olarak demo projedeki `.i18n/htm/main.yml` konfigürasyon dosyasını alın

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Lütfen öncelikle yukarıdaki `host:` değerini alan adınızla değiştirin ( `xxx.com` gibi).

Daha sonra `i18n.site -n` , `out/main/htm` dizininde statik sayfa oluşturulacaktır.

Elbette, `.i18n/htm/dist.package.json` ve `.i18n/htm/dist.yml` oluşturmak için ilk önce `main` konfigürasyonuna başvurmak gibi diğer konfigürasyon dosyalarını da etkinleştirebilirsiniz.

Daha sonra `i18n.site -n -c dist` çalıştırın, böylece statik sayfa `out/dist/htm` olarak oluşturulur.

`nginx` aşağıdaki konfigürasyona başvurularak ayarlanabilir.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Sunucu çalışanı komut dosyalarını çok uzun süre önbelleğe almayın
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Diğer statik kaynaklar için daha uzun önbellek süreleri ayarlayın
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Tarayıcının ana sayfa girişi olarak hangi statik dosyayı kullanacağını ayarlayın
location = / {
  # $botLang boş değilse, ayarlanan dil yoluna göre tarayıcı erişimi ve yönlendirme anlamına gelir
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Tek sayfalı uygulama yapılandırması
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Statik Dosyaları Yüklemek Için Nesne Depolamayı Yapılandırma

Statik dosyalar yerel olarak oluşturulabilir ancak daha yaygın bir yaklaşım, bunları nesne depolama alanına yüklemektir.

Yukarıda yapılandırılan `out` : olarak değiştirin.

```
out:
  - s3
```

Daha sonra `~/.config/i18n.site.yml` düzenleyin ve aşağıdaki konfigürasyonu ekleyin :

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

Yapılandırmada, lütfen `i18n.site` `host:` `.i18n/htm/main.yml` değeri olarak değiştirin, `s3` altında birden fazla nesne deposu yapılandırılabilir ve `region` alanı isteğe bağlıdır (birçok nesne deposunun bu alanı ayarlamasına gerek yoktur).

Daha sonra projeyi yeniden yayınlamak için `i18n.site -n` çalıştırın.

`~/.config/i18n.site.yml` değiştirdiyseniz ve yeniden yüklemek istiyorsanız, lütfen yükleme önbelleğini temizlemek için proje kök dizininde aşağıdaki komutu kullanın :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Bulut Parlaması Yapılandırması

Alan adı [cloudflare](//www.cloudflare.com) .

### Dönüşüm Kuralları

Dönüşüm kurallarını aşağıda gösterildiği gibi ekleyin:

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

### Önbelleğe Alma Kuralları

Önbellek kurallarını aşağıdaki gibi ekleyin:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Yönlendirme Kuralları

Yönlendirme kurallarını aşağıdaki gibi ayarlayın, lütfen "i18n.site" kodunu alan adınıza göre değiştirin.

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

`URL redirect` Dinamik yeniden yönlendirmeyi seçin, lütfen yönlendirme yolu `concat("/en",http.request.uri.path,".htm")` `/en` , arama motorlarının dahil etmesini istediğiniz varsayılan dile değiştirin.

## Baidu Akıllı Bulut Yapılandırması

Çin ana karasına hizmet sağlamanız gerekiyorsa [Baidu Smart Cloud'u](//cloud.baidu.com) kullanabilirsiniz.

Veriler Baidu Nesne Depolamaya yüklenir ve Baidu İçerik Dağıtım Ağına bağlanır.

Daha sonra [EdgeJS edge hizmetinde](//console.bce.baidu.com/cdn/#/cdn/ejs/list) betiği aşağıdaki gibi oluşturun.

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Yanıt başlıkları çıktıda hata ayıklamak için out.XXX = 'MSG'; gibi ayarlanabilir.
})
```

`Debug` ve ardından Tüm ağa yayınla'ya tıklayın.

![](//p.3ti.site/1725437754.avif)

## Gelişmiş Kullanım: Trafiği Bölgesel Çözünürlüğe Göre Dağıtın

Çin ana karasında hizmet vermek ve aynı zamanda `cloudflare` ücretsiz uluslararası trafik istiyorsanız, `DNS` bölgesel çözünürlükle kullanabilirsiniz.

Örneğin, [Huawei Cloud DNS](https://www.huaweicloud.com) Çin ana karasındaki trafiğin Baidu Smart Cloud'dan geçebileceği ve uluslararası trafiğin `cloudflare` geçebileceği ücretsiz bölgesel analiz sağlar.

`cloudflare` konfigürasyonunda pek çok tuzak vardır. Burada dikkat edilmesi gereken birkaç nokta var :

### Alan Adı Diğer `DNS` Barındırılıyor, Nasıl Kullanılır `cloudflare`

Önce rastgele bir alan adını `cloudflare` bağlayın ve ardından ana alan adını bu alan adıyla ilişkilendirmek için `SSL/TLS` → özel alan adını kullanın.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Özel Bir Alan Adı Aracılığıyla Erişilemez

`cloudflare` nesne deposuna `R2` özelleştirilmiş bir etki alanı adı ile erişilemediğinden, statik dosyaları yerleştirmek için üçüncü taraf bir nesne deposunun kullanılması gerekir.

Burada [backblaze.com](https://www.backblaze.com) `cloudflare` depolanacak üçüncü taraf nesnelerinin nasıl bağlanacağını göstermek için örnek olarak alıyoruz.

`backblaze.com` konumunda bir paket oluşturun, herhangi bir dosyayı yükleyin, dosyaya göz atmak için tıklayın ve burada `f003.backblazeb2.com` olan `Friendly URL` alan adını alın.

![](//p.3ti.site/1725440783.avif)

Alan adını `cloudflare` `CNAME` `f003.backblazeb2.com` değiştirin ve proxy'yi etkinleştirin.

![](//p.3ti.site/1725440896.avif)

`cloudflare` / `SSL` değiştirin → şifreleme modunu `Full` ayarlayın

![](//p.3ti.site/1725438572.avif)

Dönüşüm kuralını aşağıda gösterildiği gibi ekleyin, ilk sıraya koyun (ilki en düşük önceliğe sahiptir):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` Dinamik'i seçin ve `your_bucketname` `concat("/file/your_bucketname",http.request.uri.path)` arada'yı paket adınızla değiştirin.

Ayrıca yukarıdaki `cloudflare` dönüşüm kuralında `index.html` , `file/your_bucketname/index.html` olarak değiştirilmekte, diğer konfigürasyonlar aynı kalmaktadır.

![](//p.3ti.site/1725441384.avif)