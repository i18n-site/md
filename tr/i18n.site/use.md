# Dağıtın &

## Yapılandırma Jetonu

`i18n.site` `i18` bir çeviri aracına sahiptir. [Erişim belirtecini yapılandırmak üzere `i18` belgesine başvurmak için lütfen buraya tıklayın](/i18/use) .

## Düzenlemek

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projesi

`i18n.site` nasıl kullanılacağını öğrenmek için bir demo projeyle başlayalım.

Öncelikle demo deposunu klonlayıp komutu şu şekilde çalıştırıyoruz:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Çin ana karasındaki kullanıcılar şunları yapabilir:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` kodlu temel klonun dizin adı, `docker` ile yerel önizlemeyi kolaylaştırmak için `md` olmalıdır.

### Tercüme Etmek

Öncelikle `md` dizinine girin ve `en` `zh` çevirecek olan `i18n.site` çalıştırın.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Çalıştırdıktan sonra çeviri ve önbellek dosyaları oluşturulacaktır. Lütfen bunları `md` `git add . ` depoya eklemeyi unutmayın.

### Yerel Önizleme

`docker` yükleyin ve başlatın ( `MAC` kullanıcı, `docker` çalışma zamanı olarak [orbstack](https://orbstack.dev) kullanılmasını önerir).

Daha sonra `docker` dizinine girin ve `./up.sh` komutunu çalıştırın ve ardından yerel olarak önizleme yapmak için [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### İçerik Yayınlayın

`i18n.site` [tek sayfalı bir uygulama](https://developer.mozilla.org/docs/Glossary/SPA) mimarisini benimser ve web sitesi giriş sayfası ile web sitesi içeriği bağımsız olarak dağıtılır.

Yukarıdaki çeviriyi çalıştırdıktan sonra `md/out/dev` dizini altında `htm` ve `v` dizinleri oluşturulacaktır.

Burada `dev` , `.i18n/htm/dev.yml` yapılandırma dosyası temel alınarak oluşturulduğu anlamına gelir.

`dev` dizin :

`htm` dizini web sitesine giriş sayfasıdır.

`v` dizini sürüm numaralarına sahip web sitesi içeriğini içerir.

Yerel önizleme sürüm numarasını umursamaz ve tüm dosyaları `out/dev/v/0.1.0` dizinine kopyalar.

Resmi sürüm için değiştirilen dosyalar yeni sürüm numarası dizinine kopyalanacaktır.

#### Yapılandırma Dosyasını Belirtmek Için -c Kullanın

Farklı yapılandırma dosyaları, `out` dizininde karşılık gelen dizinleri oluşturacaktır.

Örneğin `.i18n/htm/ol.yml` , `out/ol` dizinini oluşturacaktır.

`dev.yml` ve `ol.yml` varsayılan konfigürasyonlardır.

`dev` , yerel önizleme için kullanılan geliştirme ortamını belirten `development` kısaltmasıdır ve aynı zamanda varsayılan yapılandırma dosyasıdır.
`ol` , resmi sürüm için kullanılan çevrimiçi ortamı belirten `online` kısaltmasıdır. Ayrıca, sürüm için `-n` `npm` kadar komut satırı parametrelerini kullanırken varsayılan yapılandırma dosyasıdır.

Ayrıca başka yapılandırma dosyaları da oluşturabilirsiniz. Kullanılacak yapılandırma dosyasının adını belirtmek için komut satırında `--htm_conf` kullanın:

Örneğin:
```
i18n.site --htm_conf yourConfig --save
```

Burada `--save` , güncelleme sürüm sürüm numarasını temsil eder.

#### <a rel=id href="#npm" id="npm"></a> İçeriği npmjs.com'da yayınlayın

İçeriğin [npmjs.com](//npmjs.com) de yayınlanması önerilen varsayılan çözümdür (bkz [. Ön Uç Yüksek Kullanılabilirliği](/i18n.site/feature#ha) ).

##### npm login & Serbest Bırakmak

`nodejs` yükleyin, `npm login` ile giriş yapın.

`md/.i18n/htm/ol.yml` düzenleyin ve `i18n.site` `v: //unpkg.com/i18n.site` arada'yı kendi `npm` paket adınızla değiştirin.

[npmjs.com](//npmjs.com) de boş paket adını kullanın. Paket adı olarak web sitesi alan adını kullanmak iyi bir seçimdir.

`npm` paketini temel alarak yayınlarken, `v:` değerinin öneki olarak **`//unpkg.com/` kullandığınızdan emin** olun. `i18n.site` yeni sürümlerin zamanında görüntülenmesini sağlamak için bu önek yolu altında `/.v` önbellek süresini özel olarak optimize etmiştir.

Çevirmek ve yayınlamak için `md` dizininde `i18n.site --npm` veya `i18n.site -n` çalıştırın.

Yayınlamak için sürekli entegrasyon ortamı kullanıyorsanız, `nodejs` yüklemenize gerek yoktur, yalnızca oturum açmış olduğunuz ve yayınlama izni `~/.npmrc` ortama kopyalamanız yeterlidir.

`v:` in `ol.yml` paket adını değiştirirseniz, lütfen **önce `.i18n/v/ol` sildiğinizden ve ardından yayınladığınızdan emin olun** .

##### npm Tarafından Yayınlanan Proxy Sunucusu

Çin ana karasındaki kullanıcılar ağ sorunlarıyla karşılaşırsa ve `npm` paket yayınlayamazsa, proxy sunucusunu yapılandırmak için ortam değişkeni `https_proxy` ayarlayabilirler.

Proxy sunucu bağlantı noktanızın `7890` olduğunu varsayarak şunu yazabilirsiniz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kendi Kendine Barındırılan Içerik

İçeriği kendiniz barındırmak istiyorsanız önce `md/.i18n/htm/ol.yml` düzenleyin ve `v: //unpkg.com/i18n.site` URL önekiniz olarak değiştirin ( `v: //i18n-v.xxx.com` gibi).

`md` dizinine girin ve çalıştırın

```
i18n.site --htm_conf ol --save
```

veya kısaltma

```
i18n.site -c ol -s
```

Ardından, `md/out/ol/v` dizinindeki içeriği, `v:` ayarlanan URL önek yoluna göre yapılandırın.

Son olarak, **`/.v` ile `1s` arasında biten yolun önbellek süresini yapılandırın** , aksi takdirde yeni yayınlanan içeriğe hemen erişilemez.

Gereksiz istekleri azaltmak için diğer yolların önbellek süresi bir yıl veya daha fazlaya ayarlanabilir.

##### İçeriği S3'te Barındırın

İçeriği kendi kendine barındırmak için, kendi sunucunuzu kullanmanın yanı sıra diğer bir yaygın seçenek de `S3` + `CDN` kullanmaktır.

`S3` sunucusunda oturum açmak için [rclone](https://rclone.org) kullanabilir, ardından aşağıdaki komut dosyasına başvurabilir ve değiştirebilirsiniz ve artımlı değişiklikleri yalnızca her sürüm için `S3` kopyalayabilirsiniz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` `/.v` ile biten yolun önbellek süresi `1s` olacak şekilde yapılandırmayı unutmayın, aksi takdirde yeni yayımlanan içeriğe hemen erişilemez.

### Web Sitesi Yayınla

Web sitesi herhangi bir yere kurulabilir; [github page](https://pages.github.com) ve [cloudflare page](https://pages.cloudflare.com) iyi seçimlerdir.

Web sitesi [tek sayfalı bir uygulama](https://developer.mozilla.org/docs/Glossary/SPA) mimarisi kullandığından, `. ` `index.html` kadar olmayan URL yollarını yeniden yazmayı unutmayın.

Web sitesi giriş sayfasının yalnızca bir kez konuşlandırılması gerekir ve sonraki içerik güncellemeleri için web sitesi giriş sayfasının yeniden dağıtılmasına gerek yoktur.

#### github Sayfasında Dağıtın

[Bir github oluşturmak için öncelikle burayı tıklayın](https://github.com/account/organizations/new?plan=free) . Örnek olarak aşağıdaki organizasyon adı `i18n-demo` .

Daha sonra bu organizasyon altında depo `i18n-demo.github.io` oluşturun (lütfen `i18n-demo` oluşturduğunuz organizasyon adıyla değiştirin):

![](https://p.3ti.site/1721098657.avif)

Önceki makaledeki içeriği yayınlarken `out/ol/htm` oluşturuldu. Lütfen bu dizine girin ve :

```
ln -s index.html 404.html
```


`github page` URL yolunun yeniden yazılmasını desteklemediğinden bunun yerine `404.html` kullanılır.

Daha sonra `htm` dizininde aşağıdaki komutu çalıştırın ( `i18n-demo/i18n-demo.github.io.git` kendi depo adresinizle değiştirmeyi unutmayın) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodu gönderdikten sonra, ona erişebilmeniz için `github page` dağıtımının başarıyla çalışmasını (aşağıda gösterildiği gibi) bekleyin.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo sayfası için lütfen bakınız:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Sayfasında Dağıtın

[cloudflare page](//pages.cloudflare.com) `github page` ile karşılaştırıldığında yol yeniden yazımını sağlar ve Çin ana karasına daha uygundur ve kullanılması tavsiye edilir.

`cloudflare page` dağıtımı genellikle yukarıdaki `github page` dağıtımına dayanır.

Bir proje oluşturun ve yukarıdaki `i18n-demo.github.io` depoyu bağlayın.

İşlem aşağıdaki şekilde gösterilmektedir:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Kuruluş `i18n-demo` erişim izni vermek için lütfen `Add Account` tıklayın.

Başka bir kuruluşun deposunu bağladıysanız, yeni kuruluşun görüntülenmesinden önce iki kez yetkilendirmek için `Add Account` iki kez tıklamanız gerekebilir.

![](https://p.3ti.site/1721118306.avif)

Ardından depo `i18n-demo.github.io` seçin, ardından `Begin setup` tıklayın ve sonraki adımlar için varsayılan değerleri kullanın.

![](https://p.3ti.site/1721118490.avif)

İlk kez bağlandıktan sonra, ona erişebilmeniz için birkaç dakika beklemeniz gerekir.

Dağıtımdan sonra özel bir etki alanı adını bağlayabilirsiniz.

![](https://p.3ti.site/1721119459.avif)

Özel alan adını bağladıktan sonra, aşağıda gösterildiği gibi tek sayfalı uygulamanın yeniden yazma yolunu yapılandırmak için lütfen alan adına gidin:

![](https://p.3ti.site/1721119320.avif)

Yukarıdaki resimdeki kurallar aşağıdaki gibidir. Lütfen aşağıdaki ilk satırdaki `i18n.site` bağladığınız alan adı ile değiştirin.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ayrıca lütfen önbellek kurallarını aşağıda gösterildiği gibi yapılandırın ve önbellek süresini bir ay olarak ayarlayın.

![](https://p.3ti.site/1721125111.avif)

Lütfen yukarıdaki resimde ikinci adımda eşleşen alan adını, bağladığınız alan adı ile değiştirin.

#### Çin Anakarasında Web Sitesi Dağıtımını Optimize Etme

Çin anakarasının ağ ortamında daha iyi erişilebilirlik performansı elde etmek istiyorsanız lütfen önce [bir alan adı kaydedin](//beian.aliyun.com) .

Ardından Çin anakarasındaki bulut satıcılarının nesne depolamasını kullanın + `CDN` Aşağıdaki içeriği dağıtın `out/ol/htm` .

Tek sayfalı uygulamalara uyum sağlama yolunu yeniden yazmak için uç bilişimi kullanabilirsiniz. Örneğin, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) şu şekilde yapılandırılabilir:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
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
![](https://p.3ti.site/1721121273.avif)

Kayıt `MX` ve kayıt `CNAME` bir arada bulunamayacağından, alan adı e-postalarını aynı anda almak istiyorsanız, kayıt `A` seviye `CNAME` kadar [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) komut dosyasıyla işbirliği yapmanız gerekir.

Ayrıca, Çin ana karasındaki bulut satıcılarının yurt dışı trafik ücretleri nispeten pahalı olduğundan, maliyetleri optimize etmek istiyorsanız [Huawei Cloud DNS 'in ücretsiz coğrafi çözünürlüğünü](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ve [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 'nin özel alan adını (aşağıda gösterildiği gibi) kullanabilirsiniz. trafik yönlendirme──Çin ana karasındaki trafik Baidu Cloud `CDN` , uluslararası trafik cloudflare a gidiyor.

![](https://p.3ti.site/1721119788.avif)

Bu dağıtım optimizasyonu çözümleri daha karmaşıktır ve gelecekte ayrı bölümlerde tanıtılacaktır.

#### Genel Alan Adı Yönlendirmesi

Ana web siteniz olarak bir web sitesi oluşturmak için `i18n.site` kullanıyorsanız, genellikle pan-domain yönlendirmesini yapılandırmanız, yani erişimi `*.xxx.com` ( `www.xxx.com` dahil) `xxx.com` yönlendirmeniz gerekir.

Bu gereklilik Alibaba Cloud `CDN` `EdgeScript` ( [İngilizce belge](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Çince belge](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yardımıyla sağlanabilir.

Alan adını [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ekleyin ve Alibaba Cloud `CDN` alan adını `*.xxx.com` `CNAME` işaretleyin.

![](https://p.3ti.site/1721122000.avif)

Örneğin yukarıdaki resimde `*.i18n.site` pan-alan adı yönlendirme yapılandırması şu şekildedir:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Ile Dağıtma

Lütfen !'in `server` paragrafına aşağıdakine benzer bir konfigürasyon ekleyin nginx Lütfen `/root/i18n/md/out/ol/htm` kendi projenizin yolu `out/ol/htm` olarak değiştirin:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Dizin Yapısı

#### `public`

Web sitesinin `favicon.ico` , `robots.txt` vb. gibi statik dosyaları.

Buradaki simge dosyaları [realfavicongenerator.net](https://realfavicongenerator.net) ile oluşturulabilir.

#### `.i18n`

`.i18n` dizini altında `i18n.site` yapılandırma dosyaları, çeviri önbelleği vb. bulunur. Ayrıntılar için bir sonraki ["Yapılandırma"](/i18n.site/conf) bölümüne bakın.

#### `en`

`.i18n/conf.yml` yapılandırma dosyasındaki `en` / `fromTo` karşılık gelen kaynak dil dizini

```yaml
i18n:
  fromTo:
    en: zh
```

Lütfen çeviri yapılandırmasına bakın [i18](/i18/use)