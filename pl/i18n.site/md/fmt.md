# Konwencja Formatu MarkDown

## Punkt Zakotwiczenia

Tradycyjne `MarkDown` Anchory generowane są na podstawie treści tekstowej. W przypadku wersji wielojęzycznej takie rozwiązanie nie jest możliwe.

`i18n.site` Uzgodnione rozwiązanie zakotwiczenia polega na wstawieniu tekstu podobnego do `<a rel=id href="#xxx" id="xxx"></a>` w `MarkDown` w celu ręcznego utworzenia zakotwiczenia pozycjonowania.

`<a rel=id href="#xxx" id="xxx"></a>` , tutaj `rel=id` definiuje styl strony punktu zakotwiczenia, zastąp `xxx` rzeczywistym skrótem zakotwiczenia w języku angielskim.

Do tytułu zwykle dodawane są kotwice, takie jak:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekt wyświetlania jest następujący:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` W `MarkDown`

`pug` `HTML` można osadzić w kodzie.

Treść elementu `<pre>` nie zostanie przetłumaczona.

Łącząc te dwa punkty, możesz łatwo wpisać `HTML` w `MarkDown` aby uzyskać różne efekty wyświetlania.

Możesz odwołać się do implementacji w [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kod jest następujący :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Zauważ, że `<style>` jest również zdefiniowane w `<pre>`
