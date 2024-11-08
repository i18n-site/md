# i18n.site Konveenshinii Barreeffama MarkDown

## Qabxii Anchor

Qabxiileen anchor aadaa `MarkDown` qabiyyee barruu irratti hundaa'uun kan uumaman yoo ta'u, afaanota hedduu yoo ta'e, furmaanni kun hin danda'amu.

Furmaanni qabxii ankuraa `i18n.site` waliin waliigalame barruu `<a rel=id href="#xxx" id="xxx"></a>` wajjin walfakkaatu `MarkDown` keessatti galchuudhaan qabxii ankuraa iddoo qabachuu harkaan uumuudha.

`<a rel=id href="#xxx" id="xxx"></a>` , asitti `rel=id` akkaataa fuula qabxii anchor ibsa, maaloo `xxx` gabaabduu Ingiliffaa anchor kee isa dhugaatiin bakka buusi.

Anchors yeroo baayyee mata duree irratti dabalamu, kanneen akka:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Bu'aan agarsiisaa akka armaan gadiitti:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` Keessaa `HTML` Barreessi

`HTML` koodii `pug` keessatti ukkaamfamuu danda'a.

Qabiyyeen elementoota `<pre>` keessa jiru hin hiikamu.

Qabxiilee lamaan kana walitti makuun, bu'aa agarsiisaa adda addaa galmaan ga'uuf salphaatti `MarkDown` keessaa `HTML` barreessuu dandeessa.

[Wabiif i18n.site cuqaasaa Tarreen koodii afaanii fuula jalqabaa irratti HTML barreeffameera](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , koodiinis akka armaan gadiitti :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Hubadhaa `<style>` armaan olitti `<pre>` keessattis ibsameera.