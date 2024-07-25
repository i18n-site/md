# Quraşdırın &

## Konfiqurasiya Nişanı

`i18n.site` `i18` tərcümə aləti daxil edilib, [giriş nişanını konfiqurasiya etmək üçün `i18` sənədinə müraciət etmək üçün buraya klikləyin](/i18/use) .

## Yüklemek

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Layihə

Bir demo layihə ilə başlayaq və necə istifadə edəcəyimizi öyrənək `i18n.site`

Əvvəlcə demo deposunu klonlayırıq və əmri aşağıdakı kimi icra edirik:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Çin materikindəki istifadəçilər:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` ilə yerli önizləməni asanlaşdırmaq üçün kod bazası klonunun kataloq adı `md` olmalıdır `demo.i18n.site`

### Tərcümə Etmək

Əvvəlcə `md` daxil edin və `en` -a tərcümə edəcək `i18n.site` `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

İşlədikdən sonra tərcümə və keş faylları `md` `git add . ` deposuna əlavə etməyi unutmayın.

### Yerli Önizləmə

`MAC` [orbstack](https://orbstack.dev) `docker` `docker`

Sonra `docker` daxil olun və `./up.sh` işə salın və sonra yerli olaraq [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Məzmun Göndərin

`i18n.site` [Bir səhifəlik proqram](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasını qəbul edir və veb-sayta giriş səhifəsi və veb-sayt məzmunu müstəqil şəkildə yerləşdirilir.

Yuxarıdakı tərcüməni yerinə yetirdikdən sonra `md/out/dev` `htm` və `v` qovluqları yaradılacaq.

Burada, `dev` onun `.i18n/htm/dev.yml` faylı əsasında qurulduğunu bildirir.

Məzmun : `dev`

`htm` altında vebsayta giriş səhifəsi var.

`v` versiya nömrəsi olan vebsayt məzmunu var.

Yerli önizləmə versiya nömrəsindən asılı olmayaraq bütün faylları `out/dev/v/0.1.0`

Rəsmi buraxılış üçün dəyişdirilmiş fayllar yeni versiya nömrəsi kataloquna kopyalanacaq.

#### Konfiqurasiya Faylını Təyin Etmək Üçün -c Istifadə Edin

Müxtəlif konfiqurasiya faylları `out`

Məsələn `.i18n/htm/ol.yml` bir `out/ol` kataloq yaradacaq.

`dev.yml` və `ol.yml` standart konfiqurasiyalardır.

`dev` , inkişaf mühitini təmsil edən `development` qısaltmasıdır, yerli önizləmə üçün istifadə olunur və eyni zamanda standart konfiqurasiya faylıdır.
`ol` onlayn mühiti təmsil edən `online` qısaltmasıdır, rəsmi buraxılış üçün istifadə olunur və həmçinin `npm` `-n` əmr satırı parametrindən istifadə etməklə) dərc edərkən standart konfiqurasiya faylıdır.

Siz həmçinin digər konfiqurasiya faylları yarada bilərsiniz. Konfiqurasiya faylının adını təyin etmək üçün `--htm_conf`

misal üçün:
```
i18n.site --htm_conf yourConfig --save
```

`--save` yeniləmə buraxılışının nömrəsi göstərilir.

#### <a rel=id href="#npm" id="npm"></a> Məzmunu npmjs.com saytında dərc edin

Məzmunu dərc [npmjs.com](//npmjs.com) tövsiyə olunan defolt həlldir (bax [: Ön tərəfdə Yüksək Əlçatımlılıq](/i18n.site/feature#ha) ).

##### Azad npm login &

Quraşdırın `nodejs` daxil olmaq üçün `npm login` istifadə edin.

Redaktə edin `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` -dakı `i18n.site` özünüzə dəyişdirin `npm` paket adı.

Sadəcə olaraq boş paket adını istifadə edin [npmjs.com](//npmjs.com)

`npm` paketi əsasında dərc edərkən, `v:` dəyərinin prefiksi kimi **`//unpkg.com/` istifadə etdiyinizə əmin olun** `i18n.site` bu prefiks yolu altında `/.v` yeni buraxılışlara vaxtında baxmaq imkanı vermək üçün xüsusi olaraq optimallaşdırılmışdır.

Tərcümə etmək və dərc etmək üçün `md` `i18n.site --npm` və ya `i18n.site -n` işlədin.

Əgər siz dərc etmək üçün davamlı inteqrasiya mühitindən istifadə edirsinizsə, onu quraşdırmağa ehtiyac yoxdur `nodejs` Sadəcə daxil olmuş və dərc edilmiş icazəni `~/.npmrc` mühitə köçürün.

Əgər siz paketin adını `v:` `ol.yml` -də dəyişdirsəniz, **lütfən, əvvəlcə `.i18n/v/ol` silib** , sonra dərc edin.

##### npm Tərəfindən Nəşr Olunan Proksi Server

Əgər materik Çindəki istifadəçilər şəbəkə problemi ilə qarşılaşsalar və `npm` dərc edə bilmirlərsə, onlar proksi serveri konfiqurasiya etmək üçün `https_proxy` mühit dəyişənini təyin edə bilərlər.

Proksi server portunuzun `7890` yaza bilərsiniz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Öz-Özünə Yerləşdirilən Məzmun

Məzmunu özünüzə yerləşdirmək istəyirsinizsə, əvvəlcə redaktə `md/.i18n/htm/ol.yml` və `v: //unpkg.com/i18n.site` URL prefiksinizə dəyişdirin, məsələn, `v: //i18n-v.xxx.com` .

`md` daxil edin və işə salın

```
i18n.site --htm_conf ol --save
```

və ya abbreviatura

```
i18n.site -c ol -s
```

Sonra, `md/out/ol/v` məzmunu `v:` ilə təyin edilmiş URL prefiks yoluna konfiqurasiya edin.

Nəhayət, **`/.v` `1s` bitən yolun keş vaxtını konfiqurasiya edin** , əks halda yeni buraxılmış məzmuna dərhal daxil olmaq mümkün deyil.

Lazımsız sorğuları azaltmaq üçün digər yollar üçün keş vaxtı bir il və ya daha çox müddətə təyin edilə bilər.

##### Məzmunu S3-Ə Yerləşdirin

Öz serverinizdən istifadə etməklə yanaşı, məzmunu öz-özünə yerləşdirmək `CDN` `S3` +

Siz `S3` `S3` bilərsiniz [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` belə ki, `/.v` ilə bitən yolun keş vaxtı `1s` , əks halda siz dərhal yeni buraxılmış məzmuna daxil ola bilməyəcəksiniz.

### Internet Saytını Dərc Et

Veb sayt hər yerdə yerləşdirilə bilər [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) yaxşı seçimdir.

Veb sayt [bir səhifəlik tətbiqin](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasını qəbul etdiyi üçün, `. ` daxil olmayan URL yolunu yenidən yazmağı unutmayın `index.html`

Veb sayta giriş səhifəsi yalnız bir dəfə yerləşdirilməlidir və sonrakı məzmun yeniləmələri üçün vebsayt giriş səhifəsini yenidən yerləşdirməyə ehtiyac yoxdur.

#### github Səhifəsində Yerləşdirin

[Təşkilat yaratmaq üçün əvvəlcə github klikləyin](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Sonra bu təşkilat altında anbar yaradın `i18n-demo.github.io` Lütfən, `i18n-demo` hərfini yaratdığınız təşkilat adı ilə əvəz edin):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Əvvəlki məqalədəki məzmunu dərc edərkən, o yaradıldı `out/ol/htm` zəhmət olmasa bu kataloqu daxil edin və işə salın :

```
ln -s index.html 404.html
```


Çünki `github page` URL yolunun yenidən yazılmasını dəstəkləmir, buna görə də `404.html` əvəzinə istifadə olunur.

Sonra `htm` aşağıdakı əmri yerinə yetirin ( `i18n-demo/i18n-demo.github.io.git` öz anbar ünvanınızla əvəz etməyi unutmayın) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodu itələdikdən sonra `github page` -in yerləşdirilməsinin uğurla işləməsini gözləyin (aşağıda göstərildiyi kimi) və sonra ona daxil ola bilərsiniz.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo səhifəsi üçün baxın:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Səhifəsində Yerləşdirin

[cloudflare page](//pages.cloudflare.com) ilə müqayisədə, bu `github page` materik Çin üçün daha əlverişlidir və istifadə etmək tövsiyə olunur.

`cloudflare page` Yerləşdirmə adətən yuxarıdakı `github page` yerləşdirməyə əsaslanır.

Layihə yaradın və `i18n-demo.github.io` anbarı bağlayın.

Proses aşağıdakı şəkildə göstərilmişdir:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` təşkilata giriş icazəsi vermək üçün üzərinə klikləyin `Add Account`

Əgər siz başqa təşkilatın anbarını bağlamısınızsa, yeni təşkilat görünməzdən əvvəl ona iki dəfə icazə vermək üçün iki dəfə klikləməlisiniz `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Sonra Anbar seçin `i18n-demo.github.io` sonra `Begin setup` düyməsini basın və sonrakı addımlar üçün standart dəyərlərdən istifadə edin.

<img alt="" src="https://p.3ti.site/1721118490.avif">

İlk dəfə bağladıqdan sonra ona daxil olmaq üçün bir neçə dəqiqə gözləmək lazımdır.

Yerləşdirmədən sonra xüsusi bir domen adını bağlaya bilərsiniz.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Fərdi domen adını bağladıqdan sonra, aşağıda göstərildiyi kimi tək səhifəlik tətbiqin yolunun yenidən yazılmasını konfiqurasiya etmək üçün domen adına keçin:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Yuxarıdakı şəkildəki qaydalar `i18n.site` kimidir.

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

Bundan əlavə, lütfən, keş qaydalarını aşağıda göstərildiyi kimi konfiqurasiya edin və keş müddətini bir aya təyin edin.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Zəhmət olmasa yuxarıdakı şəkildəki ikinci addımda uyğun gələn domen adını bağladığınız domen adına dəyişdirin.

#### Materik Çində Veb Sayt Yerləşdirilməsinin Optimallaşdırılması

Əgər siz materik Çinin şəbəkə mühitində daha yaxşı əlçatanlıq performansı əldə etmək istəyirsinizsə, lütfən, əvvəlcə [domen adını qeydiyyatdan keçirin](//beian.aliyun.com) .

Sonra, `out/ol/htm` Çində bulud satıcılarının obyekt anbarından istifadə `CDN` +

[Baidu Smart Cloud kimi tək səhifəli proqramlara uyğunlaşma yolunu yenidən yazmaq üçün kənar hesablamadan istifadə edə bilərsiniz `CDN`](//cloud.baidu.com/product/cdn.html) O, belə konfiqurasiya edilə bilər:

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

`MX` və `CNAME` qeydlər eyni vaxtda mövcud ola bilməz, əgər `A` domen adı e-poçtlarını almaq istəyirsinizsə, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` əməkdaşlıq etməlisiniz.

Bundan əlavə, materik Çində bulud satıcılarının xaricdəki trafik ödənişləri nisbətən baha olduğundan, xərcləri optimallaşdırmaq istəyirsinizsə, nail olmaq üçün [Huawei Cloud DNS un pulsuz coğrafi ayırdetmə qabiliyyətindən](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) və [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) xüsusi domen adından (aşağıda göstərildiyi kimi) istifadə edə bilərsiniz trafikin təxribatı──Materik Çində trafik Baidu Cloud `CDN` beynəlxalq trafik cloudflare gedir.

<img alt="" src="https://p.3ti.site/1721119788.avif">

Bu yerləşdirmənin optimallaşdırılması həlləri daha mürəkkəbdir və gələcəkdə ayrı-ayrı fəsillərdə təqdim olunacaq.

#### Ümumi Domen Adının Yönləndirilməsi

Əsas veb saytınız kimi veb `xxx.com` yaratmaq üçün istifadə `i18n.site` , adətən pan-domen yönləndirməsini konfiqurasiya etməlisiniz, yəni `www.xxx.com` `*.xxx.com` .

Bu tələb Alibaba Cloud-un `EdgeScript` ( [İngilis sənədi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Çin sənədi](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) köməyi ilə həyata keçirilə bilər `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) -da bir domen adı əlavə edin və domen `*.xxx.com` Alibaba Cloud `CDN` -in `CNAME` -a yönəldin.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Məsələn, yuxarıdakı şəkildəki pan-domen adının yönləndirmə konfiqurasiyası `*.i18n.site` kimidir:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Ilə Yerləşdirin

Lütfən, `server` aşağıdakı kimi konfiqurasiya əlavə edin nginx burada `/root/i18n/md/out/ol/htm` lütfən onu öz layihənizin yoluna dəyişdirin `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Kataloq Strukturu

#### Ictimai

Veb saytın statik faylları, məsələn `favicon.ico` `robots.txt` və s.

Buradakı ikon faylları ilə yaradıla bilər [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` altında `i18n.site` konfiqurasiya faylları, tərcümə keşi və s. var. Təfərrüatlar üçün növbəti ["Konfiqurasiya"](/i18n.site/conf) fəslinə baxın.

#### Az

Konfiqurasiya faylındakı `fromTo` `en` `.i18n/conf.yml` uyğun gələn mənbə dil kataloqu

```yaml
i18n:
  fromTo:
    en: zh
```

Zəhmət olmasa tərcümənin konfiqurasiyasına baxın [i18](/i18/use)

