---

brief: |
  i18n.site اوس د سرور پرته د بشپړ متن لټون ملاتړ کوي.

  دا مقاله د خالص مخکینۍ پای بشپړ متن لټون ټیکنالوژۍ پلي کول معرفي کوي ، پشمول د IndexedDB لخوا رامینځته شوی inverted index ، مخکینۍ لټون ، د کلمو قطع کولو اصلاح او د څو ژبو ملاتړ.

  د موجوده حلونو سره پرتله کول، د i18n.site خالص مخکینۍ پای بشپړ متن لټون په اندازې کې کوچنی او ګړندی دی، د کوچنیو او منځنیو سایټونو لکه اسنادو او بلاګونو لپاره مناسب دی، او آفلاین شتون لري.

---

# خالص مخکینۍ پای د بشپړ متن لټون

## ترتیب

د څو اونیو پراختیا وروسته [i18n.site](//i18n.site) (په بشپړ ډول جامد markdown څو ژبني ژباړې & ویب پاڼه جوړونې وسیله) اوس د بشپړ متن لټون ملاتړ کوي.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

دا مقاله به د `i18n.site` خالص مخکینۍ بشپړ متن لټون سره شریک کړي ترڅو د لټون اغیز تجربه کړي [i18n.site](//i18n.site)

[کوډ](//github.com/i18n-site/plugin/tree/main/qy) / [سرچینه](//github.com/i18n-site/ie/tree/main/qy) :

## د سرور پرته د بشپړ متن لټون حلونو بیاکتنه

د کوچنیو او منځنیو اندازو خالص جامد ویب پاڼو لپاره لکه د اسنادو/شخصي بلاګونو لپاره، د ځان جوړ شوي بشپړ متن لټون پس منظر ډیر دروند دی، او د خدمت څخه پاک بشپړ متن لټون خورا عام انتخاب دی.

د سرور پرته د بشپړ متن لټون حلونه په دوه پراخه کټګوریو کې راځي:

لومړی، [algolia.com](//algolia.com) د دریمې ډلې لټون خدمت چمتو کونکي د بشپړ متن لټون لپاره مخکښې برخې چمتو کوي.

دا ډول خدمتونه د لټون حجم پراساس تادیاتو ته اړتیا لري، او ډیری وختونه د ویب پاڼې د موافقت په څیر مسلو له امله په چین کې د کاروونکو لپاره شتون نلري.

دا آفلاین نشي کارول کیدی، په انټرانیټ کې نشي کارول کیدی، او لوی محدودیتونه لري. دا مقاله ډیر بحث نه کوي.

دوهم خالص مخکینۍ پای بشپړ متن لټون دی.

اوس مهال [lunrjs](//lunrjs.com) عام خالص مخکینۍ بشپړ متن لټونونه شامل دي او [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ثانوي پراختیا پر بنسټ).

`lunrjs` د شاخصونو د جوړولو لپاره دوه لارې شتون لري، او دواړه خپلې ستونزې لري.

1. مخکې جوړ شوي شاخص فایلونه

   ځکه چې شاخص د ټولو اسنادو ټکي لري، دا په اندازې کې لوی دی.
   هرکله چې یو سند اضافه یا تعدیل شي، د نوي شاخص فایل باید پورته شي.
   دا به د کارونکي انتظار وخت زیات کړي او ډیری بینډ ویت مصرف کړي.

2. اسناد پورته کړئ او په الوتنه کې شاخصونه جوړ کړئ

   د شاخص جوړول د کمپیوټري پلوه خورا سخت کار دی هرکله چې تاسو ورته لاسرسی ومومئ د څرګند ځنډ او ضعیف کارونکي تجربې لامل کیږي.

---

د `lunrjs` سربیره، د بشپړ متن لټون ځینې نور حلونه شتون لري، لکه :

د [fusejs](//www.fusejs.io) لپاره د تارونو ترمنځ ورته والی محاسبه کړئ.

د دې حل فعالیت خورا خراب دی او د بشپړ متن لټون لپاره نشي کارول کیدی (وګورئ [Fuse.js اوږده پوښتنه له 10 ثانیو څخه ډیر وخت نیسي، دا څنګه اصلاح کول؟](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

د لټون لپاره بلوم فلټر وکاروئ [TinySearch](//github.com/tinysearch/tinysearch) د مخکینۍ لټون لپاره نشي کارول کیدی (د مثال په توګه، `goo` داخل کړئ، لټون `good` ، `google` )، او د ورته اتوماتیک بشپړولو اغیز نشي ترلاسه کولی.

د موجوده حلونو د نیمګړتیاو له امله، `i18n.site` یو نوی خالص مخکینۍ پای بشپړ متن لټون حل رامینځته کړی، کوم چې لاندې ځانګړتیاوې لري :

1. د څو ژبو لټون ملاتړ کوي او `gzip` بسته کولو وروسته د لټون کرنل اندازه `6.9KB` ده (د پرتله کولو لپاره، د `lunrjs` اندازه `25KB` ده)
1. د `indexedb` پر بنسټ یو متوجه شاخص جوړ کړئ، کوم چې لږ حافظه اخلي او چټک وي.
1. کله چې اسناد اضافه / تعدیل شي، یوازې اضافه شوي یا تعدیل شوي اسناد بیا لیست شوي، د محاسبې اندازه کموي.
1. د مخکیني لټون ملاتړ کوي او کولی شي د لټون پایلې په ریښتیني وخت کې ښکاره کړي پداسې حال کې چې کارونکي ټایپ کوي.
1. په آفلاین کې شتون لري

لاندې، `i18n.site` تخنیکي تطبیق توضیحات به په تفصیل سره معرفي شي.

## د څو ژبو کلمو ویش

د کلمې قطع کول د براوزر اصلي کلمه segmentation `Intl.Segmenter` کاروي، او ټول اصلي براوزرونه د دې انٹرفیس ملاتړ کوي.

![](//p.3ti.site/1727667759.avif)

د کلمې برخې `coffeescript` کوډ په لاندې ډول دی

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

په:

* `/\p{P}/` یو منظم بیان دی چې د ټکي نښه نښانو سره سمون خوري، په دې کې شامل دي: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> `split('.')` ځکه چې `Firefox` براوزر کلمې قطع کول `. ` برخې نه کوي.</li>


## د شاخص جوړول

د 5 څیزونو ذخیره کولو میزونه په `IndexedDB` کې رامینځته شوي :

* `word` : id -
* `doc` : id - url - د سند نسخه شمیره
* `docWord` د id id - کلمه :
* `prefix` : مخفف - کلمه id
* `rindex` : کلمه id - id :

د سند `url` او نسخه نمبر `ver` کې تیر کړئ، او وپلټئ چې ایا سند په `doc` جدول کې شتون لري. که دا شتون ونلري، یو متوجه شاخص جوړ کړئ. په ورته وخت کې، د هغو اسنادو لپاره چې په کې نه دي تېر شوي، بدل شوی شاخص لرې کړئ.

په دې توګه، زیاتیدونکي شاخصونه ترلاسه کیدی شي او د محاسبې اندازه کمه شي.

په مخکینۍ متقابل عمل کې، د شاخص د بار کولو پرمختګ بار ښودل کیدی شي کله چې د لومړي ځل لپاره د بار کولو څخه مخنیوی وشي "د انیمیشن سره د پرمختګ بار، د واحد پر بنسټ progress + خالص css تطبیق" [انګلیسي](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [چینایي](//juejin.cn/post/7413586285954154522) .

### IndexedDB لوړ همغږي لیکنه

پروژه د اسینکرونس انکاپسولیشن پراساس [idb](//www.npmjs.com/package/idb) IndexedDB

د IndexedDB لوستل او لیکل غیر متناسب دي. کله چې یو شاخص جوړ کړئ، اسناد به په ورته وخت کې د شاخص جوړولو لپاره پورته شي.

د دې لپاره چې د رقابتي لیکلو له امله رامینځته شوي د جزوي معلوماتو له لاسه ورکولو څخه مخنیوی وکړئ ، تاسو کولی شئ لاندې `coffeescript` کوډ ته مراجعه وکړئ او د لوستلو او لیکلو ترمینځ `ing` کیچ اضافه کړئ ترڅو سیالي کونکي لیکنې مداخله وکړي.

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

## دقت او یادول

لټون به لومړی د کارونکي لخوا داخل شوي کلیدي برخې برخې کړي.

فرض کړئ چې د کلمې قطع کولو وروسته `N` کلمې شتون لري کله چې پایلې بیرته راګرځي، نو پایلې به بیرته راستانه شي چې ټول کلیدي کلمې لري، او بیا وروسته پایلې چې `N-1` ، `N-2` ، ...، `1` کلیدي کلمې لري بیرته راستانه شي.

د لټون پایلې ښودل شوي لومړی د پوښتنې دقت ډاډمن کوي، او پایلې وروسته پورته کیږي (لوډ نور تڼۍ کلیک وکړئ) د یادولو نرخ ډاډمن کوي.

![](//p.3ti.site/1727684564.avif)

## د غوښتنې سره بار کړئ

د ځواب سرعت د ښه کولو لپاره، لټون د `yield` جنراتور څخه کار اخلي ترڅو د غوښتنې پر بنسټ بار کولو پلي کړي، او `limit` چې د پایلې پوښتنه کیږي بیرته راستانه شي.

په یاد ولرئ چې هرکله چې تاسو `yield` څخه وروسته بیا لټون کوئ، تاسو اړتیا لرئ چې د `IndexedDB` د پوښتنې لیږد بیا پرانیزئ.

## د ریښتیني وخت لټون مخکینۍ

د لټون پایلې ښودلو لپاره کله چې کاروونکي ټایپ کوي، د بیلګې په توګه، کله چې `wor` داخل شي، `wor` سره مخکینۍ کلمې لکه `words` او `work` ښودل کیږي.

![](//p.3ti.site/1727684944.avif)

د لټون کرنل به د `prefix` جدول د وروستي کلمې لپاره د کلمو د قطع کولو وروسته وکاروي ترڅو ټول هغه کلمې ومومي چې ورسره مخکینۍ وي، او په ترتیب کې لټون وکړي.

د شیک ضد فنکشن `debounce` د مخکینۍ پای تعامل کې هم کارول کیږي (په لاندې ډول پلي کیږي) ترڅو د کارونکي ان پټ محرک لټونونو فریکوینسي کم کړي او د محاسبې مقدار کم کړي.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## په آفلاین کې شتون لري

د شاخص جدول اصلي متن نه ذخیره کوي، یوازې کلمې، چې د ذخیره کولو اندازه کموي.

د لټون پایلو روښانه کول د اصلي متن بیا پورته کولو ته اړتیا لري، او `service worker` سره سمون کولی شي د شبکې تکرار غوښتنو څخه مخنیوی وکړي.

په ورته وخت کې، ځکه چې `service worker` ټولې مقالې زیرمه کوي، یوځل چې کاروونکي لټون ترسره کړي، ټوله ویب پاڼه، د لټون په ګډون، آفلاین شتون لري.

## د مارک ډاون اسنادو اصلاح کول

د `i18n.site` خالص مخکینۍ لټون حل د `MarkDown` اسنادو لپاره غوره شوی.

کله چې د لټون پایلې ښودل کیږي، د څپرکي نوم به ښکاره شي او د کلیک کولو په وخت کې به څپرکی نیویګیټ شي.

![](//p.3ti.site/1727686552.avif)

## لنډیز

د بشپړ متن پلټنه په بشپړ ډول په مخکني پای کې پلي کیږي، هیڅ سرور ته اړتیا نشته. دا د کوچنیو او منځنیو سایټونو لکه اسنادو او شخصي بلاګونو لپاره خورا مناسب دی.

`i18n.site` د خلاصې سرچینې پخپله پرمختللې خالص مخکینۍ لټون، په اندازې کې کوچنی او چټک غبرګون، د اوسني خالص مخکني پای بشپړ متن لټون نیمګړتیاوې حل کوي او د کاروونکي غوره تجربه وړاندې کوي.