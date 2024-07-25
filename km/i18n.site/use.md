# ដំឡើង &

## និមិត្តសញ្ញាកំណត់រចនាសម្ព័ន្ធ

`i18n.site` ឧបករណ៍បកប្រែ `i18` ត្រូវបានបង្កប់ សូម [ចុចទីនេះ ដើម្បីយោងទៅឯកសារ `i18` ដើម្បីកំណត់រចនាសម្ព័ន្ធនិមិត្តសញ្ញាចូលប្រើ](/i18/use) ។

## ដំឡើង

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## គម្រោងសាកល្បង

តោះចាប់ផ្តើមជាមួយគម្រោងសាកល្បង ហើយរៀនពីរបៀបប្រើប្រាស់ `i18n.site`

ដំបូងយើងក្លូនឃ្លាំងសាកល្បង ហើយដំណើរការពាក្យបញ្ជាដូចខាងក្រោម៖

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

អ្នកប្រើប្រាស់នៅចិនដីគោកអាច៖

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` ឈ្មោះ​ថត​នៃ​កូដ​មូលដ្ឋាន​ត្រូវ​តែ​ជា `md` ដើម្បី​សម្រួល​ដល់​ការ​មើល​ជា​មុន​ក្នុង​មូលដ្ឋាន​ជាមួយ `docker` ។

### បកប្រែ

`zh` ដំបូង `i18n.site` `en` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

បន្ទាប់ពីដំណើរការ ការបកប្រែ និងឯកសារឃ្លាំងសម្ងាត់នឹងត្រូវបានបង្កើត សូមចងចាំថាត្រូវបន្ថែមពួកវាទៅក្នុងឃ្លាំង `git add . ` នៅក្នុងថត `md`

### ការមើលជាមុនក្នុងស្រុក

[orbstack](https://orbstack.dev) `docker` `MAC` `docker`

បន្ទាប់​មក សូម​បញ្ចូល​បញ្ជី​ឈ្មោះ `docker` ហើយ​រត់ `./up.sh` ហើយ​បន្ទាប់​មក​ចូល​មើល [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ប្រកាសមាតិកា

`i18n.site` ទទួលយកស្ថាបត្យកម្ម [កម្មវិធីមួយទំព័រ](https://developer.mozilla.org/docs/Glossary/SPA) ហើយទំព័រចូលគេហទំព័រ និងខ្លឹមសារគេហទំព័រត្រូវបានដាក់ឱ្យប្រើប្រាស់ដោយឯករាជ្យ។

បន្ទាប់ពីដំណើរការការបកប្រែខាងលើ ថត `htm` និង `v` នឹងត្រូវបានបង្កើតនៅក្នុងថត `md/out/dev`

នៅទីនេះ `dev` បង្ហាញថាវាត្រូវបានបង្កើតឡើងដោយផ្អែកលើឯកសារ `.i18n/htm/dev.yml` ។

ក្រោម : `dev`

`htm` នៅក្រោមថតគឺជាទំព័រចូលគេហទំព័រ។

`v` ថតមានមាតិកាគេហទំព័រដែលមានលេខកំណែ។

ការមើលជាមុនក្នុងតំបន់នឹងចម្លងឯកសារទាំងអស់ទៅថតឯកសារ `out/dev/v/0.1.0`

សម្រាប់ការចេញផ្សាយជាផ្លូវការ ឯកសារដែលបានផ្លាស់ប្តូរនឹងត្រូវបានចម្លងទៅថតលេខកំណែថ្មី។

#### ប្រើ -c ដើម្បីបញ្ជាក់ឯកសារកំណត់រចនាសម្ព័ន្ធ

ឯកសារកំណត់រចនាសម្ព័ន្ធផ្សេងគ្នានឹងបង្កើតថតដែលត្រូវគ្នានៅក្រោមថត `out`

ឧទាហរណ៍ `.i18n/htm/ol.yml` នឹង​បង្កើត​ថត `out/ol` ។

`dev.yml` និង `ol.yml` គឺជាការកំណត់លំនាំដើម។

`dev` គឺជាអក្សរកាត់របស់ `development` ដែលតំណាងឱ្យបរិស្ថានអភិវឌ្ឍន៍ ត្រូវបានប្រើសម្រាប់ការមើលជាមុនក្នុងមូលដ្ឋាន ហើយក៏ជាឯកសារកំណត់រចនាសម្ព័ន្ធលំនាំដើមផងដែរ។
`ol` គឺជាអក្សរកាត់របស់ `online` ដែលតំណាងឱ្យបរិយាកាសអនឡាញ ត្រូវបានប្រើសម្រាប់ការចេញផ្សាយជាផ្លូវការ ហើយក៏ជាឯកសារកំណត់រចនាសម្ព័ន្ធលំនាំដើមនៅពេលបោះពុម្ពទៅ `npm` ដោយប្រើប៉ារ៉ាម៉ែត្របន្ទាត់ពាក្យបញ្ជា `-n` .

អ្នកក៏អាចបង្កើតឯកសារកំណត់រចនាសម្ព័ន្ធផ្សេងទៀត ប្រើ `--htm_conf` នៅលើបន្ទាត់ពាក្យបញ្ជា ដើម្បីបញ្ជាក់ឈ្មោះឯកសារកំណត់រចនាសម្ព័ន្ធ៖

ឧទាហរណ៍:
```
i18n.site --htm_conf yourConfig --save
```

នៅទីនេះ `--save` បង្ហាញពីលេខកំណែកំណែអាប់ដេត។

#### <a rel=id href="#npm" id="npm"></a> ផ្សព្វផ្សាយមាតិកាទៅ npmjs.com

ការបោះពុម្ពខ្លឹមសារទៅ [npmjs.com](//npmjs.com) គឺជាដំណោះស្រាយលំនាំដើមដែលបានណែនាំ (សូមមើល [Front-end High Availability](/i18n.site/feature#ha) )។

##### npm login &

ដំឡើង `nodejs` ប្រើ `npm login` ដើម្បីចូល។

កែសម្រួល `md/.i18n/htm/ol.yml` ប្តូរ `i18n.site` in `v: //unpkg.com/i18n.site` ទៅជារបស់អ្នក `npm` ឈ្មោះកញ្ចប់.

គ្រាន់តែប្រើឈ្មោះកញ្ចប់ដែលមិនបានកាន់កាប់នៅលើ [npmjs.com](//npmjs.com)

នៅពេលបោះពុម្ពដោយផ្អែកលើកញ្ចប់ `npm` **ត្រូវប្រាកដថាប្រើ `//unpkg.com/`** ជាបុព្វបទនៃតម្លៃ `v:` ពេលវេលាឃ្លាំងសម្ងាត់ `i18n.site` នៅក្រោមផ្លូវបុព្វបទនេះ `/.v` ត្រូវបានធ្វើឱ្យប្រសើរជាពិសេសដើម្បីបើកការមើលការចេញផ្សាយថ្មីៗទាន់ពេលវេលា។

ដំណើរការ `i18n.site --npm` ឬ `i18n.site -n` នៅក្នុងថត `md`

ប្រសិន​បើ​អ្នក​ប្រើ `~/.npmrc` ​ការ​រួម​បញ្ចូល​គ្នា​ជា​បន្ត​ដើម្បី​បោះ​ពុម្ព​ផ្សាយ នោះ​មិន​ចាំបាច់​ដំឡើង​វា​ទេ `nodejs`

ប្រសិនបើអ្នក **`.i18n/v/ol`** ឈ្មោះកញ្ចប់ក្នុង `v:` នៅក្នុង `ol.yml`

##### ម៉ាស៊ីនមេប្រូកស៊ីបោះពុម្ពដោយ npm

ប្រសិនបើអ្នកប្រើប្រាស់នៅក្នុងប្រទេសចិនដីគោកជួបប្រទះបញ្ហាបណ្តាញ ហើយមិនអាចបោះពុម្ពកញ្ចប់ `npm` ពួកគេអាចកំណត់អថេរបរិស្ថាន `https_proxy` ដើម្បីកំណត់រចនាសម្ព័ន្ធម៉ាស៊ីនមេប្រូកស៊ី។

ដោយសន្មតថាច្រកម៉ាស៊ីនមេប្រូកស៊ីរបស់អ្នកគឺ `7890` អ្នកអាចសរសេរ៖

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### មាតិកាដែលបង្ហោះដោយខ្លួនឯង។

ប្រសិនបើ​អ្នក​ចង់​ធ្វើ​ជា​ម្ចាស់​មាតិកា​ដោយ​ខ្លួន​ឯង ជា​ដំបូង សូម​កែសម្រួល `md/.i18n/htm/ol.yml` និង​ប្តូរ `v: //unpkg.com/i18n.site` ទៅ​បុព្វបទ URL របស់​អ្នក​ដូចជា `v: //i18n-v.xxx.com` .

បញ្ចូល `md`

```
i18n.site --htm_conf ol --save
```

ឬអក្សរកាត់

```
i18n.site -c ol -s
```

បន្ទាប់មកកំណត់រចនាសម្ព័ន្ធមាតិកានៅក្នុងថត `md/out/ol/v` ទៅផ្លូវបុព្វបទ URL ដែលកំណត់ក្នុង `v:`

ជាចុងក្រោយ **`1s` រចនាសម្ព័ន្ធពេលវេលាឃ្លាំងសម្ងាត់នៃផ្លូវដែលបញ្ចប់ដោយ `/.v`**

ពេលវេលាឃ្លាំងសម្ងាត់សម្រាប់ផ្លូវផ្សេងទៀតអាចត្រូវបានកំណត់ទៅមួយឆ្នាំ ឬច្រើនជាងនេះ ដើម្បីកាត់បន្ថយសំណើដែលមិនចាំបាច់។

##### បង្ហោះមាតិកាទៅ s3

ចំពោះមាតិកាដែលបង្ហោះដោយខ្លួនឯង បន្ថែមពីលើការប្រើប្រាស់ម៉ាស៊ីន `CDN` របស់អ្នក + ទូទៅមួយទៀតគឺត្រូវប្រើ `S3`

អ្នកអាចប្រើ [rclone](https://rclone.org) ចូល `S3` ម៉ាស៊ីនមេ បន្ទាប់មកយោង និងកែប្រែស្គ្រីបខាងក្រោម ហើយគ្រាន់តែចម្លងការផ្លាស់ប្តូរបន្ថែមទៅ `S3` រាល់ពេលដែលអ្នកបោះពុម្ព។

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

ចងចាំថាត្រូវកំណត់រចនាសម្ព័ន្ធ `CDN` ដូច្នេះពេលវេលាឃ្លាំងសម្ងាត់នៃផ្លូវដែលបញ្ចប់ដោយ `/.v` គឺ `1s` បើមិនដូច្នេះទេអ្នកនឹងមិនអាចចូលប្រើមាតិកាដែលបានចេញផ្សាយថ្មីភ្លាមៗបានទេ។

### គេហទំព័រផ្សព្វផ្សាយ

គេហទំព័រអាចប្រើប្រាស់បានគ្រប់ទីកន្លែង [github page](https://pages.github.com) និង [cloudflare page](https://pages.cloudflare.com) គឺជាជម្រើសដ៏ល្អ។

ដោយសារគេហទំព័រទទួលយកស្ថាបត្យកម្មនៃ [កម្មវិធីទំព័រតែមួយ](https://developer.mozilla.org/docs/Glossary/SPA) សូមចងចាំ `index.html` ត្រូវសរសេរឡើងវិញនូវផ្លូវ URL ដែលមិនមាន `. `

ទំព័រចូលគេហទំព័រត្រូវដាក់ឱ្យប្រើតែម្តងប៉ុណ្ណោះ ហើយមិនចាំបាច់ប្រើទំព័រចូលគេហទំព័រឡើងវិញសម្រាប់ការធ្វើបច្ចុប្បន្នភាពមាតិកាជាបន្តបន្ទាប់នោះទេ។

#### ដាក់ពង្រាយនៅលើទំព័រ github

ជាដំបូង [ចុចទីនេះ github ដើម្បីបង្កើតអង្គការ](https://github.com/account/organizations/new?plan=free) `i18n-demo`

បន្ទាប់មកបង្កើតឃ្លាំងនៅក្រោមអង្គការនេះ `i18n-demo.github.io` (សូមជំនួស `i18n-demo` ដោយឈ្មោះស្ថាប័នដែលអ្នកបានបង្កើត)៖

<img alt="" src="https://p.3ti.site/1721098657.avif">

ពេលបោះពុម្ពខ្លឹមសារក្នុងអត្ថបទមុន វាត្រូវបាន : `out/ol/htm`

```
ln -s index.html 404.html
```


ដោយសារតែ `github page` មិនគាំទ្រការសរសេរផ្លូវ URL ឡើងវិញ ដូច្នេះ `404.html` ត្រូវបានប្រើជំនួស

បន្ទាប់មកដំណើរការពាក្យបញ្ជា `i18n-demo/i18n-demo.github.io.git` : ថត `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

បន្ទាប់​ពី​ចុច​លេខ​កូដ​ហើយ សូម​រង់ចាំ​ការ​ដាក់​ពង្រាយ `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

សម្រាប់ទំព័រសាកល្បង សូមមើល៖

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ដាក់ពង្រាយនៅលើទំព័រ cloudflare

[cloudflare page](//pages.cloudflare.com) បើប្រៀបធៀបជាមួយ `github page` វាផ្តល់នូវការសរសេរឡើងវិញនូវផ្លូវ និងមានភាពរួសរាយរាក់ទាក់ចំពោះប្រទេសចិនដីគោក ហើយវាត្រូវបានណែនាំអោយប្រើ។

ការដាក់ពង្រាយ `cloudflare page` ធម្មតាផ្អែកលើការដាក់ពង្រាយ `github page` ខាងលើ។

បង្កើតគម្រោង និងចងឃ្លាំងខាងលើ `i18n-demo.github.io`

ដំណើរការត្រូវបានបង្ហាញក្នុងរូបភាពខាងក្រោម៖
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` ចុច `Add Account`

ប្រសិនបើអ្នកបានចងឃ្លាំងរបស់អង្គការមួយផ្សេងទៀត អ្នកប្រហែលជាត្រូវចុច `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

បន្ទាប់ជ្រើសរើស `i18n-demo.github.io` ឃ្លាំង បន្ទាប់មកចុច `Begin setup` ហើយប្រើតម្លៃលំនាំដើមសម្រាប់ជំហានបន្តបន្ទាប់ទៀត។

<img alt="" src="https://p.3ti.site/1721118490.avif">

បន្ទាប់ពីការចងជាលើកដំបូង អ្នកត្រូវរង់ចាំពីរបីនាទី មុនពេលអ្នកអាចចូលប្រើវាបាន។

បន្ទាប់​ពី​ការ​ដាក់​ឱ្យ​ប្រើ អ្នក​អាច​ចង​ឈ្មោះ​ដែន​ផ្ទាល់​ខ្លួន។

<img alt="" src="https://p.3ti.site/1721119459.avif">

បន្ទាប់​ពី​ចង​ឈ្មោះ​ដែន​ផ្ទាល់​ខ្លួន​ហើយ សូម​ចូល​ទៅ​កាន់​ឈ្មោះ​ដែន​ដើម្បី​កំណត់​រចនា​សម្ព័ន្ធ​ការ​សរសេរ​ផ្លូវ​នៃ​កម្មវិធី​ទំព័រ​តែ​មួយ​ដូច​បង្ហាញ​ខាង​ក្រោម៖

<img alt="" src="https://p.3ti.site/1721119320.avif">

ច្បាប់ក្នុងរូបភាពខាងលើមានដូចតទៅ សូមជំនួស `i18n.site`

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

លើសពីនេះ សូមកំណត់រចនាសម្ព័ន្ធច្បាប់នៃឃ្លាំងសម្ងាត់ ដូចដែលបានបង្ហាញខាងក្រោម ហើយកំណត់រយៈពេលឃ្លាំងសម្ងាត់ទៅមួយខែ។

<img alt="" src="https://p.3ti.site/1721125111.avif">

សូមប្តូរឈ្មោះដែនដែលត្រូវគ្នាក្នុងជំហានទីពីរក្នុងរូបភាពខាងលើទៅជាឈ្មោះដែនដែលអ្នកចង។

#### បង្កើនប្រសិទ្ធភាពការដាក់ពង្រាយគេហទំព័រនៅក្នុងប្រទេសចិនដីគោក

ប្រសិនបើ​អ្នក​ចង់​ទទួល​បាន​ការ​អនុវត្ត​មធ្យោបាយ​ងាយស្រួល​កាន់​តែ​ប្រសើរ​ក្នុង​បរិយាកាស​បណ្តាញ​នៃ​ប្រទេស​ចិន​ដីគោក សូម [​ចុះឈ្មោះ​ឈ្មោះ​ដែន](//beian.aliyun.com) ​ជាមុន​សិន។

បន្ទាប់មក ប្រើកន្លែងផ្ទុក `out/ol/htm` របស់អ្នកលក់ពពក `CDN` ចិនដីគោក +

អ្នក​អាច​ប្រើ​ការ​គណនា​គែម​ដើម្បី​សរសេរ​ផ្លូវ​ឡើង​វិញ​ដើម្បី​សម្រប​ទៅ​នឹង​កម្មវិធី​មួយ​ទំព័រ​ដូចជា [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

ដោយសារតែ `MX` records និង `CNAME` records មិនអាចរួមរស់ជាមួយគ្នាបាន `A` ប្រសិនបើអ្នកចង់ទទួលបាន domain name emails ក្នុងពេលតែមួយ អ្នកត្រូវសហការ `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

លើសពីនេះ ដោយសារការគិតថ្លៃចរាចរណ៍នៅក្រៅប្រទេសរបស់អ្នកលក់ពពកក្នុងប្រទេសចិនដីគោកមានតម្លៃថ្លៃ ប្រសិនបើអ្នកចង់បង្កើនប្រសិទ្ធភាពការចំណាយ អ្នកអាចប្រើ [ដំណោះស្រាយភូមិសាស្ត្រឥតគិតថ្លៃរបស់ Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) និងឈ្មោះដែនផ្ទាល់ខ្លួនរបស់ [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (ដូចបង្ហាញខាងក្រោម) ដើម្បីសម្រេចបាន។ ការបង្វែរចរាចរណ៍──ចរាចរណ៍នៅក្នុងប្រទេសចិនដីគោក Baidu Cloud `CDN` ចរាចរណ៍អន្តរជាតិទៅ cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

ដំណោះស្រាយបង្កើនប្រសិទ្ធភាពនៃការដាក់ពង្រាយទាំងនេះគឺស្មុគស្មាញជាង ហើយនឹងត្រូវបានណែនាំនៅក្នុងជំពូកដាច់ដោយឡែកនាពេលអនាគត។

#### ការបញ្ជូនបន្តឈ្មោះដែនទូទៅ

`xxx.com` `*.xxx.com` `www.xxx.com` `i18n.site`

`EdgeScript` នេះអាច [សម្រេច](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) / ដោយជំនួយ [ពី](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) Alibaba Cloud `CDN`

បន្ថែមឈ្មោះដែននៅក្នុង [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ហើយចង្អុល `*.xxx.com` ដែនទៅ Alibaba Cloud `CDN` 's `CNAME` ។

<img alt="" src="https://p.3ti.site/1721122000.avif">

ឧទាហរណ៍ ការកំណត់រចនាសម្ព័ន្ធការប្តូរទិស `*.i18n.site` pan-domain ក្នុងរូបភាពខាងលើមានដូចខាងក្រោម៖

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### ប្រើជាមួយ nginx

សូមបន្ថែមការកំណត់រចនាសម្ព័ន្ធដូចខាងក្រោមក្នុង `server` nginx `/root/i18n/md/out/ol/htm` សូមប្តូរវាទៅផ្លូវនៃគម្រោងផ្ទាល់ខ្លួនរបស់អ្នក `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### រចនាសម្ព័ន្ធថត

#### សាធារណៈ

ឯកសារឋិតិវន្តនៃគេហទំព័រ ដូចជា `favicon.ico` `robots.txt` ជាដើម។

ឯកសាររូបតំណាងនៅទីនេះអាចត្រូវបានបង្កើតជាមួយ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` នៅក្រោមថតមានឯកសារកំណត់រចនាសម្ព័ន្ធរបស់ `i18n.site` ឃ្លាំងសម្ងាត់បកប្រែ។ល។ សូមមើលជំពូកបន្ទាប់ ["ការកំណត់រចនាសម្ព័ន្ធ"](/i18n.site/conf) សម្រាប់ព័ត៌មានលម្អិត។

#### ន

ថតភាសាប្រភព ដែលត្រូវគ្នា `.i18n/conf.yml` `fromTo` `en` នៅក្នុងឯកសារកំណត់រចនាសម្ព័ន្ធ

```yaml
i18n:
  fromTo:
    en: zh
```

សូមមើលការកំណត់រចនាសម្ព័ន្ធនៃការបកប្រែ [i18](/i18/use)

