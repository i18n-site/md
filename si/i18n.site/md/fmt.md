# MarkDown ආකෘති සම්මුතිය

## නැංගුරම් ලක්ෂ්යයක්

සම්ප්‍රදායික `MarkDown`

`i18n.site` එකඟ වූ නැංගුරම් විසඳුම වන්නේ ස්ථානගත කිරීමේ නැංගුරම හස්තීයව නිර්මාණය කිරීම සඳහා `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` සමාන පෙළ ඇතුළත් කිරීමයි.

`<a rel=id href="#xxx" id="xxx"></a>` `rel=id` `xxx`

නැංගුරම් සාමාන්‍යයෙන් මාතෘකාවට එකතු කරනු ලැබේ, එනම්:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

සංදර්ශක බලපෑම පහත පරිදි වේ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` තුළ ලියන්න `MarkDown`

`pug` `HTML` කේතයට ඇතුළත් කළ හැක.

`<pre>`

මෙම කරුණු දෙක ඒකාබද්ධ කිරීමෙන්, ඔබට විවිධ සංදර්ශක ප්‍රයෝග ලබා ගැනීමට `HTML` in `MarkDown`

ඔබට ක්‍රියාත්මක කිරීම වෙත යොමු විය හැක [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) කේතය පහත පරිදි වේ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` යන්න ඉහත `<pre>` ද අර්ථ දක්වා ඇති බව සලකන්න.
