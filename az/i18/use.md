# Quraşdırın Və Istifadə Edin

## windows Əvvəlcə git bash Quraşdırın

windows , əvvəlcə [`git bash` yükləmək və quraşdırmaq üçün bura klikləyin](https://git-scm.com/download/win) .

`git bash` -da sonrakı əməliyyatları yerinə yetirin.

## Quraşdırın

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tərcümə Nişanını Konfiqurasiya Edin

Ziyarət et [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` yaradın, kopyalanan məzmunu ona yapışdırın, məzmun aşağıdakı kimidir:

```
token: YOUR_API_TOKEN
```

Bundan əlavə, ödəniş üçün kredit kartını [i18n.site/payBill](//i18n.site/payBill) (heç bir doldurma tələb olunmur, veb sayt avtomatik olaraq istifadəyə görə ödənişləri çıxacaq, [qiymət üçün əsas səhifəyə baxın](/#price) ).

## Istifadə Edin

### Demo Layihə

`i18` tərcüməsinin konfiqurasiyasını öyrənmək üçün demo layihəyə müraciət edin [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Çindəki istifadəçilər klonlaya bilər [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlamadan sonra qovluğu daxil edin və tərcüməni tamamlamaq üçün `i18` işə salın.

### Kataloq Quruluşu

Şablon anbar kataloqunun strukturu aşağıdakı kimidir

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` kataloqunda tərcümə edilmiş demo faylları sadəcə bir nümunədir və silinə bilər.

### Tərcüməni Işə Salın

Kataloqu daxil edin və tərcümə etmək üçün `i18` işə salın.

Tərcümə ilə yanaşı, proqram `.i18n/data` qovluğunu da yaradacaq, zəhmət olmasa onu depoya əlavə edin.

Yeni faylı tərcümə etdikdən sonra bu qovluqda yeni məlumat faylı yaradılacaq `git add .` əlavə etməyi unutmayın.

## Konfiqurasiya Faylı

`.i18n/conf.yml` `i18` əmr xətti tərcümə alətinin konfiqurasiya faylıdır

Məzmun aşağıdakı kimidir:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Mənbə & Tərcümə Dili

Konfiqurasiya faylında `fromTo` tabe olan:

`en` mənbə dili, `zh ja ko de fr` tərcümənin hədəf dilidir.

Dil koduna baxın [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Məsələn, Çin dilini ingilis dilinə tərcümə etmək istəyirsinizsə, bu sətri yenidən yazın `zh: en` .

Bütün dəstəklənən dillərə tərcümə etmək istəyirsinizsə, `:` dan sonra boş buraxın. məsələn

```
i18n:
  fromTo:
    en:
```

Fərqli / kataloqlar üçün müxtəlif `fromTo` konfiqurasiya edə bilərsiniz Nümayiş : kimi yazılır.

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Bu konfiqurasiya cədvəlində kataloq `blog` tərcüməsinin mənbə dili `zh` , `blog/your_file_name.md` tərcüməsinin mənbə dili isə `ja` dür.

### Faylı Iqnor Edin

Varsayılan olaraq, mənbə dil kataloqunda `.md` və `.yml` ilə başlayan bütün fayllar tərcümə olunacaq.

Müəyyən fayllara məhəl qoymamaq və onları tərcümə etməmək istəyirsinizsə (məsələn, yarımçıq qaralamalar), siz onu `ignore` sahəsi ilə konfiqurasiya edə bilərsiniz.

`ignore` `.gitignore` faylı ilə eyni [globset](https://docs.rs/globset/latest/globset/#syntax) istifadə edir.

Məsələn, yuxarıdakı konfiqurasiya faylında `_* ` `_` ilə başlayan faylların tərcümə olunmayacağını bildirir.

## Tərcümə Qaydaları

### Tərcümə Redaktorları Sətirlər Əlavə Etməməli Və Silməməlidir

Tərcümə redaktə edilə bilər. Orijinal mətni dəyişdirin və onu yenidən maşınla tərcümə edin, tərcümədə əl ilə edilən dəyişikliklərin üzərinə yazılmayacaq (əgər orijinal mətnin bu paraqrafı dəyişdirilməyibsə).

Ancaq unutmayın ki, tərcümənin sətirləri və orijinal mətn birə uyğun olmalıdır. Yəni tərcüməni tərtib edərkən sətirləri əlavə etməyin və silməyin. Əks halda, tərcümə redaktə keşində çaşqınlığa səbəb olacaq.

Əgər bir şey səhv olarsa, [həll yolları üçün tez-tez verilən suallara baxın.](/i18/qa#H1)

### `YAML` Tərcümə

Komanda xətti aləti mənbə dil fayl kataloqunda `.yml` ilə bitən bütün faylları tapacaq və onları tərcümə edəcək.

* Qeyd edək ki, fayl adı şəkilçisi `.yml` olmalıdır ( `.yaml` deyil).

Alət lüğət açarlarını deyil, yalnız lüğət dəyərlərini `.yml` da tərcümə edir.

Məsələn `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` kimi tərcümə olunacaq

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` ın tərcüməsi də əl ilə dəyişdirilə bilər (lakin tərcümədə düymələri və ya sətirləri əlavə etməyin və ya silməyin).

`YAML` tərcüməyə əsaslanaraq, müxtəlif proqramlaşdırma dilləri üçün asanlıqla beynəlxalq həllər qura bilərsiniz.

## Qabaqcıl Istifadə

### Tərcümə Alt Kataloqu

`.i18n/conf.yml` yaradıldıqca (hər dəfə demo layihə şablonundan başlamağa ehtiyac yoxdur), `i18` yaxşı işləyəcək.

Komanda xətti aləti bütün alt kataloqlarda `.i18n/conf.yml` konfiqurasiya tapacaq və onları tərcümə edəcək.

[monorepo](//monorepo.tools) arxitekturasından istifadə edən layihələr dil fayllarını alt kataloqlara bölə bilər.

![](https://p.3ti.site/1719910016.avif)

### Xüsusi Quraşdırma Kataloqu

O, standart olaraq `/usr/local/bin` quraşdırılacaq.

`/usr/local/bin` yazma icazəsi yoxdursa, `~/.bin` ə quraşdırılacaq.

`TO` mühit dəyişəninin qurulması quraşdırma kataloqunu təyin edə bilər, məsələn :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```