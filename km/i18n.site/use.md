# ដំឡើង &

## ដំឡើង

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## និមិត្តសញ្ញាកំណត់រចនាសម្ព័ន្ធ

`i18n.site` មានឧបករណ៍បកប្រែដែលភ្ជាប់មកជាមួយ `i18` សូម [ចុចទីនេះដើម្បីយោងទៅឯកសារ `i18` ដើម្បីកំណត់រចនាសម្ព័ន្ធនិមិត្តសញ្ញាចូលប្រើ](/i18/use) ។

## គម្រោងសាកល្បង

ចូរចាប់ផ្តើមជាមួយនឹងគម្រោងសាកល្បង ដើម្បីរៀនពីរបៀបប្រើ `i18n.site` ។

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

ឈ្មោះថតនៃកូដមូលដ្ឋាន `demo.i18n.site` ត្រូវតែជា `md` ដើម្បីសម្រួលដល់ការមើលជាមុនក្នុងមូលដ្ឋានជាមួយ `docker` ។

### បកប្រែ

ដំបូងបញ្ចូល `md` directory ហើយរត់ `i18n.site` ដែលនឹងបកប្រែពី `en` ទៅ `zh` ។

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

បន្ទាប់ពីដំណើរការ ការបកប្រែ និងឯកសារឃ្លាំងសម្ងាត់នឹងត្រូវបានបង្កើត សូមចងចាំថាត្រូវបន្ថែមពួកវាទៅក្នុង `git add . ` ក្នុង `md` ។

### ការមើលជាមុនក្នុងស្រុក

ដំឡើង និងចាប់ផ្តើម `docker` ( អ្នកប្រើប្រាស់ `MAC` ណែនាំឱ្យប្រើ [orbstack](https://orbstack.dev) ជាពេលវេលាដំណើរការសម្រាប់ `docker` ) ។

បន្ទាប់មកបញ្ចូល `docker` directory ហើយដំណើរការ `./up.sh` ហើយបន្ទាប់មកចូលទៅកាន់ [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">