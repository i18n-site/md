# Konventa E Shkrimit i18n.site MarkDown

## Pikë Ankorimi

`MarkDown` pika ankorimi tradicionale krijohen bazuar në përmbajtjen e tekstit Në rastin e shumëgjuhëve, kjo zgjidhje nuk është e realizueshme.

Zgjidhja e pikës së ankorimit e rënë dakord me `i18n.site` është të futni tekst të ngjashëm me `<a rel=id href="#xxx" id="xxx"></a>` në `MarkDown` për të krijuar manualisht pikën e ankorimit të pozicionimit.

`<a rel=id href="#xxx" id="xxx"></a>` , këtu `rel=id` përcakton stilin e faqes së pikës së ankorimit, ju lutemi zëvendësoni `xxx` me shkurtesën tuaj aktuale të ankorimit në anglisht.

Ankorat zakonisht i shtohen titullit, si p.sh.

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekti i shfaqjes është si më poshtë:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Shkruani `HTML` Në `MarkDown`

`HTML` mund të futet në kodin `pug` .

Përmbajtja në `<pre>` elementë nuk do të përkthehet.

Duke kombinuar këto dy pika, mund të shkruani lehtësisht `HTML` në `MarkDown` për të arritur efekte të ndryshme të ekranit.

[Klikoni këtu për i18n.site Lista e kodeve të gjuhës në faqen kryesore HTML është e shkruar](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) dhe kodi është si më :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Vini re se `<style>` është përcaktuar edhe në `<pre>` më sipër.