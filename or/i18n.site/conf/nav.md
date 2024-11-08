# କଷ୍ଟୋମାଇଜ୍ ନେଭିଗେସନ୍ |

ନେଭିଗେସନ୍ କଷ୍ଟୋମାଇଜ୍ କରିବାକୁ ବ୍ୟାଖ୍ୟା କରିବାକୁ ଡେମୋ ସାଇଟ୍ କୁ ଏକ ଉଦାହରଣ ଭାବରେ ଗ୍ରହଣ କରିବା [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ଉପରୋକ୍ତ ଚିତ୍ରରେ ସଂଖ୍ୟାଯୁକ୍ତ କ୍ଷେତ୍ରଗୁଡିକ ସହିତ ଅନୁରୂପ ଫାଇଲଗୁଡ଼ିକ ନିମ୍ନଲିଖିତ ଅଟେ:

1. ବାମ [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ଡାହାଣ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) ହେଉଛି ଏକ ଟେମ୍ପଲେଟ୍ ଭାଷା ଯାହା `HTML` ର ସୃଷ୍ଟି କରେ |

[ବ୍ୟାକରଣ ଜାଣିବା ପାଇଁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ pug](https://pugjs.org)

ଆନ୍ତର୍ଜାତୀୟକରଣକୁ କାର୍ଯ୍ୟକାରୀ କରିବା ପାଇଁ ଫାଇଲରେ ଷ୍ଟ୍ରିଙ୍ଗ୍ `${I18N.sponsor}` ବ୍ୟବହୃତ ହୁଏ, ଏବଂ ଏହାର ବିଷୟବସ୍ତୁ ଉତ୍ସ ଭାଷା ଡିରେକ୍ଟୋରୀରେ ସଂପୃକ୍ତ ପାଠ୍ୟ ସହିତ ବଦଳାଯିବ [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` ରେ `css` ଏବଂ `js` ଲେଖନ୍ତୁ ନାହିଁ** , ନଚେତ୍ ଏକ ତ୍ରୁଟି ଆସିବ |

ଶ yles ଳୀଗୁଡିକ `css` ରେ ଲେଖାଯାଇଛି, ଏବଂ ୱେବ୍ ଉପାଦାନଗୁଡିକ ସୃଷ୍ଟି କରି ପାରସ୍ପରିକ କ୍ରିୟା ହାସଲ ହୁଏ |

ଏଠାରେ, ନାଭିଗେସନ୍ ବାର୍ ର [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) style ଳୀ ସହିତ ଅନୁରୂପ ଫାଇଲ୍ :