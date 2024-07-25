```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Iyandikishe umukozi wa serivisi nyuma yo kugarura ubuyanja
    https://ibisobanuro.com
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
