# Dağıtın &

## Yapılandırma Jetonu

`i18n.site` `i18` Çeviri aracı gömülüdür, [erişim belirtecini yapılandırmak üzere `i18` belgesine başvurmak için lütfen buraya tıklayın](/i18/use) .

## Düzenlemek

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Projesi

Bir demo projeyle başlayalım ve nasıl kullanılacağını öğrenelim `i18n.site`

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

`demo.i18n.site` `docker` ile yerel önizlemeyi kolaylaştırmak için kod tabanı klonunun dizin adı `md` olmalıdır.

### Çevirmek

İlk önce `md` dizinine girin ve `en` `i18n.site` ı `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Çalıştırdıktan sonra çeviri ve önbellek dosyaları oluşturulacaktır. Lütfen bunları `md` dizinindeki `git add . ` deposuna eklemeyi unutmayın.

### Yerel Önizleme

Yükleyin ve başlatın `docker` ( `MAC` `docker` ın çalışma zamanı olarak [orbstack](https://orbstack.dev) kullanılmasını önerir).

Daha sonra `docker` dizinine girin ve `./up.sh` çalıştırın ve ardından yerel olarak önizleme yapmak için [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Mesaj İçeriği

`i18n.site` [Tek sayfalı bir uygulama](https://developer.mozilla.org/docs/Glossary/SPA) mimarisini benimser ve web sitesi giriş sayfası ile web sitesi içeriği bağımsız olarak dağıtılır.

Yukarıdaki çeviriyi çalıştırdıktan sonra `md/out/dev` dizininde `htm` ve `v` dizinleri oluşturulacaktır.

Burada `dev` `.i18n/htm/dev.yml` dosyası temel alınarak oluşturulduğunu belirtir.

`dev` :

`htm` Dizinin altında web sitesi giriş sayfası bulunmaktadır.

`v` Dizin, sürüm numarasıyla birlikte web sitesi içeriğini içerir.

Yerel önizleme, sürüm numarasına bakılmaksızın tüm dosyaları `out/dev/v/0.1.0` dizinine kopyalayacaktır.

Resmi sürüm için değiştirilen dosyalar yeni sürüm numarası dizinine kopyalanacaktır.

#### Yapılandırma Dosyasını Belirtmek Için -c Kullanın

Farklı yapılandırma dosyaları `out` dizini altında ilgili dizinleri oluşturacaktır.

Örneğin `.i18n/htm/ol.yml` bir `out/ol` dizini oluşturacaktır.

`dev.yml` ve `ol.yml` varsayılan yapılandırmalardır.

`dev` , geliştirme ortamını temsil eden, yerel önizleme için kullanılan ve aynı zamanda varsayılan yapılandırma dosyası olan `development` kelimesinin kısaltmasıdır.
`ol` , çevrimiçi ortamı temsil eden `online` kısaltmasıdır, resmi sürüm için kullanılır ve ayrıca yayınlanırken varsayılan yapılandırma dosyasıdır `npm` komut satırı parametresi `-n` .

Yapılandırma dosyasının adını belirtmek için komut satırında `--htm_conf` öğesini kullanın.

Örneğin:
```
i18n.site --htm_conf yourConfig --save
```

Burada `--save` güncelleme sürüm sürüm numarasını gösterir.

#### <a rel=id href="#npm" id="npm"></a> İçeriği npmjs.com'da yayınlayın

İçeriğin [npmjs.com](//npmjs.com) de yayınlanması önerilen varsayılan çözümdür (bkz. [Ön Uç Yüksek Kullanılabilirliği](/i18n.site/feature#ha) ).

##### npm login & Serbest Bırakmak

Yükleyin `nodejs` oturum açmak için `npm login` kullanın.

Düzenle `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` içindeki `i18n.site` kendi `npm` paket adınızla) değiştirin.

[npmjs.com](//npmjs.com) de boş paket adını kullanın. Paket adı olarak web sitesi alan adını kullanmak iyi bir seçimdir.

`npm` paketini temel alarak yayınlarken, `v:` değerinin öneki olarak **`//unpkg.com/` kullandığınızdan emin olun** . Önbellek süresi `i18n.site` bu önek yolu altında `/.v` yeni sürümlerin zamanında görüntülenmesini sağlamak için özel olarak optimize edilmiştir.

Çevirmek ve yayınlamak için `md` dizininde `i18n.site --npm` veya `i18n.site -n` komutunu çalıştırın.

Yayınlamak için sürekli entegrasyon ortamı kullanıyorsanız, onu yüklemenize gerek yoktur `nodejs` Oturum açmış olduğunuz ve yayınlanan izni `~/.npmrc` ortama kopyalamanız yeterlidir.

`ol.yml` `v:` paket adını değiştirirseniz, lütfen **önce `.i18n/v/ol` sildiğinizden ve ardından yayınladığınızdan emin olun** .

##### npm Tarafından Yayınlanan Proxy Sunucusu

Çin anakarasındaki kullanıcılar ağ sorunlarıyla karşılaşırsa ve `npm` paketini yayınlayamazlarsa, proxy sunucusunu yapılandırmak için `https_proxy` ortam değişkenini ayarlayabilirler.

Proxy sunucu bağlantı noktanızın `7890` olduğunu varsayarak şunu yazabilirsiniz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kendi Kendine Barındırılan Içerik

İçeriği kendiniz barındırmak istiyorsanız, önce `md/.i18n/htm/ol.yml` öğesini düzenleyin ve `v: //unpkg.com/i18n.site` öğesini URL önekiniz olarak değiştirin; örneğin `v: //i18n-v.xxx.com` .

`md` dizinine girin ve çalıştırın

```
i18n.site --htm_conf ol --save
```

veya kısaltma

```
i18n.site -c ol -s
```

Ardından, `md/out/ol/v` dizinindeki içeriği `v:` de ayarlanan URL öneki yoluna göre yapılandırın.

Son olarak, **`/.v` ile biten yolun önbellek süresini `1s` olarak yapılandırın** , aksi takdirde yeni yayınlanan içeriğe hemen erişilemez.

Gereksiz istekleri azaltmak için diğer yolların önbellek süresi bir yıl veya daha fazlaya ayarlanabilir.

##### İçeriği S3'te Barındırın

İçeriği kendi kendine barındırmak için, kendi sunucunuzu kullanmanın yanı sıra diğer bir yaygın seçenek `CDN` `S3` +

[rclone](https://rclone.org) Login `S3` sunucusunu kullanabilir, ardından aşağıdaki komut dosyasına başvurabilir ve değiştirebilirsiniz ve her yayınladığınızda yalnızca artan değişiklikleri `S3` öğesine kopyalayabilirsiniz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` `/.v` ile biten yolun önbellek süresi `1s` olacak şekilde yapılandırmayı unutmayın, aksi takdirde yeni yayınlanan içeriğe hemen erişemezsiniz.

### Web Sitesi Yayınla

Web sitesi herhangi bir yere kurulabilir; [github page](https://pages.github.com) ve [cloudflare page](https://pages.cloudflare.com) iyi seçimlerdir.

Web sitesi [tek sayfalı bir uygulamanın](https://developer.mozilla.org/docs/Glossary/SPA) mimarisini benimsediğinden `. ` içermeyen URL yolunu `index.html` olarak yeniden yazmayı unutmayın.

Web sitesi giriş sayfasının yalnızca bir kez konuşlandırılması gerekir ve sonraki içerik güncellemeleri için web sitesi giriş sayfasının yeniden dağıtılmasına gerek yoktur.

#### github Sayfasında Dağıtın

[Bir kuruluş oluşturmak için öncelikle burayı github](https://github.com/account/organizations/new?plan=free) . Örnek olarak aşağıdaki kuruluş adı `i18n-demo`

Daha sonra bu organizasyon altında bir depo oluşturun `i18n-demo.github.io` (Lütfen `i18n-demo` yerine oluşturduğunuz organizasyon adını yazın):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Önceki makaledeki içeriği yayınlarken oluşturulmuştur `out/ol/htm` Lütfen bu dizine girin ve çalıştırın :

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

Kodu gönderdikten sonra `github page` dağıtımının başarıyla çalışmasını bekleyin (aşağıda gösterildiği gibi) ve ardından ona erişebilirsiniz.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo sayfası için lütfen bakınız:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Sayfasında Dağıtın

[cloudflare page](//pages.cloudflare.com) `github page` karşılaştırıldığında, yol yeniden yazımını sağlar ve Çin ana karasına daha uygundur ve kullanılması tavsiye edilir.

`cloudflare page` Dağıtım genellikle yukarıdaki `github page` dağıtımına dayanır.

Bir proje oluşturun ve yukarıdaki depoyu bağlayın `i18n-demo.github.io`

İşlem aşağıdaki şekilde gösterilmektedir:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` Kuruluş'a erişim izni vermek için lütfen `Add Account` e tıklayın.

Başka bir kuruluşun deposunu bağladıysanız, yeni kuruluşun görüntülenmesinden önce iki kez yetkilendirmek için `Add Account` tuşuna iki kez tıklamanız gerekebilir.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Daha sonra `i18n-demo.github.io` Warehouse'u seçin, ardından `Begin setup` öğesine tıklayın ve sonraki adımlar için varsayılan değerleri kullanın.

<img alt="" src="https://p.3ti.site/1721118490.avif">

İlk kez bağlandıktan sonra, ona erişebilmeniz için birkaç dakika beklemeniz gerekir.

Dağıtımdan sonra özel bir etki alanı adını bağlayabilirsiniz.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Özel alan adını bağladıktan sonra, lütfen tek sayfalı uygulamanın yolunu yeniden yazma yolunu aşağıda gösterildiği gibi yapılandırmak için alan adına gidin:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Yukarıdaki resimde yer alan kurallar aşağıdaki gibidir. Lütfen aşağıdaki ilk satırdaki `i18n.site` kısmını size bağlı alan adı ile değiştirin.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Ayrıca lütfen önbellek kurallarını aşağıda gösterildiği gibi yapılandırın ve önbellek süresini bir ay olarak ayarlayın.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Lütfen yukarıdaki resimde ikinci adımda eşleşen alan adını, bağladığınız alan adı ile değiştirin.

#### Çin Ana Karasında Web Sitesi Dağıtımını Optimize Etme

Çin anakarasının ağ ortamında daha iyi erişilebilirlik performansı elde etmek istiyorsanız lütfen önce [bir alan adı kaydedin](//beian.aliyun.com) .

Ardından, Çin ana karasındaki bulut satıcılarının `out/ol/htm` depolamasını `CDN` +

[Baidu Akıllı Bulut gibi tek sayfalı uygulamalara uyum sağlama yolunu yeniden yazmak için uç bilişimi kullanabilirsiniz `CDN`](//cloud.baidu.com/product/cdn.html) Şu şekilde yapılandırılabilir:

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` kayıtları ve `CNAME` kayıtları bir arada bulunamayacağından, alan adı e-postalarını aynı anda almak istiyorsanız, `CNAME` `A` kaydına düzleştirmek için [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) komut dosyasıyla işbirliği yapmanız gerekir.

Ayrıca, Çin ana karasındaki bulut satıcılarının yurt dışı trafik ücretleri nispeten pahalı olduğundan, maliyetleri optimize etmek istiyorsanız [Huawei Cloud DNS 'in ücretsiz coğrafi çözünürlüğünü](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ve [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 'nin özel alan adını (aşağıda gösterildiği gibi) kullanabilirsiniz. trafik yönlendirme──Çin ana karasındaki trafik Baidu Cloud `CDN` uluslararası trafik cloudflare gidiyor.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Bu dağıtım optimizasyonu çözümleri daha karmaşıktır ve gelecekte ayrı bölümlerde tanıtılacaktır.

#### Genel Alan Adı Yönlendirmesi

Ana web siteniz olarak bir web sitesi oluşturmak için `i18n.site` kullanıyorsanız, genellikle pan-domain yönlendirmesini yapılandırmanız, yani `*.xxx.com` ( `www.xxx.com` dahil) erişimini `xxx.com` .

Bu gereklilik Alibaba `CDN` `EdgeScript` ( [İngilizce belge](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Çince belge](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yardımıyla sağlanabilir.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) bir alan adı ekleyin ve alan `*.xxx.com` Alibaba Cloud `CDN` 'ın `CNAME` ına yönlendirin.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Örneğin, yukarıdaki resimde `*.i18n.site` nin pan-alan adı yönlendirme yapılandırması aşağıdaki gibidir:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Ile Dağıtma

Lütfen `server` aşağıdakine benzer bir konfigürasyon ekleyin nginx burada `/root/i18n/md/out/ol/htm` lütfen bunu kendi projenizin yoluna değiştirin `out/ol/htm` :

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

#### Halk

Web sitesinin `favicon.ico` `robots.txt` vb. gibi statik dosyaları.

Buradaki simge dosyaları [realfavicongenerator.net](https://realfavicongenerator.net) ile oluşturulabilir.

#### .i18n

`.i18n` Dizinin altında `i18n.site` 'nin yapılandırma dosyaları, çeviri önbelleği vb. bulunur. Ayrıntılar için bir sonraki ["Yapılandırma"](/i18n.site/conf) bölümüne bakın.

#### Tr

Yapılandırma dosyasındaki `fromTo` `en` `.i18n/conf.yml` karşılık gelen kaynak dil dizini

```yaml
i18n:
  fromTo:
    en: zh
```

Lütfen çeviri yapılandırmasına bakın [i18](/i18/use)

