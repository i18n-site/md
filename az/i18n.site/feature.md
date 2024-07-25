# Məhsulun Xüsusiyyəti

## İnteqrasiya `I18` Tərcümə

Proqramda `i18` tərcümə var, xüsusi istifadə üçün [➔ `i18`](/i18) baxın.

## Brauzer Dilini Avtomatik Uyğunlaşdırın

Veb saytın defolt dili avtomatik olaraq brauzerin dili ilə uyğunlaşacaq.

İstifadəçi dilləri əl ilə dəyişdikdən sonra istifadəçinin seçimi yadda qalacaq.

Əlaqədar kod [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobil Terminal Uyğunlaşması

Mobil telefonda mükəmməl oxu təcrübəsi də var.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Front-end yüksək əlçatanlıq

`i18n.site` olaraq, saytın məzmunu [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) və `npmjs.com` çox `CDN` məzmunu `npm` !

Bu əsasda, çinli istifadəçilərə sabit giriş əldə etmək və **yüksək səviyyəli cəbhə əlçatanlığına** nail olmaq üçün materik Çindən güzgü mənbələri əlavə edildi.

Prinsip ondan ibarətdir ki, [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) -in köməyi ilə sorğunu kəsin, əgər sorğu uğursuz olarsa, onu digər `CDN` üzərində yenidən cəhd edin və standart yükləmə mənbəyi kimi ən sürətli cavab verən mənbə stansiyasını aktivləşdirin.

Əlaqədar kod [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Tək Səhifə Tətbiqi, Son Dərəcə Sürətli Yükləmə

Veb sayt səhifələri dəyişdirərkən heç bir yeniləmə olmadan və son dərəcə sürətli yüklənərək bir səhifəlik proqram arxitekturasını qəbul edir.

## Oxu Təcrübəsi Üçün Optimallaşdırılmışdır

### Yaxşı Dizayn Edilmiş Üslub

> Sadəliyin gözəlliyi bu veb-saytın veb dizaynında mükəmməl şəkildə şərh edilmişdir.
> O, lazımsız bəzəkdən imtina edir və məzmunu ən təmiz formada təqdim edir.
> Gözəl bir şeir kimi qısa olsa da, insanların qəlbini oxşayır.

<p style="text-align:right">── Müəllif I18N.SITE</p>

[➔ Üslubların siyahısını görmək üçün bura klikləyin](/i18n.site/md/styl) .

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

### Kiçik `404`

`404` sevimli kiçik üzən xəyal var, onun gözləri siçan ilə hərəkət edəcək, [➔ Baxmaq üçün bura klikləyin](/404) ,

## Açıq Mənbə Kodu

[Kod açıq mənbədir](/i18n.site/src) . Əgər inkişafda iştirak etmək istəyirsinizsə, özünüzü [poçt siyahısına](//groups.google.com/u/2/g/i18n-site) təqdim edin.

Vacib olan, lakin təcili olmayan bir çox kiçik tələblər var ki, inkişaf qrupu yaxşı bildiyiniz texnologiyaya uyğun olaraq təcrübə tapşırıqları təyin edəcək və tələbləri təyin edərkən inkişaf sənədlərini təkmilləşdirəcək.

