<h1 style="justify-content:space-between">3Ti.Site · Sərhədsiz Düşünmək<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Statik sayt generatoru olan 3Ti.Site Markdown-u avtomatik olaraq [yüzdən çox fərqli dilə](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tərcümə edə bilər.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Bəzi insanlar soruşa bilər ki, indi brauzerlərdə daxili tərcümə funksiyaları var, veb-saytı beynəlxalqləşdirməyə ehtiyac yoxdur?

Demək istəyirəm ki **, yalnız bütün saytı beynəlmiləlləşdirməklə biz çoxdilli saytdaxili tam mətn axtarışını və axtarış sisteminin optimallaşdırılmasını dəstəkləyə bilərik** .

## Giriş

İncil · Yaradılış :

> Qədim dövrlərdə, dillər bir olanda, bəşəriyyət göylərə uzanan bir qüllə, Allahın qüdrətini elan edən bir qapı tikdi.
>
> Allah bəyan etdi: "İnsanlar bir qəbilə kimi, ortaq dildə birləşirlər və bu qüllə yalnız bir müqəddimədir. İndi onlar öz istəklərinə çatırlar və artıq qorxu olmayacaq".
>
> Beləliklə, Allah nazil olub, insanları müxtəlif guşələrə səpələyib, müxtəlif dillərdən istifadə edir.
>
> O vaxtdan insanlar arasında ünsiyyət çətinləşdi, mübahisələr bitdi və artıq göyə toxunan bir qüllə qalmadı.

Elmi fantastika romanı &quot;Üç Bədən&quot; (Çin tələffüzü: `3Ti` ) elektromaqnit dalğaları vasitəsilə ünsiyyət quran, heç bir dil maneəsi olmayan və texnoloji cəhətdən çiçəklənən yadplanetli sivilizasiyanı xəyal edir.

Ümid edirəm ki, yer kürəsinin insanları üç bədənli insanlar kimi olmağa, dilə bağlı olmadan ünsiyyət qurmağa və bütün bəşəriyyəti yenidən birləşdirməyə imkan verəcək bir vasitə yaradacam.

## Dərslik

## Funksiya Girişi

### Markdown Formatını Saxlayın

### Tərcüməni Dəyişdirin

Tərcüməni dəyişdirdikdən sonra keşi yeniləmək üçün `./i18n.sh` faylını yenidən işə salmalısınız.

### Tərcümə Qeydləri

Tərcümə şərhlərində \```-dən sonra dil göstərilməlidir, məsələn, ` ```rust` .

Hal-hazırda rust, c, cpp, java, js, coffee, python və bash üçün şərh tərcüməsini dəstəkləyir.

Daha çox dildə şərhlər üçün tərcümə dəstəyi əlavə etmək üçün [tran_md/src/comment.coffee-](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ni redaktə edin.

### Proksi-Ni Konfiqurasiya Edin

Aşağıdakı mühit dəyişənlərinin təyin edilməsi Google Translate API zənglərinin proksi vasitəsilə keçməsinə imkan verir.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Dəyişən Yerləşdirmə

```
test: 测试变量<br 0>嵌入
```

### Keşi Boşaltın

```bash
rm -rf .i18n/.cache
```
