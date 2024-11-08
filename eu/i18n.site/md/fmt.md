# i18n.site MarkDown Idazketa-Konbentzioa

## Aingura Puntua

`MarkDown` aingura puntu tradizionalak testu-edukian oinarrituta sortzen dira.

`i18n.site` rekin adostutako aingura-puntuaren irtenbidea `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` en antzeko testua txertatzea da, kokapen-aingura-puntua eskuz sortzeko.

`<a rel=id href="#xxx" id="xxx"></a>` , hemen `rel=id` aingura puntuaren orri-estiloa definitzen du, mesedez ordezkatu `xxx` zure benetako aingura ingelesezko laburdurarekin.

Tituluari aingurak gehitzen zaizkio normalean, hala nola:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Bistaratzeko efektua honako hau da:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Idatzi `HTML` `MarkDown`

`HTML` `pug` kodean txertatu daiteke.

`<pre>` elementuko edukia ez da itzuliko.

Bi puntu hauek konbinatuz, erraz idatz dezakezu `HTML` `MarkDown` bistaratzeko hainbat efektu lortzeko.

[Egin klik hemen erreferentzia izateko i18n.site Hasierako HTML hizkuntza-kodeen zerrenda idatzita dago](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , eta kodea honakoa da :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Kontuan izan `<style>` goiko `<pre>` -n ere definitzen dela.