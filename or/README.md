# I18N.SITE · ସୀମା ବିନା ଭାଷା |<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, ଏକ ଷ୍ଟାଟିକ୍ ସାଇଟ୍ ଜେନେରେଟର ଯାହା [100 ଟି ବିଭିନ୍ନ ଭାଷାରେ](https://github.com/i18n-site/node/blob/main/lang/src/index.js) ସ୍ୱୟଂଚାଳିତ ଅନୁବାଦକୁ ସମର୍ଥନ କରେ |

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

କିଛି ଲୋକ ପଚାରିବାକୁ ଚାହିଁପାରନ୍ତି, ବର୍ତ୍ତମାନ ବ୍ରାଉଜର୍ଗୁଡ଼ିକର ବିଲ୍ଟ-ଇନ୍ ଅନୁବାଦ କାର୍ଯ୍ୟ ଅଛି, ୱେବସାଇଟକୁ ଆନ୍ତର୍ଜାତୀୟକରଣ କରିବା ଅନାବଶ୍ୟକ କି?

ମୁଁ କହିବାକୁ ଚାହେଁ ଯେ **କେବଳ ସମଗ୍ର ସାଇଟକୁ ଆନ୍ତର୍ଜାତୀୟକରଣ କରି ଆମେ ମଲ୍ଟି ଲିଙ୍ଗୁଆଲ୍ ଇନ୍-ସାଇଟ୍ ଫୁଲ୍ ଟେକ୍ସଟ୍ ସର୍ଚ୍ଚ ଏବଂ ସର୍ଚ୍ଚ ଇଞ୍ଜିନ୍ ଅପ୍ଟିମାଇଜେସନ୍ କୁ ସମର୍ଥନ କରିପାରିବା |**

## ଟ୍ୟୁଟୋରିଆଲ୍

## କାର୍ଯ୍ୟ ପରିଚୟ

### ମାର୍କଡାଉନ୍ ଫର୍ମାଟ୍ ରଖନ୍ତୁ |

### ଅନୁବାଦକୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ |

ଅନୁବାଦକୁ ସଂଶୋଧନ କରିବା ପରେ, ଆପଣଙ୍କୁ କ୍ୟାଚ୍ ଅପଡେଟ୍ କରିବାକୁ `./i18n.sh` ପୁନ run ଚଲାଇବାକୁ ପଡିବ |

### ଅନୁବାଦ ଟିପ୍ପଣୀ |

ଅନୁବାଦ ମନ୍ତବ୍ୟଗୁଡିକ &quot;` &quot;ପରେ ଭାଷା ସୂଚାଇବା ଆବଶ୍ୟକ କରେ, ଯେପରି ` ```rust` |

ସମ୍ପ୍ରତି କଳଙ୍କ, c, cpp, java, js, କଫି, ପାଇଥନ୍, ଏବଂ ବାସ୍ ପାଇଁ ମନ୍ତବ୍ୟ ଅନୁବାଦକୁ ସମର୍ଥନ କରେ |

ଅଧିକ ଭାଷାରେ ମନ୍ତବ୍ୟ ପାଇଁ ଅନୁବାଦ ସମର୍ଥନ ଯୋଗ କରିବାକୁ [tran_md / src / comment.coffee କୁ](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ସଂପାଦନ କରନ୍ତୁ |

### ପ୍ରକ୍ସି ବିନ୍ୟାସ କରନ୍ତୁ |

ନିମ୍ନଲିଖିତ ପରିବେଶ ଭେରିଏବଲ୍ ସେଟ୍ କରିବା ଦ୍ୱାରା ଗୁଗୁଲ୍ ଅନୁବାଦ API କଲ୍ ପ୍ରକ୍ସି ଦେଇ ଯିବାକୁ ଅନୁମତି ଦିଏ |

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### ଭେରିଏବଲ୍ ଏମ୍ବେଡିଂ |

```
test: 测试变量<br 0>嵌入
```

### କ୍ୟାଚ୍ ଖାଲି କରନ୍ତୁ |

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
