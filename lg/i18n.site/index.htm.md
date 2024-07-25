```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Wewandiise omukozi w'obuweereza oluvannyuma lw'okuzza obuggya ennyo
    https://stackoverflow.com/questions/51597231/wandiisa-omukozi-mu-empeereza-oluvannyuma-okuzza obuggya-obuzibu
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
