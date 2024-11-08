---

brief: |
  i18n.site e se e ts'ehetsa lipatlisiso tsa mongolo o felletseng ntle le seva.

  Sengoliloeng sena se hlahisa ts'ebetsong ea thekenoloji e hloekileng ea ho batla mongolo o felletseng, ho kenyeletsoa indexed inverted e hahiloeng ke IndexedDB, patlo ea li-prefix, ntlafatso ea likarolo tsa mantsoe le tšehetso ea lipuo tse ngata.

  Ha ho bapisoa le litharollo tse seng li le teng, patlo ea mongolo o felletseng oa i18n.site e nyane ka boholo ebile e potlakile, e loketse liwebosaete tse nyane le tse mahareng joalo ka litokomane le li-blog, 'me e fumaneha ntle le marang-rang.

---

# Patlo E Felletseng Ea Mongolo O Felletseng

## Tatelano

Kamora libeke tse 'maloa tsa nts'etsopele [i18n.site](//i18n.site) (sesebelisoa sa ho aha sebaka sa marang-rang sa markdown multilingualtranslation & ) se ts'ehetsa lipatlisiso tsa mongolo o felletseng.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Sengoliloeng sena se tla arolelana ts'ebetso ea botekgeniki ea `i18n.site` search-end-end-full-end [i18n.site](//i18n.site) ho fumana phello ea ho batla.

Khoutu mohloli o : [kernel](//github.com/i18n-site/ie/tree/main/qy) / [interface e sebetsang](//github.com/i18n-site/plugin/tree/main/qy)

## Tlhahlobo Ea Litharollo Tsa Patlo Ea Mongolo O Felletseng Ntle Le Seva

Bakeng sa liwebsaete tse nyane le tse mahareng tse sa fetoheng joalo ka litokomane / li-blog tsa motho, ho aha mokhoa oa ho batla oa mongolo o felletseng o boima haholo, 'me ho batla mongolo o felletseng ntle le litšebeletso ke khetho e tloaelehileng.

Litharollo tsa patlo ea mongolo o felletseng ntle le seva li oela ka mekhahlelo e 'meli e pharaletseng:

Taba ea pele, tse tšoanang [algolia.com](//algolia.com)

Litšebeletso tse joalo li hloka tefo ho ipapisitsoe le bongata ba patlo, 'me hangata ha li fumanehe ho basebelisi ba China ka lebaka la litaba tse kang ho latela melao ea sebaka sa marang-rang.

E ke ke ea sebelisoa ntle le marang-rang, e ke ke ea sebelisoa ho intranet, 'me e na le meeli e mengata. Sengoliloeng sena ha se bue haholo.

Ea bobeli ke patlo e felletseng ea mongolo.

Hajoale, lipatlisiso tse tloaelehileng tsa mongolo o felletseng li kenyelletsa [lunrjs](//lunrjs.com) le [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (e ipapisitse le ntlafatso ea `lunrjs` ).

`lunrjs` Ho na le mekhoa e 'meli ea ho theha li-index,' me ka bobeli li na le mathata a tsona.

1. Lifaele tsa index tse hahiloeng esale pele

   Kaha index e na le mantsoe a tsoang litokomaneng tsohle, e kholo ka boholo.
   Nako le nako ha tokomane e eketsoa kapa e fetoloa, faele e ncha ea index e tlameha ho kenngoa.
   E tla eketsa nako ea ho leta ea mosebelisi mme e je li-bandwidth tse ngata.

2. Laola litokomane 'me u thehe li-index ha u fofa

   Ho aha index ke mosebetsi o boima haholo oa ho aha index nako le nako ha u fihla ho eona ho tla baka pherekano e hlakileng le boiphihlelo bo bobe ba mosebelisi.

---

Ntle le `lunrjs` , ho na le litharollo tse ling tsa ho batla mongolo ka botlalo, joalo ka :

[fusejs](//www.fusejs.io) , bala ho tšoana pakeng tsa likhoele ho batla.

Ts'ebetso ea tharollo ena e mpe haholo 'me e ke ke ea sebelisoa ho batla mongolo o felletseng (bona [Fuse.js Potso e telele e nka metsotsoana e fetang 10 , hore na u ka e ntlafatsa joang?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) sebelisa Bloom filter ho batla, e ke ke ea sebelisoa bakeng sa ho batla sehlohlolong (mohlala, kenya `goo` , batla `good` , `google` ), 'me e ke ke ea finyella phello e tšoanang ea ho qetela.

Ka lebaka la mefokolo ea litharollo tse teng, `i18n.site` ile a hlahisa tharollo e ncha e hloekileng ea ho batla mongolo o felletseng, e nang le litšobotsi tse latelang :

1. E ts'ehetsa patlo ea lipuo tse ngata `gzip` me e nyane `6.9KB` `25KB` `lunrjs`
1. Theha index e sothehileng e thehiloeng ho `indexedb` , e nkang mohopolo o fokolang mme e potlakile.
1. Ha litokomane li eketsoa / li fetotsoe, ke litokomane tse ekelitsoeng kapa tse fetotsoeng feela tse bonts'itsoeng hape, ho fokotsa palo ea lipalo.
1. E ts'ehetsa patlo ea sehlomathiso 'me e ka hlahisa liphetho tsa lipatlisiso ka nako ea nnete ha mosebelisi a ntse a ngola.
1. E fumaneha ntle le inthanete

Ka tlase, lintlha `i18n.site` tsa ts'ebetsong ea tekheniki li tla hlahisoa ka botlalo.

## Karohano Ya Mantswe a Dipuo Tse Ngata

Karohano ea mantsoe e sebelisa karohano ea mantsoe ea sebatli `Intl.Segmenter` , 'me libatli tsohle tse kholo li tšehetsa sebopeho sena.

![](//p.3ti.site/1727667759.avif)

Lentsoe karohano `coffeescript` khoutu ka tsela e latelang

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

ho:

* `/\p{P}/` ke polelo e tloaelehileng e tsamaellanang le matšoao a khethehileng a amanang a kenyelletsa: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ! `.</p><ul><li> `split('.')` ke hobane karolo `Firefox` ea mantsoe a sebatli ha e na karolo `. ` .</li>


## Mohaho Oa Index

Litafole tse 5 tsa polokelo ea lintho li entsoe ka `IndexedDB` :

* `word` mantsoe : id -
* `doc` : id - Tokomane url - Nomoro ea mofuta oa Tokomane
* `docWord` Lethathamo id tokomane id - lentsoe :
* `prefix` : - id
* `rindex` : id - Tokomane id : Letoto la linomoro tsa line

Feta lethathamong la tokomane `url` le ea mofuta oa `ver` , 'me u batle hore na tokomane e teng tafoleng `doc` Haeba e le sieo, etsa index inverted. Ka nako e ts'oanang, tlosa index ea inverted bakeng sa litokomane tse sa kang tsa fetisoa.

Ka tsela ena, indexing e ntseng e eketseha e ka finyelloa mme palo ea lipalo e fokotsehile.

Tšebelisanong e ka pele, sebaka sa tsoelo-pele sa index se ka bonts'oa ho qoba ho lieha ha ho laeloa ka lekhetlo la pele Sheba "Bara ea Tsoelo-pele e nang le Lipopae, E Thehiloe ho E Leng progress + Pure css Kemplementation" [Sesotho](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB E Phahameng Ea Ho Ngola Ka Nako E Le 'ngoe

Morero o [idb](//www.npmjs.com/package/idb) ho ipapisitsoe le asynchronous encapsulation ea IndexedDB

IndexedDB e bala le ho ngola ha e lumellane. Ha ho etsoa index, litokomane li tla laeloa ka nako e le 'ngoe ho theha index.

E le ho qoba tahlehelo ea data e bakiloeng ke ho ngola ka tlholisano, o ka bua ka khoutu ea `coffeescript` e ka tlase mme o kenye cache e `ing` lipakeng tsa ho bala le ho ngola ho thibela mengolo e hlolisanang.

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

## Ho Nepahala Le Ho Hopola

Patlo e tla qala ka ho arola mantsoe a bohlokoa a kentsoeng ke mosebelisi.

Nka hore ho na le mantsoe a `N` ka mor'a karohano ea mantsoe Ha u khutlisa liphetho, liphetho tse nang le mantsoe a bohlokoa li tla khutlisoa pele, 'me liphetho tse nang le `N-1` , `N-2` ,..., `1` li tla khutlisoa.

Liphetho tsa lipatlisiso tse bonts'itsoeng pele li netefatsa bonnete ba potso, 'me liphetho tse tlatsitsoeng kamora moo (tobetsa konopo e eketsehileng) li netefatsa sekhahla sa ho hopola.

![](//p.3ti.site/1727684564.avif)

## Jarisa Ka Tlhokahalo

E le ho ntlafatsa lebelo la ho arabela, patlisiso e sebelisa jenereithara ea `yield` ho kenya ts'ebetsong e hlokahalang, 'me e khutlisa `limit` nako ha sephetho se botsoa.

Hlokomela hore nako le nako ha u batla hape ka mor'a `yield` , u hloka ho bula hape potso ea `IndexedDB` .

## Sehlohlolo Sa Patlo Ea Nako Ea Sebele

Bakeng sa ho hlahisa sephetho sa lipatlisiso ha mosebelisi a ntse a ngola, mohlala, ha `wor` e kentsoe, ho hlahisoa mantsoe a hlophiloeng ka `wor` joalo ka `words` le `work` .

![](//p.3ti.site/1727684944.avif)

Kernel ea ho batla e tla sebelisa tafole ea `prefix` bakeng sa lentsoe la ho qetela ka mor'a karohano ea mantsoe ho fumana mantsoe ohle a kentsoeng pele ka eona, le ho batla ka tatellano.

Anti-Shake function `debounce` e boetse e sebelisoa ho sebelisana ka pele (e kenngoeng ka tsela e latelang) ho fokotsa makhetlo a mangata a ho kenya letsoho ho susumetsang lipatlisiso le ho fokotsa palo ea palo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## E Fumaneha Ntle Le Inthanete

Tafole ea index ha e boloke mongolo oa pele, ke mantsoe feela, e leng ho fokotsang palo ea polokelo.

Ho totobatsa liphetho tsa lipatlisiso ho hloka ho kenya mongolo oa mantlha bocha, 'me ho tsamaisana le `service worker` ho ka qoba ho kopa marang-rang khafetsa.

Ka nako e ts'oanang, hobane `service worker` e boloka lingoliloeng tsohle, hang ha mosebelisi a etsa patlo, webosaete eohle, ho kenyeletsoa le patlo, e fumaneha ntle le marang-rang.

## Bontša Ntlafatso Ea Litokomane Tsa MarkDown

`i18n.site` 's tharollo e hloekileng ea ho batla e ka pele e ntlafalitsoe bakeng sa litokomane `MarkDown` .

Ha o hlahisa liphetho tsa lipatlisiso, lebitso la khaolo le tla hlahisoa 'me khaolo e tla tsamaisoa ha e tobetse.

![](//p.3ti.site/1727686552.avif)

## Akaretsa

Patlo ea mongolo o felletseng e kentsoeng pheletsong e ka pele, ha ho na seva e hlokahalang. E loketse haholo bakeng sa liwebsaete tse nyenyane le tse mahareng tse kang litokomane le li-blogs tsa botho.

`i18n.site` Mohloli o bulehileng o iketselitseng patlo e hloekileng, e nyane ka boholo le karabelo e potlakileng, e rarolla mefokolo ea patlo ea hajoale e hlakileng ea mongolo o felletseng mme e fana ka boiphihlelo bo betere ba basebelisi.