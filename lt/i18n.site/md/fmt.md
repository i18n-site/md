# i18n.site MarkDown Rašymo Konvencija

## Tvirtinimo Taškas

Tradiciniai `MarkDown` tvirtinimo taškų generuojami remiantis teksto turiniu. Daugiakalbių kalbų atveju šis sprendimas neįgyvendinamas.

Inkaro taško sprendimas, suderintas su `i18n.site` yra įterpti tekstą, panašų į `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` kad būtų galima rankiniu būdu sukurti padėties nustatymo inkaro tašką.

`<a rel=id href="#xxx" id="xxx"></a>` , čia `rel=id` apibrėžia inkaro taško puslapio stilių, pakeiskite `xxx` tikrąja santrumpa anglų kalba.

Prie pavadinimo paprastai pridedami inkarai, pavyzdžiui:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekrano efektas yra toks:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Rašyti `HTML` Iš `MarkDown`

`HTML` gali būti įterptas į `pug` kodą.

`<pre>` elementų turinys nebus išverstas.

Sujungę šiuos du taškus, galite lengvai parašyti `HTML` iš `MarkDown` kad pasiektumėte įvairius rodymo efektus.

[Norėdami gauti informacijos i18n.site spustelėkite čia Kalbų kodų sąrašas pagrindiniame puslapyje yra parašytas HTML](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , o kodas yra toks: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Atminkite, kad `<style>` taip pat yra apibrėžtas `<pre>` aukščiau.