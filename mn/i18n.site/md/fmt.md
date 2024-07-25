# MarkDown Форматын Конвенц

## Зангуу Цэг

`MarkDown` зангуу нь текстийн агуулгад тулгуурлан бүтээгдсэн бөгөөд энэ нь олон хэлний хувьд боломжгүй юм.

Зөвшөөрөгдсөн зангуу шийдэл нь байрлал тогтоох зангууг гараар үүсгэхийн тулд `MarkDown` -д `<a rel=id href="#xxx" id="xxx"></a>` -той төстэй текст оруулах явдал юм `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` энд `rel=id` зангууны цэгийн хуудасны хэв маягийг тодорхойлсон тул `xxx` өөрийн жинхэнэ англи товчлолоор солино уу.

Зангууг ихэвчлэн гарчигт нэмнэ, тухайлбал:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Дэлгэцийн эффект дараах байдалтай байна.

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Гэж Бичнэ Үү `MarkDown`

`pug` кодонд `HTML` болно.

`<pre>` доторх контентыг орчуулахгүй.

Эдгээр хоёр цэгийг нэгтгэснээр та янз бүрийн дэлгэцийн эффектэд хүрэхийн тулд `HTML` `MarkDown` хялбархан бичиж болно.

Та хэрэгжилтийг лавлаж болно [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код нь дараах байдалтай байна :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` нь мөн `<pre>` тодорхойлогдсон гэдгийг анхаарна уу.
