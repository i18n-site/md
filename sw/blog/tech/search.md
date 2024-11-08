---

brief: |
  i18n.site sasa inasaidia utafutaji wa maandishi kamili usio na seva.

  Makala haya yanatanguliza utekelezaji wa teknolojia safi ya utafutaji wa maandishi kamili ya mbele, ikijumuisha faharasa iliyogeuzwa iliyojengwa na IndexedDB, utafutaji wa kiambishi awali, uboreshaji wa sehemu za maneno na usaidizi wa lugha nyingi.

  Ikilinganishwa na suluhu zilizopo, utafutaji wa maandishi kamili wa mbele wa i18n.site ni mdogo kwa ukubwa na wa haraka, unafaa kwa tovuti ndogo na za wastani kama vile hati na blogu, na unapatikana nje ya mtandao.

---

# Utafutaji Kamili Wa Maandishi Kamili Ya Mwisho Wa Mbele

## Mlolongo

Baada ya majuma kadhaa ya maendeleo, [i18n.site](//i18n.site) (zana ya kujenga tovuti & tuli tuli markdown multilingualtranslation) sasa inasaidia utafutaji wa maandishi kamili wa mbele.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Makala haya yatashiriki utekelezwaji wa kiufundi wa utafutaji `i18n.site` wa maandishi kamili wa mbele [i18n.site](//i18n.site) !

Nambari ya chanzo huria : [Tafuta](//github.com/i18n-site/ie/tree/main/qy) [kiolesura shirikishi](//github.com/i18n-site/plugin/tree/main/qy) / kernel

## Mapitio Ya Suluhu Za Utafutaji Wa Maandishi Kamili Bila Seva

Kwa tovuti ndogo na za kati zilizosimama tuli kama vile hati/blogu za kibinafsi, kujenga mandharinyuma ya utafutaji wa maandishi kamili iliyojijengea yenyewe ni nzito sana, na utafutaji wa maandishi kamili bila huduma ndio chaguo la kawaida zaidi.

Suluhu za utaftaji wa maandishi kamili bila seva ziko katika kategoria mbili pana:

Kwanza, sawa [algolia.com](//algolia.com)

Huduma kama hizo zinahitaji malipo kulingana na kiasi cha utafutaji, na mara nyingi hazipatikani kwa watumiaji nchini Uchina kwa sababu ya masuala kama vile kufuata tovuti.

Haiwezi kutumika nje ya mtandao, haiwezi kutumika kwenye intraneti, na ina mapungufu makubwa. Makala hii haijadili sana.

Ya pili ni utafutaji safi wa maandishi kamili ya mbele.

Kwa sasa, utafutaji wa [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) wa `lunrjs` kamili ya mbele ni pamoja na [lunrjs](//lunrjs.com)

`lunrjs` Kuna njia mbili za kuunda faharisi, na zote zina shida zao.

1. Faili za faharasa zilizoundwa mapema

   Kwa sababu index ina maneno kutoka kwa nyaraka zote, ni kubwa kwa ukubwa.
   Wakati wowote hati inapoongezwa au kurekebishwa, faili mpya ya faharasa lazima ipakiwe.
   Itaongeza muda wa kusubiri wa mtumiaji na kutumia bandwidth nyingi.

2. Pakia hati na ujenge faharisi kwa kuruka

   Kuunda faharasa ni kazi kubwa ya kukokotoa Kuunda upya faharasa kila wakati unapoifikia kutasababisha uzembe wa dhahiri na uzoefu duni wa mtumiaji.

---

Kwa kuongezea `lunrjs` , kuna suluhisho zingine za utaftaji wa maandishi kamili, kama vile :

[fusejs](//www.fusejs.io) , hesabu kufanana kati ya mifuatano ya kutafuta.

Utendaji wa suluhisho hili ni duni sana na hauwezi kutumika kwa utafutaji wa maandishi kamili (tazama [Fuse.js Hoji ndefu huchukua zaidi ya sekunde 10 , jinsi ya kuiboresha?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , tumia kichujio cha Bloom kutafuta, haiwezi kutumika kwa utafutaji wa kiambishi awali (kwa mfano, ingiza `goo` , tafuta `good` , `google` ), na haiwezi kufikia athari sawa ya kukamilisha otomatiki.

Kwa sababu ya mapungufu ya ufumbuzi uliopo, `i18n.site` ilitengeneza ufumbuzi mpya wa utafutaji wa maandishi kamili wa mbele, ambao una sifa zifuatazo :

1. Inaauni utaftaji wa lugha nyingi na ni ndogo kwa saizi saizi ya kerneli ya utaftaji baada ya ufungaji `gzip` ni `6.9KB` (kwa kulinganisha, saizi ya `lunrjs` ni `25KB` )
1. Unda faharasa iliyogeuzwa kulingana na `indexedb` , ambayo inachukua kumbukumbu kidogo na ni ya haraka.
1. Nyaraka zinapoongezwa/kurekebishwa, ni hati zilizoongezwa au zilizorekebishwa pekee ndizo zinazoonyeshwa upya, na hivyo kupunguza kiasi cha mahesabu.
1. Inaauni utafutaji wa kiambishi awali na inaweza kuonyesha matokeo ya utafutaji kwa wakati halisi wakati mtumiaji anaandika.
1. Inapatikana nje ya mtandao

Hapo chini, maelezo `i18n.site` ya utekelezaji wa kiufundi yatawasilishwa kwa undani.

## Mgawanyo Wa Maneno Kwa Lugha Nyingi

Ugawaji wa maneno hutumia sehemu ya neno asilia ya kivinjari `Intl.Segmenter` , na vivinjari vyote vya kawaida vinaauni kiolesura hiki.

![](//p.3ti.site/1727667759.avif)

Neno segmentation `coffeescript` msimbo ni kama ifuatavyo

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

katika:

* `/\p{P}/` ni usemi wa kawaida unaolingana na alama za uakifishaji mahususi ni pamoja na: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } . `.</p><ul><li> `split('.')` ni kwa sababu sehemu `Firefox` ya maneno ya kivinjari haina sehemu `. ` .</li>


## Jengo La Index

Jedwali 5 za kuhifadhi vitu ziliundwa katika `IndexedDB` :

* `word` maneno : id -
* `doc` : id - Nambari ya toleo la Hati url -
* `docWord` Mkusanyiko wa : id - neno id
* `prefix` : Mkusanyiko wa kiambishi awali - neno id
* `rindex` : Neno id - Hati id : Safu ya nambari za mstari

Pitia safu ya hati `url` na nambari ya toleo la `ver` , na utafute ikiwa hati iko kwenye jedwali `doc` Ikiwa haipo, tengeneza faharasa iliyogeuzwa. Wakati huo huo, ondoa faharisi iliyogeuzwa kwa hati hizo ambazo hazijapitishwa.

Kwa njia hii, indexing ya ziada inaweza kupatikana na kiasi cha hesabu kinapunguzwa.

Katika mwingiliano wa mbele, upau wa maendeleo ya upakiaji unaweza kuonyeshwa ili kuzuia kubakia wakati wa kupakia kwa mara ya kwanza Angalia "Upau wa Maendeleo wenye Uhuishaji, Kulingana na Utekelezaji Mmoja progress + Pure css Utekelezaji" [Kiingereza](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB Uandishi Wa Juu Kwa Wakati Mmoja

Mradi [idb](//www.npmjs.com/package/idb) kwa msingi wa uwekaji wa asynchronous wa IndexedDB

IndexedDB inasoma na kuandika ni ya asynchronous. Wakati wa kuunda faharisi, hati zitapakiwa kwa wakati mmoja ili kuunda faharasa.

Ili kuzuia upotezaji wa data kwa kiasi unaosababishwa na uandishi shindani, unaweza kurejelea msimbo `coffeescript` ulio hapa chini na kuongeza kache `ing` kati ya kusoma na kuandika ili kuzuia uandishi pinzani.

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

## Usahihi Na Kukumbuka

Utafutaji utaweka kwanza maneno msingi yaliyowekwa na mtumiaji.

Chukulia kuwa kuna maneno `N` baada ya sehemu ya neno Wakati wa kurejesha matokeo, matokeo yaliyo na maneno muhimu yote yatarejeshwa kwanza, na kisha matokeo yaliyo na `N-1` , `N-2` ,..., maneno muhimu `1` yatarejeshwa.

Matokeo ya utafutaji yanayoonyeshwa kwanza yanahakikisha usahihi wa hoja, na matokeo yanayopakiwa baadaye (bofya kitufe cha kupakia zaidi) yanahakikisha kasi ya kurejesha.

![](//p.3ti.site/1727684564.avif)

## Pakia Kwa Mahitaji

Ili kuboresha kasi ya majibu, utafutaji hutumia jenereta `yield` kutekeleza upakiaji unapohitaji, na hurejesha `limit` wakati matokeo yanapoulizwa.

Kumbuka kwamba kila unapotafuta tena baada ya `yield` , unahitaji kufungua upya shughuli ya hoja ya `IndexedDB` .

## Kiambishi Awali Cha Utafutaji Wa Wakati Halisi

Ili kuonyesha matokeo ya utafutaji mtumiaji anapoandika, kwa mfano, `wor` inapoingizwa, maneno yaliyowekwa awali na `wor` kama vile `words` na `work` yanaonyeshwa.

![](//p.3ti.site/1727684944.avif)

Kiini cha utafutaji kitatumia jedwali `prefix` kwa neno la mwisho baada ya mgawanyo wa maneno ili kupata maneno yote yaliyowekwa awali nalo, na kutafuta kwa mfuatano.

Kitendakazi cha kuzuia kutikisika `debounce` pia hutumika katika mwingiliano wa mbele (hutekelezwa kama ifuatavyo) ili kupunguza kasi ya utafutaji wa ingizo la mtumiaji na kupunguza kiasi cha hesabu.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Inapatikana Nje Ya Mtandao

Jedwali la index haihifadhi maandishi ya awali, maneno tu, ambayo hupunguza kiasi cha hifadhi.

Kuangazia matokeo ya utafutaji kunahitaji kupakia upya maandishi asilia, na kulinganisha `service worker` kunaweza kuzuia maombi ya mtandao yanayorudiwa.

Wakati huo huo, kwa sababu `service worker` huhifadhi nakala zote, mara tu mtumiaji anapofanya utafutaji, tovuti nzima, ikiwa ni pamoja na utafutaji, inapatikana nje ya mtandao.

## Onyesha Uboreshaji Wa Hati Za MarkDown

Suluhisho safi la utafutaji la mwisho la `i18n.site` limeboreshwa kwa hati `MarkDown` .

Wakati wa kuonyesha matokeo ya utafutaji, jina la sura litaonyeshwa na sura itasogezwa wakati kubofya.

![](//p.3ti.site/1727686552.avif)

## Fanya Muhtasari

Utafutaji uliogeuzwa wa maandishi kamili umetekelezwa kwenye sehemu ya mbele pekee, hakuna seva inayohitajika. Inafaa sana kwa tovuti ndogo na za kati kama vile hati na blogu za kibinafsi.

`i18n.site` Chanzo huria, utafutaji safi wa mwisho wa mbele, mdogo kwa ukubwa na mwitikio wa haraka, hutatua mapungufu ya utafutaji wa sasa wa maandishi kamili ya mbele na hutoa uzoefu bora wa mtumiaji.