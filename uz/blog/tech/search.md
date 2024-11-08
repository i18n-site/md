---

brief: |
  i18n.site endi serversiz toʻliq matnli qidiruvni qoʻllab-quvvatlaydi.

  Ushbu maqolada IndexedDB tomonidan yaratilgan teskari indeks, prefiks qidirish, so'z segmentatsiyasini optimallashtirish va ko'p tilli qo'llab-quvvatlashni o'z ichiga olgan sof front-end to'liq matnli qidiruv texnologiyasini joriy etish taqdim etiladi.

  Mavjud yechimlar bilan solishtirganda, i18n.site ning sof frontend toʻliq matnli qidiruvi kichik oʻlchamli va tezkor, hujjatlar va bloglar kabi kichik va oʻrta oʻlchamdagi veb-saytlar uchun mos va oflayn rejimda mavjud.

---

# To'liq Matnli Qidiruv

## Ketma-Ketlik

Bir necha hafta ishlab chiqilgandan so'ng, [i18n.site](//i18n.site) (sof statik markdown ko'p tilli tarjima & veb-sayt yaratish vositasi) endi to'liq matnli qidiruvni qo'llab-quvvatlaydi.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Ushbu maqolada qidiruv effektini [i18n.site](//i18n.site) qilish uchun `i18n.site` sof to'liq matnli qidiruvni baham ko'ring.

Kod ochiq manba : [Yadro](//github.com/i18n-site/ie/tree/main/qy) / [interaktiv interfeysi](//github.com/i18n-site/plugin/tree/main/qy)

## Serversiz Toʻliq Matnli Qidiruv Yechimlarini Koʻrib Chiqish

Hujjatlar/shaxsiy bloglar kabi kichik va oʻrta oʻlchamli sof statik veb-saytlar uchun oʻz-oʻzidan qurilgan toʻliq matnli qidiruv serverini yaratish juda ogʻir va xizmatsiz toʻliq matnli qidiruv keng tarqalgan tanlovdir.

Serversiz toʻliq matnli qidiruv yechimlari ikkita keng toifaga boʻlinadi:

Birinchidan, [algolia.com](//algolia.com) o'xshash uchinchi tomon qidiruv xizmati provayderlari to'liq matnli qidiruv uchun front-end komponentlarini taqdim etadilar.

Bunday xizmatlar qidiruv hajmiga qarab to'lovni talab qiladi va veb-saytga muvofiqlik kabi muammolar tufayli materik Xitoydagi foydalanuvchilar uchun ko'pincha mavjud emas.

U oflayn rejimda ishlatilmaydi, intranetda ishlatilmaydi va katta cheklovlarga ega. Ushbu maqolada ko'p muhokama qilinmaydi.

Ikkinchisi sof front-end to'liq matnli qidiruvdir.

Hozirgi vaqtda keng tarqalgan to'liq matnli qidiruvlar [lunrjs](//lunrjs.com) va [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs` ikkinchi darajali ishlanma asosida) o'z ichiga oladi.

`lunrjs` Indekslarni yaratishning ikki yo'li mavjud va ikkalasining ham o'z muammolari bor.

1. Oldindan tuzilgan indeks fayllari

   Indeks barcha hujjatlardagi so'zlarni o'z ichiga olganligi sababli, u katta hajmga ega.
   Hujjat qo'shilganda yoki o'zgartirilsa, yangi indeks fayli yuklanishi kerak.
   Bu foydalanuvchining kutish vaqtini oshiradi va ko'p tarmoqli kengligini sarflaydi.

2. Hujjatlarni yuklang va indekslarni tezda yarating

   Indeks yaratish - bu hisoblashni talab qiladigan ish bo'lib, unga har safar kirganingizda uni qayta tiklash aniq kechikishlar va yomon foydalanuvchi tajribasiga olib keladi.

---

`lunrjs` dan tashqari yana ba'zi to'liq matnli qidiruv echimlari mavjud, masalan :

[fusejs](//www.fusejs.io) qidirish uchun satrlar orasidagi o'xshashlikni hisoblang.

Ushbu yechimning unumdorligi juda past va uni toʻliq matnli qidirish uchun ishlatib boʻlmaydi (qarang [Fuse.js Uzoq soʻrov 10 soniyadan koʻproq vaqt oladi, uni qanday optimallashtirish kerak?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) qidirish uchun Bloom filtridan foydalaning, prefiksni qidirish uchun ishlatib bo'lmaydi (masalan, `goo` kiriting, `good` , `google` ni kiriting) va shunga o'xshash avtomatik yakunlash effektiga erishib bo'lmaydi.

Mavjud echimlarning kamchiliklari tufayli `i18n.site` quyidagi xususiyatlarga ega bo'lgan yangi sof front-end to'liq matnli qidiruv yechimini ishlab chiqdi :

1. Ko'p tilli qidiruvni qo'llab-quvvatlaydi va kichik o'lchamli `gzip` qadoqlashdan keyin qidiruv yadrosining o'lchami `6.9KB` ga teng (taqqoslash uchun `lunrjs` o'lchami `25KB` ga teng).
1. `indexedb` ga asoslangan teskari indeksni yarating, u kamroq xotirani egallaydi va tezdir.
1. Hujjatlar qo'shilganda/o'zgartirilganda faqat qo'shilgan yoki o'zgartirilgan hujjatlar qayta indekslanadi, bu esa hisob-kitoblar miqdorini kamaytiradi.
1. Prefiks qidiruvini qo'llab-quvvatlaydi va foydalanuvchi yozish paytida real vaqtda qidiruv natijalarini ko'rsatishi mumkin.
1. Oflayn rejimda mavjud

Quyida `i18n.site` texnik amalga oshirish tafsilotlari batafsil tanishtiriladi.

## Ko'p Tilli So'zlarni Segmentatsiyalash

So'z segmentatsiyasi brauzerning mahalliy so'z segmentatsiyasidan `Intl.Segmenter` foydalanadi va barcha asosiy brauzerlar ushbu interfeysni qo'llab-quvvatlaydi.

![](//p.3ti.site/1727667759.avif)

So'z segmentatsiyasi `coffeescript` kodi quyidagicha

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

ichida:

* `/\p{P}/` - tinish belgilariga mos keladigan oddiy ibora. Muayyan mos belgilarga quyidagilar kiradi: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` , chunki `Firefox` brauzer so'zini segmentatsiyasi `. ` segmentlamaydi.</li>


## Indeks Yaratish

`IndexedDB` da 5 ta ob'ektni saqlash jadvali yaratilgan :

* `word` : id -
* `doc` : id - Hujjat url - Hujjat versiya raqami
* `docWord` : id - id hujjat massivi
* `prefix` - id : massivi
* `rindex` : Word id - Document id : qator raqamlari

Hujjat `url` massivini va `ver` versiya raqamini kiriting va hujjat `doc` jadvalda mavjudligini qidiring. Agar u mavjud bo'lmasa, teskari indeks yarating. Shu bilan birga, o'tkazilmagan hujjatlar uchun teskari indeksni olib tashlang.

Shu tarzda, qo'shimcha indeksatsiyaga erishish mumkin va hisoblash miqdori kamayadi.

Oldindan o'zaro aloqada, birinchi marta yuklashda kechikishning oldini olish uchun indeksning yuklanish jarayoni ko'rsatilishi mumkin "Yagona animatsiyaga asoslangan taraqqiyot paneli progress + Sof css amalga oshirish" [Inglizcha](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Xitoy](//juejin.cn/post/7413586285954154522) .

### IndexedDB Yuqori Bir Vaqtda Yozish

Loyiha asinxron inkapsulyatsiya asosida [idb](//www.npmjs.com/package/idb) IndexedDB

IndexedDB o'qish va yozish asinxrondir. Indeks yaratishda hujjatlar indeks yaratish uchun bir vaqtda yuklanadi.

Raqobatchi yozish natijasida maʼlumotlarning qisman yoʻqotilishiga yoʻl qoʻymaslik uchun siz quyidagi `coffeescript` kodiga murojaat qilishingiz va raqobatdosh yozishlarni toʻxtatish uchun oʻqish va yozish oʻrtasida `ing` kesh qoʻshishingiz mumkin.

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

## Aniqlik Va Eslab Qolish

Qidiruv avvalo foydalanuvchi kiritgan kalit so‘zlarni segmentlarga ajratadi.

So'zni segmentlashdan keyin `N` so'z bor deb hisoblang, natijalarni qaytarishda avval barcha kalit so'zlarni o'z ichiga olgan natijalar, keyin esa `N-1` , `N-2` ,..., `1` ta kalit so'zdan iborat natijalar qaytariladi.

Ko'rsatilgan qidiruv natijalari birinchi navbatda so'rovning to'g'riligini ta'minlaydi va keyin yuklangan natijalar (ko'proq yuklash tugmasini bosing) eslab qolish tezligini ta'minlaydi.

![](//p.3ti.site/1727684564.avif)

## Talab Bo'yicha Yuklash

Javob tezligini oshirish uchun qidiruv talab bo'yicha yuklashni amalga oshirish uchun `yield` generatoridan foydalanadi va `limit` safar natija so'ralganda qaytariladi.

Esda tutingki, har safar `yield` dan keyin yana qidirganingizda, `IndexedDB` so'rovi tranzaksiyasini qayta ochishingiz kerak.

## Prefiks Real Vaqtda Qidiruv

Foydalanuvchi yozayotganda qidiruv natijalarini ko'rsatish uchun, masalan, `wor` kiritilganda, `words` va `work` kabi `wor` prefiksli so'zlar ko'rsatiladi.

![](//p.3ti.site/1727684944.avif)

Qidiruv yadrosi so'z segmentatsiyasidan keyingi so'nggi so'z uchun `prefix` jadvalidan foydalanib, u bilan prefikslangan barcha so'zlarni topadi va ketma-ketlikda qidiradi.

Tebranishga qarshi funksiya `debounce` foydalanuvchi kiritish qidiruvlarini tetiklash chastotasini kamaytirish va hisoblash miqdorini kamaytirish uchun front-end shovqinida ham qo'llaniladi (quyidagicha amalga oshiriladi).

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Oflayn Rejimda Mavjud

Indeks jadvali asl matnni saqlamaydi, faqat so'zlarni saqlaydi, bu esa saqlash hajmini kamaytiradi.

Qidiruv natijalarini ajratib ko'rsatish asl matnni qayta yuklashni talab qiladi va `service worker` ga mos kelsa, takroriy tarmoq so'rovlarini oldini oladi.

Shu bilan birga, `service worker` barcha maqolalarni keshlashi sababli, foydalanuvchi qidiruvni amalga oshirgandan so'ng, butun veb-sayt, shu jumladan qidiruv, oflayn rejimda mavjud bo'ladi.

## MarkDown Hujjatlarini Optimallashtirish

`i18n.site` ning sof front-end qidiruv yechimi `MarkDown` hujjat uchun optimallashtirilgan.

Qidiruv natijalarini ko'rsatishda bo'lim nomi ko'rsatiladi va bosilganda bo'lim navigatsiya qilinadi.

![](//p.3ti.site/1727686552.avif)

## Xulosa Qiling

Inverted to'liq matnli qidiruv faqat old tomonda amalga oshiriladi, server talab qilinmaydi. Hujjatlar va shaxsiy bloglar kabi kichik va o'rta veb-saytlar uchun juda mos keladi.

`i18n.site` Ochiq manbali o'z-o'zidan ishlab chiqilgan sof oldingi qidiruv, kichik o'lchamli va tezkor javob, hozirgi sof front-end to'liq matnli qidiruvning kamchiliklarini hal qiladi va foydalanuvchi tajribasini yaxshilaydi.