# i18n.site Peymana Nivîsandinê Ya MarkDown

## Xala Lengerê

`MarkDown` xalên lengerê yên kevneşopî li ser bingeha naveroka nivîsê têne çêkirin Di doza pirzimanî de, ev çareserî ne pêkan e.

Çareseriya xala lengerê ya ku bi `i18n.site` re hatî pejirandin ev e ku meriv nivîsek mîna `<a rel=id href="#xxx" id="xxx"></a>` di `MarkDown` de têxe nav da ku bi destan xala lengerê ya pozîsyonê biafirîne.

`<a rel=id href="#xxx" id="xxx"></a>` , li vir `rel=id` şêwaza rûpela xala ankerê diyar dike, ji kerema xwe `xxx` bi kurtenivîsa xweya rastîn a Englishngilîzî biguhezînin.

Anker bi gelemperî li sernavê têne zêdekirin, wekî:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Bandora nîşankirinê wiha ye:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Di `MarkDown` De Binivîse

`HTML` dikare di koda `pug` de were veguheztin.

Naveroka di `<pre>` hêmanan de nayê wergerandin.

Bi berhevkirina van her du xalan, hûn dikarin bi hêsanî `HTML` di `MarkDown` de binivîsin da ku bigihîjin bandorên dîmenderê yên cihêreng.

[Ji bo i18n.site li vir bikirtînin Lîsteya koda zimanî ya li ser rûpela sereke HTML hatiye nivîsandin](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , û kod jî wiha ye :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Bala xwe bidinê ku `<style>` jî li jor di `<pre>` ê de hatî destnîşan kirin.