# i18n.site ਮਾਰਕਡਾਊਨ ਰਾਈਟਿੰਗ ਕਨਵੈਨਸ਼ਨ

## ਐਂਕਰ ਪੁਆਇੰਟ

ਪਰੰਪਰਾਗਤ `MarkDown` ਐਂਕਰ ਪੁਆਇੰਟ ਟੈਕਸਟ ਸਮੱਗਰੀ ਦੇ ਅਧਾਰ ਤੇ ਤਿਆਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਬਹੁ-ਭਾਸ਼ਾ ਦੇ ਮਾਮਲੇ ਵਿੱਚ, ਇਹ ਹੱਲ ਸੰਭਵ ਨਹੀਂ ਹੈ।

ਐਂਕਰ ਪੁਆਇੰਟ ਹੱਲ `i18n.site` ਨਾਲ ਸਹਿਮਤ ਹੈ, ਪੋਜੀਸ਼ਨਿੰਗ ਐਂਕਰ ਪੁਆਇੰਟ ਨੂੰ ਹੱਥੀਂ ਬਣਾਉਣ ਲਈ `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` ਸਮਾਨ ਟੈਕਸਟ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨਾ ਹੈ।

`<a rel=id href="#xxx" id="xxx"></a>` , ਇੱਥੇ `rel=id` ਐਂਕਰ ਪੁਆਇੰਟ ਦੇ ਪੰਨੇ ਦੀ ਸ਼ੈਲੀ ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦਾ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ `xxx` ਆਪਣੇ ਅਸਲ ਐਂਕਰ ਅੰਗਰੇਜ਼ੀ ਸੰਖੇਪ ਨਾਲ ਬਦਲੋ।

ਐਂਕਰ ਆਮ ਤੌਰ 'ਤੇ ਸਿਰਲੇਖ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਜਿਵੇਂ ਕਿ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ਡਿਸਪਲੇਅ ਪ੍ਰਭਾਵ ਹੇਠ ਲਿਖੇ ਅਨੁਸਾਰ ਹੈ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` ਵਿੱਚ `HTML` ਲਿਖੋ

`HTML` `pug` ਕੋਡ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

`<pre>` ਤੱਤਾਂ ਵਿੱਚ ਸਮੱਗਰੀ ਦਾ ਅਨੁਵਾਦ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ।

ਇਹਨਾਂ ਦੋ ਬਿੰਦੂਆਂ ਨੂੰ ਮਿਲਾ ਕੇ, ਤੁਸੀਂ ਵੱਖ-ਵੱਖ ਡਿਸਪਲੇ ਪ੍ਰਭਾਵਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਆਸਾਨੀ ਨਾਲ `HTML` ਵਿੱਚ `MarkDown` ਲਿਖ ਸਕਦੇ ਹੋ।

[HTML ਲਈ ਇੱਥੇ ਕਲਿੱਕ i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ਨੋਟ ਕਰੋ ਕਿ `<style>` ਉੱਪਰ `<pre>` ਵਿੱਚ ਵੀ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।