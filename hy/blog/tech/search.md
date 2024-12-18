---

brief: |
  i18n.site-ն այժմ աջակցում է առանց սերվերի ամբողջական տեքստի որոնում:

  Այս հոդվածը ներկայացնում է ամբողջական տեքստի ամբողջական որոնման տեխնոլոգիայի ներդրումը, ներառյալ IndexedDB-ի կողմից կառուցված շրջված ինդեքսը, նախածանցների որոնումը, բառերի հատվածավորման օպտիմալացումը և բազմալեզու աջակցությունը:

  Համեմատած գոյություն ունեցող լուծումների հետ՝ i18n.site-ի ամբողջական ամբողջական տեքստային որոնումը փոքր է և արագ, հարմար է փոքր և միջին կայքերի, ինչպիսիք են փաստաթղթերն ու բլոգները, և հասանելի է անցանց:

---

# Մաքուր Ճակատային Շրջված Ամբողջական Տեքստի Որոնում

## Հաջորդականությունը

Մի քանի շաբաթների մշակումից հետո [i18n.site](//i18n.site) զուտ ստատիկ markdown բազմալեզու թարգմանության & վեբկայքի ստեղծման գործիք) այժմ աջակցում է ամբողջական տեքստային որոնումը:

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Այս հոդվածը կներկայացնի `i18n.site` մաքուր ամբողջական տեքստային որոնման տեխնիկական իրագործումը [i18n.site](//i18n.site)

Կոդ բաց : [Որոնման միջուկ](//github.com/i18n-site/ie/tree/main/qy) / [ինտերակտիվ ինտերֆեյս](//github.com/i18n-site/plugin/tree/main/qy)

## Առանց Սերվերի Ամբողջական Տեքստի Որոնման Լուծումների Վերանայում

Փոքր և միջին չափի զուտ ստատիկ կայքերի համար, ինչպիսիք են փաստաթղթերը/անձնական բլոգները, ինքնուրույն կառուցված ամբողջական տեքստային որոնման հետին պլան կառուցելը չափազանց ծանր է, և առանց ծառայության ամբողջական տեքստի որոնումն առավել տարածված ընտրությունն է:

Առանց սերվերի ամբողջական տեքստի որոնման լուծումները բաժանվում են երկու լայն կատեգորիաների.

[algolia.com](//algolia.com) , երրորդ կողմի որոնման ծառայություններ մատուցողները ապահովում են ամբողջական տեքստային որոնման համար նախատեսված բաղադրիչներ:

Նման ծառայությունները պահանջում են վճարում՝ հիմնված որոնման ծավալի վրա, և հաճախ անհասանելի են մայրցամաքային Չինաստանի օգտատերերի համար՝ վեբ կայքի համապատասխանության հետ կապված խնդիրների պատճառով:

Այն չի կարող օգտագործվել անցանց ռեժիմում, չի կարող օգտագործվել ինտրանետում և ունի մեծ սահմանափակումներ: Այս հոդվածը շատ բան չի քննարկում:

Երկրորդը մաքուր ճակատային ամբողջական տեքստային որոնումն է:

Ներկայում, [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ամբողջական տեքստային որոնումները `lunrjs` են [lunrjs](//lunrjs.com)

`lunrjs` Ինդեքսներ ստեղծելու երկու եղանակ կա, և երկուսն էլ ունեն իրենց խնդիրները:

1. Նախապես կառուցված ինդեքսային ֆայլեր

   Քանի որ ինդեքսը պարունակում է բառեր բոլոր փաստաթղթերից, այն մեծ է չափերով:
   Ամեն անգամ, երբ փաստաթուղթ ավելացվում կամ փոփոխվում է, պետք է բեռնվի նոր ինդեքսային ֆայլ:
   Դա կավելացնի օգտվողի սպասման ժամանակը և կսպառի մեծ թողունակություն:

2. Բեռնել փաստաթղթերը և կառուցել ինդեքսներ անմիջապես

   Ինդեքս կառուցելը հաշվողականորեն ինտենսիվ խնդիր է Ամեն անգամ, երբ մուտք գործեք ինդեքսը, կառաջացնի ակնհայտ ուշացումներ և վատ օգտատերերի փորձ:

---

Բացի `lunrjs` -ից, կան ամբողջական տեքստի որոնման այլ լուծումներ, ինչպիսիք են :

[fusejs](//www.fusejs.io) հաշվարկեք որոնման տողերի նմանությունը:

Այս լուծման արդյունավետությունը չափազանց վատ է և չի կարող օգտագործվել ամբողջական տեքստի որոնման համար (տես [Fuse.js Երկար հարցումը տևում է ավելի քան 10 վայրկյան, ինչպե՞ս այն օպտիմալացնել:](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ):

[TinySearch](//github.com/tinysearch/tinysearch) օգտագործեք Bloom ֆիլտրը որոնման համար, չի կարող օգտագործվել նախածանցի որոնման համար (օրինակ, մուտքագրեք `goo` , որոնեք `good` , `google` ) և չի կարող հասնել նմանատիպ ավտոմատ ավարտման էֆեկտի:

Գոյություն ունեցող լուծումների թերությունների պատճառով `i18n.site` մշակեց նոր մաքուր ճակատային ամբողջական տեքստի որոնման լուծում, որն ունի հետևյալ բնութագրերը :

1. Աջակցում է բազմալեզու որոնմանը և չափսերով փոքր է որոնման միջուկի չափը `gzip` փաթեթավորումից հետո `6.9KB` է (համեմատության համար `lunrjs` -ի չափը `25KB` է):
1. Կառուցեք `indexedb` ի վրա հիմնված շրջված ինդեքս, որն ավելի քիչ հիշողություն է խլում և արագ է:
1. Երբ փաստաթղթերը ավելացվում/փոփոխվում են, միայն ավելացված կամ փոփոխված փաստաթղթերը վերաինդեքսավորվում են՝ նվազեցնելով հաշվարկների քանակը:
1. Աջակցում է նախածանցների որոնմանը և կարող է իրական ժամանակում ցուցադրել որոնման արդյունքները, երբ օգտագործողը մուտքագրում է:
1. Հասանելի է անցանց

Ստորև մանրամասն կներկայացվեն `i18n.site` տեխնիկական իրագործման մանրամասներ։

## Բառերի Բազմալեզու Հատվածավորում

Բառի սեգմենտավորումն օգտագործում է բրաուզերի բնիկ բառերի հատվածավորումը `Intl.Segmenter` , և բոլոր հիմնական բրաուզերներն աջակցում են այս ինտերֆեյսին:

![](//p.3ti.site/1727667759.avif)

Բառի հատվածավորման `coffeescript` կոդը հետևյալն է

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

մեջ:

* `/\p{P}/` { արտահայտություն է, որը համապատասխանում է `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` նշաններին: | } . «.</p><ul><li> `split('.')` այն պատճառով է, որ `Firefox` բրաուզերի բառի հատվածավորումը չի բաժանում `. ` :</li>


## Ինդեքսային Շենք

`IndexedDB` -ում ստեղծվել են օբյեկտների պահպանման 5 աղյուսակներ :

* `word` : id -
* `doc` : id - url - Փաստաթղթի տարբերակի համարը
* `docWord` : Փաստաթղթի id - id զանգված
* `prefix` : id նախածանցի -
* `rindex` : Word id - Փաստաթուղթ id : Տողային թվերի զանգված

Անցեք փաստաթղթի `url` և `ver` տարբերակի զանգվածը և փնտրեք, թե արդյոք փաստաթուղթը գոյություն ունի աղյուսակ `doc` ում: Եթե այն գոյություն չունի, ստեղծեք շրջված ինդեքս: Միևնույն ժամանակ, հանեք շրջված ինդեքսը այն փաստաթղթերի համար, որոնք չեն փոխանցվել:

Այս կերպ կարելի է հասնել աստիճանական ինդեքսավորման և կրճատվել հաշվարկի չափը:

Առջևի փոխազդեցության դեպքում ինդեքսի բեռնման առաջընթացի գիծը կարող է ցուցադրվել՝ առաջին անգամ բեռնելիս ուշացումից խուսափելու համար տե՛ս «Առաջընթացի գիծը անիմացիայով, հիմնված է միայնակ progress + Մաքուր css իրականացման վրա» [անգլերեն](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [չինարեն](//juejin.cn/post/7413586285954154522) :

### IndexedDB Բարձր Միաժամանակյա Գրություն

Նախագիծը [idb](//www.npmjs.com/package/idb) է IndexedDB -ի ասինխրոն ինկապսուլյացիայի հիման վրա:

IndexedDB-ի ընթերցումները և գրությունները ասինխրոն են: Ինդեքս ստեղծելիս փաստաթղթերը միաժամանակ կբեռնվեն՝ ինդեքս ստեղծելու համար:

Մրցակցային գրելու հետևանքով առաջացած տվյալների մասնակի կորստից խուսափելու համար կարող եք դիմել ստորև բերված `coffeescript` կոդը և ավելացնել `ing` քեշ՝ կարդալու և գրելու միջև՝ մրցակցող գրությունները ընդհատելու համար:

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

## Ճշգրտություն ԵՒ Հիշեցում

Որոնումը նախ բաժանելու է օգտագործողի մուտքագրած հիմնաբառերը:

Ենթադրենք, որ սեգմենտավորումից հետո կա `N` բառ, երբ արդյունքները վերադարձնում են, նախ կվերադարձվեն բոլոր հիմնաբառեր պարունակող արդյունքները, իսկ հետո կվերադարձվեն `N-1` , `N-2` ,..., `1` հիմնաբառեր պարունակող արդյունքներ:

Ցուցադրվող որոնման արդյունքները նախ ապահովում են հարցման ճշգրտությունը, իսկ հետո բեռնված արդյունքները (սեղմեք բեռնել ավելի կոճակը) ապահովում են հետկանչի արագությունը:

![](//p.3ti.site/1727684564.avif)

## Բեռնում Ըստ Պահանջի

Արձագանքման արագությունը բարելավելու համար որոնումն օգտագործում է `yield` գեներատորը՝ ըստ պահանջի բեռնում իրականացնելու համար և վերադառնում է `limit` անգամ, երբ արդյունքը հարցվում է:

Նկատի ունեցեք, որ ամեն անգամ, երբ նորից որոնում եք `yield` ից հետո, դուք պետք է նորից բացեք `IndexedDB` -ի հարցման գործարքը:

## Նախածանց Իրական Ժամանակի Որոնում

Օգտագործողի մուտքագրման ընթացքում որոնման արդյունքները ցուցադրելու համար, օրինակ, երբ մուտքագրվում է `wor` , ցուցադրվում են `wor` ով նախածանցով բառեր, ինչպիսիք են `words` և `work` :

![](//p.3ti.site/1727684944.avif)

Որոնման միջուկը կօգտագործի `prefix` աղյուսակը բառի բաժանումից հետո վերջին բառի համար՝ գտնելու դրա հետ նախածանցով բոլոր բառերը և որոնելու հաջորդականությամբ:

Թափահարման դեմ ֆունկցիան `debounce` օգտագործվում է նաև առջևի փոխազդեցության մեջ (իրագործվում է հետևյալ կերպ)՝ նվազեցնելու օգտատերերի մուտքագրման ակտիվացման որոնումների հաճախականությունը և նվազեցնելու հաշվարկների քանակը:

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Հասանելի Է Անցանց

Ինդեքսային աղյուսակը չի պահում բնօրինակ տեքստը, միայն բառերը, ինչը նվազեցնում է պահեստավորման քանակը:

Որոնման արդյունքների ընդգծումը պահանջում է վերբեռնել բնօրինակ տեքստը, իսկ `service worker` ի համապատասխանությունը կարող է խուսափել ցանցի կրկնվող հարցումներից:

Միևնույն ժամանակ, քանի որ `service worker` պահում է բոլոր հոդվածները, երբ օգտատերը որոնում է, ամբողջ կայքը, ներառյալ որոնումը, հասանելի է անցանց:

## Ցուցադրել MarkDown Փաստաթղթերի Օպտիմալացում

`i18n.site` -ի մաքուր ճակատային որոնման լուծումը օպտիմիզացված է `MarkDown` փաստաթղթի համար:

Որոնման արդյունքները ցուցադրելիս գլխի անունը կցուցադրվի, իսկ գլուխը նավարկվելու է սեղմելիս:

![](//p.3ti.site/1727686552.avif)

## Ամփոփել

Շրջված ամբողջական տեքստի որոնումն իրականացվել է բացառապես ճակատային մասում, սերվեր չի պահանջվում: Այն շատ հարմար է փոքր և միջին կայքերի համար, ինչպիսիք են փաստաթղթերը և անձնական բլոգները:

`i18n.site` Բաց կոդով ինքնուրույն մշակված մաքուր առջևի որոնում, փոքր չափերով և արագ արձագանքմամբ, լուծում է ընթացիկ մաքուր առջևի ամբողջական տեքստային որոնման թերությունները և ապահովում է ավելի լավ օգտվողի փորձ: