---

brief: |
  i18n.site bjale e thekga go nyaka sengwalwa ka botlalo seo se se nago seva.

  Sehlogo se se tsebagatša go tsenywa tirišong ga theknolotši ya go nyaka sengwalwa ka moka sa go hlweka sa ka pele, go akaretšwa tšhupamabaka ye e fetotšwego yeo e agilwego ke IndexedDB, nyakišišo ya hlogo, go lokišetša karoganyo ya mantšu le thekgo ya maleme a mantši.

  Ge go bapetšwa le ditharollo tše di lego gona, go nyaka mo go hlwekilego ga sengwalwa ka botlalo ga ka pele ga i18n.site ke mo go nnyane ka bogolo ebile ke ka lebelo, go loketše diwepesaete tše nnyane le tša magareng tša go swana le ditokomane le di-blog, gomme e hwetšagala ka ntle ga inthanete.

---

# Pure Pele-Qetellong Inverted Tletseng Mongolo Batla

## Tatelano

Ka & ga dibeke tše mmalwa tša tlhabollo markdown [i18n.site](//i18n.site)

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Sehlogo se se tla abelana ka phethagatšo ya setegeniki ya `i18n.site` pure front-end full-text [i18n.site](//i18n.site) go itemogela phello ya go nyaka.

Khoutu mohlodi o bulehileng : [Batla kernel](//github.com/i18n-site/ie/tree/main/qy) / [segokanyimmediamentsi sa sebolokigolo](//github.com/i18n-site/plugin/tree/main/qy)

## Tlhahlobo Ya Ditharollo Tša Go Nyaka Sengwalwa Ka Moka Tšeo Di Se Nago Seva

Bakeng sa diwepesaete tše nnyane le tša magareng tšeo di sa fetogego ka mo go feletšego tša go swana le ditokomane/di-blog tša motho ka noši, go aga morago ga go nyaka sengwalwa ka moka seo se ikgethilego go boima kudu, gomme nyakišišo ya sengwalwa ka moka seo se se nago tirelo ke kgetho ye e tlwaelegilego kudu.

Ditharollo tša go nyaka sengwalwa ka moka tšeo di se nago seva di wela ka magoro a mabedi a sephara:

Sa pele, tšoanang [algolia.com](//algolia.com) Baabi ba ditirelo tša go nyaka ba mokgatlo wa boraro ba fana ka dikarolo tša ka pele bakeng sa nyakišišo ya sengwalwa ka botlalo.

Ditirelo tše bjalo di nyaka tefo yeo e theilwego godimo ga bophagamo bja nyakišišo, gomme gantši ga di hwetšagale go badiriši ka nagengkgolo ya China ka lebaka la ditaba tša go swana le kobamelo ya weposaete.

E ka se šomišwe ka ntle ga inthanete, e ka se šomišwe go intranet, ebile e na le mellwane ye megolo. Sehlogo se ga se bolele kudu.

Ya bobedi ke go nyaka sengwalwa ka botlalo sa mafelelo a go hlweka.

Ga bjale, dinyakišišo tše di tlwaelegilego tše di hlwekilego tša mafelelo a sengwalwa ka moka di akaretša [lunrjs](//lunrjs.com) le [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (tšeo di theilwego godimo ga `lunrjs` ya tlhabollo ya bobedi).

`lunrjs` Go na le ditsela tše pedi tša go aga ditšhupetšo, gomme bobedi bja tšona di na le mathata a tšona.

1. Pre-hahiloeng index difaele

   Ka ge tšhupamabaka e na le mantšu go tšwa ditokomaneng ka moka, ke ye kgolo ka bogolo.
   Nako le nako ge tokumente e okeletšwa goba e fetošwa, faele ye mpsha ya tšhupamabaka e swanetše go laetšwa.
   E tla oketša nako ya go leta ya mosediriši gomme ya ja bandwidth e ntši.

2. Laetša ditokomane gomme o age ditšhupetšo ka go fofa

   Go aga tšhupamabaka ke mošomo wo o nyakago go šomiša dikhomphuthara Go aga leswa tšhupamabaka nako le nako ge o e fihlelela go tla hlola go šalela morago mo go lego molaleng le boitemogelo bjo bo fokolago bja modiriši.

---

Go tlaleletša go `lunrjs` , go na le ditharollo tše dingwe tša go nyaka sengwalwa ka botlalo, go swana le :

[fusejs](//www.fusejs.io) , bala go swana magareng ga dithapo go nyaka.

Tiragatšo ya tharollo ye e fokola kudu gomme e ka se šomišwe go nyaka sengwalwa ka botlalo (bona [Fuse.js Potšišo ye telele e tšea metsotswana ye e fetago 10 , o ka e kaonafatša bjang?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Ka lebaka la mafokodi a ditharollo tše di lego gona, `i18n.site` e hlamile tharollo ye mpsha ye e hlwekilego ya go nyaka sengwalwa ka botlalo sa ka pele, yeo e nago le dimelo tše di latelago :

1. E thekga nyakišišo ya maleme a mantši gomme ke ye nnyane ka bogolo Bogolo bja kernel ya nyakišišo ka morago ga go phuthela `gzip` ke `6.9KB` (bakeng sa go bapetša, bogolo bja `lunrjs` ke `25KB` )
1. Aga tšhupamabaka ye e fetotšwego yeo e theilwego go `indexedb` , yeo e tšeago memori ye nnyane ebile e le ka lebelo.
1. Ge ditokomane di okeletšwa/phetošwa, ke fela ditokomane tše di okeditšwego goba tše di fetotšwego tšeo di tšhupamago gape, go fokotša palo ya dipalo.
1. E thekga nyakišišo ya hlogo gomme e ka bontšha dipoelo tša nyakišišo ka nako ya nnete ge modiriši a thaepa.
1. E hwetšagala ka ntle ga inthanete

Ka fase, dintlha tše `i18n.site` tša phethagatšo ya sethekniki di tla tsebagatšwa ka botlalo.

## Karoganyo Ya Mantšu Ka Maleme a Mantši

Karoganyo ya mantšu e šomiša karoganyo ya mantšu ya setlogo ya sephephediši `Intl.Segmenter` , gomme diphensele ka moka tše di tlwaelegilego di thekga segokanyimmediamentsi sa sebolokigolo se.

![](//p.3ti.site/1727667759.avif)

Khoutu ya karoganyo ya lentšu `coffeescript` e ka tsela ye e latelago

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

ka:

* `/\p{P}/` ke polelo ya ka mehla yeo e nyalelanago le maswao a maswaodikga Maswao a itšego a go nyalelanya a akaretša: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` ke ka lebaka la gore `Firefox` karoganyo ya mantšu ya sephephediši ga e arole `. ` .</li>


## Moago Wa Tšhupamabaka

Ditafola tše 5 tša polokelo ya dilo di hlotšwe ka `IndexedDB` :

* `word` mantšu : id -
* `doc` : id - Tokomane url - Nomoro ya phetolelo ya tokomane
* `docWord` : Aray ya tokomane id - lentsoe id
* `prefix` : Lenaneo la hlogo ya - lentšu id
* `rindex` : Lentšu id - Tokomane id : Lenaneo la dinomoro tša mela

Fetiša ka gare ga lenaneo la tokumente `url` le nomoro ya phetolelo `ver` , gomme o nyake ge eba tokumente e gona tafoleng `doc` Ge e se gona, hlama tšhupamabaka ye e fetotšwego. Ka nako ye e swanago, tloša tšhupamabaka ye e fetotšwego ya ditokomane tšeo tšeo di sa fetišetšwago ka gare.

Ka tsela ye, indexing ya go oketšega e ka fihlelelwa gomme palo ya go bala e a fokotšwa.

Tšhomišano ya mafelelo a ka pele, baara ya tšwelopele ya go rwala ya tšhupamabaka e ka bontšhwa go efoga go šalela morago ge o laetša ka lekga la mathomo Bona "Baari ya Kgatelopele ka Dipopaye, E theilwe godimo ga e tee progress + Pure css Implementation" [Seisemane](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Setšhaena](//juejin.cn/post/7413586285954154522) .

### IndexedDB Godimo Go Ngwala Ka Nako E Tee

Projeke e [idb](//www.npmjs.com/package/idb) e thehiloeng encapsulation asynchronous ya IndexedDB

IndexedDB e bala le go ngwala ke asynchronous. Ge o hlama tšhupamabaka, ditokomane di tla laetšwa ka nako e tee go hlama tšhupamabaka.

Gore o efoge tahlegelo ya datha ye e sego ya felela yeo e hlolwago ke go ngwala ka phadišano, o ka lebelela khoutu ya `coffeescript` ye e lego ka mo tlase gomme wa oketša ka cache `ing` magareng ga go bala le go ngwala go thibela go ngwala ga phadišano.

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

## Go Nepagala Le Go Gopola

Patlo e tla thoma ka go arola mantšu a bohlokwa ao a tsentšwego ke modiriši.

Akanya gore go na le mantšu `N` ka morago ga karoganyo ya mantšu Ge o bušetša dipoelo, dipoelo tše di nago le mantšu ka moka a bohlokwa di tla bušetšwa morago, gomme ka morago ga moo dipoelo tše di nago le mantšu a `1` `N-1` , `N-2` ,..., di tla bušetšwa morago.

Dipoelo tša nyakišišo tšeo di bontšhitšwego pele di netefatša go nepagala ga potšišo, gomme dipoelo tšeo di laeditšwego ka morago (klika konope ya go laetša tše ntši) di netefatša seelo sa go gopola.

![](//p.3ti.site/1727684564.avif)

## Morwalo Ka Nyakego

Gore go kaonafatšwe lebelo la karabelo, nyakišišo e šomiša jenereithara `yield` go phethagatša go rwala ka nyakego, gomme e boela morago `limit` nako ge sephetho se botšišwa.

Hlokomela gore nako le nako ge o nyaka gape ka morago ga `yield` , o swanetše go bula gape kgwebišano ya potšišo ya `IndexedDB` .

## Sehlongwapele Sa Nako Ya Nnete Ya Go Nyaka

Gore go bontšhwe dipoelo tša nyakišišo ge modiriši a thaepa, mohlala, ge `wor` e tsentšwe, mantšu ao a hlomilwego pele ka `wor` go swana le `words` le `work` a a bontšhwa.

![](//p.3ti.site/1727684944.avif)

Kernel ya nyakišišo e tla šomiša tafola ya `prefix` ya lentšu la mafelelo ka morago ga karoganyo ya mantšu go hwetša mantšu ka moka ao a hlomilwego pele ka yona, gomme o nyake ka tatelano.

Mošomo wa go lwantšha go šikinyega `debounce` o šomišwa gape ka tirišanong ya ka pele (yeo e phethagaditšwego ka tsela ye e latelago) go fokotša maqhubu a tsenyo ya mosediriši yeo e hlohleletšago dinyakišišo le go fokotša palo ya go bala.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## E Hwetšagala Ka Ntle Ga Inthanete

Tafola ya tšhupamabaka ga e boloke sengwalwa sa mathomo, mantšu fela, yeo e fokotšago palo ya polokelo.

Go hlagiša dipoelo tša nyakišišo go nyaka go laetša gape sengwalwa sa mathomo, gomme go swantšha `service worker` go ka efoga dikgopelo tša netweke tše di boeletšwago.

Ka nako e swanago, ka lebaka la gore `service worker` e boloka dihlogo ka moka, ge mosediriši a šetše a dirile nyakišišo, weposaete ka moka, go akaretša le nyakišišo, e hwetšagala ka ntle ga inthanete.

## Pontšo Optimization Ya Ditokomane MarkDown

`i18n.site` 's hloekileng pele-qetellong batla tharollo e optimized bakeng sa `MarkDown` ditokomane.

Ge o bontšha dipoelo tša nyakišišo, leina la kgaolo le tla bontšhwa gomme kgaolo e tla sepetšwa ge e klika.

![](//p.3ti.site/1727686552.avif)

## Akaretša

Inverted ka botlalo-sengwalwa batla kenngwa tshebetsong feela ka pele qetellong, ha ho seva hlokahala. E loketše kudu diwepesaete tše nnyane le tše bogareng tša go swana le ditokomane le di-blog tša motho ka noši.

`i18n.site` Patlo ya ka pele ye e hlwekilego yeo e itlhamilego ka mohlodi wo o bulegilego, ye nnyane ka bogolo le karabelo ya ka pela, e rarolla mafokodi a nyakišišo ya bjale ye e hlwekilego ya mafelelo a ka pele ya sengwalwa ka botlalo gomme e fa maitemogelo a kaone a modiriši.