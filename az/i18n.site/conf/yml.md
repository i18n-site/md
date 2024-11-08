# .i18n/conf.yml

`i18n.site` üçün konfiqurasiya faylı `.i18n/conf.yml` dir və məzmun aşağıdakı kimidir :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Onların arasında `upload` dan `ext:` ə qədər konfiqurasiya elementi dərc edərkən yalnız `.md` yüklənəcəyini bildirir.

## Üst Naviqasiya Naviqasiyası

`nav:` konfiqurasiya seçimləri, ana səhifənin yuxarısındakı naviqasiya menyusuna uyğundur.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Onların arasında `i18n: home` `en/i18n.yml` -də `home: Home` yə uyğun gəlir (burada `en` layihənin tərcüməsinin mənbə dilidir).

`en/i18n.yml` məzmunu naviqasiya menyusunda göstərilən mətndir, konfiqurasiyada `fromTo` -ə uyğun olaraq tərcümə ediləcək, məsələn, `zh/i18n.yml` yə tərcümə ediləcək.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Tərcümə tamamlandıqdan sonra siz `yml` tərcümənin dəyərini dəyişdirə bilərsiniz, lakin tərcümə `yml` açarını əlavə etməyin və ya silməyin.

### `use: Toc` Sənəd Şablonu

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` , tək `Markdown` şablonu göstərən `Toc` şablondan istifadə edərək göstərmə deməkdir.

`TOC` `Table of Contents` in abbreviaturasıdır. Bu şablon təqdim edildikdə, bu `Markdown` faylın konturları yan paneldə göstəriləcək.

`url:` `Markdown` -in fayl yolunu təmsil edir ( `/` kök qovluğuna uyğundur `/README.md` , bu fayl adı böyük hərf prefiksi və kiçik hərf şəkilçisi tələb edir).

### `use: Md` Sənəd Şablonu

`Md` şablonu və `Toc` şablonu eynidir və hər ikisi tək `Markdown` faylı göstərmək üçün istifadə olunur. Lakin `Md` şablonu kənar paneldə kontur göstərmir.

Siz yuxarıdakı konfiqurasiyada `use: Toc` `use: Md` -ə dəyişdirə, `md` kataloqunda `i18n.site` yenidən işə sala və sonra əsas səhifədəki dəyişiklikləri müşahidə etmək üçün inkişafa baxış URL-inə daxil ola bilərsiniz.

### `use: Blog` Bloq Şablonları

Bloq şablonu dərc vaxtına görə məqalələrin siyahısını (sərlövhələr və tezislər) göstərir.

[→ Xüsusi konfiqurasiya haqqında öyrənmək üçün bura klikləyin](/i18n.site/conf/blog)

### `use: Doc` Fayl Sənədi Şablonları

Konfiqurasiya faylında:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Şablon göstərilməsi üçün `Doc` istifadəsini göstərir.

`Doc` şablonu tək və ya çoxlu layihələr üçün sənəd konturlarını yaratmaq üçün çoxsaylı `MarkDown` inteqrasiyasını dəstəkləyir.

#### Birdən Çox Layihə Və Çoxlu Fayl

`.i18n/conf.yml` -da `i18n:doc` konfiqurasiyası çox layihəli çoxfayllı renderləmə rejimidir.

Burada, `menu: NB demo1,demo2` , açılan menyunu göstərmək üçün `NB` şablonundan istifadə etmək deməkdir.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`Name Breif` in abreviaturası olan `NB` o deməkdir ki, açılan menyuda layihənin adı və şüarı göstərilə bilər.

`NB` dan sonra ona ötürülən `demo1,demo2` parametri gəlir.

Qeyd : ** `demo1,demo2` `,` da vergüldən əvvəl və sonra ** boşluq olmamalıdır.

Yuxarıdakı parametrlər üçün müvafiq kataloq indeks faylı:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tək Layihə Birdən Çox Fayl

Yalnız bir layihəniz varsa, onu aşağıdakı kimi konfiqurasiya edə bilərsiniz.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Çox fayllı tək layihə `url` kök yolu `/` kimi konfiqurasiyasını dəstəkləmir
> Əgər __conf.yml → nav:__ Heç bir kök yolu konfiqurasiya edilməyibsə, veb-saytın əsas səhifəsinə daxil olduqda, o, `nav:` konfiqurasiyası altında avtomatik olaraq ilk URL-ə yazılacaq.
> Bu dizayn layihə sənədlərini, bloqları və digər məzmunu kataloqlar vasitəsilə daha yaxşı fərqləndirmək üçündür.
> Əsas səhifə kimi tək bir fayl və bir səhifədən istifadə etmək tövsiyə olunur.

> [!TIP]
> `url` yazılmayıbsa, `url` defolt olaraq `i18n` dəyərinə çevrilir. Bu qayda digər şablonlar üçün də qüvvəyə minir.

#### TOC Məzmun Indeksi

Əgər konfiqurasiyada şablon `use: Doc` aktivdirsə, lütfən, `i18n.addon/toc` də `.i18n/conf.yml` də plug-in-i aktiv edin. Konfiqurasiya aşağıdakı kimidir :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` avtomatik olaraq bu plaqini quraşdıracaq və icra edəcək, `TOC` kataloq indeks faylını oxuyacaq və `json` kataloq konturunu yaradacaq.

Əgər bu, bir neçə faylı olan tək layihədirsə, `TOC` kök kataloqu mənbə dil kataloqunda `url:` -ə uyğun olan kataloqdur. Məsələn, mənbə dili Çin dilidirsə: `url: flashduty` yə uyğun gələn fayl `zh/flashduty/TOC` dür.

Əgər bu, bir neçə layihə və bir neçə fayldırsa, `url:` konfiqurasiya etməyə ehtiyac yoxdur. `TOC` -in kök kataloqu `i18n` dəyərinə uyğun olan kataloqdur.

##### Ətraflı Məzmun Izahatı

`en/blog/TOC` aşağıdakı kimidir :

```
README.md

news/README.md
  news/begin.md
```

##### Səviyyələri Göstərmək Üçün Abzasdan Istifadə Edin

Yuxarıdakı `en/blog/TOC` -ın birinci sətirindəki `README.md` , layihənin adı olan aşağıdakı şəkildəki `i18n.site` yə uyğundur.

Növbəti iki sətir aşağıdakı ekran görüntüsündə göstərildiyi kimidir.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` -ə uyğundur,
`news/begin.md` `Our Product is Online !` -ə uyğundur

`TOC` faylları konturun iyerarxik əlaqəsini göstərmək, çoxsəviyyəli abzasları və `# ` ilə başlayan sətir şərhlərini dəstəkləmək üçün girintilidir.

##### Ana Səviyyə Məzmunu Deyil, Yalnız Başlığı Yazır.

Bir neçə səviyyəli girinti olduqda, əsas səviyyə məzmunu deyil, yalnız başlığı yazır. Əks halda, mətbəə pozulacaq.

##### Layihə README.md

Məzmun `en/demo2/README.md` kimi `README.md` bəndində yazıla bilər.

Qeyd edək ki, bu faylın məzmunu məzmun cədvəlini göstərmir, ona görə də uzunluğu məhdudlaşdırmaq və qısa giriş yazmaq tövsiyə olunur.

###### Layihə Şüarı

Siz `Deme Two` açılan menyunun və layihənin konturunun `Your Project slogan` altında öz layihə sloganının olduğunu görə bilərsiniz :

![](https://p.3ti.site/1721276842.avif)

Bu, `en/demo2/README.md` -ın birinci sırasına uyğundur :

```
# Demo Two : Your Project slogan
```

Layihənin birinci səviyyə başlığının ilk iki nöqtəsindən `:` dən sonrakı məzmun `README.md` layihənin şüarı kimi qəbul ediləcək.

Çin, Yaponiya və Koreyadan olan istifadəçilər, lütfən qeyd edin ki, tam enli iki nöqtə əvəzinə yarım enli iki nöqtə `:` istifadə etməlisiniz.

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

### Konfiqurasiya Yolu Olmadan Defolt Yükləmə

Müəyyən bir yola daxil olmaq üçün, yol prefiksi `nav:` -da konfiqurasiya edilməmişdirsə, yola uyğun gələn `MarkDown` fayl defolt olaraq yüklənəcək və `Md` şablonundan istifadə edərək göstəriləcəkdir.

Məsələn, `/test` a daxil olunarsa və `nav:` bu yolun prefiksi olmadan konfiqurasiya edilirsə və cari baxış dili ingilis dilidirsə (kod `en` ), `/en/test.md` defolt olaraq yüklənəcək və şablon `Md` dən istifadə etməklə göstəriləcək.

`/en/test.md` bu fayl mövcud deyilsə, standart `404` səhifə göstərilir.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">