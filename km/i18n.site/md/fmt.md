# i18n.site MarkDown អនុសញ្ញាសរសេរ

## ចំណុចយុថ្កា

ចំណុចយុថ្កា `MarkDown` ជាប្រពៃណីត្រូវបានបង្កើតដោយផ្អែកលើខ្លឹមសារអត្ថបទ ក្នុងករណីពហុភាសា ដំណោះស្រាយនេះមិនអាចទៅរួចនោះទេ។

ដំណោះស្រាយចំណុចយុថ្កាដែលបានព្រមព្រៀងជាមួយ `i18n.site` គឺការបញ្ចូលអត្ថបទស្រដៀងទៅនឹង `<a rel=id href="#xxx" id="xxx"></a>` ក្នុង `MarkDown` ដើម្បីបង្កើតចំណុចយុថ្កាទីតាំងដោយដៃ។

`<a rel=id href="#xxx" id="xxx"></a>` នៅទីនេះ `rel=id` កំណត់រចនាប័ទ្មទំព័រនៃចំណុចយុថ្កា សូមជំនួស `xxx` ដោយអក្សរកាត់ភាសាអង់គ្លេសយុថ្កាពិតប្រាកដរបស់អ្នក។

យុថ្កាជាធម្មតាត្រូវបានបន្ថែមទៅចំណងជើងដូចជា៖

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ឥទ្ធិពលបង្ហាញមានដូចខាងក្រោម៖

<img src="//p.3ti.site/1721381136.avif" width="350">

## សរសេរ `HTML` ក្នុង `MarkDown`

`HTML` អាចត្រូវបានបង្កប់ក្នុង `pug` កូដ។

ខ្លឹមសារក្នុង `<pre>` ធាតុនឹងមិនត្រូវបានបកប្រែទេ។

ការរួមបញ្ចូលគ្នារវាងចំណុចទាំងពីរនេះ អ្នកអាចសរសេរបានយ៉ាងងាយស្រួល `HTML` ក្នុង `MarkDown` ដើម្បីសម្រេចបាននូវឥទ្ធិពលបង្ហាញផ្សេងៗ។

សូមចុច : [ដើម្បីជា HTML i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md)

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ចំណាំថា `<style>` ត្រូវបានកំណត់ផងដែរនៅក្នុង `<pre>` ខាងលើ។