# ସଂସ୍ଥାପନ ଏବଂ ବ୍ୟବହାର କରନ୍ତୁ |

## ୱିଣ୍ଡୋଜ୍ ପ୍ରଥମେ git bash କୁ ସଂସ୍ଥାପନ କରେ |

windows , ଦୟାକରି [ପ୍ରଥମେ `git bash` ଡାଉନଲୋଡ୍ ଏବଂ ସଂସ୍ଥାପନ କରିବାକୁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ](https://git-scm.com/download/win) |

`git bash` ରେ ପରବର୍ତ୍ତୀ ଅପରେସନ୍ ଚଲାନ୍ତୁ |

## ସଂସ୍ଥାପନ କରନ୍ତୁ |

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### ଅନୁବାଦ ଟୋକେନ୍ ବିନ୍ୟାସ କରନ୍ତୁ |

ଟୋକନ୍ କପି କରିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` ସୃଷ୍ଟି କରନ୍ତୁ, ଏଥିରେ କପି ହୋଇଥିବା ବିଷୟବସ୍ତୁକୁ ଲେପନ କରନ୍ତୁ, ବିଷୟବସ୍ତୁ ନିମ୍ନଲିଖିତ ଅଟେ:

```
token: YOUR_API_TOKEN
```

ଏହା ସହିତ, ଆପଣଙ୍କୁ ଏକ ପେମେଣ୍ଟ କ୍ରେଡିଟ୍ କାର୍ଡ ବାନ୍ଧିବାକୁ ପଡିବ [i18n.site/payBill](//i18n.site/payBill) କ No ଣସି ରିଚାର୍ଜ ଆବଶ୍ୟକ ନାହିଁ, ୱେବସାଇଟ୍ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ବ୍ୟବହାର ଅନୁଯାୟୀ ଫି କାଟିବ, [ମୂଲ୍ୟ ପାଇଁ ମୂଳପୃଷ୍ଠା ଦେଖନ୍ତୁ](/#price) ) |

## ବ୍ୟବହାର କରନ୍ତୁ |

### ଡେମୋ ପ୍ରୋଜେକ୍ଟ |

`i18` ଅନୁବାଦର ସଂରଚନା ଜାଣିବା ପାଇଁ ଦୟାକରି ଡେମୋ ପ୍ରୋଜେକ୍ଟକୁ ଅନୁସରଣ କରନ୍ତୁ [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

ଚାଇନାରେ ଉପଭୋକ୍ତାମାନେ କ୍ଲୋନ କରିପାରିବେ [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

କ୍ଲୋନିଂ ପରେ, ଡିରେକ୍ଟୋରୀକୁ ପ୍ରବେଶ କର ଏବଂ ଅନୁବାଦ ସଂପୂର୍ଣ୍ଣ କରିବାକୁ `i18` ଚଲାନ୍ତୁ |

### ଡିରେକ୍ଟୋରୀ ଗଠନ

ଟେମ୍ପଲେଟ୍ ଗୋଦାମ ଡିରେକ୍ଟୋରୀ ସଂରଚନା ନିମ୍ନଲିଖିତ ଅଟେ |

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` ଡିରେକ୍ଟୋରୀରେ ଅନୁବାଦିତ ଡେମୋ ଫାଇଲଗୁଡ଼ିକ କେବଳ ଏକ ଉଦାହରଣ ଏବଂ ଏହାକୁ ଡିଲିଟ କରିହେବ |

### ଅନୁବାଦ ଚଲାନ୍ତୁ |

ଡିରେକ୍ଟୋରୀ ପ୍ରବେଶ କରନ୍ତୁ ଏବଂ ଅନୁବାଦ କରିବାକୁ `i18` ଚଲାନ୍ତୁ |

ଅନୁବାଦ ସହିତ, ପ୍ରୋଗ୍ରାମ୍ `.i18n/data` ଫୋଲ୍ଡର୍ ମଧ୍ୟ ସୃଷ୍ଟି କରିବ, ଦୟାକରି ଏହାକୁ ସଂଗ୍ରହାଳୟରେ ଯୋଡନ୍ତୁ |

ନୂତନ ଫାଇଲ୍ ଅନୁବାଦ କରିବା ପରେ, ଏହି ଡିରେକ୍ଟୋରୀରେ `git add . ` ନୂତନ ଡାଟା ଫାଇଲ୍ ସୃଷ୍ଟି ହେବ |

## ବିନ୍ୟାସ ଫାଇଲ୍ |

`.i18n/conf.yml` ହେଉଛି `i18` କମାଣ୍ଡ୍ ଲାଇନ୍ ଅନୁବାଦ ଉପକରଣର ବିନ୍ୟାସ ଫାଇଲ୍ |

ବିଷୟବସ୍ତୁ ନିମ୍ନଲିଖିତ ଅଟେ:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ଉତ୍ସ ଭାଷା ଅନୁବାଦ ଭାଷା &

ବିନ୍ୟାସ ଫାଇଲରେ, `fromTo` ର ଅଧସ୍ତନ:

`en` ହେଉଛି ଉତ୍ସ ଭାଷା, `zh ja ko de fr` ହେଉଛି ଅନୁବାଦର ଲକ୍ଷ୍ୟ ଭାଷା |

ଭାଷା କୋଡ୍ ଦେଖନ୍ତୁ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

ଉଦାହରଣ ସ୍ୱରୂପ, ଯଦି ଆପଣ ଚାଇନିଜ୍ କୁ ଇଂରାଜୀରେ ଅନୁବାଦ କରିବାକୁ ଚାହୁଁଛନ୍ତି, ତେବେ ଏହି ରେଖା `zh: en` କୁ ପୁନ r ଲିଖନ କରନ୍ତୁ |

ଯଦି ଆପଣ ସମସ୍ତ ସମର୍ଥିତ ଭାଷାକୁ ଅନୁବାଦ କରିବାକୁ ଚାହାଁନ୍ତି, ଦୟାକରି `:` ପରେ ଖାଲି ଛାଡିଦିଅନ୍ତୁ | ଉଦାହରଣ ସ୍ୱରୂପ

```
i18n:
  fromTo:
    en:
```

ବିଭିନ୍ନ ସବ୍ ଡିରେକ୍ଟୋରୀଗୁଡିକ ପାଇଁ ଆପଣ ଭିନ୍ନ `fromTo` ବିନ୍ୟାସ କରିପାରିବେ / ଏକ ପ୍ରଦର୍ଶନ ନିମ୍ନଲିଖିତ ଭାବରେ ଲେଖାଯାଇଛି :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

ଏହି ବିନ୍ୟାସ ସାରଣୀରେ, କାଟାଲଗ୍ `blog` ଅନୁବାଦର ଉତ୍ସ ଭାଷା `zh` , ଏବଂ କାଟାଲଗ୍ `blog/your_file_name.md` ଅନୁବାଦର ଉତ୍ସ ଭାଷା ହେଉଛି `ja` |

### ବହୁଭାଷୀ ପ୍ରତିଛବି / ଲିଙ୍କ୍ |

ଯେତେବେଳେ `replace:` ଏବଂ `MarkDown` ରେ ଥିବା ଚିତ୍ର ଏବଂ ଲିଙ୍କଗୁଡ଼ିକରେ ଥିବା URL ଗୁଡିକ (ଏବଂ ଏମ୍ବେଡ୍ ହୋଇଥିବା `HTML` ର `src` ଏବଂ `href` ଗୁଣ) ଏହି ଉପସର୍ଗ ସହିତ `.i18n/conf.yml` ରେ ବିନ୍ୟାସିତ ହୁଏ, URL ର ଉତ୍ସ ଭାଷା କୋଡ୍ ଅନୁବାଦର ଭାଷା କୋଡ୍ ଦ୍ୱାରା ବଦଳାଯିବ [| କୋଡ୍ ତାଲିକା](/i18/LANG_CODE) ) |

ଉଦାହରଣ ସ୍ୱରୂପ, ଆପଣଙ୍କର ସଂରଚନା ନିମ୍ନଲିଖିତ ଅଟେ:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ହେଉଛି ଏକ ଅଭିଧାନ, ଚାବି ହେଉଛି URL ଉପସର୍ଗକୁ ବଦଳାଇବାକୁ, ଏବଂ ମୂଲ୍ୟ ହେଉଛି ପ୍ରତିସ୍ଥାପନ ନିୟମ |

ଉପରୋକ୍ତ ନିୟମ `ko de uk>ru zh-TW>zh >en` ବଦଳାଇବାର ଅର୍ଥ ହେଉଛି `ko de` ନିଜ ନିଜ ଭାଷା କୋଡର ଚିତ୍ର ବ୍ୟବହାର କରେ, `zh-TW` ଏବଂ `zh` `zh` ର ଚିତ୍ର ବ୍ୟବହାର କରେ, `uk` `ru` ଛବି ବ୍ୟବହାର କରେ ଏବଂ ଅନ୍ୟ ଭାଷାଗୁଡ଼ିକ (ଯେପରିକି `ja` ) ଚିତ୍ର ବ୍ୟବହାର କରେ | ଡିଫଲ୍ଟ ଭାବରେ `en` ର |

ଉଦାହରଣ ସ୍ୱରୂପ, `MarkDown` ର ଫରାସୀ ( `fr` ) ଉତ୍ସ ଫାଇଲ୍ ନିମ୍ନଲିଖିତ ଅଟେ :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

ଅନୁବାଦିତ ଏବଂ ସୃଷ୍ଟି ହୋଇଥିବା ଇଂରାଜୀ ( `en` ) ଫାଇଲଟି ନିମ୍ନଲିଖିତ ଅଟେ :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

ଏଠାରେ, ଉତ୍ସ ଭାଷା କୋଡ଼ରେ ଥିବା `/en/` ଲକ୍ଷ୍ୟ ଭାଷାରେ `/zh/` ସହିତ ବଦଳାଯାଏ |

ଟିପନ୍ତୁ : URL ରେ ବଦଳାଯାଇଥିବା ପାଠ୍ୟର ଭାଷା କୋଡ୍ ପୂର୍ବରୁ ଏବଂ ପରେ `/` ହେବା ଜରୁରୀ!

> [!TIP]
> ଯଦି `- /` ରେ `url:` କୁ ବିନ୍ୟାସ କରାଯାଏ, କେବଳ ଆପେକ୍ଷିକ ପଥ ମେଳ ହେବ, କିନ୍ତୁ `//` ରୁ ଆରମ୍ଭ ହୋଇଥିବା URL ଗୁଡିକ ମେଳ ହେବ ନାହିଁ |
>
> ଯଦି ଏକ ଡୋମେନ୍ ନାମର କିଛି ଲିଙ୍କ୍ ବଦଳାଇବାକୁ ଚାହାଁନ୍ତି ଏବଂ କିଛି ବଦଳାଇବାକୁ ଚାହାଁନ୍ତି ନାହିଁ, ତେବେ ଆପଣ ଭିନ୍ନ କରିବାକୁ ଉପସର୍ଗ ବ୍ୟବହାର କରିପାରିବେ ଯେପରିକି `[x](//x.com/en/)` ଏବଂ `[x](https://x.com/en/)` |

### ଫାଇଲକୁ ଅଣଦେଖା କରନ୍ତୁ |

ଡିଫଲ୍ଟ ଭାବରେ, ଉତ୍ସ ଭାଷା ଡିରେକ୍ଟୋରୀରେ `.md` ଏବଂ `.yml` ରୁ ଆରମ୍ଭ ହୋଇଥିବା ସମସ୍ତ ଫାଇଲଗୁଡ଼ିକ ଅନୁବାଦ ହେବ |

ଯଦି ଆପଣ କିଛି ଫାଇଲ୍ କୁ ଅଣଦେଖା କରିବାକୁ ଚାହାଁନ୍ତି ଏବଂ ସେଗୁଡିକୁ ଅନୁବାଦ ନକରନ୍ତି (ଯେପରିକି ଅସମାପ୍ତ ଡ୍ରାଫ୍ଟଗୁଡିକ), ଆପଣ ଏହାକୁ `ignore` ଫିଲ୍ଡ ସହିତ ବିନ୍ୟାସ କରିପାରିବେ |

`ignore` `.gitignore` ଫାଇଲ୍ ବ୍ୟବହାର କରେ [globset](https://docs.rs/globset/latest/globset/#syntax)

ଉଦାହରଣ ସ୍ୱରୂପ, ଉପରୋକ୍ତ ବିନ୍ୟାସ ଫାଇଲରେ `_* ` ଅର୍ଥ ହେଉଛି `_` ରୁ ଆରମ୍ଭ ହୋଇଥିବା ଫାଇଲଗୁଡ଼ିକ ଅନୁବାଦ ହେବ ନାହିଁ |

## ଅନୁବାଦ ନିୟମ |

### ଅନୁବାଦ ସମ୍ପାଦକମାନେ ରେଖା ଯୋଡିବା କିମ୍ବା ବିଲୋପ କରିବା ଉଚିତ୍ ନୁହେଁ |

ଅନୁବାଦ ସମ୍ପାଦନାଯୋଗ୍ୟ | ମୂଳ ପାଠ୍ୟକୁ ପରିବର୍ତ୍ତନ କରନ୍ତୁ ଏବଂ ଏହାକୁ ପୁନର୍ବାର ମେସିନ୍-ଅନୁବାଦ କରନ୍ତୁ, ଅନୁବାଦରେ ମାନୁଆଲ୍ ପରିବର୍ତ୍ତନଗୁଡ଼ିକ ଓଭର୍ ରାଇଟ୍ ହେବ ନାହିଁ (ଯଦି ମୂଳ ପାଠ୍ୟର ଏହି ଅନୁଚ୍ଛେଦଟି ପରିବର୍ତ୍ତନ ହୋଇନାହିଁ) |

> [!WARN]
> ଅନୁବାଦର ରେଖା ଏବଂ ମୂଳ ପାଠ୍ୟ ମଧ୍ୟରେ ଗୋଟିଏ ପରେ ଗୋଟିଏ ଲେଖା ରହିବା ଆବଶ୍ୟକ | ତାହା ହେଉଛି, ଅନୁବାଦ ସଂକଳନ କରିବା ସମୟରେ ରେଖା ଯୋଡନ୍ତୁ କିମ୍ବା ବିଲୋପ କରନ୍ତୁ ନାହିଁ | ଅନ୍ୟଥା, ଏହା ଅନୁବାଦ ଏଡିଟିଂ କ୍ୟାଶରେ ଦ୍ୱନ୍ଦ୍ୱ ସୃଷ୍ଟି କରିବ |

ଯଦି କିଛି ଭୁଲ୍ ହୁଏ, ଦୟାକରି [ସମାଧାନ ପାଇଁ FAQ କୁ ଅନୁସରଣ କରନ୍ତୁ |](/i18/qa#H1)

### `YAML` ଅନୁବାଦ

କମାଣ୍ଡ୍ ଲାଇନ୍ ଟୁଲ୍ ଉତ୍ସ ଭାଷା ଫାଇଲ୍ ଡିରେକ୍ଟୋରୀରେ `.yml` ସହିତ ସମାପ୍ତ ହେଉଥିବା ସମସ୍ତ ଫାଇଲଗୁଡ଼ିକୁ ପାଇବ ଏବଂ ସେଗୁଡ଼ିକୁ ଅନୁବାଦ କରିବ |

* ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ ଫାଇଲନାମ ସଫିକ୍ସ ନିଶ୍ଚିତ ଭାବରେ `.yml` ( `.yaml` ନୁହେଁ) ହେବା ଆବଶ୍ୟକ |

ସାଧନ କେବଳ ଅଭିଧାନ ମୂଲ୍ୟଗୁଡ଼ିକୁ `.yml` ରେ ଅନୁବାଦ କରେ, ଅଭିଧାନ କି ନୁହେଁ |

ଉଦାହରଣ ସ୍ୱରୂପ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` ଭାବରେ ଅନୁବାଦ ହେବ |

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` ର ଅନୁବାଦକୁ ମଧ୍ୟ ମାନୁଆଲରେ ରୂପାନ୍ତର କରାଯାଇପାରେ (କିନ୍ତୁ ଅନୁବାଦରେ ଚାବି କିମ୍ବା ରେଖା ଯୋଡନ୍ତୁ କିମ୍ବା ବିଲୋପ କରନ୍ତୁ ନାହିଁ) |

`YAML` ଅନୁବାଦ ଉପରେ ଆଧାର କରି, ଆପଣ ବିଭିନ୍ନ ପ୍ରୋଗ୍ରାମିଂ ଭାଷା ପାଇଁ ସହଜରେ ଆନ୍ତର୍ଜାତୀୟ ସମାଧାନ ନିର୍ମାଣ କରିପାରିବେ |

## ଉନ୍ନତ ବ୍ୟବହାର

### ଅନୁବାଦ ଉପଡିରେକ୍ଟୋରୀ |

ଯେପର୍ଯ୍ୟନ୍ତ `.i18n/conf.yml` ସୃଷ୍ଟି ହୋଇଛି (ପ୍ରତ୍ୟେକ ଥର ଡେମୋ ପ୍ରୋଜେକ୍ଟ ଟେମ୍ପଲେଟରୁ ଆରମ୍ଭ କରିବାର ଆବଶ୍ୟକତା ନାହିଁ), `i18` ଭଲ କାମ କରିବ |

କମାଣ୍ଡ୍ ଲାଇନ୍ ଟୁଲ୍ ସମସ୍ତ ସବ୍ ଡିରେକ୍ଟୋରୀରେ `.i18n/conf.yml` ବିନ୍ୟାସ ଖୋଜିବ ଏବଂ ସେଗୁଡ଼ିକୁ ଅନୁବାଦ କରିବ |

ପ୍ରୋଜେକ୍ଟ ଯାହା [monorepo](//monorepo.tools) ବ୍ୟବହାର କରେ ଭାଷା ଫାଇଲଗୁଡ଼ିକୁ ସବ୍ ଡିରେକ୍ଟୋରୀରେ ବିଭକ୍ତ କରିପାରିବ |

![](https://p.3ti.site/1719910016.avif)

### କଷ୍ଟମ୍ ସଂସ୍ଥାପନ ଡିରେକ୍ଟୋରୀ |

ଏହା ଡିଫଲ୍ଟ ଭାବରେ `/usr/local/bin` କୁ ସଂସ୍ଥାପିତ ହେବ |

ଯଦି `/usr/local/bin` ଲେଖା ଅନୁମତି ନାହିଁ ତେବେ ଏହା `~/.bin` ରେ ସଂସ୍ଥାପିତ ହେବ |

ପରିବେଶ ଭେରିଏବଲ୍ `TO` ସେଟିଂ ସ୍ଥାପନ ଡିରେକ୍ଟୋରୀକୁ ବ୍ୟାଖ୍ୟା କରିପାରିବ, ଉଦାହରଣ ସ୍ୱରୂପ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```