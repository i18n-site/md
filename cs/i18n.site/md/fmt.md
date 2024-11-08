# i18n.site Konvence Psaní MarkDown

## Kotevní Bod

Tradiční `MarkDown` kotevní body jsou generovány na základě textového obsahu. V případě vícejazyčnosti není toto řešení proveditelné.

Řešení kotevního bodu dohodnuté s `i18n.site` je vložit text podobný `<a rel=id href="#xxx" id="xxx"></a>` v `MarkDown` pro ruční vytvoření pozičního kotevního bodu.

`<a rel=id href="#xxx" id="xxx"></a>` , zde `rel=id` definuje styl stránky kotevního bodu, nahraďte prosím `xxx` svou skutečnou anglickou zkratkou kotvy.

K názvu se obvykle přidávají kotvy, jako například:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekt zobrazení je následující:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Napsat `HTML` Z `MarkDown`

`HTML` lze vložit do `pug` kódu.

Obsah v `<pre>` prvcích nebude přeložen.

Kombinací těchto dvou bodů můžete snadno napsat `HTML` ku `MarkDown` , abyste dosáhli různých efektů zobrazení.

[Pro i18n.site klikněte sem Seznam kódů jazyků na domovské stránce HTML je napsán](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) a kód je následující :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Všimněte si, že `<style>` je také definována v `<pre>` výše.