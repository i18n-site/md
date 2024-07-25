```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Hojjetaa tajaajilaa erga hard refresh godhanii booda galmeessi
    https://stackoverflow.com/questions/51597231/hojjetaa-tajaajila-galmee-erga-cimsee-haaromfame
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
