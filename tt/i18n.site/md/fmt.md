# i18n.site MarkDown Язу Конвенциясе

## Якор Ноктасы

Традицион `MarkDown` якор пунктлары текст эчтәлегенә нигезләнеп ясала, күп телләрдә бу чишелеш мөмкин түгел.

`i18n.site` белән килешкән якор ноктасы чишелеше - позицияле якор ноктасын кул белән ясау өчен `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` охшаган текст кертү.

`<a rel=id href="#xxx" id="xxx"></a>` , монда `rel=id` якор ноктасының бит стилен билгели, зинһар, `xxx` үзегезнең инглизчә кыскарту белән алыштырыгыз.

Анкорлар гадәттә исемгә өстәләләр, мәсәлән:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Күрсәтү эффекты түбәндәгечә:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Дән `MarkDown` Языгыз

`HTML` `pug` кодка кертелергә мөмкин.

`<pre>` элементтагы эчтәлек тәрҗемә ителмәячәк.

Бу ике ноктаны берләштереп, сез төрле дисплей эффектларына ирешү өчен `MarkDown` `HTML` ны җиңел яза аласыз.

[i18n.site өчен монда басыгыз HTML Баш биттәге тел коды исемлеге язылган](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , һәм код түбәндәгечә :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Игътибар итегез, `<style>` өстә `<pre>` дә билгеләнгән.