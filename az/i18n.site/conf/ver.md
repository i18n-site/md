# Layihə Versiyası

Nümunə olaraq demo layihəsini götürün:

`en/demo2/v` yan panel konturunda layihə adının sağında göstəriləcək layihənin cari versiya nömrəsidir.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Burada `en/` `.i18n/conf.yml` ilə konfiqurasiya edilmiş tərcümə mənbə dilinə uyğun dil kodudur.

Əgər mənbə diliniz ingilis dili deyilsə, `v` faylı mənbə dilinizin layihə kataloquna yerləşdirilməlidir.

Sənədlərin tarixi versiyalarına baxmaq imkanı inkişaf mərhələsindədir.

Axtarış motorları tərəfindən indeksləşdirilmiş səhifələrdə qarışıqlığa səbəb olan çoxlu versiya nömrələrinin qarşısını almaq üçün yalnız əsas yeniləmələr buraxıldıqda sənədin versiya nömrəsini dəyişdirmək tövsiyə olunur (məsələn, `v1` , `v2` ).

## Müxtəlif Layihələrin Fayl Indekslərini Bölmək Üçün Boş `v` Fayldan Istifadə Edin

Demo layihədə, `en/demo2/v` ilə yanaşı, `en/blog` və `en/demo1` kataloqlarında boş `v` fayl olduğunu da görə bilərsiniz.

Yan panel konturunda boş `v` göstərilməyəcək, lakin `v` fayl olduğu müddətcə kataloq və alt kataloqlardakı fayllar üçün müstəqil indeks yaradılacaq.

Müxtəlif layihələrin indekslərini bölməklə, bütün saytdakı bütün faylların indeksini bir anda yükləmək nəticəsində yaranan yavaş girişin qarşısını ala bilərsiniz.

Məsələn, demo layihədə `blog` [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) a uyğun gələn indeks faylı :