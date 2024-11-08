# ڪسٽمائيز نيويگيشن

اچو ته [i18n-demo.github.io](//i18n-demo.github.io) سائيٽ کي مثال طور بيان ڪريون ته نيويگيشن ڪيئن ڪجي.

![](https://p.3ti.site/1731036697.avif)

مٿين انگن اکرن ۾ ڄاڻايل علائقن سان لاڳاپيل فائلون هن ريت آهن:

1. کاٻي [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. ساڄي [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) هڪ ٽيمپليٽ ٻولي آهي جيڪا `HTML` جي ٺاهي ٿي.

[➔ گرامر سکڻ لاءِ هتي ڪلڪ ڪريو pug](https://pugjs.org)

فارميٽ اسٽرنگ `${I18N.sponsor}` فائل ۾ استعمال ڪيو ويندو آهي بين الاقواميت کي لاڳو ڪرڻ لاء، ۽ ان جي مواد سان لاڳاپيل متن سان مٽايو [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ماخذ ٻولي ڊاريڪٽري ۾.

**`pug` ۾ `css` ۽ `js` نه لکو** ، ٻي صورت ۾ غلطي ٿيندي.

طرزون `css` ۾ لکيل آهن، ۽ رابطي کي ويب اجزاء ٺاهڻ سان حاصل ڪيو ويندو آهي.

هتي، نيويگيشن بار جي انداز سان لاڳاپيل آهي : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)