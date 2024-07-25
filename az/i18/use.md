# Quraşdırın Və Istifadə Edin

## windows Əvvəlcə git bash Quraşdırın

windows , lütfən, [əvvəlcə yükləmək və quraşdırmaq üçün bura klikləyin `git bash`](https://git-scm.com/download/win)

-də sonrakı əməliyyatları yerinə yetirin `git bash`

## Yüklemek

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Tərcümə Nişanını Konfiqurasiya Edin

Ziyarət et [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Yaradın `~/.config/i18n.site.yml` kopyalanan məzmunu ona yapışdırın, məzmun aşağıdakı kimidir:

```
token: YOUR_API_TOKEN
```

Bundan əlavə, ödəniş üçün kredit kartını [i18n.site/payBill](//i18n.site/payBill) (heç bir doldurma tələb olunmur, vebsayt avtomatik olaraq istifadəyə görə ödənişləri çıxacaq, [qiymət üçün əsas səhifəyə baxın](/#price) ).

## Istifadə Edin

### Demo Layihə

`i18` konfiqurasiyasını öyrənmək üçün demo layihəyə müraciət edin [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Çindəki istifadəçilər klonlaya bilər [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Klonlamadan sonra qovluğu daxil edin və tərcüməni tamamlamaq üçün işə `i18` .

### Kataloq Strukturu

Şablon anbar kataloqunun strukturu aşağıdakı kimidir

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` kataloqunda sadəcə nümunə olan və silinə bilən tərcümə edilmiş demo faylları var.

### Tərcüməni Işə Salın

Kataloqa daxil olun və tərcümə etmək üçün işə salın `i18`

### Faylları Depoya Əlavə Edin

Tərcümə ilə yanaşı, proqram aşağıdakı faylları da yaradacaq, lütfən, onları depoya əlavə edin.

```
.i18n/hash
.i18n/cache/.gitignore
```

: arasında məzmunu belədir `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Bu `.i18n/cache/` bütün faylları ( `.i18n/cache/.gitignore` istisna olmaqla) nəzərə almamaq deməkdir.

Əgər versiyaya nəzarət proqramınız deyilsə `git` lütfən, bu konfiqurasiyaya uyğun olaraq ona məhəl qoymayın.

## Konfiqurasiya Faylı

`.i18n/conf.yml` Bu `i18` xətti tərcümə alətinin konfiqurasiya faylıdır

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

Konfiqurasiya faylında `fromTo`

`en` mənbə dili, `zh ja ko de fr` tərcümənin hədəf dilidir.

Dil koduna baxın [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Məsələn, Çin dilini ingilis dilinə tərcümə etmək istəyirsinizsə, bu sətri yenidən yazın `zh: en`

Bütün dəstəklənən dillərə tərcümə etmək istəyirsinizsə, sonra boş buraxın `:` misal üçün

```
i18n:
  fromTo:
    en:
```

### Faylı Iqnor Edin

Varsayılan olaraq, mənbə dil kataloqunda `.md` və `.yml` ilə başlayan bütün fayllar tərcümə olunacaq.

Müəyyən fayllara məhəl qoymamaq və onları tərcümə etməmək istəyirsinizsə (məsələn, yarımçıq qaralamalar), `ignore` sahə konfiqurasiyasından istifadə edə bilərsiniz.

`ignore` `.gitignore` oxşar sintaksisi istifadə edir [globset](https://docs.rs/globset/latest/globset/#syntax)

Məsələn, yuxarıdakı konfiqurasiya faylında `_* ` `_` başlayan faylların tərcümə olunmayacağını bildirir.

## Tərcümə Qaydaları

### Tərcümə Redaktorları Sətirlər Əlavə Etməməli Və Silməməlidir

Tərcümə redaktə edilə bilər. Orijinal mətni dəyişdirin və onu yenidən maşınla tərcümə edin, tərcümədə əl ilə edilən dəyişikliklərin üzərinə yazılmayacaq (əgər orijinal mətnin bu paraqrafı dəyişdirilməyibsə).

Ancaq unutmayın ki, tərcümənin sətirləri və orijinal mətn birə uyğun olmalıdır. Yəni tərcüməni tərtib edərkən sətirləri əlavə etməyin və silməyin. Əks halda, tərcümə redaktə keşində çaşqınlığa səbəb olacaq.

Əgər bir şey səhv olarsa, [həll yolları üçün tez-tez verilən suallara baxın.](/i18/qa#H1)

### `YAML` Tərcümə Etmək

Komanda xətti aləti mənbə dil fayl kataloqunda `.yml` ilə bitən bütün faylları tapacaq və onları tərcümə edəcək.

* Qeyd edək ki, fayl adı şəkilçisi `.yml` ( `.yaml` deyil).

Alət lüğət açarlarını deyil, yalnız lüğət dəyərlərini tərcümə edir `.yml`

misal üçün `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

kimi tərcümə olunacaq `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -in tərcüməsi də əl ilə dəyişdirilə bilər (lakin tərcümədə düymələri və ya sətirləri əlavə etməyin və ya silməyin).

`YAML` əsasında siz müxtəlif proqramlaşdırma dilləri üçün asanlıqla beynəlxalq həllər yarada bilərsiniz.

## Qabaqcıl Istifadə

### Tərcümə Alt Kataloqu

Siz `.i18n/conf.yml` (hər dəfə demo layihə şablonundan başlamağa ehtiyac yoxdur), `i18` yaxşı işləyəcək.

Komanda xətti aləti bütün alt kataloqlarda `.i18n/conf.yml` tapacaq və onu tərcümə edəcək.

[monorepo](//monorepo.tools) arxitekturasından istifadə edən layihələr dil fayllarını alt kataloqlara bölə bilər.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Xüsusi Quraşdırma Kataloqu

Defolt olaraq quraşdırılacaq `/usr/local/bin`

Əgər yazma icazəsi yoxdursa `/usr/local/bin` o, `~/.bin` üçün quraşdırılacaq.

Mühit dəyişənlərini təyin edin `TO` məsələn, quraşdırma kataloqunu təyin edə bilərsiniz :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
