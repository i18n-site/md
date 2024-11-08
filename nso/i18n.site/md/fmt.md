# i18n.site MarkDown Kopano Ya Go Ngwala

## Ntlha Ya Ankora

Dintlha tša setšo `MarkDown` tša ankora di tšweletšwa go ya ka diteng tša sengwalwa Tabeng ya maleme a mantši, tharollo ye ga e kgonege.

Tharollo ya ntlha ya ankora yeo e dumelelanwego le `i18n.site` ke go tsenya sengwalwa se se swanago le `<a rel=id href="#xxx" id="xxx"></a>` go `MarkDown` go hlama ka seatla ntlha ya ankora ya go beakanya.

`<a rel=id href="#xxx" id="xxx"></a>` , mo `rel=id` e hlaloša setaele sa letlakala sa ntlha ya ankora, hle tšea legato `xxx` ka khutsofatšo ya gago ya nnete ya Seisemane ya ankora.

Gantši ditshetledi di okeletšwa sehlogong, go swana le:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Phello ya pontšho ke ye e latelago:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ngwala `HTML` Go `MarkDown`

`HTML` ka embedded ka khoutu ya `pug` .

Diteng ka dielemente `<pre>` di ka se fetolelwe.

Ge o kopanya dintlha tše tše pedi, o ka ngwala `HTML` go `MarkDown` gabonolo go fihlelela ditlamorago tša pontšho tše di fapanego.

[Tobetsa mo bakeng HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Hlokomela gore `<style>` e hlalošitšwe gape go `<pre>` ka godimo.