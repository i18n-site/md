# MarkDown Формат Конвенциясе

## Якор Ноктасы

`MarkDown` анкорлар текст эчтәлегенә нигезләнеп ясала. Күп телләрдә бу чишелеш мөмкин түгел.

Килешенгән якорь чишелеше - позицияле якорны кул белән ясау өчен `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` га охшаган текст кертү `i18n.site`

`rel=id` `<a rel=id href="#xxx" id="xxx"></a>` `xxx`

Анкорлар гадәттә исемгә өстәлә, мәсәлән:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Күрсәтү эффекты түбәндәгечә:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Керегез `MarkDown`

`HTML` кодка кертелергә мөмкин `pug`

Элемент эчендәге эчтәлек тәрҗемә ителмәячәк `<pre>`

Бу ике ноктаны берләштереп, сез төрле дисплей эффектларына ирешү өчен җиңел `HTML` аласыз `MarkDown`

Сез тормышка ашыруга мөрәҗәгать итә аласыз [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) Код түбәндәгечә :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Игътибар итегез `<style>` өстә күрсәтелгән `<pre>`
