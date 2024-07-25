# .i18n/conf.yml

Konfiqurasiya faylı `.i18n/conf.yml` `i18n.site`

[`i18`](/i18) `ignore:` və `i18n:` parametrləri istisna olmaqla, konfiqurasiya faylı aşağıdakı kimidir:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Onların arasında `ext:` konfiqurasiya elementi `upload` deməkdir ki, dərc edildikdə yalnız `.md` yüklənəcək.

## Üst Naviqasiya Naviqasiyası

Əsas səhifənin yuxarısındakı naviqasiya menyusuna uyğun konfiqurasiya `nav:` .

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onların arasında `en/i18n.yml`中`home: Home` uyğun `i18n: home` .

`en/i18n.yml` bir çox dilə tərcümə olunacaq, məsələn, `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tərcümə tamamlandıqdan sonra siz tərcümədə `yml` dəyərini dəyişdirə bilərsiniz, lakin `yml` tərcümə açarını əlavə etməyin və ya silməyin.

### `use: Toc` Tək Fayl Şablonu (Kontur Ilə)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tək `Markdown` şablonunu göstərən `Toc` renderindən istifadə etmək deməkdir.

`TOC` `Table of Contents` şablon təqdim edildikdə, bu `Markdown` faylının konturları yan paneldə göstəriləcək.

`url:` fayl yolunu təmsil `Markdown` ( `/` kök qovluğuna uyğundur `/README.md` , bu fayl adı böyük hərf prefiksi və kiçik hərf şəkilçisi tələb edir).

### `use: Md` Tək Fayl Şablonu (Kontur Yoxdur)

`Md` `Toc` ilə eynidir, hər ikisi tək `Markdown` faylını göstərmək üçün istifadə olunur. Lakin `Md` şablon kənar paneldə kontur göstərmir.

Siz yuxarıdakı konfiqurasiyada `use: Toc` -i `use: Md` kimi dəyişdirə, işə salın `i18n.site` yenidən `md` kataloqunda və sonra əsas səhifədəki dəyişiklikləri müşahidə etmək üçün inkişafa baxma URL-inə daxil olun.

### Konfiqurasiya Yolu Olmadan Defolt Yükləmə

Əgər daxil olan müəyyən yolun yol prefiksi `nav:` yola uyğun `MarkDown` fayl defolt olaraq yüklənəcək və `Md` şablonundan istifadə edilərək göstəriləcək.

Məsələn, `/test` -ə daxil olsanız və `nav:` bu yol olmadan konfiqurasiya edilibsə və səhifənin dili ingiliscədirsə (kod `en` ), şablon defolt olaraq yüklənəcək `/en/test.md` və istifadə edilərək göstəriləcək `Md` .

Bu fayl mövcud `/en/test.md` , standart `404` səhifə göstəriləcək.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Çox Fayllı Şablon

Konfiqurasiya faylında:

```
  - i18n: blog
    use: Doc
```

Şablon təqdim etmək üçün istifadə `Doc` göstərir.

`Doc` tək və ya çoxlu layihələr üçün sənəd konturlarını yaratmaq üçün çoxlu `MarkDown` inteqrasiyasını dəstəkləyir.

#### Tək Layihə (Birdən Çox Fayl)

`blog` yuxarıda `Doc` tək layihə rejimidir.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Olduqda, Defolt Olaraq i18n Dəyərinə Keçir

`url` yazmasanız, bu qayda `i18n` şablonlar üçün də `url` minir.

Yuxarıdakı yazı metodu `url: blog` -ə bərabərdir və ona uyğun fayl `en/blog/TOC` .

#### Çoxsaylı Layihələr

`.i18n/conf.yml` `i18n:doc` dakı konfiqurasiya çox layihəli rejimdir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Burada, açılan menyunu göstərmək üçün `NB` istifadə etmək `menu: NB demo1,demo2` .

`NB` açılan menyunun layihənin adını və şüarını göstərə biləcəyini göstərən `Name Breif` qısaltmasıdır.

`NB` ardınca ona ötürülən `demo1,demo2` parametri gəlir.
Nəzərə alın ki `demo1,demo2` `,` vergülündən əvvəl və sonra ** boşluq olmamalıdır : **

Yuxarıdakı parametrlər üçün müvafiq kataloq indeks faylı:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Məzmun Indeksi

`i18n.site` Kataloq konturunun `json` yaratmaq üçün kataloq indeks faylını `doc` şablon konfiqurasiyasına uyğun `TOC` oxumaq üçün demo anbarında `.i18n/hook/after.tran/TOC.js` `js` yerinə yetirəcək.

`doc` istifadə edirsinizsə, sizdə bu plugin olmalıdır.

`i18n.site` boş bir qovluqdan işə salırsınızsa, demo layihədəki `.i18n` kataloqunuza köçürməyi unutmayın.

`Doc` yaradılan `json` əsasında məzmunun konturunu göstərəcək.

##### Ətraflı Məzmun Izahatı

Məzmun : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Səviyyələri Göstərmək Üçün Abzasdan Istifadə Edin

`README.md` `en/blog/TOC` `i18n.site`

Növbəti iki sətir aşağıdakı ekran görüntüsündə göstərildiyi kimidir.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` uyğundur `News` ,
`news/begin.md` uyğundur `Our Product is Online !`

`TOC` Fayl konturun iyerarxik əlaqəsini göstərmək üçün girintilidir və çox səviyyəli girintiləri dəstəkləyir.

##### Ana Səviyyə Məzmunu Deyil, Yalnız Başlığı Yazır.

Bir neçə səviyyəli girinti olduqda, əsas səviyyə məzmunu deyil, yalnız başlığı yazır. Əks halda, mətbəə pozulacaq.

##### Layihə README.md 

`README.md` , `en/demo2/README.md` ilə məzmun yaza bilərsiniz.

Qeyd edək ki, bu faylın məzmunu məzmun cədvəlini göstərmir, ona görə də uzunluğu məhdudlaşdırmaq və qısa giriş yazmaq tövsiyə olunur.

###### Layihə Şüarı

Gördüyünüz kimi `Deme Two` açılan menyunun və kataloqun layihə adının altında `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: birinci sətirə uyğundur `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Layihə `README.md` Birinci səviyyə başlığında ilk iki `:` sonra gələn məzmun layihənin şüarı kimi qəbul ediləcək.

Çin, Yaponiya və Koreyadan olan istifadəçilər, lütfən, tam enli iki nöqtə əvəzinə yarım enli iki nöqtəni istifadə etməlisiniz `:`

##### TOC-U Toplu Şəkildə Necə Köçürmək Olar?

`TOC` Fayl mənbə dilin kataloquna yerləşdirilməlidir.

Məsələn, mənbə dili Çin dilidirsə, yuxarıda `zh/blog/TOC` `TOC`

Mənbə dili dəyişdirilərsə, layihədə müəyyən bir dildə `TOC` başqa dilə toplu şəkildə köçürməlisiniz.

Aşağıdakı əmrlərə müraciət edə bilərsiniz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zəhmət olmasa yuxarıdakı əmrdə `en/` və `zh/` işarələrini dil kodunuza dəyişdirin.


