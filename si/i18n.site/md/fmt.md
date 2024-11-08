# i18n.site MarkDown ලිවීමේ සම්මුතිය

## නැංගුරම් ලක්ෂ්යය

සාම්ප්රදායික `MarkDown` නැංගුරම් ලක්ෂ්ය ජනනය කරනු ලබන්නේ පෙළ අන්තර්ගතය මත පදනම්ව, මෙම විසඳුම ශක්ය නොවේ.

`i18n.site` සමඟ එකඟ වූ නැංගුරම් ලක්ෂ්ය විසඳුම වන්නේ ස්ථානගත කිරීමේ නැංගුරම් ලක්ෂ්යය අතින් නිර්මාණය කිරීම සඳහා `<a rel=id href="#xxx" id="xxx"></a>` න් `MarkDown` ට සමාන පෙළ ඇතුළු කිරීමයි.

`<a rel=id href="#xxx" id="xxx"></a>` , මෙහි `rel=id` නැංගුරම් ලක්ෂ්යයේ පිටු විලාසය නිර්වචනය කරයි, කරුණාකර `xxx` ඔබේ සැබෑ නැංගුරම් ඉංග්රීසි කෙටි යෙදුම සමඟ ප්රතිස්ථාපනය කරන්න.

නැංගුරම් සාමාන්යයෙන් මාතෘකාවට එකතු කරනු ලැබේ, එනම්:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

සංදර්ශක බලපෑම පහත පරිදි වේ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` න් `HTML` ලියන්න

`HTML` `pug` කේතයක් තුළට ඇතුළත් කළ හැක.

මූලද්රව්ය `<pre>` ක අන්තර්ගතය පරිවර්තනය නොකෙරේ.

මෙම කරුණු දෙක ඒකාබද්ධ කිරීම, ඔබට විවිධ සංදර්ශක බලපෑම් ලබා ගැනීම සඳහා `HTML` න් `MarkDown` පහසුවෙන් ලිවිය හැකිය.

[යොමුව සඳහා මෙතන ක්ලික් කරන්න i18n.site HTML පිටුවේ භාෂා කේත ලැයිස්තුව ලියා ඇති](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) අතර කේතය පහත පරිදි වේ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ඉහත `<pre>` හි ද `<style>` අර්ථ දක්වා ඇති බව සලකන්න.