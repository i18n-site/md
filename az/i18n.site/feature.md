# Məhsul Xüsusiyyətləri

## `i18` Tərcümə Inteqrasiya Olunub

Proqramda daxili `i18` tərcümə var, xüsusi istifadə üçün [➔ `i18` sənədə](/i18) baxın.

## Brauzer Dilini Avtomatik Uyğunlaşdırın

Veb saytın defolt dili avtomatik olaraq brauzerin dili ilə uyğunlaşacaq.

İstifadəçi dilləri əl ilə dəyişdikdən sonra istifadəçinin seçimi yadda qalacaq.

Əlaqədar kod [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobil Terminal Uyğunlaşması

Mobil telefonda mükəmməl oxu təcrübəsi də var.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end yüksək əlçatanlıq

`i18n.site` , , [unpkg.com](//unpkg.com) və `npm` -də yüklənmiş digər çoxsaylı `CDN` məzmunun [jsdelivr.com](//jsdelivr.com) ilə defolt olaraq sayt məzmununu `npmjs.com` ə dərc edəcək.

Bu əsasda, çinli istifadəçilərə sabit giriş əldə etmək və **yüksək səviyyəli cəbhə əlçatanlığına** nail olmaq üçün materik Çindən güzgü mənbələri əlavə edildi.

Prinsip belədir: sorğuları [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) ilə kəsin, uğursuz sorğuları digər `CDN` lərdə təkrar sınayın və adaptiv olaraq ən sürətli cavab verən mənbə saytını standart yükləmə mənbəyi kimi aktivləşdirin.

Əlaqədar kod [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Tək Səhifə Tətbiqi, Son Dərəcə Sürətli Yükləmə

Veb sayt səhifələri dəyişdirərkən heç bir yeniləmə olmadan və son dərəcə sürətli yüklənərək bir səhifəlik proqram arxitekturasını qəbul edir.

## Oxu Təcrübəsi Üçün Optimallaşdırılmışdır

### Yaxşı Dizayn Edilmiş Üslub

> Sadəliyin gözəlliyi bu veb-saytın veb dizaynında mükəmməl şəkildə şərh edilmişdir.
> O, artıq bəzəkdən imtina edir və məzmunu ən təmiz formada təqdim edir.
> Gözəl bir şeir kimi qısa olsa da, insanların qəlbini oxşayır.

<p style="text-align:right">── Müəllif I18N.SITE</p>

[➔ Üslubların siyahısını görmək üçün bura klikləyin](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Yuxarıdakı şəkildə `i18n.site` abunəliyindən istifadə [inoreader.com](//inoreader.com) çoxdilli `RSS` göstərilir.

### Onlayn Şriftləri Yükləyin, Çin Dilini Dəstəkləyin

Defolt olaraq, müxtəlif platformalarda istifadəçilərin oxu təcrübəsini birləşdirmək üçün [Alimama ikili oxlu dəyişən düzbucaqlı şriftlər](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) və digər onlayn şriftlər aktivləşdirilib.

Eyni zamanda, yükləmə sürətini yaxşılaşdırmaq üçün şriftlər söz tezliyi statistikasına uyğun olaraq dilimlənir.

Əlaqədar kod [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Üst Naviqasiya Avtomatik Olaraq Gizlədilib

Aşağı diyirləyin və yuxarı naviqasiya avtomatik olaraq gizlənəcək.

Yuxarı diyirləyin və gizli naviqasiya yenidən görünəcək.

Siçan hərəkət etmədikdə sönəcək.

Sürətli sənəd oxu təcrübəsi yaratmaq üçün naviqasiya panelinin yuxarı sağ küncündə tam ekran düyməsi var.

### Cari Fəslin Sinxron Kontur Işıqlandırılması

Sağdakı məzmunu sürüşdürərkən, soldakı kontur eyni zamanda hazırda oxunan fəsli vurğulayacaqdır.

## Sərin Detallar

### Siçan Effektləri

Gözəl xüsusi effektləri görmək üçün siçanınızı yuxarı naviqasiyanın sağ tərəfindəki düymənin üzərinə gətirin.

### `404` Balaca Kabus

`404` səhifəsində sevimli kiçik üzən xəyal var, onun gözləri siçan ilə hərəkət edəcək, [➔ Baxmaq üçün bura klikləyin](/404) ,

## Açıq Mənbə Kodu

[Kod açıq mənbədir](/i18n.site/src) . Əgər inkişafda iştirak etmək istəyirsinizsə, özünüzü [poçt siyahısına](//groups.google.com/u/2/g/i18n-site) təqdim edin.

Vacib olan, lakin təcili olmayan bir çox kiçik tələblər var ki, inkişaf qrupu yaxşı bildiyiniz texnologiyalar əsasında praktiki tapşırıqlar verəcək və tələbləri təyin edərkən inkişaf sənədlərini təkmilləşdirəcək.