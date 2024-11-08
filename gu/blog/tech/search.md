---

brief: |
  i18n.site હવે સર્વરલેસ ફુલ-ટેક્સ્ટ શોધને સપોર્ટ કરે છે.

  આ લેખ શુદ્ધ ફ્રન્ટ-એન્ડ ફુલ-ટેક્સ્ટ સર્ચ ટેક્નોલૉજીના અમલીકરણનો પરિચય આપે છે, જેમાં IndexedDB દ્વારા બનાવવામાં આવેલ ઇન્વર્ટેડ ઇન્ડેક્સ, પ્રીફિક્સ સર્ચ, વર્ડ સેગ્મેન્ટેશન ઑપ્ટિમાઇઝેશન અને મલ્ટી-લેંગ્વેજ સપોર્ટનો સમાવેશ થાય છે.

  હાલના ઉકેલોની તુલનામાં, i18n.siteની શુદ્ધ ફ્રન્ટ-એન્ડ પૂર્ણ-ટેક્સ્ટ શોધ કદમાં નાની અને ઝડપી છે, નાના અને મધ્યમ કદની વેબસાઇટ્સ જેમ કે દસ્તાવેજો અને બ્લોગ્સ માટે યોગ્ય છે અને ઑફલાઇન ઉપલબ્ધ છે.

---

# શુદ્ધ ફ્રન્ટ-એન્ડ ઊંધી પૂર્ણ-ટેક્સ્ટ શોધ

## ક્રમ

ઘણા અઠવાડિયાના વિકાસ પછી [i18n.site](//i18n.site) (એક સંપૂર્ણ સ્થિર markdown બહુભાષી અનુવાદ & વેબસાઇટ નિર્માણ સાધન) હવે શુદ્ધ ફ્રન્ટ-એન્ડ પૂર્ણ-ટેક્સ્ટ શોધને સમર્થન આપે છે.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

આ લેખ શોધ પ્રભાવનો [i18n.site](//i18n.site) કરવા માટે `i18n.site` શુદ્ધ ફ્રન્ટ-એન્ડ ફુલ-ટેક્સ્ટ સર્ચના તકનીકી અમલીકરણને શેર કરશે.

કોડ ઓપન : [સર્ચ કર્નલ](//github.com/i18n-site/ie/tree/main/qy) / [ઇન્ટરેક્ટિવ ઇન્ટરફેસ](//github.com/i18n-site/plugin/tree/main/qy)

## સર્વરલેસ ફુલ-ટેક્સ્ટ સર્ચ સોલ્યુશન્સની સમીક્ષા

નાના અને મધ્યમ કદની સંપૂર્ણ સ્થિર વેબસાઇટ્સ જેમ કે દસ્તાવેજો/વ્યક્તિગત બ્લોગ્સ માટે, સ્વ-નિર્મિત પૂર્ણ-ટેક્સ્ટ શોધ બેકએન્ડ બનાવવું ખૂબ જ ભારે છે, અને સેવા-મુક્ત પૂર્ણ-ટેક્સ્ટ શોધ એ વધુ સામાન્ય પસંદગી છે.

સર્વરલેસ ફુલ-ટેક્સ્ટ સર્ચ સોલ્યુશન્સ બે વ્યાપક શ્રેણીઓમાં આવે છે:

પ્રથમ, [algolia.com](//algolia.com) તૃતીય-પક્ષ શોધ સેવા પ્રદાતાઓ પૂર્ણ-ટેક્સ્ટ શોધ માટે ફ્રન્ટ-એન્ડ ઘટકો પ્રદાન કરે છે.

આવી સેવાઓને શોધ વોલ્યુમના આધારે ચૂકવણીની આવશ્યકતા હોય છે, અને વેબસાઈટ અનુપાલન જેવી સમસ્યાઓને કારણે મેઇનલેન્ડ ચાઇનામાં વપરાશકર્તાઓ માટે ઘણી વાર અનુપલબ્ધ હોય છે.

તેનો ઑફલાઇન ઉપયોગ કરી શકાતો નથી, ઇન્ટ્રાનેટ પર ઉપયોગ કરી શકાતો નથી અને તેની મોટી મર્યાદાઓ છે. આ લેખ વધુ ચર્ચા કરતો નથી.

બીજું શુદ્ધ ફ્રન્ટ-એન્ડ ફુલ-ટેક્સ્ટ શોધ છે.

હાલમાં, સામાન્ય શુદ્ધ ફ્રન્ટ-એન્ડ પૂર્ણ-ટેક્સ્ટ શોધમાં સમાવેશ થાય છે [lunrjs](//lunrjs.com) અને [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ગૌણ વિકાસ પર આધારિત).

`lunrjs` અનુક્રમણિકા બનાવવાની બે રીતો છે, અને બંનેની પોતાની સમસ્યાઓ છે.

1. પૂર્વ-બિલ્ટ ઇન્ડેક્સ ફાઇલો

   કારણ કે ઇન્ડેક્સમાં તમામ દસ્તાવેજોના શબ્દો છે, તે કદમાં મોટું છે.
   જ્યારે પણ દસ્તાવેજ ઉમેરવામાં આવે છે અથવા સંશોધિત કરવામાં આવે છે, ત્યારે નવી ઇન્ડેક્સ ફાઇલ લોડ કરવી આવશ્યક છે.
   તે યુઝરનો રાહ જોવાનો સમય વધારશે અને ઘણી બેન્ડવિડ્થનો વપરાશ કરશે.

2. દસ્તાવેજો લોડ કરો અને ફ્લાય પર અનુક્રમણિકા બનાવો

   અનુક્રમણિકા બનાવવી એ ગણતરીપૂર્વકનું સઘન કાર્ય છે જ્યારે તમે તેને ઍક્સેસ કરો છો ત્યારે સ્પષ્ટ ક્ષતિઓ અને નબળા વપરાશકર્તા અનુભવનું કારણ બનશે.

---

`lunrjs` ઉપરાંત, કેટલાક અન્ય સંપૂર્ણ-ટેક્સ્ટ શોધ ઉકેલો છે, જેમ કે :

[fusejs](//www.fusejs.io) શોધવા માટે તાર વચ્ચેની સમાનતાની ગણતરી કરો.

આ સોલ્યુશનનું પ્રદર્શન અત્યંત નબળું છે અને સંપૂર્ણ-ટેક્સ્ટ શોધ માટે તેનો ઉપયોગ કરી શકાતો નથી (જુઓ [Fuse.js લાંબી ક્વેરી 10 સેકન્ડ કરતાં વધુ સમય લે છે, તેને કેવી રીતે ઑપ્ટિમાઇઝ કરવું?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) શોધવા માટે બ્લૂમ ફિલ્ટરનો ઉપયોગ કરો, ઉપસર્ગ શોધ માટે ઉપયોગ કરી શકાતો નથી (ઉદાહરણ તરીકે, `goo` દાખલ કરો, શોધ `good` , `google` ), અને સમાન સ્વચાલિત પૂર્ણતા અસર પ્રાપ્ત કરી શકતા નથી.

હાલના ઉકેલોની ખામીઓને કારણે, `i18n.site` એક નવું શુદ્ધ ફ્રન્ટ-એન્ડ ફુલ-ટેક્સ્ટ સર્ચ સોલ્યુશન વિકસાવ્યું છે, જેમાં નીચેની લાક્ષણિકતાઓ છે :

1. મલ્ટી-લેંગ્વેજ સર્ચને સપોર્ટ કરે છે અને પેકેજિંગ `gzip` પછી સર્ચ કર્નલનું કદ `6.9KB` છે (સરખામણી માટે, `lunrjs` નું કદ `25KB` છે)
1. `indexedb` ના આધારે ઇન્વર્ટેડ ઇન્ડેક્સ બનાવો, જે ઓછી મેમરી લે છે અને ઝડપી છે.
1. જ્યારે દસ્તાવેજો ઉમેરવામાં આવે છે/સંશોધિત કરવામાં આવે છે, ત્યારે માત્ર ઉમેરવામાં આવેલા અથવા સંશોધિત દસ્તાવેજોને ફરીથી અનુક્રમિત કરવામાં આવે છે, જે ગણતરીની માત્રામાં ઘટાડો કરે છે.
1. ઉપસર્ગ શોધને સપોર્ટ કરે છે અને જ્યારે વપરાશકર્તા ટાઇપ કરી રહ્યો હોય ત્યારે વાસ્તવિક સમયમાં શોધ પરિણામો પ્રદર્શિત કરી શકે છે.
1. ઑફલાઇન ઉપલબ્ધ છે

નીચે, `i18n.site` તકનીકી અમલીકરણ વિગતો વિગતવાર રજૂ કરવામાં આવશે.

## બહુભાષી શબ્દ વિભાજન

વર્ડ સેગ્મેન્ટેશન બ્રાઉઝરના મૂળ શબ્દ સેગ્મેન્ટેશન `Intl.Segmenter` ઉપયોગ કરે છે અને તમામ મેઈનસ્ટ્રીમ બ્રાઉઝર્સ આ ઈન્ટરફેસને સપોર્ટ કરે છે.

![](//p.3ti.site/1727667759.avif)

શબ્દ વિભાજન `coffeescript` કોડ નીચે મુજબ છે

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

માં:

* `/\p{P}/` એ { અભિવ્યક્તિ છે જે `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` સાથે મેળ ખાય છે. | } `.</p><ul><li> `split('.')` એટલા માટે છે કારણ કે `Firefox` બ્રાઉઝર શબ્દ સેગ્મેન્ટેશન `. ` સેગમેન્ટ કરતું નથી.</li>


## ઇન્ડેક્સ બિલ્ડિંગ

`IndexedDB` માં 5 ઑબ્જેક્ટ સ્ટોરેજ કોષ્ટકો બનાવવામાં આવ્યા હતા :

* `word` : id -
* `doc` : id - દસ્તાવેજ url - દસ્તાવેજ સંસ્કરણ નંબર
* `docWord` : દસ્તાવેજ id - શબ્દ id
* `prefix` : ઉપસર્ગ - શબ્દ id
* `rindex` : શબ્દ id - id :

દસ્તાવેજ `url` અને સંસ્કરણ નંબર `ver` ની એરેમાં પસાર કરો, અને કોષ્ટક `doc` માં દસ્તાવેજ અસ્તિત્વમાં છે કે કેમ તે શોધો. જો તે અસ્તિત્વમાં નથી, તો ઊંધી અનુક્રમણિકા બનાવો. તે જ સમયે, તે દસ્તાવેજો માટે ઇન્વર્ટેડ ઇન્ડેક્સ દૂર કરો કે જે પાસ થયા ન હતા.

આ રીતે, ઇન્ક્રીમેન્ટલ ઇન્ડેક્સીંગ પ્રાપ્ત કરી શકાય છે અને ગણતરીની માત્રામાં ઘટાડો થાય છે.

ફ્રન્ટ-એન્ડ ક્રિયાપ્રતિક્રિયામાં, પ્રથમ વખત લોડ કરતી વખતે લેગ ટાળવા માટે ઇન્ડેક્સનો લોડિંગ પ્રોગ્રેસ બાર પ્રદર્શિત કરી શકાય છે "એનિમેશન સાથે પ્રોગ્રેસ બાર, સિંગલ પર આધારિત progress + શુદ્ધ css અમલીકરણ" [અંગ્રેજી](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [ચાઇનીઝ](//juejin.cn/post/7413586285954154522) .

### IndexedDB ઉચ્ચ સમવર્તી લેખન

પ્રોજેક્ટ IndexedDB ના અસુમેળ એન્કેપ્સ્યુલેશનના આધારે [idb](//www.npmjs.com/package/idb) છે

IndexedDB રીડ અને રાઇટ એ સિંક્રનસ છે. ઇન્ડેક્સ બનાવતી વખતે, ઇન્ડેક્સ બનાવવા માટે દસ્તાવેજો એકસાથે લોડ કરવામાં આવશે.

સ્પર્ધાત્મક લેખનને કારણે ડેટાના આંશિક નુકસાનને ટાળવા માટે, તમે નીચે આપેલા `coffeescript` કોડનો સંદર્ભ લઈ શકો છો અને સ્પર્ધાત્મક લખાણોને અટકાવવા માટે વાંચન અને લેખન વચ્ચે `ing` કેશ ઉમેરી શકો છો.

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

## ચોકસાઇ અને યાદ

શોધ પ્રથમ વપરાશકર્તા દ્વારા દાખલ કરાયેલા કીવર્ડ્સને સેગમેન્ટ કરશે.

ધારો કે સેગ્મેન્ટેશન શબ્દ પછી `N` શબ્દો છે જ્યારે પરિણામો પરત કરવામાં આવે છે, ત્યારે બધા કીવર્ડ્સ ધરાવતા પરિણામો પહેલા પરત કરવામાં આવશે, અને પછી `N-1` , `N-2` ,..., `1` કીવર્ડ્સ ધરાવતા પરિણામો પરત કરવામાં આવશે.

પ્રદર્શિત થયેલ શોધ પરિણામો પહેલા ક્વેરી ની ચોકસાઈની ખાતરી કરે છે અને ત્યારબાદ લોડ થયેલ પરિણામો (વધુ લોડ બટન પર ક્લિક કરો) રિકોલ રેટ સુનિશ્ચિત કરે છે.

![](//p.3ti.site/1727684564.avif)

## માંગ પર લોડ

પ્રતિસાદની ઝડપને સુધારવા માટે, સર્ચ ઑન-ડિમાન્ડ લોડિંગને અમલમાં મૂકવા માટે `yield` જનરેટરનો ઉપયોગ કરે છે, અને `limit` પરિણામ પૂછવામાં આવે ત્યારે તે પરત કરે છે.

નોંધ કરો કે જ્યારે પણ તમે `yield` પછી ફરીથી શોધો છો, ત્યારે તમારે `IndexedDB` ની ક્વેરી ટ્રાન્ઝેક્શન ફરીથી ખોલવાની જરૂર છે.

## ઉપસર્ગ રીઅલ-ટાઇમ શોધ

જ્યારે વપરાશકર્તા ટાઈપ કરી રહ્યો હોય ત્યારે શોધ પરિણામો પ્રદર્શિત કરવા માટે, ઉદાહરણ તરીકે, જ્યારે `wor` દાખલ કરવામાં આવે છે, ત્યારે `words` અને `work` જેવા `wor` સાથે ઉપસર્ગવાળા શબ્દો પ્રદર્શિત થાય છે.

![](//p.3ti.site/1727684944.avif)

સર્ચ કર્નલ શબ્દ વિભાજન પછીના છેલ્લા શબ્દ માટે `prefix` કોષ્ટકનો ઉપયોગ તેની સાથે ઉપસર્ગમાં લાગેલા બધા શબ્દો શોધવા માટે કરશે અને અનુક્રમમાં શોધ કરશે.

એન્ટિ-શેક ફંક્શન `debounce` ઉપયોગ ફ્રન્ટ-એન્ડ ક્રિયાપ્રતિક્રિયામાં પણ થાય છે (નીચે પ્રમાણે અમલમાં) વપરાશકર્તા ઇનપુટ ટ્રિગરિંગ શોધની આવર્તન ઘટાડવા અને ગણતરીની માત્રા ઘટાડવા માટે.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## ઑફલાઇન ઉપલબ્ધ છે

અનુક્રમણિકા કોષ્ટક મૂળ ટેક્સ્ટને સંગ્રહિત કરતું નથી, ફક્ત શબ્દો, જે સંગ્રહની માત્રા ઘટાડે છે.

શોધ પરિણામોને હાઇલાઇટ કરવા માટે મૂળ ટેક્સ્ટને ફરીથી લોડ કરવાની જરૂર છે, અને `service worker` સાથે મેળ પુનરાવર્તિત નેટવર્ક વિનંતીઓને ટાળી શકે છે.

તે જ સમયે, કારણ કે `service worker` બધા લેખોને કૅશ કરે છે, એકવાર વપરાશકર્તા શોધ કરે છે, શોધ સહિત સમગ્ર વેબસાઇટ ઑફલાઇન ઉપલબ્ધ થાય છે.

## માર્કડાઉન દસ્તાવેજોનું ઑપ્ટિમાઇઝેશન દર્શાવો

`i18n.site` નું શુદ્ધ ફ્રન્ટ-એન્ડ સર્ચ સોલ્યુશન `MarkDown` દસ્તાવેજો માટે ઑપ્ટિમાઇઝ કરેલ છે.

શોધ પરિણામો પ્રદર્શિત કરતી વખતે, પ્રકરણનું નામ પ્રદર્શિત થશે અને જ્યારે ક્લિક કરવામાં આવશે ત્યારે પ્રકરણ નેવિગેટ કરવામાં આવશે.

![](//p.3ti.site/1727686552.avif)

## સારાંશ આપો

ઇન્વર્ટેડ ફુલ-ટેક્સ્ટ શોધ કેવળ આગળના છેડે લાગુ કરવામાં આવી છે, સર્વરની જરૂર નથી. તે નાના અને મધ્યમ કદની વેબસાઇટ્સ જેમ કે દસ્તાવેજો અને વ્યક્તિગત બ્લોગ્સ માટે ખૂબ જ યોગ્ય છે.

`i18n.site` ઓપન સોર્સ સ્વ-વિકસિત શુદ્ધ ફ્રન્ટ-એન્ડ શોધ, કદમાં નાની અને ઝડપી પ્રતિભાવ, વર્તમાન શુદ્ધ ફ્રન્ટ-એન્ડ પૂર્ણ-ટેક્સ્ટ શોધની ખામીઓને ઉકેલે છે અને વધુ સારો વપરાશકર્તા અનુભવ પ્રદાન કરે છે.