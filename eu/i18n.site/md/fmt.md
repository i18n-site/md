# MarkDown Formatuaren Konbentzioa

## Aingura Puntua

Aingura `MarkDown` testu-edukian oinarrituta sortzen dira.

`i18n.site` Adostutako aingura irtenbidea `<a rel=id href="#xxx" id="xxx"></a>` -ren antzeko testua txertatzea da `MarkDown` -n kokapen-aingura eskuz sortzeko.

`<a rel=id href="#xxx" id="xxx"></a>` hemen `rel=id` aingura puntuaren orriaren estiloa definitzen du, mesedez ordezkatu `xxx` zure benetako aingura ingelesezko laburdurarekin.

Tituluari aingurak gehitzen zaizkio normalean, hala nola:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Bistaratzeko efektua honako hau da:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Idatzi `HTML` -N `MarkDown`

`pug` `HTML` kodean txertatu daiteke.

`<pre>` elementuaren edukia ez da itzuliko.

Bi puntu hauek konbinatuz, erraz `MarkDown` `HTML` bistaratzeko hainbat efektu lortzeko.

Inplementazioa erreferentzia egin dezakezu [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kodea honako hau da :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Kontuan izan `<style>` `<pre>` ere definituta dagoela.
