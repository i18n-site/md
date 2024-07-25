```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Enregistrer mosali ya service après refresh makasi
    https://stackoverflow.com/questions/51597231/komisa-mosali-ya-mosala-nsima-kozongisa makasi
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
