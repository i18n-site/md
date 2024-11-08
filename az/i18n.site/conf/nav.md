# Fərdi Naviqasiya

Naviqasiyanı necə fərdiləşdirməyi izah etmək üçün nümunə olaraq demo saytını götürək [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

Yuxarıdakı şəkildəki nömrələnmiş sahələrə uyğun gələn fayllar aşağıdakılardır:

1. Sol [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Sağ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) `HTML` -ləri yaradan şablon dilidir.

[➔ qrammatikasını öyrənmək üçün bura klikləyin pug](https://pugjs.org)

`${I18N.sponsor}` format sətri faylda beynəlmiləlləşdirməni həyata keçirmək üçün istifadə olunur və onun məzmunu [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) dil kataloqunda müvafiq mətnlə əvəz olunacaq.

**`pug` -da `css` və `js` yazmayın** , əks halda xəta olacaq.

Üslublar `css` a yazılır və qarşılıqlı əlaqə veb komponentləri yaratmaqla əldə edilir.

Burada naviqasiya çubuğunun üslubuna uyğun olan fayl : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)