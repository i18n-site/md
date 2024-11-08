# i18n.site Konvencia Písania MarkDown

## Kotviaci Bod

Tradičné `MarkDown` kotviace body sa generujú na základe textového obsahu. V prípade viacjazyčnosti toto riešenie nie je možné.

Riešenie kotviaceho bodu dohodnuté s `i18n.site` je vložiť text podobný `<a rel=id href="#xxx" id="xxx"></a>` v `MarkDown` na manuálne vytvorenie polohovacieho kotviaceho bodu.

`<a rel=id href="#xxx" id="xxx"></a>` , tu `rel=id` definuje štýl stránky kotviaceho bodu, prosím nahraďte `xxx` svojou aktuálnou anglickou skratkou kotvy.

K názvu sa zvyčajne pridávajú kotvy, ako napríklad:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekt zobrazenia je nasledovný:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Napíš `HTML` Z `MarkDown`

`HTML` môže byť vložené do kódu `pug` .

Obsah v `<pre>` prvkoch nebude preložený.

Kombináciou týchto dvoch bodov môžete jednoducho napísať `HTML` : `MarkDown` , aby ste dosiahli rôzne efekty zobrazenia.

[Pre i18n.site kliknite sem Zoznam kódov jazykov na domovskej stránke HTML je napísaný](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) a kód je nasledujúci :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Všimnite si, že `<style>` je tiež definovaná v `<pre>` vyššie.