# MarkDown வடிவமைப்பு மாநாடு

## நங்கூர புள்ளி

உரை உள்ளடக்கத்தின் அடிப்படையில் `MarkDown` ஆங்கர்கள் உருவாக்கப்படுகின்றன, இந்த தீர்வு சாத்தியமில்லை.

`i18n.site` பொருத்துதல் ஆங்கரை கைமுறையாக உருவாக்குவதற்கு `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` உள்ள உரையைச் செருகுவதே ஒப்புக்கொள்ளப்பட்ட ஆங்கர் தீர்வு.

`<a rel=id href="#xxx" id="xxx"></a>` , இங்கே `rel=id` நங்கூரப் புள்ளியின் பக்க நடையை வரையறுக்கிறது, `xxx` உங்கள் உண்மையான ஆங்கர் ஆங்கில சுருக்கத்துடன் மாற்றவும்.

தொகுப்பாளர்கள் பொதுவாக தலைப்பில் சேர்க்கப்படுகின்றன, அவை:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

காட்சி விளைவு பின்வருமாறு:

<img src="//p.3ti.site/1721381136.avif" width="350">

## இல் `HTML` எழுது `MarkDown`

`pug` `HTML` குறியீட்டில் உட்பொதிக்கப்படலாம்.

`<pre>` உள்ள உள்ளடக்கம் மொழிபெயர்க்கப்படாது.

இந்த இரண்டு புள்ளிகளையும் இணைத்து, பல்வேறு காட்சி விளைவுகளை அடைய நீங்கள் எளிதாக `HTML` `MarkDown` எழுதலாம்.

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) குறியீடு பின்வருமாறு :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` என்பது `<pre>` வரையறுக்கப்பட்டுள்ளது என்பதை நினைவில் கொள்ளவும்.
