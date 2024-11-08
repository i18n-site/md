---

brief: |
  i18n.site теперь поддерживает бессерверный полнотекстовый поиск.

  В этой статье представлена реализация чистой технологии полнотекстового поиска, включая инвертированный индекс, созданный IndexedDB, префиксный поиск, оптимизацию сегментации слов и поддержку нескольких языков.

  По сравнению с существующими решениями, чисто интерфейсный полнотекстовый поиск i18n.site имеет небольшой размер и скорость, подходит для небольших и средних веб-сайтов, таких как документы и блоги, и доступен в автономном режиме.

---

# Чистый Интерфейс, Инвертированный Полнотекстовый Поиск

## Последовательность

После нескольких недель разработки [i18n.site](//i18n.site) (чисто статический инструмент markdown multilingualtranslation & для создания веб-сайтов) теперь поддерживает полнотекстовый поиск в чистом интерфейсе.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

В этой статье будет представлена техническая реализация полнотекстового поиска в интерфейсе `i18n.site` Посетите [i18n.site](//i18n.site) чтобы ощутить эффект поиска.

Код с открытым исходным кодом : [Поиск ядра](//github.com/i18n-site/ie/tree/main/qy) / [интерактивный интерфейс!](//github.com/i18n-site/plugin/tree/main/qy)

## Обзор Решений Для Бессерверного Полнотекстового Поиска

Для небольших и средних чисто статических веб-сайтов, таких как документы/личные блоги, создание самостоятельного механизма полнотекстового поиска слишком сложно, и более распространенным выбором является полнотекстовый поиск без обслуживания.

Решения для бессерверного полнотекстового поиска делятся на две большие категории:

Во-первых, аналогичные [algolia.com](//algolia.com) сторонние поставщики услуг поиска предоставляют интерфейсные компоненты для полнотекстового поиска.

Такие услуги требуют оплаты в зависимости от объема поиска и часто недоступны для пользователей в материковом Китае из-за таких проблем, как соответствие веб-сайта требованиям.

Его нельзя использовать в автономном режиме, нельзя использовать в интрасети и он имеет большие ограничения. В этой статье многого не обсуждается.

Второй — чистый полнотекстовый поиск во внешнем интерфейсе.

В настоящее время обычный полнотекстовый поиск во внешнем интерфейсе включает [lunrjs](//lunrjs.com) и [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (на основе `lunrjs` вторичной разработки).

`lunrjs` Есть два способа построения индексов, и у обоих есть свои проблемы.

1. Готовые индексные файлы

   Поскольку индекс содержит слова из всех документов, он имеет большой размер.
   При каждом добавлении или изменении документа необходимо загрузить новый индексный файл.
   Это увеличит время ожидания пользователя и потребует много трафика.

2. Загружайте документы и создавайте индексы на лету

   Создание индекса — это трудоемкая задача. Перестроение индекса каждый раз, когда вы к нему обращаетесь, приведет к очевидным задержкам и ухудшению взаимодействия с пользователем.

---

Помимо `lunrjs` , существуют и другие решения для полнотекстового поиска, например :

[fusejs](//www.fusejs.io) , вычислите сходство между строками для поиска.

Производительность этого решения крайне низкая и его нельзя использовать для полнотекстового поиска (см [Fuse.js длинный запрос занимает более 10 секунд, как его оптимизировать?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , используйте фильтр Блума для поиска, не может использоваться для поиска по префиксу (например, введите `goo` , поиск `good` , `google` ) и не может обеспечить аналогичный эффект автоматического завершения.

Из-за недостатков существующих решений `i18n.site` разработала новое чисто интерфейсное решение для полнотекстового поиска, которое имеет следующие характеристики :

1. Поддерживает многоязычный поиск и имеет небольшой размер. Размер поискового ядра после упаковки `gzip` равен `6.9KB` (для сравнения, размер `lunrjs` равен `25KB` ).
1. Создайте инвертированный индекс на основе `indexedb` , который занимает меньше памяти и работает быстрее.
1. При добавлении/изменении документов переиндексируются только добавленные или измененные документы, что сокращает объем вычислений.
1. Поддерживает поиск по префиксам и может отображать результаты поиска в режиме реального времени, пока пользователь печатает.
1. Доступно офлайн

Ниже будут подробно описаны `i18n.site` деталей технической реализации.

## Многоязычная Сегментация Слов

Сегментация слов использует собственную сегментацию слов браузера `Intl.Segmenter` , и все основные браузеры поддерживают этот интерфейс.

![](//p.3ti.site/1727667759.avif)

Код сегментации слова `coffeescript` выглядит следующим образом:

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

* `/\p{P}/` — регулярное выражение, соответствующее знакам препинания. К специальным символам соответствия относятся: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` — это потому, что сегментация `Firefox` слова браузера не сегментирует `. ` .</li>


## Построение Индекса

5 таблиц хранения объектов были созданы за `IndexedDB` :

* `word` : id - слов
* `doc` : id - Номер документа Номер версии документа url -
* `docWord` : Массив документа id - слово id
* `prefix` : Массив префикса - слова id
* `rindex` : Word id - Документ id : Массив номеров строк

Передайте массив документа `url` и номера версии `ver` и найдите, существует ли документ в таблице `doc` Если он не существует, создайте инвертированный индекс. При этом удалите инвертированный индекс для тех документов, которые не были переданы.

Таким образом, может быть достигнута дополнительная индексация и уменьшен объем вычислений.

При внешнем взаимодействии может отображаться индикатор выполнения индекса, чтобы избежать задержки при первой загрузке. См. «Индикатор выполнения с анимацией на основе одной progress + Pure css реализации» [English](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinese](//juejin.cn/post/7413586285954154522) .

### IndexedDB С Высоким Уровнем Одновременной Записи

Проект [idb](//www.npmjs.com/package/idb) на основе асинхронной инкапсуляции IndexedDB

Чтение и запись IndexedDB являются асинхронными. При создании индекса документы будут загружаться одновременно для создания индекса.

Чтобы избежать частичной потери данных, вызванной конкурентной записью, вы можете обратиться к приведенному ниже коду `coffeescript` и добавить кеш `ing` между чтением и записью для перехвата конкурирующих записей.

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

## Точность И Отзыв

Поиск сначала сегментирует ключевые слова, введенные пользователем.

Предположим, что после сегментации слов `N` слов. При возврате результатов сначала будут возвращены результаты, содержащие все ключевые слова, а затем результаты, содержащие `N-1` , `N-2` ,..., `1` ключевых слова.

Результаты поиска, отображаемые первыми, обеспечивают точность запроса, а результаты, загружаемые впоследствии (нажмите кнопку «Загрузить еще»), обеспечивают скорость отзыва.

![](//p.3ti.site/1727684564.avif)

## Загрузка По Требованию

Чтобы повысить скорость ответа, поиск использует генератор `yield` для реализации загрузки по требованию и возвращает результат `limit` раз, когда запрашивается результат.

Обратите внимание, что каждый раз, когда вы выполняете повторный поиск после `yield` , вам необходимо повторно открыть транзакцию запроса `IndexedDB` .

## Префиксный Поиск В Реальном Времени

Чтобы отобразить результаты поиска, пока пользователь печатает, например, когда вводится `wor` , отображаются слова с префиксом `wor` такие как `words` и `work` .

![](//p.3ti.site/1727684944.avif)

Ядро поиска будет использовать таблицу `prefix` для последнего слова после сегментации слова, чтобы найти все слова с его префиксом и выполнить поиск последовательно.

Функция защиты от сотрясений `debounce` также используется во внешнем взаимодействии (реализована следующим образом) для уменьшения частоты ввода данных пользователем, запускающих поиск, и уменьшения объема вычислений.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Доступно Офлайн

В индексной таблице не хранится исходный текст, а только слова, что уменьшает объем памяти.

Для выделения результатов поиска требуется перезагрузка исходного текста, а соответствие `service worker` позволяет избежать повторных сетевых запросов.

В то же время, поскольку `service worker` кэширует все статьи, как только пользователь выполняет поиск, весь веб-сайт, включая поиск, становится доступен в автономном режиме.

## Оптимизация Отображения Документов MarkDown

`i18n.site` чисто интерфейсное решение для поиска оптимизировано для `MarkDown` документов.

При отображении результатов поиска будет отображаться название главы, и при нажатии на нее будет осуществляться навигация.

![](//p.3ti.site/1727686552.avif)

## Подвести Итог

Инвертированный полнотекстовый поиск реализован исключительно во внешнем интерфейсе, сервер не требуется. Он очень подходит для небольших и средних веб-сайтов, таких как документы и личные блоги.

`i18n.site` Собственный интерфейсный поиск с открытым исходным кодом, небольшой размер и быстрый отклик, устраняет недостатки текущего полнотекстового поиска с чистым интерфейсом и обеспечивает лучший пользовательский опыт.