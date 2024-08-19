# Convenția de format MarkDown

## Puncte de ancorare

Punctele de ancorare tradiționale din `MarkDown` se bazează pe conținutul textului, dar în situații multilingve, această metodă nu este aplicabilă.

Soluția convenită de `i18n.site` pentru puncte de ancorare implică inserarea unui text similar cu `<a rel=id href="#xxx" id="xxx"></a>` în `MarkDown` pentru a crea manual puncte de ancorare de poziționare.

`<a rel=id href="#xxx" id="xxx"></a>`, aici `rel=id` definește stilul paginii pentru punctul de ancorare; înlocuiți `xxx` cu abrevierea în engleză a punctului de ancorare dvs. real.

Punctele de ancorare sunt de obicei adăugate în titluri, cum ar fi:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efectul de afișare este următorul:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scrierea `HTML` în `MarkDown`

Codul `pug` poate include `HTML`.

În elementele `<pre>`, conținutul nu va fi tradus.

Combinând aceste două aspecte, este ușor să scrieți `HTML` în `MarkDown` pentru a obține diverse efecte de afișare.

Vă puteți referi la implementarea din [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), codul este următorul:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Rețineți că în `<pre>` de mai sus a fost definit și `<style>`.