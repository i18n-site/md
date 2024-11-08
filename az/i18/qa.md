# Tez-Tez Verilən Suallar

## Tərcümə Sətirlərinin Əlavə Edilməsi Və Ya Silinməsi Tərcümədə Qarışıqlığa Səbəb Olur

> [!WARN]
> Unutmayın ki, **tərcümədəki sətirlərin sayı orijinal mətndəki sətirlərə uyğun olmalıdır** .
> Yəni tərcüməni əl ilə düzəldərkən, **tərcümənin sətirlərini əlavə etməyin və ya silməyin** , əks halda tərcümə ilə orijinal mətn arasındakı xəritə əlaqəsi pozulacaq.

Təsadüfən sətir əlavə etsəniz və ya silsəniz, çaşqınlığa səbəb olarsanız, lütfən, modifikasiyadan əvvəl tərcüməni versiyaya bərpa edin, yenidən `i18` tərcüməni işə salın və düzgün xəritələşdirməni yenidən keşləyin.

Tərcümə və orijinal mətn arasındakı xəritələşdirmə [i18n.site/token](//i18n.site/token) `.i18h/hash` silin və çaşqın xəritəni silmək üçün yenidən tərcümə edin (lakin bu, tərcümədə edilən bütün əl düzəlişlərinin itirilməsinə səbəb olacaq).

## `YAML` `HTML` -in `Markdown` Yə Çevrilməsinin Qarşısını Necə Almaq Olar :

`YAML` dəyəri tərcümə üçün `MarkDown` kimi qəbul edilir.

Bəzən `HTML` → `MarkDown` -dən çevirmə bizim istədiyimiz kimi olmur, məsələn, `<a href="/">Home</a>` `[Home](/)` -ə çevrilməsi.

`<a class="A" href="/">Home</a>` kimi `a` teqinə `href` dən başqa hər hansı bir atribut əlavə etmək bu çevrilmənin qarşısını ala bilər.

## `./i18n/hash` Fayl Aşağıda Ziddiyyət Təşkil Edir

Ziddiyyətli faylları silin və `i18` tərcüməni təkrar edin.