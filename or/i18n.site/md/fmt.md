# i18n.site ମାର୍କଡାଉନ୍ ଲେଖା ସମ୍ମିଳନୀ |

## ଆଙ୍କର୍ ପଏଣ୍ଟ |

ପାରମ୍ପାରିକ `MarkDown` ଆଙ୍କର୍ ପଏଣ୍ଟଗୁଡିକ ପାଠ୍ୟ ବିଷୟବସ୍ତୁ ଉପରେ ଆଧାର କରି ସୃଷ୍ଟି ହୋଇଥାଏ | ବହୁଭାଷୀ କ୍ଷେତ୍ରରେ, ଏହି ସମାଧାନ ସମ୍ଭବ ନୁହେଁ |

`i18n.site` ସହିତ ସହମତ ହୋଇଥିବା ଆଙ୍କର୍ ପଏଣ୍ଟ ସମାଧାନ ହେଉଛି ପୋଜିସନ୍ ଆଙ୍କର୍ ପଏଣ୍ଟକୁ ମାନୁଆଲୀ ସୃଷ୍ଟି କରିବା ପାଇଁ `MarkDown` ରେ `<a rel=id href="#xxx" id="xxx"></a>` ପରି ଟେକ୍ସଟ୍ ସନ୍ନିବେଶ କରିବା |

`<a rel=id href="#xxx" id="xxx"></a>` , ଏଠାରେ `rel=id` ଆଙ୍କର୍ ପଏଣ୍ଟର ପୃଷ୍ଠା ଶ style ଳୀକୁ ବ୍ୟାଖ୍ୟା କରେ, ଦୟାକରି `xxx` ଆପଣଙ୍କର ପ୍ରକୃତ ଆଙ୍କର୍ ଇଂରାଜୀ ସଂକ୍ଷିପ୍ତକରଣ ସହିତ ବଦଳାନ୍ତୁ |

ଆଙ୍କର୍ ଗୁଡିକ ସାଧାରଣତ the ଆଖ୍ୟାରେ ଯୋଡା ଯାଇଥାଏ, ଯେପରି:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ପ୍ରଦର୍ଶନ ପ୍ରଭାବ ନିମ୍ନଲିଖିତ ଅଟେ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` ରେ `HTML` ଲେଖନ୍ତୁ |

`HTML` `pug` କୋଡ୍ ରେ ଏମ୍ବେଡ୍ କରାଯାଇପାରେ |

`<pre>` ଉପାଦାନରେ ଥିବା ବିଷୟବସ୍ତୁ ଅନୁବାଦ ହେବ ନାହିଁ |

ଏହି ଦୁଇଟି ପଏଣ୍ଟକୁ ମିଶାଇ ବିଭିନ୍ନ ପ୍ରଦର୍ଶନ ପ୍ରଭାବ ହାସଲ କରିବାକୁ ଆପଣ ସହଜରେ `MarkDown` ରେ `HTML` ଲେଖିପାରିବେ |

[i18n.site ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ HTML ମୂଳପୃଷ୍ଠାରେ ଥିବା ଭାଷା କୋଡ୍ ତାଲିକା ଲେଖା ହୋଇଛି](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , ଏବଂ କୋଡ୍ ନିମ୍ନଲିଖିତ ଭାବରେ ଅଟେ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ ଉପରୋକ୍ତ `<pre>` ରେ `<style>` ମଧ୍ୟ ବ୍ୟାଖ୍ୟା କରାଯାଇଛି |