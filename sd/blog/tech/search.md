---

brief: |
  i18n.site ھاڻي سپورٽ ڪري ٿي بغير سرور جي مڪمل متن جي ڳولا.

  هي آرٽيڪل خالص فرنٽ-اينڊ مڪمل ٽيڪسٽ سرچ ٽيڪنالاجي جي نفاذ کي متعارف ڪرايو آهي، جنهن ۾ IndexedDB پاران ٺاهيل انڊيڪس انڊيڪس، پريفڪس سرچ، لفظ سيگمينٽيشن آپٽمائيزيشن ۽ ملٽي لئنگويج سپورٽ شامل آهن.

  موجوده حلن جي مقابلي ۾، i18n.site جي خالص فرنٽ-اينڊ مڪمل ٽيڪسٽ ڳولها سائيز ۾ ننڍي ۽ تيز آهي، ننڍي ۽ وچولي سائيز جي ويب سائيٽن جهڙوڪ دستاويزن ۽ بلاگن لاءِ موزون آهي، ۽ آف لائن دستياب آهي.

---

# خالص سامهون-آخر الٽي مڪمل متن جي ڳولا

## تسلسل

ڪيترن ئي هفتن جي ترقي کان پوءِ [i18n.site](//i18n.site) (هڪ خالص جامد markdown گھڻ لساني ترجمو & ويب سائيٽ بلڊنگ ٽول) هاڻي مڪمل متن جي ڳولا کي سپورٽ ڪري ٿو.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

[i18n.site](//i18n.site) آرٽيڪل `i18n.site` خالص فرنٽ-اينڊ مڪمل ٽيڪسٽ سرچ جي ٽيڪنيڪل عمل کي حصيداري ڪندو.

ڪوڊ اوپن : [سرچ ڪرنل](//github.com/i18n-site/ie/tree/main/qy) / [انٽرايڪٽو انٽرفيس](//github.com/i18n-site/plugin/tree/main/qy)

## سرور جي بغير مڪمل ٽيڪسٽ ڳولا حل جو جائزو

ننڍي ۽ وچولي سائيز جي خالص جامد ويب سائيٽن لاءِ جيئن ته دستاويز/ذاتي بلاگ، هڪ خود تعمير ٿيل مڪمل ٽيڪسٽ سرچ پسمنظر تمام ڳرو آهي، ۽ خدمت کان سواءِ مڪمل متن جي ڳولا وڌيڪ عام چونڊ آهي.

بي سرور مڪمل متن جي ڳولا جا حل ٻن وسيع ڀاڱن ۾ اچي وڃن ٿا:

پهرين، [algolia.com](//algolia.com) ٽئين پارٽي سرچ سروس فراهم ڪندڙ مڪمل متن جي ڳولا لاءِ فرنٽ-اينڊ اجزاء مهيا ڪن ٿا.

اهڙيون خدمتون تلاش جي مقدار جي بنياد تي ادائيگي جي ضرورت هونديون آهن، ۽ اڪثر ڪري ويب سائيٽ جي تعميل جهڙن مسئلن جي ڪري سرزمين چين ۾ صارفين لاءِ دستياب نه هونديون آهن.

اهو آف لائن استعمال نٿو ڪري سگھجي، انٽرنيٽ تي استعمال نٿو ڪري سگھجي، ۽ وڏيون حدون آھن. هي مضمون گهڻو بحث نه ڪندو آھي.

ٻيو خالص سامهون-آخر مڪمل متن جي ڳولا آهي.

في الحال [lunrjs](//lunrjs.com) عام خالص فرنٽ-اينڊ مڪمل-ٽيڪسٽ ڳولها شامل آهن ۽ [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ثانوي ترقي جي بنياد تي).

`lunrjs` انڊيڪس ٺاهڻ جا ٻه طريقا آهن، ۽ ٻنهي جا پنهنجا مسئلا آهن.

1. اڳ ۾ ٺهيل انڊيڪس فائلون

   ڇاڪاڻ ته انڊيڪس سڀني دستاويزن مان لفظن تي مشتمل آهي، اهو سائيز ۾ وڏو آهي.
   جڏهن به هڪ دستاويز شامل ڪيو وڃي يا تبديل ڪيو وڃي، هڪ نئين انڊيڪس فائل لوڊ ٿيڻ گهرجي.
   اهو صارف جي انتظار جو وقت وڌائيندو ۽ تمام گهڻو بينڊوڊٿ استعمال ڪندو.

2. دستاويز لوڊ ڪريو ۽ اڏام تي انڊيڪس ٺاهيو

   انڊيڪس ٺاھڻ ھڪ ڪمپيوٽيشنل گھڻائي وارو ڪم آھي انڊيڪس کي ھر دفعي تعمير ڪرڻ جڏھن توھان ان کي پھچائي سگھو ٿا واضح دير ۽ خراب استعمال ڪندڙ تجربو.

---

`lunrjs` کان علاوه، ڪجھ ٻيا مڪمل-ٽيڪسٽ سرچ حل آھن، جھڙوڪ :

[fusejs](//www.fusejs.io) ، ڳولهڻ لاءِ تارن جي وچ ۾ هڪجهڙائي جو اندازو لڳايو.

هن حل جي ڪارڪردگي انتهائي خراب آهي ۽ مڪمل متن جي ڳولا لاءِ استعمال نه ٿي ڪري سگھجي (ڏسو [Fuse.js ڊگهو سوال 10 سيڪنڊن کان وڌيڪ وٺندو آهي، ان کي ڪيئن بهتر ڪجي؟](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) ، استعمال ڪريو بلوم فلٽر ڳولا لاءِ، استعمال نه ٿو ڪري سگھجي اڳياڙي ڳولھا لاءِ (مثال طور، داخل ڪريو `goo` ، ڳولا `good` ، `google` )، ۽ ساڳيو خودڪار مڪمل اثر حاصل نٿو ڪري سگھي.

موجوده حلن جي نقصن جي ڪري، `i18n.site` هڪ نئون خالص فرنٽ-اينڊ مڪمل ٽيڪسٽ سرچ حل تيار ڪيو، جنهن ۾ هيٺيون خاصيتون آهن :

1. گھڻن ٻولين جي ڳولا کي سپورٽ ڪري ٿو ۽ سائيز ۾ ننڍو آھي `gzip` پيڪيجنگ کان پوءِ سرچ ڪنيل `6.9KB` آھي (مقابلي لاءِ، `lunrjs` جي ماپ `25KB` آھي)
1. `indexedb` جي بنياد تي انڊيڪس انڊيڪس ٺاھيو، جيڪو گھٽ ياداشت وٺي ٿو ۽ تيز آھي.
1. جڏهن دستاويز شامل ڪيا ويا/تبديل ڪيا ويا، صرف شامل ٿيل يا تبديل ٿيل دستاويز ٻيهر ترتيب ڏنل آهن، حسابن جي مقدار کي گھٽائڻ.
1. اڳوڻي ڳولا کي سپورٽ ڪري ٿو ۽ حقيقي وقت ۾ ڳولا جا نتيجا ڏيکاري سگھي ٿو جڏهن صارف ٽائپ ڪري رهيو آهي.
1. آف لائن دستياب

هيٺ، `i18n.site` ٽيڪنيڪل عمل درآمد تفصيل سان متعارف ڪرايو ويندو.

## گهڻ لساني لفظن جي ورهاڱي

لفظ سيگمينٽيشن برائوزر جي اصلي لفظ segmentation `Intl.Segmenter` استعمال ڪري ٿو، ۽ سڀ مين اسٽريم برائوزر ھن انٽرفيس کي سپورٽ ڪن ٿا.

![](//p.3ti.site/1727667759.avif)

لفظ ڀاڱو `coffeescript` ڪوڊ هن ريت آهي

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

۾:

* `/\p{P}/` هڪ باقاعده اظهار آهي جيڪو اوقاف جي نشانين سان ملندو آهي مخصوص ملندڙ علامتن ۾ شامل آهن: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> `split('.')` ڇاڪاڻ ته `Firefox` برائوزر لفظ جي ڀاڱيداري ڀاڱي `. ` نه آهي.</li>


## انڊيڪس بلڊنگ

5 آبجیکٹ اسٽوريج ٽيبل `IndexedDB` ۾ ٺاهيا ويا :

* `word` لفظ : id -
* `doc` : id - url - دستاويز جو نسخو نمبر
* `docWord` : دستاويز جو سلسلو id - لفظ id
* `prefix` : اڳياڙي جي ترتيب - لفظ id
* `rindex` : لفظ id - دستاويز id : لائن نمبرن جو صف

دستاويز `url` ۽ ورزن نمبر `ver` جي صف ۾ وڃو، ۽ ڳولھيو ته ڇا دستاويز ٽيبل `doc` ۾ موجود آھي. جيڪڏھن اھو موجود نه آھي، ھڪڙو انڊيڪس ٺاھيو. ساڳئي وقت، انهن دستاويزن لاءِ انڊيڪس انڊيڪس کي هٽايو جيڪي پاس نه ڪيا ويا هئا.

هن طريقي سان، وڌندڙ انگن اکرن کي حاصل ڪري سگهجي ٿو ۽ حساب جي رقم گھٽجي ويندي آهي.

فرنٽ-اينڊ رابطي ۾، انڊيڪس جي لوڊنگ پروگریس بار کي ڏيکاري سگھجي ٿو دير کان بچڻ لاءِ جڏهن پهريون ڀيرو لوڊ ٿي رهيو آهي ته ڏسو "پراگريس بار سان اينيميشن، بيسڊ اي سنگل progress + خالص css لاڳو ڪرڻ" [انگريزي](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [چيني](//juejin.cn/post/7413586285954154522) .

### IndexedDB اعلي سمورو لکڻ

پروجيڪٽ جي بنياد تي [idb](//www.npmjs.com/package/idb) آهي asynchronous encapsulation of IndexedDB

IndexedDB پڙهڻ ۽ لکڻ غير مطابقت رکندڙ آهن. جڏهن هڪ انڊيڪس ٺاهيندي، انڊيڪس ٺاهڻ لاءِ دستاويز گڏ ڪيا ويندا.

مقابلي واري لکڻين جي ڪري جزوي ڊيٽا جي نقصان کان بچڻ لاءِ، توھان ھيٺ ڏنل `coffeescript` ڪوڊ جو حوالو ڏئي سگھو ٿا ۽ پڙھڻ ۽ لکڻ جي وچ ۾ `ing` ڪيش شامل ڪري سگھوٿا مقابلي واري لکڻين کي روڪڻ لاءِ.

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

## درستگي ۽ ياد ڪرڻ

ڳولا پهريون ڀيرو استعمال ڪندڙ پاران داخل ڪيل لفظن کي ورهائي ويندي.

فرض ڪريو ته لفظ سيگمينٽيشن کان پوءِ `N` لفظ آھن، جڏھن نتيجا ڏنا ويندا ته سڀ لفظ شامل آھن، ۽ پوءِ `N-1` ، `N-2` ،...، `1` لفظن تي مشتمل نتيجا ڏنا ويندا.

ڳولا جا نتيجا ڏيکاريا ويا پهريان سوال جي درستگي کي يقيني بڻائين، ۽ نتيجا بعد ۾ لوڊ ڪيا ويا (لوڊ وڌيڪ بٽڻ تي ڪلڪ ڪريو) ياد ڪرڻ جي شرح کي يقيني بڻائي.

![](//p.3ti.site/1727684564.avif)

## مطالبو تي لوڊ

جواب جي رفتار کي بهتر ڪرڻ لاءِ، ڳولها `yield` جنريٽر استعمال ڪري ٿي آن ڊيمانڊ لوڊنگ کي لاڳو ڪرڻ لاءِ، ۽ `limit` ڀيري نتيجو پڇڻ تي موٽائي ٿو.

نوٽ ڪريو ته ھر ڀيري توھان `yield` کان پوءِ وري ڳولھيو ٿا، توھان کي `IndexedDB` جي سوالي ٽرانزيڪشن کي ٻيهر کولڻ جي ضرورت آھي.

## اڳيون اصل وقت جي ڳولا

ڳولا جا نتيجا ڏيکارڻ لاءِ جڏهن صارف ٽائيپ ڪري رهيو آهي، مثال طور، جڏهن `wor` داخل ڪيو ويو آهي، لفظ اڳ ۾ `wor` سان لڳل آهن جهڙوڪ `words` ۽ `work` .

![](//p.3ti.site/1727684944.avif)

سرچ ڪرنل `prefix` جدول استعمال ڪندو آخري لفظ لاءِ لفظ سيگمينٽيشن کان پوءِ ان سان اڳي لڳل سڀني لفظن کي ڳولڻ لاءِ، ۽ ڳولھيو ترتيب سان.

اينٽي شيڪ فنڪشن `debounce` پڻ استعمال ڪيو ويندو آهي فرنٽ-اينڊ رابطي ۾ (هيٺ ڏنل طريقي سان عمل ڪيو ويو آهي) صارف جي ان پٽ کي ٽارگيٽ ڪرڻ واري ڳولا جي تعدد کي گهٽائڻ ۽ حساب جي مقدار کي گهٽائڻ لاءِ.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## آف لائن دستياب

انڊيڪس ٽيبل اصل متن کي ذخيرو نٿو ڪري، صرف لفظن کي، جيڪو ذخيرو جي مقدار کي گھٽائي ٿو.

ڳولها نتيجن کي نمايان ڪرڻ لاءِ اصل متن کي ٻيهر لوڊ ڪرڻ جي ضرورت آهي، ۽ `service worker` ملائڻ بار بار نيٽ ورڪ جي درخواستن کان پاسو ڪري سگهي ٿو.

ساڳئي وقت، ڇاڪاڻ ته `service worker` سڀني مضمونن کي ڪيش ڪري ٿو، هڪ ڀيرو صارف هڪ ڳولا انجام ڏئي ٿو، سڄي ويب سائيٽ، بشمول ڳولا، آف لائن دستياب آهي.

## MarkDown دستاويزن جي اصلاح ڏيکاريو

`i18n.site` جو خالص فرنٽ-اينڊ سرچ حل `MarkDown` دستاويزن لاءِ بهتر ڪيو ويو آھي.

جڏهن ڳولا جا نتيجا ڏيکاريندا، باب جو نالو ڏيکاريو ويندو ۽ باب کي نيويگيٽ ڪيو ويندو جڏهن ڪلڪ ڪيو.

![](//p.3ti.site/1727686552.avif)

## خلاصو

مڪمل متن جي ڳولها مڪمل طور تي اڳئين آخر تي لاڳو ڪئي وئي، سرور جي ضرورت ناهي. اهو ننڍڙو ۽ وچولي سائيز جي ويب سائيٽن جهڙوڪ دستاويزن ۽ ذاتي بلاگن لاء تمام مناسب آهي.

`i18n.site` اوپن سورس خود ترقي يافته خالص فرنٽ-اينڊ ڳولها، سائيز ۾ ننڍو ۽ تيز جواب، موجوده خالص فرنٽ-اينڊ مڪمل ٽيڪسٽ ڳولا جي خامين کي حل ڪري ٿو ۽ هڪ بهتر صارف تجربو مهيا ڪري ٿو.