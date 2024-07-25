```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Ŋlɔ subɔsubɔdɔwɔla ŋkɔ le dzudzɔxɔxɔledɔme sesẽ megbe
    https://stackoverflow.com/questions/51597231/ŋlɔ-subɔsubɔ-dɔwɔla-le-nu-sesẽ-gbugbɔgawɔ megbe
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
