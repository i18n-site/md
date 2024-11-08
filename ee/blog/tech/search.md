---

brief: |
  i18n.site doa alɔ nuŋɔŋlɔ blibo didi si me server mele o fifia.

  Nyati sia ɖe ŋgɔgbe-nuŋɔŋlɔ blibo didi mɔ̃ɖaŋununya dzadzɛ ƒe dɔwɔwɔ vɛ, si me inverted index si IndexedDB tu, ŋgɔdonyawo didi, nyawo ƒe mama ƒe nyonyome kple gbegbɔgblɔ geɖe ƒe kpekpeɖeŋu le.

  Ne wotsɔe sɔ kple egbɔkpɔnu siwo li fifia la, i18n.site ƒe ŋgɔgbe-nuŋɔŋlɔ blibo didi dzadzɛa le sue le eƒe lolome nu eye wòwɔa dɔ kabakaba, esɔ na nyatakakadzraɖoƒe suewo kple gãwo abe nuŋlɔɖiwo kple blogwo ene, eye woate ŋu akpɔe le Internet dzi.

---

# Pure Front-End Inverted Nuŋɔŋlɔ Bliboa Didi

## Yomenuwo

Le kwasiɖa geɖe ƒe ŋgɔyiyi megbe la, [i18n.site](//i18n.site) (si nye markdown gbegbɔgblɔ geɖe gɔmeɖeɖe & nyatakakadzraɖoƒe tutudɔwɔnu si le teƒe ɖeka ko) doa alɔ ŋgɔgbe-nuŋɔŋlɔ blibo didi dzadzɛ fifia.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Nyati sia agblɔ mɔ̃ɖaŋununya ƒe dɔwɔwɔ le `i18n.site` pure front-end full-text search Visit [i18n.site](//i18n.site)

Code ʋuʋu : [Di kernel](//github.com/i18n-site/ie/tree/main/qy) / [interactive interface](//github.com/i18n-site/plugin/tree/main/qy)

## Serverless Full-Text Didi Ƒe Kuxiwo Gbɔkpɔnu Me Toto

Le nyatakakadzraɖoƒe suewo kple gãwo siwo le teƒe ɖeka ko abe nuŋlɔɖiwo/ame ŋutɔ ƒe blogwo ene gome la, nuŋɔŋlɔ blibo didi ƒe megbenya si ame ŋutɔ tu tutu kpekpe akpa, eye nuŋɔŋlɔ blibo didi si me subɔsubɔdɔ aɖeke mele o ye nye tiatia si bɔ wu.

Serverless full-text search solutions dze le hatsotso gã eve me:

Gbã la, [algolia.com](//algolia.com)

Dɔ mawo bia be woaxe fe ɖe nusiwo wodi ƒe agbɔsɔsɔ nu, eye zi geɖe la, womete ŋu zãa wo le China-nyigba gã dzi o le nyawo abe nyatakakadzraɖoƒewo ƒe sedziwɔwɔ ene ta.

Womate ŋu azãe le Internet dzi o, womate ŋu azãe le Internet dzi o, eye seɖoƒe gã aɖe le eŋu. Nyati sia meƒo nu tso nu geɖe ŋu o.

Evelia nye ŋgɔgbekpa dzi didi dzadzɛ.

Fifia la, ŋgɔdonya dzadzɛwo didi siwo bɔ la dometɔ aɖewoe nye [lunrjs](//lunrjs.com) kple [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (si wotu ɖe `lunrjs` evelia ƒe ŋgɔyiyi dzi).

`lunrjs` Mɔ eve li siwo dzi woato atu indexwo, eye wo ame evea siaa ƒe kuxiwo le wo si.

1. Index file siwo wotu do ŋgɔ

   Esi nya siwo tso nuŋlɔɖiwo katã me le index la me ta la, eƒe lolome lolo.
   Ɣesiaɣi si wotsɔ nuŋlɔɖi aɖe kpee alo trɔ asi le eŋu la, ele be woatsɔ index file yeye aɖe ade eme.
   Ana ezãla ƒe lalaɣi nadzi ɖe edzi eye wòaxɔ bandwidth geɖe.

2. Tsɔ nuŋlɔɖiwo de eme eye nàtu indexwo le dzodzo me

   Index tutu nye dɔ si me akɔntabubu sesẽ le ne ègbugbɔ index la tutu ɣesiaɣi si nège ɖe eme la, ahe megbedede si dze ƒã kple ezãla ƒe nuteƒekpɔkpɔ madeamedzi vɛ.

---

Tsɔ kpe ɖe `lunrjs` ŋu la, nuŋɔŋlɔ bliboa didi ƒe kuxiwo gbɔkpɔnu bubu aɖewo hã li, abe :

[fusejs](//www.fusejs.io) , bu akɔnta le ka siwo nàdi dome ƒe sɔsɔ ŋu.

Egbɔkpɔnu sia ƒe dɔwɔwɔ menyo kura o eye womate ŋu azãe na nuŋɔŋlɔ bliboa didi o (kpɔ [Fuse.js Nyabiase didi xɔa nusi wu 10 sɛkɛnd, aleke woawɔe wòanyo wu?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) `goo` `good` `google`

Le egbɔkpɔnu siwo li ƒe gbɔdzɔgbɔdzɔwo ta la, `i18n.site` to ŋgɔgbe-nuŋɔŋlɔ blibo didi ƒe egbɔkpɔnu yeye dzadzɛ aɖe vɛ, si ƒe nɔnɔmewo gbɔna :

1. Doa alɔ gbegbɔgblɔ geɖe me didi eye wòle sue le eƒe lolome nu Didi ƒe kernel ƒe lolome le packing `gzip` megbe nye `6.9KB` (ne woatsɔe asɔ kple wo nɔewo la, `lunrjs` ƒe lolome nye `25KB` )
1. Tu index si wogbugbɔ trɔ si wotu ɖe `indexedb` dzi, si mexɔa ŋkuɖodzinu boo aɖeke o eye wòwɔa dɔ kabakaba.
1. Ne wotsɔ nuŋlɔɖiwo kpee/trɔ asi le wo ŋu la, nuŋlɔɖi siwo wotsɔ kpe ɖe eŋu alo esiwo ŋu wotrɔ asi le koe wogbugbɔ dea xexlẽdzesiwo me, si wɔnɛ be akɔntabubuwo dzi ɖena kpɔtɔna.
1. Doa alɔ ŋgɔdonya didi eye ate ŋu aɖe didi me tsonu afia le ɣeyiɣi ŋutɔŋutɔ me esime zãla le nu ŋlɔm.
1. Woate ŋu akpɔe le Internet dzi

Le ete la, woaɖe mɔ̃ɖaŋununya ƒe dɔwɔwɔ ŋuti nyatakaka `i18n.site` afia tsitotsito.

## Nyawo Ƒe Mama Le Gbegbɔgblɔ Geɖe Me

Nyawo mama zãa nyatakakadzraɖoƒea ƒe nyawo mama `Intl.Segmenter` , eye nyatakakadzraɖoƒe veviwo katã doa alɔ ŋgɔdonya sia.

![](//p.3ti.site/1727667759.avif)

Nya ƒe mama `coffeescript` kɔda la le ale

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

eme:

* `/\p{P}/` nye nyagbɔgblɔ si wozãna edziedzi si sɔ kple nuŋɔŋlɔmedzesiwo Dzesi tɔxɛ siwo sɔ kple wo nɔewo dometɔ aɖewoe nye: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` nye elabena `Firefox` browser nyawo mama me ma `. ` o.</li>


## Index Xɔtutu

Wowɔ nudzraɖoƒe kplɔ̃ 5 le `IndexedDB` :

* `word` nyawo : id -
* `doc` : id - Nuŋlɔɖi url - Nuŋlɔɖi ƒe tɔtrɔ ƒe xexlẽdzesi
* `docWord` : Nuŋlɔɖi ƒe ƒuƒoƒo id - nya id
* `prefix` : Array si nye ŋgɔdonya - nya id
* `rindex` : Nya id - Nuŋlɔɖi id : Fli ƒe xexlẽdzesiwo ƒe ƒuƒoƒo

To nuŋlɔɖi `url` kple eƒe tɔtrɔ xexlẽdzesi `ver` ƒe ƒuƒoƒoa me, eye nàdi ne nuŋlɔɖia li le kplɔ̃ `doc` Ne meli o la, wɔ index si wogbugbɔ trɔ. Le ɣeyiɣi ma ke me la, ɖe nuŋlɔɖi mawo siwo wometsɔ yi eme o la ƒe index si wogbugbɔ trɔ la ɖa.

To mɔ sia dzi la, woate ŋu awɔ dzidziɖedzi ƒe indexing eye woaɖe akɔntabubu ƒe agbɔsɔsɔ dzi akpɔtɔ.

Le ŋgɔgbe-nuwuwu ƒe kadodo me la, woateŋu aɖe agbatsɔtsɔ ƒe ŋgɔyiyi ƒe dzesi si le index la afia be woaƒo asa na megbedede ne wole agba tsɔm zi gbãtɔ Kpɔ "Ŋgɔyiyi ƒe Dzesi si me Animatsi le, si wotu ɖe Ðeka dzi progress + Pure css Implementation" [Eŋlisigbe](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [China](//juejin.cn/post/7413586285954154522) .

### IndexedDB Kɔkɔ Le Ɣeyiɣi Ɖeka Me Nuŋɔŋlɔ

[idb](//www.npmjs.com/package/idb) dɔa ɖe asynchronous encapsulation si nye IndexedDB

IndexedDB ƒe nuxexlẽ kple nuŋɔŋlɔ nye asynchronous. Ne wole index wɔm la, woatsɔ nuŋlɔɖiwo ade eme le ɣeyiɣi ɖeka me be woawɔ index la.

Be nàƒo asa na nyatakakawo ƒe akpa aɖe ƒe bu si hoʋiʋli ƒe nuŋɔŋlɔ hena vɛ la, àte ŋu akpɔ `coffeescript` ƒe kɔda si le ete eye nàtsɔ `ing` cache akpe ɖe nuxexlẽ kple nuŋɔŋlɔ dome be nàxe hoʋiʋli ƒe nuŋɔŋlɔwo.

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

## Nuwɔwɔ Nyuie Kple Ŋkuɖodzi

Didi la ama nya vevi siwo zãla la ŋlɔ la me gbã.

Tsɔe be nya `N` le nyawo ƒe mama megbe Ne èle emetsonuwo trɔm la, woatrɔ emetsonu siwo me nya veviwo katã le gbã, eye emegbe woatrɔ emetsonu siwo me nya vevi `N-1` , `N-2` ,..., `1` le.

Didi ƒe nyatakaka siwo woɖe fia gbã la kpɔa egbɔ be nyabiasea de pɛpɛpɛ, eye emetsonu siwo woda ɖe eme emegbe (zi load more ƒe dzesi dzi) kpɔa egbɔ be wogbugbɔ ŋku lé ɖe eŋu.

![](//p.3ti.site/1727684564.avif)

## Agba Le Didi Nu

Be woana ŋuɖoɖo ƒe duƒuƒu nanyo ɖe edzi la, didia zãa `yield` generator tsɔ wɔa agbatsɔtsɔ le didi nu, eye wòtrɔna `limit` si wobia emetsonu aɖe.

De dzesii be ɣesiaɣi si nàgadi le `yield` megbe la, ele be nàgbugbɔ aʋu biabia ƒe asitsatsa si nye `IndexedDB` .

## Do Ŋgɔ Na Ɣeyiɣi Ŋutɔŋutɔ Me Didi

Be woate ŋu aɖe numekuku me tsonu afia esime zãla le nu ŋlɔm, le kpɔɖeŋu me, ne woŋlɔ `wor` la, woaɖe nya siwo wotsɔ `wor` do ŋgɔ abe `words` kple `work` ene afia.

![](//p.3ti.site/1727684944.avif)

Didi ƒe ƒuƒoƒoa azã `prefix` kplɔ̃a na nya mamlɛtɔ le nyawo mama megbe atsɔ adi nya siwo katã wotsɔ do ŋgɔ nɛ, eye wòadi ɖe wo nɔewo yome.

Wozãa anti-shake function `debounce` hã le ŋgɔgbe ƒe kadodo me (wowɔe abe alesi gbɔna ene) tsɔ ɖea zãla ƒe nyawo tsɔtsɔ de eme si ʋãa didiwo dzi kpɔtɔna eye woɖea akɔntabubu ƒe agbɔsɔsɔ dzi kpɔtɔna.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Woate Ŋu Akpɔe Le Internet Dzi

Index table la medzraa nuŋɔŋlɔ gbãtɔa ɖo o, nyawo koe wodzrana ɖo, si ɖea nudzraɖoƒea ƒe agbɔsɔsɔ dzi kpɔtɔna.

Didi ƒe emetsonuwo ƒe dzesidede bia be woagbugbɔ nuŋɔŋlɔ gbãtɔa ade eme, eye `service worker` ƒe sɔsɔ ate ŋu aƒo asa na network biabia enuenu.

Le ɣeyiɣi ma ke me la, esi wònye be `service worker` dzraa nyatiwo katã ɖo ta la, ne zãla la nya wɔ didi aɖe ko la, nyatakakadzraɖoƒe bliboa, si me didia hã le, nɔa Internet dzi.

## Fia MarkDown Nuŋlɔɖiwo Ƒe Nyonyome

`i18n.site` 's pure front-end search solution nye esi wowɔ wònyo wu na nuŋlɔɖi `MarkDown` .

Ne èle nyatakaka siwo nèdi la ɖem fia la, ta la ƒe ŋkɔ adze eye nàʋu ta la me ne èzi edzi.

![](//p.3ti.site/1727686552.avif)

## Gblɔe Kpuie

Nuŋɔŋlɔ blibo didi si wogbugbɔ trɔ si wowɔ le ŋgɔgbekpa dzi ɖeɖeko, mehiã be woatsɔ server aɖeke awɔ dɔe o. Esɔ ŋutɔ na nyatakakadzraɖoƒe suewo kple gãwo abe nuŋlɔɖiwo kple ame ŋutɔ ƒe blogwo ene.

`i18n.site` Open source self-veloped pure front-end search, si le sue le eƒe lolome nu eye wòwɔa nu kabakaba, kpɔa fifi pure front-end full-text didi ƒe gbɔdzɔgbɔdzɔwo gbɔ eye wònaa zãla ƒe nuteƒekpɔkpɔ nyuitɔ.