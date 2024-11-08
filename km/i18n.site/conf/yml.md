# .i18n/conf.yml

ឯកសារកំណត់រចនាសម្ព័ន្ធសម្រាប់ `i18n.site` គឺ `.i18n/conf.yml` ហើយខ្លឹមសារមានដូចខាងក្រោម :

```yaml
i18n:
  fromTo:
    en:
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Blog
addon:
  - i18n.addon/toc
```

ក្នុងចំណោមនោះ ធាតុកំណត់ពី `upload` ទៅ `ext:` មានន័យថាមានតែ `.md` ប៉ុណ្ណោះនឹងត្រូវបានផ្ទុកឡើងនៅពេលបោះផ្សាយ។

## កំពូល navigation nav

`nav:` ជម្រើសកំណត់រចនាសម្ព័ន្ធ ដែលត្រូវគ្នានឹងម៉ឺនុយរុករកនៅផ្នែកខាងលើនៃគេហទំព័រ។

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ក្នុងចំណោមពួកគេ `i18n: home` ត្រូវគ្នានឹង `home: Home` ក្នុង `en/i18n.yml` (ដែល `en` ជាភាសាប្រភពនៃការបកប្រែគម្រោង)។

មាតិកា `en/i18n.yml` គឺជាអត្ថបទដែលបង្ហាញក្នុងម៉ឺនុយរុករក ដែលនឹងត្រូវបានបកប្រែយោងទៅតាម `fromTo` ក្នុងការកំណត់រចនាសម្ព័ន្ធ ឧទាហរណ៍ បកប្រែទៅជា `zh/i18n.yml` ។

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

បន្ទាប់ពីការបកប្រែត្រូវបានបញ្ចប់ អ្នកអាចកែប្រែតម្លៃនៃការបកប្រែ `yml` ប៉ុន្តែកុំបន្ថែម ឬលុបគន្លឹះនៃការបកប្រែ `yml` ។

### 0 គំរូឯកសារ `use: Toc` ជាមួយគ្រោង

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` មានន័យថាការបង្ហាញដោយប្រើគំរូ `Toc` ដែលកំពុងបង្ហាញគំរូ `Markdown` តែមួយ។

`TOC` គឺជាអក្សរកាត់នៃ `Table of Contents` នៅពេលដែលគំរូនេះត្រូវបានបង្ហាញ គ្រោងនៃឯកសារ `Markdown` នេះនឹងត្រូវបានបង្ហាញនៅក្នុងរបារចំហៀង។

`url:` តំណាងឱ្យផ្លូវឯកសារនៃ `Markdown` ( `/` ត្រូវគ្នាទៅនឹងថតឫស `/README.md` ឈ្មោះឯកសារនេះទាមទារបុព្វបទអក្សរធំ និងបច្ច័យអក្សរតូច)។

### 0 គំរូឯកសារ `use: Md` ដោយគ្មានគ្រោង

គំរូ `Md` និងគំរូ `Toc` គឺដូចគ្នា ហើយទាំងពីរត្រូវបានប្រើដើម្បីបង្ហាញឯកសារ `Markdown` តែមួយ។ ប៉ុន្តែគំរូ `Md` មិនបង្ហាញគ្រោងនៅក្នុងរបារចំហៀងទេ។

អ្នកអាចកែប្រែ `use: Toc` ក្នុងការកំណត់ខាងលើទៅជា `use: Md` ដំណើរការ `i18n.site` ក្នុងថត `md` ម្តងទៀត ហើយបន្ទាប់មកចូលទៅកាន់ URL មើលជាមុននៃការអភិវឌ្ឍន៍ ដើម្បីសង្កេតមើលការផ្លាស់ប្តូរនៅលើគេហទំព័រ។

### `use: Blog` គំរូប្លុក

គំរូប្លក់បង្ហាញបញ្ជីអត្ថបទ (ចំណងជើង និងអរូបី) តាមលំដាប់លំដោយនៃពេលវេលាបោះពុម្ព។

[→ ចុចទីនេះដើម្បីស្វែងយល់អំពីការកំណត់រចនាសម្ព័ន្ធជាក់លាក់](/i18n.site/conf/blog)

### `use: Doc`

នៅក្នុងឯកសារកំណត់រចនាសម្ព័ន្ធ៖

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

ចង្អុលបង្ហាញការប្រើប្រាស់ `Doc` សម្រាប់ការបង្ហាញគំរូ។

គំរូ `Doc` គាំទ្រការរួមបញ្ចូលច្រើន `MarkDown` ដើម្បីបង្កើតគ្រោងឯកសារសម្រាប់គម្រោងតែមួយ ឬច្រើន។

#### គម្រោងច្រើន និងឯកសារច្រើន។

ការកំណត់រចនាសម្ព័ន្ធ `.i18n/conf.yml` ក្នុង `i18n:doc` គឺជារបៀបបង្ហាញឯកសារច្រើនគម្រោង។

នៅទីនេះ `menu: NB demo1,demo2` មានន័យថាការប្រើគំរូ `NB` ដើម្បីបង្ហាញម៉ឺនុយទម្លាក់ចុះ។

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` ដែលជាអក្សរកាត់នៃ `Name Breif` មានន័យថាម៉ឺនុយទម្លាក់ចុះអាចបង្ហាញឈ្មោះ និងពាក្យស្លោករបស់គម្រោង។

`NB` ត្រូវបានបន្តដោយប៉ារ៉ាម៉ែត្រ `demo1,demo2` ដែលបានបញ្ជូនទៅវា។

ចំណាំ : ** មិនគួរមានចន្លោះ ** មុន និងក្រោយសញ្ញាក្បៀស `,` ក្នុង `demo1,demo2` ។

ឯកសារលិបិក្រមថតដែលត្រូវគ្នាសម្រាប់ប៉ារ៉ាម៉ែត្រខាងលើគឺ៖

* `en/demo1/TOC`
* `en/demo2/TOC`

#### គម្រោងតែមួយ ឯកសារច្រើន។

ប្រសិនបើអ្នកមានគម្រោងតែមួយ អ្នកអាចកំណត់រចនាសម្ព័ន្ធវាដូចខាងក្រោម។

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> គម្រោងតែមួយដែលមានឯកសារច្រើនមិនគាំទ្រការកំណត់ `url` ជាផ្លូវ root `/` ទេ។
> ប្រសិនបើ __conf.yml → nav:__ គ្មានផ្លូវ root ត្រូវបានកំណត់ទេ នៅពេលចូលទៅកាន់គេហទំព័រដើម វានឹងត្រូវបានសរសេរឡើងវិញដោយស្វ័យប្រវត្តិទៅ URL ដំបូងក្រោម `nav:` ការកំណត់រចនាសម្ព័ន្ធ។
> ការរចនានេះគឺដើម្បីបែងចែកឯកសារគម្រោង ប្លក់ និងមាតិកាផ្សេងទៀតឱ្យកាន់តែច្បាស់តាមរយៈថត។
> វាត្រូវបានណែនាំឱ្យប្រើឯកសារតែមួយ និងទំព័រតែមួយជាទំព័រដើម។

> [!TIP]
> ប្រសិនបើ `url` មិនត្រូវបានសរសេរទេ `url` លំនាំដើមទៅជាតម្លៃ `i18n` ។ ច្បាប់នេះក៏មានប្រសិទ្ធភាពសម្រាប់គំរូផ្សេងទៀតដែរ។

#### តារាងមាតិកា TOC

ប្រសិនបើគំរូ `use: Doc` ត្រូវបានបើកនៅក្នុងការកំណត់ សូមបើកកម្មវិធីជំនួយ `i18n.addon/toc` ក្នុង `.i18n/conf.yml` ការកំណត់មានដូចខាងក្រោម :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` នឹងដំឡើង និងប្រតិបត្តិកម្មវិធីជំនួយនេះដោយស្វ័យប្រវត្តិ អាន `TOC` ឯកសារលិបិក្រមថត និងបង្កើត `json` គ្រោងថត។

ប្រសិនបើវាជាគម្រោងតែមួយដែលមានឯកសារច្រើន ថតឫស `TOC` គឺជាថតដែលត្រូវគ្នានឹង `url:` នៅក្នុងថតភាសាប្រភព ឧទាហរណ៍ ប្រសិនបើភាសាប្រភពជាភាសាចិន៖ ឯកសារដែលត្រូវគ្នានឹង `url: flashduty` គឺ `zh/flashduty/TOC` ។

ប្រសិនបើវាជាគម្រោងច្រើន និងឯកសារច្រើន វាមិនចាំបាច់កំណត់រចនាសម្ព័ន្ធ `url:` ទេ។ ថតឫសនៃ `TOC` គឺជាថតដែលត្រូវគ្នានឹងតម្លៃនៃ `i18n` ។

##### ការពន្យល់លម្អិតនៃខ្លឹមសារ

`en/blog/TOC` ខ្លឹមសារដូចតទៅ :

```
README.md

news/README.md
  news/begin.md
```

##### ប្រើការចូលបន្ទាត់ដើម្បីបង្ហាញពីកម្រិត

`README.md` ក្នុងជួរទីមួយនៃ `en/blog/TOC` ខាងលើត្រូវគ្នានឹង `i18n.site` ក្នុងរូបភាពខាងក្រោម ដែលជាឈ្មោះគម្រោង។

បន្ទាត់ពីរបន្ទាប់គឺដូចបានបង្ហាញក្នុងរូបថតអេក្រង់ខាងក្រោម។

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ត្រូវនឹង `News` ,
`news/begin.md` ត្រូវនឹង `Our Product is Online !`

ឯកសារ `TOC` ត្រូវបានចូលបន្ទាត់ដើម្បីបង្ហាញពីទំនាក់ទំនងតាមឋានានុក្រមនៃគ្រោង គាំទ្រការចូលបន្ទាត់ច្រើនកម្រិត និងមតិយោបល់លើបន្ទាត់ដែលចាប់ផ្តើមដោយ `# `

##### កម្រិតមេសរសេរតែចំណងជើង មិនមែនខ្លឹមសារទេ។

នៅពេលមានការចូលបន្ទាត់ច្រើនកម្រិត កម្រិតមេសរសេរតែចំណងជើងប៉ុណ្ណោះ មិនមែនខ្លឹមសារទេ។ បើមិនដូច្នេះទេ ការវាយអក្សរនឹងរញ៉េរញ៉ៃ។

##### គម្រោង README.md

មាតិកាអាចត្រូវបានសរសេរនៅក្នុងធាតុ `README.md` ដូចជា `en/demo2/README.md` ។

ចំណាំថាខ្លឹមសារនៃឯកសារនេះមិនបង្ហាញតារាងមាតិកាទេ ដូច្នេះវាត្រូវបានណែនាំឱ្យកំណត់ប្រវែង និងសរសេរការណែនាំខ្លីៗ។

###### ពាក្យស្លោកគម្រោង

អ្នកអាចមើលឃើញថា `Deme Two` មានស្លាកគម្រោងរបស់វានៅខាងក្រោមម៉ឺនុយទម្លាក់ចុះ និងឈ្មោះគម្រោងគ្រោង `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

វាត្រូវនឹងជួរទីមួយនៃ `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

ខ្លឹមសារបន្ទាប់ពីសញ្ញាដំបូង `:` នៃចំណងជើងកម្រិតទីមួយនៃគម្រោង `README.md` នឹងត្រូវបានចាត់ទុកជាពាក្យស្លោកគម្រោង។

អ្នកប្រើពីប្រទេសចិន ជប៉ុន និងកូរ៉េ សូមចំណាំថា អ្នកគួរប្រើសញ្ញាពាក់កណ្តាលទទឹង `:` ជំនួសឱ្យសញ្ញាពេញទទឹង។

##### តើធ្វើដូចម្តេចដើម្បីផ្លាស់ទី TOC ភាគច្រើន?

ឯកសារ `TOC` ត្រូវតែដាក់ក្នុងថតឯកសារនៃភាសាប្រភព។

ឧទាហរណ៍ ប្រសិនបើភាសាប្រភពជាភាសាចិន នោះ `TOC` ខាងលើគឺ `zh/blog/TOC` ។

ប្រសិនបើភាសាប្រភពត្រូវបានកែប្រែ អ្នកត្រូវបាច់ផ្លាស់ទីឯកសារ `TOC` នៃភាសាជាក់លាក់មួយនៅក្នុងគម្រោងទៅជាភាសាផ្សេង។

អ្នកអាចយោងទៅពាក្យបញ្ជាខាងក្រោម៖

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

សូមកែប្រែ `en/` និង `zh/` ក្នុងពាក្យបញ្ជាខាងលើទៅជាកូដភាសារបស់អ្នក។

### ការផ្ទុកលំនាំដើមដោយគ្មានផ្លូវកំណត់រចនាសម្ព័ន្ធ

សម្រាប់ផ្លូវជាក់លាក់មួយដែលត្រូវបានចូលប្រើ ប្រសិនបើបុព្វបទផ្លូវមិនត្រូវបានកំណត់ក្នុង `nav:` នោះឯកសារ `MarkDown` ដែលត្រូវគ្នានឹងផ្លូវនឹងត្រូវបានផ្ទុកតាមលំនាំដើម ហើយបង្ហាញដោយប្រើគំរូ `Md` ។

ឧទាហរណ៍ ប្រសិនបើ `/test` ត្រូវបានចូលប្រើ ហើយ `nav:` ត្រូវបានកំណត់រចនាសម្ព័ន្ធដោយគ្មានបុព្វបទនៃផ្លូវនេះ ហើយភាសារុករកបច្ចុប្បន្នគឺភាសាអង់គ្លេស (កូដ `en` ) `/en/test.md` នឹងត្រូវបានផ្ទុកតាមលំនាំដើម និងបង្ហាញដោយប្រើគំរូ `Md` ។

ប្រសិនបើ `/en/test.md` ឯកសារនេះមិនមានទេ ទំព័រ `404` លំនាំដើមនឹងត្រូវបានបង្ហាញ។

<img src="//p.3ti.site/1721184299.avif" style="width:360px">