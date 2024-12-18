---

brief: |
  i18n.site вече поддържа пълнотекстово търсене без сървър.

  Тази статия представя внедряването на чиста технология за търсене на пълен текст в предния край, включително обърнат индекс, изграден от IndexedDB, търсене с префикс, оптимизиране на сегментиране на думи и многоезична поддръжка.

  В сравнение със съществуващите решения, пълнотекстовото търсене в предния край на i18n.site е малко по размер и бързо, подходящо за малки и средни по размер уебсайтове, като документи и блогове, и е достъпно офлайн.

---

# Чисто Инвертирано Пълнотекстово Търсене В Предния Край

## Последователност

След няколко седмици разработка, [i18n.site](//i18n.site) (чисто статичен markdown multilingualtranslation & инструмент за изграждане на уебсайтове) вече поддържа чисто предно търсене в пълен текст.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Тази статия ще сподели техническата реализация на `i18n.site` търсене в предния край. Посетете [i18n.site](//i18n.site)

Код с отворен код : [Търсене на ядро](//github.com/i18n-site/ie/tree/main/qy) / [интерактивен интерфейс](//github.com/i18n-site/plugin/tree/main/qy)

## Преглед На Решения За Пълнотекстово Търсене Без Сървър

За малки и средни чисто статични уебсайтове като документи/лични блогове, изграждането на собствено изграден бекенд за пълнотекстово търсене е твърде тежко, а търсенето на пълен текст без услуги е по-честият избор.

Решенията за пълнотекстово търсене без сървър попадат в две големи категории:

Първо, подобни [algolia.com](//algolia.com) Доставчици на услуги за търсене на трети страни предоставят компоненти за преден край за пълнотекстово търсене.

Такива услуги изискват плащане въз основа на обема на търсене и често са недостъпни за потребителите в континентален Китай поради проблеми като съответствието на уебсайта.

Не може да се използва офлайн, не може да се използва в интранет и има големи ограничения. Тази статия не обсъжда много.

Второто е чисто търсене в пълен текст в предния край.

Понастоящем [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) търсения на пълен текст в предния `lunrjs` включват [lunrjs](//lunrjs.com)

`lunrjs` Има два начина за изграждане на индекси и двата имат свои собствени проблеми.

1. Предварително изградени индексни файлове

   Тъй като индексът съдържа думи от всички документи, той е голям по размер.
   Всеки път, когато се добавя или модифицира документ, трябва да се зареди нов индекс файл.
   Това ще увеличи времето за изчакване на потребителя и ще изразходва много честотна лента.

2. Зареждайте документи и създавайте индекси в движение

   Изграждането на индекс е изчислително интензивна задача. Повторното изграждане на индекса всеки път, когато имате достъп до него, ще доведе до очевидни забавяния и лошо потребителско изживяване.

---

В допълнение към `lunrjs` има някои други решения за търсене в пълен текст, като :

[fusejs](//www.fusejs.io) , изчислете приликата между низовете за търсене.

Производителността на това решение е изключително лоша и не може да се използва за търсене в пълен текст (вижте [Fuse.js Дългата заявка отнема повече от 10 секунди, как да я оптимизирате?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , използвайте филтър Bloom за търсене, не може да се използва за търсене с префикс (например въведете `goo` , търсете `good` , `google` ) и не може да постигне подобен ефект на автоматично завършване.

Поради недостатъците на съществуващите решения, `i18n.site` разработи ново решение за пълнотекстово търсене в предния край, което има следните характеристики :

1. Поддържа многоезично търсене и е с малък размер на ядрото за търсене след пакетиране `gzip` е `6.9KB` (за сравнение размерът на `lunrjs` е `25KB` ).
1. Създайте обърнат индекс на базата на `indexedb` , който заема по-малко памет и е бърз.
1. Когато се добавят/променят документи, само добавените или променени документи се индексират отново, намалявайки количеството на изчисленията.
1. Поддържа префиксно търсене и може да показва резултатите от търсенето в реално време, докато потребителят въвежда.
1. Наличен офлайн

По-долу ще бъдат представени подробно `i18n.site` подробности за техническото изпълнение.

## Многоезична Сегментация На Думи

Сегментирането на думи използва собственото сегментиране на думи на браузъра `Intl.Segmenter` и всички основни браузъри поддържат този интерфейс.

![](//p.3ti.site/1727667759.avif)

Кодът за сегментиране на думата `coffeescript` е както следва

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

в:

* `/\p{P}/` е регулярен израз, който съответства на препинателни знаци. Специфичните съвпадащи символи включват: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` е, защото `Firefox` сегментирането на думата на браузъра не сегментира `. ` .</li>


## Изграждане На Индекс

5 таблици за съхранение на обекти бяха създадени в `IndexedDB` :

* `word` : id - думи
* `doc` : id - Документ url - Номер на версията на документа
* `docWord` : Масив от документ id - дума id
* `prefix` : Масив от префикс - дума id
* `rindex` : Word id - Документ id : Масив от номера на редове

Предайте масива от документ `url` и номер на версия `ver` и потърсете дали документът съществува в таблица `doc` Ако не съществува, създайте обърнат индекс. В същото време премахнете обърнатия индекс за онези документи, които не са предадени.

По този начин може да се постигне постепенно индексиране и да се намали количеството на изчислението.

При взаимодействие в предния край лентата на напредъка на зареждането на индекса може да се покаже, за да се избегне забавянето при зареждане за първи път Вижте „Лента на напредъка с анимация, базирана на единична progress + Чиста css реализация“ [английски](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [китайски](//juejin.cn/post/7413586285954154522) .

### IndexedDB Високо Едновременно Писане

Проектът е [idb](//www.npmjs.com/package/idb) на базата на асинхронно капсулиране на IndexedDB

Четенията и записите в IndexedDB са асинхронни. Когато създавате индекс, документите ще се зареждат едновременно, за да се създаде индексът.

За да избегнете частична загуба на данни, причинена от конкурентно писане, можете да се обърнете към кода `coffeescript` по-долу и да добавите `ing` кеш между четене и запис, за да прихванете конкурентни записи.

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

## Прецизност И Припомняне

Търсенето първо ще сегментира ключовите думи, въведени от потребителя.

Да приемем, че има `N` думи след сегментирането на думата. Когато се връщат резултати, първо ще бъдат върнати резултати, съдържащи всички ключови думи, а след това ще бъдат върнати резултати, съдържащи `N-1` , `N-2` ,..., `1` ключови думи.

Резултатите от търсенето, показани първо, гарантират точността на заявката, а резултатите, заредени впоследствие (щракнете върху бутона за зареждане на още), гарантират степента на извикване.

![](//p.3ti.site/1727684564.avif)

## Зареждане При Поискване

За да се подобри скоростта на отговор, търсенето използва генератора `yield` за прилагане на зареждане при поискване и се връща `limit` път, когато се поиска резултат.

Имайте предвид, че всеки път, когато търсите отново след `yield` , трябва да отворите отново транзакция на заявка от `IndexedDB` .

## Префиксно Търсене В Реално Време

За да се покажат резултатите от търсенето, докато потребителят въвежда, например, когато се въведе `wor` , се показват думи с префикс `wor` като `words` и `work` .

![](//p.3ti.site/1727684944.avif)

Ядрото за търсене ще използва таблицата `prefix` за последната дума след сегментирането на думата, за да намери всички думи с префикс и да търси последователно.

Функция против разклащане `debounce` също се използва при взаимодействие в предния край (внедрено по следния начин), за да се намали честотата на потребителско въвеждане, задействащо търсения, и да се намали обемът на изчисленията.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Наличен Офлайн

Индексната таблица не съхранява оригиналния текст, а само думите, което намалява обема на паметта.

Открояването на резултатите от търсенето изисква презареждане на оригиналния текст и съвпадението на `service worker` може да избегне повтарящи се мрежови заявки.

В същото време, тъй като `service worker` кешира всички статии, след като потребителят извърши търсене, целият уебсайт, включително търсенето, е достъпен офлайн.

## Оптимизиране На Дисплея На MarkDown Документи

Решението за чисто предно търсене на `i18n.site` е оптимизирано за `MarkDown` документи.

При показване на резултатите от търсенето ще се покаже името на главата и главата ще бъде навигирана при щракване.

![](//p.3ti.site/1727686552.avif)

## Обобщете

Обърнато търсене в пълен текст, реализирано само в предния край, не е необходим сървър. Той е много подходящ за малки и средни уебсайтове като документи и лични блогове.

`i18n.site` Самостоятелно разработено чисто предно търсене с отворен код, малко по размер и с бърза реакция, решава недостатъците на текущото чисто предно търсене в пълен текст и осигурява по-добро потребителско изживяване.