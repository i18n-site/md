# ដំឡើងនិងប្រើប្រាស់

## Windows ដំបូងដំឡើង git bash

windows ប្រព័ន្ធ សូម [ចុចទីនេះដើម្បីទាញយក និងដំឡើង `git bash` ជាមុនសិន](https://git-scm.com/download/win) ។

ដំណើរការប្រតិបត្តិការជាបន្តបន្ទាប់ក្នុង `git bash` ។

## ដំឡើង

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### កំណត់រចនាសម្ព័ន្ធនិមិត្តសញ្ញាបកប្រែ

ទស្សនា [i18n.site/token](//i18n.site/token) ចុចដើម្បីចម្លងសញ្ញាសម្ងាត់

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

បង្កើត `~/.config/i18n.site.yml` បិទភ្ជាប់មាតិកាដែលបានចម្លងទៅក្នុងវា មាតិកាមានដូចខាងក្រោម៖

```
token: YOUR_API_TOKEN
```

លើសពីនេះ អ្នកត្រូវភ្ជាប់កាតឥណទានសម្រាប់ការទូទាត់ [i18n.site/payBill](//i18n.site/payBill) (មិនចាំបាច់បញ្ចូលទឹកប្រាក់ទេ គេហទំព័រនឹងកាត់ថ្លៃដោយស្វ័យប្រវត្តិទៅតាមការប្រើប្រាស់ [សូមមើលទំព័រដើមសម្រាប់តម្លៃ](/#price) )។

## ប្រើ

### គម្រោងសាកល្បង

សូមមើលគម្រោង `i18` [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

អ្នកប្រើប្រាស់នៅប្រទេសចិនអាចក្លូនបាន [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

បន្ទាប់ពីក្លូន សូមបញ្ចូលថតហើយរត់ `i18` ដើម្បីបញ្ចប់ការបកប្រែ។

### រចនាសម្ព័ន្ធថត

រចនាសម្ព័ន្ធថតឃ្លាំងគំរូមានដូចខាងក្រោម

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

ឯកសារសាកល្បងដែលបានបកប្រែនៅក្នុងថត `en` គ្រាន់តែជាឧទាហរណ៍ ហើយអាចលុបបាន។

### ដំណើរការការបកប្រែ

បញ្ចូលថតហើយរត់ `i18` ដើម្បីបកប្រែ។

បន្ថែមពីលើការបកប្រែ កម្មវិធីនេះក៏នឹងបង្កើតថត `.i18n/data` ផងដែរ សូមបន្ថែមវាទៅក្នុងឃ្លាំង។

បន្ទាប់ពីបកប្រែឯកសារថ្មី ឯកសារទិន្នន័យថ្មីនឹងត្រូវបានបង្កើតនៅក្នុងថតនេះ សូមចាំថាត្រូវបន្ថែម `git add . ` ។

## ឯកសារកំណត់រចនាសម្ព័ន្ធ

`.i18n/conf.yml` គឺជាឯកសារកំណត់រចនាសម្ព័ន្ធនៃឧបករណ៍បកប្រែបន្ទាត់ពាក្យបញ្ជា `i18`

ខ្លឹមសារមានដូចខាងក្រោម៖

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### ភាសាប្រភព &

នៅក្នុងឯកសារកំណត់រចនាសម្ព័ន្ធ អ្នកក្រោមបង្គាប់នៃ `fromTo` :

`en` គឺជាភាសាប្រភព `zh ja ko de fr` គឺជាភាសាគោលដៅនៃការបកប្រែ។

លេខកូដភាសាសូមមើល [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

ឧទាហរណ៍ ប្រសិនបើអ្នកចង់បកប្រែភាសាចិនទៅជាភាសាអង់គ្លេស សូមសរសេរឡើងវិញនូវបន្ទាត់នេះ `zh: en` ។

ប្រសិនបើអ្នកចង់បកប្រែទៅជាភាសាដែលគាំទ្រទាំងអស់ សូមទុកទទេបន្ទាប់ពី `:` ។ ឧទាហរណ៍

```
i18n:
  fromTo:
    en:
```

អ្នកអាចកំណត់រចនាសម្ព័ន្ធ `fromTo` ផ្សេងគ្នា : ថតរងផ្សេងៗគ្នា /

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

នៅក្នុងតារាងការកំណត់រចនាសម្ព័ន្ធនេះ ភាសាប្រភពនៃការបកប្រែកាតាឡុក `blog` គឺ `zh` ហើយភាសាប្រភពនៃការបកប្រែកាតាឡុក `blog/your_file_name.md` គឺ `ja` ។

### រូបភាព/តំណភ្ជាប់ពហុភាសា

នៅពេលដែល URLs នៅក្នុងរូបភាព និងតំណភ្ជាប់ក្នុង `replace:` និង `MarkDown` (និងគុណលក្ខណៈ `src` និង `href` នៃការបង្កប់ `HTML` ) ត្រូវបានកំណត់រចនាសម្ព័ន្ធក្នុង `.i18n/conf.yml` ជាមួយនឹងបុព្វបទនេះ កូដភាសាប្រភពនៅក្នុង URL នឹងត្រូវបានជំនួសដោយកូដភាសានៃការបកប្រែ ( [ភាសា បញ្ជីកូដ](/i18/LANG_CODE) ) ។

ឧទាហរណ៍ ការកំណត់រចនាសម្ព័ន្ធរបស់អ្នកមានដូចខាងក្រោម៖

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` គឺជាវចនានុក្រម គន្លឹះគឺជាបុព្វបទ URL ដែលត្រូវជំនួស ហើយតម្លៃគឺជាច្បាប់ជំនួស។

អត្ថន័យនៃការជំនួសច្បាប់ `ko de uk>ru zh-TW>zh >en` ខាងលើគឺថា `ko de` ប្រើរូបភាពនៃកូដភាសារបស់ខ្លួន, `zh-TW` និង `zh` ប្រើរូបភាពនៃ `zh` , `uk` ប្រើរូបភាពនៃ `ru` , និងភាសាផ្សេងទៀត (ដូចជា `ja` ) ប្រើរូបភាព នៃ `en` តាមលំនាំដើម។

ឧទាហរណ៍ ឯកសារប្រភពបារាំង ( `fr` ) នៃ `MarkDown` មានដូចខាងក្រោម :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

ឯកសារភាសាអង់គ្លេស ( `en` ) ដែលបានបកប្រែ និងបង្កើតមានដូចខាងក្រោម :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

នៅទីនេះ `/en/` នៅក្នុងកូដភាសាប្រភពត្រូវបានជំនួសដោយ `/zh/` នៅក្នុងភាសាគោលដៅ។

ចំណាំ : ត្រូវតែមាន `/` មុន និងក្រោយកូដភាសានៃអត្ថបទដែលបានជំនួសនៅក្នុង URL ។

> [!TIP]
> ប្រសិនបើ `- /` ត្រូវបានកំណត់រចនាសម្ព័ន្ធក្នុង `url:` នោះមានតែផ្លូវដែលទាក់ទងប៉ុណ្ណោះនឹងត្រូវបានផ្គូផ្គង ប៉ុន្តែ URL ដែលចាប់ផ្តើមដោយ `//` នឹងមិនត្រូវបានផ្គូផ្គងទេ។
>
> ប្រសិនបើតំណមួយចំនួននៃឈ្មោះដែនចង់ជំនួស ហើយខ្លះមិនចង់ជំនួស អ្នកអាចប្រើបុព្វបទផ្សេងៗដូចជា `[x](//x.com/en/)` និង `[x](https://x.com/en/)` ដើម្បីសម្គាល់ពួកវា។

### មិនអើពើឯកសារ

តាមលំនាំដើម ឯកសារទាំងអស់ដែលចាប់ផ្តើមដោយ `.md` និង `.yml` នៅក្នុងថតភាសាប្រភពនឹងត្រូវបានបកប្រែ។

ប្រសិនបើអ្នកចង់មិនអើពើឯកសារជាក់លាក់ ហើយមិនបកប្រែវា (ដូចជាសេចក្តីព្រាងដែលមិនទាន់បានបញ្ចប់) អ្នកអាចកំណត់រចនាសម្ព័ន្ធវាដោយប្រើវាល `ignore` ។

`ignore` ប្រើវាក្យសម្ព័ន្ធ `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

ឧទាហរណ៍ `_* ` នៅក្នុងឯកសារកំណត់រចនាសម្ព័ន្ធខាងលើមានន័យថាឯកសារដែលចាប់ផ្តើមដោយ `_` នឹងមិនត្រូវបានបកប្រែទេ។

## ច្បាប់នៃការបកប្រែ

### អ្នកកែសម្រួលការបកប្រែមិនគួរបន្ថែម ឬលុបបន្ទាត់ទេ។

ការបកប្រែអាចកែសម្រួលបាន។ កែប្រែអត្ថបទដើម ហើយបកប្រែដោយម៉ាស៊ីនម្តងទៀត ការកែប្រែដោយដៃចំពោះការបកប្រែនឹងមិនត្រូវបានសរសេរជាន់ពីលើទេ (ប្រសិនបើកថាខណ្ឌនៃអត្ថបទដើមនេះមិនត្រូវបានកែប្រែ)។

> [!WARN]
> ត្រូវតែមានការឆ្លើយឆ្លងមួយទល់មួយរវាងបន្ទាត់នៃការបកប្រែ និងអត្ថបទដើម។ នោះគឺកុំបន្ថែម ឬលុបបន្ទាត់នៅពេលចងក្រងការបកប្រែ។ បើមិនដូច្នោះទេ វានឹងធ្វើឱ្យមានការភ័ន្តច្រឡំនៅក្នុងឃ្លាំងសម្ងាត់កែសម្រួលការបកប្រែ។

ប្រសិនបើមានអ្វីមួយខុស សូមយោងទៅ [FAQ សម្រាប់ដំណោះស្រាយ។](/i18/qa#H1)

### `YAML` ការបកប្រែ

ឧបករណ៍បន្ទាត់ពាក្យបញ្ជានឹងរកឃើញឯកសារទាំងអស់ដែលបញ្ចប់ដោយ `.yml` នៅក្នុងថតឯកសារភាសាប្រភព ហើយបកប្រែពួកវា។

* ចំណាំថា បច្ច័យឈ្មោះឯកសារត្រូវតែជា `.yml` (មិនមែន `.yaml` )។

ឧបករណ៍នេះគ្រាន់តែបកប្រែតម្លៃវចនានុក្រមក្នុង `.yml` ប៉ុណ្ណោះ មិនមែនគ្រាប់ចុចវចនានុក្រមទេ។

ឧទាហរណ៍ `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

នឹងត្រូវបានបកប្រែជា `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

ការបកប្រែ `YAML` ក៏អាចត្រូវបានកែប្រែដោយដៃ (ប៉ុន្តែកុំបន្ថែម ឬលុបគ្រាប់ចុច ឬបន្ទាត់ក្នុងការបកប្រែ)។

ដោយផ្អែកលើការបកប្រែ `YAML` អ្នកអាចបង្កើតដំណោះស្រាយអន្តរជាតិយ៉ាងងាយស្រួលសម្រាប់ភាសាសរសេរកម្មវិធីផ្សេងៗ។

## ការប្រើប្រាស់កម្រិតខ្ពស់

### ថតរងការបកប្រែ

ដរាបណា `.i18n/conf.yml` ត្រូវបានបង្កើត (មិនចាំបាច់ចាប់ផ្តើមពីគំរូគម្រោងសាកល្បងរាល់ពេលនោះទេ) `i18` នឹងដំណើរការល្អ។

ឧបករណ៍បន្ទាត់ពាក្យបញ្ជានឹងរកឃើញ `.i18n/conf.yml` ការកំណត់នៅក្នុងថតរងទាំងអស់ ហើយបកប្រែពួកវា។

គម្រោងដែលប្រើស្ថាបត្យកម្ម [monorepo](//monorepo.tools) អាចបំបែកឯកសារភាសាទៅជាថតរង។

![](https://p.3ti.site/1719910016.avif)

### ថតដំឡើងផ្ទាល់ខ្លួន

វានឹងត្រូវបានដំឡើងទៅ `/usr/local/bin` តាមលំនាំដើម។

ប្រសិនបើ `/usr/local/bin` មិនមានការអនុញ្ញាតក្នុងការសរសេរទេ វានឹងត្រូវបានដំឡើងទៅ `~/.bin` ។

ការកំណត់បរិស្ថានអថេរ `TO` អាចកំណត់ថតដំឡើងឧទាហរណ៍ :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```