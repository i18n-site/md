# ଉତ୍ପାଦ ବ features ଶିଷ୍ଟ୍ୟଗୁଡିକ

## `i18` ଅନୁବାଦ ଏକତ୍ରିତ |

ପ୍ରୋଗ୍ରାମ୍ ବିଲ୍ଟ-ଇନ୍ `i18` ଅନୁବାଦ କରିଛି, ନିର୍ଦ୍ଦିଷ୍ଟ ବ୍ୟବହାର ପାଇଁ ଦୟାକରି [➔ `i18` ଡକ୍ୟୁମେଣ୍ଟ୍](/i18) ଦେଖନ୍ତୁ |

## ସ୍ୱୟଂଚାଳିତ ଭାବରେ ବ୍ରାଉଜର୍ ଭାଷା ସହିତ ମେଳ |

ୱେବସାଇଟ୍ ଡିଫଲ୍ଟ ଭାଷା ସ୍ୱୟଂଚାଳିତ ଭାବରେ ବ୍ରାଉଜରର ଭାଷା ସହିତ ମେଳ ହେବ |

ଉପଭୋକ୍ତା ମାନୁଆଲୀ ଭାଷା ସୁଇଚ୍ କରିବା ପରେ, ଉପଭୋକ୍ତାଙ୍କର ପସନ୍ଦ ମନେ ରହିବ |

ସମ୍ବନ୍ଧୀୟ [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## ମୋବାଇଲ୍ ଟର୍ମିନାଲ୍ ଆଡାପ୍ଟେସନ୍ |

ମୋବାଇଲ୍ ଫୋନରେ ମଧ୍ୟ ଏକ ଭଲ ପ reading ିବାର ଅଭିଜ୍ଞତା ଅଛି |

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> ଫ୍ରଣ୍ଟ-ଏଣ୍ଡ ଉଚ୍ଚ ଉପଲବ୍ଧତା |

`i18n.site` ସାଇଟ ବିଷୟବସ୍ତୁକୁ ଡିଫଲ୍ଟ ଭାବରେ `npmjs.com` ରେ ପ୍ରକାଶ କରିବ, [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) ଏବଂ `npm` ରେ ଲୋଡ୍ ହୋଇଥିବା ଅନ୍ୟ `CDN` ବିଷୟବସ୍ତୁ!

ଏହି ଆଧାରରେ, ଚାଇନାର ଉପଭୋକ୍ତାମାନଙ୍କୁ ସ୍ଥିର ପ୍ରବେଶ ଏବଂ **ଉଚ୍ଚ ଫ୍ରଣ୍ଟ-ଏଣ୍ଡ ଉପଲବ୍ଧତା** ହାସଲ କରିବାକୁ ଚୀନ୍ ମଧ୍ୟପ୍ରଦେଶର ଦର୍ପଣ ଉତ୍ସଗୁଡିକ ଯୋଗ କରାଯାଇଥିଲା |

ନୀତି ହେଉଛି: [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) ସହିତ ଅନୁରୋଧକୁ ଅଟକାନ୍ତୁ, ଅନ୍ୟ `CDN` ରେ ବିଫଳ ଅନୁରୋଧକୁ ପୁନ ry ଚେଷ୍ଟା କରନ୍ତୁ ଏବଂ ଡିଫଲ୍ଟ ଲୋଡିଂ ଉତ୍ସ ଭାବରେ ଦ୍ରୁତତମ ପ୍ରତିକ୍ରିୟାଶୀଳ ମୂଳ ସାଇଟକୁ ଆଡାପ୍ଟିଭ୍ ଭାବରେ ସକ୍ଷମ କରନ୍ତୁ |

ସମ୍ବନ୍ଧୀୟ [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## ଏକକ ପୃଷ୍ଠା ପ୍ରୟୋଗ, ଅତ୍ୟଧିକ ଦ୍ରୁତ ଲୋଡିଂ |

ୱେବସାଇଟ୍ ଗୋଟିଏ ପୃଷ୍ଠା ପ୍ରୟୋଗ ସ୍ଥାପତ୍ୟକୁ ଗ୍ରହଣ କରେ, ପୃଷ୍ଠାଗୁଡ଼ିକୁ ସୁଇଚ୍ କରିବା ସମୟରେ ଏବଂ କ fast ଣସି ଦ୍ରୁତ ଲୋଡିଂ ସମୟରେ କ refr ଣସି ସତେଜତା ନଥାଏ |

## ପ reading ିବା ଅଭିଜ୍ଞତା ପାଇଁ ଅପ୍ଟିମାଇଜ୍ |

### ଭଲ ଡିଜାଇନ୍ ଶ style ଳୀ |

> ସରଳତାର ସ beauty ନ୍ଦର୍ଯ୍ୟ ଏହି ୱେବସାଇଟ୍ ର ୱେବ୍ ଡିଜାଇନ୍ରେ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ବ୍ୟାଖ୍ୟା କରାଯାଇଛି |
> ଏହା ଅତ୍ୟଧିକ ସଜାଇବା ପରିତ୍ୟାଗ କରେ ଏବଂ ଏହାର ଶୁଦ୍ଧ ରୂପରେ ବିଷୟବସ୍ତୁ ଉପସ୍ଥାପନ କରେ |
> ଏକ ସୁନ୍ଦର କବିତା ପରି, ଯଦିଓ ଏହା ଛୋଟ, ଏହା ଲୋକଙ୍କ ହୃଦୟକୁ ସ୍ପର୍ଶ କରେ |

<p style="text-align:right">ଲେଖକ I18N.SITE</p>

[ଶ yles ଳୀର ଏକ ତାଲିକା ଦେଖିବାକୁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ](/i18n.site/md/styl) |

### `RSS`

![](//p.3ti.site/1725541085.avif)

ଉପର ଚିତ୍ରଟି [inoreader.com](//inoreader.com) `i18n.site` ବ୍ୟବହାର କରି ମଲ୍ଟି ଭାଷା `RSS` ଦେଖାଏ |

### ଅନଲାଇନ୍ ଫଣ୍ଟ ଲୋଡ୍ କରନ୍ତୁ, ଚାଇନିଜ୍ କୁ ସମର୍ଥନ କରନ୍ତୁ |

ଡିଫଲ୍ଟ ଭାବରେ, ଆଲିମା ଡୁଆଲ୍-ଅକ୍ଷ [MiSans](https://hyperos.mi.com/font/zh/download/) [ଆୟତାକାର](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) ଫଣ୍ଟ, ଏବଂ ଅନ୍ୟ ଅନଲାଇନ୍ ଫଣ୍ଟଗୁଡ଼ିକ ୱେବପୃଷ୍ଠାରେ ବିଭିନ୍ନ ପ୍ଲାଟଫର୍ମରେ ଉପଭୋକ୍ତାମାନଙ୍କ ପଠନ ଅଭିଜ୍ଞତାକୁ ଏକୀକୃତ କରିବାକୁ ସକ୍ଷମ ହୋଇଥାଏ |

ସେହି ସମୟରେ, ଲୋଡିଙ୍ଗ୍ ସ୍ପିଡ୍କୁ ଉନ୍ନତ କରିବାକୁ, ୱାର୍ଡ ଫ୍ରିକ୍ୱେନ୍ସି ପରିସଂଖ୍ୟାନ ଅନୁଯାୟୀ ଫଣ୍ଟଗୁଡିକ କଟା ହୋଇଯାଏ |

ସମ୍ବନ୍ଧୀୟ [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### ଶୀର୍ଷ ନାଭିଗେସନ୍ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ଲୁକ୍କାୟିତ |

ତଳକୁ ସ୍କ୍ରୋଲ୍ କରନ୍ତୁ ଏବଂ ଉପର ନାଭିଗେସନ୍ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ଲୁଚିବ |

ସ୍କ୍ରୋଲ୍ ଅପ୍ କରନ୍ତୁ ଏବଂ ଲୁକ୍କାୟିତ ନାଭିଗେସନ୍ ପୁଣି ଦେଖାଯିବ |

ଯେତେବେଳେ ମାଉସ୍ ଘୁ not ୍ଚୁନାହିଁ ସେତେବେଳେ ଏହା ଅଦୃଶ୍ୟ ହୋଇଯିବ |

ଏକ ଇମର୍ସିଭ୍ ଡକ୍ୟୁମେଣ୍ଟ୍ ପ reading ଼ିବା ଅଭିଜ୍ଞତା ସୃଷ୍ଟି କରିବାକୁ ନାଭିଗେସନ୍ ବାର୍ ର ଉପର ଡାହାଣ କୋଣରେ ଏକ ଫୁଲ୍ ସ୍କ୍ରିନ୍ ବଟନ୍ ଅଛି |

### ସାମ୍ପ୍ରତିକ ଅଧ୍ୟାୟର ସିଙ୍କ୍ରୋନାଇଜଡ୍ ବାହ୍ୟରେଖା ହାଇଲାଇଟ୍ |

ଡାହାଣରେ ଥିବା ବିଷୟବସ୍ତୁକୁ ସ୍କ୍ରୋଲ୍ କରିବାବେଳେ, ବାମ ପାର୍ଶ୍ୱରେ ଥିବା ବାହ୍ୟରେଖା ବର୍ତ୍ତମାନ ପ reading ୁଥିବା ଅଧ୍ୟାୟକୁ ଏକକାଳୀନ ଆଲୋକିତ କରିବ |

## ଶାନ୍ତ ବିବରଣୀ

### ମାଉସ୍ ପ୍ରଭାବ

ଶୀତଳ ବିଶେଷ ପ୍ରଭାବ ଦେଖିବାକୁ ଉପର ନାଭିଗେସନ୍ ର ଡାହାଣ ପାର୍ଶ୍ୱରେ ଥିବା ବଟନ୍ ଉପରେ ଆପଣଙ୍କର ମାଉସ୍ ଚଲାନ୍ତୁ |

### `404` ଛୋଟ ଭୂତ |

`404` ପୃଷ୍ଠାରେ ଏକ ସୁନ୍ଦର ଛୋଟ ଭାସମାନ ଭୂତ ଅଛି, ଯାହାର ଆଖି ମାଉସ୍ ସହିତ ଗତି କରିବ, [view ଦେଖିବାକୁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ](/404) ,

## କୋଡ୍ ମୁକ୍ତ ଉତ୍ସ |

[କୋଡ୍ ଖୋଲା ଉତ୍ସ ଅଟେ](/i18n.site/c/src) ଯଦି ଆପଣ ବିକାଶରେ ଭାଗ ନେବାକୁ ଆଗ୍ରହୀ, ଦୟାକରି ନିଜକୁ [ମେଲିଂ ତାଲିକାରେ](//groups.google.com/u/2/g/i18n-site) ପରିଚିତ କର |

ସେଠାରେ ଅନେକ ଛୋଟ ଆବଶ୍ୟକତା ଅଛି ଯାହା ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କିନ୍ତୁ ଜରୁରୀ ନୁହେଁ |