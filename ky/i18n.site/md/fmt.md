# MarkDown Форматынын Конвенциясы

## Анкердик Чекит

`MarkDown` Анкорлор тексттин негизинде түзүлөт, бул чечим мүмкүн эмес.

`i18n.site` Макулдашылган анкердик чечим - бул позицияны аныктоочу анкерди кол менен түзүү үчүн `MarkDown` ичинде `<a rel=id href="#xxx" id="xxx"></a>` га окшош текстти киргизүү.

`<a rel=id href="#xxx" id="xxx"></a>` , бул жерде `rel=id` анкердик чекиттин бет стилин аныктайт, сураныч, `xxx` чыныгы анкердик англисче аббревиатурага алмаштырыңыз.

Анкерлер, адатта, аталышка кошулат, мисалы:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Дисплей эффектиси төмөнкүдөй:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Деп Жазыңыз `MarkDown`

`pug` `HTML` кодго киргизсе болот.

`<pre>` элементинин ичиндеги мазмун которулбайт.

Бул эки пунктту бириктирип, ар кандай дисплей эффекттерине жетишүү үчүн `HTML` in `MarkDown`

Сиз ишке ашырууга кайрыла аласыз [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код төмөнкүдөй :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` `<pre>` да аныкталганына көңүл буруңуз.
