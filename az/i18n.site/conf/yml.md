# .i18n/conf.yml

`i18n.site` üçün profil `.i18n/conf.yml` dir.

[`i18`](/i18) , `ignore:` və `i18n:` parametrləri istisna olmaqla, konfiqurasiya faylı aşağıdakı kimidir:

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

Onların arasında `upload` dan `ext:` ə qədər konfiqurasiya elementi dərc edərkən yalnız `.md` yüklənəcəyini bildirir.

## Üst Naviqasiya Naviqasiyası

`nav:` konfiqurasiya seçimləri, ana səhifənin yuxarısındakı naviqasiya menyusuna uyğundur.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onların arasında `i18n: home` `en/i18n.yml` -də `home: Home` yə uyğundur.

`en/i18n.yml` `zh/i18n.yml` kimi bir çox dilə tərcümə ediləcək.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tərcümə tamamlandıqdan sonra siz `yml` tərcümənin dəyərini dəyişdirə bilərsiniz, lakin tərcümə `yml` açarını əlavə etməyin və ya silməyin.

### `use: Toc` , Tək Fayl Şablonu (Kontur Ilə)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` , tək `Markdown` şablonu göstərən `Toc` şablondan istifadə edərək göstərmə deməkdir.

`TOC` `Table of Contents` -in abbreviaturasıdır. Bu şablon təqdim edildikdə, bu `Markdown` faylın konturları yan paneldə göstəriləcək.

`url:` `Markdown` -in fayl yolunu təmsil edir ( `/` kök qovluğuna uyğundur `/README.md` , bu fayl adı böyük hərf prefiksi və kiçik hərf şəkilçisi tələb edir).

### `use: Md` , Tək Fayl Şablonu (Kontur Yoxdur)

`Md` şablonu və `Toc` şablonu eynidir və hər ikisi tək `Markdown` faylı göstərmək üçün istifadə olunur. Lakin `Md` şablonu kənar paneldə kontur göstərmir.

Siz yuxarıdakı konfiqurasiyada `use: Toc` `use: Md` ə dəyişdirə, `md` kataloqunda `i18n.site` yenidən işə sala və sonra əsas səhifədəki dəyişiklikləri müşahidə etmək üçün inkişafa baxış URL-inə daxil ola bilərsiniz.

### Konfiqurasiya Yolu Olmadan Defolt Yükləmə

Müəyyən bir yola daxil olunarsa və onun yol prefiksi `nav:` -da konfiqurasiya edilmirsə, yola uyğun gələn `MarkDown` fayl defolt olaraq yüklənəcək və `Md` şablonundan istifadə edərək göstəriləcək.

Məsələn, `/test` daxil olunarsa və `nav:` bu yol olmadan konfiqurasiya edilirsə və səhifə dili ingilis dilidirsə (kod `en` ), `/en/test.md` standart olaraq yüklənəcək və şablon `Md` dən istifadə edilərək göstəriləcək.

`/en/test.md` bu fayl mövcud deyilsə, standart `404` səhifə göstərilir.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Çox Fayllı Şablon

Konfiqurasiya faylında:

```
  - i18n: blog
    use: Doc
```

Şablon göstərilməsi üçün `Doc` istifadəsini göstərir.

`Doc` şablonu tək və ya çoxlu layihələr üçün sənəd konturlarını yaratmaq üçün çoxsaylı `MarkDown` in inteqrasiyasını dəstəkləyir.

#### Tək Layihə (Birdən Çox Fayl)

Yuxarıdakı `blog` `Doc` in tək elementli rejimidir.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Boş Olduqda, Defolt Olaraq i18n Dəyərinə Keçir

`url` yazılmayıbsa, `url` defolt olaraq `i18n` dəyərinə çevrilir. Bu qayda digər şablonlar üçün də qüvvəyə minir.

Yuxarıdakı yazı metodu `url: blog` a bərabərdir və ona uyğun fayl `en/blog/TOC` dir.

#### Çoxsaylı Layihələr

`.i18n/conf.yml` dən `i18n:doc` ın konfiqurasiyası çox layihəli rejimdir.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Burada, `menu: NB demo1,demo2` , açılan menyunu göstərmək üçün `NB` şablonundan istifadə etmək deməkdir.

`Name Breif` -in abreviaturası olan `NB` o deməkdir ki, açılan menyuda layihənin adı və şüarı göstərilə bilər.

`NB` dan sonra ona ötürülən `demo1,demo2` parametri gəlir.
Qeyd : ** `demo1,demo2` -da `,` əvvəl və sonra ** boşluq olmamalıdır.

Yuxarıdakı parametrlər üçün müvafiq kataloq indeks faylı:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Məzmun Indeksi

0 `json` kataloq konturunu yaratmaq üçün `TOC` şablon konfiqurasiyasına uyğun gələn `doc` kataloq indeks faylını oxumaq üçün demo anbarında `i18n.site` plug-in `js` icra edəcək `.i18n/hook/after.tran/TOC.js`

Əgər `doc` şablonundan istifadə edirsinizsə, bu plugin sizdə olmalıdır.

Əgər siz `i18n.site` layihəsini boş qovluqdan işə salırsınızsa, demo layihəsi `.i18n` kataloqunuza köçürməyi unutmayın.

`Doc` şablonu yaradılan `json` ə əsaslanaraq məzmunun konturunu göstərəcək.

##### Ətraflı Məzmun Izahatı

`en/blog/TOC` aşağıdakı kimidir :

```
README.md

news/README.md
  news/begin.md
```

##### Səviyyələri Göstərmək Üçün Abzasdan Istifadə Edin

Yuxarıdakı `en/blog/TOC` -ın birinci sətirindəki `README.md` layihənin adı olan aşağıdakı şəkildəki `i18n.site` yə uyğundur.

Növbəti iki sətir aşağıdakı ekran görüntüsündə göstərildiyi kimidir.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ə uyğundur,
`news/begin.md` `Our Product is Online !` ə uyğundur

`TOC` faylları konturun iyerarxik əlaqəsini göstərmək və çoxsəviyyəli girintiləri dəstəkləmək üçün girintilidir.

##### Ana Səviyyə Məzmunu Deyil, Yalnız Başlığı Yazır.

Bir neçə səviyyəli girinti olduqda, əsas səviyyə məzmunu deyil, yalnız başlığı yazır. Əks halda, mətbəə pozulacaq.

##### Layihə README.md

Məzmun `en/demo2/README.md` kimi `README.md` bəndində yazıla bilər.

Qeyd edək ki, bu faylın məzmunu məzmun cədvəlini göstərmir, ona görə də uzunluğu məhdudlaşdırmaq və qısa giriş yazmaq tövsiyə olunur.

###### Layihə Şüarı

Siz `Deme Two` açılan menyunun və layihənin konturunun `Your Project slogan` altında öz layihə sloganının olduğunu görə bilərsiniz :

![](https://p.3ti.site/1721276842.avif)

Bu `en/demo2/README.md` birinci sırasına uyğundur :

```
# Demo Two : Your Project slogan
```

Layihənin birinci səviyyə başlığının ilk iki nöqtəsindən `:` dən sonrakı məzmun `README.md` layihənin şüarı kimi qəbul ediləcək.

Çin, Yaponiya və Koreyadan olan istifadəçilər, lütfən nəzərə alın ki, tam enli iki nöqtə əvəzinə yarım enli iki nöqtə `:` istifadə etməlisiniz.

##### TOC-U Toplu Şəkildə Necə Köçürmək Olar?

`TOC` faylı mənbə dilin kataloquna yerləşdirmək lazımdır.

Məsələn, mənbə dili Çin dilidirsə, yuxarıdakı `TOC` `zh/blog/TOC` dir.

Mənbə dili dəyişdirilərsə, layihədə müəyyən bir dilin `TOC` faylını başqa dilə toplu şəkildə köçürməlisiniz.

Aşağıdakı əmrlərə müraciət edə bilərsiniz:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lütfən, yuxarıdakı əmrdə `en/` və `zh/` dil kodunuza dəyişdirin.