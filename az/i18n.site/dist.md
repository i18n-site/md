# Yerləşdirmə Və Onlayn

`i18n.site` [tək səhifəlik proqram](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasını qəbul edir və vebsayta giriş səhifəsi və vebsayt məzmunu müstəqil şəkildə yerləşdirilir.

Yuxarıdakı tərcüməni yerinə yetirdikdən sonra `md/out/dev` kataloqu altında `htm` və `v` qovluqları yaradılacaq.

Burada `dev` onun `.i18n/htm/dev.yml` konfiqurasiya faylı əsasında qurulduğunu bildirir.

`dev` kataloqu :

`htm` kataloqu veb-saytın giriş səhifəsidir.

`v` qovluğunda versiya nömrələri olan vebsayt məzmunu var.

Yerli baxış versiya nömrəsinə əhəmiyyət vermir və bütün faylları `out/dev/v/0.1.0` qovluğuna köçürür.

Rəsmi buraxılış üçün dəyişdirilmiş fayllar yeni versiya nömrəsi kataloquna kopyalanacaq.

## `-c` Ilə Konfiqurasiya Faylını Göstərin

Müxtəlif konfiqurasiya faylları `out` qovluğunda müvafiq qovluqlar yaradacaq.

Məsələn, `.i18n/htm/main.yml` `out/main` kataloqunu yaradacaq.

`dev.yml` və `main.yml` standart konfiqurasiyalardır.

`dev` yerli önizləmə üçün istifadə olunan inkişaf mühitini göstərən `development` qısaltmasıdır və eyni zamanda standart konfiqurasiya faylıdır.
`ol` rəsmi buraxılış üçün istifadə edilən onlayn `npm` `-n` edən `online` -in qısaltmasıdır.

Siz həmçinin digər konfiqurasiya faylları yarada bilərsiniz `--htm_conf`

məsələn:
```
i18n.site --htm_conf dist --save
```

Burada `--save` yeniləmə buraxılış versiyası nömrəsini təmsil edir.

## <a rel=id href="#npm" id="npm"></a> Məzmunu npmjs.com saytında dərc edin

Məzmunu dərc [npmjs.com](//npmjs.com) tövsiyə olunan defolt həlldir (bax [: Ön tərəfdə Yüksək Əlçatımlılıq](/i18n.site/feature#ha) ).

### npm Giriş & Post

`nodejs` quraşdırın, `npm login` ilə daxil olun.

`md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) edin və [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` öz `npm` paket adınız kimi dəyişdirin.

Sonra `md/.i18n/htm/main.package.json` dəyişdirin

Tərcümə etmək və dərc etmək üçün `md` kataloqunda `i18n.site --npm` və ya `i18n.site -n` işə salın.

Əgər dərc etmək üçün davamlı inteqrasiya mühitindən istifadə edirsinizsə, `nodejs` quraşdırmağa ehtiyac yoxdur. Sadəcə olaraq, daxil olmuş və dərc etmə icazələrini `~/.npmrc` mühitə köçürün.

Əgər `v:` də `main.yml` paketinin adını dəyişdirsəniz, lütfən **, əvvəlcə `.i18n/v/main` silib, sonra onu dərc etməyi unutmayın** .

#### npm Tərəfindən Nəşr Olunan Proksi Server

Əgər materik Çindəki istifadəçilər şəbəkə problemləri ilə qarşılaşsalar və `npm` paketi dərc edə bilmirlərsə, onlar proksi serveri konfiqurasiya etmək üçün `https_proxy` mühit dəyişənini təyin edə bilərlər.

Proksi server portunuzun `7890` olduğunu fərz etsək, yaza bilərsiniz:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Öz-Özünə Yerləşdirilən Məzmun

Məzmunu özünüzə yerləşdirmək istəyirsinizsə, əvvəlcə `md/.i18n/htm/main.yml` redaktə edin və `v: //unpkg.com/i18n.site` URL prefiksinizə dəyişdirin, məsələn, `v: //i18n-v.xxx.com` .

`md` qovluğunu daxil edin və işə salın

```
i18n.site --htm_conf ol --save
```

və ya abbreviatura

```
i18n.site -c ol -s
```

Sonra `md/out/main/v` qovluğundakı məzmunu `v:` də təyin edilmiş URL prefiks yoluna konfiqurasiya edin.

Nəhayət, **`/.v` dan `1s` ə qədər bitən yolun keş vaxtını konfiqurasiya edin** , əks halda yeni buraxılmış məzmuna dərhal daxil olmaq mümkün olmayacaq.

Lazımsız sorğuları azaltmaq üçün digər yollar üçün keş vaxtı bir il və ya daha çox müddətə təyin edilə bilər.

## Məzmunu S3-Ə Yerləşdirin

Öz serverinizdən istifadə etməklə yanaşı, məzmunu özünə yerləşdirmək üçün başqa `CDN` ümumi seçim `S3` + istifadə etməkdir.

Siz `S3` serverinə daxil olmaq üçün [rclone](https://rclone.org) edə bilərsiniz, sonra aşağıdakı skriptə müraciət edə və onu dəyişdirə bilərsiniz və hər buraxılış üçün artımlı dəyişiklikləri yalnız `S3` -ə köçürə bilərsiniz.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`CDN` konfiqurasiya etməyi unutmayın ki, `/.v` ilə bitən yolun keş vaxtı `1s` olsun, əks halda yeni buraxılmış məzmuna dərhal daxil olmaq mümkün olmayacaq.

## Internet Saytını Dərc Edin

Veb sayt hər yerdə yerləşdirilə bilər [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) yaxşı seçimdir.

Veb sayt [tək səhifəlik proqram](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasından istifadə etdiyi üçün `. ` dan `index.html` ə qədər olmayan URL yollarını yenidən yazmağı unutmayın.

Veb sayta giriş səhifəsi yalnız bir dəfə yerləşdirilməlidir və sonrakı məzmun yeniləmələri üçün vebsayt giriş səhifəsini yenidən yerləşdirməyə ehtiyac yoxdur.

### github Səhifəsində Yerləşdirin

[Təşkilat yaratmaq üçün əvvəlcə github klikləyin](https://github.com/account/organizations/new?plan=free) . Aşağıdakı təşkilat adı nümunə olaraq `i18n-demo` dır.

Sonra bu təşkilat altında `i18n-demo.github.io` anbar yaradın (zəhmət olmasa `i18n-demo` yaratdığınız təşkilat adı ilə əvəz edin):

![](https://p.3ti.site/1721098657.avif)

Əvvəlki məqalədəki məzmunu dərc edərkən, `out/main/htm` yaradıldı. Zəhmət olmasa bu kataloqu daxil edin və işə salın :

```
ln -s index.html 404.html
```


`github page` URL yolunun yenidən yazılmasını dəstəkləmədiyi üçün əvəzinə `404.html` istifadə olunur.

Sonra `htm` qovluğunda aşağıdakı əmri yerinə yetirin ( `i18n-demo/i18n-demo.github.io.git` öz anbar ünvanınızla əvəz etməyi unutmayın) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodu itələdikdən sonra ona daxil olmaq üçün `github page` -ın uğurla işə salınmasını gözləyin (aşağıda göstərildiyi kimi).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo səhifəsi üçün baxın:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### cloudflare Səhifəsində Yerləşdirin

[cloudflare page](//pages.cloudflare.com) ilə müqayisədə, yolun yenidən yazılmasını təmin edir və materik Çin üçün daha əlverişlidir və istifadə `github page` tövsiyə olunur.

`cloudflare page` -ın yerləşdirilməsi adətən yuxarıdakı `github page` in yerləşdirilməsinə əsaslanır.

Layihə yaradın və yuxarıdakı `i18n-demo.github.io` anbarını bağlayın.

Proses aşağıdakı şəkildə göstərilmişdir:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

`i18n-demo` təşkilata giriş icazəsi vermək üçün `Add Account` üzərinə klikləyin.

Əgər siz başqa bir təşkilatın anbarını bağlamısınızsa, yeni təşkilat göstərilməzdən əvvəl iki dəfə icazə vermək üçün `Add Account` iki dəfə klikləməlisiniz.

![](https://p.3ti.site/1721118306.avif)

Sonra, anbar `i18n-demo.github.io` seçin, sonra `Begin setup` düyməsini basın və sonrakı addımlar üçün standart dəyərlərdən istifadə edin.

![](https://p.3ti.site/1721118490.avif)

İlk dəfə bağladıqdan sonra ona daxil olmaq üçün bir neçə dəqiqə gözləmək lazımdır.

Yerləşdirmədən sonra xüsusi bir domen adını bağlaya bilərsiniz.

![](https://p.3ti.site/1721119459.avif)

Fərdi domen adını bağladıqdan sonra, aşağıda göstərildiyi kimi tək səhifəlik tətbiqin yolunun yenidən yazılmasını konfiqurasiya etmək üçün domen adına keçin:

![](https://p.3ti.site/1721119320.avif)

Yuxarıdakı şəkildəki qaydalar aşağıdakı kimidir, lütfən, aşağıdakı birinci sətirdəki `i18n.site` bağladığınız domen adı ilə əvəz edin.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Bundan əlavə, lütfən, keş qaydalarını aşağıda göstərildiyi kimi konfiqurasiya edin və keş müddətini bir aya təyin edin.

![](https://p.3ti.site/1721125111.avif)

Zəhmət olmasa yuxarıdakı şəkildəki ikinci addımda uyğun gələn domen adını bağladığınız domen adına dəyişdirin.

### Materik Çində Veb Sayt Yerləşdirilməsinin Optimallaşdırılması

Əgər siz materik Çinin şəbəkə mühitində daha yaxşı əlçatanlıq performansı əldə etmək istəyirsinizsə, lütfən, əvvəlcə [domen adını qeydiyyatdan keçirin](//beian.aliyun.com) .

Sonra, materik Çindəki bulud satıcılarının obyekt yaddaşından istifadə edin `CDN` Aşağıdakı məzmunu yerləşdirin `out/main/htm` +

Tək səhifəli proqramlara uyğunlaşma yolunu yenidən yazmaq üçün kənar hesablamadan istifadə edə bilərsiniz. Məsələn, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) belə konfiqurasiya edilə bilər:

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
  // Cavab başlıqları çıxışı sazlamaq üçün təyin edilə bilər, məsələn out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Rekord `MX` və rekord `CNAME` eyni vaxtda mövcud ola bilmədiyi üçün domen adı e-poçtlarını eyni vaxtda almaq istəyirsinizsə, `CNAME` `A` qədər [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) əməkdaşlıq etməlisiniz.

Bundan əlavə, materik Çində bulud satıcılarının xaricdəki trafik ödənişləri nisbətən baha olduğundan, xərcləri optimallaşdırmaq istəyirsinizsə, nail olmaq üçün [DNS Cloud-un pulsuz coğrafi ayırdetmə qabiliyyətindən](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) və [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) xüsusi domen adından (aşağıda göstərildiyi kimi) istifadə edə bilərsiniz trafikin yönləndirilməsi──Materik Çində trafik marşrutu Baidu Cloud `CDN` , beynəlxalq trafik cloudflare gedir.

![](https://p.3ti.site/1721119788.avif)

Bu yerləşdirmənin optimallaşdırılması həlləri daha mürəkkəbdir və gələcəkdə ayrı-ayrı fəsillərdə təqdim olunacaq.

### Ümumi Domen Adının Yönləndirilməsi

Əsas veb saytınız kimi veb sayt yaratmaq üçün `i18n.site` istifadə edirsinizsə, adətən pan-domen yönləndirməsini konfiqurasiya etməlisiniz, yəni girişi `*.xxx.com` -ə ( `www.xxx.com` daxil olmaqla) `xxx.com` ə yönləndirin.

Bu tələb Alibaba Cloud `CDN` `EdgeScript` ( [İngilis sənədi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Çin sənədi](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) köməyi ilə əldə edilə bilər.

[CDN Cloud](https://cdn.console.aliyun.com/domain/list) -da domen adını əlavə edin və Alibaba Cloud `CDN` də domen adını `*.xxx.com` `CNAME` yönəldin.

![](https://p.3ti.site/1721122000.avif)

Məsələn, yuxarıdakı şəkildəki `*.i18n.site` -ın pan-domen adının yönləndirmə konfiqurasiyası aşağıdakı kimidir:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx Ilə Yerləşdirin

Lütfən !-in `server` paraqrafında `/root/i18n/md/out/main/htm` kimi konfiqurasiya `out/main/htm` edin nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Davamlı Inteqrasiyaya Əsaslanır

`github action` -ı konfiqurasiya etmək üçün aşağıdakılara müraciət edə bilərsiniz:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Konfiqurasiyadan göründüyü kimi, bu iş axını budaq `main` və budaq `dist` -ə itələdikdə işə salınır.

İş axını sənədi dərc etmək üçün filial adına uyğun konfiqurasiya faylından istifadə edəcək, burada müvafiq olaraq nəşr konfiqurasiyası kimi `.i18n/htm/main.yml` və `.i18n/htm/dist.yml` istifadə olunacaq.

Sənədin buraxılması prosesi üçün aşağıdakı ən yaxşı təcrübələri tövsiyə edirik:

Dəyişikliklər filial `main` a köçürüldükdə, sənəd qurulmağa və ilkin baxış stansiyasına yerləşdirilməyə başlayır (öncədən baxış stansiyası mövcuddur [github page](//pages.github.com) ).

Sənədin ilkin baxış saytında düzgün olduğunu təsdiq etdikdən sonra kod birləşdiriləcək və `dist` filialına köçürüləcək və rəsmi quraşdırma və yerləşdirmə onlayn olacaq.

Əlbəttə ki, yuxarıda göstərilən prosesin həyata keçirilməsi daha çox konfiqurasiyanın yazılmasını tələb edir.

İş axını skripti üçün faktiki layihəyə müraciət edə bilərsiniz [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

Konfiqurasiyada `secrets.I18N_SITE_TOKEN` və `secrets.NPM_TOKEN` kod bazasında gizli dəyişənləri konfiqurasiya etməyi tələb edir.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` alın [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` konfiqurasiyada `npm` paketin yayım nişanıdır və dərc icazələri ilə [npmjs.com](//npmjs.com) yaradın (aşağıda göstərildiyi kimi).

![](//p.3ti.site/1730969906.avif)


## Kataloq Quruluşu

### `public`

Veb saytın statik faylları, məsələn, `favicon.ico` , `robots.txt` və s.

Buradakı ikon faylları ilə yaradıla bilər [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` kataloqunun altında `i18n.site` in konfiqurasiya faylları, tərcümə keşi və s. var. Təfərrüatlar üçün növbəti ["Konfiqurasiya"](/i18n.site/conf) fəslinə baxın.

### `en`

`.i18n/conf.yml` konfiqurasiya faylından `fromTo` -dən `en` nə uyğun gələn mənbə dil kataloqu

```yaml
i18n:
  fromTo:
    en: zh
```

Zəhmət olmasa tərcümənin konfiqurasiyasına baxın [i18](/i18/use)