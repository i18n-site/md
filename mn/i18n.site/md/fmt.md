# i18n.site MarkDown Бичих Конвенц

## Зангуу Цэг

Уламжлалт `MarkDown` зангуу цэгүүд нь текстийн агуулгад тулгуурлан үүсдэг. Олон хэлтэй тохиолдолд энэ шийдэл нь боломжгүй юм.

`i18n.site` тэй тохиролцсон зангуу цэгийн шийдэл нь байрлал тогтоох зангуу цэгийг гараар үүсгэхийн тулд `<a rel=id href="#xxx" id="xxx"></a>` -д `MarkDown` тэй төстэй текст оруулах явдал юм.

`<a rel=id href="#xxx" id="xxx"></a>` , энд `rel=id` зангууны цэгийн хуудасны хэв маягийг тодорхойлдог тул `xxx` өөрийн жинхэнэ англи хэлний товчлолоор солино уу.

Зангууг ихэвчлэн гарчигт нэмнэ, тухайлбал:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Дэлгэцийн эффект дараах байдалтай байна.

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` -Д `HTML` Гэж Бичнэ

`HTML` `pug` кодонд оруулж болно.

`<pre>` элемент дэх контентыг орчуулахгүй.

Эдгээр хоёр цэгийг нэгтгэснээр та янз бүрийн дэлгэцийн эффектийг авахын тулд `MarkDown` -д `HTML` хялбархан бичиж болно.

Та хэрэгжилтийг лавлаж болно [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код нь дараах байдалтай байна :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Дээрх `<pre>` -д `<style>` мөн тодорхойлсон болохыг анхаарна уу.


## Олон Хэл Дээрх Зураг/Видео/Холбоос

`MarkDown` `HTML` болгож хөрвүүлсний дараа `src` ба `href` шинж чанаруудын `$LANG` одоогийн [хэлний кодоор](/i18/LANG_CODE) солино.

Энэ хувьсагчийн тусламжтайгаар та зураг/видео/линкийг олон хэлээр гаргах боломжтой.