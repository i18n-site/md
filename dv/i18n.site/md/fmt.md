# i18n.site މާކްޑައުން ލިޔުމުގެ ކޮންވެންޝަން

## އެންކަރ ޕޮއިންޓެވެ

ސަގާފީ `MarkDown` އެންކަރ ޕޮއިންޓް އުފައްދަނީ ޓެކްސްޓް ކޮންޓެންޓަށް ބަލައިގެންނެވެ.

`i18n.site` އާ އެއްބަސްވެފައިވާ އެންކަރ ޕޮއިންޓް ސޮލިއުޝަނަކީ ޕޮޒިޝަނިންގ އެންކަރ ޕޮއިންޓް އަމިއްލައަށް އުފެއްދުމަށްޓަކައި `MarkDown` އިން `<a rel=id href="#xxx" id="xxx"></a>` އާ އެއްގޮތް ޓެކްސްޓެއް ޖައްސައިގެންނެވެ.

`<a rel=id href="#xxx" id="xxx"></a>` , މިތަނުގައި `rel=id` އެންކަރ ޕޮއިންޓްގެ ޕޭޖް ސްޓައިލް ކަނޑައަޅާފައިވާއިރު، `xxx` ގެ ބަދަލުގައި ތިބާގެ އަސްލު އެންކަރ އިނގިރޭސި ކުރުކުރުން ލިޔެލާށެވެ.

އާންމުކޮށް ސުރުޚީއަށް އިތުރުކުރަނީ އެންކަރުތައް، ފަދައިން:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ޑިސްޕްލޭ އިފެކްޓް ތިރީގައި މިވަނީއެވެ.

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` އިން `HTML` ލިޔެލާށެވެ

`HTML` `pug` ކޯޑުގައި އެންބެޑް ކުރެވިދާނެއެވެ.

`<pre>` އެލިމެންޓްގައި ހިމެނޭ ކޮންޓެންޓް ތަރުޖަމާ ނުކުރެވޭނެއެވެ.

މި ދެ ނުކުތާ އެއްކޮށްލުމުން ފަސޭހައިން `HTML` އިން `MarkDown` ލިޔެގެން ތަފާތު ޑިސްޕްލޭ އިފެކްޓްސް ހާސިލް ކުރެވޭނެއެވެ.

[HTML އަށް މިތަނަށް i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

މަތީގައިވާ `<pre>` ގައި ވެސް `<style>` މާނަކުރެވިފައިވާކަން ފާހަގަކޮށްލެވެއެވެ.