# انسٽال ڪريو &

## انسٽال ڪريو

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ٺاھ جوڙ ٽوڪن

`i18n.site` ۾ `i18` ترجمي وارو اوزار آھي مھرباني ڪري [ھتي ڪلڪ ڪريو حوالو ڏيڻ لاءِ `i18` دستاويز کي ترتيب ڏيڻ لاءِ](/i18/use) .

## ڊيمو پروجيڪٽ

اچو ته هڪ ڊيمو پروجيڪٽ سان شروع ڪريون اهو سکڻ لاءِ ته ڪيئن استعمال ڪجي `i18n.site` .

اسان پهريون ڀيرو ڊيمو مخزن کي ڪلون ڪيو ۽ هيٺ ڏنل حڪم کي هلائيندا آهيون:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

مکيه زمين چين ۾ صارفين ڪري سگهن ٿا:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` ڪوڊ بيس ڪلون جي ڊاريڪٽري جو نالو `md` هجڻ گھرجي `docker` سان مقامي ڏيک کي آسان ڪرڻ لاءِ.

### ترجمو

پهرين، `md` ڊاريڪٽري داخل ڪريو ۽ `i18n.site` هلائي، جيڪو `en` کان `zh` تائين ترجمو ڪندو.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

ھلڻ کان پوء، ترجمو ۽ ڪيش فائلون ٺاھيو ويندو مھرباني ڪري انھن کي `md` `git add . ` ۾ شامل ڪرڻ لاء.

### مقامي ڏيک

انسٽال ڪريو ۽ شروع ڪريو `docker` ( `MAC` استعمال ڪندڙ سفارش ڪري ٿو [orbstack](https://orbstack.dev) جيئن رن ٽائم `docker` لاءِ).

پوء، `docker` ڊاريڪٽري داخل ڪريو ۽ `./up.sh` هلائي، ۽ پوء مقامي طور تي ڏيک ڪرڻ لاء [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">