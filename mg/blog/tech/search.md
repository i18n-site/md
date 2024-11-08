---

brief: |
  i18n.site izao dia manohana ny fikarohana lahatsoratra feno tsy misy mpizara.

  Ity lahatsoratra ity dia mampiditra ny fampiharana ny teknolojia fikarohana amin'ny endriny feno amin'ny endriny madio, ao anatin'izany ny fanondroana inverted natsangan'ny IndexedDB, ny fikarohana prefix, ny fanatsarana ny fizarana teny ary ny fanohanana amin'ny fiteny maro.

  Raha ampitahaina amin'ny vahaolana efa misy, i18n.site madio amin'ny endriny feno amin'ny lahatsoratra feno dia kely ny habeny ary haingana, mety amin'ny tranokala madinika sy salantsalany toy ny antontan-taratasy sy bilaogy, ary azo jerena ivelan'ny aterineto.

---

# Fikarohana Lahatsoratra Feno Mivadika Amin'ny Endriny Madio

## Filaharana

Taorian'ny herinandro maromaro nisian'ny fampandrosoana, [i18n.site](//i18n.site) (fitaovana fananganana tranokala & amin'ny fandikan-teny markdown samihafa) dia manohana ny fikarohana lahatsoratra feno amin'ny endriny voalohany.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ity lahatsoratra ity dia hizara ny fampiharana ara-teknika amin'ny fikarohana an-tsoratra feno amin'ny [i18n.site](//i18n.site) `i18n.site` .

[Kaody](//github.com/i18n-site/ie/tree/main/qy) / [misokatra](//github.com/i18n-site/plugin/tree/main/qy) :

## Famerenana Ny Vahaolana Fikarohana Lahatsoratra Feno Tsy Misy Mpizara

Ho an'ny tranokala static tsotra sy salantsalany toy ny antontan-taratasy/bilaogy manokana, mavesatra loatra ny fananganana backend fikarohana lahatsoratra feno namboarin'ny tena, ary ny fikarohana lahatsoratra feno tsy misy serivisy no safidy mahazatra kokoa.

Ny vahaolana amin'ny fikarohana lahatsoratra feno tsy misy mpizara dia mizara ho sokajy roa lehibe:

Voalohany, mitovitovy amin'izany [algolia.com](//algolia.com)

Mitaky fandoavam-bola mifototra amin'ny habetsahan'ny fikarohana ireo tolotra ireo, ary matetika tsy azon'ny mpampiasa any amin'ny tanibe Shina noho ny olana toy ny fanarahana ny tranonkala.

Tsy azo ampiasaina ivelan'ny aterineto, tsy azo ampiasaina amin'ny intranet, ary manana fetra lehibe. Tsy miresaka firy ity lahatsoratra ity.

Ny faharoa dia ny fitadiavana lahatsoratra feno amin'ny endriny voalohany.

Amin'izao fotoana izao, ny fikarohana an-tsoratra feno amin'ny endriny madio dia ahitana [lunrjs](//lunrjs.com) sy [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (mifototra amin'ny fivoarana faharoa `lunrjs` ).

`lunrjs` Misy fomba roa hanamboarana index, ary samy manana ny olany.

1. Ny rakitra fanondro efa namboarina

   Satria misy teny avy amin'ny antontan-taratasy rehetra ny fanondroana, dia lehibe izy io.
   Isaky ny ampiana na ovaina ny antontan-taratasy iray dia tsy maintsy ampidirina ny rakitra fanondro vaovao.
   Hampitombo ny fotoana fiandrasana ny mpampiasa izany ary handany bandwidth be dia be.

2. Ampidiro ny antontan-taratasy ary manangana tondro amin'ny fiaramanidina

   Ny fananganana tondro dia asa mavesa-danja amin'ny fikajiana ny fananganana indray ny tondro isaky ny miditra amin'izany dia miteraka fahatarana miharihary sy traikefan'ny mpampiasa.

---

Ho fanampin'ny `lunrjs` , dia misy vahaolana hafa amin'ny fikarohana lahatsoratra feno, toy ny :

[fusejs](//www.fusejs.io) , kajy ny fitoviana eo amin'ny tady hikaroka.

Tena ratsy ny fahombiazan'ity vahaolana ity ary tsy azo ampiasaina amin'ny fikarohana lahatsoratra feno (jereo [Fuse.js Maharitra 10 segondra mahery ny fangatahana lava, ahoana ny fomba hanatsarana azy?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , ampiasao ny sivana Bloom raha hikaroka, tsy azo ampiasaina amin'ny fikarohana prefix (ohatra, ampidiro `goo` , karohy `good` , `google` ), ary tsy afaka mahazo vokatra vita ho azy.

Noho ny lesoka amin'ny vahaolana efa misy, `i18n.site` dia namolavola vahaolana karoka feno amin'ny endriny madio vaovao, izay manana ireto toetra manaraka ireto :

1. Manohana fikarohana amin'ny fiteny maro ary kely ny haben'ny kernel fikarohana aorian'ny fonosana `gzip` dia `6.9KB` (ho fampitahana, ny haben'ny `lunrjs` dia `25KB` ).
1. Manangana tondro mivadika mifototra amin'ny `indexedb` , izay maka fitadidiana kely ary haingana.
1. Rehefa ampiana / ovaina ny antontan-taratasy dia ny antontan-taratasy nampiana na ovaina ihany no averina averina, mampihena ny habetsaky ny kajy.
1. Manohana fikarohana prefix ary afaka mampiseho valiny amin'ny fotoana tena izy rehefa manoratra ny mpampiasa.
1. Misy an-tserasera

Ity ambany ity dia haseho amin'ny antsipiriany ny antsipiriany momba ny fampiharana teknika `i18n.site` .

## Fizarana Teny Amin'ny Fiteny Maro

Ny fizarazarana ny teny dia mampiasa ny fizarazarana ny teny teratany amin'ny navigateur `Intl.Segmenter` , ary ny navigateur mahazatra rehetra dia manohana ity interface ity.

![](//p.3ti.site/1727667759.avif)

Ny teny hoe segmentation `coffeescript` code dia toy izao manaraka izao

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

amin'ny:

* `/\p{P}/` dia fomba fiteny mahazatra izay mifanandrify amin'ny mari-piatoana manokana ahitana ny: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` dia satria tsy mizara `. ` ny fizarana teny navigateur `Firefox` .</li>


## Fanorenana Fanondroana

Ny latabatra fitehirizana zavatra 5 dia noforonina tamin'ny `IndexedDB` :

* `word` : id - teny
* `doc` : id - url -
* `docWord` : id - id
* `prefix` : - id
* `rindex` : Word id - Document id : Array ny laharana andalana

Ampidiro ao amin'ny laharan'ny antontan-taratasy `url` sy laharana laharana `ver` , ary tadiavo raha misy ilay antontan-taratasy ao amin'ny tabilao `doc` Raha tsy misy izany dia mamorona tondro mivadika. Amin'izay fotoana izay ihany koa, esory ny fanondroana mivadika ho an'ireo antontan-taratasy tsy nampidirina.

Amin'izany fomba izany dia azo tratrarina ny fanondroana incremental ary ahena ny habetsahan'ny kajy.

Eo amin'ny fifaneraserana eo anoloana dia azo aseho [ny](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) bara fandrosoan'ny fametahana ny [tondro](//juejin.cn/post/7413586285954154522) / hialana css fahatarana amin'ny fandefasana progress + .

### IndexedDB Fanoratana Miaraka Avo Lenta

Ny tetikasa dia [idb](//www.npmjs.com/package/idb) mifototra amin'ny encapsulation asynchronous an'ny IndexedDB

IndexedDB mamaky sy manoratra dia asynchronous. Rehefa mamorona fanondroana dia hapetraka miaraka ny antontan-taratasy mba hamoronana ny tondro.

Mba hialana amin'ny fahaverezan'ny angona ampahany ateraky ny fanoratana mifaninana, azonao atao ny manondro ny kaody `coffeescript` etsy ambany ary manampy cache `ing` eo anelanelan'ny famakiana sy ny fanoratana mba hanakanana ny fanoratana mifaninana.

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

## Precision Sy Recall

Ny fikarohana dia hizara voalohany ny teny fanalahidy nampidirin'ny mpampiasa.

Eritrereto fa misy teny `N` aorian'ny teny hoe segmentation Rehefa mamerina valiny dia haverina aloha ny valiny misy teny fanalahidy rehetra, ary avy eo dia haverina ny valiny misy teny fanalahidy `N-1` , `N-2` ,..., `1` .

Ny valim-pikarohana naseho voalohany dia miantoka ny fahamarinan'ny fangatahana, ary ny valiny voarakitra avy eo (tsindrio ny bokotra Load more) dia miantoka ny tahan'ny fahatsiarovan-tena.

![](//p.3ti.site/1727684564.avif)

## Load Amin'ny Fangatahana

Mba hanatsarana ny hafainganan'ny valin-kafatra, ny fikarohana dia mampiasa ny `yield` generator mba hampiharana ny fangatahana entana, ary miverina `limit` ny misy valiny anontaniana.

Mariho fa isaky ny mikaroka indray ianao aorian'ny `yield` , dia mila manokatra indray ny fifampiraharahana fanontaniana `IndexedDB` ianao.

## Prefix Amin'ny Fotoana Tena Izy

Mba hampisehoana ny valin'ny fikarohana eo am-panoratana ny mpampiasa, ohatra, rehefa ampidirina `wor` , dia aseho ny teny misy tovana `wor` toy ny `words` sy `work` .

![](//p.3ti.site/1727684944.avif)

Ny kernel fikarohana dia hampiasa ny tabilao `prefix` ho an'ny teny farany aorian'ny fizarana teny mba hahitana ny teny rehetra miaraka aminy, ary hikaroka araka ny filaharany.

Ny fiasan'ny anti-shake `debounce` dia ampiasaina amin'ny fifaneraserana eo anoloana (apetraka toy izao) mba hampihenana ny fatran'ny fampidiran'ny mpampiasa mandrisika ny fikarohana sy hampihenana ny habetsaky ny kajy.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Misy an-Tserasera

Ny latabatra fanondro dia tsy mitahiry ny lahatsoratra tany am-boalohany, fa ny teny ihany, izay mampihena ny habetsaky ny fitahirizana.

Ny fanasongadinana ny valin'ny fikarohana dia mitaky famerenana ny lahatsoratra tany am-boalohany, ary ny mifanandrify amin'ny `service worker` dia afaka misoroka ny fangatahana tambajotra miverimberina.

Amin'izay fotoana izay ihany koa, satria `service worker` no mitahiry ny lahatsoratra rehetra, rehefa manao fikarohana ny mpampiasa, dia azo jerena ivelan'ny aterineto ny tranokala manontolo, anisan'izany ny fikarohana.

## Asehoy Ny Fanatsarana Ny Antontan-Taratasy MarkDown

`i18n.site` ny vahaolana amin'ny fikarohana eo anoloana madiodio dia natao ho an'ny antontan-taratasy `MarkDown` .

Rehefa mampiseho valim-pikarohana dia haseho ny anaran'ny toko ary hivezivezy ny toko rehefa kitihina.

![](//p.3ti.site/1727686552.avif)

## Mamintina

Fikarohana lahatsoratra feno navadika natao teo amin'ny farany aloha, tsy mila mpizara. Tena mety amin'ny tranokala madinika sy salantsalany toy ny antontan-taratasy sy bilaogy manokana.

`i18n.site` Loharanom-baovao misokatra ho an'ny tenany manokana novolavolain'ny fikarohana amin'ny endriny madio, kely ny habeny ary ny valiny haingana, dia mamaha ny lesoka amin'ny fikarohana lahatsoratra feno amin'izao fotoana izao ary manome traikefa mpampiasa tsara kokoa.