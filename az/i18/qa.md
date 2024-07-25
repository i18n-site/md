# Ümumi Problem

## Tərcümə Sətirlərinin Əlavə Edilməsi Və Ya Silinməsi Tərcümədə Qarışıqlığa Səbəb Olur

Unutmayın ki, **tərcümədəki sətirlərin sayı orijinal mətndəki sətirlərə uyğun olmalıdır** .

Yəni tərcüməni əl ilə düzəldərkən, **tərcümənin sətirlərini əlavə etməyin və ya silməyin** , əks halda tərcümə ilə orijinal mətn arasındakı xəritə əlaqəsi pozulacaq.

Təsadüfən sətir əlavə etsəniz və ya silsəniz, çaşqınlığa səbəb olarsanız, lütfən, dəyişiklikdən əvvəlki versiyaya tərcüməni bərpa edin, tərcüməni `i18` işə salın və düzgün xəritələşdirməni yenidən keşləyin.

Tərcümə və orijinal mətn arasındakı xəritələşdirmə [i18n.site/token](//i18n.site/token) -də yeni işarə yaradın, silin `.i18h/hash`

## Linkin `HTML` `Markdown` -a Çevrilməsinin Qarşısını : Almaq `YAML`

`YAML` dəyəri tərcümə üçün `MarkDown` kimi qəbul ediləcək.

Bəzən `HTML` → `MarkDown` çevrilməsi bizim istədiyimiz kimi olmur, məsələn, `<a href="/">Home</a>` -a çevrilir `[Home](/)` .

Bu çevrilmənin qarşısını almaq üçün `href` `a` `<a class="A" href="/">Home</a>` kimi hər hansı atribut əlavə edin.

## `./I18n/Hash` Aşağıdakı Fayllar Ziddiyyət Təşkil Edir

Ziddiyyətli faylları silin və Tərcüməni yenidən işə salın `i18`
