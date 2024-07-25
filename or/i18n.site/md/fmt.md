# ମାର୍କଡାଉନ୍ ଫର୍ମାଟ୍ ସମ୍ମିଳନୀ |

## ଆଙ୍କର୍ ପଏଣ୍ଟ |

ପାରମ୍ପାରିକ ବିଷୟବସ୍ତୁ ଉପରେ ଆଧାର କରି ଆଙ୍କର୍ସ ସୃଷ୍ଟି ହୁଏ `MarkDown` ଏହି ସମାଧାନ ସମ୍ଭବ ନୁହେଁ |

ରାଜି ହୋଇଥିବା ଆଙ୍କର୍ ସମାଧାନ ହେଉଛି ପୋଜିସନ୍ ଆଙ୍କର୍ କୁ ମାନୁଆଲୀ ସୃଷ୍ଟି କରିବାକୁ `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` ପରି ଟେକ୍ସଟ୍ ସନ୍ନିବେଶ କରିବା `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` ଏଠାରେ `rel=id` ଆଙ୍କର୍ ପଏଣ୍ଟର ପୃଷ୍ଠା ଶ style ଳୀକୁ ବ୍ୟାଖ୍ୟା କରେ, ଦୟାକରି `xxx` ଆପଣଙ୍କର ପ୍ରକୃତ ଆଙ୍କର୍ ଇଂରାଜୀ ସଂକ୍ଷିପ୍ତକରଣ ସହିତ ବଦଳାନ୍ତୁ |

ଆଙ୍କର୍ ଗୁଡିକ ସାଧାରଣତ the ଆଖ୍ୟାରେ ଯୋଡା ଯାଇଥାଏ, ଯେପରି:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ପ୍ରଦର୍ଶନ ପ୍ରଭାବ ନିମ୍ନଲିଖିତ ଅଟେ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` ଇନ୍ ଲେଖନ୍ତୁ `MarkDown`

`HTML` କୋଡ୍ ରେ ଏମ୍ବେଡ୍ ହୋଇପାରେ `pug`

ଉପାଦାନ ଭିତରେ ଥିବା ବିଷୟବସ୍ତୁ ଅନୁବାଦ ହେବ ନାହିଁ `<pre>`

ଏହି ଦୁଇଟି ବିନ୍ଦୁକୁ ମିଶାଇ, ଆପଣ ବିଭିନ୍ନ ପ୍ରଦର୍ଶନୀ ପ୍ରଭାବ ହାସଲ କରିବାକୁ ସହଜରେ `HTML` ଲେଖିପାରିବେ `MarkDown`

ଆପଣ କାର୍ଯ୍ୟକାରିତାକୁ ରେଫର୍ କରିପାରିବେ [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) କୋଡ୍ ନିମ୍ନଲିଖିତ ଅଟେ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ `<style>` ଉପରେ ମଧ୍ୟ ବ୍ୟାଖ୍ୟା କରାଯାଇଛି `<pre>`
