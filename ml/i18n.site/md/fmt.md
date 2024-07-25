# MarkDown ഫോർമാറ്റ് കൺവെൻഷൻ

## ആങ്കർ പോയിൻ്റ്

പരമ്പരാഗത `MarkDown`

പൊസിഷനിംഗ് ആങ്കർ സ്വമേധയാ സൃഷ്‌ടിക്കാൻ `MarkDown` `<a rel=id href="#xxx" id="xxx"></a>` സമാനമായ വാചകം ചേർക്കുക എന്നതാണ് സമ്മതിച്ച ആങ്കർ പരിഹാരം `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` , ഇവിടെ `rel=id` ആങ്കർ പോയിൻ്റിൻ്റെ പേജ് ശൈലി നിർവചിക്കുന്നു, നിങ്ങളുടെ യഥാർത്ഥ ആങ്കർ ഇംഗ്ലീഷ് ചുരുക്കെഴുത്ത് ഉപയോഗിച്ച് `xxx` മാറ്റിസ്ഥാപിക്കുക.

ആങ്കറുകൾ സാധാരണയായി ശീർഷകത്തിൽ ചേർക്കുന്നു, ഇനിപ്പറയുന്നവ:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ഡിസ്പ്ലേ പ്രഭാവം ഇപ്രകാരമാണ്:

<img src="//p.3ti.site/1721381136.avif" width="350">

## എന്നതിൽ `HTML` എഴുതുക `MarkDown`

`pug` `HTML` കോഡിൽ ഉൾച്ചേർക്കാവുന്നതാണ്.

`<pre>` ഉള്ളടക്കം വിവർത്തനം ചെയ്യില്ല.

ഈ രണ്ട് പോയിൻ്റുകൾ സംയോജിപ്പിച്ച്, വിവിധ ഡിസ്പ്ലേ ഇഫക്റ്റുകൾ നേടുന്നതിന് നിങ്ങൾക്ക് `HTML` `MarkDown` എഴുതാം.

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) കോഡ് ഇപ്രകാരമാണ് :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` എന്നതും `<pre>` നിർവചിച്ചിരിക്കുന്നത് ശ്രദ്ധിക്കുക.
