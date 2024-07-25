# Layihə Versiyası

Nümunə olaraq demo layihəsini götürün:

`en/demo2/v` kənar paneldə layihə adının sağında göstəriləcək layihənin cari versiya nömrəsidir.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` `.i18n/conf.yml` konfiqurasiya edilmiş tərcümə mənbə dilinə uyğun dil kodudur.

Əgər mənbə diliniz ingilis dili deyilsə, o zaman `v` faylı mənbə dilinizin layihə kataloquna yerləşdirilməlidir. 

Sənədlərin tarixi versiyalarına baxmaq imkanı inkişaf mərhələsindədir.

Çoxlu versiya nömrələrinə görə axtarış motorları tərəfindən indeksləşdirilmiş səhifələri qarışdırmamaq üçün əsas yeniləmələri (məsələn `v1` , `v2` kimi) buraxarkən sənədin yalnız versiya nömrəsini dəyişdirmək tövsiyə olunur.

## Müxtəlif Layihələr Üçün Fayl Indekslərini Bölmək Üçün Boş `v` Istifadə Edin

Demo layihədə `en/demo2/v` ilə yanaşı, `en/blog` və `en/demo1` kataloqlarının məzmununun da boş olduğunu görə bilərsiniz `v` fayllar.

Boş `v` kənar panel konturunda göstərilməyəcək, lakin `v` fayl mövcud olduğu müddətdə kataloq və alt kataloqlar üçün müstəqil indeks yaradılacaq.

Müxtəlif layihələrin indekslərini bölməklə, bütün saytdakı bütün faylların indeksini bir anda yükləmək nəticəsində yaranan yavaş girişin qarşısını ala bilərsiniz.

Məsələn : demo layihəsində müvafiq indeks [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

