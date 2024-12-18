---

brief: |
  ឥឡូវនេះ i18n.site គាំទ្រការស្វែងរកអត្ថបទពេញដោយម៉ាស៊ីនមេ។

  អត្ថបទនេះណែនាំពីការអនុវត្តបច្ចេកវិទ្យាស្វែងរកអត្ថបទពេញផ្នែកខាងមុខសុទ្ធ រួមទាំងលិបិក្រមដាក់បញ្ច្រាសដែលបង្កើតឡើងដោយ IndexedDB ការស្វែងរកបុព្វបទ ការបង្កើនប្រសិទ្ធភាពការបែងចែកពាក្យ និងការគាំទ្រពហុភាសា។

  បើប្រៀបធៀបជាមួយនឹងដំណោះស្រាយដែលមានស្រាប់ ការស្វែងរកអត្ថបទពេញផ្នែកខាងមុខសុទ្ធរបស់ i18n.site មានទំហំតូច និងលឿន សមរម្យសម្រាប់គេហទំព័រខ្នាតតូច និងមធ្យម ដូចជាឯកសារ និងប្លក់ ហើយអាចប្រើបានក្រៅបណ្តាញ។

---

# ការស្វែងរកអត្ថបទពេញលេញដែលដាក់បញ្ច្រាសផ្នែកខាងមុខសុទ្ធ

## លំដាប់

បន្ទាប់ពីការអភិវឌ្ឍជាច្រើនសប្តាហ៍ [i18n.site](//i18n.site) (ឧបករណ៍បង្កើតគេហទំព័រពហុភាសា & markdown វន្តសុទ្ធសាធ) ឥឡូវនេះគាំទ្រការស្វែងរកអត្ថបទពេញផ្ទៃមុខសុទ្ធ។

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

អត្ថបទនេះនឹងចែករំលែកការអនុវត្តបច្ចេកទេសនៃការស្វែងរកអត្ថបទពេញលេញ `i18n.site` ផ្នែកខាងមុខ ទស្សនា [i18n.site](//i18n.site)

កូដប្រភពបើកចំហ : [ស្វែងរកខឺណែល](//github.com/i18n-site/ie/tree/main/qy) / [ចំណុចប្រទាក់អន្តរកម្ម](//github.com/i18n-site/plugin/tree/main/qy)

## ការពិនិត្យឡើងវិញនៃដំណោះស្រាយស្វែងរកអត្ថបទពេញលេញដោយគ្មានម៉ាស៊ីនមេ

សម្រាប់គេហទំព័រតូច និងមធ្យមដែលមានលក្ខណៈឋិតិវន្តសុទ្ធសាធ ដូចជាឯកសារ/ប្លក់ផ្ទាល់ខ្លួន ការកសាងកម្មវិធីខាងក្រោយការស្វែងរកអត្ថបទពេញលេញដែលបង្កើតដោយខ្លួនឯងគឺធ្ងន់ពេក ហើយការស្វែងរកអត្ថបទពេញដោយគ្មានសេវាកម្មគឺជាជម្រើសទូទៅជាង។

ដំណោះស្រាយការស្វែងរកអត្ថបទពេញដែលគ្មានម៉ាស៊ីនបម្រើធ្លាក់ទៅជាពីរប្រភេទធំៗ៖

ទីមួយ ស្រដៀងគ្នា [algolia.com](//algolia.com) អ្នកផ្តល់សេវាស្វែងរកភាគីទីបីផ្តល់សមាសធាតុផ្នែកខាងមុខសម្រាប់ការស្វែងរកអត្ថបទពេញលេញ។

សេវាកម្មបែបនេះទាមទារការទូទាត់ដោយផ្អែកលើបរិមាណស្វែងរក ហើយជារឿយៗមិនអាចប្រើបានសម្រាប់អ្នកប្រើប្រាស់នៅក្នុងប្រទេសចិនដីគោក ដោយសារបញ្ហាដូចជាការអនុលោមតាមគេហទំព័រ។

វាមិនអាចប្រើបានក្រៅបណ្តាញ មិនអាចប្រើបាននៅលើអ៊ីនធឺណេត និងមានដែនកំណត់ដ៏អស្ចារ្យ។ អត្ថបទនេះមិនពិភាក្សាច្រើនទេ។

ទីពីរគឺការស្វែងរកអត្ថបទពេញផ្នែកខាងមុខសុទ្ធ។

នាពេលបច្ចុប្បន្ន ការស្វែងរកអត្ថបទពេញផ្នែកខាងមុខសុទ្ធទូទៅរួមមាន [lunrjs](//lunrjs.com) និង [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (ផ្អែកលើ `lunrjs` ការអភិវឌ្ឍន៍បន្ទាប់បន្សំ)។

`lunrjs` មានវិធីពីរយ៉ាងក្នុងការបង្កើតលិបិក្រម ហើយទាំងពីរមានបញ្ហារៀងៗខ្លួន។

1. ឯកសារលិបិក្រមដែលបានបង្កើតជាមុន

   ដោយសារតែលិបិក្រមមានពាក្យពីឯកសារទាំងអស់ វាមានទំហំធំ។
   នៅពេលណាដែលឯកសារត្រូវបានបន្ថែម ឬកែប្រែ ឯកសារលិបិក្រមថ្មីត្រូវតែត្រូវបានផ្ទុក។
   វានឹងបង្កើនពេលវេលារង់ចាំរបស់អ្នកប្រើប្រាស់ និងប្រើប្រាស់កម្រិតបញ្ជូនច្រើន។

2. ផ្ទុកឯកសារ និងបង្កើតលិបិក្រមភ្លាមៗ

   ការកសាងលិបិក្រមគឺជាកិច្ចការដែលពឹងផ្អែកខ្លាំងលើកុំព្យូទ័រ ការបង្កើតលិបិក្រមឡើងវិញរាល់ពេលដែលអ្នកចូលប្រើវានឹងបណ្តាលឱ្យមានការយឺតយ៉ាវជាក់ស្តែង និងបទពិសោធន៍អ្នកប្រើប្រាស់មិនល្អ។

---

បន្ថែមពីលើ `lunrjs` មានដំណោះស្រាយស្វែងរកអត្ថបទពេញលេញមួយចំនួនផ្សេងទៀត ដូចជា :

[fusejs](//www.fusejs.io) គណនាភាពស្រដៀងគ្នារវាងខ្សែអក្សរដើម្បីស្វែងរក។

ដំណើរការនៃដំណោះស្រាយនេះគឺអន់ខ្លាំងណាស់ ហើយមិនអាចប្រើសម្រាប់ការស្វែងរកអត្ថបទពេញបាន [10 Fuse.js](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) សូមមើល

[TinySearch](//github.com/tinysearch/tinysearch) ប្រើតម្រង Bloom ដើម្បីស្វែងរក មិនអាចប្រើសម្រាប់ការស្វែងរកបុព្វបទ (ឧទាហរណ៍ បញ្ចូល `goo` ស្វែងរក `good` `google` ) និងមិនអាចសម្រេចបាននូវប្រសិទ្ធិភាពនៃការបំពេញដោយស្វ័យប្រវត្តិស្រដៀងគ្នា។

ដោយសារតែការខ្វះខាតនៃដំណោះស្រាយដែលមានស្រាប់ `i18n.site` បានបង្កើតដំណោះស្រាយស្វែងរកអត្ថបទពេញមុខសុទ្ធថ្មី ដែលមានលក្ខណៈដូចខាងក្រោម :

1. គាំទ្រការស្វែងរកច្រើនភាសា និងមានទំហំតូច ទំហំនៃខឺណែលស្វែងរកបន្ទាប់ពីការវេចខ្ចប់ `gzip` គឺ `6.9KB` (សម្រាប់ការប្រៀបធៀបទំហំ `lunrjs` គឺ `25KB` )។
1. បង្កើតលិបិក្រមដាក់បញ្ច្រាសដោយផ្អែកលើ `indexedb` ដែលប្រើអង្គចងចាំតិច និងលឿន។
1. នៅពេលដែលឯកសារត្រូវបានបន្ថែម/កែប្រែ មានតែឯកសារដែលបានបន្ថែម ឬកែប្រែប៉ុណ្ណោះដែលត្រូវបានធ្វើលិបិក្រមឡើងវិញ ដោយកាត់បន្ថយចំនួននៃការគណនា។
1. គាំទ្រការស្វែងរកបុព្វបទ និងអាចបង្ហាញលទ្ធផលស្វែងរកក្នុងពេលវេលាជាក់ស្តែង ខណៈពេលដែលអ្នកប្រើប្រាស់កំពុងវាយ។
1. អាចប្រើបានក្រៅបណ្តាញ

ខាងក្រោមនេះ `i18n.site` សេចក្តីលម្អិតនៃការអនុវត្តបច្ចេកទេសនឹងត្រូវបានណែនាំយ៉ាងលម្អិត។

## ការបែងចែកពាក្យពហុភាសា

ការបែងចែកពាក្យប្រើការបែងចែកពាក្យដើមរបស់កម្មវិធីរុករកតាមអ៊ីនធឺណិត `Intl.Segmenter` ហើយកម្មវិធីរុករកតាមអ៊ីនធឺណិតទាំងអស់គាំទ្រចំណុចប្រទាក់នេះ។

![](//p.3ti.site/1727667759.avif)

ពាក្យ segmentation `coffeescript` code មានដូចខាងក្រោម

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

ក្នុង៖

* `/\p{P}/` គឺជាកន្សោមធម្មតាដែលផ្គូផ្គងសញ្ញាវណ្ណយុត្តិជាក់លាក់រួមមាន: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~។ `.</p><ul><li> `split('.')` គឺដោយសារតែការបែងចែកពាក្យក្នុងកម្មវិធីរុករក `Firefox` មិនមានផ្នែក `. ` ។</li>


## ការកសាងសន្ទស្សន៍

តារាងផ្ទុកវត្ថុចំនួន 5 ត្រូវបានបង្កើតឡើងក្នុង `IndexedDB` :

* `word` : id -
* `doc` : id - Document url - លេខកំណែឯកសារ
* `docWord` : អារេនៃឯកសារ id - ពាក្យ id
* `prefix` : អារេនៃបុព្វបទ - ពាក្យ id
* `rindex` : Word id - Document id : អារេនៃលេខបន្ទាត់

ឆ្លងកាត់ក្នុងអារេនៃឯកសារ `url` និងកំណែលេខ `ver` ហើយស្វែងរកថាតើឯកសារមាននៅក្នុងតារាង `doc` ឬអត់។ ប្រសិនបើវាមិនមានទេ សូមបង្កើតលិបិក្រមដាក់បញ្ច្រាស។ ក្នុងពេលជាមួយគ្នានេះ ដកលិបិក្រមដាក់បញ្ច្រាសសម្រាប់ឯកសារទាំងនោះដែលមិនត្រូវបានឆ្លងកាត់។

តាមវិធីនេះ ការបង្កើតលិបិក្រមបន្ថែមអាចសម្រេចបាន ហើយបរិមាណនៃការគណនាត្រូវបានកាត់បន្ថយ។

នៅក្នុងអន្តរកម្មខាងមុខ របារវឌ្ឍនភាពនៃការផ្ទុកនៃសន្ទស្សន៍អាចត្រូវបានបង្ហាញ ដើម្បីជៀសវាងភាពយឺតយ៉ាវនៅពេលផ្ទុកជាលើកដំបូង សូមមើល "របារវឌ្ឍនភាពជាមួយចលនា ដោយផ្អែកលើតែមួយ progress + Pure css Implementation" [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB ការសរសេរស្របគ្នាខ្ពស់។

គម្រោងនេះត្រូវ [idb](//www.npmjs.com/package/idb) ដោយផ្អែកលើការបិទបាំងអសមកាលនៃ IndexedDB

IndexedDB អាន និងសរសេរគឺអសមកាល។ នៅពេលបង្កើតលិបិក្រម ឯកសារនឹងត្រូវបានផ្ទុកក្នុងពេលដំណាលគ្នាដើម្បីបង្កើតលិបិក្រម។

ដើម្បីជៀសវាងការបាត់បង់ទិន្នន័យដោយផ្នែកដែលបណ្តាលមកពីការសរសេរប្រកួតប្រជែង អ្នកអាចយោងទៅលើ `coffeescript` កូដខាងក្រោម ហើយបន្ថែមឃ្លាំងសម្ងាត់ `ing` រវាងការអាន និងការសរសេរ ដើម្បីស្ទាក់ចាប់ការសរសេរដែលប្រកួតប្រជែង។

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## ភាពជាក់លាក់ និងការរំលឹកឡើងវិញ

ការស្វែងរកដំបូងនឹងបែងចែកពាក្យគន្លឹះដែលបានបញ្ចូលដោយអ្នកប្រើប្រាស់។

សន្មតថាមានពាក្យ `N` បន្ទាប់ពីការបែងចែកពាក្យ នៅពេលត្រឡប់លទ្ធផល លទ្ធផលដែលមានពាក្យគន្លឹះទាំងអស់នឹងត្រលប់មកវិញមុនគេ ហើយបន្ទាប់មកលទ្ធផលដែលមានពាក្យគន្លឹះ `N-1` , `N-2` ,... , `1` នឹងត្រលប់មកវិញ។

លទ្ធផលស្វែងរកដែលបង្ហាញដំបូងធានានូវភាពត្រឹមត្រូវនៃសំណួរ ហើយលទ្ធផលដែលបានផ្ទុកជាបន្តបន្ទាប់ (ចុចប៊ូតុងផ្ទុកបន្ថែម) ធានាបាននូវអត្រាការប្រមូលមកវិញ។

![](//p.3ti.site/1727684564.avif)

## ផ្ទុកតាមតម្រូវការ

ដើម្បីកែលម្អល្បឿនឆ្លើយតប ការស្វែងរកប្រើម៉ាស៊ីនភ្លើង `yield` ដើម្បីអនុវត្តការផ្ទុកតាមតម្រូវការ ហើយនឹងត្រឡប់មកវិញ `limit` ពេលដែលលទ្ធផលត្រូវបានសួរ។

ចំណាំថារាល់ពេលដែលអ្នកស្វែងរកម្តងទៀតបន្ទាប់ពី `yield` អ្នកត្រូវបើកប្រតិបត្តិការសំណួរនៃ `IndexedDB` ឡើងវិញ។

## បុព្វបទស្វែងរកតាមពេលវេលាជាក់ស្តែង

ដើម្បីបង្ហាញលទ្ធផលស្វែងរក ខណៈពេលដែលអ្នកប្រើប្រាស់កំពុងវាយបញ្ចូល ឧទាហរណ៍ នៅពេលបញ្ចូល `wor` ពាក្យដែលដាក់បុព្វបទជាមួយ `wor` ដូចជា `words` និង `work` ត្រូវបានបង្ហាញ។

![](//p.3ti.site/1727684944.avif)

ខឺណែលស្វែងរកនឹងប្រើតារាង `prefix` សម្រាប់ពាក្យចុងក្រោយបន្ទាប់ពីការបែងចែកពាក្យ ដើម្បីស្វែងរកពាក្យទាំងអស់ដែលមានបុព្វបទវា ហើយស្វែងរកតាមលំដាប់លំដោយ។

មុខងារ Anti-shake `debounce` ក៏ត្រូវបានប្រើប្រាស់ក្នុងអន្តរកម្មផ្នែកខាងមុខ (ត្រូវបានអនុវត្តដូចខាងក្រោម) ដើម្បីកាត់បន្ថយភាពញឹកញាប់នៃការបញ្ចូលអ្នកប្រើប្រាស់ដែលបង្កឱ្យមានការស្វែងរក និងកាត់បន្ថយចំនួននៃការគណនា។

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## អាចប្រើបានក្រៅបណ្តាញ

តារាងលិបិក្រមមិនរក្សាទុកអត្ថបទដើមទេ មានតែពាក្យប៉ុណ្ណោះ ដែលកាត់បន្ថយទំហំផ្ទុក។

ការរំលេចលទ្ធផលស្វែងរកតម្រូវឱ្យផ្ទុកអត្ថបទដើមឡើងវិញ ហើយការផ្គូផ្គងលេខ `service worker` អាចជៀសវាងសំណើបណ្តាញដដែលៗ។

ក្នុងពេលជាមួយគ្នានេះ ដោយសារតែ `service worker` ឃ្លាំងសម្ងាត់អត្ថបទទាំងអស់ នៅពេលដែលអ្នកប្រើប្រាស់ធ្វើការស្វែងរក គេហទំព័រទាំងមូល រួមទាំងការស្វែងរកអាចប្រើប្រាស់បានដោយគ្មានអ៊ីនធឺណិត។

## បង្ហាញការបង្កើនប្រសិទ្ធភាពនៃឯកសារ MarkDown

ដំណោះស្រាយស្វែងរកផ្នែកខាងមុខសុទ្ធរបស់ `i18n.site` ត្រូវបានធ្វើឱ្យប្រសើរសម្រាប់ឯកសារ `MarkDown` ។

នៅពេលបង្ហាញលទ្ធផលស្វែងរក ឈ្មោះជំពូកនឹងត្រូវបានបង្ហាញ ហើយជំពូកនឹងត្រូវបានរុករកនៅពេលចុច។

![](//p.3ti.site/1727686552.avif)

## សង្ខេប

ការស្វែងរកអត្ថបទពេញលេញដែលដាក់បញ្ច្រាសត្រូវបានអនុវត្តនៅខាងមុខសុទ្ធតែគ្មានម៉ាស៊ីនមេត្រូវការ។ វាស័ក្តិសមបំផុតសម្រាប់គេហទំព័រខ្នាតតូច និងមធ្យម ដូចជាឯកសារ និងប្លក់ផ្ទាល់ខ្លួន។

`i18n.site` ប្រភពបើកចំហរដែលបង្កើតដោយខ្លួនឯង ការស្វែងរកផ្នែកខាងមុខសុទ្ធ ទំហំតូច និងការឆ្លើយតបរហ័ស ដោះស្រាយការខ្វះខាតនៃការស្វែងរកអត្ថបទពេញផ្នែកខាងមុខសុទ្ធបច្ចុប្បន្ន និងផ្តល់នូវបទពិសោធន៍អ្នកប្រើប្រាស់កាន់តែប្រសើរ។