# ទ្រង់ទ្រាយ MarkDown អនុសញ្ញា

## ចំណុចយុថ្កា

ជាប្រពៃណី `MarkDown`

ដំណោះស្រាយយុថ្កា `i18n.site` បានយល់ព្រមគឺត្រូវបញ្ចូលអត្ថបទស្រដៀងនឹង `<a rel=id href="#xxx" id="xxx"></a>` ក្នុង `MarkDown` ដើម្បីបង្កើតយុថ្កាទីតាំងដោយដៃ។

`<a rel=id href="#xxx" id="xxx"></a>` នៅទីនេះ `rel=id` កំណត់រចនាប័ទ្មទំព័រនៃចំណុចយុថ្កា សូមជំនួស `xxx` ដោយអក្សរកាត់ជាភាសាអង់គ្លេសរបស់យុថ្កាពិតប្រាកដរបស់អ្នក។

យុថ្កាជាធម្មតាត្រូវបានបន្ថែមទៅចំណងជើងដូចជា៖

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ឥទ្ធិពលបង្ហាញមានដូចខាងក្រោម៖

<img src="//p.3ti.site/1721381136.avif" width="350">

## សរសេរ `HTML` ចូល `MarkDown`

`pug` `HTML` អាច​បង្កប់​ក្នុង​កូដ។

ខ្លឹមសារនៅក្នុងធាតុ `<pre>` នឹងមិនត្រូវបានបកប្រែទេ។

ការរួមបញ្ចូលគ្នារវាងចំណុចទាំងពីរនេះ អ្នកអាចសរសេរ `HTML` ចូល `MarkDown`

អ្នកអាចយោងទៅលើការអនុវត្តនៅក្នុង [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) កូដមានដូចខាងក្រោម :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ចំណាំថា `<style>` ត្រូវបានកំណត់ផងដែរនៅក្នុង `<pre>`
