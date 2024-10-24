# Axtarış Motorunun Optimizasiyası (Seo)

## Prinsip

`i18n.site` yenilənməyən tək səhifə arxitekturasını qəbul edir `sitemap.xml`

Giriş sorğusunun `User-Agent` axtarış motoru tarayıcısı tərəfindən istifadə edildikdə, sorğu `302` vasitəsilə statik səhifəyə yönləndiriləcək.

Statik səhifələrdə bu səhifənin müxtəlif dil versiyalarına keçidləri göstərmək üçün `link` istifadə edin, məsələn :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Statik Faylları Yükləmək Üçün Obyekt Yaddaşını Konfiqurasiya Edin

Statik fayllar yerli olaraq yaradıla bilər, lakin daha çox yayılmış yanaşma onları obyekt yaddaşına yükləməkdir.

Nümunə olaraq demo layihəsində `.i18n/htm/ol.yml` konfiqurasiya faylını götürün

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

Lütfən, əvvəlcə yuxarıdakı `host:` dəyərini domen adınıza dəyişdirin, məsələn, `i18n.site` .

Sonra `~/.config/i18n.site.yml` redaktə edin və aşağıdakı konfiqurasiyanı əlavə edin :

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

Konfiqurasiyada, lütfən, `i18n.site` `host:` -də `.i18n/htm/ol.yml` dəyərinə dəyişin, çoxlu obyekt anbarları `s3` altında konfiqurasiya edilə bilər və `region` sahəsi isteğe bağlıdır (bir çox obyekt mağazalarında bu sahəni təyin etmək lazım deyil).

Sonra layihəni yenidən dərc etmək üçün `i18n.site -n` işə salın.

Əgər siz `~/.config/i18n.site.yml` dəyişdirmisinizsə və yenidən yükləmək istəyirsinizsə, yükləmə önbelleğini təmizləmək üçün layihənin kök kataloqunda aşağıdakı əmrdən istifadə edin :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## cloudflare Konfiqurasiyası

domen adı [cloudflare](//www.cloudflare.com)

### Dönüşüm Qaydaları

Aşağıda göstərildiyi kimi çevirmə qaydalarını əlavə edin:

![](//p.3ti.site/1725436822.avif)

Qayda kodu aşağıdakı kimidir, lütfən, "i18n.site" kodunu domen adınıza dəyişdirin:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Keşləmə Qaydaları

Keş qaydalarına aşağıdakı kimi əlavə edin:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Yenidən Yönləndirmə Qaydaları

Yenidən yönləndirmə qaydalarını aşağıdakı kimi təyin edin, lütfən, “i18n.site” kodunu domen adınıza dəyişdirin.

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

`URL redirect` Dinamik yönləndirməni seçin, lütfən, yönləndirmə yolunda `concat("/en",http.request.uri.path,".htm")` `/en` axtarış motorlarının daxil etməsini istədiyiniz standart dilə dəyişdirin.

## Baidu Ağıllı Bulud Konfiqurasiyası

Əgər materik Çinə xidmət göstərmək lazımdırsa, [Baidu Smart Cloud-dan](//cloud.baidu.com) istifadə edə bilərsiniz.

Məlumat Baidu Obyekt Yaddaşına yüklənir və Baidu Məzmun Dağıtım Şəbəkəsinə bağlanır.

Sonra [EdgeJS xidmətində](//console.bce.baidu.com/cdn/#/cdn/ejs/list) skripti aşağıdakı kimi yaradın

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

`Debug` klikləyin, sonra bütün şəbəkədə dərc et üzərinə klikləyin.

![](//p.3ti.site/1725437754.avif)

## Qabaqcıl Istifadə: Regional Qətnamə Əsasında Trafiki Paylayın

Əgər siz materik Çində xidmət göstərmək və həmçinin `cloudflare` pulsuz beynəlxalq trafik istəyirsinizsə, regional həlli ilə `DNS` istifadə edə bilərsiniz.

Məsələn, [Huawei DNS](https://www.huaweicloud.com) pulsuz regional analiz təqdim edir, bununla da materik Çin trafiki Baidu Smart Cloud vasitəsilə, beynəlxalq trafik isə `cloudflare` dan keçə bilər.

`cloudflare` konfiqurasiyasında çoxlu tələlər var. Burada bir neçə məqamı qeyd etmək lazımdır :

### Domen Adı Digər `DNS` -Da Yerləşdirilir, `cloudflare` Necə Istifadə Olunur

Əvvəlcə ixtiyari domen adını `cloudflare` ilə bağlayın və sonra əsas domen adını bu domen adı ilə əlaqələndirmək üçün `SSL/TLS` → xüsusi domen adından istifadə edin.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Xüsusi Domen Adı Ilə Daxil Olmaq Mümkün Deyil

`cloudflare` obyekt yaddaşı `R2` ə fərdiləşdirilmiş domen adı ilə daxil olmaq mümkün olmadığından, statik faylları yerləşdirmək üçün üçüncü tərəf obyekt yaddaşından istifadə edilməlidir.

[backblaze.com](https://www.backblaze.com) `cloudflare` -da saxlanacaq üçüncü tərəf obyektlərinin necə bağlanacağını nümayiş etdirmək üçün nümunə götürürük.

`backblaze.com` -da vedrə yaradın, istənilən faylı yükləyin, fayla baxmaq üçün klikləyin və burada `f003.backblazeb2.com` olan `Friendly URL` domen adını əldə edin.

![](//p.3ti.site/1725440783.avif)

Domen adını `cloudflare` -da `CNAME` dən `f003.backblazeb2.com` yə dəyişdirin və proxy-ni aktivləşdirin.

![](//p.3ti.site/1725440896.avif)

`SSL` -dən `cloudflare` dəyişdirin → şifrələmə rejimi, `Full` yə təyin edin

![](//p.3ti.site/1725438572.avif)

Aşağıda göstərildiyi kimi çevirmə qaydasını əlavə edin, birinci qoyun (birincisi ən aşağı prioritetə malikdir):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinamik seçin və `your_bucketname` də `concat("/file/your_bucketname",http.request.uri.path)` kova adınıza dəyişdirin.

Bundan əlavə, yuxarıdakı `cloudflare` çevirmə qaydasında `index.html` `file/your_bucketname/index.html` olaraq dəyişdirilir və digər konfiqurasiyalar eyni qalır.

![](//p.3ti.site/1725441384.avif)