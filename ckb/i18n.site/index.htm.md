```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    تۆمارکردنی کارمەندی خزمەتگوزاری دوای هارد فرێش
    https://stackoverflow.com/questions/51597231/تۆمارکردنی-کارمەندی-خزمەتگوزاری-دوا-بە-سەختی-نوێکردنەوە
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
