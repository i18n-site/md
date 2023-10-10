<h1 style="justify-content:space-between">3Ti.Site · Sərhədsiz düşüncələr<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

Çoxdilli statik sayt generatoru olan 3Ti.Site Markdown-u avtomatik olaraq [yüzdən çox fərqli dilə](https://github.com/i18n-site/node/blob/main/lang/src/index.js) tərcümə edə bilər.

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Bəzi insanlar soruşmaq istəyə bilər ki, indi brauzerlərdə daxili tərcümə funksiyaları var, veb-saytı beynəlxalqləşdirmək lazım deyilmi?

Demək istəyirəm ki **, yalnız bütün saytı beynəlmiləlləşdirməklə biz çoxdilli saytdaxili tam mətn axtarışını və axtarış sisteminin optimallaşdırılmasını dəstəkləyə bilərik** .

## Ardıcıllıq

"İncil · Yaradılış":

> Qədimlər dillər arasında fərq qoymurlar. Onlar qürurla doğulublar və zirvəsi göyə çatan hündür bir qüllə tikmək istəyirdilər.
> <blockquote><p>İnsanın təkəbbürlü olması Tanrının narazılığına səbəb olub, bütün canlıları bir-birini başa düşə bilməyib müxtəlif yerlərə səpələyib.</p></blockquote>
> <blockquote><p>O vaxtdan bəri insanlar üçün ünsiyyət qurmaq çətinləşdi, mübahisələr davam etdi və dünyada Babil qülləsi yoxdur.</p></blockquote>

Elmi fantastika romanı &quot;Üç Bədən&quot; (Çin tələffüzü: `3Ti` ) elektromaqnit dalğaları vasitəsilə ünsiyyət quran, heç bir dil maneəsi olmayan və texnoloji cəhətdən çiçəklənən yadplanetli sivilizasiyanı xəyal edir.

Ümid edirəm ki, bu alətin köməyi ilə yer əhli üç bədənli insanlar kimi olacaq, ünsiyyət dillə məhdudlaşdırılmayacaq və bütün bəşəriyyət yenidən birləşəcək.

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
