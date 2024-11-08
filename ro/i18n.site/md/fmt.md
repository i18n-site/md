# Convenția De Scriere i18n.site MarkDown

## Punct De Ancorare

Punctele de ancorare tradiționale `MarkDown` sunt generate pe baza conținutului textului. În cazul în mai multe limbi, această soluție nu este fezabilă.

Soluția punctului de ancorare convenită cu `i18n.site` este să inserați text similar cu `<a rel=id href="#xxx" id="xxx"></a>` în `MarkDown` pentru a crea manual punctul de ancorare de poziționare.

`<a rel=id href="#xxx" id="xxx"></a>` , aici `rel=id` definește stilul de pagină al punctului de ancorare, vă rugăm să înlocuiți `xxx` cu abrevierea dvs. în engleză pentru ancora actuală.

Ancorele sunt de obicei adăugate la titlu, cum ar fi:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efectul de afișare este următorul:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scrie `HTML` in `MarkDown`

`HTML` poate fi încorporat în codul `pug` .

Conținutul din `<pre>` elemente nu va fi tradus.

Combinând aceste două puncte, puteți scrie cu ușurință `HTML` în `MarkDown` pentru a obține diferite efecte de afișare.

[Faceți clic aici pentru referință i18n.site Lista de coduri de limbă de pe pagina de start HTML este scrisă](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , iar : este după cum urmează

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Rețineți că `<style>` este definit și în `<pre>` de mai sus.