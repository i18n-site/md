# FAQ

## ترجمي جون لائينون شامل ڪرڻ يا ختم ڪرڻ، نتيجي ۾ ترجمي ۾ مونجهارو

> [!WARN]
> ياد رکو، **ترجمي ۾ لائينن جو تعداد اصل متن جي لائنن سان ملندڙ ھجڻ گھرجي** .
> يعني ترجمي کي دستي طور تي ترتيب ڏيڻ وقت، **ترجمي جون لائينون شامل يا ختم نه ڪريو** ، ٻي صورت ۾ ترجمي ۽ اصل متن جي وچ ۾ نقشي جو تعلق خراب ٿي ويندو.

جيڪڏهن توهان غلطيءَ سان ڪا لڪير شامل يا حذف ڪري ڇڏيو، مونجهارو پيدا ڪري، مهرباني ڪري ترميم ڪرڻ کان اڳ ترجمي کي ورجن ۾ بحال ڪريو، `i18` ترجمو ٻيهر هلايو، ۽ صحيح ميپنگ کي ٻيهر ڪيش ڪريو.

ترجمي ۽ اصل متن جي وچ ۾ ميپنگ ٽوڪن سان جڙيل آهي [i18n.site/token](//i18n.site/token) `.i18h/hash` حذف ڪريو ۽ ٻيهر ترجمو ڪريو ته جيئن ترجمي ۾ سڀ مينوئل ايڊجسٽمينٽ گم ٿي وڃن).

## `YAML` لنڪ `HTML` : `Markdown` تبديل ٿيڻ کان ڪيئن بچجي

ترجمي لاءِ `YAML` جو قدر `MarkDown` سمجهيو ويندو آهي.

ڪڏهن ڪڏهن `HTML` → `MarkDown` کان تبديلي اهو ناهي جيڪو اسان چاهيون ٿا، جهڙوڪ `<a href="/">Home</a>` `[Home](/)` ۾ تبديل ڪيو پيو وڃي.

`a` ٽيگ ۾ `href` کان سواءِ ٻيو ڪو به وصف شامل ڪرڻ، جھڙوڪ `<a class="A" href="/">Home</a>` ، ھن تبديليءَ کان بچي سگھي ٿو.

## هيٺ ڏنل `./i18n/hash` فائل تڪرار

تڪراري فائلن کي ختم ڪريو ۽ `i18` ترجمو ٻيهر ڪريو.