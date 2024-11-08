# i18n.site MarkDown எழுத்து மாநாடு

## நங்கூரம் புள்ளி

பாரம்பரிய `MarkDown` ஆங்கர் புள்ளிகள் உரை உள்ளடக்கத்தின் அடிப்படையில் உருவாக்கப்படுகின்றன, பல மொழிகளின் விஷயத்தில், இந்த தீர்வு சாத்தியமில்லை.

`i18n.site` உடன் ஒப்புக்கொள்ளப்பட்ட நங்கூரப் புள்ளி தீர்வு, பொசிஷனிங் ஆங்கர் புள்ளியை கைமுறையாக உருவாக்க `<a rel=id href="#xxx" id="xxx"></a>` இல் `MarkDown` போன்ற உரையைச் செருகுவதாகும்.

`<a rel=id href="#xxx" id="xxx"></a>` , இங்கே `rel=id` ஆங்கர் புள்ளியின் பக்க நடையை வரையறுக்கிறது, தயவுசெய்து `xxx` உங்கள் உண்மையான ஆங்கர் ஆங்கில சுருக்கத்துடன் மாற்றவும்.

தொகுப்பாளர்கள் பொதுவாக தலைப்பில் சேர்க்கப்படுகின்றன, அவை:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

காட்சி விளைவு பின்வருமாறு:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` இல் `HTML` எழுதவும்

`HTML` `pug` குறியீட்டில் உட்பொதிக்க முடியும்.

`<pre>` உறுப்புகளில் உள்ள உள்ளடக்கம் மொழிபெயர்க்கப்படாது.

இந்த இரண்டு புள்ளிகளையும் இணைத்து, பல்வேறு காட்சி விளைவுகளை அடைய `MarkDown` இல் `HTML` எளிதாக எழுதலாம்.

[HTML இங்கே கிளிக் i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

மேலே `<pre>` இல் `<style>` வரையறுக்கப்பட்டுள்ளது என்பதை நினைவில் கொள்ளவும்.