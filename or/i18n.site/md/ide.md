# ସମ୍ପାଦକ ସୁପାରିଶ |

ସମସ୍ତଙ୍କର ନିଜସ୍ୱ ପ୍ରିୟ ସମ୍ପାଦକ ଅଛି ଏଠାରେ ଆମେ ଆମର `Markdown` ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ ବାଣ୍ଟୁ |

ଆମେ ଲେଖିବା ସମୟରେ `MarkDown` ଲେଖିବା ଏବଂ ପ୍ଲଗ-ଇନ୍ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ଇନଷ୍ଟଲ୍ କରିବା ପାଇଁ ବ୍ୟବହାର କରୁ [vscode](https://code.visualstudio.com/)

ନିମ୍ନରେ ଦେଖାଯାଇଥିବା ପରି, ପ୍ରିଭ୍ୟୁ ୱିଣ୍ଡୋ ଖୋଲିବାକୁ ଏଡିଟର୍ ରେ ଡାହାଣ କ୍ଲିକ୍ କରନ୍ତୁ |

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ଫାଇଲ୍ `Markdown` ଖୋଲିବାକୁ `vscode` କଲ୍ କରିବାକୁ କମାଣ୍ଡ୍ ଲାଇନ୍ ରେ `code xxx.md` ପ୍ରବେଶ କରନ୍ତୁ |

ଚିତ୍ର ଅପଲୋଡ୍ କରିବାକୁ [PicList](https://github.com/Kuingsmile/PicList) କରନ୍ତୁ, ଅପଲୋଡ୍ ସର୍ଟକଟ୍ କି ସେଟ୍ କରିବାକୁ ମନେରଖନ୍ତୁ, ଏବଂ ଗୋଟିଏ କ୍ଲିକ୍ ସହିତ ସ୍କ୍ରିନସଟ୍ ଅପଲୋଡ୍ କରନ୍ତୁ |

ଏହା ଅପଲୋଡ୍ କରିବା ପରେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ଫାଇଲ୍ ନାମକୁ `Markdown` ଫର୍ମାଟରେ କପି କରିବାକୁ ସମର୍ଥନ କରେ, ଯାହାକି କାର୍ଯ୍ୟଦକ୍ଷତାକୁ ବହୁତ ଉନ୍ନତ କରିଥାଏ |

ସେହି ସମୟରେ, ଆପଣ ନିମ୍ନଲିଖିତ ସଂରଚନାକୁ ଅନୁସରଣ କରିପାରିବେ, ଫାଇଲକୁ ରୂପାନ୍ତର କରିପାରିବେ ଏବଂ ପ୍ରତିଛବି ଆକାରକୁ ହ୍ରାସ କରିବା ପାଇଁ ଅପଲୋଡ୍ ହୋଇଥିବା ଫାଇଲକୁ ସ୍ୱୟଂଚାଳିତ ଭାବରେ `avif` କୁ ସଙ୍କୋଚନ କରିବାକୁ ବିନ୍ୟାସ କରିପାରିବେ |

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```