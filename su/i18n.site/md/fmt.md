# Konvénsi Format MarkDown

## Titik Jangkar

`MarkDown` titik jangkar tradisional dihasilkeun dumasar kana eusi téks Dina kasus multi-basa, solusi ieu teu meujeuhna.

Solusi titik jangkar sapuk sareng `i18n.site` nyaéta nyelapkeun téks anu sami sareng `<a rel=id href="#xxx" id="xxx"></a>` dina `MarkDown` pikeun nyiptakeun titik jangkar posisi sacara manual.

`<a rel=id href="#xxx" id="xxx"></a>` , di dieu `rel=id` nangtukeun gaya kaca titik jangkar, mangga ngaganti `xxx` ku jangkar sabenerna singketan Inggris Anjeun.

Jangkar biasana ditambahkeun kana judul, kayaning:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Pangaruh tampilan nyaéta kieu:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Nulis `HTML` Dina `MarkDown`

`HTML` tiasa dipasang dina `pug` kode.

Eusi dina `<pre>` elemen moal ditarjamahkeun.

Ngagabungkeun dua titik ieu, anjeun bisa kalayan gampang nulis `HTML` dina `MarkDown` pikeun ngahontal rupa épék tampilan.

Anjeun tiasa ngarujuk kana palaksanaan di [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) Kodena kieu :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Catet yén `<style>` ogé dihartikeun dina `<pre>` di luhur.